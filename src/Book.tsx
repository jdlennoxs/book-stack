import React, { useRef, useMemo, useState, useEffect } from 'react'
import { Box, useTexture } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'
import * as THREE from 'three'
import { createSpineTextures } from './utils/createSpineTexture'
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
  book: {
    user_added: boolean
    title: string
    image: {
      url: string
      color: string
      height: number
      width: number
    } | null
    pages: number | null
    images: never[]
    editions: {
      pages: number | null
    }[]
    cached_contributors: {
      author: {
        id: number
        slug: string
        name: string
        image: {
          id?: number
          url?: string
          color?: string
          width?: number
          height?: number
          color_name?: string
        } | null
      }
      contribution: string | null
    }[]
  }
}

type BookProps = {
  position: [number, number, number]
  data: BookData
  onHover: (isHovered: boolean) => void
  isPhysicsEnabled: boolean
  onLoad?: () => void
}

// Book component with worn corners
function BookComponent(props: BookProps) {
  const meshRef = useRef<THREE.Group>(null!)
  const isLoadedRef = useRef(false); // Ref to track if onLoad has been called for this instance
  const [textures, setTextures] = useState<{
    colorTexture: THREE.CanvasTexture;
  } | null>(null)
  const [detailedTexturesLoaded, setDetailedTexturesLoaded] = useState(false); // State for lazy loading

  // Load the cover texture using proxy and useTexture
  const coverUrl = useMemo(() => {
    return props.data.book.image?.url
      ? config.getProxiedImageUrl(props.data.book.image.url)
      : '/cover.jpeg';
  }, [props.data.book.image?.url]);

  const coverTexture = useTexture(coverUrl);
  useEffect(() => {
    if (coverTexture) {
      coverTexture.colorSpace = THREE.SRGBColorSpace;
    }
  }, [coverTexture]);

  const pageCount = getPageCount(props.data)
  const baseWidth = calculateBaseWidth(pageCount)
  const depth = calculateBookDepth(pageCount)

  const height = baseWidth * ((props.data.book.image?.height ?? 200) / (props.data.book.image?.width ?? 100))

  // Create materials
  const transparentMaterial = useMemo(() => createTransparentMaterial(), [])
  const coverMaterial = useMemo(() => createCoverMaterial(props.data.book.image?.color || '#FFFFFF'), [props.data.book.image?.color])
  const frontCoverMaterial = useMemo(() => createCoverMaterial(props.data.book.image?.color || '#FFFFFF', coverTexture), [props.data.book.image?.color, coverTexture])
  const spineMaterial = useMemo(() => createSpineMaterial(props.data.book.image?.color || '#FFFFFF', textures), [textures, props.data.book.image?.color])
  const pageMaterial = useMemo(() => createPageMaterial(), [])

  useEffect(() => {
    // Use the ref to ensure onLoad is called only once per instance lifetime
    const tryCallOnLoad = () => {
      if (!isLoadedRef.current) {
        props.onLoad?.();
        isLoadedRef.current = true; // Set the ref
      }
    };

    // Reset the ref if the component re-runs the effect due to book data changing (unlikely but safe)
    // This depends on whether a book instance can be reused for different data.
    // If key prop in App.tsx ensures unique instance per book, this reset is less critical.
    // For now, let's assume instance maps to one book load lifecycle.

    const loadTextures = async () => {
      const title = props.data.book.title || 'Untitled';

      try {
        // Simulate potential delay for texture generation/loading if needed for testing
        // await new Promise(resolve => setTimeout(resolve, Math.random() * 100));

        const newTextures = await createSpineTextures(
          title,
          props.data.book.image?.color || '#FFFFFF',
          depth,
          height
        );
        setTextures(newTextures);
        setDetailedTexturesLoaded(true);
        tryCallOnLoad(); // Call onLoad on success
      } catch (error) {
        console.error("Failed to create spine textures:", error);
        setDetailedTexturesLoaded(true); // Still mark as loaded to avoid blocking
        tryCallOnLoad(); // Call onLoad on error
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
        setDetailedTexturesLoaded(true);
        tryCallOnLoad();
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
  }, [props.data.book.title, props.data.book.image?.color, depth, height, coverTexture, props.onLoad]);

  // Don't render anything until textures are considered loaded
  if (!detailedTexturesLoaded) {
    return null;
  }

  const BookContent = () => (
    <group
      rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      ref={meshRef}
      onPointerOver={() => props.onHover(true)}
      onPointerOut={() => props.onHover(false)}
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
      <Box args={[baseWidth, height, depth]} position={[-0.0009, depth / 2, 0]} castShadow>
        <primitive attach="material-0" object={pageMaterial} />
        <primitive attach="material-1" object={pageMaterial} />
        <primitive attach="material-2" object={pageMaterial} />
        <primitive attach="material-3" object={pageMaterial} />
        <primitive attach="material-4" object={pageMaterial} />
        <primitive attach="material-5" object={pageMaterial} />
      </Box>
    </group>
  )

  if (props.isPhysicsEnabled) {
    return (
      <RigidBody
        position={props.position}
        colliders="cuboid"
        restitution={0}
        friction={0.4}
      >
        <BookContent />
      </RigidBody>
    )
  } else {
    return (
      <group position={props.position}>
        <BookContent />
      </group>
    )
  }
}

export const Book = React.memo(BookComponent);