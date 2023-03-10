import { useEffect, useState } from "react";
import firebaseInitialize from "../Firebase/firebase.initialize";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

// firebase initialize function call
firebaseInitialize();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const gogleProvider = new GoogleAuthProvider();
  const auth = getAuth();

  // ekta function create kore nibo ..karon atake export korbo...buttob gula atake use korbe

  const signInWithGogle = () => {
    signInWithPopup(auth, gogleProvider)
      .then((result) => {
        setUser(result.user);
        console.log(result.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, [auth]);

  // signOut
  const logOut = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };

  return {
    signInWithGogle,
    user,
    error,
    logOut,
  };
};
export default useFirebase;
