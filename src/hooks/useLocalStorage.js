import { useState } from "react";

//this is a custom hook. I define a fucntion that is taking in two values.
export const useLocalStorage = (key, initialValue) => {
  //I am using useState to define my state(data).
  const [storedValue, setStoredValue] = useState(() => {
    //created a constant variable whose value is the "key" found in the localStorage of the window
    const item = window.localStorage.getItem(key);
    //if item exists return a parsed item, else the initial value.
    return item ? JSON.parse(item) : initialValue;
  });

  //this is the custom setter function
  const setValue = value => {
    //storedValue is being set to a new value rather than the initial value
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue];
};
