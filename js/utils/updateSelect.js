import { drawLi } from "../components/createLists.js";

export const updateUstensilSelect = (data) => {
    const list = document.querySelector(".ul_ustensils");
    const ustensils = [...new Set(data.filter(recipe => recipe.isShow).flatMap(recipe => recipe.ustensils.flatMap(ust => ust.toLowerCase())))];
    console.log(ustensils);
    list.innerHTML = "";
    ustensils.forEach(ust => {
        list.append(drawLi(ust))
    })
}

export const updateApplianceSelect = (data) => {

    const list = document.querySelector(".ul_appliances");
    const appliances = [...new Set(data.filter(recipe => recipe.isShow).map(recipe => recipe.appliance.toLowerCase()))];
    list.innerHTML = "";
    appliances.forEach(app => {
        list.append(drawLi(app))
    })
}

/**
 * 
 * @param {string[]} data 
 */
export const updateIngredientSelect = (data) => {
    const list = document.querySelector(".ul_ingredients");
    const ingredients = [...new Set(data.filter(recipe => recipe.isShow).flatMap(recipe => recipe.ingredients.flatMap(ing => ing.ingredient.toLowerCase())))];
    list.innerHTML = "";
    ingredients.forEach(ing => {
        list.append(drawLi(ing))
    })
}