import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "./Firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./Reducer";

function Login() {
  const [{}, dispatch] = useStateValue();
  
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/WhatsApp_logo-color-vertical.svg/120px-WhatsApp_logo-color-vertical.svg.png"
          alt=""
        />
        <div className="login__text">
          <h1>Sign in to WhatsApp</h1>
        </div>

        <Button onClick={signIn}>Sign In With Google</Button>
      </div>
    </div>
  );
}

export default Login;
