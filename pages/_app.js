/** @format */

import Footer from "@/Component/Footer/Footer";
import Navbar from "@/Component/Navbar/Navbar";
import SlokHeader from "@/Component/SlokHeader/SlokHeader";
import StoreProvider from "@/store/store";
import "@/styles/globals.css";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const path = router.pathname;
  let SlokasHeader = path.split("/").includes("slokas") ? <SlokHeader /> : "";
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
