import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LoginScreen.module.scss";
import mainImg from "../../assets/images/main-img.jpg";
import loading from "../../assets/images/loading.gif";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import "react-toastify/dist/ReactToastify.css";
// import { app } from "../../firebaseConfig";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const LoginScreen = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [showLoading, setShowLoading] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const loginHandler = (e) => {
    e.preventDefault();
    setShowLoading(true);

    if (!user.email || !user.password) {
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
      setUser({ email: "", password: "" });
      return;
    }
    signInWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(userCredential);
        if (user.uid !== "h968rDJAA2OulnkX0mQeSJeBbrf2") {
          localStorage.setItem("role", "interviewer");
          setTimeout(() => {
            setShowLoading(false);
            Toastify({
              text: "Logged in as interviewer",
              duration: 2000,
              newWindow: true,
              close: false,
              gravity: "top",
              position: "center",
              backgroundColor: "#2b6777",
              stopOnFocus: true,
            }).showToast();
            navigate("/home");
          }, 1500);
        } else {
          localStorage.setItem("role", "hr");

          setTimeout(() => {
            setShowLoading(false);
            Toastify({
              text: "Logged in as HR",
              duration: 2000,
              newWindow: true,
              close: false,
              gravity: "top",
              position: "center",
              backgroundColor: "#2b6777",
              stopOnFocus: true,
            }).showToast();
            navigate("/reviews");
          }, 1000);
        }

        // ...
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        setShowLoading(true);
        setTimeout(() => {
          setShowLoading(false);
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
          setUser({ email: "", password: "" });
        }, 1000);
      });
    // console.log(user);
    // if (!user.email || !user.password) {
    //   Toastify({
    //     text: "Please fill all the details",
    //     duration: 2000,
    //     newWindow: true,
    //     close: false,
    //     gravity: "top",
    //     position: "center",
    //     backgroundColor: "#2b6777",
    //     stopOnFocus: true,
    //   }).showToast();
    //   setUser({ email: "", password: "" });
    //   return;
    // } else if (user.username === "user" && user.password === "user") {
    //   localStorage.setItem("role", "user");
    //   console.log("logged as user");
    //   setShowLoading(true);
    //   setTimeout(() => {
    //     setShowLoading(false);
    //     navigate("/home");
    //   }, 2000);
    // } else if (user.username === "admin" && user.password === "admin") {
    //   localStorage.setItem("role", "admin");
    //   console.log("logged as admin");
    //   setShowLoading(true);
    //   setTimeout(() => {
    //     setShowLoading(false);
    //     navigate("/reviews");
    //   }, 2000);
    // } else {
    //   Toastify({
    //     text: "Invalid credentials",
    //     duration: 2000,
    //     newWindow: true,
    //     close: false,
    //     gravity: "top",
    //     position: "center",
    //     backgroundColor: "#2b6777",
    //     stopOnFocus: true,
    //   }).showToast();
    //   setUser({ username: "", password: "" });
    //   return;
    // }
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
            type="email"
            placeholder="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
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
