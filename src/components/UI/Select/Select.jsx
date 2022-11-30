import React from "react";

import styles from "./Select.module.scss";

const Select = ({ children, variant = "background", ...props }) => {
  return (
    <span className={styles.select + " " + styles[variant]} {...props}>
      {children}
    </span>
  );
};

export default Select;
