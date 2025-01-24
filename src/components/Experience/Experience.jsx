import React from "react";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import education from "../../data/education.json";  // Import the education data
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <img
                  src={getImageUrl(historyItem.imageSrc)}
                  alt={`${historyItem.organisation} Logo`}
                />
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <h2 className={styles.title}>Certification</h2>
      <ul className={styles.history}>
        {education.map((educationItem, id) => {
          return (
            <li key={id} className={styles.historyItem}>
              <img
                src={getImageUrl(educationItem.imageSrc)}
                alt={`${educationItem.institution} Logo`}
              />
              <div className={styles.historyItemDetails}>
                <h3>{`${educationItem.degree}, ${educationItem.institution}`}</h3>
                <p>{`${educationItem.startDate} - ${educationItem.endDate}`}</p>
                <ul>
                  {/* {educationItem.details.map((detail, id) => {
                    return <li key={id}>{detail}</li>;
                  })} */}
                </ul>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
