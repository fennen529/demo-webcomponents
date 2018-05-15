//Main wrapper
//
class SimpleAccordion extends HTMLElement {
  static get observedAttributes() {
    return ['collapsed']
  }

  get collapsed() {
    return this.hasAttribute('collapsed');
  }

  set collapsed(value) {
    value = Boolean(value);
    if (value) {
      this.setAttribute('collapsed', '');
    } else {
      this.removeAttribute('collapsed');
    }
  }

  constructor() {
    super();
    this.addEventListener('click', e => {
      this.toggleAccordion();
    });
  }

  toggleAccordion() {
    console.log("Element was clicked!");
    if (!this.collapsed) {
      this.setAttribute('class', 'collapsed');
      this.setAttribute('collapsed', '');
    } else {
      this.removeAttribute('class');
      this.removeAttribute('collapsed');
    }
  }
}
customElements.define('simple-accordion', SimpleAccordion);

//Header
//
class SimpleAccordionHeader extends HTMLElement {
  static get observedAttributes() {
    return ['value']
  }

  get value() {
    return this.getAttribute('value');
  }

  set value(newValue) {
    this.setAttribute('value', newValue);
  }

  constructor() {
    super();
    this.headerContent = document.createElement('h4');
  }

  connectedCallback() {
    this.setAttribute('class', 'accordion__header');
    // let value = this.getAttribute('value');
    // this.appendChild(this.headerContent).append(value);
    this.innerHTML = `
      <h4>${this.value}</h4>
      <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
        <path d="M23.836 33.723l-.598.479L.249 15.769l3.284-2.633 20.302 16.279 20.302-16.279 3.284 2.633-22.989 18.433-.598-.479z"></path>
      </svg>
    `
  }
}
customElements.define('simple-accordion-header', SimpleAccordionHeader);

//Shadow header
//
let tmpl = document.createElement('template');
tmpl.innerHTML = `
  <style>
    :host {
      transition-property: background-color;
      transition-duration: .25s;
      transition-timing-function: ease-in-out;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 0;
      border: 1px solid #dbdee0;
      border-radius: 4px 4px 0 0;
      background-color: #dbdee0;
      padding: 1.07143em 1.42857em;
      font-size: 14px;
      font-weight: 400;
    }

    h4 {
      font-size: 1rem;
      line-height: 1.3;
      color: currentColor;
      font-family: Noto Sans,Helvetica,Arial,sans-serif;
      font-weight: 400;
      margin: 0;
    }
  </style>
  <h4>Shadow Header</h4>
  <slot></slot>
`;

class SimpleShadowAccordionHeader extends HTMLElement {
  static get observedAttributes() {
    return ['value']
  }

  get value() {
    return this.getAttribute('value');
  }

  set value(newValue) {
    this.setAttribute('value', newValue);
  }

  constructor() {
    super();
    const shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.appendChild(tmpl.content.cloneNode(true));
  }

  // connectedCallback() {
  //   this.setAttribute('class', 'accordion__header');
  // }
}
customElements.define('simple-shadow-accordion-header', SimpleShadowAccordionHeader);

//Body
//
class SimpleAccordionBody extends HTMLElement {
  connectedCallback() {
    this.setAttribute('class', 'accordion__body');
  }
}
customElements.define('simple-accordion-body', SimpleAccordionBody);
