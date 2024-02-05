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
          .portfolio-card {
            width: calc(33% - ((var(--spacing-unit) * 5) * 0.66));
            margin-bottom: calc(var(--spacing-unit) * 5);
          }

          @media (max-width: 950px) {
            .portfolio-card {
              width: calc(50% - ((var(--spacing-unit) * 5) * 0.5));
            }
          }

          @media (max-width: 650px) {
            .portfolio-card {
              width: 100%;
            }
          }

          .gutter-sizer {
            width: calc(var(--spacing-unit) * 5);
          }
        </style>
        <div id="grid" class="portfolio-card-grid">
        </div>

      `;
  }

  connectedCallback() {
    //console.debug(data);

    const gridElement = this.shadowRoot.getElementById("grid");

    data.forEach((data) => {
      const portfolioCard = document.createElement("portfolio-card");
      portfolioCard.className = "portfolio-card";
      portfolioCard.setAttribute("data-context", data.context);
      if (data.imageUrl !== undefined)
        portfolioCard.setAttribute("data-image-url", data.imageUrl);
      portfolioCard.setAttribute("data-title", data.title);
      portfolioCard.setAttribute("data-description", data.description);
      portfolioCard.setAttribute("data-tech", JSON.stringify(data.tech));
      if (data.url !== undefined)
        portfolioCard.setAttribute("data-url", data.url);
      if (data.sourceUrl !== undefined)
        portfolioCard.setAttribute("data-source-url", data.sourceUrl);

      gridElement.appendChild(portfolioCard);
    });

    const gutterSizer = document.createElement("div");
    gutterSizer.className = "gutter-sizer";
    gridElement.appendChild(gutterSizer);

    var msnry = new Masonry(gridElement, {
      itemSelector: ".portfolio-card",
      columnWidth: ".portfolio-card",
      percentPosition: true,
      gutter: ".gutter-sizer",
    });
  }
}

customElements.define("portfolio-cards-grid", PortfolioCardsGrid);
