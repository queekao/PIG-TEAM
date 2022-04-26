import classes from "./Ball.module.css";
const Ball = (props) => {
  if (props.bigBall) {
    return (
      <div
        className={`${classes.bigBall} ${
          props.ballLeft ? classes.ballLeft : classes.ball
        }`}
      >
        <span>{props.content}</span>
      </div>
    );
  } else {
    return (
      <span
        className={`${classes.ball} ${
          props.ballLeft ? classes.ballLeft : classes.ball
        }`}
      >
        {props.content}
      </span>
    );
  }

  // return <span className={}>{props.content}</span>
};
export default Ball;
