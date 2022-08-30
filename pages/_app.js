import Layout from "../components/Layout";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      {/* Layout의 하위 children에 아래의 컴포넌트들이 들어간다 */}
      <Component {...pageProps} />
    </Layout>
  );
}
