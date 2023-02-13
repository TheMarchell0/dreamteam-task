const clickButtons = document.querySelectorAll(".js-modal-button");
const modal = document.querySelector("#js-modal");
const modalContent = modal.querySelector(".modal__inner");
const modalContentHeight = modalContent.offsetHeight;
const modalButtons = modal.querySelectorAll("button");
const modalCloseButton = modal.querySelector(".js-modal-close");
const scrollWidth = window.innerWidth - document.body.scrollWidth;
const modalInputs = modal.querySelectorAll(".js-input-req");

if (modalContentHeight > innerHeight) {
  modalContent.classList.add("modal_big");
}

for (let clickButton of clickButtons) {
  clickButton.addEventListener("click", () => {
    modal.classList.add("modal_active");
    document.body.classList.add("blocked");
    document.body.style.paddingRight = `${scrollWidth}px`;
  });
}

for (let modalButton of modalButtons) {
  modalButton.addEventListener("click", (e) => {
    e.preventDefault();
  });
}

modal.addEventListener("click", () => {
  closeModal();
});

modalContent.addEventListener("click", (e) => {
  e.stopPropagation();
});

modalCloseButton.addEventListener("click", () => {
  closeModal();
});

document.addEventListener("keyup", function (e) {
  if (e.keyCode == 27 && modal.classList.contains("modal_active")) {
    closeModal();
  }
});

function closeModal() {
  modal.classList.remove("modal_active");
  document.body.classList.remove("blocked");
  document.body.style.paddingRight = "";

  for (let modalInput of modalInputs) {
    const wrapper = modalInput.closest(".modal__input-wrapper");
    const wrapperIsUse =
      wrapper.classList.contains("modal__input-wrapper_success") ||
      wrapper.classList.contains("modal__input-wrapper_error");

    if (wrapperIsUse) {
      wrapper.classList.remove("modal__input-wrapper_success");
      wrapper.classList.remove("modal__input-wrapper_error");
    }
    modalInput.value = "";
  }
}
