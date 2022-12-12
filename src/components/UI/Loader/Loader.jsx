import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import styles from "./Loader.module.scss";

const Loader = ({ isLoading }) => {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    let loadingTimer;
    if (isLoading) {
      loadingTimer = setTimeout(() => {
        setIsShow(true);
      }, 200);
    } else {
      setIsShow(false);
      clearTimeout(loadingTimer);
    }
  }, [isLoading]);

  return <>{isShow ? <div className={styles.loader}></div> : <></>}</>;
};

export default Loader;
