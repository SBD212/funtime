import { getSession } from "next-auth/react";
import Head from "next/head";
import { Fragment } from "react";
import UserChoicesForm from "../components/Forms/UserChoices/UserChoicesForm";

const activities = () => {
  return (
    <Fragment>
      <Head>
        <title> FunTime </title>
        <link rel="icon" href="/logo.png" />
        <meta
          name="description"
          content="User requirements for finding their aactivities"
        />
      </Head>
      <UserChoicesForm />
    </Fragment>
  );
};

export default activities;

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
