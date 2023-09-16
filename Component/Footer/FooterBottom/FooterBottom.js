/** @format */

import React from "react";
import styles from "./FooterBottom.module.css";
import { BsFillSuitHeartFill } from "react-icons/bs";
import useImage from "@/hooks/use-Image";
import Image from "next/image";
const FooterBottom = (props) => {
  const { getImage } = useImage();
  let imgSrc = getImage(18);

  return (
    <React.Fragment>
      <div>
        <p className={`${styles.ft_text}`}>
          made with <BsFillSuitHeartFill style={{ color: "red" }} /> for krishna
        </p>
        <Image
          src={imgSrc.src}
          alt="krishna small image"
          width={50}
          height={50}
        />
      </div>
    </React.Fragment>
  );
};

export default FooterBottom;
