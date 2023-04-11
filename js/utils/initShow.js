import { setLocaleStorage } from "./storage.js";
import recipes from "../../data/recipes.js";

/**
 * It takes the recipes from the local storage, loops through them, and sets the isShow property to
 * true
 */
export const initRecipes = () => {
  const updatedRecipes = [];
  for (let i = 0; i < recipes.length; i++) {
    updatedRecipes.push({ ...recipes[i], isShow: true });
  }
  setLocaleStorage(updatedRecipes);
};
