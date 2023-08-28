/** @format */

import React, { useState } from "react";
import classes from "./Navbar.module.css";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { IoSettingsSharp } from "react-icons/io5";
import IconHolder from "../UI/IconHolder/IconHolder";
import Group from "../UI/Group/Group";
import Drawer from "../UI/Drawer/Drawer";

const Navbar = (props) => {
  const [menu, setMenuOpen] = useState(false);
  const [opened, setDrawer] = useState(false);

  const onpenMenu = (event) => {
    setMenuOpen((prevState) => !prevState);
  };

  const onClickListener = () => {
    console.log("Entere ");
    setDrawer((prevState) => !prevState);
  };

  let items = Array(300)
    .fill(0)
    .map((_, index) => (
      <p key={`items_${index}`} style={{ marginTop: "2rem" }}>{`chapter _${
        index + 1
      }`}</p>
    ));

  console.log(opened);
  return (
    <React.Fragment>
      <main className={`${classes.container}`}>
        <div className={`${classes.logo}`}>
          <h1>eternal</h1>
        </div>

        <div className={`${classes.nav_container}`}>
          <div className={`${classes.responsive_bt}`} onClick={onClickListener}>
            <Group posV={"center"} posH={"flex-start"}>
              <IconHolder>
                <GiHamburgerMenu className={`${classes.menu_icon}`} />
              </IconHolder>
            </Group>
          </div>
          <nav className={`${classes.nav_container_item}`}>
            <Link href={"#"} className={`${classes.nav_link}`}>
              home
            </Link>
            <Link href={"#"} className={`${classes.nav_link}`}>
              Chapters
            </Link>
            <Link href={"#"} className={`${classes.nav_link}`}>
              Art
            </Link>
          </nav>
          {opened && <Drawer onClick={onClickListener}>{items} </Drawer>}
        </div>

        <div className={`${classes.setting_icon_container}`}>
          <IconHolder>
            <IoSettingsSharp />
          </IconHolder>
        </div>
      </main>
    </React.Fragment>
  );
};

export default Navbar;
