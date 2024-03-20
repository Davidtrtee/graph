import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css"; // Импортируем модуль CSS
import Cookies from "js-cookie";
import { useAuth } from "../context/AuthContext";
import { authLogin, register } from "../ApiService/AuthService";

const Login = () => {
  const [user, setUser] = useState(null);
  const [step, setStep] = useState("login");
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      if (!inputValid(user)) {
        toast.error("Fieled required ");
        return;
      }
      const { data } = await register(user);
      if (data.message) {
        toast.error(data.message);
        return;
      }
      toast.success(data);
      setUser({
        ...user,
        username: "",
        password: "",
        firstName: "",
        lastName: "",
      });
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data.message || "something went wrong");
    }
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(user);
    if (!user?.username || !user?.password) {
      toast.error("Please fill up all fields.");
      return;
    }
    try {
      const { data } = await authLogin({
        username: user?.username,
        password: user?.password,
      });
      console.log("Login successful, token:", data);
      setAuth({ ...auth, user: data?.user, token: data?.token });
      Cookies.set("auth", JSON.stringify(data));
      setUser({ ...user, user: "", password: "" });
      navigate("/");
    } catch (error) {
      toast.error(error?.response?.data.message || "something went wrong");
      setUser({ ...user, user: "", password: "" });
    }
  };

  return (
    <div className={styles.loginContainer}>
      <h2 className={"text-capitalize " + styles.loginTitle}>{step}</h2>
      <form
        onSubmit={
          step === "login"
            ? handleLogin
            : step === "register"
            ? handleSignUp
            : ""
        }
      >
        {step === "register" && (
          <>
            <div className="row row-cols-md-2 my-2">
              {" "}
              <div>
                <label> First Name:</label>
                <input
                  type="text"
                  name="firstName"
                  className="w-100 p-2 rounded"
                  style={{ outline: "blue" }}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Last Name:</label>
                <input
                  name="lastName"
                  type="text"
                  className="w-100 p-2 rounded"
                  style={{ outline: "blue" }}
                  onChange={handleChange}
                />
              </div>
            </div>
          </>
        )}
        <div className={styles.formGroup}>
          <label>Username/email:</label>
          <input type="email" name="username" onChange={handleChange} />
        </div>
        <div className={styles.formGroup}>
          <label>Password:</label>
          <input type="password" name="password" onChange={handleChange} />
        </div>
        {step === "register" && (
          <div className={styles.formGroup}>
            <label>Confirm Password:</label>
            <input type="password" name="cnfPassword" onChange={handleChange} />
          </div>
        )}
        <div
          className=" my-3 text-primary"
          style={{ cursor: "pointer" }}
          onClick={() =>
            setStep((pre) =>
              pre === "login" ? "register" : pre === "register" ? "login" : ""
            )
          }
        >
          {step === "login"
            ? "If not account! Sing Up"
            : " Already account please login"}
        </div>
        <button type="submit" className={"text-capitalize " + styles.loginBtn}>
          {step}
        </button>
      </form>
    </div>
  );
};

export default Login;

const inputValid = (user) => {
  if (user) {
    for (const [key, value] of Object.entries(user)) {
      if (key && !value) {
        return false;
      }
    }
    return true;
  }
  return false;
};
