/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/Shoes/AnimPig3d.glb");
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
        name="PIG3D"
        position={[-0.21, 1.21, -0.75]}
        rotation={[1.14, 0.38, -0.61]}
        scale={[0.04, 0.04, 0.04]}
      >
        <mesh
          geometry={nodes.Plane001.geometry}
          material={materials["Material.007"]}
        />
        <mesh
          geometry={nodes.Plane001_1.geometry}
          material={materials["Material.011"]}
        />
        <mesh
          geometry={nodes.Plane001_2.geometry}
          material={materials["Material.009"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/Shoes/AnimPig3d.glb");