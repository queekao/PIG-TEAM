import MassageGun from "../../Asset/MassageGun/MassageGun";
import GunBody from "../../Asset/MassageGun/GunBody";
import GunBottomCover from "../../Asset/MassageGun/GunBottomCover";
import GunCopperRing from "../../Asset/MassageGun/GunCopperRing";
import GunGrip from "../../Asset/MassageGun/GunGrip";
import GunHead1 from "../../Asset/MassageGun/GunHead1";
import GunHead2 from "../../Asset/MassageGun/GunHead2";
import GunHead3 from "../../Asset/MassageGun/GunHead3";
import GunHead4 from "../../Asset/MassageGun/GunHead4";
import GunPanel from "../../Asset/MassageGun/GunPanel";
import GunPedestal from "../../Asset/MassageGun/GunPedestal";
import GunTopCover from "../../Asset/MassageGun/GunTopCover";

import {PresentationControls} from "@react-three/drei";
import React, {Suspense} from "react";
const MassageGunModel = (props) => {
  return (
    <Suspense fallback={"Page not found"}>
      {props.showDetail ? (
        <React.Fragment>
          <GunBody/>
          <GunBottomCover/>
          <GunCopperRing/>
          <GunGrip/>
          <GunHead1/>
          <GunHead2/>
          <GunHead3/>
          <GunHead4/>
          <GunPanel/>
          <GunPedestal/>
          <GunTopCover/>
        </React.Fragment>
      ) : (
        <PresentationControls
          config={{mass: 2, tension: 4000, friction: 100}}
          snap={{mass: 6, tension: 4000, friction: 100}}
          rotation={[0, 1, 0]}
          polar={[-Math.PI / 1, Math.PI / 0.5]}
          azimuth={[-Math.PI * 2, Math.PI * 4]}
        >
          <MassageGun />
        </PresentationControls>
      )}
      {/* <OrbitControls /> */}
    </Suspense>
  );
};
export default MassageGunModel;
