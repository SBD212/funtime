import { useSession } from "next-auth/react";
import { Col, Button } from "react-bootstrap";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { Fragment } from "react";

const LandingPage = () => {
  const { data: session } = useSession();

  return (
    <Fragment>
      <Head>
        <title> FunTime </title>
        <link rel="icon" href="/logo.png" />
        <meta
          name="description"
          content="Find hundreds of extracurricular activites to do in Cardiff!"
        />
      </Head>
      <Col className={styles.text}>
        {" "}
        <h1>
          {" "}
          Learn New Stuff <br /> and Have A Fun Time{" "}
        </h1>{" "}
        <div>
          <p> &nbsp;&nbsp; Hundreds of recommendations waiting for you</p>
          <div className={styles.description}>
            <div>
              {session ? (
                <Link href="/activities">
                  <Button variant="info" className={styles.btn}>
                    Get Started
                  </Button>
                </Link>
              ) : (
                <Link href="/auth/signin">
                  <Button variant="info" className={styles.btn}>
                    Get Started
                  </Button>
                </Link>
              )}
            </div>
            <p> by creating an account</p>
          </div>
        </div>
      </Col>
      <Col className={styles.imageContainer}>
        <Image
          src="/images/Landing-page.jpg"
          alt="Social activity"
          width={1200}
          height={800}
        />
      </Col>
    </Fragment>
  );
};

export default LandingPage;
