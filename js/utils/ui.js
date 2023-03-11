import { card } from "../components/card.js";
import { errorMessage } from "../components/error.js";
import {
  generateAppliancesList,
  generateAppliancesSelect,
  generateIngredientsList,
  generateIngredientsSelect,
  generateUstensilList,
  generateUstensilSelect,
} from "../components/selects.js";
import { getLocaleStorage } from "./storage.js";


/**
 * It displays the cards in the recipes container
 * @returns The dom is being returned.
 */
export const displayCards = () => {
  const data = getLocaleStorage()
  const cardsContainer = document.querySelector(".recipes__container");
  cardsContainer.innerHTML = "";
  data.forEach((recipe) => {
    cardsContainer.innerHTML += card(recipe);
  });
  if (cardsContainer.innerHTML === "") {
    cardsContainer.append(errorMessage());
  }
};


/**
 * It takes the ingredients, appliances and ustensils lists and generates a select element for each of
 * them
 * @returns The dom is being returned.
 */
export const displaySelects = () => {
  const dom = document.querySelector(".select__container");
  const ingredientSelect = generateIngredientsSelect(generateIngredientsList());
  const appliancesSelect = generateAppliancesSelect(generateAppliancesList());
  const ustensilsSelect = generateUstensilSelect(generateUstensilList())
  let divIngredients = `<div class="ingredients">${ingredientSelect}</div>`
  let divAppliances = `<div class="appliances">${appliancesSelect}</div>`
  let divUstensils = `<div class="appliances">${ustensilsSelect}</div>`
  dom.innerHTML = divIngredients + divAppliances + divUstensils;
  return dom
};


