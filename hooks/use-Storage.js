/** @format */

import { STORAGE_KEY } from "@/model/const";

const useStorage = () => {
  const saveToStorage = (payload) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  };

  const getFromStorage = () => {
    let dataInStorage = localStorage.getItem(STORAGE_KEY);
    return JSON.parse(dataInStorage);
  };

  const clearFromStorage = () => {
    localStorage.removeItem(STORAGE_KEY);
  };

  return { saveToStorage, getFromStorage, clearFromStorage };
};

export default useStorage;
