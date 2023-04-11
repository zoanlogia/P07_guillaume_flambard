/**
 * The function returns a card HTML element for a recipe if it is set to be shown.
 * @param recipe - The `recipe` parameter is an object that contains information about a recipe,
 * including its title, image, ingredients, and instructions. The `isShow` property is a boolean value
 * that determines whether or not the recipe should be displayed on the page.
 * @returns If `recipe.isShow` is true, a card HTML element with the heading, body, and row sections
 * will be returned. If `recipe.isShow` is false, an empty string will be returned.
 */
export const card = (recipe) => {
  if (recipe.isShow) {
    return `
      <div class="card">
        ${headingCard()}
        ${bodyCard(recipe)}
        ${row(recipe)}
      </div>
    `;
  } else {
    return "";
  }
};

const headingCard = () => {
  return `
    <div class="img"></div>
  `;
};

const bodyCard = (recipe) => {
  return `
    <div class="row">
      ${colCardName(recipe)}
      ${colCardTime(recipe)}
    </div>
  `;
};

const colCardName = (recipe) => {
  return `
    <div class="col">${recipe.name}</div>
  `;
};

const colCardTime = (recipe) => {
  return `
    <div class="col icon">
      <img class="clock" src="../../assets/img/clock.svg" alt="clock" />
      <p class="time">${recipe.time}</p>
    </div>
  `;
};

const row = (recipe) => {
  return `
    <div class="row_ingredients">
      ${colIngredients(recipe)}
      ${colDesc(recipe)}
    </div>
  `;
};

const colDesc = (recipe) => {
  return `
    <p class="desc">
      <span class="small">${recipe.description}</span>
    </p>
  `;
};

const colIngredients = (recipe) => {
  const ingredients = recipe.ingredients.filter((ing) => ing.ingredient);
  let ingredientsHTML = "";

  for (let i = 0; i < ingredients.length; i++) {
    let liHTML = `<b>${ingredients[i].ingredient}</b>`;

    if (
      ingredients[i].quantity !== undefined ||
      ingredients[i].unit !== undefined
    ) {
      let quantityHTML = ingredients[i].quantity
        ? `<span class="small">${ingredients[i].quantity}</span>`
        : "";
      let unitHTML = ingredients[i].unit
        ? `<span class="small">${ingredients[i].unit}</span>`
        : "";
      liHTML += ` : ${quantityHTML}${unitHTML}`;
    }

    ingredientsHTML += `<li class="ingredient">${liHTML}</li>`;
  }

  return `
    <ul class="ingredients">${ingredientsHTML}</ul>
  `;
};
