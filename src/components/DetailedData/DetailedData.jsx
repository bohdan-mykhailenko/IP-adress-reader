import React from "react";
import { DetailedDataItem } from "../DetailedDataItem";
import PropTypes from "prop-types";
import styles from "./DetailedData.module.scss";

export const DetailedData = ({ data }) => {
  const {
    country = "...",
    city = "...",
    lat: latitude = 0,
    lon: longitude = 0,
    timezone = "..."
  } = data;
  return (
    <article className={styles.detailedData}>
      <h2 className={styles.detailedData__title}>Detailed IP Adress Data</h2>

      <div className={styles.detailedData__content}>
        <DetailedDataItem title="Country" value={country} />
        <DetailedDataItem title="City" value={city} />
        <DetailedDataItem title="Latitude" value={latitude} />
        <DetailedDataItem title="Longitude" value={longitude} />
        <DetailedDataItem title="Timezone" value={timezone} />
      </div>
    </article>
  );
};

DetailedData.propTypes = {
  data: PropTypes.shape({
    country: PropTypes.string,
    city: PropTypes.string,
    lat: PropTypes.number,
    lon: PropTypes.number,
    timezone: PropTypes.string
  })
};
