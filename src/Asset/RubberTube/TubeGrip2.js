/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef,useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/RubberTube/tubeGrip2.glb')
  const { actions } = useAnimations(animations, group)
  useEffect(() => {
    actions.Animation3.play();
    actions.Animation3.repetitions = 1;
    actions.Animation3.clampWhenFinished = true;
  }, [actions]);
  return (
    <group ref={group} {...props} dispose={null}>
      <group>
        <group name="grip2">
          <mesh geometry={nodes.圓柱體004.geometry} material={materials['材質.004']} />
          <mesh geometry={nodes.圓柱體004_1.geometry} material={materials['材質.002']} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/RubberTube/tubeGrip2.glb')
