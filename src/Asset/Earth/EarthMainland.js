/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, {useEffect, useRef} from "react";
import {useGLTF, useAnimations} from "@react-three/drei";

export default function Model({...props}) {
  const group = useRef();
  const {nodes, materials, animations} = useGLTF(
    "https://firebasestorage.googleapis.com/v0/b/pig-project-ea5ab.appspot.com/o/earth%2FearthMainland.glb?alt=media&token=5b9665ac-46a7-4c28-a0a5-1a0ada452cbc"
  );
  const {actions} = useAnimations(animations, group);
  useEffect(() => {
    // AnimationAction[0].play()
    // actions.Animation.AnimationAction.play()
    actions.Animation4.play();
    actions.Animation4.repetitions = 1;
    actions.Animation4.clampWhenFinished = true;
  }, [actions]);
  return (
    <group ref={group} {...props} dispose={null}>
      <group>
        <mesh
          name="mainland"
          geometry={nodes.mainland.geometry}
          material={materials["材質.002"]}
          rotation={[-Math.PI, 1, -Math.PI]}
          scale={1.95}
        />
      </group>
    </group>
  );
}

useGLTF.preload(
  "https://firebasestorage.googleapis.com/v0/b/pig-project-ea5ab.appspot.com/o/earth%2FearthMainland.glb?alt=media&token=5b9665ac-46a7-4c28-a0a5-1a0ada452cbc"
);
