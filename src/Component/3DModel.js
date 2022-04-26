import {ContactShadows} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";
import React, {Suspense} from "react";
import classes from "./3DModel.module.css";
import ShoesModel from "./3DModelContent/ShoesModel";
import EarthModel from "./3DModelContent/EarthModel";
import TreadmillModel from "./3DModelContent/TreadmillModel";
import GreenBike from "./3DModelContent/GreenBike";
import RubberTube from "./3DModelContent/RubberTube";
import MassageGun from "./3DModelContent/MassageGun";
import {useParams, useLocation} from "react-router-dom";
const Model = (props) => {
  const params = useParams();
  const location = useLocation();
  return (
    <Canvas className={classes.canvas}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[-1, 5, 3]} intensity={1.5} />
      <directionalLight position={[1, 0, -3]} intensity={0.2} />
      <Suspense fallback={null}>
        {params.productId === "shoes" && (
          <ShoesModel showDetail={props.showDetail} />
        )}
        {params.productId === "massage-gun" && (
          <MassageGun showDetail={props.showDetail} />
        )}
        {params.productId === "rubber-tube" && (
          <RubberTube showDetail={props.showDetail} />
        )}
        {params.productId === "treadmill" && (
          <TreadmillModel showDetail={props.showDetail} />
        )}
        {params.productId === "green-bike" && (
          <GreenBike showDetail={props.showDetail} />
        )}
        {location.pathname === "/home" && (
          <EarthModel showDetail={props.showDetail} />
        )}
        <ContactShadows
          rotateX={Math.PI / 2}
          position={[0, -0.99, 0]}
          opacity={0.25}
          width={10}
          height={10}
          blur={0.3}
          far={1}
        />
        {/* <OrbitControls /> */}
      </Suspense>
    </Canvas>
  );
};
export default Model;
