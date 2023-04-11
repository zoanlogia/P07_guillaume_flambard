import { globaleSearch } from "./utils/globaleSearch.js";
import {
  handleApplianceSelect,
  handleIngredientSelect,
  handleUstensilsSelect,
} from "./utils/handlesSelectsLists.js";
/**
 * The function starts the algorithm by handling ingredient, appliance, and utensil selection, as well
 * as global search.
 */
const startAlgo = () => {
  handleIngredientSelect();
  handleApplianceSelect();
  handleUstensilsSelect();
  globaleSearch();
};

export default startAlgo;
