const inputs = document.querySelectorAll(".js-input-req");
const EMAIL_REGEXP =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

for (let input of inputs) {
  const inputType = input.dataset.type;
  const wrapper = input.closest(".modal__input-wrapper");
  input.addEventListener("blur", () => {
    if (!input.value.trim().length) {
      input.value = input.value.trim();
      addError(wrapper);
      return;
    }
    if (input.value.trim().length && inputType === "name") {
      removeError(wrapper);
      return;
    }

    if (
      input.value.trim().length &&
      inputType === "email" &&
      EMAIL_REGEXP.test(input.value) === false
    ) {
      addError(wrapper);
      return;
    }

    if (
      input.value.trim().length &&
      inputType === "email" &&
      EMAIL_REGEXP.test(input.value) === true
    ) {
      removeError(wrapper);
      return;
    }

    if (
      input.value.trim().length &&
      inputType === "phone" &&
      input.value.length < 17
    ) {
      addError(wrapper);
      return;
    }

    if (
      input.value.trim().length &&
      inputType === "phone" &&
      input.value.length === 17
    ) {
      removeError(wrapper);
      return;
    }
  });
}

function addError(block) {
  block.classList.add("modal__input-wrapper_error");
  block.classList.remove("modal__input-wrapper_success");
}

function removeError(block) {
  block.classList.remove("modal__input-wrapper_error");
  block.classList.add("modal__input-wrapper_success");
}

[].forEach.call(document.querySelectorAll(".js-phone"), function (input) {
  let keyCode;
  function mask(event) {
    event.keyCode && (keyCode = event.keyCode);
    let pos = this.selectionStart;
    if (pos < 3) event.preventDefault();
    let matrix = "+7 (___)-___-____",
      i = 0,
      def = matrix.replace(/\D/g, ""),
      val = this.value.replace(/\D/g, ""),
      new_value = matrix.replace(/[_\d]/g, function (a) {
        return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
      });
    i = new_value.indexOf("_");
    if (i != -1) {
      i < 5 && (i = 3);
      new_value = new_value.slice(0, i);
    }
    let reg = matrix
      .substr(0, this.value.length)
      .replace(/_+/g, function (a) {
        return "\\d{1," + a.length + "}";
      })
      .replace(/[+()]/g, "\\$&");
    reg = new RegExp("^" + reg + "$");
    if (
      !reg.test(this.value) ||
      this.value.length < 5 ||
      (keyCode > 47 && keyCode < 58)
    )
      this.value = new_value;
    if (event.type == "blur" && this.value.length < 5) this.value = "";
  }

  input.addEventListener("input", mask);
  input.addEventListener("focus", mask);
  input.addEventListener("blur", mask);
  input.addEventListener("keydown", mask);
});
