import { getLocaleStorage, setLocaleStorage } from "./storage.js";
import { displayCards } from "./ui.js";

export const handleIngredientsTag = (tag) => {
  const close = tag.querySelector('.tag__close')
  close.addEventListener('click', () => {
    const DATA = getLocaleStorage();

    tag.remove();
    const survivorTags = Array.from(document.querySelectorAll('.tag.blue'));

    const survivorTagsValue = survivorTags.map(t => {
      const p = t.querySelector('p');
      return p.dataset.value.toLowerCase();
    })

    const newData = DATA.map((recipe) => {
        const recipIng = recipe.ingredients.map((ing) => ing.ingredient.toLowerCase());
        recipe.isShow = survivorTagsValue.every(el => recipIng.includes(el));
        return recipe;
      });
      setLocaleStorage(newData);
      displayCards();
  })
}
