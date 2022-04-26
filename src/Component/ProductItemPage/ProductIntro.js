import {Duke} from "../../Asset/Icon";
import {Fragment} from "react";
import classes from "./ProductIntro.module.css";
import useGetDocs from "../../hooks/use-getDocs";
import LoadingSpinner from "../../UI/LoadingSpinner";
import {useParams} from "react-router-dom";
const ProductIntro = () => {
  const {data, isLoading} = useGetDocs("ProductDetailItem");
  const params = useParams();
  if (isLoading) {
    return (
      <div className={classes.intro}>
        <LoadingSpinner />
      </div>
    );
  }
  // Render the Intro page
  const ShoesIntro = data.map((item) => {
    return (
      <Fragment key={item.ShoesIntro.id}>
        <div className={classes.title}>
          <h1>{item.ShoesIntro.title}</h1>
          <span>Men's Shoe</span>
        </div>
        <p>{item.ShoesIntro.content}</p>
      </Fragment>
    );
  });
  const MassageGunIntro = data.map((item) => {
    return (
      <Fragment key={item.MassageGunIntro.id}>
        <div className={classes.title}>
          <h1>{item.MassageGunIntro.title}</h1>
        </div>
        <p>{item.MassageGunIntro.content}</p>
      </Fragment>
    );
  });
  const GreenBikeIntro = data.map((item) => {
    return (
      <Fragment key={item.GreenBikeIntro.id}>
        <div className={classes.title}>
          <h1>{item.GreenBikeIntro.title}</h1>
        </div>
        <p>{item.GreenBikeIntro.content}</p>
      </Fragment>
    );
  });
  const RubberTubeIntro = data.map((item) => {
    return (
      <Fragment key={item.RubberTubeIntro.id}>
        <div className={classes.title}>
          <h1>{item.RubberTubeIntro.title}</h1>
        </div>
        <p>{item.RubberTubeIntro.content}</p>
      </Fragment>
    );
  });
  const TreadMillIntro = data.map((item) => {
    return (
      <Fragment key={item.TreadMillIntro.id}>
        <div className={classes.title}>
          <h1>{item.TreadMillIntro.title}</h1>
        </div>
        <p>{item.TreadMillIntro.content}</p>
      </Fragment>
    );
  });
  return (
    <div className={classes.intro}>
      {params.productId === "shoes" && <Duke />}
      {/* <div className={classes.title}>
        <h1>DUKE AIR EDGE 087</h1>
        <span>Men's Shoe</span>
      </div>
      <p>
        The Duke Air Edge 087 takes the look of retro basketball and puts it
        through a modern lens.
      </p> */}
      {params.productId === "shoes" && ShoesIntro}
      {params.productId === "massage-gun" && MassageGunIntro}
      {params.productId === "green-bike" && GreenBikeIntro}
      {params.productId === "treadmill" && TreadMillIntro}
      {params.productId === "rubber-tube" && RubberTubeIntro}
    </div>
  );
};
export default ProductIntro;
