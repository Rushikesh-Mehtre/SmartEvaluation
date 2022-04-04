import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./CandidateReviewPage.module.scss";
import { FiDownload } from "react-icons/fi";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { AiFillEdit } from "react-icons/ai";
import { RiArrowGoBackFill } from "react-icons/ri";
import DeleteModal from "../../components/DeleteModal";

const CandidateReviewPage = () => {
  const navigate = useNavigate();
  const downloadPdfDocument = () => {
    const input = document.getElementById("report");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", 0, 0);
      pdf.save(`Rushikesh_Mehtre_Evaluation_Report.pdf`);
    });
  };
  const params = useParams();
  const editHandler = () => {
    navigate(`/edit-candidate-report/${params.candidateId}`);
  };

  const goBackHandler = () => {
    navigate(-1);
  };

  return (
    <div className={styles.candidateReviewPage}>
      <div className={styles.topHeader}>
        <span>
          <AiFillEdit onClick={editHandler} />{" "}
        </span>
        <span>
          <DeleteModal id={params.candidateId} />
        </span>

        <span>
          <FiDownload
            className={styles.downloadIcon}
            onClick={downloadPdfDocument}
          />
        </span>
        <span>
          <RiArrowGoBackFill onClick={goBackHandler} />
        </span>
      </div>
      <div id="report">
        <div className={styles.header}>
          <h2 className={styles.head}>
            Evaluation report for (Candidate Id : {params.candidateId}){" "}
          </h2>
        </div>
        <div className={styles.reportData}>
          <div className={styles.left}>
            <p>
              <span>
                <strong>Candidate Name : </strong>
              </span>
              <span>Rushikesh Mehtre</span>{" "}
            </p>
            <p>
              <span>
                <strong>Job Profile : </strong>
              </span>
              <span>ReactJS </span>
            </p>
            <p>
              <span>
                <strong>Experience : </strong>
              </span>
              <span>0.5 years</span>{" "}
            </p>
            <p>
              <span>
                {" "}
                <strong>Relevant Experience : </strong>
              </span>
              <span>0.5 years</span>{" "}
            </p>
            <p>
              <span>
                <strong>Current CTC : </strong>
              </span>
              <span>3.6LPA</span>{" "}
            </p>
            <p>
              <span>
                <strong>Expected CTC : </strong>
              </span>
              <span>6.5LPA</span>{" "}
            </p>
            <p>
              <span>
                <strong>Notice Period : </strong>
              </span>
              <span>45 days</span>{" "}
            </p>
            <p>
              <span>
                <strong>Mobile Number : </strong>
              </span>
              <span>7303133973</span>{" "}
            </p>
            <p>
              <span>
                <strong>Email id : </strong>
              </span>
              <span>rsmrsm5952@gmail.com</span>{" "}
            </p>
            <p>
              <span>
                <strong>Preferred Location : </strong>
              </span>
              <span>Pune</span>{" "}
            </p>
          </div>
          <div className={styles.right}>
            <p>
              <span>
                <strong>Interviewed by : </strong>
              </span>
              <span>Rushikesh Mehtre</span>{" "}
            </p>
            <p>
              <span>
                <strong>Interview slot : </strong>
              </span>
              <span>01/04/2022 | 16.30PM</span>{" "}
            </p>
            <p>
              <span>
                <strong>Communication skills : </strong>
              </span>
              <span>good</span>{" "}
            </p>
            <p>
              <span>
                <strong>Technical skills : </strong>
              </span>
              <span>good</span>{" "}
            </p>
            <p>
              <span>
                <strong>Analaytical skills : </strong>
              </span>
              <span>good</span>{" "}
            </p>
            <p>
              <span>
                <strong>Overall Performence : </strong>
              </span>
              <span>good</span>{" "}
            </p>
            <p>
              <span>
                <strong>Recommended for next round: </strong>
              </span>
              <span>yes</span>{" "}
            </p>

            <p>
              <span>
                {" "}
                <strong>Strengths : </strong>
              </span>
              <span>good communication skils</span>
            </p>
            <p>
              <span>
                <strong>Weakness : </strong>
              </span>
              <span>Didn't find any</span>
            </p>
            <p>
              <span>
                <strong>Other Comments :</strong>
              </span>
              <span>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                blanditiis .
              </span>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateReviewPage;
