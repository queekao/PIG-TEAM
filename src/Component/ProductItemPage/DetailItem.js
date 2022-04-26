import classes from "./DetailItem.module.css";
import React, {useCallback, useState} from "react";
import useGetDocs from "../../hooks/use-getDocs";
import LoadingSpinner from "../../UI/LoadingSpinner";
const DetailItem = (props) => {
  ///accpet a props contain "item id" and return the specific item
  const [showDetail, setShowDetail] = useState(false);
  const {data, isLoading} = useGetDocs("ProductDetailItem");
  const toggleShowDetail = () => {
    setShowDetail(true);
  };
  const toggleHideDetail = () => {
    setShowDetail(false);
  };
  console.log("DetailItem");
  if (isLoading) {
    return (
      <li key={props.id} className={`${classes.item} ${props.className}`}>
        <LoadingSpinner />
      </li>
    );
  }
  return data.map((item) => {
    const pickItem = () => {
      ///For getting the specify detailItem////
      ////Shoes//////////////
      if (props.id === "air")
        return [
          item.Shoes.air.id,
          item.Shoes.air.title,
          item.Shoes.air.content,
          item.Shoes.air.image,
        ];
      if (props.id === "logo")
        return [
          item.Shoes.logo.id,
          item.Shoes.logo.title,
          item.Shoes.logo.content,
          item.Shoes.logo.image,
        ];
      if (props.id === "sole")
        return [
          item.Shoes.sole.id,
          item.Shoes.sole.title,
          item.Shoes.sole.content,
          item.Shoes.sole.image,
        ];
      if (props.id === "reflectiveStrip")
        return [
          item.Shoes.reflectiveStrip.id,
          item.Shoes.reflectiveStrip.title,
          item.Shoes.reflectiveStrip.content,
          item.Shoes.reflectiveStrip.image,
        ];
      if (props.id === "brioche")
        return [
          item.Shoes.brioche.id,
          item.Shoes.brioche.title,
          item.Shoes.brioche.content,
          item.Shoes.brioche.image,
        ];
      if (props.id === "upper")
        return [
          item.Shoes.upper.id,
          item.Shoes.upper.title,
          item.Shoes.upper.content,
          item.Shoes.upper.image,
        ];
      ////////////////////
      ////Green Bike//////////////
      if (props.id === "bikeCushion")
        return [
          item.GreenBike.cushion.id,
          item.GreenBike.cushion.title,
          item.GreenBike.cushion.content,
          item.GreenBike.cushion.image,
        ];
      if (props.id === "bikeFlyWheel")
        return [
          item.GreenBike.flywheel.id,
          item.GreenBike.flywheel.title,
          item.GreenBike.flywheel.content,
          item.GreenBike.flywheel.image,
        ];
      if (props.id === "bikeGrip")
        return [
          item.GreenBike.grip.id,
          item.GreenBike.grip.title,
          item.GreenBike.grip.content,
          item.GreenBike.grip.image,
        ];
      if (props.id === "bikePedal")
        return [
          item.GreenBike.pedal.id,
          item.GreenBike.pedal.title,
          item.GreenBike.pedal.content,
          item.GreenBike.pedal.image,
        ];
      if (props.id === "bikeSkeleton")
        return [
          item.GreenBike.skeleton.id,
          item.GreenBike.skeleton.title,
          item.GreenBike.skeleton.content,
          item.GreenBike.skeleton.image,
        ];
      //////////////////
      ////MassageGun//////////////
      if (props.id === "gunCoolingOlderPlate")
        return [
          item.MassageGun.CoolingOlderPlate.id,
          item.MassageGun.CoolingOlderPlate.title,
          item.MassageGun.CoolingOlderPlate.content,
          item.MassageGun.CoolingOlderPlate.image,
        ];
      if (props.id === "gunGrip")
        return [
          item.MassageGun.grip.id,
          item.MassageGun.grip.title,
          item.MassageGun.grip.content,
          item.MassageGun.grip.image,
        ];
      if (props.id === "gunHead")
        return [
          item.MassageGun.head.id,
          item.MassageGun.head.title,
          item.MassageGun.head.content,
          item.MassageGun.head.image,
        ];
      if (props.id === "gunMainBody")
        return [
          item.MassageGun.mainBody.id,
          item.MassageGun.mainBody.title,
          item.MassageGun.mainBody.content,
          item.MassageGun.mainBody.image,
        ];
      if (props.id === "gunMetalBottom")
        return [
          item.MassageGun.metalBottom.id,
          item.MassageGun.metalBottom.title,
          item.MassageGun.metalBottom.content,
          item.MassageGun.metalBottom.image,
        ];
      ///////////////////
      ////////Rubber Tube////////////
      if (props.id === "tubeBuckle")
        return [
          item.RubberTube.buckle.id,
          item.RubberTube.buckle.title,
          item.RubberTube.buckle.content,
          item.RubberTube.buckle.image,
        ];
      if (props.id === "tubeGrip")
        return [
          item.RubberTube.grip.id,
          item.RubberTube.grip.title,
          item.RubberTube.grip.content,
          item.RubberTube.grip.image,
        ];
      if (props.id === "tube")
        return [
          item.RubberTube.tube.id,
          item.RubberTube.tube.title,
          item.RubberTube.tube.content,
          item.RubberTube.tube.image,
        ];
      ///////////////////
      ////////Treadmill////////////
      if (props.id === "millCoolingOlderPlate")
        return [
          item.TreadMill.CoolingOlderPlate.id,
          item.TreadMill.CoolingOlderPlate.title,
          item.TreadMill.CoolingOlderPlate.content,
          item.TreadMill.CoolingOlderPlate.image,
        ];
      if (props.id === "millGrip")
        return [
          item.TreadMill.grip.id,
          item.TreadMill.grip.title,
          item.TreadMill.grip.content,
          item.TreadMill.grip.image,
        ];
      if (props.id === "millMainBody")
        return [
          item.TreadMill.mainBody.id,
          item.TreadMill.mainBody.title,
          item.TreadMill.mainBody.content,
          item.TreadMill.mainBody.image,
        ];
      if (props.id === "millMetalBottom")
        return [
          item.TreadMill.metalBottom.id,
          item.TreadMill.metalBottom.title,
          item.TreadMill.metalBottom.content,
          item.TreadMill.metalBottom.image,
        ];
      if (props.id === "millShockAbsorbers")
        return [
          item.TreadMill.shockAbsorbers.id,
          item.TreadMill.shockAbsorbers.title,
          item.TreadMill.shockAbsorbers.content,
          item.TreadMill.shockAbsorbers.image,
        ];
      if (props.id === "millSkeleton")
        return [
          item.TreadMill.skeleton.id,
          item.TreadMill.skeleton.title,
          item.TreadMill.skeleton.content,
          item.TreadMill.skeleton.image,
        ];
      ///////////////////
    };
    return (
      <li key={pickItem()[0]} className={`${classes.item} ${props.className}`}>
        {pickItem()[1] && <h3 onClick={toggleShowDetail}>{pickItem()[1]}</h3>}
        {showDetail && (
          <div className={classes.content}>
            {pickItem()[2] && <p>{pickItem()[2]}</p>}
            {pickItem()[3] && <img src={pickItem()[3]} alt="company" />}
            <span onClick={toggleHideDetail}>back ⏪</span>
          </div>
        )}
      </li>
    );
  });
};
export default React.memo(DetailItem);
