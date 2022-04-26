/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef,useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/Treadmill/millSpringShaft.glb')
  const { actions } = useAnimations(animations, group)
  useEffect(() => {
    actions.Animation13.play();
    actions.Animation13.repetitions = 1;
    actions.Animation13.clampWhenFinished = true;
  }, [actions]);
  return (
    <group ref={group} {...props} dispose={null}>
      <group>
        <mesh name="springShaft" geometry={nodes.springShaft.geometry} material={materials.軸灰} />
      </group>
    </group>
  )
}

useGLTF.preload('/Treadmill/millSpringShaft.glb')
