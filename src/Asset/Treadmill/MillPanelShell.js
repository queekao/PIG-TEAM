/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef ,useEffect} from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/Treadmill/millPanelShell.glb')
  const { actions } = useAnimations(animations, group)
  useEffect(() => {
    actions.Animation9.play();
    actions.Animation9.repetitions = 1;
    actions.Animation9.clampWhenFinished = true;
  }, [actions]);
  return (
    <group ref={group} {...props} dispose={null}>
      <group>
        <mesh name="panelShell" geometry={nodes.panelShell.geometry} material={materials['材質.002']} />
      </group>
    </group>
  )
}

useGLTF.preload('/Treadmill/millPanelShell.glb')