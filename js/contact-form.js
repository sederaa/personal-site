class ContactForm extends HTMLElement {
  constructor() {
    super();
    let shadowDom = this.attachShadow({ mode: "open" });
    shadowDom.innerHTML = `
  
      <link href="css/sanitize.css" rel="stylesheet" />
      <link href="css/assets.css" rel="stylesheet" />
      <link href="css/forms.css" rel="stylesheet" />
  
      <style>
        .contact-form {
            display: flex;
            flex-direction: column;
            gap: calc(var(--spacing-unit) * 4);
        }
        .fields {
            display: flex;
            flex-direction: row;
            gap: calc(var(--spacing-unit) * 4);
        }
        .fields > * {
            flex: 1 1 auto;
        }
        .contact-form input,
        .contact-form textarea {
            border-radius: calc(var(--border-radius) * 0.25);
            border: solid 2px var(--color-gray-200);
            padding: calc(var(--spacing-unit) * 2);
        }
        .contact-form input:focus,
        .contact-form textarea:focus {
            outline: 0;
            border-color: var(--color-highlight);
        }
      </style>
      <!-- form validation and animation of border colour: https://blog.logrocket.com/style-forms-css/ -->
      <form class="contact-form">
        <div class="fields">
            <input type="text" id="name" name="name" maxlength="100" autocomplete="name" placeholder="Name" />
            <input type="email" id="email_address" name="email_address" maxlength="100" autocomplete="email" placeholder="Email address" />
        </div>
        <textarea id="message" name="message" maxlength="100" autocomplete="message" placeholder="Your message"></textarea>
        <div>
            <standard-button type="submit">Send Message</standard-button>
        </div>
      </form>
      `;
  }
}

customElements.define("contact-form", ContactForm);
