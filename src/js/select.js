const selectMenu = document.querySelectorAll(".main-select-menu");

for (let selectMenuItem of selectMenu) {
  const select = selectMenuItem.querySelector(".main-select");
  const optionsList = selectMenuItem.querySelector(".main-select__list");
  const options = optionsList.querySelectorAll(".main-select__list-item");
  const choice = select.querySelector(".main-select__choice");

  select.addEventListener("click", (e) => {
    selectMenuItem.classList.toggle("active");
    select.classList.toggle("main-select_active");
  });

  options.forEach((option) => {
    option.addEventListener("click", () => {
      options.forEach((option) => {
        option.classList.remove("selected");
      });
      choice.innerHTML = option.innerHTML;
      option.classList.add("selected");
      selectMenuItem.classList.remove("active");
      select.classList.remove("main-select_active");
      select.classList.add("main-select_done");
    });
  });
}
