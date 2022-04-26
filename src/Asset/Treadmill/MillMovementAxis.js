/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef,useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/Treadmill/millMovementAxis.glb')
  const { actions } = useAnimations(animations, group)
  useEffect(() => {
    actions.Animation6.play();
    actions.Animation6.repetitions = 1;
    actions.Animation6.clampWhenFinished = true;
  }, [actions]);
  return (
    <group ref={group} {...props} dispose={null}>
      <group>
        <mesh name="movementAxis" geometry={nodes.movementAxis.geometry} material={materials.軸白} />
      </group>
    </group>
  )
}

useGLTF.preload('/Treadmill/millMovementAxis.glb')