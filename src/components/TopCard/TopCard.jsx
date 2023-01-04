import React from "react";
import styles from "./TopCard.module.css";
const TopCard = () => {
  return (
    <div className={styles.testo1}>
      <h3>Join our community</h3>
      <p className={styles.subTitle}>
        30-day, hassle-free money back guarantee
      </p>
      <p>
        Gain access to our full library of tutorials along with expert code
        reviews. Perfect for any developers who are serious about honing their
        skills.
      </p>
    </div>
  );
};

export default TopCard;
