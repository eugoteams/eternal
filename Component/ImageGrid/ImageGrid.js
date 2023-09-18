/** @format */

import React from "react";
import styles from "./ImageGrid.module.css";
import Test from "../../public/assets/images/test.svg";

const ImageGrid = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={500}
      height={600}
      fill="none"
      className="mondrian"
      viewBox="0 0 652 644"
      {...props}
    >
      <rect
        width={163}
        height={60}
        x={1}
        fill="#212529"
        opacity={0.05}
        rx={10}
      />
      <rect width={193} height={60} x={424} fill="#ffc078" rx={10} />
      <rect width={193} height={175} x={424} y={68} fill="olive" rx={10} />
      <defs>
        <clipPath id="a">
          <rect width={193} height={175} x={424} y={68} fill="olive" rx={10} />
        </clipPath>
      </defs>
      <image
        xlinkHref="/assets/images/ch01.jpeg"
        width={193}
        height={175}
        x={424}
        y={68}
        preserveAspectRatio="xMidYMid slice"
      />
      <rect
        width={193}
        height={120}
        x={424}
        y={401}
        fill="var(--primary)"
        opacity={0.2}
        rx={10}
      />
      <rect
        width={193}
        height={79}
        x={424}
        y={401}
        fill="var(--primary)"
        opacity={0.2}
        rx={10}
      />
      <rect width={362} height={18} x={255} y={626} fill="#d9480f" rx={9} />
      <rect width={166} height={65} x={80} y={579} fill="#d9480f" rx={10} />
      <rect width={160} height={40} x={255} y={579} fill="#d9480f" rx={10} />
      <rect
        width={160}
        height={80}
        x={255}
        y={490}
        fill="#d9480f"
        opacity={0.05}
        rx={10}
      />
      <rect
        width={160}
        height={80}
        x={255}
        y={400}
        fill="#d9480f"
        opacity={0.05}
        rx={10}
      />
      <rect
        width={335}
        height={324}
        x={80}
        y={68}
        fill="var(--primary)"
        rx={10}
      />
      <rect width={166} height={169} x={80} y={401} fill="#d9480f" rx={10} />
      <rect width={193} height={129} x={424} y={490} fill="#d9480f" rx={10} />
      <rect width={26} height={154} x={626} y={490} fill="#d9480f" rx={10} />
      <rect width={91} height={140} x={424} y={252} fill="#d9480f" rx={10} />
      <rect width={93} height={140} x={524} y={252} fill="#d9480f" rx={10} />
      <rect
        width={26}
        height={480}
        x={626}
        fill="#4169e1"
        opacity={0.05}
        rx={10}
      />
      <rect width={242} height={60} x={173} fill="#d9480f" rx={10} />
      <rect width={70} height={157} x={1} y={68} fill="green" rx={10} />
      <rect
        width={70}
        height={259}
        x={1}
        y={234}
        fill="#00f"
        opacity={0.05}
        rx={10}
      />
      <rect width={70} height={142} x={1} y={502} fill="#d9480f" rx={10} />
    </svg>
  );
};

export default ImageGrid;
