import {Drawer} from '@material/mwc-drawer';
import {Dialog} from '@material/mwc-dialog';

import {TopAppBarFixed} from '@material/mwc-top-app-bar-fixed';
import {IconButton} from '@material/mwc-icon-button';
import {Icon} from '@material/mwc-icon';
import {Button} from '@material/mwc-button/mwc-button';

import {TextField} from '@material/mwc-textfield/mwc-textfield';

import CognitiveIcon from '@carbon/icons/es/cognitive/32';
import {toSVG} from '@carbon/icon-helpers';

import MaterialStyles from './theme.scss';
import Typography from './typography.scss';

import { LinearProgress } from '@material/mwc-linear-progress';

async function load(e) {

    /* set nav icon to a brain */
    const progress = document.querySelector('#page-load-progress');

    const logo = document.getElementById('logo');
    const logo_brain = toSVG({...CognitiveIcon, attrs: CognitiveIcon.attrs});
    logo.appendChild(logo_brain);

    const {Authorize} = await import('./authorize.js');

    const content = document.querySelector('#content');

    const auth = new Authorize();
    await auth.init();


    const user = await auth.user();
    console.log(user);
    document.getElementById('user-welcome').innerHTML = `${user.name}`;

    const bootstrap = await fetch('/bootstrap', {
                    method: 'GET',
                    headers: {
                        Authorization: 'Bearer: ' + auth.token
                    },
            });


    const {SubjectList} = await import('./subject/list.js');

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
        const {SubjectDialog} = await import('./subject/dialog.js');
        const dialog = new SubjectDialog({'token':auth.token, 'subjects_list': list});
        content.appendChild(dialog);
    });

    const {ErrorMessage} = await import ('./utils.js');

    progress.remove();

    const error = new ErrorMessage({'message':"LOADING COMPLETE"});
    document.getElementById('content').appendChild(error);
}

window.addEventListener('load', load);
