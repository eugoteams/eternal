/** @format */

import React, { useState } from "react";
import classes from "./Navbar.module.css";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

const Navbar = (props) => {
  const [menu, setMenuOpen] = useState(false);

  const onpenMenu = (event) => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <React.Fragment>
      <main className={`${classes.container}`}>
        <span>eternal .</span>
        <nav
          className={
            menu ? `${classes.nav_container_v_sm}` : `${classes.nav_container}`
          }
        >
          <div
            className={menu ? `${classes.close_icon}` : `${classes.menu_icon}`}
            onClick={onpenMenu}
          >
            <GrClose />
          </div>
          <Link href="/" className={`${classes.link}`}>
            home
          </Link>
          <Link href="/chapters" className={`${classes.link}`}>
            chapter
          </Link>
          <Link href="/" className={`${classes.link}`}>
            slokas
          </Link>
        </nav>
        <div className={`${classes.menu_icon}`} onClick={onpenMenu}>
          <GiHamburgerMenu />
        </div>
      </main>
    </React.Fragment>
  );
};

export default Navbar;
