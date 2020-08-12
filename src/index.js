import {LitElement, html, css} from 'lit-element';

import createAuth0Client from '@auth0/auth0-spa-js';

import '@material/mwc-drawer';
import '@material/mwc-dialog';

import '@material/mwc-top-app-bar-fixed';
import '@material/mwc-icon-button';
import '@material/mwc-button/mwc-button';

import '@material/mwc-textfield/mwc-textfield';

import '@material/mwc-list/mwc-list.js';
import '@material/mwc-list/mwc-list-item.js';

import '@material/mwc-icon';
import '@material/mwc-snackbar';
import './layout-grid/mwc-layout-grid.js';

import 'carbon-web-components/es/components/data-table/table.js';
import 'carbon-web-components/es/components/data-table/table-body.js';
import 'carbon-web-components/es/components/data-table/table-head.js';
import 'carbon-web-components/es/components/data-table/table-header-row.js';
import 'carbon-web-components/es/components/data-table/table-header-cell.js';
import 'carbon-web-components/es/components/data-table/table-row.js';
import 'carbon-web-components/es/components/data-table/table-cell.js';

//import './layout-grid/mwc-layout-grid.js';

import CarbonStyles from './carbon.scss';
import MaterialStyles from './theme.scss';
import Typography from './typography.scss';

export class SubjectDetail extends LitElement {

    static get properties() {
        return {
            research_id: {type: String},
            id: {type: String},
            identity: {type: String},
            age: {type: Number}
        }
    }

    constructor(options) {
        super();
        this._token = options.token;
        this.id = options.id;

        this.handler();
    }

    render() {
        return html`
        <mwc-layout-grid>
            <mwc-layout-grid-cell span="2"></mwc-layout-grid-cell>
            <mwc-layout-grid-cell span="8">
                <span>Identity: ${this.identity}</span>
                <span>Age: ${this.age}</span>
            </mwc-layout-grid-cell>
            <mwc-layout-grid-cell span="2"></mwc-layout-grid-cell>
            <mwc-layout-grid-cell span="2"></mwc-layout-grid-cell>
            <mwc-layout-grid-cell span="8">
                <bx-data-table color-scheme="zebra">
                    <bx-table>
                        <bx-table-head>
                            <bx-table-header-row>
                                <bx-table-header-cell>Foo</bx-table-header-cell>
                                <bx-table-header-cell>Bar</bx-table-header-cell>
                                <bx-table-header-cell>Baz</bx-table-header-cell>
                            </bx-table-header-row>
                        </bx-table-head>
                        <bx-table-body>
                            <bx-table-row>
                                <bx-table-cell>Foo1</bx-table-cell>
                                <bx-table-cell>Bar1</bx-table-cell>
                                <bx-table-cell>Baz1</bx-table-cell>
                            </bx-table-row>
                            <bx-table-row>
                                <bx-table-cell>Foo2</bx-table-cell>
                                <bx-table-cell>Bar2</bx-table-cell>
                                <bx-table-cell>Baz2</bx-table-cell>
                            </bx-table-row>
                            <bx-table-row>
                                <bx-table-cell>Foo3</bx-table-cell>
                                <bx-table-cell>Bar3</bx-table-cell>
                                <bx-table-cell>Baz3</bx-table-cell>
                            </bx-table-row>
                        </bx-table-body>
                    </bx-table>
                </bx-data-table>
            </mwc-layout-grid-cell>
            <mwc-layout-grid-cell span="2"></mwc-layout-grid-cell>
        </mwc-layout-grid>`;
    }

    async handler() {
        const response = await fetch(`/subject/${this.id}`, {
                method: 'GET',
                headers: {
                    Authorization: 'Bearer: ' + this._token
                }
        });

        if (response.status == 200) {
            const subject = await response.json();
            this.id = subject.id;
            this.identity = subject.identity;
            this.age = subject.age;
        } else {
            const error = new ErrorMessage({'message':"Error Loading Subject"});
            document.getElementById('content').appendChild(error);        
        }
    }
};

window.customElements.define('subject-detail', SubjectDetail);

export class SubjectList extends LitElement {
    static get properties() {
        return {
            subjects: {type: Array},
        }
    };

    constructor(options) {
        super();
        this._token = options.token;
        this.subjects = [];

        // dispatch async handler
        this.handler();
    };

