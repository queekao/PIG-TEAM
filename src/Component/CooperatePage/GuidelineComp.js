import classes from "./GuidelineList.module.css";
import styled from "styled-components";
import useGetDocs from "../../hooks/use-getDocs";
import GuidelineItem from "./GuidelineItem";
import LoadingSpinner from "../../UI/LoadingSpinner";
import Ball from "../../UI/Ball";
import {Fragment} from "react";
import ButtonPrimary from "../../UI/ButtonPrimary";
import {Link} from "react-router-dom";
const GuidelineBallBig = styled.div`
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 100px;
  text-align: center;
  vertical-align: middle;
  font-size: 3.6rem;
  border-radius: 100px;
  background-color: var(--secondary-color-light);
  color: var(--primary-color-dark);
`;
const GuidelineList = (props) => {
  const {isLoading} = useGetDocs("CooperateComp");
  if (isLoading) {
    return (
      <section style={{margin: "20rem auto"}} className={classes.team}>
        <LoadingSpinner />
      </section>
    );
  }
  return (
    <Fragment>
      <ul className={classes.list}>
        {/* <GuidelineBallBig bigBall>Start</GuidelineBallBig> */}
        <GuidelineItem />
        <Link to="/connect-form">
          <ButtonPrimary className={classes.button} content="Get Contacted" />
        </Link>
      </ul>
      <div className={classes.ballGroup}>
        <Ball content="Start" bigBall={true} ballLeft></Ball>
        <Ball></Ball>
        <Ball ballLeft></Ball>
        <Ball></Ball>
        <Ball content="End" bigBall={true}></Ball>
      </div>
    </Fragment>
  );
};
export default GuidelineList;
