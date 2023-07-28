import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Decal, useTexture } from '@react-three/drei'
import CanvasLoader from '../Loader'

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl])
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow recieveShadow scale={2.75}>
        <circleGeometry />
        <meshStandardMaterial 
          color="#3c3350"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 0]}
          rotation={[2*Math.PI, 0,6.25]}
          scale={1.5}
          map={decal}
        />
      </mesh>
    </>
  )
}

const BallCanvas = ({ icon }) => { 
  return (
    <Canvas
      frameLoop="demand"
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <Ball imgUrl={icon}/>
      </Suspense>
    </Canvas>
  )
}

export default BallCanvas;