import { getLocaleStorage, setLocaleStorage } from "./storage.js";

/**
 * The function sets the "isShow" property of all recipes in local storage to true.
 */
export const isShow = () => {
  const recipes = getLocaleStorage();
  for (let i = 0; i < recipes.length; i++) {
    recipes[i].isShow = true;
  }
  setLocaleStorage(recipes);
};
