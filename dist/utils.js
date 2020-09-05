import{_ as t,a as e,d as i,b as a,q as n,p as s,o as r,B as o,h as c,c as d,e as m,f as l,g as p,L as b}from"./index.js";
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var _=function(){function t(t){void 0===t&&(t={}),this.adapter=t}return Object.defineProperty(t,"cssClasses",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{}},enumerable:!0,configurable:!0}),t.prototype.init=function(){},t.prototype.destroy=function(){},t}(),u={CLOSING:"mdc-snackbar--closing",OPEN:"mdc-snackbar--open",OPENING:"mdc-snackbar--opening"},f={ACTION_SELECTOR:".mdc-snackbar__action",ARIA_LIVE_LABEL_TEXT_ATTR:"data-mdc-snackbar-label-text",CLOSED_EVENT:"MDCSnackbar:closed",CLOSING_EVENT:"MDCSnackbar:closing",DISMISS_SELECTOR:".mdc-snackbar__dismiss",LABEL_SELECTOR:".mdc-snackbar__label",OPENED_EVENT:"MDCSnackbar:opened",OPENING_EVENT:"MDCSnackbar:opening",REASON_ACTION:"action",REASON_DISMISS:"dismiss",SURFACE_SELECTOR:".mdc-snackbar__surface"},h={DEFAULT_AUTO_DISMISS_TIMEOUT_MS:5e3,INDETERMINATE:-1,MAX_AUTO_DISMISS_TIMEOUT_MS:1e4,MIN_AUTO_DISMISS_TIMEOUT_MS:4e3,SNACKBAR_ANIMATION_CLOSE_TIME_MS:75,SNACKBAR_ANIMATION_OPEN_TIME_MS:150,ARIA_LIVE_DELAY_MS:1e3},g=u.OPENING,k=u.OPEN,y=u.CLOSING,E=f.REASON_ACTION,T=f.REASON_DISMISS,x=function(i){function a(t){var n=i.call(this,e(e({},a.defaultAdapter),t))||this;return n.isOpen_=!1,n.animationFrame_=0,n.animationTimer_=0,n.autoDismissTimer_=0,n.autoDismissTimeoutMs_=h.DEFAULT_AUTO_DISMISS_TIMEOUT_MS,n.closeOnEscape_=!0,n}return t(a,i),Object.defineProperty(a,"cssClasses",{get:function(){return u},enumerable:!0,configurable:!0}),Object.defineProperty(a,"strings",{get:function(){return f},enumerable:!0,configurable:!0}),Object.defineProperty(a,"numbers",{get:function(){return h},enumerable:!0,configurable:!0}),Object.defineProperty(a,"defaultAdapter",{get:function(){return{addClass:function(){},announce:function(){},notifyClosed:function(){},notifyClosing:function(){},notifyOpened:function(){},notifyOpening:function(){},removeClass:function(){}}},enumerable:!0,configurable:!0}),a.prototype.destroy=function(){this.clearAutoDismissTimer_(),cancelAnimationFrame(this.animationFrame_),this.animationFrame_=0,clearTimeout(this.animationTimer_),this.animationTimer_=0,this.adapter.removeClass(g),this.adapter.removeClass(k),this.adapter.removeClass(y)},a.prototype.open=function(){var t=this;this.clearAutoDismissTimer_(),this.isOpen_=!0,this.adapter.notifyOpening(),this.adapter.removeClass(y),this.adapter.addClass(g),this.adapter.announce(),this.runNextAnimationFrame_((function(){t.adapter.addClass(k),t.animationTimer_=setTimeout((function(){var e=t.getTimeoutMs();t.handleAnimationTimerEnd_(),t.adapter.notifyOpened(),e!==h.INDETERMINATE&&(t.autoDismissTimer_=setTimeout((function(){t.close(T)}),e))}),h.SNACKBAR_ANIMATION_OPEN_TIME_MS)}))},a.prototype.close=function(t){var e=this;void 0===t&&(t=""),this.isOpen_&&(cancelAnimationFrame(this.animationFrame_),this.animationFrame_=0,this.clearAutoDismissTimer_(),this.isOpen_=!1,this.adapter.notifyClosing(t),this.adapter.addClass(u.CLOSING),this.adapter.removeClass(u.OPEN),this.adapter.removeClass(u.OPENING),clearTimeout(this.animationTimer_),this.animationTimer_=setTimeout((function(){e.handleAnimationTimerEnd_(),e.adapter.notifyClosed(t)}),h.SNACKBAR_ANIMATION_CLOSE_TIME_MS))},a.prototype.isOpen=function(){return this.isOpen_},a.prototype.getTimeoutMs=function(){return this.autoDismissTimeoutMs_},a.prototype.setTimeoutMs=function(t){var e=h.MIN_AUTO_DISMISS_TIMEOUT_MS,i=h.MAX_AUTO_DISMISS_TIMEOUT_MS;if(!(t===h.INDETERMINATE||t<=i&&t>=e))throw new Error("\n        timeoutMs must be an integer in the range "+e+"–"+i+"\n        (or "+h.INDETERMINATE+" to disable), but got '"+t+"'");this.autoDismissTimeoutMs_=t},a.prototype.getCloseOnEscape=function(){return this.closeOnEscape_},a.prototype.setCloseOnEscape=function(t){this.closeOnEscape_=t},a.prototype.handleKeyDown=function(t){("Escape"===t.key||27===t.keyCode)&&this.getCloseOnEscape()&&this.close(T)},a.prototype.handleActionButtonClick=function(t){this.close(E)},a.prototype.handleActionIconClick=function(t){this.close(T)},a.prototype.clearAutoDismissTimer_=function(){clearTimeout(this.autoDismissTimer_),this.autoDismissTimer_=0},a.prototype.handleAnimationTimerEnd_=function(){this.animationTimer_=0,this.adapter.removeClass(u.OPENING),this.adapter.removeClass(u.CLOSING)},a.prototype.runNextAnimationFrame_=function(t){var e=this;cancelAnimationFrame(this.animationFrame_),this.animationFrame_=requestAnimationFrame((function(){e.animationFrame_=0,clearTimeout(e.animationTimer_),e.animationTimer_=setTimeout(t,0)}))},a}(_);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
@license
Copyright 2019 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const{ARIA_LIVE_LABEL_TEXT_ATTR:A}=x.strings,{ARIA_LIVE_DELAY_MS:O}=x.numbers,I=new WeakMap,C=i((t,e)=>i=>{if(!e)return;let a=I.get(i);if(void 0===a){const e=document.createElement("div");return e.setAttribute("class","mdc-snackbar__label"),e.setAttribute("role","status"),e.setAttribute("aria-live","polite"),e.textContent=t,i.endNode.parentNode.insertBefore(e,i.endNode),a={labelEl:e,timerId:null},void I.set(i,a)}const n=a,s=n.labelEl;s.setAttribute("aria-live","off"),s.textContent="",s.innerHTML='<span style="display: inline-block; width: 0; height: 1px;">&nbsp;</span>',s.setAttribute(A,t),null!==n.timerId&&clearTimeout(n.timerId),n.timerId=window.setTimeout(()=>{n.timerId=null,s.setAttribute("aria-live","polite"),s.removeAttribute(A),s.textContent=t},O)}),{OPENING_EVENT:N,OPENED_EVENT:S,CLOSING_EVENT:v,CLOSED_EVENT:M}=x.strings;class w extends o{constructor(){super(...arguments),this.mdcFoundationClass=x,this.open=!1,this.timeoutMs=5e3,this.closeOnEscape=!1,this.labelText="",this.stacked=!1,this.leading=!1,this.reason=""}render(){const t={"mdc-snackbar--stacked":this.stacked,"mdc-snackbar--leading":this.leading};return c`
      <div class="mdc-snackbar ${d(t)}" @keydown="${this._handleKeydown}">
        <div class="mdc-snackbar__surface">
          ${C(this.labelText,this.open)}
          <div class="mdc-snackbar__actions">
            <slot name="action" @click="${this._handleActionClick}"></slot>
            <slot name="dismiss" @click="${this._handleDismissClick}"></slot>
          </div>
        </div>
      </div>`}createAdapter(){return Object.assign(Object.assign({},m(this.mdcRoot)),{announce:()=>{},notifyClosed:t=>{this.dispatchEvent(new CustomEvent(M,{bubbles:!0,cancelable:!0,detail:{reason:t}}))},notifyClosing:t=>{this.open=!1,this.dispatchEvent(new CustomEvent(v,{bubbles:!0,cancelable:!0,detail:{reason:t}}))},notifyOpened:()=>{this.dispatchEvent(new CustomEvent(S,{bubbles:!0,cancelable:!0}))},notifyOpening:()=>{this.open=!0,this.dispatchEvent(new CustomEvent(N,{bubbles:!0,cancelable:!0}))}})}show(){this.open=!0}close(t=""){this.reason=t,this.open=!1}firstUpdated(){super.firstUpdated(),this.open&&this.mdcFoundation.open()}_handleKeydown(t){this.mdcFoundation.handleKeyDown(t)}_handleActionClick(t){this.mdcFoundation.handleActionButtonClick(t)}_handleDismissClick(t){this.mdcFoundation.handleActionIconClick(t)}}a([n(".mdc-snackbar")],w.prototype,"mdcRoot",void 0),a([n(".mdc-snackbar__label")],w.prototype,"labelElement",void 0),a([s({type:Boolean,reflect:!0}),r((function(t){this.mdcFoundation&&(t?this.mdcFoundation.open():(this.mdcFoundation.close(this.reason),this.reason=""))}))],w.prototype,"open",void 0),a([r((function(t){this.mdcFoundation.setTimeoutMs(t)})),s({type:Number})],w.prototype,"timeoutMs",void 0),a([r((function(t){this.mdcFoundation.setCloseOnEscape(t)})),s({type:Boolean})],w.prototype,"closeOnEscape",void 0),a([s({type:String})],w.prototype,"labelText",void 0),a([s({type:Boolean})],w.prototype,"stacked",void 0),a([s({type:Boolean})],w.prototype,"leading",void 0);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const D=l`.mdc-snackbar{z-index:8;margin:8px;display:none;position:fixed;right:0;bottom:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;pointer-events:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-snackbar__surface{background-color:#333}.mdc-snackbar__label{color:rgba(255,255,255,.87)}.mdc-snackbar__surface{min-width:344px}@media(max-width: 480px),(max-width: 344px){.mdc-snackbar__surface{min-width:100%}}.mdc-snackbar__surface{max-width:672px}.mdc-snackbar__surface{box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 6px 10px 0px rgba(0, 0, 0, 0.14),0px 1px 18px 0px rgba(0,0,0,.12)}.mdc-snackbar__surface{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-snackbar--opening,.mdc-snackbar--open,.mdc-snackbar--closing{display:flex}.mdc-snackbar--leading{justify-content:flex-start}.mdc-snackbar--stacked .mdc-snackbar__label{padding-left:16px;padding-right:8px;padding-bottom:12px}[dir=rtl] .mdc-snackbar--stacked .mdc-snackbar__label,.mdc-snackbar--stacked .mdc-snackbar__label[dir=rtl]{padding-left:8px;padding-right:16px}.mdc-snackbar--stacked .mdc-snackbar__surface{flex-direction:column;align-items:flex-start}.mdc-snackbar--stacked .mdc-snackbar__actions{align-self:flex-end;margin-bottom:8px}.mdc-snackbar__surface{padding-left:0;padding-right:8px;display:flex;align-items:center;justify-content:flex-start;box-sizing:border-box;transform:scale(0.8);opacity:0}[dir=rtl] .mdc-snackbar__surface,.mdc-snackbar__surface[dir=rtl]{padding-left:8px;padding-right:0}.mdc-snackbar--open .mdc-snackbar__surface{transform:scale(1);opacity:1;pointer-events:auto;transition:opacity 150ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-snackbar--closing .mdc-snackbar__surface{transform:scale(1);transition:opacity 75ms 0ms cubic-bezier(0.4, 0, 1, 1)}.mdc-snackbar__label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);padding-left:16px;padding-right:8px;width:100%;flex-grow:1;box-sizing:border-box;margin:0;padding-top:14px;padding-bottom:14px}[dir=rtl] .mdc-snackbar__label,.mdc-snackbar__label[dir=rtl]{padding-left:8px;padding-right:16px}.mdc-snackbar__label::before{display:inline;content:attr(data-mdc-snackbar-label-text)}.mdc-snackbar__actions{display:flex;flex-shrink:0;align-items:center;box-sizing:border-box}.mdc-snackbar__action:not(:disabled){color:#bb86fc}.mdc-snackbar__action::before,.mdc-snackbar__action::after{background-color:#bb86fc}.mdc-snackbar__action:hover::before{opacity:.08}.mdc-snackbar__action.mdc-ripple-upgraded--background-focused::before,.mdc-snackbar__action:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:.24}.mdc-snackbar__action:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-snackbar__action:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.24}.mdc-snackbar__action.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.24}.mdc-snackbar__dismiss{color:rgba(255,255,255,.87)}.mdc-snackbar__dismiss::before,.mdc-snackbar__dismiss::after{background-color:rgba(255,255,255,.87)}.mdc-snackbar__dismiss:hover::before{opacity:.08}.mdc-snackbar__dismiss.mdc-ripple-upgraded--background-focused::before,.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:.24}.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.24}.mdc-snackbar__dismiss.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.24}.mdc-snackbar__dismiss.mdc-snackbar__dismiss{width:36px;height:36px;padding:9px;font-size:18px}.mdc-snackbar__dismiss.mdc-snackbar__dismiss svg,.mdc-snackbar__dismiss.mdc-snackbar__dismiss img{width:18px;height:18px}.mdc-snackbar__action+.mdc-snackbar__dismiss{margin-left:8px;margin-right:0}[dir=rtl] .mdc-snackbar__action+.mdc-snackbar__dismiss,.mdc-snackbar__action+.mdc-snackbar__dismiss[dir=rtl]{margin-left:0;margin-right:8px}slot[name=action]::slotted(mwc-button){--mdc-theme-primary: var(--mdc-snackbar-action-color, #bb86fc)}slot[name=dismiss]::slotted(mwc-icon-button){--mdc-icon-size: 18px;--mdc-icon-button-size: 36px;color:rgba(255, 255, 255, 0.87);margin-left:8px;margin-right:0}[dir=rtl] slot[name=dismiss]::slotted(mwc-icon-button),slot[name=dismiss]::slotted(mwc-icon-button)[dir=rtl]{margin-left:0;margin-right:8px}`;let R=class extends w{};R.styles=D,R=a([p("mwc-snackbar")],R);class L extends b{static get properties(){return{message:{type:String}}}constructor(t={retry:!1,message:"Error. Uh Oh :("}){super(),this.retry=t.retry,this.message=t.message}render(){return c`<mwc-snackbar open timeoutMs="-1" id="error-message" labelText="${this.message}">
                        ${this.renderRetry}
                        <mwc-icon-button icon="close" @click=${this.remove} slot="dismiss"></mwc-icon-button>
                    </mwc-snackbar>`}get renderRetry(){return this.retry?c`<mwc-button @click="${this.retry()} id="error-retry" slot="action">RETRY</mwc-button>`:c``}}window.customElements.define("error-message",L);export{L as ErrorMessage};
//# sourceMappingURL=utils.js.map
