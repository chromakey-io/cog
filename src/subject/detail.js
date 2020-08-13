import {LitElement, html, css} from 'lit-element';
import {LayoutGrid, LayoutGridCell} from '../layout-grid/mwc-layout-grid.js';

import {ErrorMessage} from '../utils.js';

import {MDCDataTable} from '@material/data-table';

import {default as TableStyles} from '@material/data-table/dist/mdc.data-table.css';

export class SubjectDetail extends LitElement {

    static get styles() {
        return [TableStyles, css`.mdc-data-table__table{ width: 100% };`];
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
        <mwc-layout-grid>
            <mwc-layout-grid-cell span="2"></mwc-layout-grid-cell>
            <mwc-layout-grid-cell span="8">
                <span>Identity: ${this.identity}</span>
                <span>Age: ${this.age}</span>
            </mwc-layout-grid-cell>
            <mwc-layout-grid-cell span="2"></mwc-layout-grid-cell>
            <mwc-layout-grid-cell span="2"></mwc-layout-grid-cell>
            <mwc-layout-grid-cell span="8">
                <div id="#trials" class="mdc-data-table">
                    <div class="mdc-data-table__table-container">
                    <table class="mdc-data-table__table" aria-label="Dessert calories">
                        <thead>
                        <tr class="mdc-data-table__header-row">
                            <th class="mdc-data-table__header-cell" role="columnheader" scope="col">Dessert</th>
                            <th class="mdc-data-table__header-cell mdc-data-table__header-cell--numeric" role="columnheader" scope="col">Carbs (g)</th>
                            <th class="mdc-data-table__header-cell mdc-data-table__header-cell--numeric" role="columnheader" scope="col">Protein (g)</th>
                            <th class="mdc-data-table__header-cell" role="columnheader" scope="col">Comments</th>
                        </tr>
                        </thead>
                        <tbody class="mdc-data-table__content">
                        <tr class="mdc-data-table__row">
                            <th class="mdc-data-table__cell" scope="row">Frozen yogurt</th>
                            <td class="mdc-data-table__cell mdc-data-table__cell--numeric">24</td>
                            <td class="mdc-data-table__cell mdc-data-table__cell--numeric">4.0</td>
                            <td class="mdc-data-table__cell">Super tasty</td>
                        </tr>
                        <tr class="mdc-data-table__row">
                            <th class="mdc-data-table__cell" scope="row">Ice cream sandwich</th>
                            <td class="mdc-data-table__cell mdc-data-table__cell--numeric">37</td>
                            <td class="mdc-data-table__cell mdc-data-table__cell--numeric">4.33333333333</td>
                            <td class="mdc-data-table__cell">I like ice cream more</td>
                        </tr>
                        <tr class="mdc-data-table__row">
                            <th class="mdc-data-table__cell" scope="row">Eclair</th>
                            <td class="mdc-data-table__cell mdc-data-table__cell--numeric">24</td>
                            <td class="mdc-data-table__cell mdc-data-table__cell--numeric">6.0</td>
                            <td class="mdc-data-table__cell">New filing flavor</td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
            </mwc-layout-grid-cell>
            <mwc-layout-grid-cell span="2"></mwc-layout-grid-cell>
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
