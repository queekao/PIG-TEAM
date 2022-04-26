import React from "react";
// import ReactDOM from "react-dom/client";
// import {createPortal} from "react-dom";
import Input from "../../UI/Input";
import {database} from "../../firebaseConfig";
import useIput from "../../hooks/use-Input";
import ButtonSubmit from "../../UI/ButtonSubmit";
import Card from "../../UI/Card";
import classes from "./ConnectForm.module.css";
import {addDoc, collection} from "firebase/firestore";
import LoadingSpinner from "../../UI/LoadingSpinner";
// const portal = ReactDOM.createPortal(document.getElementById("overlay"));
// portal.render(<ConnectForm />);
const ConnectForm = () => {
  const {
    value: enterName,
    inputValueHandler: enterNameHandler,
    resetForm: resetName,
  } = useIput((value) => value);
  const {
    value: enterPhoneNum,
    inputValueHandler: enterPhoneNumHandler,
    resetForm: resetPhone,
  } = useIput((value) => value);
  const {
    value: enterAddress,
    inputValueHandler: enterAddressHandler,
    resetForm: resetAddress,
  } = useIput((value) => value);
  const {
    value: enterDetail,
    inputValueHandler: enterDetailHandler,
    resetForm: resetDetail,
  } = useIput((value) => value);
  const db = collection(database, "userForm");

  const submitForm = (e) => {
    ///Collect Data in our firestore
    e.preventDefault();
    addDoc(db, {
      name: enterName,
      phone: enterPhoneNum,
      address: enterAddress,
      detail: enterDetail,
    })
      .then(() => {
        alert("We have receive your Request 😁");
      })
      .catch((err) => {
        alert(err.message);
      });
    resetName();
    resetPhone();
    resetAddress();
    resetDetail();
  };
  return (
    <Card divWrapper={true} className={classes.wrapper}>
      <h2>Connection List</h2>
      <div className={classes.notice}>
        <p>
          Please fill details completely in your request as possible to
          accelerate our services!
        </p>
      </div>
      <form onSubmit={submitForm} className={classes.form}>
        <Input
          type="text"
          id="Name"
          value={enterName}
          onChange={enterNameHandler}
          //    onBlur={inputNameBlur}
          //    validation={InputNameInvalid}
          errorMsg="Invalid name"
          label="User Name"
          placeholder="Name"
        />
        <Input
          type="number"
          id="PhoneNum"
          value={enterPhoneNum}
          onChange={enterPhoneNumHandler}
          //    onBlur={inputPhoneNumBlur}
          //    validation={InputPhoneNumInvalid}
          errorMsg="Invalid PhoneNum"
          label="User PhoneNum"
          placeholder="PhoneNum"
        />
        <Input
          type="address"
          id="Address"
          value={enterAddress}
          onChange={enterAddressHandler}
          //    onBlur={inputAddressBlur}
          //    validation={InputAddressInvalid}
          errorMsg="Invalid Address"
          label="User Address"
          placeholder="Address"
        />
        <Input
          value={enterDetail}
          onChange={enterDetailHandler}
          className={classes.textarea}
          isTextarea={true}
        />
        <ButtonSubmit className={classes.button} content="Submit" />
      </form>
    </Card>
  );
};
export default ConnectForm;
