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

    console.log(options);

    const authClient = await createAuth0Client({
        domain: options.domain,
        client_id: options.client_id,
        scope: "openid profile email",
        audience: options.audience
    });

    return authClient;
};

const load = async () => {
    auth0 = await configureAuth0();
    const isAuthenticated = await auth0.isAuthenticated();
    console.log(isAuthenticated);
    
    if(isAuthenticated) {
        const user = await auth0.getUser();
        console.log(user);
        const accessToken = await auth0.getTokenSilently();
        console.log(accessToken);


        const response = await fetch('http://localhost:8000/private', {
            method: 'GET',
            headers: {
                Authorization: 'Bearer: ' + accessToken
            }
        });
        
        const data = await response.json();

        console.log(data);
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
        login();

    if (shouldParseResult && !isAuthenticated) {
      console.log("> Parsing redirect");
      try {
        const result = await auth0.handleRedirectCallback();
        /*
        if (result.appState && result.appState.targetUrl) {
          showContentFromUrl(result.appState.targetUrl);
        }
        redirect to new page
        */
        console.log("Logged in!");
      } catch (err) {
        console.log("Error parsing redirect:", err);
      }
    }
    /*const user = await auth0.getUser();
    console.log(user);
    */

    /*set the global token variable for API usage
    token = await auth0.getTokenSilently();
    */

    /* call an API

    const response = await fetch('https://localhost:8000/private', {
        method: 'GET',
        headers: {
            Authorization: 'Bearer: ${accessToken}'
        }
    });



    */
};

//document.getElementById('btn-login').addEventListener('click', login);
document.getElementById('btn-logout').addEventListener('click', logout);

window.addEventListener('load', load);
