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
        category: "",
      }}
      validationSchema={Yup.object({
        category: Yup.string().required(
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
            <div> Would you prefer something indoors or outdoors?</div>
            <div className={styles.flex}>
              <label>
                <Field
                  className={styles.choice}
                  type="radio"
                  name="category"
                  value="in"
                />
                Indoors
              </label>
              <label>
                <Field
                  className={styles.choice}
                  type="radio"
                  name="category"
                  value="out"
                />
                Outdoors
              </label>
            </div>
            {errors.category ? (
              <div className={styles.error}>{errors.category}</div>
            ) : null}

            <button className={styles.btn} type="submit">
              Next
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default Step1;
