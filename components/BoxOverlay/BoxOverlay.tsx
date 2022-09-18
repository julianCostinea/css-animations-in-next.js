import React from "react";
import Image from "next/image";
import classes from "./BoxOverlay.module.css";


const BoxOverlay: React.FC = () => {
  return (
    <div className={classes.BoxOverlayContainer}>
      <Image src="https://images.unsplash.com/photo-1531169509526-f8f1fdaa4a67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" layout="fill" />
      <div className={classes.contentOverlay}></div>
      <div className={`${classes.contentDetails} ${classes.fadeInBottom}`}>
        <h3 className={classes.contentTitle}>Title</h3>
        <p className={classes.contentText}>Description</p>
      </div>
    </div>
  );
};

export default BoxOverlay;
