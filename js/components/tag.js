import { closeTag } from "../utils/handleTags.js";

export const createTag = (value) => {
    const tag = document.createElement("div");
    tag.classList.add("tag");
    tag.addEventListener("click", () => {
        closeTag(tag);
    });
    tag.innerHTML = `
        <p>${value}</p>
        <span class="tag__close">x</span>
    `;
    return tag;
}