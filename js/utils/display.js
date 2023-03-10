import { getLocaleStorage, setLocaleStorage } from "./storage.js";
// import recipes from "../../data/recipes.js";

export const isShow = () => {
 const recipes = getLocaleStorage()
  recipes.forEach(recipe => {
    recipe.isShow = true;
  });
  setLocaleStorage(recipes);
};
