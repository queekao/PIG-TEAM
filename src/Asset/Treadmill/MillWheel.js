/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, {useRef, useEffect} from "react";
import {useGLTF, useAnimations} from "@react-three/drei";

export default function Model({...props}) {
  const group = useRef();
  const {nodes, materials, animations} = useGLTF(
    "https://firebasestorage.googleapis.com/v0/b/pig-project-ea5ab.appspot.com/o/treadmill%2FmillWheel.glb?alt=media&token=a262b75c-6466-4bc1-8000-29007eee2045"
  );
  const {actions} = useAnimations(animations, group);
  useEffect(() => {
    actions.Animation16.play();
    actions.Animation16.repetitions = 1;
    actions.Animation16.clampWhenFinished = true;
  }, [actions]);
  return (
    <group ref={group} {...props} dispose={null}>
      <group>
        <mesh
          name="wheel"
          geometry={nodes.wheel.geometry}
          material={materials.Material}
        />
      </group>
    </group>
  );
}

useGLTF.preload(
  "https://firebasestorage.googleapis.com/v0/b/pig-project-ea5ab.appspot.com/o/treadmill%2FmillWheel.glb?alt=media&token=a262b75c-6466-4bc1-8000-29007eee2045"
);
