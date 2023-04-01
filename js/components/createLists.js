import { createTagsAppliances, createTagsIngredients, createTagsUstensils } from "./tag.js";

export const drawLi = (value) => {
    const li = document.createElement("li");

    li.classList.add("select__item");
    li.dataset.value = value;
    li.textContent = value;

    li.onclick = (e) => {

        const type = e.target.parentElement.parentNode.classList[1].split('_')[1];
        switch (type) {
            case 'ingredients':
                createTagsIngredients(e.target.dataset.value);
                break;
            case 'ustensils':
                createTagsUstensils(e.target.dataset.value);
                break
            case 'appliance':
                createTagsAppliances(e.target.dataset.value);
                break;
        }
    }
    return li;
}