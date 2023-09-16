/** @format */

import React, { useState } from "react";
import styles from "./Navbar.module.css";
import IconHolder from "../UI/IconHolder/IconHolder";
import Group from "../UI/Group/Group";
import Drawer from "../UI/Drawer/Drawer";
import NavLinkComponent from "./NavLinkComponent/NavLinkComponent";
import Setting from "../Setting/Setting";
import { CgMenuLeft } from "react-icons/cg";
import { LuSettings } from "react-icons/lu";
import useScrollDirection from "@/hooks/use-ScrollDirection";

const Navbar = (props) => {
  const scrollDirection = useScrollDirection();
  const [drawerState, setDrawerSate] = useState("");

  const onClickDrawerListener = (type) => {
    switch (true) {
      case type === "nav":
        setDrawerSate((prevState) => (
          <Drawer
            onClick={() => {
              onClickDrawerListener("close");
            }}
            title={"menu"}
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
            title={"setting"}
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
      <main
        className={`${styles.container} ${
          scrollDirection === "down" ? `${styles.down}` : "show"
        }`}
      >
        <div className={`${styles.logo}`}>
          <h1>eternal</h1>
        </div>

        <div className={`${styles.nav_container}`}>
          <div
            onClick={() => {
              onClickDrawerListener("nav");
            }}
          >
            <Group posV={"center"} posH={"flex-start"}>
              <IconHolder>
                <CgMenuLeft style={{ fontSize: "2.5rem" }} />
              </IconHolder>
            </Group>
          </div>
          {/* <NavLinkComponent /> */}
          {drawerState}
        </div>
        <div className={`${styles.setting_icon_container}`}>
          <div
            onClick={() => {
              onClickDrawerListener("setting");
            }}
          >
            <IconHolder>
              <LuSettings style={{ fontSize: "2.5rem" }} />
            </IconHolder>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default Navbar;
