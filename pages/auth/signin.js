import { getProviders, getSession } from "next-auth/react";
import Head from "next/head";
import { Fragment } from "react";
import SignInForm from "../../components/Forms/SignInForm";

const SignIn = ({ providers }) => {
  return (
    <Fragment>
      <Head>
        <title> Sign in to FunTime </title>
        <link rel="icon" href="/logo.png" />
        <meta
          name="description"
          content="Create an account to start using FunTime!"
        />
      </Head>
      <SignInForm providers={providers} />
    </Fragment>
  );
};

export default SignIn;

export async function getServerSideProps(context) {
  const providers = await getProviders();
  const session = await getSession({ req: context.req });

  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      providers,
      session,
    },
  };
}
