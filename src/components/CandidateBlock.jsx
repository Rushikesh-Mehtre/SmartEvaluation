import React from "react";
import styles from "../styles/CandidateBlock.module.scss";
import { AiFillEdit, AiFillEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import DeleteModal from "./DeleteModal";

const CandidateBlock = (props) => {
  const navigate = useNavigate();
  const id = props.id;
  console.log(id);
  const viewHandler = () => {
    navigate(`/candidate-report/${id}`);
  };
  const editHandler = () => {
    navigate(`/edit-candidate-report/${id}`);
  };

  return (
    <div className={styles.candidateBlock}>
      <div className={styles.text}>
        <p>
          Candidate Name : <strong>{props.cName}</strong>{" "}
        </p>
        <p>
          Interviewed By : <strong>{props.interviewBy}</strong>{" "}
        </p>
        <p>
          Interview Slot :{" "}
          <strong>
            {props.date} | {props.time}
          </strong>
        </p>
        <p>
          Overall performence :<strong>{props.rating}</strong>{" "}
        </p>
      </div>
      <div className={styles.actions}>
        <span>
          <AiFillEye className={styles.icon} onClick={viewHandler} />
        </span>
        <span>
          <AiFillEdit className={styles.icon} onClick={editHandler} />
        </span>
        <span>
          <DeleteModal id={id} />
          {/* <AiFillDelete className={styles.icon} onClick={deleteHandler} /> */}
        </span>
      </div>
    </div>
  );
};

export default CandidateBlock;
