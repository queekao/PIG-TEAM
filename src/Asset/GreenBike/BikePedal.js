/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef,useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/GreenBike/bikePedal.glb')
  const { actions } = useAnimations(animations, group)
  useEffect(() => {
    actions.Animation8.play();
    actions.Animation8.repetitions = 1;
    actions.Animation8.clampWhenFinished = true;
  }, [actions]);
  return (
    <group ref={group} {...props} dispose={null}>
      <group>
        <mesh name="pedal" geometry={nodes.pedal.geometry} material={materials['材質.005']} />
      </group>
    </group>
  )
}

useGLTF.preload('/GreenBike/bikePedal.glb')