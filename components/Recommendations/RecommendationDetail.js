import Image from "next/image";
import { useState } from "react";
import { useSession } from "next-auth/react";
import ModalContainer from "../Modal/ModalContainer";
import { FiHeart } from "react-icons/fi";
import styles from "./Recommendation.module.css";

const RecommendationDetail = (props) => {
  const { data: session } = useSession();
  const { userId } = session;

  const [show, setShow] = useState(false);
  const [isActive, setActive] = useState(props.detailedView ? true : false);

  const updateActivtiy = async () => {
    //make a post request
    if (isActive === false) {
      const data = { ...props, userId: userId };
      setActive(true);
      await fetch("/api/likes", {
        method: "POST",
        body: JSON.stringify(data),
      });
    }

    //make a delete request
    else {
      setActive(false);
      await fetch("/api/likes", {
        method: "DELETE",
        body: JSON.stringify({
          organisation: props.organisation,
          userId: userId,
        }),
      });
      props.detailedView ? props.mutate() : null;
    }
  };

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

      {props.detailedView ? (
        <Image
          src={props.activityImg}
          alt="activity"
          width={300}
          height={200}
        />
      ) : (
        <Image
          src={props.activityImg}
          alt="activity"
          width={180}
          height={130}
          onClick={showModal}
          className={styles.activity_img}
        />
      )}

      <div className={styles.space}>
        <div className={styles.title}>
          {props.detailedView ? (
            <h4 className={styles.activity_name}> {props.name} </h4>
          ) : (
            <h4 className={styles.activity_name} onClick={showModal}>
              {" "}
              {props.name}{" "}
            </h4>
          )}
          <div className={styles.flex}>
            <div className={styles.like}>
              {" "}
              <FiHeart
                onClick={updateActivtiy}
                className={isActive ? styles.heart_clicked : styles.heart}
              />
            </div>{" "}
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
        </div>

        <p> {props.organisation} </p>
        <p> {props.dis} from your postcode </p>
        {props.detailedView && <p> Phone: {props.phone} </p>}
        {props.detailedView && <p> Postcode: {props.postcode} </p>}
        {props.detailedView && <p> Address: {props.address} </p>}
        <a className={styles.link} href={props.url}>
          {" "}
          Take me to the site{" "}
        </a>
      </div>
    </div>
  );
};

export default RecommendationDetail;
