import {LitElement, html} from 'lit-element';

import 'carbon-web-components/es/components/data-table/table.js';
import 'carbon-web-components/es/components/data-table/table-body.js';
import 'carbon-web-components/es/components/data-table/table-head.js';
import 'carbon-web-components/es/components/data-table/table-header-row.js';
import 'carbon-web-components/es/components/data-table/table-header-cell.js';
import 'carbon-web-components/es/components/data-table/table-row.js';
import 'carbon-web-components/es/components/data-table/table-cell.js';

import {LayoutGrid} from '../layout-grid/mwc-layout-grid.js';

import {ErrorMessage} from '../utils.js';

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