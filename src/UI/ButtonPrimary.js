import classes from "./ButtonPrimary.module.css";
const ButtonPrimary = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={`${props.className} ${classes.button}`}
    >
      {props.content}
    </button>
  );
};
export default ButtonPrimary;
