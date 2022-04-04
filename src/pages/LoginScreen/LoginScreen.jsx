import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LoginScreen.module.scss";
import mainImg from "../../assets/images/main-img.jpg";
import loading from "../../assets/images/loading.gif";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import "react-toastify/dist/ReactToastify.css";
const LoginScreen = () => {
  const navigate = useNavigate();
  const [showLoading, setShowLoading] = useState(false);
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const loginHandler = (e) => {
    e.preventDefault();
    console.log(user);
    if (!user.username || !user.password) {
      Toastify({
        text: "Please fill all the details",
        duration: 2000,
        newWindow: true,
        close: false,
        gravity: "top",
        position: "center",
        backgroundColor: "#2b6777",
        stopOnFocus: true,
      }).showToast();
      setUser({ username: "", password: "" });
      return;
    } else if (user.username === "user" || user.username === "user") {
      localStorage.setItem("role", "user");
      console.log("logged as user/interviewer");
      setShowLoading(true);
      setTimeout(() => {
        setShowLoading(false);
        navigate("/home");
      }, 2000);
    } else if (user.username === "admin" || user.username === "admin") {
      localStorage.setItem("role", "admin");
      console.log("logged as admin");
      setShowLoading(true);
      setTimeout(() => {
        setShowLoading(false);
        navigate("/reviews");
      }, 2000);
    } else {
      Toastify({
        text: "Invalid credentials",
        duration: 2000,
        newWindow: true,
        close: false,
        gravity: "top",
        position: "center",
        backgroundColor: "#2b6777",
        stopOnFocus: true,
      }).showToast();
      setUser({ username: "", password: "" });
      return;
    }
  };
  return (
    <div className={styles.loginScreen}>
      <div className={styles.mainImg}>
        <img src={mainImg} alt="" className={styles.img} />
      </div>

      <div className={styles.form}>
        <div>
          <p className={styles.head}>Sign in to continue</p>
          <input
            type="text"
            placeholder="username"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />
          <input
            type="password"
            placeholder="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          {/* <p className={styles.forgotPassword}>forgot password ? </p> */}
          <button type="submit" onClick={loginHandler}>
            Login
          </button>
          <div className={styles.loadingContainer}>
            {showLoading && (
              <img src={loading} className={styles.loadingImg} alt="" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
