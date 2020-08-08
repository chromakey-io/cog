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

export class SubjectList extends LitElement {
    static get properties() {
        return {
            subjects: {type: Array},
        }
    };

    constructor(token) {
        super();
        this._token = token;
        this.subjects = [];

        /* create an event to fire off the async handler */
        const load = new Event('load-complete');
        this.addEventListener('load-complete', this.handler);
        this.dispatchEvent(load);
    };

    render() {
        return html`
        <mwc-list id="subject-list" wrapfocus="" innerrole="navigation" innerarialabel="Subject List" itemroles="link" roottabbable="">
            ${this.subjects.map((subject) => 
                html`<mwc-list-item class="subject" twoline="" graphic="icon" data-href="/subject/${subject.id}" role="link" tabindex="0" aria-disable="false">
                        <span>${subject.name}</span>
                        <span slot="secondary">${subject.id}</span>
                        <mwc-icon slot="graphic">face</mwc-icon>
                    </mwc-list-item>`
            )}
        </mwc-list>`;
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
            console.log(response);
        }
    }
};

window.customElements.define('subject-list', SubjectList);

export class SubjectDialog extends LitElement {
    static get properties() {
        return {
            identity: {type: String}
        }
    };

    constructor (token) {
        super();
        this._token = token;
    }

    get input() {
        return this.shadowRoot.getElementById('name')
    }

    render() {
        const drawer = document.getElementsByTagName('mwc-drawer')[0];
        drawer.open = false;

        return html`
            <mwc-dialog id="id-dialog" heading="Identity" open>
                <p>Enter a subject's name or identty:</p>
                <mwc-textfield outlined label="Identity" icon="face" maxLength=255 id="name"></mwc-textfield>
                <mwc-button id="submit-id" @click=${this.handler} slot="primaryAction">Confirm</mwc-button>
                <mwc-button id="cancel-id" @click=${this.destroy} slot="secondaryAction" dialogAction="close">Cancel</mwc-button>
            </mwc-dialog>`;
    }

    async handler() {        
        this.identity = this.input.value;

        const data = JSON.stringify({'identity': this.identity});

        const response = await fetch('/subject/0', {
                method: 'POST',
                headers: {
                    Authorization: 'Bearer: ' + this._token
                },
                body: data
        });

        if (response.status == 200) {
            const data = await response.json();
            console.log(data);
        } else {
            console.log(response);
        }
        await this.destroy();
    }

    async destroy() {
        const subjects = new SubjectList(this._token);
        const content = document.getElementById('content');
        content.innerHTML = '';
        content.appendChild(subjects);
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
                console.log("Log in failed", err);
            }
        }

        /* 
        * complete the login process
        */        
        if (shouldParseResult && !this.authenticated) {
            console.log("> Parsing redirect");
            try {
                await this.client.handleRedirectCallback();
            } catch (err) {
                console.log("Error parsing redirect:", err);
            }
            this.token = await this.client.getTokenSilently(this.optons);
        }      
    }

    async logout(event) {
        console.log(this);
        console.log(event);

        try {
            console.log("Logging out");
            this.client.logout({
                returnTo: window.location.origin
            });
        } catch (err) {
            console.log("Log out failed", err);
        }
    }

    async _options() {
        const response = await fetch("/options");
        const options = await response.json();
        console.log(options);
        return options
    }

    async _config() {
        const authClient = await createAuth0Client({
            domain: this.options.domain,
            client_id: this.options.client_id,
            scope: this._scope,
            audience: this.options.audience
        });
        console.log("Configured Auth Client");
        return authClient
    };

}

async function load(e) {
    const auth = new Authorize();
    await auth.init();

    const content = document.querySelector('#content');
    const list = new SubjectList(auth.token);
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
        const dialog = new SubjectDialog(auth.token);
        content.appendChild(dialog);
    });
}

window.addEventListener('load', load);