import { getLocaleStorage, setLocaleStorage } from "./storage.js";

/**
 * The function sets the "isShow" property of all recipes in local storage to true.
 */
export const isShow = () => {
  const recipes = getLocaleStorage();
  recipes.map((recipe) => {
    recipe.isShow = true;
  });
  setLocaleStorage(recipes);
};
