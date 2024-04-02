class ContactForm extends HTMLElement {
  constructor() {
    super();
    let shadowDom = this.attachShadow({ mode: "open" });
    shadowDom.innerHTML = `
  
      <link href="css/sanitize.css" rel="stylesheet" />
      <link href="css/assets.css" rel="stylesheet" />
      <link href="css/forms.css" rel="stylesheet" />
      <link href="css/standard-button.css" rel="stylesheet" />

      <style>
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: calc(var(--spacing-unit) * 4);

          .fields {
            display: flex;
            flex-direction: row;
            gap: calc(var(--spacing-unit) * 4);
          }
          .fields > * {
              flex: 1 1 auto;
          }

          input,
          textarea {
              border-radius: calc(var(--border-radius) * 0.25);
              border: solid 2px var(--color-gray-200);
              padding: calc(var(--spacing-unit) * 2);
              font-size: 85%;
              
              &:focus {
                  outline: 0;
                  border-color: var(--color-highlight);
              }
          }
          
          textarea {
            min-height: 200px;
          }

          &.submitted {
            input,
            textarea {
              &:required {
                &:invalid {
                  border-color: red;
                }
              }
            }
          }
        }
        
      </style>
      <form class="contact-form" method="GET" action="/">
        <div class="fields">
            <input type="text" id="name" name="name" maxlength="100" autocomplete="name" placeholder="Name" required />
            <input type="email" id="email_address" name="email_address" maxlength="100" autocomplete="email" placeholder="Email address" required="Email address is required" />
        </div>
        <textarea id="message" name="message" maxlength="100" autocomplete="message" placeholder="Your message"></textarea>
        <div>
            <standard-button type="submit" id="send-message-btn">Send Message</standard-button>
        </div>
      </form>
      `;
  }

  connectedCallback() {
    const form = this.shadowRoot.querySelector("form");
    const sendButton = this.shadowRoot.getElementById("send-message-btn");
    sendButton.addEventListener("click", (event) => {
      form.classList.add("submitted");
    });
  }
}

customElements.define("contact-form", ContactForm);
