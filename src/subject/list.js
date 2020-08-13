import {LitElement, html} from 'lit-element';

import {List} from '@material/mwc-list/mwc-list.js';
import {ListItem} from '@material/mwc-list/mwc-list-item.js';

import {SubjectDetail} from '../subject/detail.js';
import {ErrorMessage} from '../utils.js';

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