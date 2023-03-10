import { globaleSearch } from "./utils/globaleSearch.js";
import { handleApplianceSelect, handleIngredientSelect, handleUstensilsSelect } from "./utils/handlesSelects.js";


const startAlgo = () => {
  globaleSearch()
  handleIngredientSelect();
  handleUstensilsSelect();
  handleApplianceSelect()
};

export default startAlgo;
