import React from "react";
import PropTypes from "prop-types";
import styles from "./DetailedDataItem.module.scss";

export const DetailedDataItem = ({ title, value }) => {
  return (
    <div className={styles.detailedDataItem}>
      <h5 className={styles.detailedDataItem__title}>{`${title}: `}</h5>

      <span className={styles.detailedDataItem__value}>{value}</span>
    </div>
  );
};

DetailedDataItem.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};
