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
  const tagsDisplayed = Array.from(
    document.querySelectorAll(".tag.orange > p")
  ).map((tag) => tag.dataset.value);

  const list = document.querySelector(".ul_ustensils");
  const ustensils = [
    ...new Set(
      data
        .filter((recipe) => recipe.isShow)
        .flatMap((recipe) =>
          recipe.ustensils.flatMap((ust) => ust.toLowerCase())
        )
    ),
  ];
  list.innerHTML = "";
  const ustensilsToDisplay = ustensils.filter(
    (ustensil) => !tagsDisplayed.includes(ustensil)
  );

  ustensilsToDisplay.map((ust) => {
    list.append(drawLi(ust));
  });
};

export const updateApplianceSelect = (data) => {
  const tagsDisplayed = Array.from(
    document.querySelectorAll(".tag.green > p")
  ).map((tag) => tag.dataset.value);
  const list = document.querySelector(".ul_appliances");
  const appliances = [
    ...new Set(
      data
        .filter((recipe) => recipe.isShow)
        .map((recipe) => recipe.appliance.toLowerCase())
    ),
  ];
  list.innerHTML = "";
  const appliancesToDisplay = appliances.filter(
    (app) => !tagsDisplayed.includes(app)
  );
  appliancesToDisplay.map((app) => {
    list.append(drawLi(app));
  });
};

export const updateIngredientSelect = (data) => {
  const tagsDisplayed = Array.from(
    document.querySelectorAll(".tag.blue > p")
  ).map((tag) => tag.dataset.value);
  const list = document.querySelector(".ul_ingredients");
  const ingredients = [
    ...new Set(
      data
        .filter((recipe) => recipe.isShow)
        .flatMap((recipe) =>
          recipe.ingredients.flatMap((ing) => ing.ingredient.toLowerCase())
        )
    ),
  ];
  list.innerHTML = "";
  const ingredientsToDisplay = ingredients.filter(
    (ing) => !tagsDisplayed.includes(ing)
  );

  ingredientsToDisplay.map((ing) => {
    list.append(drawLi(ing));
  });
};
