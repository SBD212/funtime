import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { FormContext } from "../../../context/FormContext";
import { useContext } from "react";
import styles from "./Forms.module.css";

const Step4 = (props) => {
  const { setFormValues } = useContext(FormContext);

  return (
    <Formik
      initialValues={{
        gender: "",
      }}
      validationSchema={Yup.object({
        gender: Yup.string()
          // .matches(
          //   `^([A-Z]{1,2}\d[A-Z\d]? ?\d[A-Z]{2}|GIR ?0A{2})$`,
          //   "The postcode you entered is in an invalid format"
          // )
          .required("Gender is required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false);
        }, 400);
        setFormValues(values);
        props.nextPage();
      }}
    >
      {({ errors }) => (
        <div className={styles.form_container}>
          <Form className={styles.form}>
            <div> Please select your gender</div>
            <div className={styles.flex}>
              <label>
                <Field
                  className={styles.choice}
                  type="radio"
                  name="gender"
                  value="male"
                />
                Male
              </label>
              <label>
                <Field
                  className={styles.choice}
                  type="radio"
                  name="gender"
                  value="female"
                />
                Female
              </label>
            </div>
            {errors.gender ? (
              <div className={styles.error}>{errors.gender}</div>
            ) : null}
            <div className={styles.btn_container}>
              <button className={styles.btn} onClick={props.prevPage}>
                Back
              </button>
              <button className={styles.btn} type="submit">
                Next
              </button>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default Step4;
