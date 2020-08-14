import {LitElement, html, css} from 'lit-element';
import {LayoutGrid, LayoutGridCell} from 'material-web-components-layout-grid/mwc-layout-grid.js';

import {ErrorMessage} from '../utils.js';

import {MDCDataTable} from '@material/data-table';

import {default as TableStyles} from '@material/data-table/dist/mdc.data-table.css';
import {default as ElevationStyles} from '@material/elevation/dist/mdc.elevation.css';

export class SubjectDetail extends LitElement {

    static get styles() {
        return [TableStyles, ElevationStyles, css`
        .mdc-data-table__table{ width: 100% }
        .mdc-data-table{ 
            padding: 12px;
            background: var(--mdc-theme-on-primary, #eee);
            border: none;
        }
        .mdc-data-table__table-container{
            background: var(--mdc-theme-background, #e1e2e1);
        }
        .card {
            background:lightgray;
        }`];
    }

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
        <mwc-layout-grid class="card">
            <mwc-layout-grid-cell span="1"></mwc-layout-grid-cell>
            <mwc-layout-grid-cell span="10">
                <span>Identity: ${this.identity}</span>
                <span>Age: ${this.age}</span>
            </mwc-layout-grid-cell>
            <mwc-layout-grid-cell span="1"></mwc-layout-grid-cell>
            <mwc-layout-grid-cell span="1"></mwc-layout-grid-cell>
            <mwc-layout-grid-cell span="10">
                <div class="mdc-data-table mdc-elevation--z1">
                    <div class="mdc-data-table__table-container">
                    <table class="mdc-data-table__table" aria-label="Trial Data">
                        <thead>
                        <tr class="mdc-data-table__header-row">
                            <th class="mdc-data-table__header-cell" role="columnheader" scope="col">Trial</th>
                            <th class="mdc-data-table__header-cell mdc-data-table__header-cell--numeric" role="columnheader" scope="col">Clicks (10)</th>
                            <th class="mdc-data-table__header-cell mdc-data-table__header-cell--numeric" role="columnheader" scope="col">Click Variance</th>
                            <th class="mdc-data-table__header-cell" role="columnheader" scope="col">Total Time</th>
                        </tr>
                        </thead>
                        <tbody class="mdc-data-table__content">
                        <tr class="mdc-data-table__row">
                            <th class="mdc-data-table__cell" scope="row">Trail Making Task</th>
                            <td class="mdc-data-table__cell mdc-data-table__cell--numeric">24</td>
                            <td class="mdc-data-table__cell mdc-data-table__cell--numeric">4.0</td>
                            <td class="mdc-data-table__cell">100</td>
                        </tr>
                        <tr class="mdc-data-table__row">
                            <th class="mdc-data-table__cell" scope="row">Trail making task</th>
                            <td class="mdc-data-table__cell mdc-data-table__cell--numeric">37</td>
                            <td class="mdc-data-table__cell mdc-data-table__cell--numeric">4.33333333333</td>
                            <td class="mdc-data-table__cell">300</td>
                        </tr>
                        <tr class="mdc-data-table__row">
                            <th class="mdc-data-table__cell" scope="row">Trail making task</th>
                            <td class="mdc-data-table__cell mdc-data-table__cell--numeric">24</td>
                            <td class="mdc-data-table__cell mdc-data-table__cell--numeric">6.0</td>
                            <td class="mdc-data-table__cell">300</td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
            </mwc-layout-grid-cell>
            <mwc-layout-grid-cell span="1"></mwc-layout-grid-cell>
        </mwc-layout-grid>
        `;
    }

    firstUpdated() {
        const trials = this.shadowRoot.getElementById('#trials');
        const dataTable = new MDCDataTable(trials);
    }

    async _handleSearch(event) {
        return
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
