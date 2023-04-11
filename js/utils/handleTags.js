// import { updateLists } from "./handlesSelects.js";
import { getLocaleStorage, setLocaleStorage } from "./storage.js";
import { displayCards } from "./ui.js";
import {
  updateApplianceSelect,
  updateIngredientSelect,
  updateUstensilSelect,
} from "./updateSelect.js";

/**
 * This function handles the removal of a tag and updates the recipe display based on the remaining
 * tags.
 * @param tag - The `tag` parameter is a DOM element representing a tag that has been added to a recipe
 * filter.
 */
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
