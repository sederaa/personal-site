class ContactForm extends HTMLElement {
  constructor() {
    super();
    let shadowDom = this.attachShadow({ mode: "open" });
    shadowDom.innerHTML = `
  
      <link href="css/sanitize.css" rel="stylesheet" />
      <link href="css/assets.css" rel="stylesheet" />
      <link href="css/forms.css" rel="stylesheet" />
  
      <style>
      .contact-form__fields {
        list-style-type: none;
        padding:  0;
      }
      .contact-form__label {
          display: block;
      }
      .contact-form__field {
          background-color: white;
          border: solid 1px grey;
      }
      .contact-form__button {
          border: solid 1px grey;
      }
      </style>
      
      <form class="contact-form">
        <ul class="contact-form__fields">
            <li>
                <label for="name" class="contact-form__label">Name</label>
                <input type="text" id="name" name="name" maxlength="100" autocomplete="name" class="contact-form__field" />
            </li>
            <li>
                <label for="email_address" class="contact-form__label">Email Address</label>
                <input type="email" id="email_address" name="email_address" maxlength="100" autocomplete="email" class="contact-form__field" />
            </li>
            <li>
                <label for="subject" class="contact-form__label">Subject</label>
                <input type="text" id="subject" name="subject" maxlength="100" autocomplete="subject" class="contact-form__field" />
            </li>
            <li>
                <label for="message" class="contact-form__label">Message</label>
                <textarea id="message" name="message" maxlength="100" autocomplete="message" class="contact-form__field"></textarea>
            </li>
            <li>
                <button type="submit" class="contact-form__button">Send Message</button>
            </li>
        </ul>
      </form>
      `;
  }
}

customElements.define("contact-form", ContactForm);
