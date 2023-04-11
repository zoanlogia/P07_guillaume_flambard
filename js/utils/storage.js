const RECIPES_STORAGE_KEY = "les_petits_plats_recipes";

/**
 * This function retrieves data from local storage and parses it as JSON if it exists.
 * @returns The function `getLocaleStorage` returns the parsed JSON object stored in the `localStorage`
 * under the key `RECIPES_STORAGE_KEY`, or `null` if there is no such object.
 */
const getLocaleStorage = () => {
  const recipesJson = localStorage.getItem(RECIPES_STORAGE_KEY);
  if (recipesJson) {
    return JSON.parse(recipesJson);
  } else {
    return recipesJson;
  }
};

/**
 * The function sets a JSON stringified version of a given recipe object in the local storage.
 * @param recipes - The `recipes` parameter is an array of recipe objects that will be stored in the
 * browser's local storage. The function `setLocaleStorage` takes this array and converts it into a
 * JSON string using `JSON.stringify()`, and then stores it in local storage using
 * `localStorage.setItem()`.
 */
const setLocaleStorage = (recipes) => {
  localStorage.setItem(RECIPES_STORAGE_KEY, JSON.stringify(recipes));
};

export { getLocaleStorage, setLocaleStorage };
