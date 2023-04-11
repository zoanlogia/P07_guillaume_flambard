import { getLocaleStorage, setLocaleStorage } from "./storage.js";
import { displayCards } from "./ui.js";

/**
 * The function enables global search functionality for a recipe website by filtering recipes based on
 * user input and displaying matching results.
 */
export const globaleSearch = () => {
  const searchbar = document.querySelector("#searchbar");
  const containerTags = document.querySelector(".tags__container");

  searchbar.addEventListener("input", (e) => {
    const lists = Array.from(document.querySelectorAll(".select__item"));
    const DATA = getLocaleStorage();

    if (e.target.value.length >= 3) {
      const RecipesToDisplay = DATA.map((recipe) => {
        const searchTerm = e.target.value.toLowerCase();
        const matchesSearchTerm =
          recipe.name.toLowerCase().includes(searchTerm) ||
          recipe.ingredients.some((ingredient) =>
            ingredient.ingredient.toLowerCase().includes(searchTerm)
          ) ||
          recipe.ustensils.some((ustensil) =>
            ustensil.toLowerCase().includes(searchTerm)
          ) ||
          recipe.appliance.toLowerCase().includes(searchTerm) ||
          recipe.description.toLowerCase().includes(searchTerm);

        return {
          ...recipe,
          isShow: matchesSearchTerm,
        };
      });
      setLocaleStorage(RecipesToDisplay);
    } else {
      const RecipesToDisplay = DATA.map((recipe) => ({
        ...recipe,
        isShow: true,
      }));
      containerTags.innerHTML = "";
      setLocaleStorage(RecipesToDisplay);
    }
    lists.filter((li) => {
      return li.textContent.toLowerCase().includes(e.target.value.toLowerCase())
        ? (li.style.display = "block")
        : (li.style.display = "none");
    });
    displayCards();
  });
};
