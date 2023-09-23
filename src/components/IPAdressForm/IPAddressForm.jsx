import React from "react";
import PropTypes from "prop-types";
import * as Yup from "yup";
import { TextField, Button, FormGroup } from "@mui/material";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { getDetailedIpAdressData } from "../../api/ipAdress";
import styles from "./IPAdressForm.module.scss";

export const IPAddressForm = ({
  onStoreData,
  onStoreError,
  onStoreIsLoading
}) => {
  const initialValues = {
    ipAddress: ""
  };

  const validationSchema = Yup.object({
    ipAddress: Yup.string()
      .required("IP Address is required")
      .matches(/^[0-9.]{8,16}$/, "Invalid IP Address! (e.g. 54.23.32.166)")
  });

  const handleSubmit = async (values) => {
    const ipAddress = values.ipAddress;

    onStoreIsLoading(true);

    console.log(ipAddress);

    try {
      const data = await getDetailedIpAdressData(ipAddress);

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
          Submit
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
