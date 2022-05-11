import { default as data } from "./portfolio-cards-data.js";

class PortfolioCardsGrid extends HTMLElement {
  constructor() {
    super();
    let shadowDom = this.attachShadow({ mode: "open" });
    shadowDom.innerHTML = `
        <link href="css/sanitize.css" rel="stylesheet" />
        <link href="css/assets.css" rel="stylesheet" />
        <link href="css/forms.css" rel="stylesheet" />
        <link href="css/typography.css" rel="stylesheet" />
        <style>
          .grid {
            display: grid;
            grid-gap: 1em;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            grid-auto-rows: 20px;
          }      
        </style>
        <div id="grid" class="grid">
        </div>
      `;
  }

  connectedCallback() {
    //console.debug(data);

    const gridElement = this.shadowRoot.getElementById("grid");
    let gridComputedStyle = window.getComputedStyle(gridElement);

    let rowHeight = parseInt(
      gridComputedStyle.getPropertyValue("grid-auto-rows")
    );
    let rowGap = parseInt(gridComputedStyle.getPropertyValue("grid-row-gap"));

    data.forEach((data) => {
      const portfolioCard = document.createElement("portfolio-card");

      if (data.imageUrl !== undefined) {
        const image = document.createElement("img");
        image.slot = "image";
        image.src = data.imageUrl;
        portfolioCard.appendChild(image);
      }

      const context = document.createElement("span");
      context.slot = "context";
      context.innerText = data.context;
      portfolioCard.appendChild(context);

      const title = document.createElement("span");
      title.slot = "title";
      title.innerText = data.title;
      portfolioCard.appendChild(title);

      const description = document.createElement("span");
      description.slot = "description";
      description.innerText = data.description;
      portfolioCard.appendChild(description);

      const techIcons = document.createElement("span");
      techIcons.slot = "tech-icons";
      techIcons.innerHTML = data.tech
        .map(
          (t) =>
            `<img src="/img/tech-logos/${t}.svg" alt="${t} logo" style="width:1em;" />`
        )
        .join("");
      portfolioCard.appendChild(techIcons);

      const actions = document.createElement("span");
      actions.slot = "actions";
      actions.innerHTML =
        (data.url !== undefined ? `<a href="${data.url}">View Site</a>` : "") +
        (data.sourceUrl !== undefined
          ? `<a href="${data.sourceUrl}">View Code</a>`
          : "");
      portfolioCard.appendChild(actions);

      gridElement.appendChild(portfolioCard);
      portfolioCard.resize(rowHeight, rowGap);
    });
  }

  resize() {
    console.info(`PortfolioCardsGrid.resize`);
    let allItems = this.shadowRoot.getElementsByTagName("portfolio-card");
    for (x = 0; x < allItems.length; x++) {
      allItems[x].resize();
    }
  }
}

customElements.define("portfolio-cards-grid", PortfolioCardsGrid);
