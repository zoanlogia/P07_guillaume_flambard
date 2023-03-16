export const errorMessage = () => {
    const error = document.createElement("p");
    error.classList.add("error");
    error.innerHTML = `
        No recipes found. 💩
    `;
    return error;
}