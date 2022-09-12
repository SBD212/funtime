import { getSession } from "next-auth/react";
import { Fragment } from "react";
import Head from "next/head";
import RecommendationList from "../components/Recommendations/RecommendationList";

const results = () => {
  return (
    <Fragment>
      <Head>
        <title> Recommended activites for you! </title>
        <link rel="icon" href="/logo.png" />
        <meta name="description" content="All relevant activities for user" />
      </Head>
      <RecommendationList />
    </Fragment>
  );
};

export default results;

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}
