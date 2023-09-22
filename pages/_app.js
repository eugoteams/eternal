/** @format */

import Footer from "@/Component/Footer/Footer";
import Navbar from "@/Component/Navbar/Navbar";
import SlokHeader from "@/Component/SlokasComponent/SlokHeader/SlokHeader";
import StoreProvider from "@/store/store";
import "@/styles/globals.css";
import Head from "next/head";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const path = router.pathname;
  let SlokasHeader = path.split("/").includes("chapter") ? <SlokHeader /> : "";
  return (
    <>
      <Head>
        <title>
          Bhagavad Gita - "The Song of The Lord" - A Guide to Inner Peace &
          Spiritual Awakening
        </title>
        <meta charset="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta
          name="title"
          content="Bhagavad Gita - The Song of The Lord - A Guide to Inner Peace &
          Spiritual Awakening"
        />
      </Head>
      <StoreProvider>
        <Navbar />
        {SlokasHeader}
        <Component {...pageProps} />
        {/* <Footer /> */}
      </StoreProvider>
    </>
  );
}
