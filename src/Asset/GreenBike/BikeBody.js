/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/GreenBike/bikeBody.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.body.geometry} material={materials['材質.003']} />
    </group>
  )
}

useGLTF.preload('/GreenBike/bikeBody.glb')