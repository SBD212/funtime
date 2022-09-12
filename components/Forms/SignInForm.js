import { signIn } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGoogle,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./SignIn.module.css";

const SignInForm = (props) => {
  return (
    <div className={styles.bg}>
      <div className={styles.container}>
        <button
          className={` ${styles.btn} ${styles.btn_google}`}
          onClick={() =>
            signIn(props.providers.google.id, { callbackUrl: "/activities" })
          }
        >
          <FontAwesomeIcon
            icon={faGoogle}
            style={{ height: "2.5rem", marginRight: "1rem" }}
          />
          <span> Sign in with Google </span>
        </button>{" "}
        <div className="mt-3">
          <div className={styles.text}>
            <div> Or continue with </div>{" "}
          </div>
          <div className={styles.btn_container}>
            <button
              className={styles.btn}
              onClick={() =>
                signIn(props.providers.instagram.id, {
                  callbackUrl: "/activities",
                })
              }
            >
              {" "}
              <FontAwesomeIcon
                icon={faInstagram}
                className={styles.icon}
              />{" "}
              <span> Instagram </span>{" "}
            </button>

            <button
              className={styles.btn}
              onClick={() =>
                signIn(props.providers.twitter.id, {
                  callbackUrl: "/activities",
                })
              }
            >
              {" "}
              <FontAwesomeIcon icon={faTwitter} className={styles.icon} />{" "}
              <span> Twitter </span>{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
