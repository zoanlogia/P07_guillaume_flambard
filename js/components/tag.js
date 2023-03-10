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
    const tags = document.querySelector(".tags__container");
    const tag = createTag(value);
    tag.classList.add("blue");
    tags.appendChild(tag);
  };
  
  export const createTagsUstensils = (value) => {
    const tags = document.querySelector(".tags__container");
    const tag = createTag(value);
    tag.classList.add("orange");
    tags.appendChild(tag);
  };
  
  export const createTagsAppliances = (value) => {
    const tags = document.querySelector(".tags__container");
    const tag = createTag(value);
    tag.classList.add("green");
    tags.appendChild(tag);
  };