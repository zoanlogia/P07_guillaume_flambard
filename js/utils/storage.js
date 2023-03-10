// /**
//  * 
//  * @returns {Array} recipes
//  * @returns {null} if there is no recipes in the local storage
//  */
// const RECIPES_STORAGE_KEY = "les_petits_plats_recipes";

// const getLocaleStorage = () => {
//   const recipesJson = localStorage.getItem(RECIPES_STORAGE_KEY);
//   if (recipesJson) {
//     return JSON.parse(recipesJson);
//   } else {
//     return recipesJson;
//   }
// };

// const setLocaleStorage = (recipes) => {
//   localStorage.setItem(RECIPES_STORAGE_KEY, JSON.stringify(recipes));
// };

// export { getLocaleStorage, setLocaleStorage };
/**
 * 
 * @param {boolean} rollback - optional, if true will rollback to previous state of local storage
 * @returns {Array} recipes
 * @returns {null} if there is no recipes in the local storage
 */
const RECIPES_STORAGE_KEY = "les_petits_plats_recipes";

const getLocaleStorage = (rollback = false) => {
  if (rollback) {
    const prevStateJson = localStorage.getItem(`${RECIPES_STORAGE_KEY}_prevState`);
    if (prevStateJson) {
      return JSON.parse(prevStateJson);
    }
  }

  const recipesJson = localStorage.getItem(RECIPES_STORAGE_KEY);
  if (recipesJson) {
    return JSON.parse(recipesJson);
  } else {
    return recipesJson;
  }
};

const setLocaleStorage = (recipes) => {
  localStorage.setItem(`${RECIPES_STORAGE_KEY}_prevState`, JSON.stringify(getLocaleStorage())); // backup previous state
  localStorage.setItem(RECIPES_STORAGE_KEY, JSON.stringify(recipes));
};

export { getLocaleStorage, setLocaleStorage };
