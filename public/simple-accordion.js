class SimpleAccordion extends HTMLElement {
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

class SimpleAccordionHeader extends HTMLElement {
  get value() {
    return this.getAttribute('value');
  }

  set value(newValue) {
    this.setAttribute('value', newValue);
  }

  constructor() {
    super();
    // this.setAttribute('class', 'accordion__header');
  }

  connectedCallback() {
    // this.innerHTML = `
    //   <h4>${this.value}</h4>
    //   <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
    //     <path d="M23.836 33.723l-.598.479L.249 15.769l3.284-2.633 20.302 16.279 20.302-16.279 3.284 2.633-22.989 18.433-.598-.479z"></path>
    //   </svg>
    // `
  }
}
customElements.define('simple-accordion-header', SimpleAccordionHeader);

class SimpleAccordionBody extends HTMLElement {
  constructor() {
    super();
    // this.setAttribute('class', 'accordion__body');
  }
}
customElements.define('simple-accordion-body', SimpleAccordionBody);
