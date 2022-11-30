import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import styles from "./Section.module.scss";

const Section = ({ variant = "mono", title, children, classes = [], ...props }) => {
  const [classList, setClassList] = useState("");
  useEffect(() => {
    let newClassList = classes.reduce((acc, currentClass) => {
      return (acc += currentClass + " ");
    }, "");
    newClassList += styles[variant];
    setClassList(newClassList);
  }, [classes, variant]);

  return (
    <section {...props} className={styles.section + " " + classList}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.content}>{children}</div>
    </section>
  );
};

export default Section;
