import { getLocaleStorage, setLocaleStorage } from "./storage.js"
import { displayCards } from "./ui.js"

export const globaleSearch = () => {
    const searchbar = document.querySelector("#searchbar")
    const DATA = getLocaleStorage()
    searchbar.addEventListener("input", (e) => {
        if (e.target.value.length >= 3) {
            const RecipesToDisplay = DATA.filter((recipe) => {
                return recipe.name.toLowerCase().includes(e.target.value.toLowerCase()) || recipe.ingredients.some((ingredient) => ingredient.ingredient.toLowerCase().includes(e.target.value.toLowerCase())) || recipe.ustensils.some((ustensil) => ustensil.toLowerCase().includes(e.target.value.toLowerCase())) || recipe.appliance.toLowerCase().includes(e.target.value.toLowerCase()) || recipe.description.toLowerCase().includes(e.target.value.toLowerCase())
            });
            setLocaleStorage(RecipesToDisplay)
            displayCards()
        } else {
            setLocaleStorage(DATA)
            displayCards()
        }
    })
}
