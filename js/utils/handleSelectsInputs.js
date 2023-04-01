// import { getLocaleStorage } from "./storage.js";
// import { updateApplianceSelect, updateIngredientSelect, updateUstensilSelect } from "./updateSelect.js";

// export const handleInputSelects = () => {
//     const inputs = document.querySelectorAll(".select__input");

//     inputs.forEach((input) => {
//         input.addEventListener("input", () => {
//             const data = getLocaleStorage();
//             const value = input.value.toLowerCase();

//             // Filtre les données en fonction de la recherche
//             const filteredData = data.filter((recipe) => {
//                 if (!recipe.isShow) {
//                     return false;
//                 }
//                 const ingredients = recipe.ingredients.flatMap((ing) =>
//                     ing.ingredient.toLowerCase()
//                 );
//                 const ustensils = recipe.ustensils.flatMap((ust) => ust.toLowerCase());
//                 const appliance = recipe.appliance.toLowerCase();
//                 return (
//                     ingredients.includes(value) ||
//                     ustensils.includes(value) ||
//                     appliance.includes(value)
//                 );
//             });

//             // Mettre à jour les sélecteurs
//             updateUstensilSelect(filteredData);
//             updateIngredientSelect(filteredData);
//             updateApplianceSelect(filteredData);
//         });
//     });
// }