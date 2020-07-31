import createAuth0Client from '@auth0/auth0-spa-js';

import '@material/mwc-drawer';

import '@material/mwc-button';
import '@material/mwc-top-app-bar-fixed';
import '@material/mwc-icon-button';

import '@material/mwc-list/mwc-list.js';
import '@material/mwc-list/mwc-list-item.js';

import '@material/mwc-icon';

let auth0 = null;
let token = null;
let options = null;

/*
* Starts the authentication flow
*/

const login = async (targetUrl) => {
    try {
        /* TODO: redirect_uri -- dynamic */
        await auth0.loginWithRedirect(options);
    } catch (err) {
        console.log("Log in failed", err);
    }
};

const logout = () => {
    try {
        console.log("Logging out");
        auth0.logout({
            returnTo: window.location.origin
        });
    } catch (err) {
        console.log("Log out failed", err);
    }
};

async function configureAuth0(){
    const response = await fetch("/options");
    options = await response.json();

    const authClient = await createAuth0Client({
        domain: options.domain,
        client_id: options.client_id,
        scope: "openid profile email",
        audience: options.audience
    });

    return authClient;
};

async function insertSubject(subject){
    console.log(subject);
}

async function subjectHandler(){
    const user = await auth0.getUser();
    const logged_in = document.querySelector('#logged-in');

    const accessToken = await auth0.getTokenSilently();

    const response = await fetch('http://localhost:8000/subjects', {
        method: 'GET',
        headers: {
            Authorization: 'Bearer: ' + accessToken
        },
    });
    if (response.status == 200){
        const subjects = await response.json();
        subjects.forEach(insertSubject);
    } else {
        console.log(response);
    }
};

const load = async () => {
    auth0 = await configureAuth0();
    const isAuthenticated = await auth0.isAuthenticated();
    
    if(isAuthenticated) {
        await subjectHandler();
    }
    /* 
    * after the first redirect we'll have two @params code and state
    */

    const query = window.location.search;
    const shouldParseResult = query.includes("code=") && query.includes("state=");

    /* 
    * complete the login process IF these @params exist
    */

    if(!shouldParseResult && !isAuthenticated)
        await login();

    if (shouldParseResult && !isAuthenticated) {
      console.log("> Parsing redirect");
      try {
        const result = await auth0.handleRedirectCallback();
        await subjectHandler();
      } catch (err) {
        console.log("Error parsing redirect:", err);
      }
    }
};

window.addEventListener('load', load);

const button = document.querySelector('#btn-logout');
button.addEventListener('click', logout);

const drawer = document.getElementsByTagName('mwc-drawer')[0];
const container = drawer.parentNode;
container.addEventListener('MDCTopAppBar:nav', () => {
    drawer.open = !drawer.open;
  });