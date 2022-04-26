import classes from "./ButtonSecondary.module.css";
const ButtonSecondary = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={`${props.className} ${classes.button}`}
    >
      {props.content}
    </button>
  );
};
export default ButtonSecondary;
