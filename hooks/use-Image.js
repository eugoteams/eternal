/** @format */
import ch01 from "../public/assets/images/ch01.jpeg";
import ch02 from "../public/assets/images/ch02.jpeg";
import ch03 from "../public/assets/images/ch03.jpeg";
import ch04 from "../public/assets/images/ch04.jpeg";
import ch05 from "../public/assets/images/ch05.jpeg";
import ch06 from "../public/assets/images/ch06.jpeg";
import ch07 from "../public/assets/images/ch07.jpeg";
import ch08 from "../public/assets/images/ch08.jpeg";
import ch09 from "../public/assets/images/ch09.jpeg";
import ch10 from "../public/assets/images/ch10.jpeg";
import ch11 from "../public/assets/images/ch11.jpeg";
import ch12 from "../public/assets/images/ch12.jpeg";
import ch13 from "../public/assets/images/ch13.jpeg";
import ch14 from "../public/assets/images/ch14.jpeg";
import ch15 from "../public/assets/images/ch15.jpeg";
import ch16 from "../public/assets/images/ch16.jpeg";
import ch17 from "../public/assets/images/ch17.jpeg";
import ch18 from "../public/assets/images/ch18.jpeg";

const useImage = () => {
  const arrayOfImages = [
    ch01,
    ch02,
    ch03,
    ch04,
    ch05,
    ch06,
    ch07,
    ch08,
    ch09,
    ch10,
    ch11,
    ch12,
    ch13,
    ch14,
    ch15,
    ch16,
    ch17,
    ch18,
  ];
  const getImage = (imageId) => {
    return arrayOfImages.filter((id, index) => {
      return index === imageId;
    })[0];
  };

  return { getImage };
};

export default useImage;
