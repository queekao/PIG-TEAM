/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef,useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/GreenBike/bikeCushion.glb')
  const { actions } = useAnimations(animations, group)
  useEffect(() => {
    actions.Animation4.play();
    actions.Animation4.repetitions = 1;
    actions.Animation4.clampWhenFinished = true;
  }, [actions]);
  return (
    <group ref={group} {...props} dispose={null}>
      <group>
        <mesh name="cushion" geometry={nodes.cushion.geometry} material={materials['材質.012']} />
      </group>
    </group>
  )
}

useGLTF.preload('/GreenBike/bikeCushion.glb')
