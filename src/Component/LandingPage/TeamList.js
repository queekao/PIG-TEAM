import React from "react";
import classes from "./TeamList.module.css";
import useGetDocs from "../../hooks/use-getDocs";
import LoadingSpinner from "../../UI/LoadingSpinner";
const TeamList = () => {
  const {data, isLoading} = useGetDocs("LandingPageComp");
  const TeamList = data.map((item) => {
    return item.TeamComp?.map((item) => {
      return (
        <li key={item.id} className={classes.item}>
          <div className={classes.person}>
            <img src={item.image} alt="img"></img>
          </div>
          <div className={classes.name}>{item.name}</div>
          <p className={classes.title}>{item.position}</p>
        </li>
      );
    });
  });
  if (isLoading) {
    return (
      <section style={{margin: "20rem auto"}} className={classes.team}>
        <LoadingSpinner />
      </section>
    );
  }
  // console.log("from");
  return (
    <section className={classes.team}>
      <h2>Team Member</h2>
      <ul className={classes.list}>
        {/* <li className={classes.item}>
          <div className={classes.person}>
            <PersonMark />
          </div>
          <div className={classes.name}>Mark</div>
          <p className={classes.title}>Product Manager</p>
        </li>
        <li className={classes.item}>
          <div className={classes.person}>
            <PersonEric />
          </div>
          <div className={classes.name}>Eric</div>
          <p className={classes.title}>Software Engineer</p>
        </li>
        <li className={classes.item}>
          <div className={classes.person}>
            <PersonJosh />
          </div>
          <div className={classes.name}>Josh</div>
          <p className={classes.title}>3D Animation Designer</p>
        </li> */}
        {TeamList}
      </ul>
    </section>
  );
};
export default TeamList;
