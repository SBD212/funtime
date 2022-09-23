import { Fragment } from "react";
import useSWR from "swr";
import Card from "../../UI/Card/Card";
import RecommendationDetail from "../RecommendationDetail";
import styles from "../Liked/SavedRecommendations.module.css";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const SavedRecommendations = (props) => {
  const { data, mutate } = useSWR("/api/likes", fetcher);

  if (!data) return <div className={styles.feedback}> Refreshing... </div>;

  return (
    <Fragment>
      {data.length !== 0 ? (
        <div className={styles.title}>
          <h4> Your Liked Activities </h4>
        </div>
      ) : (
        <div className={styles.title}>
          <h4> Like some activites to show them here </h4>
        </div>
      )}
      <div className={styles.container}>
        {data.map((activity) => (
          <Card key={activity._id}>
            <RecommendationDetail
              activityImg={activity.activityImg}
              name={activity.name}
              organisation={activity.organisation}
              dis={activity.dis}
              rating={activity.rating}
              url={activity.url}
              phone={activity.phone}
              address={activity.address}
              timings={activity.openingHours}
              postcode={activity.postcode}
              detailedView={true}
              mutate={mutate}
            />
          </Card>
        ))}
      </div>
    </Fragment>
  );
};

export default SavedRecommendations;
