import { useField } from "formik";
import styles from "../UserChoices/Forms.module.css";

const MyTextInput = ({ ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className={styles.flex}>
      <input
        className={
          meta.touched && meta.error
            ? styles.invalid
            : meta.touched && !meta.error
            ? styles.success
            : styles.input
        }
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className={styles.error}>{meta.error}</div>
      ) : null}
    </div>
  );
};

export default MyTextInput;
