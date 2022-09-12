import BSCarousel from "react-bootstrap/Carousel";
import { Col } from "react-bootstrap";
import Image from "next/image";
import styles from "./Carousel.module.css";

const Carousel = () => {
  return (
    <Col className={styles.container}>
      <BSCarousel variant="light">
        <BSCarousel.Item interval={2500}>
          <Image
            src="/images/swim.jpg"
            alt="First slide"
            width={700}
            height={400}
          />
        </BSCarousel.Item>
        <BSCarousel.Item interval={2500}>
          <Image
            src="/images/music.jpg"
            alt="Second slide"
            width={700}
            height={400}
          />
        </BSCarousel.Item>
        <BSCarousel.Item interval={2500}>
          <Image
            src="/images/hiking.jpg"
            alt="Third slide"
            width={700}
            height={400}
          />
        </BSCarousel.Item>
      </BSCarousel>
    </Col>
  );
};

export default Carousel;
