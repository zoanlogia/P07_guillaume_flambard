import startAlgo from "./startAlgo.js";
import { displayCards } from "./utils/ui.js";
import { initRecipes } from "./utils/initShow.js";

/* This is an immediately invoked function expression (IIFE) in JavaScript. It is a function that is
defined and called immediately without being assigned to a variable. */
(() => {
  initRecipes();
  startAlgo();
  displayCards();
})();
