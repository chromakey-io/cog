import {LitElement, html} from 'lit-element';

export class ErrorMessage extends LitElement {
    static get properties() {
        return {
            message: {type: String}
        }
    }
    
    constructor(options = {'retry':false, 'message': 'Error. Uh Oh :('}) {
        super();

        this.retry = options.retry;
        this.message = options.message;
    }
    
    render() {
        return html`<mwc-snackbar open timeoutMs="-1" id="error-message" labelText="${this.message}">
                        ${this.renderRetry}
                        <mwc-icon-button icon="close" @click=${this.remove} slot="dismiss"></mwc-icon-button>
                    </mwc-snackbar>`;
    }

    get renderRetry() {
        if (this.retry)
            return html`<mwc-button @click="${this.retry()} id="error-retry" slot="action">RETRY</mwc-button>`;
        else
            return html``;
    }
};

window.customElements.define('error-message', ErrorMessage);