/** @format */

import React from "react";
import classes from "./SlokHeader.module.css";
import useDispatch from "@/hooks/use-Dispatch";
import SideNav from "../SideNav/SideNav";
import Drawer from "../UI/Drawer/Drawer";

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

  return (
    <React.Fragment>
      <div className={`${classes.container}`}>
        <span
          onClick={(e) => {
            setNavigation("navigationIsVisible", !sideNavVisible);
            setNavigation_1("openMenu", !sloakHeaderMenu);
          }}
        >
          {chapterNavigated_1}
        </span>
        <span>{`sloks/${sloks_1}`}</span>
      </div>

      {sloakHeaderMenu ? (
        <Drawer
          onClick={(e) => {
            e.preventDefault();
            setNavigation_1("openMenu", !sloakHeaderMenu);
          }}
          title={"menu"}
        >
          <SideNav />
        </Drawer>
      ) : (
        ""
      )}
    </React.Fragment>
  );
};

export default SlokHeader;
