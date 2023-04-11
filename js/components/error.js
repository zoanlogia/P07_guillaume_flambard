/**
 * This function creates and returns an error message element for when no recipes are found.
 * @returns A function that creates a new `p` element with the class "error" and the innerHTML "No
 * recipes found.", and returns it.
 */
export const errorMessage = () => {
  const error = document.createElement("p");
  error.classList.add("error");
  error.innerHTML = `
        No recipes found.
    `;
  return error;
};
