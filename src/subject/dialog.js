import {LitElement, html, css} from 'lit-element';

import {ErrorMessage} from '../utils.js';

export class SubjectDialog extends LitElement {

    static get styles() {
        return css`
            mwc-textfield {
                width:100%;
            }
        `;
    }
    constructor (options) {
        super();
        this._token = options.token;
        this.subjects_list = options.subjects_list;
    }

    get identity() {
        return this.shadowRoot.getElementById('identity').value
    }

    get birthdate() {
        return this.shadowRoot.getElementById('birthdate').value
    }

    render() {
        const drawer = document.getElementsByTagName('mwc-drawer')[0];
        drawer.open = false;

        return html`
            <mwc-dialog id="id-dialog" heading="Identity" open>
                <p>Create a new subject:</p>
                <p>
                <mwc-textfield outlined label="Identity" icon="face" maxLength="255" required="true" id="identity"></mwc-textfield>
                </p>
                <p>
                <mwc-textfield outlined label="Birthdate" helper="Birthdate" required="true" icon="today" type="date" id="birthdate"></mwc-textfield>
                </p>
                <mwc-button id="submit-id" @click=${this.handler} slot="primaryAction">Confirm</mwc-button>
                <mwc-button id="cancel-id" @click=${this.destroy} slot="secondaryAction" dialogAction="close">Cancel</mwc-button>
            </mwc-dialog>`;
    }

    async handler() {
        const data = JSON.stringify({
            'identity': this.identity,
            'birthdate': this.birthdate
        });

        const response = await fetch('/subject', {
                method: 'POST',
                headers: {
                    Authorization: 'Bearer: ' + this._token
                },
                body: data
        });

        if (response.status == 200) {
            const data = await response.json();
        } else {
            const error = new ErrorMessage({'message':"Error Saving Subject"});
            document.getElementById('content').appendChild(error);
        }
        await this.destroy();
    }

    async destroy() {
        this.subjects_list.handler();
        this.remove();
    }
};

window.customElements.define('subject-dialog', SubjectDialog);