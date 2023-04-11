import { updateListOnInput } from "../utils/selectInput.js";
import { getLocaleStorage, setLocaleStorage } from "../utils/storage.js";
import { displayCards } from "../utils/ui.js";
import {
  updateApplianceSelect,
  updateIngredientSelect,
  updateUstensilSelect,
} from "../utils/updateSelect.js";
import {
  createTagsAppliances,
  createTagsIngredients,
  createTagsUstensils,
} from "./tag.js";

/**
 * The function creates a list item element with specific properties and an onclick event that updates
 * the displayed recipes based on the selected ingredient, ustensil, or appliance.
 * @param value - The value parameter is a string representing the text content of the list item that
 * will be created.
 * @returns The function `drawLi` returns a newly created `li` element with some properties and an
 * `onclick` event listener.
 */
export const drawLi = (value) => {
  const li = document.createElement("li");

  li.classList.add("select__item");
  li.dataset.value = value.toLowerCase();
  li.textContent = value.toLowerCase();

  li.onclick = (e) => {
    const searchbar = document.querySelector("#searchbar");
    searchbar.value = "";

    const type = e.target.parentElement.parentNode.classList[1].split("_")[1];
    const clickedIng = li.dataset.value.toLowerCase();

    if (type === "ingredients") {
      createTagsIngredients(e.target.dataset.value);
      // logique pour l'onClick
      if (document.querySelector(".error")) {
        document.querySelector(".error").remove();
      }
      let data = getLocaleStorage();
      let ingredients = [];
      for (let i = 0; i < data.length; i++) {
        let recipe = data[i];
        for (let j = 0; j < recipe.ingredients.length; j++) {
          let ing = recipe.ingredients[j].ingredient.toLowerCase();
          if (!ingredients.includes(ing)) {
            ingredients.push(ing);
          }
        }
      }

      if (ingredients.includes(clickedIng)) {
        const newData = [];
        for (let i = 0; i < data.length; i++) {
          let recipe = data[i];
          if (recipe.isShow) {
            let allIng = [];
            for (let j = 0; j < recipe.ingredients.length; j++) {
              let ing = recipe.ingredients[j].ingredient.toLowerCase();
              allIng.push(ing);
            }
            recipe.isShow = allIng.includes(li.dataset.value);
          }
          newData.push(recipe);
        }

        setLocaleStorage(newData);
        displayCards();
        // mettre à jour les 2 autres selects
        updateIngredientSelect(newData);
        updateUstensilSelect(newData);
        updateApplianceSelect(newData);
        updateListOnInput();
      }
    } else if (type === "ustensils") {
      createTagsUstensils(e.target.dataset.value);
      if (document.querySelector(".error")) {
        document.querySelector(".error").remove();
      }
      const data = getLocaleStorage();
      const ustensils = [];
      for (let i = 0; i < data.length; i++) {
        let recipe = data[i];
        for (let j = 0; j < recipe.ustensils.length; j++) {
          let ust = recipe.ustensils[j].toLowerCase();
          if (!ustensils.includes(ust)) {
            ustensils.push(ust);
          }
        }
      }

      if (ustensils.includes(li.dataset.value.toLowerCase())) {
        const newData = [];
        for (let i = 0; i < data.length; i++) {
          let recipe = data[i];
          if (recipe.isShow) {
            let allUstensils = [];
            for (let j = 0; j < recipe.ustensils.length; j++) {
              let ust = recipe.ustensils[j].toLowerCase();
              allUstensils.push(ust);
            }
            recipe.isShow = allUstensils.includes(
              li.dataset.value.toLowerCase()
            );
          }
          newData.push(recipe);
        }

        setLocaleStorage(newData);
        displayCards();
        // mettre a jours les 2 autres selects
        updateUstensilSelect(newData);
        updateIngredientSelect(newData);
        updateApplianceSelect(newData);
        updateListOnInput();
      }
    } else {
      createTagsAppliances(e.target.dataset.value);
      // logique pour le onClick
      if (document.querySelector(".error")) {
        document.querySelector(".error").remove();
      }

      const data = getLocaleStorage();
      const appliances = [];
      for (let i = 0; i < data.length; i++) {
        let recipe = data[i];
        let appliance = recipe.appliance.toLowerCase();
        if (!appliances.includes(appliance)) {
          appliances.push(appliance);
        }
      }

      if (appliances.includes(li.dataset.value.toLowerCase())) {
        const newData = [];
        for (let i = 0; i < data.length; i++) {
          let recipe = data[i];
          if (recipe.isShow) {
            let allAppliances = recipe.appliance.toLowerCase();
            recipe.isShow = allAppliances.includes(
              li.dataset.value.toLowerCase()
            );
          }
          newData.push(recipe);
        }

        setLocaleStorage(newData);
        displayCards();
        updateApplianceSelect(newData);
        updateUstensilSelect(newData);
        updateIngredientSelect(newData);
        updateListOnInput();
      }
    }
  };
  return li;
};
