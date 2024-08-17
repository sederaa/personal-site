class PortfolioCard extends HTMLElement {
  constructor() {
    super();
    let shadowDom = this.attachShadow({ mode: "open" });
    shadowDom.innerHTML = `
      <link href="css/sanitize.css" rel="stylesheet" />
      <link href="css/assets.css" rel="stylesheet" />
      <link href="css/forms.css" rel="stylesheet" />
      <link href="css/standard-button.css" rel="stylesheet" />

      <style>
          .card {
              background-color: var(--color-bg-tertiary);
              border: solid 1px var(--color-line-secondary);
              border-radius: var(--border-radius);
              overflow: hidden; /*ensures nested elements don't overflow corners*/
              padding-bottom: calc(var(--spacing-unit) * 3);
          }

          .card__image {
            background-size: cover;
            background-position: center;
            height: 200px;
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
            font-size: 75%;
            text-transform: uppercase;
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

      </style>
  
      <article class="card" id="article-container">
        <div class="card__content">
            <div id="image-container" class="card__image">
            </div>
            <h3 id="title-container" class="card__title">
            </h3>
            <div id="context-container" class="card__context">
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
      imageContainer.style.backgroundImage = `url(${imageUrl})`;
    }

    const context = this.getAttribute("data-context");
    const contextContainer = this.shadowRoot.getElementById("context-container");
    contextContainer.innerText = context;

    const title = this.getAttribute("data-title");
    const titleContainer = this.shadowRoot.getElementById("title-container");
    titleContainer.innerText = title;

    const description = this.getAttribute("data-description");
    const descriptionContainer = this.shadowRoot.getElementById("description-container");
    descriptionContainer.innerText = description;

    const tech = JSON.parse(this.getAttribute("data-tech"));
    const techContainer = this.shadowRoot.getElementById("tech-container");
    techContainer.innerHTML = tech.map((t) => `<img src="/img/tech-logos/${t}.svg" alt="${t} logo" class="card__tech-icon" />`).join("");

    const actionsContainer = this.shadowRoot.getElementById("actions-container");
    const url = this.getAttribute("data-url");
    //console.debug(`PortfolioCard: url = `, url);
    if (url !== undefined && url !== null) {
      const viewSiteButton = document.createElement("standard-button");
      //viewSiteButton.innerText = "Site";
      viewSiteButton.setAttribute("as", "a");
      viewSiteButton.setAttribute("href", url);
      //viewSiteButton.setAttribute("iconImageUrl", "img/icons/globe.svg");
      viewSiteButton.setAttribute("compact", "true");

      const viewSiteLabel = document.createElement("span");
      viewSiteLabel.slot = "label";
      viewSiteLabel.innerText = "Site";
      viewSiteButton.appendChild(viewSiteLabel);

      viewSiteButton.insertAdjacentHTML(
        "beforeend",
        '<!--globe--><svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="width: 1.1em;height: 1.1em"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"/></svg>'
      );

      actionsContainer.appendChild(viewSiteButton);
    }

    const sourceUrl = this.getAttribute("data-source-url");
    //console.debug(`PortfolioCard: sourceUrl = `, sourceUrl);
    if (sourceUrl !== undefined && sourceUrl !== null) {
      const viewCodeButton = document.createElement("standard-button");
      viewCodeButton.setAttribute("as", "a");
      viewCodeButton.setAttribute("href", url);
      viewCodeButton.setAttribute("compact", "true");

      const viewCodeLabel = document.createElement("span");
      viewCodeLabel.slot = "label";
      viewCodeLabel.innerText = "Code";
      viewCodeButton.appendChild(viewCodeLabel);

      viewCodeButton.insertAdjacentHTML(
        "beforeend",
        '<!--code--><svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" style="width: 1.1em; height: 1.1em"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"/></svg>'
      );

      actionsContainer.appendChild(viewCodeButton);
    }

    if ((url === undefined || url === null) && (sourceUrl === undefined || sourceUrl === null)) {
      actionsContainer.style.display = "none";
    }
  }
}

customElements.define("portfolio-card", PortfolioCard);
