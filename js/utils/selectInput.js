/**
 * This function updates a list of items based on user input in a search bar.
 */
export const updateListOnInput = () => {
  const inputs = Array.from(
    document.querySelectorAll(".select input[type='search']")
  );

  for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("input", (e) => {
      const value = e.target.value;
      const lists = Array.from(document.querySelectorAll(".select__item"));

      for (let j = 0; j < lists.length; j++) {
        const list = lists[j];

        if (list.dataset.value.includes(value.toLowerCase())) {
          list.style.display = "block";
        } else {
          list.style.display = "none";
        }
      }
    });
  }
};
