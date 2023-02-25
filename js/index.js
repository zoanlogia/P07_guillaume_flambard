import { getLocaleStorage, setLocaleStorage } from "./utils/storage.js";
import startAlgo from "./startAlgo.js";
import { displayCards, displaySelects } from "./utils/ui.js";
import { isShow } from "./utils/display.js";
import recipes from "../data/recipes.js"
(() => {
  setLocaleStorage(recipes)
  isShow(getLocaleStorage())
  displayCards(getLocaleStorage());
  displaySelects();
  startAlgo();
})();
