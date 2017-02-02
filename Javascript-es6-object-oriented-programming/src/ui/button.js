import {BaseElement} from './base-element.js';

export class Button extends BaseElement {

    constructor(title) {
        super();
        this.title = title;
    }

    getElementString() {                      // ES6 template string by using back tic ``, which let put new lines into the string
        return `
            <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
                ${this.title}
            </button>
        `;
    }
}
