export const updateListOnInput = () => {
  const inputs = Array.from(
    document.querySelectorAll(".select input[type='search']")
  );
  inputs.map((input) => {
    input.addEventListener("input", (e) => {
      const value = e.target.value;
      const lists = Array.from(document.querySelectorAll(".select__item"));
      lists.map((list) => {
        list.dataset.value.includes(value.toLowerCase())
          ? (list.style.display = "block")
          : (list.style.display = "none");
      });
    });
  });
};
