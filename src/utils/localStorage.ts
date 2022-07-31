import { ICartItem } from "interface/ICart";

export const writeToLocalStorage = (name: string, object: any): void => {
  const stringifiedObject = JSON.stringify(object);
  window.localStorage.setItem(name, stringifiedObject);
};

export const readFromLocalStorage = (name: string) => {
  const parsedObject = window.localStorage.getItem(name);
  return parsedObject && JSON.parse(parsedObject);
};
