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
  const getData = async () => {
    let storageData = getFromStorage();
    if (storageData) {
      return storageData;
    }
    let response = await fetchData("api/harekrishna", { method: "GET" });
    let chapters = await response.chapters;
    if (chapters.length > 0) {
      saveToStorage(chapters);
      return chapters;
    }
  };
  return { getData };
};

export default usePerfomanceHandler;
