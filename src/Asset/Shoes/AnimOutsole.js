/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/Shoes/AnimOutsole.glb");
  const { actions } = useAnimations(animations, group);
  useEffect(() => {
    // AnimationAction[0].play()
    // actions.Animation.AnimationAction.play()
    actions.Animation.play();
    actions.Animation.repetitions = 1;
    actions.Animation.clampWhenFinished = true;
  }, [actions]);
  return (
    <group scale={1.2} ref={group} {...props} dispose={null}>
      <group
        name="outsole"
        position={[-0.67, 0.65, -1.4]}
        rotation={[0.07, -0.89, -0.95]}
        scale={[0.14, 0.14, 0.14]}
      >
        <mesh
          geometry={nodes.Circle.geometry}
          material={materials["Material.008"]}
        />
        <mesh
          geometry={nodes.Circle_1.geometry}
          material={materials["Material.005"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/Shoes/AnimOutsole.glb");