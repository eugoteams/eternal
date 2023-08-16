/** @format */

import { STORAGE_KEY } from "@/model/const";

const useStorage = () => {
  const saveToStorage = (payload, key) => {
    localStorage.setItem(key, JSON.stringify(payload));
  };

  const getFromStorage = (key) => {
    let dataInStorage = localStorage.getItem(key);
    return JSON.parse(dataInStorage);
  };

  const clearFromStorage = (key) => {
    localStorage.removeItem(key);
  };

  return { saveToStorage, getFromStorage, clearFromStorage };
};

export default useStorage;
