import startAlgo from "./startAlgo.js";
import { displayCards } from "./utils/ui.js";
import { initRecipes } from "./utils/initShow.js";

(() => {
  initRecipes()
  startAlgo();
  displayCards();
})();
