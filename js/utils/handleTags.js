// import { globaleSearch } from "./globaleSearch.js";
// import { getLocaleStorage, setLocaleStorage } from "./storage.js";
// import { displayCards } from "./ui.js";

import { getLocaleStorage, setLocaleStorage } from "./storage.js";
import { displayCards } from "./ui.js";

// export const handleTags = () => {
//   const tags = Array.from(document.querySelectorAll(".tag"));
//   const DATA = getLocaleStorage();
//   return tags.map((tag) => tag.querySelector("span").addEventListener("click", () => {
//     tag.remove();
//     const newData = DATA.filter((recipe) => {
//       if (!recipe.isShow) {
//         const allIng = recipe.ingredients.map((ing) => ing.ingredient.toLowerCase());
//         const allUst = recipe.ustensils.map((ust) => ust.toLowerCase());
//         recipe.isShow = !allIng.includes(tag.querySelector('p').dataset.value) || !allUst.includes(tag.querySelector('p').value) || !recipe.appliance.toLowerCase().includes(tag.querySelector('p').value);
//       }
//       return recipe;
//     });
  
//     console.log(newData.map(recipe => recipe.isShow));
//     setLocaleStorage(newData);
//     displayCards();
//   }));
// }

export const handleIngredientsTag = () => {
  const tags = Array.from(document.querySelectorAll('tag.blue > p'));
  const DATA = getLocaleStorage();
  return tags.map((tag) => tag.addEventListener('click', () => {
    tag.parentElement.remove();
    const newData = DATA.filter((recipe) => {
      if (!recipe.isShow) {
        const allIng = recipe.ingredients.map((ing) => ing.ingredient.toLowerCase());
        recipe.isShow = !allIng.includes(tag.dataset.value);
      }
      return recipe;
    });
    setLocaleStorage(newData);
    displayCards();
  }))
}