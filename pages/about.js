import { Fragment } from "react";
import Head from "next/head";
import AppDescription from "../components/Text/App Description";
import Carousel from "../components/Carousel/Carousel";

const about = () => {
  return (
    <Fragment>
      <Head>
        <title> About FunTime </title>
        <link rel="icon" href="/logo.png" />
        <meta
          name="description"
          content="Description of how FunTime works"
        />
      </Head>
      <AppDescription /> <Carousel />
    </Fragment>
  );
};

export default about;
