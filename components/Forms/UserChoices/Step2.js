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
        type: "",
      }}
      validationSchema={Yup.object({
        type: Yup.string().required(
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
            <div> What type of activity are you interested in?</div>
            <div className={styles.flex}>
              <label>
                <Field
                  className={styles.choice}
                  type="radio"
                  name="type"
                  value="Academia"
                />
                Academia (e.g. language classes) 
              </label>
              <label>
                <Field
                  className={styles.choice}
                  type="radio"
                  name="type"
                  value="Arcade"
                />
                Arcade (bowling, laser-tag, arcade games)
              </label>
              <label>
                <Field
                  className={styles.choice}
                  type="radio"
                  name="type"
                  value="Fantasy and Role Play"
                />
                Fantasy and Role Play (board games, D&D)
              </label>
              <label>
                <Field
                  className={styles.choice}
                  type="radio"
                  name="type"
                  value="Music And Arts"
                />
                Music And Arts (dance school, sewing classes)
              </label>
              <label>
                <Field
                  className={styles.choice}
                  type="radio"
                  name="type"
                  value="Sports and Outdoors"
                />
                Sports And Outdoors (swimming, hockey, football etc)
              </label>
            </div>
            {errors.type ? (
              <div className={styles.error}>{errors.type}</div>
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
