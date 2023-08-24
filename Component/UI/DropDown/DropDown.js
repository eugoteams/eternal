/** @format */

import React, { useContext, useState } from "react";
import { LuChevronsDownUp } from "react-icons/lu";
import classes from "./DropDown.module.css";
import { AppContext } from "@/sotre/store";
import { AUTHORS } from "@/model/const";

const DropDown = ({ filterKey }) => {
  const { state, dispatch } = useContext(AppContext);
  const [dropDown, setDropDown] = useState(false);
  let author = state.author["name"];
  let filteredAuthors = [];

  AUTHORS.map((author, _) => {
    let result = author["translationLang"].find(
      (lang, _) => lang === state.translationTo
    );
    result !== undefined && filteredAuthors.push(author);
  });

  const closeDropDown = (event) => {
    setDropDown((prevState) => !prevState);
  };

  const onItemClick = (value) => {
    closeDropDown();
    dispatch({ type: "ADD", key: "author", payload: value });
  };

  return (
    <React.Fragment>
      <div className={`${classes.container}`}>
        <div
          className={`${classes.dropdown_placeholder}`}
          onClick={closeDropDown}
        >
          <span>{author}</span>
          <LuChevronsDownUp />
        </div>
        {dropDown && (
          <div className={`${classes.dropdown_item}`}>
            {filteredAuthors.map((item, index) => {
              return (
                <p
                  key={`${item}_${index}`}
                  onClick={(event) => {
                    onItemClick(item);
                  }}
                >
                  {item[filterKey]}
                </p>
              );
            })}
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default DropDown;
