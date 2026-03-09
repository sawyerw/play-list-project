// I will put the arrows here that can be clicked and change the slide of the playlist

/**
 * Copyright 2026 interested-learner
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

export class SlideArrow extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "slide-arrow";
  }

  constructor() {
    super();
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        position: absolute;
        inset: 0;
        width: 100%;
        pointer-events: none;
      }
    
      button {
        color: var(--ddd-theme-default-nittanyNavy);
        background-color: var(--ddd-theme-default-slateLight);
        border: 2px solid var(--ddd-theme-default-nittanyNavy);
        padding: var(--ddd-spacing-1) var(--ddd-spacing-3);
        border-radius: var(--ddd-radius-circle);
        cursor: pointer;
        font-size: var(--ddd-font-size-s);
        pointer-events: auto;
      }
      button:hover {
        background-color: var(--ddd-theme-default-slateMaxLight);
      }
     .arrow-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 41.5%;
        margin-top: 200px;
     }
     
    `];
  }

  // Lit render the HTML
  render() {
    return html`
    <div class="arrow-container">
        <button class="prev" @click=${() => this.dispatchEvent(new CustomEvent('prev-clicked', {bubbles: true, composed: true }))}><</button>
        <button class="next" @click=${() => this.dispatchEvent(new CustomEvent('next-clicked', {bubbles: true, composed: true}))}>></button>
    </div>
    `;
  }

}

globalThis.customElements.define(SlideArrow.tag, SlideArrow);