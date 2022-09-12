import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import { Fragment, useState } from "react";
import styles from "./Forms.module.css";

const UserChoicesForm = () => {
  const [page, setPage] = useState(0);

  const nextPage = () => {
    setPage((page) => page + 1);
  };

  const prevPage = () => {
    setPage((page) => page - 1);
  };

  return (
    <Fragment>
      <div className={styles.form_title}>
        <h5> Help FunTime decide what you're looking for! </h5>
      </div>
      <hr className={styles.line} />

      {page === 0 && <Step1 nextPage={nextPage} />}
      {page === 1 && <Step2 nextPage={nextPage} prevPage={prevPage} />}
      {page === 2 && <Step3 nextPage={nextPage} prevPage={prevPage} />}
      {page === 3 && <Step4 nextPage={nextPage} prevPage={prevPage} />}
      {page === 4 && <Step5 prevPage={prevPage} />}
    </Fragment>
  );
};

export default UserChoicesForm;
