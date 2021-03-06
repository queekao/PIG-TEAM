/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, {useRef} from "react";
import {useGLTF} from "@react-three/drei";

export default function Model({...props}) {
  const group = useRef();
  const {nodes, materials} = useGLTF(
    "https://firebasestorage.googleapis.com/v0/b/pig-project-ea5ab.appspot.com/o/massageGun%2FgunBody.glb?alt=media&token=3f2db9e6-54fc-4b0b-a585-c041ddf00497"
  );
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.圓柱體001.geometry} material={materials.材質} />
      <mesh
        geometry={nodes.圓柱體001_1.geometry}
        material={materials["材質.004"]}
      />
    </group>
  );
}

useGLTF.preload(
  "https://firebasestorage.googleapis.com/v0/b/pig-project-ea5ab.appspot.com/o/massageGun%2FgunBody.glb?alt=media&token=3f2db9e6-54fc-4b0b-a585-c041ddf00497"
);
