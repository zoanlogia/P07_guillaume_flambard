import { dropdownIngredientContainer } from "../components/dropdown_ingredients.js";
import { card } from "../components/card.js";
import { getRecipesStocked } from "./storage.js";

export const createFilter = () => {
  const container = document.querySelector(".filter__container");
  container.append(dropdownIngredientContainer());
  // container.append(dropdownApplianceContainer());
  // container.append(dropdownUstencilContainer());
}

export const displayRecipes = () => {
  const recipes = getRecipesStocked();
  const container = document.querySelector(".recipes__container");
  container.innerHTML = "";
  recipes.forEach((recipe) => {
    if (recipe.display) {
      container.append(card(recipe));
    }
  });
};

// main function
