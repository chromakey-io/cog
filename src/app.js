import {html, render} from 'lit-html';

import createAuth0Client from '@auth0/auth0-spa-js';

import '@material/mwc-dialog';
import '@material/mwc-drawer';

import '@material/mwc-top-app-bar-fixed';
import '@material/mwc-icon-button';
import '@material/mwc-button/mwc-button';

import '@material/mwc-textfield/mwc-textfield';

import '@material/mwc-list/mwc-list.js';
import '@material/mwc-list/mwc-list-item.js';

import '@material/mwc-icon';

let auth0 = null;
let token = null;
let options = null;

/*
* Starts the authentication flow
*/

const login = async () => {
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

async function renderSubjects(subjects){
    const content = document.getElementById('content');
    
    let list = (subjects) => html`
            <mwc-list id="subject-list" wrapfocus="" innerrole="navigation" innerarialabel="Patient List" itemroles="link" roottabbable="">
                ${subjects.map((subject) => 
                    html`<mwc-list-item class="subject" twoline="" graphic="icon" data-href="/patient/1" role="link" tabindex="0" aria-disable="false">
                            <span>${subject.name}</span>
                            <span slot="secondary">${subject.id}</span>
                            <mwc-icon slot="graphic">face</mwc-icon>
                        </mwc-list-item>`
                )}
            </mwc-list>`;

    render(list(subjects), content);
}

async function subjectHandler(){
    const response = await fetch('http://localhost:8000/subjects', {
        method: 'GET',
        headers: {
            Authorization: 'Bearer: ' + token
        },
    });
    if (response.status == 200){
        const subjects = await response.json();
        console.log(subjects);
        await renderSubjects(subjects);
    } else {
        console.log(response);
    }
};
async function subjectDialogHandler(){
    const dialog = document.querySelector('#identifier-dialog');
    const textfield = document.querySelector('#identifier');

    const data = JSON.stringify({'identifier': textfield.value});

    const response = await fetch('/subject/0', {
            method: 'POST',
            headers: {
                Authorization: 'Bearer: ' + token
            },
            body: data
    });
    if (response.status == 200) {
        const data = await response.json();
        console.log(data);
        await subjectHandler();
    } else {
        console.log(response);
    }
};

async function renderSubjectDialog(){
    const drawer = document.getElementsByTagName('mwc-drawer')[0];
    drawer.open = false;

    const content = document.getElementById('content');

    const form = () => html`
        <mwc-dialog id="identifier-dialog" heading="Identifier" open>
            <p>Enter a subject's name or identifier:</p>
            <mwc-textfield outlined label="Identifier" icon="face" maxLength=255 id="identifier"></mwc-textfield>
            <mwc-button id="submit-identifier" slot="primaryAction">Confirm</mwc-button>
            <mwc-button slot="secondaryAction" dialogAction="close">Cancel</mwc-button>
        </mwc-dialog>`;

    render(form(), content);

    const submit = document.querySelector('#submit-identifier');
    submit.addEventListener('click', subjectDialogHandler);
};

const load = async () => {
    auth0 = await configureAuth0();
    const isAuthenticated = await auth0.isAuthenticated();
    
    if(isAuthenticated) {
        // set the global token
        token = await auth0.getTokenSilently();
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
        // set the global token
        token = await auth0.getTokenSilently();
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

const addSubject = document.querySelector('#add-subject');
addSubject.addEventListener('click', renderSubjectDialog);
