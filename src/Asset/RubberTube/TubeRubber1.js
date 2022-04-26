/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef ,useEffect} from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/RubberTube/tubeRubber1.glb')
  const { actions } = useAnimations(animations, group)
  useEffect(() => {
    actions.Animation7.play();
    actions.Animation7.repetitions = 1;
    actions.Animation7.clampWhenFinished = true;
  }, [actions]);
  return (
    <group ref={group} {...props} dispose={null}>
      <group>
        <mesh name="rubber1" geometry={nodes.rubber1.geometry} material={materials.rubber} />
      </group>
    </group>
  )
}

useGLTF.preload('/RubberTube/tubeRubber1.glb')