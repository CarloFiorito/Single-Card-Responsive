import React from "react";
import styles from "./BottomCard.module.css";
import RightSide from "./RightSide";

const BottomCard = () => {
  return (
    <div className={styles.wrapperSub}>
      <div className={styles.testo2}>
        <h3 className={styles.title}>Monthly Subscription</h3>
        <p>
          <span>$29</span> per month
        </p>
        <p className={styles.paragraph}>Full access for less than $1 a day</p>
        <button>Sign Up</button>
      </div>
      <RightSide />
    </div>
  );
};

export default BottomCard;
