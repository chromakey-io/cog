import {LitElement, html, css} from 'lit-element';
import {LayoutGrid, LayoutGridCell} from 'material-web-components-layout-grid/mwc-layout-grid.js';

import {ErrorMessage} from '../utils.js';

import {MDCDataTable} from '@material/data-table';

import {Card} from '../card/mwc-card';
import {CardMedia} from '../card-media/mwc-card-media';
import {CardPrimaryAction} from '../card-primary-action/mwc-card-primary-action';


import {default as TableStyles} from '@material/data-table/dist/mdc.data-table.css';
import {default as ElevationStyles} from '@material/elevation/dist/mdc.elevation.css';
import {default as TypographyStyles} from '@material/typography/dist/mdc.typography.css';


import {DonutChart} from "@carbon/charts/charts";

import {default as ChartStyles} from "@carbon/charts/styles.css";

const CardStyles = css`
            mwc-card {
                width:100%;
            }
            .card__header {
                display: flex;
                flex-direction: row;
                padding: 16px;
                background: var(--mdc-theme-on-primary, #eee);
            }
            
            .card__header-text {
                display: flex;
                flex-direction: column;
            }
            
            .card__title,
            .card__subtitle,
            .card__secondary {
                font-family: Roboto, sans-serif;
            }
            
            .card__title {
                font-size: 1.25rem;
                font-weight: 500;
                line-height: 2rem;
                color: rgba(0, 0, 0);
            }
            
            .card__subtitle {
                font-size: .875rem;
                line-height: 1.375rem;
                font-weight: 500;
                color: rgba(0, 0, 0, 0.54);
                text-decoration: inherit;
                text-decoration-line: inherit;
                text-decoration-style: inherit;
                text-decoration-color: inherit;
            }
            
            .card__secondary {
                font-size: .875rem;
                line-height: 1.25rem;
                font-weight: 400;
                color: rgba(0, 0, 0, 0.54);
                text-decoration: inherit;
                text-transform: inherit;
            }
        `;


export class TrialData extends LitElement {

    static get styles() {
        return [TableStyles,
            css`.mdc-data-table{
                width:100%;
                border:none;
            }`];
    }

    constructor(options) {
        super();
        this._token = options.token;
        this.id = options.id;
    }

    render() {
        return html`
                <div class="mdc-data-table">
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
        `;
    }

    async _searchHandler(event) {
        return
    }
};

window.customElements.define('trial-data', TrialData);


export class DataChart extends LitElement{

    static get styles() {
        return [ChartStyles, CardStyles,
            css`#donut-body{ 
                    width: calc(50% - 256px); 
                    margin:0 auto;
                    padding:24px;:
                }`
        ];
    }

   static get properties() {
        return {
            data: {type: Array}
        }
    }

    constructor(options) {
        
        super();

        this._options = {
            "donut": {
                "center": {
                    "label": "Trial Summary"
                }
            },
            "height": "256px"
        };

        this.data = [
            {
                "group": "Ham",
                "value": 20000
            },
            {
                "group": "Cheese",
                "value": 65000
            },
            {
                "group": "Sandwiches",
                "value": 75000
            }
        ];
    }

    render() {
        return html`
            <mwc-card fullBleed>
                <div class="card__header mdc-typography mdc-typography--body2">
                    <div class="card__header-text mdc-typography mdc-typography--body2">
                        <div class="card__title">Donut Chart: </div>
                        <div class="card__subtitle">trial summary</div>
                    </div>
                </div>
                <div id="donut-body" class="card__secondary mdc-typography mdc-typography--body2">
                    <!-- CHART CONTENT -->
                </div>
            </mwc-card>
        `;
    }

    firstUpdated(properties) {
        const options = {'data': this.data, 'options': this._options}

        const container = this.shadowRoot.getElementById('donut-body');
        const donut = new DonutChart(container, options);
    }
};

window.customElements.define('data-chart', DataChart);

export class SubjectDetail extends LitElement {
    static get styles() {
        return [CardStyles];
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
        const data = new TrialData({'token': this._token, 'id': this.id});

        const chart = new DataChart();

        return html`
        <mwc-layout-grid>
            <mwc-layout-grid-cell span="2"></mwc-layout-grid-cell>
            <mwc-layout-grid-cell span="8">
                <mwc-card fullBleed>
                    <div class="card__header mdc-typography mdc-typography--body2">
                        <div class="card__header-text mdc-typography mdc-typography--body2">
                            <div class="card__title">Identity: ${this.identity}</div>
                            <div class="card__subtitle">age: ${this.age}</div>
                        </div>
                    </div>
                    <div class="card__secondary mdc-typography mdc-typography--body2">
                        ${data}
                    </div>
                    <mwc-button slot="button">
                        <mwc-icon slot="graphic">directions_run</mwc-icon>
                        Run New Trial
                    </mwc-button>
                </mwc-card>
            </mwc-layout-grid-cell>
            <mwc-layout-grid-cell span="2"></mwc-layout-grid-cell>
            <mwc-layout-grid-cell span="2"></mwc-layout-grid-cell>
            <mwc-layout-grid-cell span="8">
                ${chart}
            </mwc-layout-grid-cell>
            <mwc-layout-grid-cell span="2"></mwc-layout-grid-cell>
            <mwc-layout-grid-cell span="12"></mwc-layout-grid-cell>

        </mwc-layout-grid>
        `;
    }

    async _handleSearch(event) {
        return
    }

    async handler() {
        const response = await fetch(`/subjects/${this.id}`, {
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
