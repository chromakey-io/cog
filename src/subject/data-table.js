
/*
import BXButton from 'carbon-web-components/es/components/button/button';

import BXTable from 'carbon-web-components/es/components/data-table/table';
import BXTableBody from 'carbon-web-components/es/components/data-table/table-body';
import BXTableHead from 'carbon-web-components/es/components/data-table/table-head';
import BXTableCell from 'carbon-web-components/es/components/data-table/table-cell';
import BXTableRow from 'carbon-web-components/es/components/data-table/table-row';
import BXTableHeaderCell from 'carbon-web-components/es/components/data-table/table-header-cell';
import BXTableHeaderRow from 'carbon-web-components/es/components/data-table/table-header-row';

import BXTableToolbar from 'carbon-web-components/es/components/data-table/table-toolbar';
import BXTableToolbarContent from 'carbon-web-components/es/components/data-table/table-toolbar-content';
import BXTableToolbarSearch from 'carbon-web-components/es/components/data-table/table-toolbar-search';
*/


html`   <mwc-layout-grid>
            <mwc-layout-grid-cell span="2"></mwc-layout-grid-cell>
            <mwc-layout-grid-cell span="8">
                <span>Identity: ${this.identity}</span>
                <span>Age: ${this.age}</span>
            </mwc-layout-grid-cell>
            <mwc-layout-grid-cell span="2"></mwc-layout-grid-cell>
            <mwc-layout-grid-cell span="2"></mwc-layout-grid-cell>
            <mwc-layout-grid-cell span="8">
                <bx-data-table color-scheme="zebra">
                <bx-table-toolbar>
                    <bx-table-toolbar-content ?has-batch-actions="${false}">
                        <bx-table-toolbar-search @bx-search-input="${this._handleSearch}"></bx-table-toolbar-search>
                        <bx-btn>Download CSV</bx-btn>
                    </bx-table-toolbar-content>
              </bx-table-toolbar>
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
                            <bx-table-row>
                                <bx-table-cell>Foo3</bx-table-cell>
                                <bx-table-cell>Bar3</bx-table-cell>
                                <bx-table-cell>Baz3</bx-table-cell>
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
        </mwc-layout-grid>`