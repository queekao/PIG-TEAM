/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from "@react-three/fiber";

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/RubberTube/rubberTube.glb')
  useFrame(()=>{group.current.rotation.y += 0.005})
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.ropeY1.geometry} material={materials.材質} />
      <mesh geometry={nodes.圓柱體002.geometry} material={materials['材質.004']} />
      <mesh geometry={nodes.圓柱體002_1.geometry} material={materials['材質.002']} />
      <mesh geometry={nodes.rubberY1.geometry} material={materials['材質.007']} />
      <mesh geometry={nodes.ropeY2.geometry} material={materials.材質} />
      <mesh geometry={nodes.圓柱體004.geometry} material={materials['材質.004']} />
      <mesh geometry={nodes.圓柱體004_1.geometry} material={materials['材質.002']} />
      <mesh geometry={nodes.rubberY2.geometry} material={materials['材質.007']} />
      <mesh geometry={nodes.yellow.geometry} material={materials['材質.001']} />
      <mesh geometry={nodes.ropeR1.geometry} material={materials.材質} />
      <mesh geometry={nodes.圓柱體014.geometry} material={materials['材質.004']} />
      <mesh geometry={nodes.圓柱體014_1.geometry} material={materials['材質.002']} />
      <mesh geometry={nodes.rubberR1.geometry} material={materials['材質.007']} />
      <mesh geometry={nodes.ropeR2.geometry} material={materials.材質} />
      <mesh geometry={nodes.圓柱體016.geometry} material={materials['材質.004']} />
      <mesh geometry={nodes.圓柱體016_1.geometry} material={materials['材質.002']} />
      <mesh geometry={nodes.rubberR2.geometry} material={materials['材質.007']} />
      <mesh geometry={nodes.red.geometry} material={materials['材質.003']} />
      <mesh geometry={nodes.ropeB1.geometry} material={materials.材質} />
      <mesh geometry={nodes.圓柱體018.geometry} material={materials['材質.004']} />
      <mesh geometry={nodes.圓柱體018_1.geometry} material={materials['材質.002']} />
      <mesh geometry={nodes.rubberB1.geometry} material={materials['材質.007']} />
      <mesh geometry={nodes.ropeB2.geometry} material={materials.材質} />
      <mesh geometry={nodes.圓柱體020.geometry} material={materials['材質.004']} />
      <mesh geometry={nodes.圓柱體020_1.geometry} material={materials['材質.002']} />
      <mesh geometry={nodes.rubberB2.geometry} material={materials['材質.007']} />
      <mesh geometry={nodes.blue.geometry} material={materials['材質.006']} />
    </group>
  )
}

useGLTF.preload('/RubberTube/rubberTube.glb')
