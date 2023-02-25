import { createTag } from "../components/tag.js";
import { handleTagsIngredients } from "./handleTags.js";
import { getLocaleStorage } from "./storage.js";

export const handleIngredientSelect = () => {
  const button = document.querySelector(".select_ingredient .button");
  const arrow = button.querySelector("span");
  const list = document.querySelector(".select_ingredient .select__list");

  const lis = document.querySelectorAll(".select_ingredient .select__item");

  button.addEventListener("click", () => {
    list.classList.toggle("hidden");
    arrow.classList.toggle("active");
  });

  lis.forEach((li) => {
    li.addEventListener("click", () => {
      const ingredients = getLocaleStorage().map(
        (ingredient) => ingredient.ingredients[0]["ingredient"].toLowerCase()
      );
      if (!ingredients.includes(li.dataset.value)) {
        const tags = document.querySelector(".tags__container");
        const tag = createTag(li.dataset.value);
        tag.classList.add("blue");
        tags.appendChild(tag);
        li.style.display = "none";
        handleTagsIngredients(li.dataset.value)
      }
    });
  });
};

export const handleUstensilsSelect = () => {
  const button = document.querySelector(".select_ustensils .button");
  const arrow = button.querySelector("span");
  const list = document.querySelector(".select_ustensils .select__list");

  const lis = document.querySelectorAll(".select_ustensils .select__item");

  button.addEventListener("click", () => {
    // @TODO fix le rotate: maybe mettre la span en display: inline-block ou block
    list.classList.toggle("hidden");
    arrow.classList.toggle("active");
  });

  lis.forEach((li) => {
    li.addEventListener("click", () => {
      const ustensils = getLocaleStorage().map(
        (ustensil) =>  ustensil.ustensils.flat()
        );
      if (!ustensils.includes(li.dataset.value.toLowerCase())) {
        const tags = document.querySelector(".tags__container");
        const tag = createTag(li.dataset.value);
        tag.classList.add("orange");
        tags.appendChild(tag);
        li.style.display = "none";
      }
    });
  });
};

export const handleApplianceSelect = () => {
  const button = document.querySelector(".select_appliance .button");
  const arrow = button.querySelector("span");
  const list = document.querySelector(".select_appliance .select__list");

  const lis = document.querySelectorAll(".select_appliance .select__item");

  button.addEventListener("click", () => {
    // @TODO fix le rotate: maybe mettre la span en display: inline-block ou block
    list.classList.toggle("hidden");
    arrow.classList.toggle("active");
  });

  lis.forEach((li) => {
    li.addEventListener("click", () => {
      const appliance = getLocaleStorage().map((appliance) => appliance);
      if (!appliance.includes(li.dataset.value.toLowerCase())) {
        const tags = document.querySelector(".tags__container");
        const tag = createTag(li.dataset.value);
        tag.classList.add("green");
        tags.appendChild(tag);
        li.style.display = "none";
      }
    });
  });
};
