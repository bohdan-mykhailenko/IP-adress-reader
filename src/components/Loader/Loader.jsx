import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import styles from "./Loader.module.scss";

export const Loader = () => {
  return (
    <div className={styles.loader}>
      <CircularProgress
        className={styles.loader__muiLoader}
        color="info"
        size={30}
      />
    </div>
  );
};
