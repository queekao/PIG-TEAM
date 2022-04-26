import EarthAmerica from "../../Asset/Earth/EarthAmerica";
import EarthAntarctica from "../../Asset/Earth/EarthAntarctica";
import EarthAustralia from "../../Asset/Earth/EarthAustralia";
import EarthMainland from "../../Asset/Earth/EarthMainland";
import EarthOcean from "../../Asset/Earth/EarthOcean";
import React, {Suspense} from "react";
import {OrbitControls} from "@react-three/drei";
const EarthModel = () => {
  return (
    <Suspense fallback={null}>
      <OrbitControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 1.75} enableZoom={false} />
      <EarthAmerica />
      <EarthAntarctica />
      <EarthAustralia />
      <EarthMainland />
      <EarthOcean />
    </Suspense>
  );
};
export default EarthModel;
