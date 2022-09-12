import { Formik, Form } from "formik";
import * as Yup from "yup";
import { FormContext } from "../../../context/FormContext";
import MyTextInput from "../Input Fields/MyTextInput";
import { useContext } from "react";
import styles from "../Form.module.css";

const Step1 = (props) => {
  const { setFormValues } = useContext(FormContext);

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email("Invalid email address")
          .required("A valid e-mail is required"),
        password: Yup.string()
          .min(6, "Password must be at least 6 characters")
          .required("Password is required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
        setFormValues(values);
        props.nextPage();
      }}
    >
      <Form className={styles.form}>
        <MyTextInput
          label="E-MAIL"
          name="email"
          type="email"
          placeholder="Enter your e-mail"
        />
        <MyTextInput
          label="PASSWORD"
          name="password"
          type="text"
          placeholder="*****"
        />
        <button className={styles.btn} variant="success" type="submit">
          Next
        </button>{" "}
      </Form>
    </Formik>
  );
};

export default Step1;
