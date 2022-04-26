import React from "react";
import classes from "./Input.module.css";
const Input = (props) => {
  const {
    errorMsg,
    id,
    label,
    onBlur,
    onChange,
    type,
    validation,
    value,
    placeholder,
    isTextarea,
  } = props;
  // const inputRef = useRef();
  // const textareaRef = useRef();
  // console.log(inputRef);
  // console.log(textareaRef);
  if (isTextarea) {
    return (
      <div className={`${classes.formControl}`}>
        <textarea
          className={`${classes.textarea} ${props.className}`}
          id="textarea"
          name="textarea"
          rows="4"
          cols="28"
          placeholder="Tell us a bit about your business"
          value={value}
          onChange={onChange}
        ></textarea>
        {validation ? <p className={classes.error}>{errorMsg}</p> : <p></p>}
      </div>
    );
  }
  return (
    <div className={`${classes.formControl}`}>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        // ref={inputRef}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        placeholder={placeholder}
      />
      {/* This "validation" is from "use-input ==> "inputInvalid""*/}
      {validation ? <p className={classes.error}>{errorMsg}</p> : <p></p>}
    </div>
  );
};
export default Input;
