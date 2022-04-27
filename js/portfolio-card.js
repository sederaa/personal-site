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

            .card__actions a {
                display: inline-block;
                background-color: grey;
                border-radius: 3px;
                padding: var(--spacing-multiple-y) var(--spacing-multiple-x);
                color: white;
                text-decoration: none;
            }
        </style>
      
        <article class="card" id="article">
        <div class="card__content">
            <div class="card__context">Side Project</div>
            <div class="card__title">Web Component</div>
            <div class="card_description">card 1 text text text  text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text</div>
            <div class="card__techs">
                <img src="/img/tech-logos/docker.svg" alt="Docker logo" style="width:1em;" />
                <img src="/img/tech-logos/rabbitmq.svg" alt="RabbitMQ logo" style="width:1em;" />
                <img src="/img/tech-logos/teamcity.svg" alt="TeamCity logo" style="width:1em;" />
            </div>
            <div class="card__actions">
                <a href="#">View Site</a>
                <a href="#">View Code</a>
            </div>
        </div>
        </article>
        `;
  }

  resize() {
    console.debug(`PortfolioCard.resize()`);
    let item = this.shadowRoot.getElementById("article");
    let itemComputedStyle = window.getComputedStyle(item);
    let itemYPadding =
      parseFloat(itemComputedStyle.getPropertyValue("padding-top")) +
      parseFloat(itemComputedStyle.getPropertyValue("padding-bottom"));
    // TODO: pass in grid-auto-rows and grid-row-gap as props into component
    let grid = document.getElementsByClassName("grid")[0];
    let gridComputedStyle = window.getComputedStyle(grid);

    let rowHeight = parseInt(
      gridComputedStyle.getPropertyValue("grid-auto-rows")
    );
    let rowGap = parseInt(gridComputedStyle.getPropertyValue("grid-row-gap"));
    let cardContentHeight = item
      .querySelector(".card__content")
      .getBoundingClientRect().height;

    // console.debug(
    //   `cardContentHeight = ${cardContentHeight}, rowGap = ${rowGap}, itemYPadding = ${itemYPadding}, rowHeight = ${rowHeight}.`
    // );

    let rowSpan = Math.ceil(
      (cardContentHeight + rowGap + itemYPadding) / (rowHeight + rowGap)
    );
    this.style.gridRowEnd = "span " + rowSpan;
  }
}

customElements.define("portfolio-card", PortfolioCard);
