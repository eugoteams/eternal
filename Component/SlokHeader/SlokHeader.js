/** @format */

import React from "react";
import styles from "./SlokHeader.module.css";
import useDispatch from "@/hooks/use-Dispatch";
import Drawer from "../UI/Drawer/Drawer";
import { ChevronDown } from "lucide-react";
import useScrollDirection from "@/hooks/use-ScrollDirection";
import ContextMenu from "../ContextMenu/ContextMenu";

const SlokHeader = (props) => {
  const {
    chapterNavigated,
    sloks,
    setNavigation,
    sideNavVisible,
    setNavigation_1,
    chapterNavigated_1,
    sloks_1,
    sloakHeaderMenu,
  } = useDispatch();
  const scrollDirection = useScrollDirection();
  console.log("scrollDirection in Slok Header", scrollDirection);
  return (
    <React.Fragment>
      <div
        className={`${styles.container} ${
          scrollDirection === "up" ? `${styles.up}` : "hide"
        }`}
      >
        <div
          className={`${styles.selected_text}`}
          onClick={(e) => {
            e.preventDefault();
            setNavigation("navigationIsVisible", !sideNavVisible);
            setNavigation_1("openMenu", !sloakHeaderMenu);
          }}
        >
          <span>{chapterNavigated_1}</span>
          <ChevronDown size={14} />
        </div>

        <span>{`verses : ${sloks_1}`}</span>
      </div>

      {sloakHeaderMenu ? (
        <Drawer
          onClick={(e) => {
            e.preventDefault();
            setNavigation_1("openMenu", !sloakHeaderMenu);
          }}
          title={"chapters"}
        >
          <ContextMenu />
        </Drawer>
      ) : (
        ""
      )}
    </React.Fragment>
  );
};

export default SlokHeader;
