import Image from "next/image";
import { useState } from "react";
import ModalContainer from "../Modal/ModalContainer";
import styles from "./Recommendation.module.css";

const RecommendationDetail = (props) => {
  const [show, setShow] = useState(false);

  const showModal = () => {
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };

  return (
    <div className={styles.flex}>
      {show === true && (
        <ModalContainer
          name={props.name}
          organisation={props.organisation}
          dist={props.dis}
          url={props.url}
          phone={props.phone}
          address={props.address}
          timings={props.timings}
          postcode={props.postcode}
          hideModal={hideModal}
        />
      )}

      <Image src={props.activityImg} alt="activity" width={180} height={130} />
      <div className={styles.space}>
        <div className={styles.title} onClick={showModal}>
          <h4> {props.name} </h4>
          <div className={styles.rating}>
            {" "}
            <Image
              src="/images/star.png"
              alt="star-rating"
              width={20}
              height={20}
            />{" "}
            <span className={styles.ratingtext}> {props.rating} </span>
          </div>{" "}
        </div>

        <p> {props.organisation} </p>
        <p> {props.dis} from your postcode </p>
        <a className={styles.link} href={props.url}>
          {" "}
          Take me to the site{" "}
        </a>
      </div>
    </div>
  );
};

export default RecommendationDetail;
