const RECIPES_STORAGE_KEY = "les_petits_plats_recipes";

const getLocaleStorage = () => {
  const recipesJson = localStorage.getItem(RECIPES_STORAGE_KEY);
  if (recipesJson) {
    return JSON.parse(recipesJson);
  } else {
    return recipesJson;
  }
};

const setLocaleStorage = (recipes) => {
  localStorage.setItem(RECIPES_STORAGE_KEY, JSON.stringify(recipes));
};

export { getLocaleStorage, setLocaleStorage };
