import { getLocaleStorage, setLocaleStorage } from "./storage.js";
import { displayCards } from "./ui.js";

export const handleTagsIngredients = (value) => {
  const recipes = getLocaleStorage();
  recipes.forEach((recipe) => {
    recipe.isShow = false;
    recipe.ingredients.forEach((ingredient) => {
      if (ingredient.ingredient.includes(value)) {
        recipe.isShow = true;
      }
    });
  });
  setLocaleStorage(recipes);
  displayCards(getLocaleStorage());
};

export const closeTag = (tag) => {
  // Récupérer la liste des tags actuellement affichés
  const tags = document.querySelectorAll(".tag p");
  const tagValues = Array.from(tags).map((tag) => tag.textContent);

  // Filtrer les recettes en fonction de la liste des tags
  const recipes = getLocaleStorage().filter((recipe) => {
    return recipe.ingredients.every(
      (ingredient) => !tagValues.includes(ingredient.ingredient)
    );
  });

  // Mettre à jour le localStorage et afficher les cartes
  setLocaleStorage(recipes);
  displayCards(recipes);

  // Supprimer le tag
  tag.remove();
};

