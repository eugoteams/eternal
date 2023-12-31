/** @format */

import React from "react";
import Group from "../UI/Group/Group";
import Switch from "../UI/Switch/Switch";
import { fontToggleBtx } from "@/model/const";
import Stack from "../UI/Stack/Stack";
import styles from "./Setting.module.css";
import CheckBoxGroup from "../UI/CheckBoxGroup/CheckBoxGroup";
import DropDown from "../UI/DropDown/DropDown";
import { translators, defaultAuthors } from "@/model/const";
import useDispatch from "@/hooks/use-Dispatch";
import { CONTENT_TYPE_DATA, LOCAL_DATA } from "@/model/const";

const Setting = (props) => {
  const {
    setReaderPref,
    setReaderStyle,
    setDefaultSetting,
    fontType,
    contentType,
    wordByWordLocale,
    displayType,
    translator,
    lang,
  } = useDispatch();

  let fontDescription = fontToggleBtx.find((font, _) => {
    return font["value"] === fontType;
  });

  const onItemChangeListener = (value) => {
    setReaderStyle("gitaFont", value);
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

  const readerPrefListener = (key, value) => {
    setReaderPref(key, value);
  };

  const resetTheSate = () => {
    setDefaultSetting();
  };

  return (
    <React.Fragment>
      <aside>
        <Stack>
          <h3 className={`${styles.title}`}>gita font</h3>
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
            <p className={`${styles.text}`}>{fontDescription["description"]}</p>
          </Group>
        </Stack>
        <Stack>
          <h3 className={`${styles.title}`}>word by word</h3>
          <Group>
            <CheckBoxGroup
              defaultValue={contentType}
              data={CONTENT_TYPE_DATA}
              onChange={(value) => {
                readerPrefListener("wordByWordContentType", value);
              }}
            />
          </Group>
          <Group posV="center" posH="center">
            <p className={`${styles.text}`}>
              Transliteration refers to the method of mapping from one system of
              writing to another based on phonetic similarity,which are
              converted to characters that have similar pronunciation in the
              target language.
            </p>
          </Group>
        </Stack>
        <Stack>
          <h3 className={`${styles.title}`}>translation language</h3>
          <DropDown
            data={LOCAL_DATA}
            defaultValue={lang}
            onChange={(value) => {
              readerPrefListener("wordByWordLocale", value);
              readerPrefListener(
                "readingPreferenceTranslator",
                defaultAuthors[value]
              );
            }}
          />
          {/* This Advance features will be added later
           <CheckBoxGroup
            defaultValue={displayType}
            data={W_DISPLAY_DATA}
            onChange={(value) => {
              readerPrefListener("wordByWordDisplay", value);
            }}
          /> */}
          <Group posV="center" posH="center">
            <p className={`${styles.text}`}>
              Word by word translation source : partly web and majority of party
              id taken the book BHAGAVAD GITA AS IT IS.
            </p>
          </Group>
        </Stack>
        <Stack>
          <h3 className={`${styles.title}`}>translation</h3>
          <DropDown
            data={filterTranslatorByLang()}
            defaultValue={translator}
            onChange={(value) => {
              readerPrefListener("readingPreferenceTranslator", value);
            }}
          />
          <Group posV="center" posH="center">
            <p className={`${styles.text}`}>{getTranslatorDescription()}</p>
          </Group>
        </Stack>
        <Stack>
          <Group posV="center" posH="center">
            <button className={`${styles.button}`} onClick={resetTheSate}>
              reset settings
            </button>
          </Group>
        </Stack>
        {/** This div padding is to provide sufficient
         * gap on safarai browser mobile so user can click on button. */}
        <div className={`${styles.mobile_bottom_pd}`}></div>
      </aside>
    </React.Fragment>
  );
};

export default Setting;
