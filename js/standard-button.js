class StandardButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const style = document.createElement("link");
    style.rel = "stylesheet";
    style.href = "css/standard-button.css";
    this.shadowRoot.appendChild(style);

    const as = this.getAttribute("as") ?? "button";
    const element = document.createElement(as);
    this.shadowRoot.appendChild(element);

    element.classList.add("standard-button");

    if (as === "a" && this.getAttribute("href")) {
      element.href = this.getAttribute("href");
    }

    if (as === "button" && this.getAttribute("type")) {
      element.type = this.getAttribute("type");
    }

    const iconSlot = document.createElement("slot");
    iconSlot.name = "icon";
    element.appendChild(iconSlot);

    const labelSlot = document.createElement("slot");
    labelSlot.name = "label";
    element.appendChild(labelSlot);

    if (this.getAttribute("compact")) {
      element.classList.add("compact");
    }
  }

  addEventListener(type, listener, options) {
    if (!element) return;
    element.addEventListener(type, listener, options);
  }

  removeEventListener(type, listener, options) {
    if (!element) return;
    element.removeEventListener(type, listener, options);
  }
}

customElements.define("standard-button", StandardButton);
