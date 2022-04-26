import React, {useEffect} from "react";
import Input from "../../UI/Input";
import useIput from "../../hooks/use-Input";
import ButtonSubmit from "../../UI/ButtonSubmit";
import classes from "./LogInForm.module.css";
import Card from "../../UI/Card";
import {useHistory} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {LogInAction} from "../../Store/LogInSlice";
import {sendUserData} from "../../Store/CreateAction";
import LoadingSpinner from "../../UI/LoadingSpinner";
const LogInForm = () => {
  const isSignUp = useSelector((state) => {
    return state.logIn.isSignUpMode;
  });
  const isSubmit = useSelector((state) => {
    // return a 'state' default is "true" and message(obj)
    return state.logIn.isSubmit;
  });
  const history = useHistory();
  const userData = useSelector((state) => {
    return state.logIn.userData;
  });
  const dispatch = useDispatch();
  const toggleSignUp = () => {
    dispatch(LogInAction.isToggleSignUp());
  };
  const signUpData = (user) => {
    dispatch(LogInAction.signUpData(user));
  };
  const isSubmitNow = (loading) => {
    dispatch(LogInAction.isSubmitNow({loading: loading}));
  };
  const isSubmitSuccess = (success) => {
    dispatch(LogInAction.isSubmitSuccess({success: success}));
  };
  const logInHandler = (token) => {
    dispatch(LogInAction.logInHandler(token));
  };
  const {
    value: inputName,
    valueIsValid: enterNameValid,
    inputInvalid: nameBlurAndValueValid,
    inputValueHandler: inputNameHandler,
    inputBlur: inputNameBlur,
    resetForm: resetName,
  } = useIput((value) => value.trim() !== "");
  const {
    value: inputEmail, //return inputValue
    valueIsValid: enterEmailValid, //return target is not valid
    inputInvalid: emailBlurAndValueValid, //return "isTouched" and "valueIsValid"
    inputValueHandler: inputEmailHandler,
    inputBlur: inputEmailBlur,
    resetForm: resetEmail,
  } = useIput((value) => value.includes("@")); //pass input value
  const {
    value: inputPassword,
    valueIsValid: enterPasswordValid,
    inputInvalid: passBlurAndValueVaild,
    inputValueHandler: inputPasswordHandler,
    inputBlur: inputPasswordBlur,
    resetForm: resetPassword,
  } = useIput((value) => value.length >= 6);
  const LogInFormSubmit = (e) => {
    e.preventDefault();
    if (!enterEmailValid || !enterPasswordValid) return;
    if (enterEmailValid && enterPasswordValid && !isSignUp) {
      fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyADV7pJYmexjQmFgV3pb3L21IC1gjJA1mM",
        {
          method: "POST",
          body: JSON.stringify({
            email: inputEmail,
            password: inputPassword,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            throw new Error();
          }
        })
        .then((data) => {
          isSubmitNow(true);
          logInHandler({token: data.idToken});
          history.replace("/home");
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    isSubmitNow(false);
    resetEmail();
    resetPassword();
  };
  const SignUpFormSubmit = (e) => {
    e.preventDefault();
    if (!enterEmailValid || !enterPasswordValid || !enterNameValid) {
      alert("Please enter valid value!!");
    }
    isSubmitNow(true);
    if (enterEmailValid && enterPasswordValid && enterNameValid) {
      // Add Authentication to the user and store in firebase auth
      fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyADV7pJYmexjQmFgV3pb3L21IC1gjJA1mM",
        {
          method: "POST",
          body: JSON.stringify({
            email: inputEmail,
            password: inputPassword,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((res) => {
        isSubmitNow(false);
        if (res.ok) {
        } else {
          res.json().then((data) => {
            //Show Error
            alert(data.error.message);
          });
        }
      });
      //store Data in Login slice
      signUpData({
        email: inputEmail,
        password: inputPassword,
        name: inputName,
      });
      isSubmitSuccess(true);
      resetEmail();
      resetPassword();
      resetName();
    }
  };
  useEffect(() => {
    dispatch(sendUserData(userData));
    //store in RealTime database
  }, []);
  // useEffect(() => {
  //   dispatch(fetchUserData());
  // }, []);
  if (isSubmit.loading) {
    return (
      <Card divWrapper={true} className={classes.wrapper}>
        <LoadingSpinner />
      </Card>
    );
  }
  if (isSubmit.success) {
    alert("You can log in now😀");
    setTimeout(() => {
      isSubmitSuccess(false);
    }, 2000);
  }
  return (
    <Card divWrapper={true} className={classes.wrapper}>
      <h2>{isSignUp ? "Sign Up" : "Log In"}</h2>
      <form
        onSubmit={isSignUp ? SignUpFormSubmit : LogInFormSubmit}
        className={classes.form}
      >
        {isSignUp && (
          <Input
            type="name"
            id="Name"
            value={inputName}
            onChange={inputNameHandler}
            onBlur={inputNameBlur}
            validation={nameBlurAndValueValid}
            errorMsg="Name shouldn't be empty"
            label="User Name"
            placeholder="Name"
          />
        )}
        <Input
          type="email"
          id="email"
          value={inputEmail}
          onChange={inputEmailHandler}
          onBlur={inputEmailBlur}
          validation={emailBlurAndValueValid}
          errorMsg="Email must include '@'"
          label="Account"
          placeholder="E-mail"
        />
        <Input
          type="password"
          id="password"
          value={inputPassword}
          onChange={inputPasswordHandler}
          onBlur={inputPasswordBlur}
          validation={passBlurAndValueVaild}
          errorMsg="Password need to be greater than 5 characters"
          label="Password"
          placeholder="Password"
        />
        <p>Forget Password?</p>
        <ButtonSubmit
          className={classes.button}
          content={isSignUp ? "Submit" : "Log In"}
        />
      </form>
      <ButtonSubmit
        onClick={toggleSignUp}
        className={classes.buttonSignUp}
        content={isSignUp ? "Switch To Log In" : "New for Sign Up"}
      />
    </Card>
  );
};
export default LogInForm;
