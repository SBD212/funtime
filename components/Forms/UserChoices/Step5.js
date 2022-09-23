import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import { FormContext } from "../../../context/FormContext";
import MyTextInput from "../Input Fields/MyTextInput";
import { useContext } from "react";
import styles from "./Forms.module.css";

const Step5 = (props) => {
  const router = useRouter();
  const { setFormValues } = useContext(FormContext);

  return (
    <Formik
      initialValues={{
        postcode: "",
      }}
      validationSchema={Yup.object({
        postcode: Yup.string()
          .matches(
            /^[A-Z]{1,2}\d[A-Z\d]? ?\d[A-Z]{2}$/,
            "The postcode you entered is in an invalid format"
          )
          .required("A postcode is required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false);
        }, 400);
        setFormValues(values);
        router.push("/results");
      }}
    >
      <div className={styles.form_container}>
        <Form className={styles.form}>
          <div> Finally, please enter your postcode</div>
          <MyTextInput
            name="postcode"
            type="text"
            placeholder="e.g. CF24 3EE"
          />
          <div className={styles.btn_container}>
            <button className={styles.btn} onClick={props.prevPage}>
              Back
            </button>
            <button className={styles.btn} type="submit">
              Submit
            </button>
          </div>
        </Form>
      </div>
    </Formik>
  );
};

export default Step5;
