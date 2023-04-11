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

    const tagsLeftValue = [];

    for (let i = 0; i < tagsLeft.length; i++) {
      const p = tagsLeft[i].querySelector("p");
      tagsLeftValue.push(p.dataset.value.toLowerCase());
    }

    const newData = [];

    for (let i = 0; i < DATA.length; i++) {
      const recipe = DATA[i];
      const recipIng = [];
      const recipUst = [];

      for (let j = 0; j < recipe.ingredients.length; j++) {
        const ing = recipe.ingredients[j];
        recipIng.push(ing.ingredient.toLowerCase());
      }

      for (let j = 0; j < recipe.ustensils.length; j++) {
        const ust = recipe.ustensils[j];
        recipUst.push(ust.toLowerCase());
      }

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

      newData.push(recipe);
    }

    setLocaleStorage(newData);
    displayCards();
    updateApplianceSelect(newData);
    updateIngredientSelect(newData);
    updateUstensilSelect(newData);
  });
};
