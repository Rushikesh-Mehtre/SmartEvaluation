import React, { useState } from "react";
import styles from "./HomePage.module.scss";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import "react-toastify/dist/ReactToastify.css";
import loadingImg from "../../assets/images/loading.gif";
const initialState = {
  cName: "",
  interviewBy: "",
  jobProfile: "",
  workEx: "",
  relWorkEx: "",
  date: "",
  time: "",
  communicationRating: "",
  technicalRating: "",
  analyticalRating: "",
  overallRating: "",
  recommendedForNextRound: "",
  strenghts: "",
  weakness: "",
  comments: "",
};
const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const [candidateData, setCandidateData] = useState(initialState);
  const submitHandler = (e) => {
    e.preventDefault();
    if (
      !candidateData.cName ||
      !candidateData.comments ||
      !candidateData.workEx ||
      !candidateData.weakness ||
      !candidateData.strenghts ||
      !candidateData.interviewBy ||
      !candidateData.time ||
      !candidateData.date ||
      !candidateData.relWorkEx ||
      !candidateData.analyticalRating ||
      !candidateData.communicationRating ||
      !candidateData.overallRating ||
      !candidateData.analyticalRating ||
      !candidateData.recommendedForNextRound
    ) {
      Toastify({
        text: "Please fill all the details",
        duration: 2000,
        newWindow: true,
        close: false,
        gravity: "top",
        position: "center",
        backgroundColor: "#6e0500",
        stopOnFocus: true,
      }).showToast();
      return;
    } else {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        Toastify({
          text: "Information submitted successfully",
          duration: 2000,
          newWindow: true,
          close: false,
          gravity: "top",
          position: "center",
          backgroundColor: "#2b6777",
          stopOnFocus: true,
        }).showToast();
        setCandidateData(initialState);
      }, 2000);
      console.log(candidateData);
    }
  };
  const resetHandler = (e) => {
    e.preventDefault();
    Toastify({
      text: "form details reset",
      duration: 2000,
      newWindow: true,
      close: false,
      gravity: "top",
      position: "center",
      backgroundColor: "#2b6777",
      stopOnFocus: true,
    }).showToast();
    setCandidateData(initialState);
  };
  return (
    <div className={styles.homePage}>
      {loading && (
        <img
          src={loadingImg}
          alt=""
          className={styles.loadingIcon}
          height="60px"
          width="60px"
        />
      )}

      <p className={styles.head}>Evaluation form</p>
      <form action="" className={styles.form}>
        <div className={styles.inputBox}>
          <label htmlFor="">Candidate name</label>
          <input
            type="text"
            placeholder="Candidate's  name"
            value={candidateData.cName}
            onChange={(e) => {
              setCandidateData({ ...candidateData, cName: e.target.value });
            }}
          />
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="">Interviewed by</label>
          <input
            type="text"
            placeholder="Interviewed by (can be more than one)"
            value={candidateData.interviewBy}
            onChange={(e) => {
              setCandidateData({
                ...candidateData,
                interviewBy: e.target.value,
              });
            }}
          />
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="">Job profile</label>
          <input
            type="text"
            placeholder="Job profile"
            value={candidateData.jobProfile}
            onChange={(e) => {
              setCandidateData({
                ...candidateData,
                jobProfile: e.target.value,
              });
            }}
          />
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="">Work experience (in years)</label>
          <input
            type="number"
            placeholder="Work experience"
            value={candidateData.workEx}
            onChange={(e) => {
              setCandidateData({ ...candidateData, workEx: e.target.value });
            }}
          />
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="">Relevant work experience (in years)</label>
          <input
            type="number"
            placeholder="Relevant work experience"
            value={candidateData.relWorkEx}
            onChange={(e) => {
              setCandidateData({ ...candidateData, relWorkEx: e.target.value });
            }}
          />
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="">Date of interview</label>
          <input
            type="date"
            name=""
            id=""
            placeholder="date of interview"
            value={candidateData.date}
            onChange={(e) => {
              setCandidateData({ ...candidateData, date: e.target.value });
            }}
          />
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="">time of interview</label>
          <input
            type="time"
            name=""
            id=""
            placeholder="time of interview"
            value={candidateData.time}
            onChange={(e) => {
              setCandidateData({ ...candidateData, time: e.target.value });
            }}
          />
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="">Communication skills rating</label>
          <select
            name=""
            id=""
            value={candidateData.communicationRating}
            onChange={(e) => {
              setCandidateData({
                ...candidateData,
                communicationRating: e.target.value,
              });
            }}
          >
            <option value="" disabled>
              Select rating
            </option>
            <option value="Bad">Bad</option>
            <option value="Poor">Poor</option>
            <option value="Below Average">Below Average</option>
            <option value="Avergae">Avergae</option>
            <option value="Above Average">Above Average</option>
            <option value="Good">Good</option>
            <option value="Very good">Very good</option>
            <option value="Excellent">Excellent</option>
          </select>{" "}
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="">Technical skills rating</label>
          <select
            name=""
            id=""
            value={candidateData.technicalRating}
            onChange={(e) => {
              setCandidateData({
                ...candidateData,
                technicalRating: e.target.value,
              });
            }}
          >
            <option value="" disabled>
              Select rating{" "}
            </option>
            <option value="Bad">Bad</option>
            <option value="Poor">Poor</option>
            <option value="Below Average">Below Average</option>
            <option value="Avergae">Avergae</option>
            <option value="Above Average">Above Average</option>
            <option value="Good">Good</option>
            <option value="Very good">Very good</option>
            <option value="Excellent">Excellent</option>
          </select>
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="">Analytical skills rating</label>
          <select
            name=""
            id=""
            value={candidateData.analyticalRating}
            onChange={(e) => {
              setCandidateData({
                ...candidateData,
                analyticalRating: e.target.value,
              });
            }}
          >
            <option value="" disabled>
              Select rating{" "}
            </option>
            <option value="Bad">Bad</option>
            <option value="Poor">Poor</option>
            <option value="Below Average">Below Average</option>
            <option value="Avergae">Avergae</option>
            <option value="Above Average">Above Average</option>
            <option value="Good">Good</option>
            <option value="Very good">Very good</option>
            <option value="Excellent">Excellent</option>
          </select>
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="">Overall perfomence wrt experience</label>
          <select
            name=""
            id=""
            value={candidateData.overallRating}
            onChange={(e) => {
              setCandidateData({
                ...candidateData,
                overallRating: e.target.value,
              });
            }}
          >
            <option value="" disabled>
              Select rating{" "}
            </option>
            <option value="Bad">Bad</option>
            <option value="Poor">Poor</option>
            <option value="Below Average">Below Average</option>
            <option value="Avergae">Avergae</option>
            <option value="Above Average">Above Average</option>
            <option value="Good">Good</option>
            <option value="Very good">Very good</option>
            <option value="Excellent">Excellent</option>
          </select>
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="">Recommended for next round</label>
          <select
            name=""
            id=""
            value={candidateData.recommendedForNextRound}
            onChange={(e) => {
              setCandidateData({
                ...candidateData,
                recommendedForNextRound: e.target.value,
              });
            }}
          >
            <option value="" disabled>
              Select{" "}
            </option>
            <option value="Not at all">Not at all</option>
            <option value="No">No</option>
            <option value="may be">may be</option>
            <option value="recommended">recommended</option>
            <option value="Recommended for sure">Recommended for sure</option>
          </select>
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="">Strengths</label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="5"
            placeholder="Candidate's Strengths"
            value={candidateData.strenghts}
            onChange={(e) => {
              setCandidateData({ ...candidateData, strenghts: e.target.value });
            }}
          ></textarea>
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="">Weakness</label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="5"
            placeholder="Candidate's Weakness"
            value={candidateData.weakness}
            onChange={(e) => {
              setCandidateData({ ...candidateData, weakness: e.target.value });
            }}
          ></textarea>
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="">Comments</label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="5"
            placeholder="Comments"
            value={candidateData.comments}
            onChange={(e) => {
              setCandidateData({ ...candidateData, comments: e.target.value });
            }}
          ></textarea>
        </div>

        <div className={styles.btn}>
          <button onClick={submitHandler} className={styles.submit}>
            Submit
          </button>
          <button onClick={resetHandler} className={styles.reset}>
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default HomePage;
