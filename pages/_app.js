import "../styles/globals.css";
import Layout from "../Layout/Layout";
import MoviesProvider from "../store/MoviesProvider";

function MyApp({ Component, pageProps }) {
  return (
    <MoviesProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MoviesProvider>
  );
}

export default MyApp;
