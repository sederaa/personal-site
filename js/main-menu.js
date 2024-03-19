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
      font-weight: 400;
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
        gap: calc(var(--spacing-unit) * 4);
        justify-content: flex-end;
      }
    
      nav a {
        padding: calc(var(--spacing-unit) * 1) 0;
        text-shadow: none;
        transition: all 0.2s ease-out;
      }
      nav a:hover {
        background-color: transparent;
        color: var(--color-highlight);
      }

      nav a span.path {
        display: none;
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
          <li><a href="#tech-section" class="section-link">Technologies</a></li>
          <li><a href="#portfolio-section" class="section-link">Portfolio</a></li>
          <li><a href="#contact-section" class="section-link">Contact</a></li>
          <li><a href="#">Resume</a></li>
          <li><a href="https://www.linkedin.com/in/sebderaadt/" target="_blank" title="LinkedIn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style="width: 1.2em; height: 1.2em; vertical-align: -0.2em;"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg> <span class="path">/ sebderaadt</span></a></li>
          <li><a href="https://github.com/sederaa" target="_blank" title="GitHub"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" style="width: 1.2em; height: 1.2em; vertical-align: -0.2em;"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg> <span class="path">/ sederaa</span></a></li>
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
