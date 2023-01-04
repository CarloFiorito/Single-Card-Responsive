import React from "react";
import styles from "./RightSide.module.css";
const RightSide = () => {
  return (
    <div className={styles.testo3}>
      <h3 className={styles.title}>Why Us</h3>
      <p className={styles.list}> Tutorials by industry experts</p>
      <p className={styles.list}> Peer & expert code review</p>
      <p className={styles.list}> Coding exercises</p>
      <p className={styles.list}> Access to our GitHub repos</p>
      <p className={styles.list}> Community forum</p>
      <p className={styles.list}> New videos every week</p>
    </div>
  );
};

export default RightSide;
