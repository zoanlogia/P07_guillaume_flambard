import { handleTags } from "../utils/handleTags.js";
const tagsContainer = document.querySelector(".tags__container");

/**
 * The function creates a tag element with a value and a close button.
 * @param value - The value parameter is a string that represents the text content of the tag. It is
 * used to set the text content of the <p> element inside the created tag.
 * @returns The `createTag` function returns a newly created `div` element with the class `tag`,
 * containing a `p` element with a `data-value` attribute and a `span` element with the class
 * `tag__close`. The `p` element contains the `value` parameter passed to the function.
 */
export const createTag = (value) => {
  const tag = document.createElement("div");
  tag.classList.add("tag");
  tag.innerHTML = `
        <p data-value="${value}">${value}</p>
        <span class="tag__close">x</span>
    `;
  return tag;
};

/**
 * This function creates a blue tag with a given value and appends it to a container while also
 * handling the tag.
 * @param value - The value parameter is the input value entered by the user that will be used to
 * create a new tag.
 */
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
