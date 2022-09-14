import React, { useState } from "react";
import classes from "./BoxReadMore.module.css";

interface IProps {
  mainText: string,
  hiddenText: string
}

const BoxReadMore: React.FC<IProps> = ({ mainText, hiddenText }) => {
  const [displayText, setDisplayText] = useState(false);

  const displayTextHandler: React.MouseEventHandler<HTMLButtonElement> = () => {
    setDisplayText(prevDisplayText => !prevDisplayText);
  }

  return (
    <div className={classes.BoxReadMore}>
      <p>
        {mainText}

        <span className={`${classes.boxReadMoreText} ${displayText ? classes.boxReadMoreTextOpen : null}`}>{hiddenText}</span>
      </p>
      <button type="button" className={classes.readMoreBtn} onClick={displayTextHandler}> {displayText ? "Read less" : "Read More..."}</button>
    </div>
  );
};

export default BoxReadMore;
