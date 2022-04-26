/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef ,useEffect} from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/Treadmill/millBottomShell.glb')
  const { actions } = useAnimations(animations, group)
  useEffect(() => {
    actions.Animation3.play();
    actions.Animation3.repetitions = 1;
    actions.Animation3.clampWhenFinished = true;
  }, [actions]);
  return (
    <group ref={group} {...props} dispose={null}>
      <group>
        <mesh name="bottomShell" geometry={nodes.bottomShell.geometry} material={materials['材質.001']} />
      </group>
    </group>
  )
}

useGLTF.preload('/Treadmill/millBottomShell.glb')