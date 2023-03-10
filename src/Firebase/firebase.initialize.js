import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.configaration";

const firebaseInitialize = () => {
  initializeApp(firebaseConfig);
};

export default firebaseInitialize;
