/** @format */

import React, { useContext, useEffect } from "react";
import { AppContext } from "@/sotre/store";
import Group from "../UI/Group/Group";
import Switch from "../UI/Switch/Switch";
import { fontToggleBtx } from "@/model/const";
import { validateConfig } from "next/dist/server/config-shared";
import Stack from "../UI/Stack/Stack";
import classes from "./Setting.module.css";
import CheckBoxGroup from "../UI/CheckBoxGroup/CheckBoxGroup";
import DropDown from "../UI/DropDown/DropDown";
import { wordByWordLocale, translators, defaultAuthors } from "@/model/const";

const Setting = (props) => {
  const { state, dispatch } = useContext(AppContext);
  let readerPreferences = state["readingPreferencesN"];
  let readerPref = readerPreferences["readingPreference"];
  let translator = readerPreferences["readingPreferenceTranslator"];
  let contentType = readerPreferences["wordByWordContentType"];
  let displayType = readerPreferences["wordByWordDisplay"];
  let lang = readerPreferences["wordByWordLocale"];
  let theme = readerPreferences[""];
  let readerStyles = state["gitaReaderStyles"];
  let fontType = readerStyles["gitaFont"];
  let fontDescription = fontToggleBtx.find((font, _) => {
    return font["value"] === fontType;
  });

  const onItemChangeListener = (value) => {
    readerStyles["gitaFont"] = value;
    dispatch({
      type: "ADD",
      key: "gitaReaderStyles",
      payload: { ...readerStyles },
    });
  };

  const filterTranslatorByLang = () => {
    return translators.filter((translator, _) => {
      let translationLang = translator["translationlang"];
      let result = translationLang.find((language) => language === lang);
      if (result) {
        return translator;
      }
    });
  };

  const getTranslatorDescription = () => {
    return translators.find((translatorObj, _) => {
      return translatorObj["value"] === translator;
    })["description"];
  };

  const onLangChange = (value) => {
    readerPreferences["wordByWordLocale"] = value;
    readerPreferences["readingPreferenceTranslator"] = defaultAuthors[value];
    dispatch({
      type: "ADD",
      key: "readingPreferencesN",
      payload: { ...readerPreferences },
    });
  };

  const onTranslatorChange = (value) => {
    readerPreferences["readingPreferenceTranslator"] = value;

    dispatch({
      type: "ADD",
      key: "readingPreferencesN",
      payload: { ...readerPreferences },
    });
  };

  let isExist = (checkedItem) => {
    return contentType.find((value) => value === checkedItem);
  };

  const onCheckBoxChange = (value) => {
    //readerPreferences["wordByWordDisplay"] = [...displayType, value];
    console.log("Setting -->", value);
    readerPreferences["wordByWordContentType"] = [...value];

    dispatch({
      type: "ADD",
      key: "readingPreferencesN",
      payload: { ...readerPreferences },
    });
  };

  return (
    <React.Fragment>
      <aside>
        <Stack>
          <h3 className={`${classes.title}`}>gita font</h3>
          <Group posV="center" posH="center">
            <Switch
              itemSelected={fontType}
              toggleButton={fontToggleBtx}
              onItemChange={(value) => {
                onItemChangeListener(value);
              }}
            />
          </Group>
          <Group posV="center" posH="center">
            <p className={`${classes.text}`}>
              {fontDescription["description"]}
            </p>
          </Group>
        </Stack>
        <Stack>
          <h3 className={`${classes.title}`}>word by word</h3>
          <Group>
            {/* <CheckBoxGroup
              defaultValue={readerPreferences["wordByWordContentType"]}
              onChange={onCheckBoxChange}
            /> */}
          </Group>
          <Group posV="center" posH="center">
            <p className={`${classes.text}`}>
              Transliteration refers to the method of mapping from one system of
              writing to another based on phonetic similarity,which are
              converted to characters that have similar pronunciation in the
              target language.
            </p>
          </Group>
        </Stack>
        <Stack>
          <h3 className={`${classes.title}`}>translation language</h3>
          <DropDown
            data={wordByWordLocale}
            defaultValue={lang}
            onChange={onLangChange}
          />
          <Group posV="center" posH="center">
            <p className={`${classes.text}`}>
              Word by word translation source : partly web and majority of party
              id taken the book BHAGAVAD GITA AS IT IS.
            </p>
          </Group>
        </Stack>
        <Stack>
          <h3 className={`${classes.title}`}>translation</h3>
          <DropDown
            data={filterTranslatorByLang()}
            defaultValue={translator}
            onChange={onTranslatorChange}
          />
          <Group posV="center" posH="center">
            <p className={`${classes.text}`}>{getTranslatorDescription()}</p>
          </Group>
        </Stack>
        <Stack>
          <Group posV="center" posH="center">
            <button className={`${classes.button}`}>reset settings</button>
          </Group>
        </Stack>
      </aside>
    </React.Fragment>
  );
};

export default Setting;
