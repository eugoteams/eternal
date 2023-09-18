/** @format */

import Footer from "@/Component/Footer/Footer";
import Navbar from "@/Component/Navbar/Navbar";
import SlokHeader from "@/Component/SlokasComponent/SlokHeader/SlokHeader";
import StoreProvider from "@/store/store";
import "@/styles/globals.css";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const path = router.pathname;
  let SlokasHeader = path.split("/").includes("chapter") ? <SlokHeader /> : "";
  return (
    <>
      <StoreProvider>
        <Navbar />
        {SlokasHeader}
        <Component {...pageProps} />
        {/* <Footer /> */}
      </StoreProvider>
    </>
  );
}
