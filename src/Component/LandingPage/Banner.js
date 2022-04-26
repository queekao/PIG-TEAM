import React, {Fragment, Suspense} from "react";
// import IllustrationList from "./IllustrationList";
import classes from "./Banner.module.css";
import useGetDocs from "../../hooks/use-getDocs";
import ButtonPrimary from "../../UI/ButtonPrimary";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel";
import LoadingSpinner from "../../UI/LoadingSpinner";
import Model from "../3DModel";
import {Link} from "react-router-dom";
const Banner = () => {
  const {data, isLoading} = useGetDocs("LandingPageComp");
  // const banner = data.map((item) => {
  //   if (item.BannerComp)
  //     return (
  //       <Fragment key={item.id}>
  //         <h1>{item.BannerComp.title}</h1>
  //         <p>{item.BannerComp.content}</p>
  //       </Fragment>
  //     );
  // });
  const banner = data
    .filter((item) => {
      return item.BannerComp;
    })
    .map((item) => {
      return (
        <Fragment key={item.id}>
          <h1>{item.BannerComp.title}</h1>
          <p>{item.BannerComp.content}</p>
        </Fragment>
      );
    });
  if (isLoading) {
    return (
      <div className={classes.card}>
        <LoadingSpinner />
      </div>
    );
  }
  return (
    <div className={classes.card}>
      <Carousel showThumbs={false}>
        <div>
          {banner}
          {/* <div className={classes.img}>
            <IllustrationBanner />
          </div> */}
        </div>
        <div>
          <h1>Product Information GuideÎ</h1>
          {/* <div className={classes.img}>
            <img style={{width: "75%"}} src={banner1} alt="banner 1" />
          </div> */}
        </div>
        <div>
          <h1>Show the Details!</h1>
          {/* <div className={classes.img}>
            <img style={{width: "70%"}} src={banner2} alt="banner 2" />
          </div> */}
        </div>
        {/* <React.Fragment>
          <h1>Global Service!</h1>
          <h3>
            The product information guide has more than 100,000 users all around
            the world.
          </h3>
          <p>
            We provide exclusive 3D manual for your products regardless of
            electronic products, staple merchandise and industry to guarantee
            your relationships with customers!
          </p>
          <div className={classes.arrow}>
            <ArrowLeft />
            <ArrowRight style={{ cursor: "pointer" }} />
          </div>
          <div className={classes.img}>
            <IllustrationBanner />
          </div>
          <ButtonPrimary content="Get Contacted" className={classes.button} />
        </React.Fragment> */}
      </Carousel>
      <Model />
      <Link to="/connect-form">
        <ButtonPrimary content="Get Contacted" className={classes.button} />
      </Link>
    </div>
  );
};
export default Banner;
