/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, {useRef, useEffect} from "react";
import {useGLTF, useAnimations} from "@react-three/drei";

export default function Model({...props}) {
  const group = useRef();
  const {nodes, materials, animations} = useGLTF(
    "https://firebasestorage.googleapis.com/v0/b/pig-project-ea5ab.appspot.com/o/RubberTube%2FtubeGrip1.glb?alt=media&token=d78b963e-d377-4e03-8cbd-4adc2c1f564e"
  );
  const {actions} = useAnimations(animations, group);
  useEffect(() => {
    actions.Animation2.play();
    actions.Animation2.repetitions = 1;
    actions.Animation2.clampWhenFinished = true;
  }, [actions]);
  return (
    <group ref={group} {...props} dispose={null}>
      <group>
        <group name="grip1">
          <mesh
            geometry={nodes.圓柱體002.geometry}
            material={materials["材質.004"]}
          />
          <mesh
            geometry={nodes.圓柱體002_1.geometry}
            material={materials["材質.002"]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(
  "https://firebasestorage.googleapis.com/v0/b/pig-project-ea5ab.appspot.com/o/RubberTube%2FtubeGrip1.glb?alt=media&token=d78b963e-d377-4e03-8cbd-4adc2c1f564e"
);
