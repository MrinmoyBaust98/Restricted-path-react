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

  const gogleProvider = new GoogleAuthProvider();
  const auth = getAuth();

  // ekta function create kore nibo ..karon atake export korbo...buttob gula atake use korbe

  const signInWithGogle = () => {
    return signInWithPopup(auth, gogleProvider);
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
    logOut,
  };
};
export default useFirebase;
