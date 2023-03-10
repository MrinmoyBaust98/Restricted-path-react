import React, { createContext } from "react";
import useFirebase from "../Hooks/useFirebase";

export const AuthContext = createContext();

const AuthProvider = (props) => {
  const { children } = props;
  const allContext = useFirebase();
  return (
    <div>
      <AuthContext.Provider value={allContext}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
