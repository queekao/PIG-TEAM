import React from "react";
import classes from "./ProductDetail.module.css";
import {useParams} from "react-router-dom";
import DetailItem from "./DetailItem";
const ProductDetail = () => {
  const params = useParams();
  return (
    <div className={classes.textGroup}>
      <ul className={classes.list}>
        {params.productId === "shoes" && (
          <React.Fragment>
            <DetailItem id="air" className={classes.item5} />
            <DetailItem id="reflectiveStrip" className={classes.item3} />
            <DetailItem id="sole" className={classes.item6} />
            <DetailItem id="upper" className={classes.item2} />
            <DetailItem id="logo" className={classes.item1} />
            <DetailItem id="brioche" className={classes.item4} />
          </React.Fragment>
        )}
        {params.productId === "green-bike" && (
          <React.Fragment>
            <DetailItem id="bikeCushion" className={classes.item5} />
            <DetailItem id="bikeFlyWheel" className={classes.item3} />
            <DetailItem id="bikeGrip" className={classes.item6} />
            <DetailItem id="bikePedal" className={classes.item2} />
            <DetailItem id="bikeSkeleton" className={classes.item1} />
          </React.Fragment>
        )}
        {params.productId === "massage-gun" && (
          <React.Fragment>
            <DetailItem id="gunCoolingOlderPlate" className={classes.item5} />
            <DetailItem id="gunGrip" className={classes.item3} />
            <DetailItem id="gunHead" className={classes.item6} />
            <DetailItem id="gunMainBody" className={classes.item2} />
            <DetailItem id="gunMetalBottom" className={classes.item1} />
          </React.Fragment>
        )}
        {params.productId === "rubber-tube" && (
          <React.Fragment>
            <DetailItem id="tubeBuckle" className={classes.item5} />
            <DetailItem id="tubeGrip" className={classes.item3} />
            <DetailItem id="tube" className={classes.item6} />
          </React.Fragment>
        )}
        {params.productId === "treadmill" && (
          <React.Fragment>
            <DetailItem id="millCoolingOlderPlate" className={classes.item5} />
            <DetailItem id="millGrip" className={classes.item3} />
            <DetailItem id="millMainBody" className={classes.item6} />
            <DetailItem id="millMetalBottom" className={classes.item2} />
            <DetailItem id="millShockAbsorbers" className={classes.item1} />
            <DetailItem id="millSkeleton" />
          </React.Fragment>
        )}
      </ul>
    </div>
  );
};
export default ProductDetail;
