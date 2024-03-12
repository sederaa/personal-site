class MainMenu extends HTMLElement {
  constructor() {
    super();
    let shadowDom = this.attachShadow({ mode: "open" });
    shadowDom.innerHTML = `

    <link href="css/sanitize.css" rel="stylesheet" />
    <link href="css/assets.css" rel="stylesheet" />
    <link href="css/forms.css" rel="stylesheet" />

    <style>
    .main-menu-wrapper {
      height: 100%;
      /*align hamburger lines right*/
      display: flex;
      flex-direction: row;
      justify-content: end;
    
    }

    nav {
      width: 100%;
      position: fixed;
      left: 0;
      top: var(--header-height);
      background-color: white;
      overflow: hidden;
    
      max-height: 0;
      transition: max-height 0.5s ease-out;
    }
    
    nav ul {
      margin: 0;
    }
    
    nav a {
      display: block;
      padding: calc(var(--spacing-unit) * 5) calc(var(--spacing-unit) * 10);
      color: var(--text-color);
      text-decoration: none;
    }
    nav a:hover {
      background-color: gray;
    }
    
    /* Menu Icon */
    .hamburger-label {
      cursor: pointer;
      height: 100%;
      float: right;
      /*center hamburger lines vertically*/
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    
    .hamburger-lines {
      background: var(--color-gray-800);
      display: block;
      height: var(--hamburger-line-thickness);
      position: relative;
      width: 1.2rem;
    }
    
    .hamburger-lines::before,
    .hamburger-lines::after {
      background: var(--color-gray-800);
      content: "";
      display: block;
      height: 100%;
      position: absolute;
      transition: all 0.2s ease-out;
      width: 100%;
    }
    .hamburger-lines::before {
      top: calc(var(--hamburger-line-thickness) * 2);
    }
    .hamburger-lines::after {
      top: calc(var(--hamburger-line-thickness) * 2 * -1);
    }
    
    .menu-checkbox {
      display: none;
    }
    
    /* Toggle menu icon */
    .menu-checkbox:checked ~ nav {
      max-height: 100%;
      overscroll-behavior: none;
    }
    .menu-checkbox:checked ~ .hamburger-label .hamburger-lines {
      background: transparent;
    }
    .menu-checkbox:checked ~ .hamburger-label .hamburger-lines::before {
      transform: rotate(-45deg);
      top: 0;
    }
    .menu-checkbox:checked ~ .hamburger-label .hamburger-lines::after {
      transform: rotate(45deg);
      top: 0;
    }
    
    @media (min-width: 768px) {
      .main-menu-wrapper {
        /*center menu items vertically*/
        flex-direction: column;
        justify-content: center;
      }
  
      nav {
        max-height: unset;
        position: relative;
        width: 100%;
        margin-top: unset;
        top: unset;
      }
    
      nav ul {
        display: flex;
        justify-content: flex-end;
      }
    
      nav a {
        padding: 0 calc(var(--spacing-unit) * 2);
      }
      nav a:hover {
        background-color: transparent;
      }
    
      .hamburger-label {
        display: none;
      }
    }    
    </style>
    
    <div class="main-menu-wrapper">
      <input class="menu-checkbox" type="checkbox" id="menu-checkbox"/>
      <label class="hamburger-label" for="menu-checkbox"><span class="hamburger-lines"></span></label>

      <nav id="menu" class="menu">
        <ul>
          <li><a href="#tech-section" class="section-link">tech</a></li>
          <li><a href="#portfolio-section" class="section-link">portfolio</a></li>
          <li><a href="#contact-section" class="section-link">contact</a></li>
          <li><a href="#">resume</a></li>
          <li><a href="#">linkedin</a></li>
          <li><a href="#">github</a></li>
          <li><a href="#">dark/light</a></li>
        </ul>
      </nav>
    </div>
    `;
  }

  connectedCallback() {
    // Attach event handler to menu links to close the menu on click
    const menu = this.shadowRoot.getElementById("menu");
    const links = menu.getElementsByClassName("section-link");
    const menuCheckbox = this.shadowRoot.getElementById("menu-checkbox");
    for (let index = 0; index < links.length; index++) {
      const link = links[index];
      link.addEventListener("click", (ev) => {
        menuCheckbox.checked = !menuCheckbox.checked;
      });
    }
  }
}

customElements.define("main-menu", MainMenu);
