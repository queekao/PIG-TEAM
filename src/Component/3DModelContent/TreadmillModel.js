import {PresentationControls} from "@react-three/drei";
import React, {Suspense} from "react";
import TreadMill from "../../Asset/Treadmill/Treadmill";
import MillArmrest from "../../Asset/Treadmill/MillArmrest";
import MillBottomShell from "../../Asset/Treadmill/MillBottomShell";
import MillBracket from "../../Asset/Treadmill/MillBracket";
import MillIronSheets from "../../Asset/Treadmill/MillIronSheets";
import MillMovementAxis from "../../Asset/Treadmill/MillMovementAxis";
import MillMovementIronSheets from "../../Asset/Treadmill/MillMovementIronSheets";
import MillPanel from "../../Asset/Treadmill/MillPanel";
import MillPanelShell from "../../Asset/Treadmill/MillPanelShell";
import MillRunningBelt from "../../Asset/Treadmill/MillRunningBelt";
import MillShell from "../../Asset/Treadmill/MillShell";
import MillSpring from "../../Asset/Treadmill/MillSpring";
import MillSpringShaft from "../../Asset/Treadmill/MillSpringShaft";
import MillSupportPlate from "../../Asset/Treadmill/MillSupportPlate";
import MillSupportShaft from "../../Asset/Treadmill/MillSupportShaft";
import MillWheel from "../../Asset/Treadmill/MillWheel";
const TreadmillModel = (props) => {
  return (
    <Suspense fallback={null}>
      {props.showDetail ? (
        <React.Fragment>
          <MillArmrest />
          <MillBottomShell position={[0, 1.5, 1]} />
          <MillBracket />
          <MillIronSheets />
          <MillMovementAxis />
          <MillMovementIronSheets />
          <MillPanel />
          <MillPanelShell />
          <MillRunningBelt />
          <MillShell />
          <MillSpring />
          <MillSpringShaft />
          <MillSupportPlate />
          <MillSupportShaft />
          <MillWheel />
        </React.Fragment>
      ) : (
        <PresentationControls
          config={{mass: 2, tension: 4000, friction: 100}}
          snap={{mass: 6, tension: 4000, friction: 100}}
          rotation={[0, 1, 0]}
          polar={[-Math.PI / 1, Math.PI / 0.5]}
          azimuth={[-Math.PI * 2, Math.PI * 4]}
        >
          <TreadMill position={[0, -0.8, 0]} />
        </PresentationControls>
      )}
      {/* <OrbitControls /> */}
    </Suspense>
  );
};
export default TreadmillModel;
