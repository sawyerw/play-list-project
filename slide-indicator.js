import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import "./slide-arrow.js";
export class SlideIndicator extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "slide-indicator";
  }
  
    constructor() {
    super();
        this.total = 0;
        this.currentIndex = 0;
  }

    static get properties() {
      return {
        ...super.properties,
        total: { type: Number },
        currentIndex: { type: Number }
      };
    }

static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
      }
      .dots {
        position: absolute;
        bottom: 60px;
        left: 3.5%;
        display: flex;
        gap: var(--ddd-spacing-3);
        padding: var(--ddd-spacing-2);
        }
    .dot {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background-color: var(--ddd-theme-default-limestoneGray);
      cursor: pointer;
    }
    .dot.active {
    background-color: var(--ddd-theme-default-skyBlue);
    }
        `];
  }

  render() {
    let dots = [];
    for (let i = 0; i < this.total; i++) {
      dots.push(html`
      <span @click="${this._handleDotClick}" data-index="${i}" class="dot ${i === this.currentIndex ? 'active' : ''}"></span>
        `);
    }
    return html`
      <div class="dots">
        ${dots}
      </div>`;
  }

  _handleDotClick(e) {
    const idx = Number(e.currentTarget?.dataset?.index ?? e.target?.dataset?.index);
    const indexChange = new CustomEvent("play-list-index-changed", {
      composed: true,
      bubbles: true,
      detail: { index: idx },
    });
    this.dispatchEvent(indexChange);
  }

}


globalThis.customElements.define("slide-indicator", SlideIndicator);