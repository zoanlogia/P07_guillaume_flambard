import { getLocaleStorage, setLocaleStorage } from "./storage.js"
import { displayCards } from "./ui.js"

export const globaleSearch = () => {
    const searchbar = document.querySelector("#searchbar")
    const Lists = Array.from(document.querySelectorAll("li"))
    const DATA = getLocaleStorage()
    searchbar.addEventListener("input", (e) => {
        if (e.target.value.length >= 3) {
            const RecipesToDisplay = DATA.filter((recipe) => {
                if (recipe.isShow) {
                    return recipe.name.toLowerCase().includes(e.target.value.toLowerCase()) || recipe.ingredients.some((ingredient) => ingredient.ingredient.toLowerCase().includes(e.target.value.toLowerCase())) || recipe.ustensils.some((ustensil) => ustensil.toLowerCase().includes(e.target.value.toLowerCase())) || recipe.appliance.toLowerCase().includes(e.target.value.toLowerCase()) || recipe.description.toLowerCase().includes(e.target.value.toLowerCase())
                }
            });
            Lists.filter((li) => {
                return li.textContent.toLowerCase().includes(e.target.value.toLowerCase()) ? li.style.display = "block" : li.style.display = "none"
            })
            setLocaleStorage(RecipesToDisplay)
            displayCards()
        } else {
            Lists.forEach((li) => li.style.display = "block")
            setLocaleStorage(DATA)
            displayCards()
        }
    })
}

