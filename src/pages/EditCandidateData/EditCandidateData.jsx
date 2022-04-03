import React from "react";
import { useParams } from "react-router-dom";
import styles from "./EditCandidateData.module.scss";
const EditCandidateData = () => {
  const params = useParams();
  return (
    <div className={styles.editCandidateData}>
      <h1>
        Lets edit candidate evaluation report for candidate id :{" "}
        {params.candidateId}
      </h1>
    </div>
  );
};

export default EditCandidateData;
