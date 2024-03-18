class StandardButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.element = null;
  }

  connectedCallback() {
    const label = this.textContent;
    const as = this.getAttribute("as");
    this.element = document.createElement(as ?? "button");

    if (as === "a" && this.getAttribute("href")) {
      this.element.href = this.getAttribute("href");
    }

    const iconImageUrl = this.getAttribute("iconImageUrl");
    if (iconImageUrl) {
      let iconElement = document.createElement("img");
      iconElement.src = iconImageUrl;
      iconElement.className = "icon";
      this.element.appendChild(iconElement);
    }

    let labelElement = document.createElement("span");
    labelElement.innerText = label;
    this.element.appendChild(labelElement);

    if (this.getAttribute("compact")) {
      this.element.classList.add("compact");
    }

    const linkElem = document.createElement("link");
    linkElem.setAttribute("rel", "stylesheet");
    linkElem.setAttribute("href", "css/standard-button.css");

    this.shadowRoot.append(linkElem, this.element);
  }

  addEventListener(type, listener, options) {
    if (!this.element) return;
    this.element.addEventListener(type, listener, options);
  }

  removeEventListener(type, listener, options) {
    if (!this.element) return;
    this.element.removeEventListener(type, listener, options);
  }
}

customElements.define("standard-button", StandardButton);
