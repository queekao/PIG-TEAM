/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef,useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/Treadmill/millShell.glb')
  const { actions } = useAnimations(animations, group)
  useEffect(() => {
    actions.Animation11.play();
    actions.Animation11.repetitions = 1;
    actions.Animation11.clampWhenFinished = true;
  }, [actions]);
  return (
    <group ref={group} {...props} dispose={null}>
      <group>
        <group name="shell">
          <mesh geometry={nodes.立方體007.geometry} material={materials.材質} />
          <mesh geometry={nodes.立方體007_1.geometry} material={materials['材質.003']} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/Treadmill/millShell.glb')
