class customTitle extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({
      mode: "open",
    });
    const title = document.createElement("h2");
    title.textContent = this.getAttribute("text");
    title.setAttribute("class", this.getAttribute("class"));
    const style = document.createElement("style");
    style.textContent = ` h2 {margin: 0;\n padding: 0;\nfont-family: "Ubuntu-Medium";\n    font-weight: 500;\n    font-size: 40px;\n    line-height: 46px;}\n @media (max-width: 767px) {h2 {font-size: 24px; line-height: 28px;}} ${
      this.getAttribute("class") === "other-tours__title"
        ? ".other-tours__title {margin-bottom: 92px;} @media (max-width: 767px) {.other-tours__title {margin-bottom: 40px;}}"
        : ""
    }`;
    shadow.appendChild(style);
    shadow.appendChild(title);
  }
}
customElements.define("custom-title", customTitle);
