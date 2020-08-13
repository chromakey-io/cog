import createAuth0Client from '@auth0/auth0-spa-js';

import {ErrorMessage} from './utils.js';

export class Authorize {
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