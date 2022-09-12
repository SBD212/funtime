import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { FormContext } from "../../../context/FormContext";
import { useContext } from "react";
import styles from "./Forms.module.css";

const Step1 = (props) => {
  const { setFormValues } = useContext(FormContext);

  return (
    <Formik
      initialValues={{
        social: "",
      }}
      validationSchema={Yup.object({
        social: Yup.string().required(
          "Please select one of the options before proceeding"
        ),
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
            <div> Would you prefer going alone or with friends?</div>
            <div className={styles.flex}>
              <label>
                <Field
                  className={styles.choice}
                  type="radio"
                  name="social"
                  value="solo"
                />
                Alone
              </label>
              <label>
                <Field
                  className={styles.choice}
                  type="radio"
                  name="social"
                  value="group"
                />
                Friends
              </label>
            </div>
            {errors.social ? (
              <div className={styles.error}>{errors.social}</div>
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

export default Step1;
