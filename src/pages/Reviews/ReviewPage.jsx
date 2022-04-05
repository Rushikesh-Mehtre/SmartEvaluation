import React, { useEffect, useState } from "react";
import CandidateBlock from "../../components/CandidateBlock";
import styles from "./ReviewPage.module.scss";
import { collection, getDocs } from "firebase/firestore";
import { database } from "../../firebaseConfig";
import loadingImg from "../../assets/images/loading.gif";
import { BiRefresh } from "react-icons/bi";
const ReviewPage = () => {
  const [refresh, setRefresh] = useState(false);
  const [date, setDate] = useState();
  // console.log(date);
  const collectionRef = collection(database, "candidates");
  const [loading, setLoading] = useState(true);
  // setLoading(true);
  useEffect(
    () => {
      // window.scrollTo(0, 0);
      setLoading(true);
      if (date) {
        setTimeout(() => {
          getDocs(collectionRef)
            .then((response) => {
              setCandidateData(
                response.docs
                  .map((item) => {
                    return { ...item.data(), id: item.id };
                  })
                  .filter((item) => {
                    return item.date === date;
                  })
              );
            })
            .catch((error) => console.log(error));
          setLoading(false);
        }, 1000);
        return;
      }
      getDocs(collectionRef)
        .then((response) => {
          setCandidateData(
            response.docs.map((item) => {
              return { ...item.data(), id: item.id };
            })
          );
        })
        .catch((error) => console.log(error));
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [refresh]
  );
  const [candidateData, setCandidateData] = useState([]);
  const refreshHandler = () => {
    setLoading(true);
    setTimeout(() => {
      getDocs(collectionRef)
        .then((response) => {
          setCandidateData(
            response.docs.map((item) => {
              return { ...item.data(), id: item.id };
            })
          );
        })
        .catch((error) => console.log(error));
      setLoading(false);
    }, 1000);
    setRefresh((prev) => !prev);
    setDate("");
  };
  const deleteHandler = () => {
    console.log("delete handler called");
    setRefresh((prev) => !prev);
  };
  const dateFilterHandler = (e) => {
    setDate(e.target.value);
    // console.log(e.target.value);
  };
  return (
    <div className={styles.reviewPage}>
      {loading && <img src={loadingImg} className={styles.loadingImg} alt="" />}
      <div className={styles.header}>
        <p>Evaluation reports (Latest)</p>
        <div>
          <label htmlFor="">Filter records</label>
          <input type="date" value={date} onChange={dateFilterHandler} />
          <span className={styles.refreshIcon} onClick={refreshHandler}>
            <BiRefresh />
          </span>
        </div>
      </div>
      <div className={styles.content}>
        {candidateData.length > 0 ? (
          candidateData.map((item) => {
            return (
              <CandidateBlock
                onClick={deleteHandler}
                key={item.id}
                cName={item.cName}
                rating={item.rating}
                interviewBy={item.interviewBy}
                date={item.date}
                time={item.time}
                id={item.id}
                recommendedForNextRound={item.recommendedForNextRound}
              />
            );
          })
        ) : (
          <p style={{ fontSize: "20px", marginTop: "20px" }}></p>
        )}
      </div>
    </div>
  );
};

export default ReviewPage;
