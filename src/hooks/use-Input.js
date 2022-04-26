import {useReducer} from "react";
const defaultInput = {inputValue: "", isTouched: false};
const inputReducer = (preState, action) => {
  if (action.type === "INPUT_VALUE")
    return {inputValue: action.inputValue, isTouched: preState.isTouched};
  if (action.type === "INPUT_VALID")
    return {inputValue: preState.inputValue, isTouched: true};
  if (action.type === "FORM_RESET") return {inputValue: "", isTouched: false};
  return defaultInput;
};
const useIput = (validateValue) => {
  const [inputState, dispatchInput] = useReducer(inputReducer, defaultInput);
  // 1) e.target.value => check is valid or not
  const valueIsValid = validateValue(inputState.inputValue); //pass value in here
  // 2) for input is not valid and not touched
  const inputInvalid = !valueIsValid && inputState.isTouched;
  const inputValueHandler = (e) => {
    dispatchInput({type: "INPUT_VALUE", inputValue: e.target.value});
    // 3) for input "value"
  };
  const inputBlur = () => {
    dispatchInput({type: "INPUT_VALID"});
    // 4) for input "onBlur"
  };
  const resetForm = () => {
    dispatchInput({type: "FORM_RESET"});
    // 5) for after form submit
  };
  // const inputValueHandler = (e) => {
  //   setInputValue(e.target.value);
  // };
  // const inputBlur = () => {
  //   console.log("lose focus");
  //   setIsTouched(true);
  // };
  // const resetForm = () => {
  //   setInputValue("");
  //   setIsTouched(false);
  //   //we need to reset the form so output this method
  // };
  return {
    value: inputState.inputValue,
    valueIsValid,
    inputInvalid,
    inputValueHandler,
    inputBlur,
    resetForm,
  };
};
export default useIput;
