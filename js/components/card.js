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
  const ingredientsHTML = ingredients
    .map((ing) => {
      let liHTML = `<b>${ing.ingredient}</b>`;

      if (ing.quantity !== undefined || ing.unit !== undefined) {
        let quantityHTML = ing.quantity
          ? `<span class="small">${ing.quantity}</span>`
          : "";
        let unitHTML = ing.unit ? `<span class="small">${ing.unit}</span>` : "";
        liHTML += ` : ${quantityHTML}${unitHTML}`;
      }

      return `<li class="ingredient">${liHTML}</li>`;
    })
    .join("");

  return `
    <ul class="ingredients">${ingredientsHTML}</ul>
  `;
};
