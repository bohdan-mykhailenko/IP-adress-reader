import React, { useState } from "react";
import { DetailedData } from "../DetailedData";
import { IPAddressForm } from "../IPAddressForm";
import { Loader } from "../Loader";
import { ErrorMessage } from "../ErrorMessage";
import styles from "./ContentBox.module.scss";

export const ContentBox = () => {
  const [data, setData] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const storeData = (newData) => {
    setData(newData);
  };

  const storeError = (newError) => {
    setError(newError);
  };

  const storeIsLoading = (isDataLoading) => {
    setIsLoading(isDataLoading);
  };

  return (
    <section className={styles.contentBox}>
      <IPAddressForm
        onStoreData={storeData}
        onStoreError={storeError}
        onStoreIsLoading={storeIsLoading}
      />

      {error ? (
        <ErrorMessage error={error} />
      ) : isLoading ? (
        <Loader />
      ) : (
        <DetailedData data={data} />
      )}
    </section>
  );
};
