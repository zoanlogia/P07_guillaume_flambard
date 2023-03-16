import { createTagsAppliances, createTagsIngredients, createTagsUstensils } from "../components/tag.js";
import { getLocaleStorage, setLocaleStorage } from "./storage.js";
import { displayCards } from "./ui.js";

// CREATE SELECT LI
export const drawLi = (value) => {
  const li = document.createElement("li");
  li.classList.add("select__item");
  li.dataset.value = value;
  li.textContent = value;

  li.onclick = (e) => {
    const type = e.target.parentElement.parentNode.classList[1].split('_')[1];
    switch (type) {
      case 'ingredient':
        createTagsIngredients(e.target.dataset.value);

        break;
      case 'ustensils':
        createTagsUstensils(e.target.dataset.value);
        break
      default:
        createTagsAppliances(e.target.dataset.value)
        break;
    }

  }

  return li;
}

// UPDATE SELECTS
const updateUstensilSelect = (data) => {
  const list = document.querySelector(".select_ustensils .select__list");
  list.innerHTML = '';

  const ustensils = [...new Set(data.filter(recipe => recipe.isShow).flatMap(recipe => recipe.ustensils.flatMap(ust => ust.toLowerCase())))];

  ustensils.forEach(ust => {
    list.append(drawLi(ust))
  })
}

const updateApplianceSelect = (data) => {
  const list = document.querySelector(".select_appliance .select__list");
  list.innerHTML = '';

  const appliances = [...new Set(data.filter(recipe => recipe.isShow).map(recipe => recipe.appliance.toLowerCase()))];
  appliances.forEach(app => {
    list.append(drawLi(app))
  })
}

const updateIngredientSelect = (data) => {
  const list = document.querySelector(".select_ingredient .select__list");
  list.innerHTML = '';

  const ingredients = [...new Set(data.filter(recipe => recipe.isShow).flatMap(recipe => recipe.ingredients.flatMap(ing => ing.ingredient.toLowerCase())))];
  ingredients.forEach(ing => {
    list.append(drawLi(ing))
  })
}


export const handleIngredientSelect = () => {
  const button = document.querySelector(".select_ingredient .button");
  const arrow = button.querySelector("span");
  const list = document.querySelector(".select_ingredient .select__list");
  const lis = document.querySelectorAll(".select_ingredient .select__item");

  button.addEventListener("click", () => {
    list.classList.toggle("hidden");
    arrow.classList.toggle("active");
  });

  document.addEventListener("click", (event) => {
    const isClickInsideList = list.contains(event.target);
    const isClickInsideButton = button.contains(event.target);

    // Si le clic est en dehors de la liste déroulante et du bouton, ferme la liste déroulante
    if (!isClickInsideList && !isClickInsideButton) {
      list.classList.add("hidden");
      arrow.classList.remove("active");
    }
  });

  button.querySelector("input").addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase();
    lis.forEach((li) => {
      if (li.dataset.value.toLowerCase().includes(value)) {
        li.style.display = "block";
      } else {
        li.remove()
      }
    })
  })

  lis.forEach((li) => {
    li.addEventListener("click", () => {
      if (document.querySelector(".error")) {
        document.querySelector(".error").remove();
      }
      const data = getLocaleStorage();
      const ingredients = [...new Set(data.map((ingredient) => ingredient.ingredients.flatMap((ing) => ing.ingredient.toLowerCase())))].flat();

      if (ingredients.includes(li.dataset.value.toLowerCase())) {
        li.remove()
        const newData = data.map((recipe) => {
          if (recipe.isShow) {
            const allIng = recipe.ingredients.map((ing) => ing.ingredient.toLowerCase())
            recipe.isShow = allIng.includes(li.dataset.value.toLowerCase())
          }
          return recipe
        });

        setLocaleStorage(newData);
        displayCards();
        createTagsIngredients(li.dataset.value)
        // mettre a jours les 2 autres selects
        updateUstensilSelect(newData)
        updateApplianceSelect(newData)
      }
    });
  });
};




