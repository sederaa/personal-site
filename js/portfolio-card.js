class PortfolioCard extends HTMLElement {
  constructor() {
    super();
    let shadowDom = this.attachShadow({ mode: "open" });
    shadowDom.innerHTML = `
      <link href="css/sanitize.css" rel="stylesheet" />
      <link href="css/assets.css" rel="stylesheet" />
      <link href="css/forms.css" rel="stylesheet" />
      <link href="css/typography.css" rel="stylesheet" />

      <style>
          .card {
              background-color: white;
              padding: var(--page-padding-y);
              border: solid 1px grey;
              border-radius: 3px;
          }

          .card__image {
          }

          .card__image-img {
            height: 200px;
          }

          .card__context {
              text-transform: uppercase;
              color: grey;
              font-size: smaller;
          }

          .card__title {
              font-size: larger;
              margin-bottom: var(--page-padding-y);
          }

          .card__description {
          }

          .card__tech-icon {
            width: 1em;
          }

          .card__actions a {
              display: inline-block;
              background-color: grey;
              border-radius: 3px;
              padding: var(--spacing-multiple-y) var(--spacing-multiple-x);
              color: white;
              text-decoration: none;
          }
      </style>
  
      <article class="card" id="article-container">
        <div class="card__content">
            <div id="image-container" class="card__image">
            </div>
            <div id="context-container" class="card__context">
            </div>
            <div id="title-container" class="card__title">
            </div>
            <div id="description-container" class="card__description">
            </div>
            <div id="tech-container" class="card__techs">
            </div>
            <div id="actions-container" class="card__actions">
            </div>
        </div>
      </article>
    `;
  }

  connectedCallback() {
    const imageUrl = this.getAttribute("data-image-url");
    if (imageUrl !== undefined && imageUrl !== null) {
      const imageContainer = this.shadowRoot.getElementById("image-container");
      const image = document.createElement("img");
      image.src = imageUrl;
      image.classList.add("card__image-img");
      imageContainer.appendChild(image);
    }

    const context = this.getAttribute("data-context");
    const contextContainer =
      this.shadowRoot.getElementById("context-container");
    contextContainer.innerText = context;

    const title = this.getAttribute("data-title");
    const titleContainer = this.shadowRoot.getElementById("title-container");
    titleContainer.innerText = title;

    const description = this.getAttribute("data-description");
    const descriptionContainer = this.shadowRoot.getElementById(
      "description-container"
    );
    descriptionContainer.innerText = description;

    const tech = JSON.parse(this.getAttribute("data-tech"));
    const techContainer = this.shadowRoot.getElementById("tech-container");
    techContainer.innerHTML = tech
      .map(
        (t) =>
          `<img src="/img/tech-logos/${t}.svg" alt="${t} logo" class="card__tech-icon" />`
      )
      .join("");

    const actionsContainer =
      this.shadowRoot.getElementById("actions-container");
    const url = this.getAttribute("data-url");
    console.debug(`PortfolioCard: url = `, url);
    if (url !== undefined && url !== null) {
      const a = document.createElement("a");
      a.href = url;
      a.innerText = "View Site";
      actionsContainer.appendChild(a);
    }

    const sourceUrl = this.getAttribute("data-source-url");
    console.debug(`PortfolioCard: sourceUrl = `, sourceUrl);
    if (sourceUrl !== undefined && sourceUrl !== null) {
      const a = document.createElement("a");
      a.href = sourceUrl;
      a.innerText = "View Code";
      actionsContainer.appendChild(a);
    }
  }
}

customElements.define("portfolio-card", PortfolioCard);
