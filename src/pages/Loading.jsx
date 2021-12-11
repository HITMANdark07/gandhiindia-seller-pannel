import React from "react";
import styles from '../assets/css/Loading.module.css';

const Loading = () => {
  return (
    <div className={styles.body}>
    <div className={styles.loadingboxes}>
      <div className={styles.box}>
        <div ></div>
        <div ></div>
        <div ></div>
        <div ></div>
      </div>
      <div className={styles.loadingbox}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={styles.loadingbox}>
        <div ></div>
        <div ></div>
        <div ></div>
        <div ></div>
      </div>
      <div className={styles.loadingbox}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    </div>
  );
};

export default Loading;
