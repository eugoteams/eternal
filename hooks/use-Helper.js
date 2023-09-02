/** @format */

import { translators } from "@/model/const";

const useHelper = () => {
  const filterTranslatorByLang = () => {
    return translators.filter((translator, _) => {
      let translationLang = translator["translationlang"];
      let result = translationLang.find((language) => language === lang);
      if (result) {
        return translator;
      }
    });
  };

  const getTranslator = (id) => {
    return translators.find((translator, _) => translator["value"] === id);
  };

  return { filterTranslatorByLang, getTranslator };
};

export default useHelper;
