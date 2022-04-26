import classes from "./ButtonSubmit.module.css";
const ButtonSubmit = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={`${props.className} ${classes.button}`}
    >
      {props.content}
    </button>
  );
};
export default ButtonSubmit;
