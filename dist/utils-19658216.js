import{L as e,h as r}from"./index.js";class t extends e{static get properties(){return{message:{type:String}}}constructor(e={retry:!1,message:"Error. Uh Oh :("}){super(),this.retry=e.retry,this.message=e.message}render(){return r`<mwc-snackbar open timeoutMs="-1" id="error-message" labelText="${this.message}">
                        ${this.renderRetry}
                        <mwc-icon-button icon="close" @click=${this.remove} slot="dismiss"></mwc-icon-button>
                    </mwc-snackbar>`}get renderRetry(){return this.retry?r`<mwc-button @click="${this.retry()} id="error-retry" slot="action">RETRY</mwc-button>`:r``}}window.customElements.define("error-message",t);export{t as ErrorMessage};
//# sourceMappingURL=utils-19658216.js.map
