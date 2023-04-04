import { handleTags } from "../utils/handleTags.js";
const tagsContainer = document.querySelector(".tags__container");

export const createTag = (value) => {
  const tag = document.createElement("div");
  tag.classList.add("tag");
  tag.innerHTML = `
        <p data-value="${value}">${value}</p>
        <span class="tag__close">x</span>
    `;
  return tag;
}

export const createTagsIngredients = (value) => {
  const tag = createTag(value);
  tag.classList.add("blue");
  tagsContainer.appendChild(tag);
  handleTags(tag);
};

export const createTagsUstensils = (value) => {
  const tag = createTag(value);
  tag.classList.add("orange");
  tagsContainer.appendChild(tag);
  handleTags(tag);
};

export const createTagsAppliances = (value) => {
  const tag = createTag(value);
  tag.classList.add("green");
  tagsContainer.appendChild(tag);
  handleTags(tag);
};

// export const createTags = (value, type) => {
//   switch (type) {
//     case "ingredients":
//       createTagsIngredients(value);
//       break;
//     case "ustensils":
//       createTagsUstensils(value);
//       break;
//     case "appliances":
//       createTagsAppliances(value);
//       break;
//   }
// }