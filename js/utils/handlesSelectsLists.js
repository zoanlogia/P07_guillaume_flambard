import { drawLi } from "../components/createLists.js";
// import { handleInputSelects } from "./handleSelectsInputs.js";
import { getLocaleStorage, setLocaleStorage } from "./storage.js";
import { displayCards } from "./ui.js";
import {
  updateApplianceSelect,
  updateIngredientSelect,
  updateUstensilSelect,
} from "./updateSelect.js";

export const handleIngredientSelect = () => {
  const button = document.getElementById("selectIngredient");
  const arrow = button.querySelector(".arrow");
  const ul = document.querySelector(".ul_ingredients");

  const data = getLocaleStorage();
  const ingredients = [
    ...new Set(
      data
        .filter((recipe) => recipe.isShow)
        .flatMap((recipe) =>
          recipe.ingredients.flatMap((ing) => ing.ingredient.toLowerCase())
        )
    ),
  ];

  ingredients.map((ing) => {
    ul.append(drawLi(ing));
  });

  const lis = document.querySelectorAll(".ul_ingredients >.select__item");

  button.addEventListener("click", () => {
    ul.classList.toggle("hidden");
    arrow.classList.toggle("active");
  });

  document.addEventListener("click", (event) => {
    const isClickInsideList = ul.contains(event.target);
    const isClickInsideButton = button.contains(event.target);

    // Si le clic est en dehors de la liste déroulante et du bouton, ferme la liste déroulante
    if (!isClickInsideList && !isClickInsideButton) {
      ul.classList.add("hidden");
      arrow.classList.remove("active");
    }
  });

  button.querySelector("input").addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase();
    Array.from(lis).map((li) => {
      if (li.dataset.value.toLowerCase().includes(value.toLowerCase())) {
        li.style.display = "block";
      } else {
        li.style.display = "none";
      }
    });
  });

  Array.from(lis).map((li) => {
    li.addEventListener("click", () => {
      if (document.querySelector(".error")) {
        document.querySelector(".error").remove();
      }
      const data = getLocaleStorage();
      const ingredients = [
        ...new Set(
          data.flatMap((recipe) =>
            recipe.ingredients.flatMap((ing) => ing.ingredient.toLowerCase())
          )
        ),
      ];

      if (ingredients.includes(li.dataset.value.toLowerCase())) {
        li.style.display = "none";
        const newData = data.map((recipe) => {
          if (recipe.isShow) {
            const allIng = recipe.ingredients.map((ing) =>
              ing.ingredient.toLowerCase()
            );
            recipe.isShow = allIng.includes(li.dataset.value);
          }
          return recipe;
        });

        setLocaleStorage(newData);
        displayCards();
        // mettre a jours les 2 autres selects
        updateUstensilSelect(newData);
        updateApplianceSelect(newData);
      }
    });
  });
};

/**
 * It handles the click event on the appliance select button and the click event on the appliance
 */
export const handleUstensilsSelect = () => {
  const button = document.getElementById("selectUstensils");
  const arrow = button.querySelector(".arrow");
  const ul = document.querySelector(".ul_ustensils");

  const data = getLocaleStorage();
  const ustensils = [
    ...new Set(
      data
        .filter((recipe) => recipe.isShow)
        .flatMap((recipe) =>
          recipe.ustensils.flatMap((ust) => ust.toLowerCase())
        )
    ),
  ];

  ustensils.map((ust) => {
    ul.append(drawLi(ust));
  });

  const lis = document.querySelectorAll(".ul_ustensils >.select__item");

  button.addEventListener("click", () => {
    ul.classList.toggle("hidden");
    arrow.classList.toggle("active");
  });

  document.addEventListener("click", (event) => {
    const isClickInsideList = ul.contains(event.target);
    const isClickInsideButton = button.contains(event.target);

    // Si le clic est en dehors de la liste déroulante et du bouton, ferme la liste déroulante
    if (!isClickInsideList && !isClickInsideButton) {
      ul.classList.add("hidden");
      arrow.classList.remove("active");
    }
  });

  button.querySelector("input").addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase();
    Array.from(lis).map((li) => {
      if (li.dataset.value.toLowerCase().includes(value)) {
        li.style.display = "block";
      } else {
        li.style.display = "none";
      }
    });
  });

  Array.from(lis).map((li) => {
    li.addEventListener("click", () => {
      const data = getLocaleStorage();
      const ustensils = [
        ...new Set(
          data.map((ustensil) =>
            ustensil.ustensils.flatMap((ust) => ust.toLowerCase())
          )
        ),
      ].flat();
      if (ustensils.includes(li.dataset.value.toLowerCase())) {
        li.style.display = "none";

        const newData = data.map((recipe) => {
          if (recipe.isShow) {
            const allUstensils = recipe.ustensils.map((ustensil) =>
              ustensil.toLowerCase()
            );
            recipe.isShow = allUstensils.includes(
              li.dataset.value.toLowerCase()
            );
          }
          return recipe;
        });
        setLocaleStorage(newData);
        displayCards();
        // mettre a jours les 2 autres selects
        updateIngredientSelect(newData);
        updateApplianceSelect(newData);
      }
    });
  });
};
/**
 * It handles the click event on the appliance select button and the appliance select list items
 */

export const handleApplianceSelect = () => {
  const button = document.querySelector("#selectAppliances");
  const arrow = button.querySelector(".arrow");
  const ul = document.querySelector(".ul_appliances");

  const data = getLocaleStorage();
  const appliances = [
    ...new Set(
      data
        .filter((recipe) => recipe.isShow)
        .map((recipe) => recipe.appliance.toLowerCase())
    ),
  ];

  appliances.map((appliance) => {
    ul.append(drawLi(appliance));
  });

  const lis = document.querySelectorAll(".ul_appliances >.select__item");

  button.addEventListener("click", () => {
    ul.classList.toggle("hidden");
    arrow.classList.toggle("active");
  });

  button.querySelector("input").addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase();
    Array.from(lis).map((li) => {
      if (li.dataset.value.toLowerCase().includes(value.toLowerCase())) {
        li.style.display = "block";
      } else {
        li.style.display = "none";
      }
    });
  });

  document.addEventListener("click", (event) => {
    const isClickInsideList = ul.contains(event.target);
    const isClickInsideButton = button.contains(event.target);

    // Si le clic est en dehors de la liste déroulante et du bouton, ferme la liste déroulante
    if (!isClickInsideList && !isClickInsideButton) {
      ul.classList.add("hidden");
      arrow.classList.remove("active");
    }
  });

  Array.from(lis).map((li) => {
    li.addEventListener("click", () => {
      const data = getLocaleStorage();
      const appliances = [
        ...new Set(data.map((appliance) => appliance.appliance.toLowerCase())),
      ];

      if (appliances.includes(li.dataset.value.toLowerCase())) {
        li.style.display = "none";

        const newData = data.map((recipe) => {
          if (recipe.isShow) {
            const allAppliances = recipe.appliance.toLowerCase();
            recipe.isShow = allAppliances.includes(
              li.dataset.value.toLowerCase()
            );
          }
          return recipe;
        });
        setLocaleStorage(newData);
        displayCards();
        // mettre a jours les 2 autres selects
        updateUstensilSelect(newData);
        updateIngredientSelect(newData);
      }
    });
  });
};
