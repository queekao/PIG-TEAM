import classes from "./TextContent.module.css";
import useGetDocs from "../../hooks/use-getDocs";
import React from "react";
import LoadingSpinner from "../../UI/LoadingSpinner";
const TextContent = () => {
  const {data, isLoading} = useGetDocs("LandingPageComp");
  const about = data.map((item) => {
    if (item.AboutComp)
      return (
        <React.Fragment key={item.id}>
          <h2>{item.AboutComp.title}</h2>
          <p>{item.AboutComp.contentIntro}</p>
          <h3>{item.AboutComp.contentSlogan}</h3>
          <p>{item.AboutComp.contentDetail}</p>
        </React.Fragment>
      );
  });
  if (isLoading) {
    return (
      <div style={{margin: "0 auto"}} className={classes.about}>
        <LoadingSpinner />
      </div>
    );
  }
  return (
    <section className={classes.content}>
      <div className={classes.about}>
        {/* <h2>About PIG</h2>
        <p>
          Product Information Guide provides instructions for making 3D
          explosion diagrams, allowing consumers to realize clear materials,
          suppliers and wonderful animation presentations
        </p> */}
        {about}
      </div>
      {/* <div className={classes.choice}>
        <h2>Why Choose Us</h2>
        <p>
          We are committed to provide clear product sources and visual
          experience to protect consumers’ right and corporate social
          responsibility.
        </p>
      </div> */}
    </section>
  );
};
export default TextContent;
