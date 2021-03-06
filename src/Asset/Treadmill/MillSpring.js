/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, {useRef, useEffect} from "react";
import {useGLTF, useAnimations} from "@react-three/drei";

export default function Model({...props}) {
  const group = useRef();
  const {nodes, materials, animations} = useGLTF(
    "https://firebasestorage.googleapis.com/v0/b/pig-project-ea5ab.appspot.com/o/treadmill%2FmillSpring.glb?alt=media&token=f786f1c1-2f94-43af-95b8-dc6a0712eab0"
  );
  const {actions} = useAnimations(animations, group);
  useEffect(() => {
    actions.Animation12.play();
    actions.Animation12.repetitions = 1;
    actions.Animation12.clampWhenFinished = true;
  }, [actions]);
  return (
    <group ref={group} {...props} dispose={null}>
      <group>
        <mesh
          name="spring"
          geometry={nodes.spring.geometry}
          material={materials.彈黃}
        />
      </group>
    </group>
  );
}

useGLTF.preload(
  "https://firebasestorage.googleapis.com/v0/b/pig-project-ea5ab.appspot.com/o/treadmill%2FmillSpring.glb?alt=media&token=f786f1c1-2f94-43af-95b8-dc6a0712eab0"
);
