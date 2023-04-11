import { drawLi } from "../components/createLists.js";
import { updateListOnInput } from "./selectInput.js";
import { getLocaleStorage, setLocaleStorage } from "./storage.js";
import { displayCards } from "./ui.js";
import {
  updateApplianceSelect,
  updateIngredientSelect,
  updateUstensilSelect,
} from "./updateSelect.js";

/**
 * This function handles the selection of ingredients by displaying a dropdown list of available
 * ingredients and updating the recipe cards based on the selected ingredient.
 */
export const handleIngredientSelect = () => {
  const button = document.getElementById("selectIngredient");
  const arrow = button.querySelector(".arrow");
  const ul = document.querySelector(".ul_ingredients");

  const data = getLocaleStorage();
  const ingredients = [];
  for (let i = 0; i < data.length; i++) {
    let recipe = data[i];
    if (recipe.isShow) {
      let recipeIngredients = recipe.ingredients;
      for (let j = 0; j < recipeIngredients.length; j++) {
        let ingredient = recipeIngredients[j].ingredient.toLowerCase();
        if (!ingredients.includes(ingredient)) {
          ingredients.push(ingredient);
        }
      }
    }
  }

  for (let i = 0; i < ingredients.length; i++) {
    ul.append(drawLi(ingredients[i]));
  }

  const lis = document.querySelectorAll(".ul_ingredients >.select__item");

  button.addEventListener("click", () => {
    ul.classList.toggle("hidden");
    arrow.classList.toggle("active");
  });

  document.addEventListener("click", (event) => {
    const isClickInsideList = ul.contains(event.target);
    const isClickInsideButton = button.contains(event.target);

    // Si le clic est en dehors de la liste déroulante et du bouton, ferme la liste déroulante
    if (!isClickInsideList && !isClickInsideButton) {
      ul.classList.add("hidden");
      arrow.classList.remove("active");
    }
  });

  updateListOnInput();

  for (let i = 0; i < lis.length; i++) {
    let li = lis[i];
    li.addEventListener("click", () => {
      if (document.querySelector(".error")) {
        document.querySelector(".error").remove();
      }
      const data = getLocaleStorage();
      const ingredients = [];
      for (let i = 0; i < data.length; i++) {
        let recipe = data[i];
        let recipeIngredients = recipe.ingredients;
        for (let j = 0; j < recipeIngredients.length; j++) {
          let ingredient = recipeIngredients[j].ingredient.toLowerCase();
          if (!ingredients.includes(ingredient)) {
            ingredients.push(ingredient);
          }
        }
      }

      if (ingredients.includes(li.dataset.value.toLowerCase())) {
        li.style.display = "none";
        const newData = [];
        for (let i = 0; i < data.length; i++) {
          let recipe = data[i];
          if (recipe.isShow) {
            let allIng = [];
            for (let j = 0; j < recipe.ingredients.length; j++) {
              allIng.push(recipe.ingredients[j].ingredient.toLowerCase());
            }
            recipe.isShow = allIng.includes(li.dataset.value);
          }
          newData.push(recipe);
        }

        setLocaleStorage(newData);
        displayCards();
        // mettre a jours les 2 autres selects
        updateUstensilSelect(newData);
        updateApplianceSelect(newData);
      }
    });
  }
};

/**
 * It handles the click event on the appliance select button and the click event on the appliance
 */
