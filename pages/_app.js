/** @format */

import Navbar from "@/Component/Navbar/Navbar";
import SlokHeader from "@/Component/SlokHeader/SlokHeader";
import StoreProvider from "@/sotre/store";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <StoreProvider>
        <Navbar />
        {/* <SlokHeader /> */}
        <Component {...pageProps} />
      </StoreProvider>
    </>
  );
}
