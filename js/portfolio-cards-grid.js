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
    const gridElement = this.shadowRoot.getElementById("grid");

    for (let i = 0; i < 5; i++) {
      const portfolioCard = document.createElement("portfolio-card");

      const context = document.createElement("span");
      context.slot = "context";
      context.innerText = "Context" + i.toString();
      portfolioCard.appendChild(context);

      const title = document.createElement("span");
      title.slot = "title";
      title.innerText = "Card" + i.toString();
      portfolioCard.appendChild(title);

      const description = document.createElement("span");
      description.slot = "description";
      let descriptionText = "Description ";
      for (let j = 0; j < Math.random() * 100; j++) {
        descriptionText += " text";
      }
      description.innerText = descriptionText;
      portfolioCard.appendChild(description);

      const techIcons = document.createElement("span");
      techIcons.slot = "tech-icons";
      techIcons.innerHTML =
        '<img src="/img/tech-logos/docker.svg" alt="Docker logo" style="width:1em;" /><img src="/img/tech-logos/rabbitmq.svg" alt="RabbitMQ logo" style="width:1em;" /><img src="/img/tech-logos/teamcity.svg" alt="TeamCity logo" style="width:1em;" />';
      portfolioCard.appendChild(techIcons);

      const actions = document.createElement("span");
      actions.slot = "actions";
      actions.innerHTML = '<a href="#">View Site</a><a href="#">View Code</a>';
      portfolioCard.appendChild(actions);

      gridElement.appendChild(portfolioCard);
      portfolioCard.resize();
    }
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
