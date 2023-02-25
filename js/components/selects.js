import { getLocaleStorage } from "../utils/storage.js";

export const generateIngredientsList = () => {
  const recipes = getLocaleStorage()
  const ingredients = new Set()

  recipes.forEach((recipe) => {
    recipe.ingredients.forEach((ingredient) => {
      ingredients.add(ingredient.ingredient);
    });
  })
  return Array.from(ingredients);
};

export const generateIngredientsSelect = (ingredients) => {
  const itemsHTML = ingredients
    .map(
      (ingredient) =>
        `<li class="select__item" data-value="${ingredient}">${ingredient}</li>`
    )
    .join("");

  const selectList = document.createElement("ul");
  selectList.classList.add("select__list");
  selectList.classList.add("hidden");

  selectList.innerHTML = itemsHTML;

  return `
    <div id="selectIngredient" class="select select_ingredient">
      <div class="button">Ingrédients <span class="arrow">&#x25BE;</span></div>
      ${selectList.outerHTML}
    </div>
  `;
};

export const generateAppliancesList = () => {
  const recipes = getLocaleStorage()
  const appliances = new Set();
  recipes.forEach((appliance) => {
      appliances.add(appliance.appliance);
    });
  return Array.from(appliances);
};

export const generateAppliancesSelect = (appliances) => {
  const itemsHTML = appliances
    .map(
      (appliance) =>
        `<li class="select__item" data-value="${appliance}">${appliance}</li>`
    )
    .join("");

  const selectList = document.createElement("ul");
  selectList.classList.add("select__list");
  selectList.classList.add("hidden");

  selectList.innerHTML = itemsHTML;

  return `
      <div id="selectAppliances" class="select select_appliance">
        <div class="button">Appareils <span class="arrow">&#x25BE;</span></div>
        ${selectList.outerHTML}
      </div>
    `;
};

// APPLIANCE SELECT
export const generateUstensilList = () => {
  const recipes = getLocaleStorage();
  const ustensils = new Set();

  recipes.forEach((recipe) => {
    recipe.ustensils.forEach((ustensil) => {
      ustensils.add(ustensil);
    });
  });
  return Array.from(ustensils)
}

export const generateUstensilSelect = (ustensils) => {
  const itemsHTML = ustensils
    .map(
      (ustensil) =>
        `<li class="select__item" data-value="${ustensil}">${ustensil}</li>`
    )
    .join("");

  const selectList = document.createElement("ul");
  selectList.classList.add("select__list");
  selectList.classList.add("hidden");

  selectList.innerHTML = itemsHTML;

  return `
      <div id="selectUstensils" class="select select_ustensils">
        <div class="button">Ustensils <span class="arrow">&#x25BE;</span></div>
        ${selectList.outerHTML}
      </div>
    `;
}
