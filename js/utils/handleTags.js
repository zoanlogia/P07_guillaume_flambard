// import { updateLists } from "./handlesSelects.js";
import { getLocaleStorage, setLocaleStorage } from "./storage.js";
import { displayCards } from "./ui.js";
import {
  updateApplianceSelect,
  updateIngredientSelect,
  updateUstensilSelect,
} from "./updateSelect.js";

export const handleTags = (tag) => {
  const close = tag.querySelector(".tag__close");

  close.addEventListener("click", () => {
    const DATA = getLocaleStorage();

    tag.remove();

    const tagsLeft = Array.from(document.querySelectorAll(".tag"));

    const tagsLeftValue = tagsLeft.map((t) => {
      const p = t.querySelector("p");
      return p.dataset.value.toLowerCase();
    });

    const newData = DATA.map((recipe) => {
      const recipIng = recipe.ingredients.map((ing) =>
        ing.ingredient.toLowerCase()
      );
      const recipUst = recipe.ustensils.map((ust) => ust.toLowerCase());
      const recipApp = recipe.appliance.toLowerCase();

      if (tagsLeftValue.length === 0) {
        recipe.isShow = true;
      } else {
        recipe.isShow = tagsLeftValue.every(
          (el) =>
            recipIng.includes(el) ||
            recipUst.includes(el) ||
            recipApp.includes(el)
        );
      }
      return recipe;
    });

    setLocaleStorage(newData);
    displayCards();
    updateApplianceSelect(newData);
    updateIngredientSelect(newData);
    updateUstensilSelect(newData);
  });
};
