import { card } from "../components/card.js";
import {
  generateAppliancesList,
  generateAppliancesSelect,
  generateIngredientsList,
  generateIngredientsSelect,
  generateUstensilList,
  generateUstensilSelect,
} from "../components/selects.js";
import { getLocaleStorage } from "./storage.js";


export const displayCards = (recipes) => {
  recipes = getLocaleStorage()
  const cardsContainer = document.querySelector(".recipes__container");
  cardsContainer.innerHTML = "";
  recipes.forEach((recipe) => {
      cardsContainer.innerHTML += card(recipe);
  });
};


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

