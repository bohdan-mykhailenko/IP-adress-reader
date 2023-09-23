import React from "react";
import PropTypes from "prop-types";
import styles from "./ErrorMessage.module.scss";

export const ErrorMessage = ({ error }) => {
  return (
    <div className={styles.errorMessage}>
      <h2 className={styles.errorMessage__message}>
        {"Error message: "}
        <span className={styles["errorMessage__message--text"]}>
          {error.message}
        </span>
      </h2>
    </div>
  );
};

ErrorMessage.propTypes = {
  error: PropTypes.shape({
    message: PropTypes.string.isRequired
  }).isRequired
};
