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
    return ""
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
