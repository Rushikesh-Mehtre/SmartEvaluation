import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./CandidateReviewPage.module.scss";
import { FiDownload } from "react-icons/fi";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { AiFillEdit } from "react-icons/ai";
import { RiArrowGoBackFill } from "react-icons/ri";
import DeleteModal from "../../components/DeleteModal";
import { collection, getDocs } from "firebase/firestore";
import { database } from "../../firebaseConfig";
import loadingImg from "../../assets/images/loading.gif";
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
const CandidateReviewPage = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const collectionRef = collection(database, "candidates");
  const [candidateData, setCandidateData] = useState(initialState);
  const [deleted, setDeleted] = useState(false);
  const deleteHandler = () => {
    setDeleted(true);
    console.log("something");
    // navigate("/reviews");
  };
  console.log(candidateData);
  useEffect(
    () => {
      setLoading(true);
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
          console.log(
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
      setLoading(false);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [deleted]
  );
  // const navigate = useNavigate();
  const downloadPdfDocument = () => {
    const input = document.getElementById("report");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", 0, 0);
      pdf.save(`${candidateData[0].cName}_Evaluation_Report.pdf`);
    });
  };

  const editHandler = () => {
    navigate(`/edit-candidate-report/${params.candidateId}`);
  };

  const goBackHandler = () => {
    navigate(-1);
  };

  return (
    <div className={styles.candidateReviewPage}>
      {loading && <img src={loadingImg} className={styles.loadingImg} alt="" />}
      <div className={styles.topHeader}>
        <span onClick={editHandler}>
          <AiFillEdit />{" "}
        </span>
        <span onClick={deleteHandler} className={styles.deleteModal}>
          <DeleteModal id={params.candidateId} name={candidateData[0].cName} />
        </span>

        <span onClick={downloadPdfDocument}>
          <FiDownload className={styles.downloadIcon} />
        </span>
        <span onClick={goBackHandler}>
          <RiArrowGoBackFill />
        </span>
      </div>
      <div id="report" className={styles.report}>
        <div className={styles.header}>
          <p className={styles.head}>
            <span>
              Evaluation report for <strong>{candidateData[0].cName}</strong>{" "}
            </span>
            <span>(Candidate Id : {params.candidateId}) </span>
          </p>
        </div>
        <div className={styles.reportData}>
          <div className={styles.left}>
            <p>
              <span>
                <strong>Candidate Name : </strong>
              </span>
              <span>{candidateData[0].cName}</span>{" "}
            </p>
            <p>
              <span>
                <strong>Job Profile : </strong>
              </span>
              <span>{candidateData[0].jobProfile} </span>
            </p>
            <p>
              <span>
                <strong>Experience (in years) : </strong>
              </span>
              <span>{candidateData[0].workEx}</span>{" "}
            </p>
            <p>
              <span>
                {" "}
                <strong>Relevant Experience (in years) : </strong>
              </span>
              <span>{candidateData[0].relWorkEx}</span>{" "}
            </p>
            <p>
              <span>
                <strong>Current CTC (LPA) : </strong>
              </span>
              <span>{candidateData[0].currentCTC}</span>{" "}
            </p>
            <p>
              <span>
                <strong>Expected CTC (LPA) : </strong>
              </span>
              <span>{candidateData[0].expectedCTC}</span>{" "}
            </p>
            <p>
              <span>
                <strong>Notice Period : </strong>
              </span>
              <span>{candidateData[0].noticePeriod}</span>{" "}
            </p>
            <p>
              <span>
                <strong>Mobile Number : </strong>
              </span>
              <span>{candidateData[0].mobile}</span>{" "}
            </p>
            <p>
              <span>
                <strong>Email id : </strong>
              </span>
              <span>{candidateData[0].email}</span>{" "}
            </p>
            <p>
              <span>
                <strong>Preferred Location : </strong>
              </span>
              <span>{candidateData[0].preferredLocation}</span>{" "}
            </p>
          </div>
          <div className={styles.right}>
            <p>
              <span>
                <strong>Interviewed by : </strong>
              </span>
              <span>{candidateData[0].interviewBy}</span>{" "}
            </p>
            <p>
              <span>
                <strong>Interview slot : </strong>
              </span>
              <span>
                {candidateData[0].date} | {candidateData[0].time}
              </span>{" "}
            </p>
            <p>
              <span>
                <strong>Communication skills : </strong>
              </span>
              <span>{candidateData[0].communicationRating}</span>{" "}
            </p>
            <p>
              <span>
                <strong>Technical skills : </strong>
              </span>
              <span>{candidateData[0].technicalRating}</span>{" "}
            </p>
            <p>
              <span>
                <strong>Analaytical skills : </strong>
              </span>
              <span>{candidateData[0].analyticalRating}</span>{" "}
            </p>
            <p>
              <span>
                <strong>Overall Performence : </strong>
              </span>
              <span>{candidateData[0].overallRating}</span>{" "}
            </p>
            <p>
              <span>
                <strong>Recommended for next round: </strong>
              </span>
              <span>{candidateData[0].recommendedForNextRound}</span>{" "}
            </p>

            <p>
              <span>
                {" "}
                <strong>Strengths : </strong>
              </span>
              <span>{candidateData[0].strenghts}</span>
            </p>
            <p>
              <span>
                <strong>Weakness : </strong>
              </span>
              <span>{candidateData[0].weakness}</span>
            </p>
            <p>
              <span>
                <strong>Other Comments :</strong>
              </span>
              <span> {candidateData[0].comments}</span>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateReviewPage;
