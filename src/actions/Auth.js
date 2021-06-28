import { types } from "../types/types";
import {
  firebase,
  googleAuthProvider,
} from "../firebase/config";
import { StartLoading, FinishLoading, StopLoading } from "./uiError";
import Swal from "sweetalert2";

export const login = (uid, displayName, photoURL) => {
  return {
    type: types.login,
    payload: {
      uid,
      displayName,
      photoURL,
    },
  };
};

function alerta(mensaje) {
  Swal.fire({
    position: "center",
    icon: "error",
    title: mensaje,
    showConfirmButton: false,
    timer: 1500,
  });
  
}

export const startRegisterWithEmailPasswordName = (email, password, name) => {
  return (dispatch) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        await user.updateProfile({ displayName: name });
        console.log("photo", user.photoURL);
        dispatch(login(user.uid, user.displayName, user.photoURL));
      })
      .catch((e) => {
        alerta(e.message)
      });
  };
};

export const startGoogleLogin = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        console.log("photo", user.photoURL);
        dispatch(login(user.uid, user.displayName, user.photoURL));
      })
      .catch((e) => {
        alerta(e.message)
      });
  };
};

export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {
    dispatch(StartLoading());
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        console.log("photo", user.photoURL);
        dispatch(login(user.uid, user.displayName, user.photoURL));
        dispatch(FinishLoading());
      })
      .catch((e) => {
        alerta(e.message)
        dispatch(StopLoading());
      });
  };
};

export const logout = () => ({
  type: types.logout,
});

export const startLogout = () => {
  return (dispatch) => {
    firebase.auth().signOut();

    dispatch(logout());
  };
};
