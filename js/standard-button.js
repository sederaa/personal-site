class StandardButton extends HTMLElement {
  constructor() {
    super();
    this.element = null;
  }

  connectedCallback() {
    const label = this.textContent;
    this.innerHTML = null;
    const as = this.getAttribute("as") ?? "button";
    this.element = document.createElement(as);

    this.element.classList.add("standard-button");

    if (as === "a" && this.getAttribute("href")) {
      this.element.href = this.getAttribute("href");
    }

    if (as === "button" && this.getAttribute("type")) {
      this.element.type = this.getAttribute("type");
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

    this.appendChild(this.element);
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
