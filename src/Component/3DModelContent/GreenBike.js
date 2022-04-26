import GreenBike from "../../Asset/GreenBike/GreenBike";
import BikeAxle from "../../Asset/GreenBike/BikeAxle";
import BikeBody from "../../Asset/GreenBike/BikeBody";
import BikeBracket from "../../Asset/GreenBike/BikeBracket";
import BikeCushion from "../../Asset/GreenBike/BikeCushion";
import BikeCushionStand from "../../Asset/GreenBike/BikeCushionStand";
import BikeGrip from "../../Asset/GreenBike/BikeGrip";
import BikeGripBracket from "../../Asset/GreenBike/BikeGripBracket";
import BikePedal from "../../Asset/GreenBike/BikePedal";
import BikePedalShaft from "../../Asset/GreenBike/BikePedalShaft";
import BikeShell from "../../Asset/GreenBike/BikeShell";
import BikeWheel from "../../Asset/GreenBike/BikeWheel";
import {PresentationControls} from "@react-three/drei";
import React, {Suspense} from "react";
const GreenBikeModel = (props) => {
  return (
    <Suspense fallback={null}>
      {props.showDetail ? (
        <React.Fragment>
          <BikeAxle position={[0, -1.2, 0]} />
          <BikeBody position={[0, -1, 0]} />
          <BikeBracket position={[0, -1.2, 0]}/>
          <BikeCushion position={[0, -1.2, 0]}/>
          <BikeCushionStand position={[0, -1.2, 0]}/>
          <BikeGrip position={[0, -1.6, 0]}/>
          <BikeGripBracket position={[0, -1.2, 0]}/>
          <BikePedal position={[0, -1.2, 0]}/>
          <BikePedalShaft position={[0, -1.2, 0]}/>
          <BikeShell position={[0, -1.2, 0]}/>
          <BikeWheel position={[0, -1.2, 0]}/>
        </React.Fragment>
      ) : (
        <PresentationControls
          config={{mass: 2, tension: 4000, friction: 100}}
          snap={{mass: 6, tension: 4000, friction: 100}}
          rotation={[0, 1, 0]}
          polar={[-Math.PI / 1, Math.PI / 0.5]}
          azimuth={[-Math.PI * 2, Math.PI * 4]}
        >
          <GreenBike />
        </PresentationControls>
      )}
      {/* <OrbitControls /> */}
    </Suspense>
  );
};
export default GreenBikeModel;