export const handleUstensilsSelect = () => {
  const button = document.getElementById("selectUstensils");
  const arrow = button.querySelector(".arrow");
  const ul = document.querySelector(".ul_ustensils");

  const data = getLocaleStorage();
  const ustensils = [];
  for (let i = 0; i < data.length; i++) {
    let recipe = data[i];
    if (recipe.isShow) {
      let recipeUstensils = recipe.ustensils;
      for (let j = 0; j < recipeUstensils.length; j++) {
        let ustensil = recipeUstensils[j].toLowerCase();
        if (!ustensils.includes(ustensil)) {
          ustensils.push(ustensil);
        }
      }
    }
  }

  for (let i = 0; i < ustensils.length; i++) {
    ul.append(drawLi(ustensils[i]));
  }

  const lis = document.querySelectorAll(".ul_ustensils >.select__item");

  button.addEventListener("click", () => {
    ul.classList.toggle("hidden");
    arrow.classList.toggle("active");
  });

  document.addEventListener("click", (event) => {
    const isClickInsideList = ul.contains(event.target);
    const isClickInsideButton = button.contains(event.target);

    // Si le clic est en dehors de la liste déroulante et du bouton, ferme la liste déroulante
    if (!isClickInsideList && !isClickInsideButton) {
      ul.classList.add("hidden");
      arrow.classList.remove("active");
    }
  });

  updateListOnInput();

  for (let i = 0; i < lis.length; i++) {
    let li = lis[i];
    li.addEventListener("click", () => {
      const data = getLocaleStorage();
      const ustensils = [];
      for (let i = 0; i < data.length; i++) {
        let recipe = data[i];
        let recipeUstensils = recipe.ustensils;
        for (let j = 0; j < recipeUstensils.length; j++) {
          let ustensil = recipeUstensils[j].toLowerCase();
          if (!ustensils.includes(ustensil)) {
            ustensils.push(ustensil);
          }
        }
      }

      if (ustensils.includes(li.dataset.value.toLowerCase())) {
        li.style.display = "none";

        const newData = [];
        for (let i = 0; i < data.length; i++) {
          let recipe = data[i];
          if (recipe.isShow) {
            let allUstensils = [];
            for (let j = 0; j < recipe.ustensils.length; j++) {
              allUstensils.push(recipe.ustensils[j].toLowerCase());
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
        updateIngredientSelect(newData);
        updateApplianceSelect(newData);
      }
    });
  }
};

/**
 * It handles the click event on the appliance select button and the appliance select list items
 */

export const handleApplianceSelect = () => {
  const button = document.querySelector("#selectAppliances");
  const arrow = button.querySelector(".arrow");
  const ul = document.querySelector(".ul_appliances");

  const data = getLocaleStorage();
  const appliances = [];
  for (let i = 0; i < data.length; i++) {
    let recipe = data[i];
    if (recipe.isShow) {
      appliances.push(recipe.appliance.toLowerCase());
    }
  }

  for (let i = 0; i < appliances.length; i++) {
    ul.appendChild(drawLi(appliances[i]));
  }

  const lis = document.querySelectorAll(".ul_appliances >.select__item");

  button.addEventListener("click", () => {
    ul.classList.toggle("hidden");
    arrow.classList.toggle("active");
  });

  updateListOnInput();

  document.addEventListener("click", (event) => {
    const isClickInsideList = ul.contains(event.target);
    const isClickInsideButton = button.contains(event.target);

    // Si le clic est en dehors de la liste déroulante et du bouton, ferme la liste déroulante
    if (!isClickInsideList && !isClickInsideButton) {
      ul.classList.add("hidden");
      arrow.classList.remove("active");
    }
  });

  for (let i = 0; i < lis.length; i++) {
    lis[i].addEventListener("click", () => {
      const data = getLocaleStorage();
      const appliances = [];

      for (let i = 0; i < data.length; i++) {
        const appliance = data[i].appliance.toLowerCase();
        if (!appliances.includes(appliance)) {
          appliances.push(appliance);
        }
      }

      if (appliances.includes(lis[i].dataset.value.toLowerCase())) {
        lis[i].style.display = "none";

        const newData = [];
        for (let i = 0; i < data.length; i++) {
          let recipe = data[i];
          if (recipe.isShow) {
            const allAppliances = recipe.appliance.toLowerCase();
            recipe.isShow = allAppliances.includes(
              lis[i].dataset.value.toLowerCase()
            );
          }
          newData.push(recipe);
        }

        setLocaleStorage(newData);
        displayCards();
        // mettre a jours les 2 autres selects
        updateUstensilSelect(newData);
        updateIngredientSelect(newData);
      }
    });
  }
};
