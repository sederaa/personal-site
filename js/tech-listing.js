class TechListing extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
        <div class="columns">
          <div class="columns__column">
            <h2>Proficient</h2>
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
          <div class="columns__column">
            <h2>Comfortable</h2>
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
          <div class="columns__column">
            <h2>Exploring</h2>
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

          <div id="past-tech" style="display: none" class="columns__column">
            <h2>Past</h2>
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
        <button id="view-past-tech-btn">View past tech</button>
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
