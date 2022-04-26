import RubberTube from "../../Asset/RubberTube/RubberTube";
import TubeGrip1 from "../../Asset/RubberTube/TubeGrip1";
import TubeGrip2 from "../../Asset/RubberTube/TubeGrip2";
import TubeRope1 from "../../Asset/RubberTube/TubeRope1";
import TubeRope2 from "../../Asset/RubberTube/TubeRope2";
import TubeRed from "../../Asset/RubberTube/TubeRed";
import TubeBlue from "../../Asset/RubberTube/TubeBlue";
import TubeRubber1 from "../../Asset/RubberTube/TubeRubber1";
import TubeRubber2 from "../../Asset/RubberTube/TubeRubber2";
import TubeYellow from "../../Asset/RubberTube/TubeYellow";

import {PresentationControls} from "@react-three/drei";
import React, {Suspense} from "react";
const RubberTubeModel = (props) => {
  return (
    <Suspense fallback={null}>
      {props.showDetail ? (
        <React.Fragment>
          <TubeBlue/>
          <TubeGrip1/>
          <TubeGrip2/>
          <TubeRed/>
          <TubeRope1/>
          <TubeRope2/>
          <TubeRubber1/>
          <TubeRubber2/>
          <TubeYellow/>
        </React.Fragment>
      ) : (
        <PresentationControls
          config={{mass: 2, tension: 4000, friction: 100}}
          snap={{mass: 6, tension: 4000, friction: 100}}
          rotation={[0.3, 1, 0]}
          polar={[-Math.PI / 1, Math.PI / 0.5]}
          azimuth={[-Math.PI * 2, Math.PI * 4]}
        >
          <RubberTube />
        </PresentationControls>
      )}
      {/* <OrbitControls /> */}
    </Suspense>
  );
};
export default RubberTubeModel;
