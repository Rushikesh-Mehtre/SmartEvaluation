import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./EditCandidateData.module.scss";
import { FaSave } from "react-icons/fa";
import { RiArrowGoBackFill } from "react-icons/ri";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import "react-toastify/dist/ReactToastify.css";
import loadingImg from "../../assets/images/loading.gif";
const EditCandidateData = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [showLoading, setShowLoading] = useState(false);
  const candidateData = {
    cName: "Rushikesh Mehtre",
    interviewBy: "Rushikesh Mehtre",
    jobProfile: "ReactJS",
    workEx: "0.5",
    relWorkEx: "0.5",
    date: "04/01/2022",
    time: "16.30PM",
    communicationRating: "",
    technicalRating: "good",
    analyticalRating: "good",
    overallRating: "good",
    recommendedForNextRound: "for sure",
    strenghts: "Good communication skills",
    weakness: "Didn't find any",
    comments: "No comments",
  };
  const [newData, setNewData] = useState({
    currentCTC: "",
    expectedCTC: "",
    preferredLocation: "",
    mobile: "",
    email: "",
    noticePeriod: "",
  });
  const [finalData, setFinalData] = useState({});
  console.log(finalData);
  const updateHandler = (e) => {
    e.preventDefault();
    if (
      !newData.currentCTC ||
      !newData.expectedCTC ||
      !newData.preferredLocation ||
      !newData.mobile ||
      !newData.email ||
      !newData.noticePeriod
    ) {
      Toastify({
        text: "Please fill all the required fields",
        duration: 2000,
        newWindow: true,
        close: false,
        gravity: "top",
        position: "center",
        backgroundColor: "#2b6777",
        stopOnFocus: true,
      }).showToast();
      return;
    } else {
      setShowLoading(true);
      setTimeout(() => {
        setShowLoading(false);
        Toastify({
          text: "Information updated successfully",
          duration: 2000,
          newWindow: true,
          close: false,
          gravity: "top",
          position: "center",
          backgroundColor: "#2b6777",
          stopOnFocus: true,
        }).showToast();
      }, 2000);
      setFinalData({ ...candidateData, ...newData });
      console.log(finalData);
    }
  };

  const gobackHandler = () => {
    navigate("/reviews");
  };
  return (
    <div className={styles.editCandidateData}>
      {showLoading && (
        <img
          src={loadingImg}
          alt=""
          height="60px"
          width="60px"
          className={styles.loadingImg}
        />
      )}
      <div className={styles.header}>
        <p className={styles.head}>
          Edit candidate evaluation report for {candidateData.cName} (Candidate
          id : {params.candidateId})
        </p>
        <div className={styles.icons}>
          <span>
            <FaSave onClick={updateHandler} />
          </span>
          <span>
            <RiArrowGoBackFill onClick={gobackHandler} />
          </span>
        </div>
      </div>
      <form action="" className={styles.form}>
        <div className={styles.inputBox}>
          <label htmlFor="">Candidate name</label>
          <input
            type="text"
            placeholder="Candidate's  name"
            value={candidateData.cName}
            readOnly
          />
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="">Interviewed by</label>
          <input
            type="text"
            placeholder="Interviewed by (can be more than one)"
            value={candidateData.interviewBy}
            readOnly
          />
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="">Job profile</label>
          <input
            type="text"
            placeholder="Job profile"
            value={candidateData.jobProfile}
            readOnly
          />
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="">Work experience (in years)</label>
          <input
            type="number"
            placeholder="Work experience"
            value={candidateData.workEx}
            readOnly
          />
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="">Relevant work experience (in years)</label>
          <input
            type="number"
            placeholder="Relevant work experience"
            value={candidateData.relWorkEx}
            readOnly
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
            readOnly
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
            readOnly
          />
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="">Communication skills rating</label>
          <select
            name=""
            id=""
            value={candidateData.communicationRating}
            readOnly
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
          <select name="" id="" value={candidateData.technicalRating} readOnly>
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
          <select name="" id="" value={candidateData.analyticalRating} readOnly>
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
          <select name="" id="" value={candidateData.overallRating} readOnly>
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
            readOnly
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
            readOnly
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
            readOnly
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
            readOnly
          ></textarea>
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="">Current CTC</label>
          <input
            type="number"
            placeholder="Current CTC"
            value={newData.currentCTC}
            onChange={(e) =>
              setNewData({ ...newData, currentCTC: e.target.value })
            }
          />
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="">Expected CTC</label>
          <input
            type="number"
            placeholder="Expected CTC"
            value={newData.expectedCTC}
            onChange={(e) =>
              setNewData({ ...newData, expectedCTC: e.target.value })
            }
          />
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="">Notice Period</label>
          <select
            name=""
            id=""
            value={newData.noticePeriod}
            onChange={(e) =>
              setNewData({ ...newData, noticePeriod: e.target.value })
            }
          >
            <option value="" disabled selected>
              Select notice period
            </option>
            <option value="Immediate joining">Immediate joining</option>
            <option value="15 days">15 days</option>
            <option value="30 days">30 days</option>
            <option value="45 days">45 days</option>
            <option value="60 days">60 days</option>
            <option value="90 days">90 days</option>
          </select>
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="">Mobile Number</label>
          <input
            type="number"
            placeholder="Mobile Number"
            value={newData.mobile}
            onChange={(e) => setNewData({ ...newData, mobile: e.target.value })}
          />
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="">Email ID</label>
          <input
            type="email"
            placeholder="Email ID"
            value={newData.email}
            onChange={(e) => setNewData({ ...newData, email: e.target.value })}
          />
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="">Preferred location</label>
          <input
            type="text"
            placeholder="Preferred location"
            value={newData.preferredLocation}
            onChange={(e) =>
              setNewData({ ...newData, preferredLocation: e.target.value })
            }
          />
        </div>
        <div className={styles.btns}>
          <button onClick={updateHandler} className={styles.updateButton}>
            Update
          </button>
          <button onClick={gobackHandler} className={styles.gobackButton}>
            Go back
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditCandidateData;
