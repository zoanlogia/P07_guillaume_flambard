import { globaleSearch } from "./utils/globaleSearch.js";
import { handleApplianceSelect, handleIngredientSelect, handleUstensilsSelect } from "./utils/handlesSelectsLists.js";
const startAlgo = () => {
  handleIngredientSelect();
  handleApplianceSelect();
  handleUstensilsSelect();
  globaleSearch();
};


export default startAlgo;
