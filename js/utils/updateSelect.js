import { drawLi } from "../components/createLists.js";

/**
 * This function updates the list of available utensils to display based on the data provided and the
 * currently displayed tags.
 * @param data - The `data` parameter is an array of recipe objects. Each recipe object contains
 * information about a recipe, including its name, ingredients, and ustensils. The
 * `updateUstensilSelect` function uses this data to update the list of ustensils displayed on the page
 * based on which
 */
export const updateUstensilSelect = (data) => {
  const tagsDisplayed = [];
  const tagPElements = document.querySelectorAll(".tag.orange > p");
  for (let i = 0; i < tagPElements.length; i++) {
    tagsDisplayed.push(tagPElements[i].dataset.value);
  }

  const list = document.querySelector(".ul_ustensils");
  const ustensils = [];

  for (let i = 0; i < data.length; i++) {
    const recipe = data[i];
    if (recipe.isShow) {
      for (let j = 0; j < recipe.ustensils.length; j++) {
        const ust = recipe.ustensils[j];
        ustensils.push(ust.toLowerCase());
      }
    }
  }

  const ustensilsSet = [...new Set(ustensils)];

  list.innerHTML = "";
  const ustensilsToDisplay = ustensilsSet.filter(
    (ustensil) => !tagsDisplayed.includes(ustensil)
  );

  for (let i = 0; i < ustensilsToDisplay.length; i++) {
    const ust = ustensilsToDisplay[i];
    list.append(drawLi(ust));
  }
};

export const updateApplianceSelect = (data) => {
  const tagsDisplayed = [];
  const tagElements = document.querySelectorAll(".tag.green > p");
  for (let i = 0; i < tagElements.length; i++) {
    tagsDisplayed.push(tagElements[i].dataset.value);
  }

  const list = document.querySelector(".ul_appliances");
  const appliances = [];
  for (let i = 0; i < data.length; i++) {
    const recipe = data[i];
    if (recipe.isShow) {
      const appliance = recipe.appliance.toLowerCase();
      if (!appliances.includes(appliance)) {
        appliances.push(appliance);
      }
    }
  }

  list.innerHTML = "";
  const appliancesToDisplay = [];
  for (let i = 0; i < appliances.length; i++) {
    const appliance = appliances[i];
    if (!tagsDisplayed.includes(appliance)) {
      appliancesToDisplay.push(appliance);
      list.append(drawLi(appliance));
    }
  }
};

export const updateIngredientSelect = (data) => {
  const tagElements = document.querySelectorAll(".tag.blue > p");
  const tagsDisplayed = [];
  for (let i = 0; i < tagElements.length; i++) {
    const tag = tagElements[i];
    tagsDisplayed.push(tag.dataset.value);
  }

  const list = document.querySelector(".ul_ingredients");
  const ingredients = [];

  for (let i = 0; i < data.length; i++) {
    const recipe = data[i];

    if (recipe.isShow) {
      for (let j = 0; j < recipe.ingredients.length; j++) {
        const ingredient = recipe.ingredients[j].ingredient.toLowerCase();
        ingredients.push(ingredient);
      }
    }
  }

  const uniqueIngredients = [...new Set(ingredients)];
  list.innerHTML = "";

  const ingredientsToDisplay = uniqueIngredients.filter(
    (ing) => !tagsDisplayed.includes(ing)
  );

  for (let i = 0; i < ingredientsToDisplay.length; i++) {
    const ingredient = ingredientsToDisplay[i];
    list.append(drawLi(ingredient));
  }
};
