import "../styles/globals.css";
import Layout from "../Layout/Layout";
import MediaProvider from "../store/MediaProvider";

function MyApp({ Component, pageProps }) {
  return (
    <MediaProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MediaProvider>
  );
}

export default MyApp;
