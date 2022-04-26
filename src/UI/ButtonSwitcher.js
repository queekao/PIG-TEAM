import classes from "./ButtonSwitcher.module.css";
const ButtonSwitcher = (props) => {
  const formSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <button className={`${props.className} ${classes.button}`}>
      {props.checked ? props.hideContent : props.showContent}
      <div className={classes.switcher}>
        <form onSubmit={formSubmit}>
          <input
            onClick={props.onClick}
            type="checkbox"
            id="check"
            className={classes.toggle}
            required
          />
          <label htmlFor="check" required></label>
        </form>
      </div>
    </button>
  );
};
export default ButtonSwitcher;
