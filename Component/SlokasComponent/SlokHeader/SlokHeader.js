/** @format */

import React from "react";
import styles from "./SlokHeader.module.css";
import useDispatch from "@/hooks/use-Dispatch";
import Drawer from "../../UI/Drawer/Drawer";
import { BiSolidChevronDown } from "react-icons/bi";
import useScrollDirection from "@/hooks/use-ScrollDirection";
import ContextMenu from "../../ContextMenu/ContextMenu";

const SlokHeader = (props) => {
  const { chapterNavigated, sloks, setNavigation, sloakHeaderMenu } =
    useDispatch();
  const scrollDirection = useScrollDirection();

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

            setNavigation("openMenu", !sloakHeaderMenu);
          }}
        >
          <span>{chapterNavigated}</span>
          <BiSolidChevronDown />
        </div>

        <span>{`verses : ${sloks}`}</span>
      </div>

      {sloakHeaderMenu ? (
        <Drawer
          onClick={(e) => {
            e.preventDefault();
            setNavigation("openMenu", !sloakHeaderMenu);
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
