import { useRef, useMemo, useState, useEffect } from 'react'
import { Box } from '@react-three/drei'
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
}

// Book component with worn corners
export function Book(props: BookProps) {
    const meshRef = useRef<THREE.Group>(null!)
    const [textures, setTextures] = useState<{
      colorTexture: THREE.CanvasTexture;
      bumpTexture: THREE.CanvasTexture;
    } | null>(null)

    // Load the cover texture using proxy
    const coverTexture = useMemo(() => {
      if (!props.data.book.image?.url) {
        const loader = new THREE.TextureLoader();
        const texture = loader.load('/cover.jpeg');
        texture.colorSpace = THREE.SRGBColorSpace;
        return texture;
      }

      const loader = new THREE.TextureLoader();
      const proxiedUrl = config.getProxiedImageUrl(props.data.book.image.url);
      const texture = loader.load(proxiedUrl);
      texture.colorSpace = THREE.SRGBColorSpace;
      return texture;
    }, [props.data.book.image?.url]);
  
    const pageCount = getPageCount(props.data)
    const baseWidth = calculateBaseWidth(pageCount)
    const height = baseWidth * ((props.data.book.image?.height ?? 200) / (props.data.book.image?.width ?? 100))
    const depth = calculateBookDepth(pageCount)
  
    // Create materials
    const transparentMaterial = useMemo(() => createTransparentMaterial(), [])    
    const coverMaterial = useMemo(() => createCoverMaterial(props.data.book.image?.color || '#FFFFFF'), [props.data.book.image?.color])
    const frontCoverMaterial = useMemo(() => createCoverMaterial(props.data.book.image?.color || '#FFFFFF', coverTexture), [props.data.book.image?.color, coverTexture])
    const spineMaterial = useMemo(() => createSpineMaterial(props.data.book.image?.color || '#FFFFFF', textures), [textures, props.data.book.image?.color])
    const pageMaterial = useMemo(() => createPageMaterial(), [])
  
    useEffect(() => {
      const loadTextures = async () => {
        const title = props.data.book.title || 'Untitled';
        
        const newTextures = await createSpineTextures(
          title,
          props.data.book.image?.color || '#FFFFFF',
          depth,
          height
        );
        setTextures(newTextures);
      };
      loadTextures();
    }, [props.data.book.title, props.data.book.image?.color, depth, height]);
  
    // Don't render the book until spine textures are loaded
    if (!textures) return null
  
    const BookContent = () => (
      <group 
        ref={meshRef}
        onPointerOver={() => !props.isPhysicsEnabled && props.onHover(true)}
        onPointerOut={() => !props.isPhysicsEnabled && props.onHover(false)}
     >
        {/* Outer book cover */}
        <Box args={[baseWidth + 0.01, height + 0.01, depth + 0.01]} position={[0, depth/2, 0]} castShadow>
          <primitive attach="material-0" object={transparentMaterial} />
          <primitive attach="material-1" object={spineMaterial} />
          <primitive attach="material-2" object={transparentMaterial} />
          <primitive attach="material-3" object={transparentMaterial} />
          <primitive attach="material-4" object={frontCoverMaterial} />
          <primitive attach="material-5" object={coverMaterial} />
        </Box>
        
        {/* Inner book pages */}
        <Box args={[baseWidth, height, depth]} position={[-0.0009, depth/2, 0]} castShadow>
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
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        colliders="cuboid"
          restitution={0}
        friction={0.4}
      >
        <BookContent />
      </RigidBody>
      )
    }
  
    return (
      <group
        position={props.position}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      >
        <BookContent />
      </group>
    )
  }