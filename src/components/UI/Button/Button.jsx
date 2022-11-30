import React from "react";
import styles from "./Button.module.scss";

const Button = (props) => {
  return (
    <button {...props} className={styles.button}>
      {props.value}
    </button>
  );
};

export default Button;
