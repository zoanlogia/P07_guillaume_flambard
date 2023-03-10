import { setLocaleStorage } from "./storage.js";
import recipes from "../../data/recipes.js";

/**
 * It takes the recipes from the local storage, loops through them, and sets the isShow property to
 * true
 */
export const initRecipes = () => {
  recipes.forEach(recipe => {
    recipe.isShow = true;
  });
  setLocaleStorage(recipes);
};
