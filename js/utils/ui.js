import { card } from "../components/card.js";
import { errorMessage } from "../components/error.js";
import { getLocaleStorage } from "./storage.js";

/**
 * It displays the cards in the recipes container
 * @returns The dom is being returned.
 */
export const displayCards = () => {
  const data = getLocaleStorage();
  const cardsContainer = document.querySelector(".recipes__container");
  cardsContainer.innerHTML = "";

  for (let i = 0; i < data.length; i++) {
    const recipe = data[i];
    cardsContainer.innerHTML += card(recipe);
  }

  if (cardsContainer.innerHTML === "") {
    cardsContainer.append(errorMessage());
  }
};
