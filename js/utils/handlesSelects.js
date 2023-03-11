import { createTagsAppliances, createTagsIngredients, createTagsUstensils } from "../components/tag.js";
// import { handleIngredientsTag } from "./handleTags.js";
// import { handleTags } from "./handleTags.js";
import { getLocaleStorage, setLocaleStorage } from "./storage.js";
import { displayCards } from "./ui.js";


// This module exports three functions: handleIngredientSelect(), handleUstensilsSelect(), and handleApplianceSelect(). These functions handle the click event on the corresponding select button and the click event on the list items.

// handleIngredientSelect() handles the click event on the ingredient select button and the click event on the ingredient list items. When a user clicks on an item, it checks if the ingredient is present in any of the recipes. If it is present, it creates a tag for the ingredient and filters the recipes to show only those that have the selected ingredient. The filtered recipes are then displayed.

// handleUstensilsSelect() handles the click event on the ustensil select button and the click event on the ustensil list items. When a user clicks on an item, it checks if the ustensil is present in any of the recipes. If it is present, it creates a tag for the ustensil and filters the recipes to show only those that have the selected ustensil. The filtered recipes are then displayed.

// handleApplianceSelect() handles the click event on the appliance select button and the click event on the appliance list items. When a user clicks on an item, it checks if the appliance is present in any of the recipes. If it is present, it creates a tag for the appliance and filters the recipes to show only those that have the selected appliance. The filtered recipes are then displayed.

// All three functions call the getLocaleStorage() function from the storage.js module to get the recipes data, and setLocaleStorage() to update the filtered data in the local storage. They also call the displayCards() function from the ui.js module to display the filtered recipes.

// The createTagsIngredients(), createTagsUstensils(), and createTagsAppliances() functions are imported from the handleTags.js module to create tags for the selected items.

/**
 * It handles the click event on the ingredient select button and the click event on the ingredient
 * list items
 */
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
        li.style.display = "none";
      }
    })
  })

  lis.forEach((li) => {
    li.addEventListener("click", () => {
      if(document.querySelector(".error")) {
        document.querySelector(".error").remove();
      }
      const data = getLocaleStorage();
      const ingredients = [...new Set(data.map((ingredient) => ingredient.ingredients.flatMap((ing) => ing.ingredient.toLowerCase())))].flat();

      if (ingredients.includes(li.dataset.value.toLowerCase())) {
        li.style.display = "none";

        const newData = data.map((recipe) => {
          if (recipe.isShow) {
            const allIng = recipe.ingredients.map((ing) => ing.ingredient.toLowerCase())
            recipe.isShow = allIng.includes(li.dataset.value.toLowerCase())
          }
          return recipe
        });

        setLocaleStorage(newData);
      }

      displayCards();
      createTagsIngredients(li.dataset.value)
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
        li.style.display = "none";
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
        li.style.display = "none";      
        
        const newData = data.map((recipe) => {
          if (recipe.isShow) {
            const allUstensils = recipe.ustensils.map((ustensil) => ustensil.toLowerCase())
            recipe.isShow = allUstensils.includes(li.dataset.value.toLowerCase())
          }
          return recipe
        })
        setLocaleStorage(newData);
      }
      displayCards();
      createTagsUstensils(li.dataset.value)
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
        li.style.display = "none";
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
        li.style.display = "none";

        const newData = data.map((recipe) => {
          if (recipe.isShow) {
           const allAppliances = recipe.appliance.toLowerCase()
            recipe.isShow = allAppliances.includes(li.dataset.value.toLowerCase())
          }
          return recipe
        })
        setLocaleStorage(newData);
      }
      displayCards();
      createTagsAppliances(li.dataset.value)
    });
  });
};
