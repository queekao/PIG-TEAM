import {PresentationControls} from "@react-three/drei";
import React, {Suspense} from "react";
import Shoes from "../../Asset/Shoes/ShoesPIGtwo";
import AnimAir from "../../Asset/Shoes/AnimAir";
import AminOutSole from "../../Asset/Shoes/AnimOutsole";
import AnimPig3d from "../../Asset/Shoes/AnimPig3d";
import AnimPig3d2 from "../../Asset/Shoes/AnimPig3d2";
import AnimSock from "../../Asset/Shoes/AnimSock";
import AnimSockTrim from "../../Asset/Shoes/AnimSockTrim";
import AnimSockTrimLogo from "../../Asset/Shoes/AnimSockTrimLogo";
// import {useProgress} from "@react-three/drei";
// export const LoadModel = () => {
//   const {progress, loaded} = useProgress();
//   console.log(progress);
//   return (
//     <div className="centered">
//       {progress} % {loaded}
//     </div>
//   );
// };
const ShoesModel = (props) => {
  return (
    <Suspense fallback={null}>
      {props.showDetail ? (
        <React.Fragment>
          <AnimAir />
          <AminOutSole />
          <AnimPig3d />
          <AnimPig3d2 />
          <AnimSock />
          <AnimSockTrim />
          <AnimSockTrimLogo />
        </React.Fragment>
      ) : (
        <PresentationControls
          config={{mass: 2, tension: 4000, friction: 100}}
          snap={{mass: 6, tension: 4000, friction: 100}}
          rotation={[0, 1, 0]}
          polar={[-Math.PI / 1, Math.PI / 0.5]}
          azimuth={[-Math.PI * 2, Math.PI * 4]}
        >
          <Shoes />
        </PresentationControls>
      )}
      {/* <OrbitControls /> */}
    </Suspense>
  );
};
export default ShoesModel;
