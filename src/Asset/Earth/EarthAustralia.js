/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, {useEffect, useRef} from "react";
import {useGLTF, useAnimations} from "@react-three/drei";

export default function Model({...props}) {
  const group = useRef();
  const {nodes, materials, animations} = useGLTF("/Earth/earthAustralia.glb");
  const {actions} = useAnimations(animations, group);
  useEffect(() => {
    // AnimationAction[0].play()
    // actions.Animation.AnimationAction.play()
    actions.Animation3.play();
    actions.Animation3.repetitions = 1;
    actions.Animation3.clampWhenFinished = true;
  }, [actions]);
  return (
    <group ref={group} {...props} dispose={null}>
      <group>
        <mesh
          name="Australia"
          geometry={nodes.Australia.geometry}
          material={materials["材質.002"]}
          rotation={[-Math.PI, 1, -Math.PI]}
          scale={1.95}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/Earth/earthAustralia.glb");
// https://firebasestorage.googleapis.com/v0/b/pig-project-ea5ab.appspot.com/o/earth%2FearthAustralia.glb?alt=media&token=ad5f0382-e2be-418e-a18e-66e800e84dcf