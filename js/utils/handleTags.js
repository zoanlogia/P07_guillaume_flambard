// import { updateLists } from "./handlesSelects.js";
import { getLocaleStorage, setLocaleStorage } from "./storage.js";
import { displayCards } from "./ui.js";

// export const handleIngredientsTag = (tag) => {
//   const close = tag.querySelector('.tag__close')
//   close.addEventListener('click', () => {
//     const DATA = getLocaleStorage();

//     tag.remove();
//     const tagsLeft = Array.from(document.querySelectorAll('.tag.blue'));
//     const tagsLeftValue = tagsLeft.map(t => {
//       const p = t.querySelector('p');
//       return p.dataset.value.toLowerCase();
//     })

//     const newData = DATA.map((recipe) => {
//         const recipIng = recipe.ingredients.map((ing) => ing.ingredient.toLowerCase());
//         recipe.isShow = tagsLeftValue.every(el => recipIng.includes(el));
//         return recipe;
//       });
//       setLocaleStorage(newData);
//       displayCards();
//   })
// }

// export const handleUstensilsTag = (tag) => {
//   const close = tag.querySelector('.tag__close')
//   close.addEventListener('click', () => {
//     const DATA = getLocaleStorage();

//     tag.remove();
//     const tagsLeft = Array.from(document.querySelectorAll('.tag.orange'));

//     const tagsLeftValue = tagsLeft.map(t => {
//       const p = t.querySelector('p');
//       return p.dataset.value.toLowerCase();
//     })

//     console.log(tagsLeftValue);

//     const newData = DATA.map((recipe) => {
//         const recipUst = recipe.ustensils.map((ust) => ust.toLowerCase());
//         recipe.isShow = tagsLeftValue.every(el => recipUst.includes(el));
//         return recipe;
//       });
//       setLocaleStorage(newData);
//       displayCards();
//   })
// }

// export const handleApplianceTag = (tag) => {
//   const close = tag.querySelector('.tag__close')
//   close.addEventListener('click', () => {
//     const DATA = getLocaleStorage();

//     tag.remove();
//     const tagsLeft = Array.from(document.querySelectorAll('.tag.green'));

//     const tagsLeftValue = tagsLeft.map(t => {
//       const p = t.querySelector('p');
//       return p.dataset.value.toLowerCase();
//     })

//     const newData = DATA.map((recipe) => {
//         const recipApp = recipe.appliance.toLowerCase();
//         recipe.isShow = tagsLeftValue.every(el => recipApp.includes(el));
//         return recipe;
//       });
//       setLocaleStorage(newData);
//       displayCards();
//   })
// }

export const handleTags = (tag) => {
  const close = tag.querySelector('.tag__close')

  close.addEventListener('click', () => {
    const DATA = getLocaleStorage();

    tag.remove();
    const tagsLeft = Array.from(document.querySelectorAll('.tag'));

    const tagsLeftValue = tagsLeft.map(t => {
      const p = t.querySelector('p');
      return p.dataset.value.toLowerCase();
    })

    const newData = DATA.map((recipe) => {
      const recipIng = recipe.ingredients.map((ing) => ing.ingredient.toLowerCase());
      const recipUst = recipe.ustensils.map((ust) => ust.toLowerCase());
      const recipApp = recipe.appliance.toLowerCase();
      recipe.isShow = tagsLeftValue.every(el => recipIng.includes(el) || recipUst.includes(el) || recipApp.includes(el));
      return recipe;
    });
    setLocaleStorage(newData);
    displayCards();
    // updateLists(); // met à jour la liste des éléments disponibles
  })
}