    render() {
        return html`
        <mwc-list id="subject-list" wrapfocus="" innerrole="navigation" innerarialabel="Subject List" itemroles="link" roottabbable="">
            ${this.subjects.map((subject) => 
                html`<mwc-list-item class="subject" twoline="" graphic="icon" @click="${this.detail}" subject="${subject.id}" data-href="/subject/${subject.id}" role="link" tabindex="0" aria-disable="false">
                        <span>${subject.identity}</span>
                        <span slot="secondary">${subject.id}</span>
                        <mwc-icon slot="graphic">face</mwc-icon>
                    </mwc-list-item>`
            )}
        </mwc-list>`;
    }
      
    async detail(event) {
        const subject_id = event.target.getAttribute('subject');

        const subject_detail = new SubjectDetail({'id': subject_id, 'token': this._token});
        const content = document.getElementById('content');
        content.replaceChildren(subject_detail);
    }

    async handler(event) {
        const response = await fetch('/subjects', {
            method: 'GET',
            headers: {
                Authorization: 'Bearer: ' + this._token
            },
        });

        if (response.status == 200){
            this.subjects = await response.json();
        } else {
            const error = new ErrorMessage({'message':"Error Loading Subjects"});
            document.getElementById('content').appendChild(error);
        }
    }
};

window.customElements.define('subject-list', SubjectList);

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

export class SubjectDialog extends LitElement {

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

class Authorize {
    constructor() {
        this._scope = "openid profile email"
        this.token = "";
    }

    async init () {
        this.options = await this._options();
        this.client = await this._config();

        /*
        *   after the first redirect we'll have two @params code and state
        *   check Auth0Client to determine if the login process has started
        */
        const query = window.location.search;
        const shouldParseResult = query.includes("code=") && query.includes("state=");
        this.authenticated = await this.client.isAuthenticated();

        if (this.authenticated) {
            this.token = await this.client.getTokenSilently(this.options);
        }

        /*
        * start the login process
        */
        if(!shouldParseResult && !this.authenticated){
            try {
                await this.client.loginWithRedirect(this.options);
            } catch (err) {
                const error = new ErrorMessage({'message':"Log in Failed! Uh OHhhh."});
                document.getElementById('content').appendChild(error);
            }
        }

        /* 
        * complete the login process
        */        
        if (shouldParseResult && !this.authenticated) {
            try {
                await this.client.handleRedirectCallback();
            } catch (err) {
                const error = new ErrorMessage({'message':"Error parsing redirect."});
                document.getElementById('content').appendChild(error);
            }
            this.token = await this.client.getTokenSilently(this.optons);
        }      
    }

    async logout(event) {
        try {
            this.client.logout({
                returnTo: window.location.origin
            });
        } catch (err) {
            const error = new ErrorMessage({'message':"Log out Failed! Uh OHhhh."});
            document.getElementById('content').appendChild(error);
        }
    }

    async _options() {
        const response = await fetch("/options");
        const options = await response.json();
        return options
    }

    async _config() {
        const authClient = await createAuth0Client({
            domain: this.options.domain,
            client_id: this.options.client_id,
            scope: this._scope,
            audience: this.options.audience
        });
        return authClient
    };

    async user() {
        return await this.client.getUser();
    }

}

async function load(e) {
    const content = document.querySelector('#content');

    const auth = new Authorize();
    await auth.init();

    const user = await auth.user();
    document.getElementById('user-welcome').innerHTML = `${user.name}`;

    let list = new SubjectList({'token': auth.token});
    content.appendChild(list);

    const button = document.querySelector('#btn-logout');
    button.addEventListener('click', async (e) => {
        auth.logout(e);
    });

    const drawer = document.getElementsByTagName('mwc-drawer')[0];
    const container = drawer.parentNode;
    container.addEventListener('MDCTopAppBar:nav', () => {
        drawer.open = !drawer.open;
    });
    
    const addSubject = document.querySelector('#add-subject');
    addSubject.addEventListener('click', async (e) => {
        const dialog = new SubjectDialog({'token':auth.token, 'subjects_list': list});
        content.appendChild(dialog);
    });

    const error = new ErrorMessage({'message':"LOADING COMPLETE"});
    document.getElementById('content').appendChild(error);
}

window.addEventListener('load', load);
