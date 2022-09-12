import { Col } from "react-bootstrap";
import styles from "./AppDescription.module.css";

const AppDescription = () => {
  return (
    <Col className={styles.container}>
      <h4 className={styles.heading}>
        {" "}
        Welcome to FunTime, where we <br /> help you discover the best <br />{" "}
        extracurricular activities in town
      </h4>{" "}
      <p>
        {" "}
        FunTime works by recommending its users the activity <br /> which users
        are looking for. It works in a 3-step process:
      </p>
      <ul className={styles.steps}>
        <li> 1. You tell us what type of activity you are looking for </li>
        <li>
          {" "}
          2. Using your requirements, FunTime calcuates what activities you
          would like{" "}
        </li>
        <li> 3. These activities are then shown to you </li>
      </ul>
    </Col>
  );
};

export default AppDescription;
