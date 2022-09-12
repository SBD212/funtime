import Header from "./Header";
import { Container, Row } from "react-bootstrap";
import styles from "./Layout.module.css";

const Layout = (props) => {
  return (
    <div className={styles.app_bg}>
      <Container className={styles.app_container}>
        <Header />
        <Row>{props.children}</Row>
      </Container>
    </div>
  );
};

export default Layout;