/**
 * It handles the click event on the appliance select button and the click event on the appliance
 */
export const handleUstensilsSelect = () => {
  const button = document.querySelector(".select_ustensils .button");
  const arrow = button.querySelector("span");
  const list = document.querySelector(".select_ustensils .select__list");
  const lis = document.querySelectorAll(".select_ustensils .select__item");

  button.addEventListener("click", () => {
    list.classList.toggle("hidden");
    arrow.classList.toggle("active");
  });

  button.querySelector("input").addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase();
    lis.forEach((li) => {
      if (li.dataset.value.toLowerCase().includes(value)) {
        li.style.display = "block";
      } else {
        li.remove()
      }
    })
  })

  document.addEventListener("click", (event) => {
    const isClickInsideList = list.contains(event.target);
    const isClickInsideButton = button.contains(event.target);

    // Si le clic est en dehors de la liste déroulante et du bouton, ferme la liste déroulante
    if (!isClickInsideList && !isClickInsideButton) {
      list.classList.add("hidden");
      arrow.classList.remove("active");
    }
  });

  lis.forEach((li) => {
    li.addEventListener("click", () => {

      const data = getLocaleStorage();
      const ustensils = [...new Set(data.map((ustensil) => ustensil.ustensils.flatMap(ust => ust.toLowerCase())))].flat();
      if (ustensils.includes(li.dataset.value.toLowerCase())) {
        li.remove()

        const newData = data.map((recipe) => {
          if (recipe.isShow) {
            const allUstensils = recipe.ustensils.map((ustensil) => ustensil.toLowerCase())
            recipe.isShow = allUstensils.includes(li.dataset.value.toLowerCase())
          }
          return recipe
        })
        setLocaleStorage(newData);
        displayCards();
        createTagsUstensils(li.dataset.value)
        // mettre a jours les 2 autres selects
        updateIngredientSelect(newData)
        updateApplianceSelect(newData)
      }
    });
  })
};
/**
 * It handles the click event on the appliance select button and the appliance select list items
 */

export const handleApplianceSelect = () => {
  const button = document.querySelector(".select_appliance .button");
  const arrow = button.querySelector("span");
  const list = document.querySelector(".select_appliance .select__list");
  const lis = document.querySelectorAll(".select_appliance .select__item");

  button.addEventListener("click", () => {
    list.classList.toggle("hidden");
    arrow.classList.toggle("active");
  });

  button.querySelector("input").addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase();
    lis.forEach((li) => {
      if (li.dataset.value.toLowerCase().includes(value)) {
        li.style.display = "block";
      } else {
        li.remove()
      }
    })
  })

  document.addEventListener("click", (event) => {
    const isClickInsideList = list.contains(event.target);
    const isClickInsideButton = button.contains(event.target);

    // Si le clic est en dehors de la liste déroulante et du bouton, ferme la liste déroulante
    if (!isClickInsideList && !isClickInsideButton) {
      list.classList.add("hidden");
      arrow.classList.remove("active");
    }
  });

  lis.forEach((li) => {
    li.addEventListener("click", () => {
      const data = getLocaleStorage();
      const appliances = [...new Set(data.map((appliance) => appliance.appliance.toLowerCase()))]

      if (appliances.includes(li.dataset.value.toLowerCase())) {
        li.remove()

        const newData = data.map((recipe) => {
          if (recipe.isShow) {
            const allAppliances = recipe.appliance.toLowerCase()
            recipe.isShow = allAppliances.includes(li.dataset.value.toLowerCase())
          }
          return recipe
        })
        setLocaleStorage(newData);
        displayCards();
        createTagsAppliances(li.dataset.value)
        // mettre a jours les 2 autres selects
        updateUstensilSelect(newData)
        updateIngredientSelect(newData)
      }
    });
  });
};