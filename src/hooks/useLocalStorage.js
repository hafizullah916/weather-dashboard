import { useEffect, useState } from "react";

const useLocalStorage = (storageKey, defaultValue) => {
  // to get data from localStore

  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem(storageKey)) ?? defaultValue
  );

  //   to set data to localStore
  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(value));
  }, [value, storageKey]);

  return [value, setValue];
};

export default useLocalStorage;
