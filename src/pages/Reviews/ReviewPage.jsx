import React from "react";
import CandidateBlock from "../../components/CandidateBlock";
import styles from "./ReviewPage.module.scss";
const ReviewPage = () => {
  const candidatesData = [
    {
      id: "SG00000001",
      cName: "Rushikesh Mehtre",
      interviewBy: "Rushikesh Mehtre",
      jobProfile: "ReactJS",
      workEx: 0.5,
      relWorkEx: 0.5,
      date: "01/04/2022",
      time: "16.30",
      communicationRating: "good",
      technicalRating: "good",
      analyticalRating: "good",
      overallRating: "good",
      rating: 3.5,
      strenghts: "Good communication skills",
      weakness: "little bit under confident",
      comments: "recommended for second round",
    },
    {
      id: "SG00000002",
      cName: "Rushikesh Mehtre",
      interviewBy: "Rushikesh Mehtre",
      jobProfile: "ReactJS",
      workEx: 0.5,
      relWorkEx: 0.5,
      date: "01/04/2022",
      time: "16.30",
      communicationRating: "good",
      technicalRating: "good",
      analyticalRating: "good",
      overallRating: "good",
      rating: 3.5,
      strenghts: "Good communication skills",
      weakness: "little bit under confident",
      comments: "recommended for second round",
    },
    {
      id: "SG00000003",
      cName: "Rushikesh Mehtre",
      interviewBy: "Rushikesh Mehtre",
      jobProfile: "ReactJS",
      workEx: 0.5,
      relWorkEx: 0.5,
      date: "01/04/2022",
      time: "16.30",
      communicationRating: "good",
      technicalRating: "good",
      analyticalRating: "good",
      overallRating: "good",
      rating: 3.5,
      strenghts: "Good communication skills",
      weakness: "little bit under confident",
      comments: "recommended for second round",
    },
    {
      id: "SG00000004",
      cName: "Rushikesh Mehtre",
      interviewBy: "Rushikesh Mehtre",
      jobProfile: "ReactJS",
      workEx: 0.5,
      relWorkEx: 0.5,
      date: "01/04/2022",
      time: "16.30",
      communicationRating: "good",
      technicalRating: "good",
      analyticalRating: "good",
      overallRating: "good",
      rating: 3.5,
      strenghts: "Good communication skills",
      weakness: "little bit under confident",
      comments: "recommended for second round",
    },
    {
      id: "SG00000005",
      cName: "Rushikesh Mehtre",
      interviewBy: "Rushikesh Mehtre",
      jobProfile: "ReactJS",
      workEx: 0.5,
      relWorkEx: 0.5,
      date: "01/04/2022",
      time: "16.30",
      communicationRating: "good",
      technicalRating: "good",
      analyticalRating: "good",
      overallRating: "good",
      rating: 3.5,
      strenghts: "Good communication skills",
      weakness: "little bit under confident",
      comments: "recommended for second round",
    },
  ];
  return (
    <div className={styles.reviewPage}>
      <div className={styles.header}>
        <p>Evaluation reports (Latest)</p>
        <div>
          <label htmlFor="">Filter records</label>
          <input type="date" />
        </div>
      </div>
      <div className={styles.content}>
        {candidatesData.map((item) => {
          return (
            <CandidateBlock
              key={item.id}
              cName={item.cName}
              rating={item.rating}
              interviewBy={item.interviewBy}
              date={item.date}
              time={item.time}
              id={item.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ReviewPage;
