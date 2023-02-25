export const displayError = (message) => {
  const error = document.createElement("p");
  error.classList.add("error");
  error.innerHTML = message;
  return error;
};
