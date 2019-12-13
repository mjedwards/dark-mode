import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = (key, initialValue) => {
  const [mode, setMode] = useLocalStorage("body", false);
  const body = document.getElementsByTagName("body");

  useEffect(() => {
    if (mode) {
      console.log(mode);
      setMode(mode);
      return body[0].classList.add("dark-mode");
    } else {
      return body[0].classList.remove("dark-mode");
    }
  }, [mode]);

  return [mode, setMode, useEffect];
};
