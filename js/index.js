import startAlgo from "./startAlgo.js";
import { displayCards, displaySelects } from "./utils/ui.js";
import { initRecipes } from "./utils/initShow.js";

(() => {
  initRecipes()
  displayCards();
  displaySelects();
  startAlgo();
})();
