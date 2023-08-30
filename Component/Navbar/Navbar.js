/** @format */

import React, { useState } from "react";
import classes from "./Navbar.module.css";
import IconHolder from "../UI/IconHolder/IconHolder";
import Group from "../UI/Group/Group";
import Drawer from "../UI/Drawer/Drawer";
import NavLinkComponent from "./NavLinkComponent/NavLinkComponent";
import Setting from "../Setting/Setting";

const Navbar = (props) => {
  const [drawerState, setDrawerSate] = useState("");

  const onClickDrawerListener = (type) => {
    switch (true) {
      case type === "nav":
        setDrawerSate((prevState) => (
          <Drawer
            onClick={() => {
              onClickDrawerListener("close");
            }}
          >
            <NavLinkComponent
              breakPoint={"md"}
              onLinkClick={(e) => {
                onClickDrawerListener("close");
              }}
            />
          </Drawer>
        ));
        break;
      case type === "setting":
        setDrawerSate((prevState) => (
          <Drawer
            onClick={() => {
              onClickDrawerListener("close");
            }}
            position={"right"}
          >
            <Setting />
          </Drawer>
        ));
        break;
      case type === "close":
        setDrawerSate((prevState) => "");
        break;
      default:
        //no-opt
        //React error too many renders.
        break;
    }
  };

  return (
    <React.Fragment>
      <main className={`${classes.container}`}>
        <div className={`${classes.logo}`}>
          <h1>eternal</h1>
        </div>

        <div className={`${classes.nav_container}`}>
          <div
            className={`${classes.responsive_bt}`}
            onClick={() => {
              onClickDrawerListener("nav");
            }}
          >
            <Group posV={"center"} posH={"flex-start"}>
              <IconHolder>
                {/* <GiHamburgerMenu className={`${classes.menu_icon}`} /> */}m
              </IconHolder>
            </Group>
          </div>
          <NavLinkComponent />
          {drawerState}
        </div>
        <div className={`${classes.setting_icon_container}`}>
          <div
            onClick={() => {
              onClickDrawerListener("setting");
            }}
          >
            <IconHolder>s{/* <IoSettingsSharp /> */}</IconHolder>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default Navbar;
