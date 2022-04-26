/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from "@react-three/fiber";

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/GreenBike/greenBike.glb')
  useFrame(()=>{group.current.rotation.y += 0.005})
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.axle.geometry} material={materials['材質.001']} />
      <mesh geometry={nodes.gripBracket.geometry} material={materials['材質.008']} />
      <mesh geometry={nodes.bracket.geometry} material={materials['材質.001']} />
      <mesh geometry={nodes.立方體002.geometry} material={materials['材質.007']} />
      <mesh geometry={nodes.立方體002_1.geometry} material={materials['材質.011']} />
      <mesh geometry={nodes.ironSheets.geometry} material={materials['材質.001']} />
      <mesh geometry={nodes.cushionStand.geometry} material={materials['材質.001']} />
      <mesh geometry={nodes.body.geometry} material={materials['材質.003']} />
      <mesh geometry={nodes.cushion.geometry} material={materials['材質.012']} />
      <mesh geometry={nodes.圓柱體003.geometry} material={materials['材質.010']} />
      <mesh geometry={nodes.圓柱體003_1.geometry} material={materials['材質.006']} />
      <mesh geometry={nodes.grip.geometry} material={materials['材質.012']} />
      <mesh geometry={nodes.pedal.geometry} material={materials['材質.005']} />
      <mesh geometry={nodes.crank.geometry} material={materials['材質.008']} position={[-0.69, 0.17, 0.01]} />
      <mesh geometry={nodes.pedalShaft.geometry} material={materials['材質.001']} />
    </group>
  )
}

useGLTF.preload('/GreenBike/greenBike.glb')
