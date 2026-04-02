import React, { useRef, useMemo, useState, useEffect } from 'react'
import { Box, useTexture } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'
import * as THREE from 'three'
import { createSpineTextures } from './utils/createSpineTexture'
import { createPlaceholderTexture } from './utils/createPlaceholderTexture'
import { calculateBaseWidth, calculateBookDepth } from './utils/bookDimensions'
import { getPageCount } from './utils/bookUtils'
import {
  createTransparentMaterial,
  createCoverMaterial,
  createSpineMaterial,
  createPageMaterial
} from './materials/bookMaterials'
import { config } from './config'

export type BookData = {
  date_added: string
  read_count: number
  updated_at: string
  rating?: number
  reading_format?: string
  book: {
    user_added: boolean
    title: string
    id?: number
    image: {
      id?: number
      url: string
      color: string
      height: number
      width: number
      color_name?: string
    } | null
    pages: number | null
    images: never[]
    cached_contributors: string | null
  }
}

type BookProps = {
  position: [number, number, number]
  data: BookData
  onHover: (isHovered: boolean) => void
  onClick?: () => void
  isPhysicsEnabled: boolean
  onLoad?: () => void
  index?: number
}

function BookComponent({ position, data, onHover, onClick, isPhysicsEnabled, onLoad, index = 0 }: BookProps) {
  const meshRef = useRef<THREE.Group>(null!)
  const isLoadedRef = useRef(false); // Ref to track if onLoad has been called for this instance
  const [textures, setTextures] = useState<{
    colorTexture: THREE.CanvasTexture;
  } | null>(null)
  const [detailedTexturesLoaded, setDetailedTexturesLoaded] = useState(false); // State for lazy loading

  // Load the cover texture using proxy and useTexture
  const coverUrl = data.book.image?.url
    ? config.getProxiedImageUrl(data.book.image.url)
    : null;

  const rawCoverTexture = useTexture(coverUrl || '/default_cover.png');
  
  const placeholderTexture = useMemo(() => {
    if (!coverUrl) {
      return createPlaceholderTexture(data.book.image?.color || '#4A5568');
    }
    return null;
  }, [coverUrl, data.book.image?.color]);

  const coverTexture = useMemo(() => {
    if (placeholderTexture) return placeholderTexture;
    if (!rawCoverTexture) return rawCoverTexture;
    const cloned = rawCoverTexture.clone();
    cloned.colorSpace = THREE.SRGBColorSpace;
    return cloned;
  }, [rawCoverTexture, placeholderTexture]);

  const pageCount = getPageCount(data)
  const baseWidth = calculateBaseWidth(pageCount)
  const depth = calculateBookDepth(pageCount)

  const height = baseWidth * ((data.book.image?.height ?? 200) / (data.book.image?.width ?? 100))

  // Create materials
  const transparentMaterial = useMemo(() => createTransparentMaterial(), [])
  const coverMaterial = useMemo(() => createCoverMaterial(data.book.image?.color || '#FFFFFF'), [data.book.image?.color])
  const frontCoverMaterial = useMemo(() => createCoverMaterial(data.book.image?.color || '#FFFFFF', coverTexture), [data.book.image?.color, coverTexture])
  const spineMaterial = useMemo(() => createSpineMaterial(data.book.image?.color || '#FFFFFF', textures), [textures, data.book.image?.color])
  const pageMaterial = useMemo(() => createPageMaterial(), [])

  useEffect(() => {
    // Use the ref to ensure onLoad is called only once per instance lifetime
    const tryCallOnLoad = () => {
      if (!isLoadedRef.current) {
        onLoad?.();
        isLoadedRef.current = true; // Set the ref
      }
    };

    // Reset the ref if the component re-runs the effect due to book data changing (unlikely but safe)
    // This depends on whether a book instance can be reused for different data.
    // If key prop in App.tsx ensures unique instance per book, this reset is less critical.
    // For now, let's assume instance maps to one book load lifecycle.

    const loadTextures = async () => {
      const title = data.book.title || 'Untitled';

      // Stagger by index to avoid all books hammering the GPU/network at once
      // Each book waits a little longer before generating its spine texture
      const staggerDelay = index * 5
      if (staggerDelay > 0) {
        await new Promise(resolve => setTimeout(resolve, staggerDelay));
      }

      try {
        const newTextures = await createSpineTextures(
          title,
          data.book.image?.color || '#FFFFFF',
          depth,
          height
        );
        setTextures(newTextures);
        setDetailedTexturesLoaded(true);
        tryCallOnLoad();
      } catch (error) {
        console.error("Failed to create spine textures:", error);
        setDetailedTexturesLoaded(true);
        tryCallOnLoad();
      }
    };

    // Check if already loaded (e.g., by a previous run of this effect)
    if (isLoadedRef.current) {
      return; // Don't do anything if onLoad was already called
    }

    if (coverTexture) {
      if (coverTexture.image) {
        loadTextures();
      } else {
        setTimeout(() => {
          setDetailedTexturesLoaded(true);
          tryCallOnLoad();
        }, 0);
      }
    } else {
      const timer = setTimeout(() => {
        // Check both detailedTexturesLoaded state AND the ref in timeout
        if (!detailedTexturesLoaded && !isLoadedRef.current) {
          setDetailedTexturesLoaded(true);
          tryCallOnLoad();
        }
      }, 10);
      return () => clearTimeout(timer);
    }
  }, [data.book.title, data.book.image?.color, depth, height, coverTexture, onLoad, detailedTexturesLoaded]);


  const bookContentNode = (
    <group
      rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      ref={meshRef}
      onPointerOver={() => onHover(true)}
      onPointerOut={() => onHover(false)}
      onClick={(e) => {
        e.stopPropagation();
        if (onClick) onClick();
      }}
    >
      {/* Outer book cover */}
      <Box args={[baseWidth + 0.01, height + 0.01, depth + 0.01]} position={[0, depth / 2, 0]} castShadow>
        <primitive attach="material-0" object={transparentMaterial} />
        <primitive attach="material-1" object={detailedTexturesLoaded && textures ? spineMaterial : coverMaterial} />
        <primitive attach="material-2" object={transparentMaterial} />
        <primitive attach="material-3" object={transparentMaterial} />
        <primitive attach="material-4" object={detailedTexturesLoaded && coverTexture ? frontCoverMaterial : coverMaterial} />
        <primitive attach="material-5" object={coverMaterial} />
      </Box>

      {/* Inner book pages */}
      <Box args={[baseWidth, height, depth]} position={[-0.0009, depth / 2, 0]}>
        <primitive attach="material-0" object={pageMaterial} />
        <primitive attach="material-1" object={pageMaterial} />
        <primitive attach="material-2" object={pageMaterial} />
        <primitive attach="material-3" object={pageMaterial} />
        <primitive attach="material-4" object={pageMaterial} />
        <primitive attach="material-5" object={pageMaterial} />
      </Box>
    </group>
  )

  if (isPhysicsEnabled) {
    return (
      <RigidBody
        position={position}
        colliders="cuboid"
        restitution={0.08}
        friction={0.15}
        linearDamping={0.1}
        angularDamping={0.15}
        canSleep={true}
      >
        {bookContentNode}
      </RigidBody>
    )
  } else {
    return (
      <group position={position}>
        {bookContentNode}
      </group>
    )
  }
}

export const Book = React.memo(BookComponent);