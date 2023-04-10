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

export const drawLi = (value) => {
  const li = document.createElement("li");

  li.classList.add("select__item");
  li.dataset.value = value;
  li.textContent = value;

  li.onclick = (e) => {
    const type = e.target.parentElement.parentNode.classList[1].split("_")[1];
    const clickedIng = li.dataset.value.toLowerCase();

    if (type === "ingredients") {
      createTagsIngredients(e.target.dataset.value);
      // logique pour l'onClick
      if (document.querySelector(".error")) {
        document.querySelector(".error").remove();
      }
      let data = getLocaleStorage();
      let ingredients = [
        ...new Set(
          data.flatMap((recipe) =>
            recipe.ingredients.flatMap((ing) => ing.ingredient.toLowerCase())
          )
        ),
      ];

      if (ingredients.includes(clickedIng)) {
        const newData = data.map((recipe) => {
          if (recipe.isShow) {
            const allIng = recipe.ingredients.map((ing) =>
              ing.ingredient.toLowerCase()
            );
            recipe.isShow = allIng.includes(li.dataset.value);
          }
          return recipe;
        });

        const input = document.querySelector(
          "#selectIngredient input[type=search]"
        );
        input.addEventListener("input", (e) => {
          const value = e.target.value.toLowerCase();
          const lis = Array.from(
            document.querySelectorAll(".ul_ingredients > li")
          );
          lis.map((li) => {
            if (li.dataset.value.toLowerCase().includes(value.toLowerCase())) {
              li.style.display = "block";
            } else {
              li.style.display = "none";
            }
          });
        });

        setLocaleStorage(newData);
        displayCards();
        // mettre à jour les 2 autres selects
        updateIngredientSelect(newData);
        updateUstensilSelect(newData);
        updateApplianceSelect(newData);
      }
    } else if (type === "ustensils") {
      createTagsUstensils(e.target.dataset.value);
      if (document.querySelector(".error")) {
        document.querySelector(".error").remove();
      }
      const data = getLocaleStorage();
      const ustensils = [
        ...new Set(
          data.map((ustensil) =>
            ustensil.ustensils.flatMap((ust) => ust.toLowerCase())
          )
        ),
      ].flat();

      if (ustensils.includes(li.dataset.value.toLowerCase())) {
        const newData = data.map((recipe) => {
          if (recipe.isShow) {
            const allUstensils = recipe.ustensils.map((ustensil) =>
              ustensil.toLowerCase()
            );
            recipe.isShow = allUstensils.includes(
              li.dataset.value.toLowerCase()
            );
          }
          return recipe;
        });

        const input = document.querySelector(
          "#selectUstensils input[type=search]"
        );
        input.addEventListener("input", (e) => {
          const value = e.target.value.toLowerCase();
          const lis = Array.from(
            document.querySelectorAll(".ul_ustensils > li")
          );
          lis.map((li) => {
            if (li.dataset.value.toLowerCase().includes(value.toLowerCase())) {
              li.style.display = "block";
            } else {
              li.style.display = "none";
            }
          });
        });

        setLocaleStorage(newData);
        displayCards();
        // mettre a jours les 2 autres selects
        updateUstensilSelect(newData);
        updateIngredientSelect(newData);
        updateApplianceSelect(newData);
      }
    } else {
      createTagsAppliances(e.target.dataset.value);
      // logique pour le onClick
      if (document.querySelector(".error")) {
        document.querySelector(".error").remove();
      }

      const data = getLocaleStorage();
      const appliances = [
        ...new Set(data.map((appliance) => appliance.appliance.toLowerCase())),
      ];

      if (appliances.includes(li.dataset.value.toLowerCase())) {
        const newData = data.map((recipe) => {
          if (recipe.isShow) {
            const allAppliances = recipe.appliance.toLowerCase();
            recipe.isShow = allAppliances.includes(
              li.dataset.value.toLowerCase()
            );
          }
          return recipe;
        });

        const input = document.querySelector(
          "#selectAppliances input[type=search]"
        );
        input.addEventListener("input", (e) => {
          const value = e.target.value.toLowerCase();
          const lis = Array.from(
            document.querySelectorAll(".ul_appliances > li")
          );
          lis.map((li) => {
            if (li.dataset.value.toLowerCase().includes(value.toLowerCase())) {
              li.style.display = "block";
            } else {
              li.style.display = "none";
            }
          });
        });

        setLocaleStorage(newData);
        displayCards();
        // mettre a jours les 2 autres selects
        updateApplianceSelect(newData);
        updateUstensilSelect(newData);
        updateIngredientSelect(newData);
      }
    }
  };
  return li;
};
