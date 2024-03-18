class PortfolioCard extends HTMLElement {
  constructor() {
    super();
    let shadowDom = this.attachShadow({ mode: "open" });
    shadowDom.innerHTML = `
      <link href="css/sanitize.css" rel="stylesheet" />
      <link href="css/assets.css" rel="stylesheet" />
      <link href="css/forms.css" rel="stylesheet" />

      <style>
          .card {
              background-color: white;
              border: solid 1px var(--color-gray-200);
              border-radius: var(--border-radius);
              overflow: hidden; /*ensures nested elements don't overflow corners*/
              padding-bottom: calc(var(--spacing-unit) * 3);
          }

          .card__image {
          }

          .card__image-img {
            height: 200px;
          }

          .card__title {
            margin: 0;
            padding: calc(var(--spacing-unit) * 5) calc(var(--spacing-unit) * 5) calc(var(--spacing-unit) * 1) calc(var(--spacing-unit) * 5);
          }

          .card__context {
            padding: calc(var(--spacing-unit) * 1) calc(var(--spacing-unit) * 5);
          }

          .card__context .content {
            width: 100%;
            display: inline-block;
            padding: 0.6em 1.2em;
            border-radius: 5em;
            border: solid 2px var(--color-gray-300);
            font-weight: 700;
            font-size: 75%;
            white-space: nowrap;
            line-height: 1;
            vertical-align: baseline;
            text-align: center;
            color: var(--color-gray-800);
          }

          .card__description {
            padding: calc(var(--spacing-unit) * 2) calc(var(--spacing-unit) * 5);
          }

          .card__techs {
            padding: calc(var(--spacing-unit) * 2) calc(var(--spacing-unit) * 5);
            display: flex;
          }

          .card__tech-icon {
            height: 1em;
            flex: 1 1 auto;
          }

          .card__actions {
            padding: calc(var(--spacing-unit) * 2) calc(var(--spacing-unit) * 5);
            display: flex;
            gap: var(--spacing-unit);
          }

          .card__actions a {
            flex: 1 1 auto;
            display: inline-block;
            padding: 0.6em 1.2em;
            border-radius: 5em;
            border: solid 2px var(--color-gray-300);
            font-weight: 700;
            font-size: 75%;
            white-space: nowrap;
            line-height: 1;
            vertical-align: baseline;
            text-align: center;
            color: var(--color-gray-800);
            text-decoration: none;
          }
      </style>
  
      <article class="card" id="article-container">
        <div class="card__content">
            <div id="image-container" class="card__image">
            </div>
            <h3 id="title-container" class="card__title">
            </h3>
            <div id="context-container" class="card__context">
              <span id="context-content" class="content"></span>
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
    const contextContainer = this.shadowRoot.getElementById("context-content");
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
    //console.debug(`PortfolioCard: url = `, url);
    if (url !== undefined && url !== null) {
      const viewSiteButton = document.createElement("standard-button");
      viewSiteButton.innerText = "Site";
      viewSiteButton.setAttribute("as", "a");
      viewSiteButton.setAttribute("href", url);
      viewSiteButton.setAttribute("iconImageUrl", "img/icons/globe.svg");
      viewSiteButton.setAttribute("compact", "true");
      actionsContainer.appendChild(viewSiteButton);
    }

    const sourceUrl = this.getAttribute("data-source-url");
    //console.debug(`PortfolioCard: sourceUrl = `, sourceUrl);
    if (sourceUrl !== undefined && sourceUrl !== null) {
      const viewCodeButton = document.createElement("standard-button");
      viewCodeButton.innerText = "Code";
      viewCodeButton.setAttribute("as", "a");
      viewCodeButton.setAttribute("href", url);
      viewCodeButton.setAttribute("iconImageUrl", "img/icons/code.svg");
      viewCodeButton.setAttribute("compact", "true");
      actionsContainer.appendChild(viewCodeButton);
    }

    if (
      (url === undefined || url === null) &&
      (sourceUrl === undefined || sourceUrl === null)
    ) {
      actionsContainer.style.display = "none";
    }
  }
}

customElements.define("portfolio-card", PortfolioCard);
