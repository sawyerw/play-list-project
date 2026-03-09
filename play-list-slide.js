
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class PlayListSlide extends DDDSuper((LitElement)) {

  static get tag() {
    return "play-list-slide";
  }

  static get properties() {
    return {
      topHeading: { type: String, attribute: "top-heading" },
      secondHeading: { type: String, attribute: "second-heading" }
    };
  }

  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

      .slide {
        width: 700px;
        height: 350px;
        padding: 20px;
        margin: 10px 0;
        background: var(--ddd-theme-default-slateLight);
        border-radius: 8px;
      }

      h1 {
        font-size: 18px;
        font-family: var(--ddd-font-primary);
        color: var(--ddd-theme-default-skyBlue);
        margin:40px 40px 8px 40px;
      }

      h2 {
        font-size: 50px;
        margin: 0 0 12px 40px;
        color: gray;
        font-family: var(--ddd-font-primary);
        color: var(--ddd-theme-default-nittanyNavy);
      }

      .description-box {
        margin: 0 0 12px 40px;
        font-size: 16px;
        color: var(--ddd-theme-default-nittanyNavy);
        width: 400px;
        height: 100px;
        overflow-y: auto;
      }

      .hr {
        border: 0;
        border-top: 2px solid var(--ddd-theme-default-skyBlue);
        width: 80px;
        margin: 0 0 0 40px;
      }


    `;
  }

  render() {
    return html`
      <div class="slide">
        <h1>${this.topHeading}</h1>
        <h2>${this.secondHeading}</h2>
            <br>
            <hr class="hr">
        <div class="description-box">
          <slot></slot>
        </div>
      </div>
    `;
  }
}

globalThis.customElements.define(PlayListSlide.tag, PlayListSlide);