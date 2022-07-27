import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./EditCandidateData.module.scss";
import { FaSave } from "react-icons/fa";
import { RiArrowGoBackFill } from "react-icons/ri";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import "react-toastify/dist/ReactToastify.css";
import loadingImg from "../../assets/images/loading.gif";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import {
  database,
  // storage 
} from "../../firebaseConfig";
// import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
const initialState = [
  {
    analyticalRating: "",
    cName: "",
    comments: "",
    communicationRating: "",
    currentCTC: "",
    date: "",
    email: "",
    expectedCTC: "",
    id: "",
    interviewBy: "",
    jobProfile: "",
    mobile: "",
    noticePeriod: "",
    overallRating: "",
    preferredLocation: "",
    recommendedForNextRound: "",
    relWorkEx: "",
    strenghts: "",
    technicalRating: "",
    time: "",
    weakness: "",
    workEx: "",
  },
];
const EditCandidateData = () => {
  const params = useParams();
  const collectionRef = collection(database, "candidates");
  const [candidateData, setCandidateData] = useState(initialState);
  // console.log(candidateData);

  useEffect(
    () => {
      // setShowLoading(true);
      if (candidateData[0].currentCTC) {
        Toastify({
          text: "Data is already up to date",
          duration: 2000,
          newWindow: true,
          close: false,
          gravity: "top",
          position: "center",
          backgroundColor: "#2b6777",
          stopOnFocus: true,
        }).showToast();
        console.log("already upto date");
      }
      getDocs(collectionRef)
        .then((response) => {
          setCandidateData(
            response.docs
              .map((item) => {
                return { ...item.data(), id: item.id };
              })
              .filter((item) => {
                return item.id === params.candidateId;
              })
          );
        })
        .catch((error) => console.log(error));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  const navigate = useNavigate();
  const [showLoading, setShowLoading] = useState(false);
  const [newData, setNewData] = useState({
    currentCTC: "",
    expectedCTC: "",
    preferredLocation: "",
    mobile: "",
    email: "",
    noticePeriod: "",
  });
  const [finalData, setFinalData] = useState({});
  const updateHandler = (e) => {
    e.preventDefault();
    if (candidateData[0].currentCTC) {
      Toastify({
        text: "Data is updated already",
        duration: 2000,
        newWindow: true,
        close: false,
        gravity: "top",
        position: "center",
        backgroundColor: "#2b6777",
        stopOnFocus: true,
      }).showToast();
      return;
    }
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
        const docToUpdate = doc(database, "candidates", params.candidateId);
        updateDoc(docToUpdate, {
          currentCTC: newData.currentCTC,
          expectedCTC: newData.expectedCTC,
          noticePeriod: newData.noticePeriod,
          mobile: newData.mobile,
          email: newData.email,
          preferredLocation: newData.preferredLocation,
        })
          .then((response) => console.log(response))
          .catch((err) => console.log(err));
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
        navigate("/reviews");
      }, 1000);
      setFinalData({ ...candidateData, ...newData });
      console.log(finalData);
    }
  };
  const gobackHandler = () => {
    navigate("/reviews");
  };
  // const [progressLoading, setProgressLoading] = useState(false);
  // console.log(progress);
  // const [data, setData] = useState();
  // const [resumeUploadStatus, setResumeUploadStatus] = useState("Upload resume");
  // const resumeUploadHandler = (e) => {
  //   e.preventDefault();
  //   if (!data) {
  //     Toastify({
  //       text: "Select file to upload",
  //       duration: 2000,
  //       newWindow: true,
  //       close: false,
  //       gravity: "top",
  //       position: "center",
  //       backgroundColor: "#2b6777",
  //       stopOnFocus: true,
  //     }).showToast();
  //     return;
  //   }
  //   setProgressLoading(true);
  //   // const storage = getStorage();
  //   const storageRef = ref(storage, data.name);
  //   const uploadTask = uploadBytesResumable(storageRef, data);
  //   uploadTask.on(
  //     "state_changed",
  //     (snapshot) => {
  //       // Observe state change events such as progress, pause, and resume
  //       // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
  //       const progress =
  //         (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //       console.log("Upload is " + progress + "% done");
  //     },
  //     (error) => {
  //       console.log(error.message);
  //       // Handle unsuccessful uploads
  //     },
  //     () => {
  //       setProgressLoading(false);
  //       console.log("upload the resume");
  //       setResumeUploadStatus("resume uploaded");
  //       getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
  //         console.log("File available at", downloadURL);
  //       });
  //     }
  //   );
  //   console.log(data);
  // };
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
          Edit candidate evaluation report for {candidateData[0].cName}{" "}
          (Candidate id : {params.candidateId})
        </p>
        <div className={styles.icons}>
          <span className={styles.icon} onClick={updateHandler}>
            <FaSave />
          </span>
          <span className={styles.icon} onClick={gobackHandler}>
            <RiArrowGoBackFill />
          </span>
        </div>
      </div>
      <form action="" className={styles.form}>
        <div className={styles.inputBox}>
          <label htmlFor="">Candidate name</label>
          <input
            type="text"
            placeholder="Candidate's  name"
            value={candidateData[0].cName}
            readOnly
          />
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="">Interviewed by</label>
          <input
            type="text"
            placeholder="Interviewed by (can be more than one)"
            value={candidateData[0].interviewBy}
            readOnly
          />
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="">Job profile</label>
          <input
            type="text"
            placeholder="Job profile"
            value={candidateData[0].jobProfile}
            readOnly
          />
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="">Work experience (in years)</label>
          <input
            type="number"
            placeholder="Work experience"
            value={candidateData[0].workEx}
            readOnly
          />
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="">Relevant work experience (in years)</label>
          <input
            type="number"
            placeholder="Relevant work experience"
            value={candidateData[0].relWorkEx}
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
            value={candidateData[0].date}
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
            value={candidateData[0].time}
            readOnly
          />
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="">Communication skills rating</label>
          <select
            name=""
            id=""
            value={candidateData[0].communicationRating}
            readOnly
          >
            <option value="" disabled>
              Select rating
            </option>
            <option value="Bad">Bad</option>
            <option value="Poor">Poor</option>
            <option value="Below Average">Below Average</option>
            <option value="Average">Average</option>
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
            value={candidateData[0].technicalRating}
            readOnly
          >
            <option value="" disabled>
              Select rating{" "}
            </option>
            <option value="Bad">Bad</option>
            <option value="Poor">Poor</option>
            <option value="Below Average">Below Average</option>
            <option value="Average">Average</option>
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
            value={candidateData[0].analyticalRating}
            readOnly
          >
            <option value="" disabled>
              Select rating{" "}
            </option>
            <option value="Bad">Bad</option>
            <option value="Poor">Poor</option>
            <option value="Below Average">Below Average</option>
            <option value="Average">Average</option>
            <option value="Above Average">Above Average</option>
            <option value="Good">Good</option>
            <option value="Very good">Very good</option>
            <option value="Excellent">Excellent</option>
          </select>
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="">Overall perfomence wrt experience</label>
          <select name="" id="" value={candidateData[0].overallRating} readOnly>
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
            value={candidateData[0].recommendedForNextRound}
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
            value={candidateData[0].strenghts}
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
            value={candidateData[0].weakness}
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
            value={candidateData[0].comments}
            readOnly
          ></textarea>
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="">Current CTC (LPA)</label>
          <input
            type="number"
            placeholder="Current CTC"
            value={
              candidateData[0].currentCTC
                ? candidateData[0].currentCTC
                : newData.currentCTC
            }
            onChange={(e) =>
              setNewData({ ...newData, currentCTC: e.target.value })
            }
          />
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="">Expected CTC (LPA)</label>
          <input
            type="number"
            placeholder="Expected CTC"
            value={
              candidateData[0].expectedCTC
                ? candidateData[0].expectedCTC
                : newData.expectedCTC
            }
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
            value={
              candidateData[0].noticePeriod
                ? candidateData[0].noticePeriod
                : newData.noticePeriod
            }
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
            type="text"
            maxLength="10"
            onKeyPress={(event) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}
            placeholder="Mobile Number"
            value={
              candidateData[0].mobile ? candidateData[0].mobile : newData.mobile
            }
            onChange={(e) => setNewData({ ...newData, mobile: e.target.value })}
          />
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="">Email ID</label>
          <input
            type="email"
            placeholder="Email ID"
            value={
              candidateData[0].email ? candidateData[0].email : newData.email
            }
            onChange={(e) => setNewData({ ...newData, email: e.target.value })}
          />
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="">Preferred location</label>
          <input
            type="text"
            placeholder="Preferred location"
            value={
              candidateData[0].preferredLocation
                ? candidateData[0].preferredLocation
                : newData.preferredLocation
            }
            onChange={(e) =>
              setNewData({ ...newData, preferredLocation: e.target.value })
            }
          />
        </div>
        {/* <div className={styles.inputBox}>
          <label htmlFor="">Resume</label>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <input
              onChange={(e) => setData(e.target.files[0])}
              readOnly={resumeUploadStatus === "resume uploaded"}
              type="file"
              style={{ width: "fit-content", position: "relative", top: "5px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              {progressLoading && (
                <img src={loadingImg} height="30px" width="30px" alt="" />
              )}
              <button
                disabled={resumeUploadStatus === "resume uploaded"}
                onClick={resumeUploadHandler}
                style={{
                  padding: "8px 20px",
                  cursor: "pointer",
                  border: "1px solid gray",
                  backgroundColor:
                    resumeUploadStatus === "resume uploaded"
                      ? "#2b6777"
                      : "white",
                  color:
                    resumeUploadStatus === "resume uploaded"
                      ? "white"
                      : "black",
                }}
              >
                {resumeUploadStatus}
              </button>
            </div>
          </div>
        </div> */}
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
