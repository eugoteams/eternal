/** @format */

import Navbar from "@/Component/Navbar/Navbar";
import StoreProvider from "@/sotre/store";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <StoreProvider>
        <Navbar />
        <Component {...pageProps} />
      </StoreProvider>
    </>
  );
}
