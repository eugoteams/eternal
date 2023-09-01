/** @format */
/*
 will check wether data is present in the localstorage if not if will
  use getData to getData from useApi.
**/
import useApi from "./use-Api";
import useStorage from "./use-Storage";

const usePerfomanceHandler = () => {
  const { fetchData } = useApi();
  const { getFromStorage, saveToStorage } = useStorage();

  const getData = async (url, parameter, key) => {
    // let storageData = getFromStorage(key);
    let storageData = null;
    if (storageData) {
      return storageData;
    }
    let res = await fetchData(url, parameter);

    return Object.keys(res).map((resKey, _) => {
      saveToStorage(res[resKey], key);
      return res[resKey];
    })[0];
  };
  return { getData };
};

export default usePerfomanceHandler;
