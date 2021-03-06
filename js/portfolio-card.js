class PortfolioCard extends HTMLElement {
  constructor() {
    super();
    let shadowDom = this.attachShadow({ mode: "open" });
    shadowDom.innerHTML = `
        <template id="portfolio-card-template">
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
        
            <article class="card" id="article-container">
              <div class="card__content">
                  <div class="card__image" style="height: 200px;">
                      <slot name="image"><slot>
                  </div>
                  <div class="card__context">
                      <slot name="context"></slot>
                  </div>
                  <div class="card__title">
                      <slot name="title"></slot>
                  </div>
                  <div class="card_description">
                      <slot name="description"></slot>
                  </div>
                  <div class="card__techs">
                      <slot name="tech-icons"></slot>
                  </div>
                  <div class="card__actions">
                      <slot name="actions"></slot>
                  </div>
              </div>
            </article>
        </template>
    `;
  }

  connectedCallback() {
    const template = this.shadowRoot.getElementById("portfolio-card-template");
    //console.debug(`PortfolioCard.connectedCallback: template = `, template);
    const node = document.importNode(template.content, true);
    this.shadowRoot.appendChild(node);
  }

  resize(rowHeight, rowGap) {
    //console.debug(`PortfolioCard.resize()`);
    let item = this.shadowRoot.getElementById("article-container");
    let itemComputedStyle = window.getComputedStyle(item);
    let itemYPadding =
      parseFloat(itemComputedStyle.getPropertyValue("padding-top")) +
      parseFloat(itemComputedStyle.getPropertyValue("padding-bottom"));
    let cardContentHeight = item
      .querySelector(".card__content")
      .getBoundingClientRect().height;

    let rowSpan = Math.ceil(
      (cardContentHeight + rowGap + itemYPadding) / (rowHeight + rowGap)
    );
    // let rowSpanRaw =
    //   (cardContentHeight + rowGap + itemYPadding) / (rowHeight + rowGap);
    // console.debug(
    //   `portfolio-card: resize: cardContentHeight = ${cardContentHeight}, rowGap = ${rowGap}, itemYPadding = ${itemYPadding}, rowHeight = ${rowHeight}, rowGap = ${rowGap}, rowSpanRaw = ${rowSpanRaw}, rowSpan = ${rowSpan}`
    // );
    this.style.gridRowEnd = "span " + rowSpan;
  }
}

customElements.define("portfolio-card", PortfolioCard);
