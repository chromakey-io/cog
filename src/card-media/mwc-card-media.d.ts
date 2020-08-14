import { CardMediaBase } from './mwc-card-media-base.js';
export { AspectRatioType } from './mwc-card-media-base.js';
declare global {
    interface HTMLElementTagNameMap {
        'mwc-card-media': CardMedia;
    }
}
export declare class CardMedia extends CardMediaBase {
    static styles: import("lit-element").CSSResult;
}
