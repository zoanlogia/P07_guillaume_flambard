import { drawLi } from "../components/createLists.js";

export const updateUstensilSelect = (data) => {
    const tagsDisplayed = Array.from(document.querySelectorAll('.tag.orange > p')).map(tag => tag.dataset.value)

    const list = document.querySelector(".ul_ustensils");
    const ustensils = [...new Set(data.filter(recipe => recipe.isShow).flatMap(recipe => recipe.ustensils.flatMap(ust => ust.toLowerCase())))];
    list.innerHTML = "";
    const ustensilsToDisplay = ustensils.filter(ustensil => !tagsDisplayed.includes(ustensil))

    ustensilsToDisplay.forEach(ust => {
        list.append(drawLi(ust))
    })
}

export const updateApplianceSelect = (data) => {
    const tagsDisplayed = Array.from(document.querySelectorAll('.tag.green > p')).map(tag => tag.dataset.value)
    const list = document.querySelector(".ul_appliances");
    const appliances = [...new Set(data.filter(recipe => recipe.isShow).map(recipe => recipe.appliance.toLowerCase()))];
    list.innerHTML = "";
    const appliancesToDisplay = appliances.filter(app => !tagsDisplayed.includes(app))
    appliancesToDisplay.forEach(app => {
        list.append(drawLi(app))
    })
}

/**
 * 
 * @param {string[]} data
 * 
    */
export const updateIngredientSelect = (data) => {
    const tagsDisplayed = Array.from(document.querySelectorAll('.tag.blue > p')).map(tag => tag.dataset.value)
    const list = document.querySelector(".ul_ingredients");
    const ingredients = [...new Set(data.filter(recipe => recipe.isShow).flatMap(recipe => recipe.ingredients.flatMap(ing => ing.ingredient.toLowerCase())))];
    list.innerHTML = "";
    const ingredientsToDisplay = ingredients.filter(ing => !tagsDisplayed.includes(ing))

    ingredientsToDisplay.forEach(ing => {
        list.append(drawLi(ing))
    })
}