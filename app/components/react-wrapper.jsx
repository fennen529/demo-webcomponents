import Component from '@ember/component';
import React from 'npm:react';

function Accordion(value) {
  return (
    <simple-accordion>
      <simple-accordion-header value="Package"></simple-accordion-header>
      <simple-accordion-body>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
          dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </simple-accordion-body>
    </simple-accordion>
  );
}

const page = (
  <Accordion />
);

// ReactDOM.render(page, document.getElementById('root'));

export default function(props) {
  return (
    <Accordion />
  );
}
