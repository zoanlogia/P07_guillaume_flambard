import { globaleSearch } from "./utils/globaleSearch.js";
import {
  handleApplianceSelect,
  handleIngredientSelect,
  handleUstensilsSelect,
} from "./utils/handlesSelectsLists.js";

/**
 * The function starts the algorithm by calling several other functions related to ingredient,
 * appliance, utensil selection and global search.
 */
const startAlgo = () => {
  handleIngredientSelect();
  handleApplianceSelect();
  handleUstensilsSelect();
  globaleSearch();
};

export default startAlgo;
