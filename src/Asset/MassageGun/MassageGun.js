/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, {useRef} from "react";
import {useGLTF} from "@react-three/drei";
import {useFrame} from "@react-three/fiber";

export default function Model({...props}) {
  const group = useRef();
  const {nodes, materials} = useGLTF(
    "https://firebasestorage.googleapis.com/v0/b/pig-project-ea5ab.appspot.com/o/massageGun%2FmassageGun.glb?alt=media&token=37e92114-20b3-433c-9386-516f3e7d4b71"
  );
  useFrame(() => {
    group.current.rotation.y += 0.005;
  });
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.圓柱體001.geometry} material={materials.材質} />
      <mesh
        geometry={nodes.圓柱體001_1.geometry}
        material={materials["材質.004"]}
      />
      <mesh geometry={nodes.grip.geometry} material={materials.材質} />
      <mesh
        geometry={nodes.pedestal.geometry}
        material={materials["材質.003"]}
      />
      <mesh geometry={nodes.panel.geometry} material={materials["材質.001"]} />
      <mesh
        geometry={nodes.topCover.geometry}
        material={materials["材質.003"]}
      />
      <mesh
        geometry={nodes.copperRing.geometry}
        material={materials["材質.002"]}
      />
      <mesh geometry={nodes.bottomCover.geometry} material={materials.材質} />
      <group position={[0.6, 0, 0]} rotation={[0, 0, 1.2]}>
        <mesh
          geometry={nodes.圓柱體.geometry}
          material={materials["材質.006"]}
        />
        <mesh
          geometry={nodes.圓柱體_1.geometry}
          material={materials["材質.005"]}
        />
      </group>
      <group position={[0.4, 0, 0]} rotation={[0, 0, 0.7]}>
        <mesh
          geometry={nodes.圓柱體010.geometry}
          material={materials["材質.006"]}
        />
        <mesh
          geometry={nodes.圓柱體010_1.geometry}
          material={materials["材質.005"]}
        />
      </group>
      <mesh
        geometry={nodes.圓柱體011.geometry}
        material={materials["材質.006"]}
      />
      <mesh
        geometry={nodes.圓柱體011_1.geometry}
        material={materials["材質.005"]}
      />
      <group position={[0.08, 0.08, 0]} rotation={[0, 0, 0.08]}>
        <mesh
          geometry={nodes.圓柱體008.geometry}
          material={materials["材質.006"]}
        />
        <mesh
          geometry={nodes.圓柱體008_1.geometry}
          material={materials["材質.005"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload(
  "https://firebasestorage.googleapis.com/v0/b/pig-project-ea5ab.appspot.com/o/massageGun%2FmassageGun.glb?alt=media&token=37e92114-20b3-433c-9386-516f3e7d4b71"
);
