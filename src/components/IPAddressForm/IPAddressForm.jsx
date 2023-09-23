import React from "react";
import PropTypes from "prop-types";
import { TextField, Button, FormGroup } from "@mui/material";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { getDetailedIpAddressData } from "../../api/ipAddress";
import styles from "./IPAddressForm.module.scss";
import { validationSchema } from "../../validation/validationSchema";

export const IPAddressForm = ({
  onStoreData,
  onStoreError,
  onStoreIsLoading
}) => {
  const initialValues = {
    ipAddress: ""
  };

  const handleSubmit = async (values) => {
    const ipAddress = values.ipAddress;

    onStoreError("");
    onStoreIsLoading(true);

    try {
      const data = await getDetailedIpAddressData(ipAddress);

      onStoreData(data);
    } catch (error) {
      onStoreError(error);
    } finally {
      onStoreIsLoading(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <FormGroup className={styles.form__formGroup}>
          <Field
            className={styles.form__textFiled}
            as={TextField}
            name="ipAddress"
            label="IP Address"
            variant="outlined"
            color="success"
            fullWidth
          />
          <ErrorMessage
            className={styles.form__errorMessage}
            name="ipAddress"
            component="div"
          />
        </FormGroup>
        <Button
          className={styles.form__button}
          type="submit"
          variant="contained"
          color="success"
        >
          Send IP Address
        </Button>
      </Form>
    </Formik>
  );
};

IPAddressForm.propTypes = {
  onStoreData: PropTypes.func.isRequired,
  onStoreError: PropTypes.func.isRequired,
  onStoreIsLoading: PropTypes.func.isRequired
};
