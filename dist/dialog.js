import{L as t,f as e,h as i}from"./index.js";import{ErrorMessage as d}from"./utils.js";class s extends t{static get styles(){return e`
            mwc-textfield {
                width:100%;
            }
        `}constructor(t){super(),this._token=t.token,this.subjects_list=t.subjects_list}get identity(){return this.shadowRoot.getElementById("identity").value}get birthdate(){return this.shadowRoot.getElementById("birthdate").value}render(){return document.getElementsByTagName("mwc-drawer")[0].open=!1,i`
            <mwc-dialog id="id-dialog" heading="Identity" open>
                <p>Create a new subject:</p>
                <p>
                <mwc-textfield outlined label="Identity" icon="face" maxLength="255" required="true" id="identity"></mwc-textfield>
                </p>
                <p>
                <mwc-textfield outlined label="Birthdate" helper="Birthdate" required="true" icon="today" type="date" id="birthdate"></mwc-textfield>
                </p>
                <mwc-button id="submit-id" @click=${this.handler} slot="primaryAction">Confirm</mwc-button>
                <mwc-button id="cancel-id" @click=${this.destroy} slot="secondaryAction" dialogAction="close">Cancel</mwc-button>
            </mwc-dialog>`}async handler(){const t=JSON.stringify({identity:this.identity,birthdate:this.birthdate}),e=await fetch("/subject",{method:"POST",headers:{Authorization:"Bearer: "+this._token},body:t});if(200==e.status){await e.json()}else{const t=new d({message:"Error Saving Subject"});document.getElementById("content").appendChild(t)}await this.destroy()}async destroy(){this.subjects_list.handler(),this.remove()}}window.customElements.define("subject-dialog",s);export{s as SubjectDialog};
//# sourceMappingURL=dialog.js.map
