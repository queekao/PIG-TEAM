import {LogInAction} from "./LogInSlice";
export const fetchUserData = () => {
  return async (dispatch) => {
    dispatch(
      LogInAction.isSubmitNow({
        loading: true,
      })
    );
    const fetchUser = async () => {
      const response = await fetch(
        "https://pig-project-ea5ab-default-rtdb.firebaseio.com/user.json"
      );
      if (!response.ok) throw new Error("No Way here!!");
      const data = await response.json();
      return data;
    };
    try {
      const userData = await fetchUser();
      dispatch(
        LogInAction.isSubmitNow({
          loading: false,
        })
      );
      return userData;
      //change the cart in Redux
    } catch (err) {
      dispatch(
        LogInAction.Error({
          message: "Cannot send cart data ",
        })
      );
    }
  };
};

// 'action Creator' way to Handle Side Effect(which is also avalible dispatched)
export const sendUserData = (user) => {
  // we can pass the dispatch inside of dispatch 'action' fn that redux toolkit give us and this 'sendCartData' will eventually reach the reducer

  return async function (dispatch) {
    dispatch(
      LogInAction.isSubmitNow({
        loading: true,
      })
    );
    //flow-off side effect
    const sendRequest = async () => {
      const response = await fetch(
        "https://pig-project-ea5ab-default-rtdb.firebaseio.com/user.json",
        {
          method: "POST",
          body: JSON.stringify({
            email: user.email,
            password: user.password,
            name: user.name,
          }),
        }
      );
      if (!response.ok) throw new Error("Bad Request");
    };
    try {
      if (user.name !== "" && user.password !== "" && user.email !== "")
        await sendRequest();
      dispatch(
        LogInAction.isSubmitNow({
          loading: false,
        })
      );
    } catch (err) {
      dispatch(
        LogInAction.Error({
          message: "Cannot send cart data ",
        })
      );
    }
    //before dispatch we can have side effect because we havent reach the 'reducer'
  };
};
