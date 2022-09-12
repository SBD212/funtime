import { SessionProvider } from "next-auth/react";
import Layout from "../components/Layout/Layout";
import FormProvider from "../context/FormContext";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Layout>
        <FormProvider>
          <Component {...pageProps} />{" "}
        </FormProvider>
      </Layout>
    </SessionProvider>
  );
}

export default MyApp;
