import React, { useState } from "react";
import Button from "../Button/Button";
import styles from "./Accordion.module.scss";

const Accordion = ({ titleDefault, titleHidden = titleDefault, children }) => {
  const [isShowAnswer, setIsShowAnswer] = useState({
    flag: false,
    buttonValue: titleDefault,
  });

  const toggleShowAnswer = () => {
    setIsShowAnswer({
      flag: !isShowAnswer.flag,
      buttonValue:
        isShowAnswer.buttonValue === titleDefault ? titleHidden : titleDefault,
    });
  };
  return (
    <div className={styles.accordion}>
      <div className={styles.title}>
        <Button value={isShowAnswer.buttonValue} onClick={toggleShowAnswer} />
      </div>
      <div className={styles.content}>
        {isShowAnswer.flag ? <p>{children}</p> : ""}
      </div>
    </div>
  );
};

export default Accordion;
