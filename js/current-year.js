class CurrentYear extends HTMLElement {
  connectedCallback() {
    let yearSpan = document.createElement("span");
    yearSpan.innerText = new Date().getFullYear();
    this.appendChild(yearSpan);
  }
}

customElements.define("current-year", CurrentYear);
