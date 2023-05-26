import React, { useContext, useState } from "react";
import "./axios";

import axios from "axios";

const Context = React.createContext();

const Appcontext = ({ children }) => {
  const [loginErr, setLoginErr] = useState("");
  const [isLogin, setIsLogin] = useState(localStorage.getItem("isLogin"));
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Login = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.post("/login", { email, password });
      localStorage.setItem("token", JSON.stringify(data.data.token));
      localStorage.setItem("isLogin", JSON.stringify(data.data.isLogin));
      setPassword("");
      setEmail("");
      window.location.pathname = "/";
    } catch (error) {
      console.log(error);
      error.code === "ERR_NETWORK"
        ? setLoginErr(error.message)
        : setLoginErr(error.response.data.msg);
    }
  };
  const Logout = () => {
    localStorage.clear();
    window.location.pathname = "/";

    setIsLogin(!isLogin);
  };
  return (
    <Context.Provider
      value={{
        Login,
        Logout,
        isLogin,
        loginErr,
        email,
        setEmail,
        password,
        setPassword,
      }}>
      {children}
    </Context.Provider>
  );
};
export const useGlobal = () => {
  return useContext(Context);
};

export default Appcontext;
