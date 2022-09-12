import { FormContext } from "../../context/FormContext";
import { Fragment, useContext, useEffect, useState } from "react";
import Link from "next/link";
import {
  Col,
  Spinner,
  Button,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import Map from "../Map/Map";
import Card from "../UI/Card/Card";
import RecommendationDetail from "./RecommendationDetail";
import styles from "./Recommendation.module.css";

const RecommendationList = () => {
  const { choices } = useContext(FormContext);

  const [activeIndex, setActiveIndex] = useState(false);
  const [recommendations, setRecomendations] = useState([]);
  const [order, setOrder] = useState(true);
  const [recommendationsByDist, setRecomendationsByDist] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://recommender-funtime.herokuapp.com/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(choices),
    })
      .then((response) => response.json())
      .then((data) => {
        setRecomendations(data[0]);
        console.log(data[0]);
        setRecomendationsByDist(data[1]);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(true);
      });
  }, []);

  const sortByDefault = () => {
    setOrder(true);
  };

  const sortByDist = () => {
    setOrder(false);
  };

  if (error) {
    return (
      <div className={styles.spinner}>
        Oops something went wrong...
        <Link href="/activities">
          <Button variant="info" className={styles.btn}>
            Start again
          </Button>
        </Link>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className={styles.spinner}>
        <Spinner
          animation="border"
          style={{ width: "5rem", height: "5rem" }}
        ></Spinner>
        <p> Hold on... </p>
      </div>
    );
  }

  return (
    <Fragment>
      <div className={styles.btn_container}>
        <div>FunTime recommends the following activities</div>
        <div>
          <Button
            variant="info"
            className={styles.btn}
            onClick={() => {
              if (activeIndex) {
                setActiveIndex(false);
              } else {
                setActiveIndex(true);
              }
            }}
          >
            {activeIndex === false ? "Show All" : "Show Less"}
          </Button>
          <Link href="/activities">
            <Button variant="info" className={styles.btn}>
              Restart Search
            </Button>
          </Link>
        </div>
      </div>

      <Col className={styles.col}>
        <DropdownButton
          className={styles.sort_btn}
          id="dropdown-basic-button"
          title="Sort By"
        >
          <Dropdown.Item onClick={sortByDefault}>Recommended</Dropdown.Item>
          <Dropdown.Item onClick={sortByDist}>Distance</Dropdown.Item>
        </DropdownButton>
        {activeIndex
          ? order
            ? recommendations.map((recommendationItem) => (
                <Card>
                  <RecommendationDetail
                    key={recommendationItem.name}
                    activityImg={recommendationItem.imageUrl}
                    name={recommendationItem.description}
                    organisation={recommendationItem.name}
                    dis={recommendationItem.dist}
                    rating={recommendationItem.rating}
                    url={recommendationItem.url}
                    phone={recommendationItem.phone}
                    address={recommendationItem.address}
                    timings={recommendationItem.openingHours}
                    postcode={recommendationItem.postcode}
                  />
                </Card>
              ))
            : recommendationsByDist.map((recommendationItem) => (
                <Card>
                  <RecommendationDetail
                    key={recommendationItem.name}
                    activityImg={recommendationItem.imageUrl}
                    name={recommendationItem.description}
                    organisation={recommendationItem.name}
                    dis={recommendationItem.dist}
                    rating={recommendationItem.rating}
                    url={recommendationItem.url}
                    phone={recommendationItem.phone}
                    address={recommendationItem.address}
                    timings={recommendationItem.openingHours}
                    postcode={recommendationItem.postcode}
                  />
                </Card>
              ))
          : order
          ? recommendations.slice(0, 5).map((recommendationItem) => (
              <Card>
                <RecommendationDetail
                  key={recommendationItem.name}
                  activityImg={recommendationItem.imageUrl}
                  name={recommendationItem.description}
                  organisation={recommendationItem.name}
                  dis={recommendationItem.dist}
                  rating={recommendationItem.rating}
                  url={recommendationItem.url}
                  phone={recommendationItem.phone}
                  address={recommendationItem.address}
                  timings={recommendationItem.openingHours}
                  postcode={recommendationItem.postcode}
                />
              </Card>
            ))
          : recommendationsByDist.slice(0, 5).map((recommendationItem) => (
              <Card>
                <RecommendationDetail
                  key={recommendationItem.name}
                  activityImg={recommendationItem.imageUrl}
                  name={recommendationItem.description}
                  organisation={recommendationItem.name}
                  dis={recommendationItem.dist}
                  rating={recommendationItem.rating}
                  url={recommendationItem.url}
                  phone={recommendationItem.phone}
                  address={recommendationItem.address}
                  timings={recommendationItem.openingHours}
                  postcode={recommendationItem.postcode}
                />
              </Card>
            ))}
      </Col>
      <Col style={{ marginTop: "4rem", marginRight: "5rem" }}>
        {activeIndex ? (
          <Map places={recommendations} />
        ) : (
          <Map places={recommendations.slice(0, 5)} />
        )}
      </Col>
    </Fragment>
  );
};

export default RecommendationList;
