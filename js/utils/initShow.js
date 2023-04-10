import { setLocaleStorage } from "./storage.js";
import recipes from "../../data/recipes.js";

/**
 * It takes the recipes from the local storage, loops through them, and sets the isShow property to
 * true
 */
export const initRecipes = () => {
  const updatedRecipes = recipes.map((recipe) => ({
    ...recipe,
    isShow: true,
  }));
  setLocaleStorage(updatedRecipes);
};
