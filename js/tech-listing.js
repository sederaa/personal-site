class TechListing extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
        <div>
          <div class="subsection">
            <h3>Proficient</h3>
            <ul>
              <li>
                <img
                  src="/img/tech-logos/html5.svg"
                  alt="HTML5 logo"
                  class="section__tech-logo"
                />HTML
              </li>
              <li>
                <img
                  src="/img/tech-logos/dotnetcore.svg"
                  alt=".NET Core logo"
                  class="section__tech-logo"
                />
                ASP.NET Core
              </li>
              <li>
                <img
                  src="/img/tech-logos/csharp.svg"
                  alt="C# logo"
                  class="section__tech-logo"
                />
                C#
              </li>
              <li>
                <img
                  src="/img/tech-logos/javascript.svg"
                  alt="JavaScript logo"
                  class="section__tech-logo"
                />
                JavaScript
              </li>
              <li>
                <img
                  src="/img/tech-logos/typescript.svg"
                  alt="TypeScript logo"
                  class="section__tech-logo"
                />
                TypeScript
              </li>
              <li>
                <img
                  src="/img/tech-logos/sql.svg"
                  alt="SQL logo"
                  class="section__tech-logo"
                />
                SQL
              </li>
              <li>
                <img
                  src="/img/tech-logos/visualstudio.svg"
                  alt="Visual Studio logo"
                  class="section__tech-logo"
                />
                Visual Studio
              </li>
              <li>
                <img
                  src="/img/tech-logos/vscode.svg"
                  alt="Visual Studio Code logo"
                  class="section__tech-logo"
                />
                Visual Studio Code
              </li>
              <li>
                <div class="section__generic-tech-logo">EF</div>
                Entity Framework Core
              </li>
              <li>
                <img
                  src="/img/tech-logos/bootstrap.svg"
                  alt="Bootstrap logo"
                  class="section__tech-logo"
                />
                Bootstrap
              </li>
              <li>
                <img
                  src="/img/tech-logos/octopusdeploy.svg"
                  alt="Octopus Deploy logo"
                  class="section__tech-logo"
                />
                Octopus Deploy
              </li>
            </ul>
          </div>
          <div class="subsection">
            <h3>Comfortable</h3>
            <ul>
              <li>
                <img
                  src="/img/tech-logos/react.svg"
                  alt="React logo"
                  class="section__tech-logo"
                />
                React JS
              </li>
              <li>
                <img
                  src="/img/tech-logos/css3.svg"
                  alt="CSS logo"
                  class="section__tech-logo"
                />
                CSS
              </li>
              <li>
                <img
                  src="/img/tech-logos/dotnetframework.svg"
                  alt=".NET Framework logo"
                  class="section__tech-logo"
                />
                ASP.NET Framework
              </li>
              <li>
                <img
                  src="/img/tech-logos/azuredevops.svg"
                  alt="Azure DevOps logo"
                  class="section__tech-logo"
                />
                Azure DevOps
              </li>
              <li>
                <img
                  src="/img/tech-logos/azurecosmosdb.svg"
                  alt="Azure Cosmos DB logo"
                  class="section__tech-logo"
                />
                Azure Cosmos DB
              </li>
              <li>
                <img
                  src="/img/tech-logos/azureservicebus.svg"
                  alt="Azure logo"
                  class="section__tech-logo"
                />
                Azure Service Bus
              </li>
              <li>
                <img
                  src="/img/tech-logos/microsoft-sql-server.svg"
                  alt="Microsoft SQL Server logo"
                  class="section__tech-logo"
                />
                SQL Server
              </li>
              <li>
                <img
                  src="/img/tech-logos/xstate.svg"
                  alt="XState logo"
                  class="section__tech-logo"
                />
                XState
              </li>
              <li>
                <img
                  src="/img/tech-logos/haproxy.svg"
                  alt="HAProxy logo"
                  class="section__tech-logo"
                />
                HAProxy
              </li>
              <li>
                <div class="section__generic-tech-logo">L</div>
                LINQ
              </li>
              <li>
                <img
                  src="/img/tech-logos/xunit.svg"
                  alt="xUnit logo"
                  class="section__tech-logo"
                />
                xUnit
              </li>
              <li>
                <div class="section__generic-tech-logo">M</div>
                Moq
              </li>
            </ul>
          </div>
          <div class="subsection">
            <h3>Exploring</h3>
            <ul>
              <li>
                <img
                  src="/img/tech-logos/azure.svg"
                  alt="Azure logo"
                  class="section__tech-logo"
                />
                Azure
              </li>
              <li>
                <img
                  src="/img/tech-logos/graphql.svg"
                  alt="GraphQL logo"
                  class="section__tech-logo"
                />
                GraphQL
              </li>
              <li>
                <div class="section__generic-tech-logo">WC</div>
                Web Components
              </li>
              <li>
                <img
                  src="/img/tech-logos/cloudflare.svg"
                  alt="Cloudflare logo"
                  class="section__tech-logo"
                />
                Cloudflare
              </li>
            </ul>
          </div>

          <div id="past-tech" style="display: none" class="subsection">
            <h3>Past</h3>
            <ul>
              <li>
                <img
                  src="/img/tech-logos/docker.svg"
                  alt="Docker logo"
                  class="section__tech-logo"
                />
                Docker
              </li>
              <li>
                <img
                  src="/img/tech-logos/rabbitmq.svg"
                  alt="RabbitMQ logo"
                  class="section__tech-logo"
                />
                RabbitMQ
              </li>
              <li>
                <div class="section__generic-tech-logo">N</div>
                Ninject
              </li>
              <li>
                <img
                  src="/img/tech-logos/java.svg"
                  alt="Java logo"
                  class="section__tech-logo"
                />
                Java
              </li>
              <li>
                <img
                  src="/img/tech-logos/jquery.svg"
                  alt="jQuery logo"
                  class="section__tech-logo"
                />
                jQuery
              </li>
              <li>
                <img
                  src="/img/tech-logos/android.svg"
                  alt="Android Studio logo"
                  class="section__tech-logo"
                />
                Android Studio
              </li>
              <li>
                <img
                  src="/img/tech-logos/jira.svg"
                  alt="JIRA logo"
                  class="section__tech-logo"
                />
                JIRA
              </li>
              <li>
                <img
                  src="/img/tech-logos/confluence.svg"
                  alt="Atalassian Confluence logo"
                  class="section__tech-logo"
                />
                Confluence
              </li>
              <li>
                <img
                  src="/img/tech-logos/teamcity.svg"
                  alt="TeamCity logo"
                  class="section__tech-logo"
                />
                TeamCity
              </li>
              <li>
                <div class="section__generic-tech-logo">WF</div>
                ASP.NET WebForms
              </li>
              <li>
                <div class="section__generic-tech-logo">W</div>
                WCF
              </li>
              <li>
                <div class="section__generic-tech-logo">NH</div>
                NHibernate
              </li>
            </ul>
          </div>
        </div>
        <div class="view-past-tech-btn-container">
          <standard-button id="view-past-tech-btn">
            <svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" style="width: 1.1em; height: 1.1em"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z"/></svg>
            <span slot="label">View past technologies</span>
          </standard-button>
        </div>
`;
  }

  connectedCallback() {
    let pastTechColumn = document.getElementById("past-tech");
    let viewPastTechLink = document.getElementById("view-past-tech-btn");
    viewPastTechLink.addEventListener("click", (ev) => {
      pastTechColumn.style.display = "block";
      viewPastTechLink.style.display = "none";
    });
  }
}

customElements.define("tech-listing", TechListing);
