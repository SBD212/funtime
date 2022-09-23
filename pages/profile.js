import { getSession, useSession } from "next-auth/react";
import { Fragment } from "react";
import Head from "next/head";
import SavedRecommendations from "../components/Recommendations/Liked/SavedRecommendations";

const Profile = () => {
  const { data: session } = useSession();
  const { userId } = session;

  return (
    <Fragment>
      <Head>
        <title> {session.user.name} / FunTime </title>
        <link rel="icon" href="/logo.png" />
        <meta name="description" content="Liked activities" />
      </Head>
      <SavedRecommendations />
    </Fragment>
  );
};

export default Profile;

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
