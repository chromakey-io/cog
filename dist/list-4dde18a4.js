import{_ as t,q as e,p as a,o as i,f as r,B as o,i as n,h as d,a as c,d as s,b as l,c as p,e as m,g as h,j as u,L as g,R as _,k as b,l as f,m as y,n as x,r as v,s as w}from"./index.js";import{ErrorMessage as k}from"./utils-19658216.js";
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
 */var C=function(){function t(t){void 0===t&&(t={}),this.adapter=t}return Object.defineProperty(t,"cssClasses",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{}},enumerable:!0,configurable:!0}),t.prototype.init=function(){},t.prototype.destroy=function(){},t}(),E="Unknown",A="Backspace",I="Enter",R="Spacebar",S="PageUp",T="PageDown",N="End",D="Home",H="ArrowLeft",O="ArrowUp",L="ArrowRight",F="ArrowDown",z="Delete",B="Escape",M=new Set;
/**
 * @license
 * Copyright 2020 Google Inc.
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
 */M.add(A),M.add(I),M.add(R),M.add(S),M.add(T),M.add(N),M.add(D),M.add(H),M.add(O),M.add(L),M.add(F),M.add(z),M.add(B);var U=8,P=13,V=32,j=33,K=34,X=35,G=36,W=37,q=38,$=39,Y=40,Z=46,J=27,Q=new Map;Q.set(U,A),Q.set(P,I),Q.set(V,R),Q.set(j,S),Q.set(K,T),Q.set(X,N),Q.set(G,D),Q.set(W,H),Q.set(q,O),Q.set($,L),Q.set(Y,F),Q.set(Z,z),Q.set(J,B);var tt=new Set;function et(t){var e=t.key;if(M.has(e))return e;var a=Q.get(t.keyCode);return a||E}
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
 */tt.add(S),tt.add(T),tt.add(N),tt.add(D),tt.add(H),tt.add(O),tt.add(L),tt.add(F);var at="mdc-list-item",it={ACTION_EVENT:"MDCList:action",ARIA_CHECKED:"aria-checked",ARIA_CHECKED_CHECKBOX_SELECTOR:'[role="checkbox"][aria-checked="true"]',ARIA_CHECKED_RADIO_SELECTOR:'[role="radio"][aria-checked="true"]',ARIA_CURRENT:"aria-current",ARIA_DISABLED:"aria-disabled",ARIA_ORIENTATION:"aria-orientation",ARIA_ORIENTATION_HORIZONTAL:"horizontal",ARIA_ROLE_CHECKBOX_SELECTOR:'[role="checkbox"]',ARIA_SELECTED:"aria-selected",CHECKBOX_RADIO_SELECTOR:'input[type="checkbox"], input[type="radio"]',CHECKBOX_SELECTOR:'input[type="checkbox"]',CHILD_ELEMENTS_TO_TOGGLE_TABINDEX:"\n    ."+at+" button:not(:disabled),\n    ."+at+" a\n  ",FOCUSABLE_CHILD_ELEMENTS:"\n    ."+at+" button:not(:disabled),\n    ."+at+" a,\n    ."+at+' input[type="radio"]:not(:disabled),\n    .'+at+' input[type="checkbox"]:not(:disabled)\n  ',RADIO_SELECTOR:'input[type="radio"]'},rt={UNSET_INDEX:-1,TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS:300};
/**
 @license
 Copyright 2020 Google Inc. All Rights Reserved.

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
const ot=["input","button","textarea","select"];function nt(t){return t instanceof Set}const dt=t=>{const e=t===rt.UNSET_INDEX?new Set:t;return nt(e)?new Set(e):new Set([e])};class ct extends C{constructor(t){super(Object.assign(Object.assign({},ct.defaultAdapter),t)),this.isMulti_=!1,this.wrapFocus_=!1,this.isVertical_=!0,this.selectedIndex_=rt.UNSET_INDEX,this.focusedItemIndex_=rt.UNSET_INDEX,this.useActivatedClass_=!1,this.ariaCurrentAttrValue_=null}static get strings(){return it}static get numbers(){return rt}static get defaultAdapter(){return{focusItemAtIndex:()=>{},getFocusedElementIndex:()=>0,getListItemCount:()=>0,isFocusInsideList:()=>!1,isRootFocused:()=>!1,notifyAction:()=>{},notifySelected:()=>{},getSelectedStateForElementIndex:()=>!1,setDisabledStateForElementIndex:()=>{},getDisabledStateForElementIndex:()=>!1,setSelectedStateForElementIndex:()=>{},setActivatedStateForElementIndex:()=>{},setTabIndexForElementIndex:()=>{},setAttributeForElementIndex:()=>{},getAttributeForElementIndex:()=>null}}setWrapFocus(t){this.wrapFocus_=t}setMulti(t){this.isMulti_=t;const e=this.selectedIndex_;if(t){if(!nt(e)){const t=e===rt.UNSET_INDEX;this.selectedIndex_=t?new Set:new Set([e])}}else if(nt(e))if(e.size){const t=Array.from(e).sort();this.selectedIndex_=t[0]}else this.selectedIndex_=rt.UNSET_INDEX}setVerticalOrientation(t){this.isVertical_=t}setUseActivatedClass(t){this.useActivatedClass_=t}getSelectedIndex(){return this.selectedIndex_}setSelectedIndex(t){this.isIndexValid_(t)&&(this.isMulti_?this.setMultiSelectionAtIndex_(dt(t)):this.setSingleSelectionAtIndex_(t))}handleFocusIn(t,e){e>=0&&this.adapter.setTabIndexForElementIndex(e,0)}handleFocusOut(t,e){e>=0&&this.adapter.setTabIndexForElementIndex(e,-1),setTimeout(()=>{this.adapter.isFocusInsideList()||this.setTabindexToFirstSelectedItem_()},0)}handleKeydown(t,e,a){const i="ArrowLeft"===et(t),r="ArrowUp"===et(t),o="ArrowRight"===et(t),n="ArrowDown"===et(t),d="Home"===et(t),c="End"===et(t),s="Enter"===et(t),l="Spacebar"===et(t);if(this.adapter.isRootFocused())return void(r||c?(t.preventDefault(),this.focusLastElement()):(n||d)&&(t.preventDefault(),this.focusFirstElement()));let p,m=this.adapter.getFocusedElementIndex();if(!(-1===m&&(m=a,m<0))){if(this.isVertical_&&n||!this.isVertical_&&o)this.preventDefaultEvent(t),p=this.focusNextElement(m);else if(this.isVertical_&&r||!this.isVertical_&&i)this.preventDefaultEvent(t),p=this.focusPrevElement(m);else if(d)this.preventDefaultEvent(t),p=this.focusFirstElement();else if(c)this.preventDefaultEvent(t),p=this.focusLastElement();else if((s||l)&&e){const e=t.target;if(e&&"A"===e.tagName&&s)return;this.preventDefaultEvent(t),this.setSelectedIndexOnAction_(m,!0)}this.focusedItemIndex_=m,void 0!==p&&(this.setTabindexAtIndex_(p),this.focusedItemIndex_=p)}}handleSingleSelection(t,e,a){t!==rt.UNSET_INDEX&&(this.setSelectedIndexOnAction_(t,e,a),this.setTabindexAtIndex_(t),this.focusedItemIndex_=t)}focusNextElement(t){let e=t+1;if(e>=this.adapter.getListItemCount()){if(!this.wrapFocus_)return t;e=0}return this.adapter.focusItemAtIndex(e),e}focusPrevElement(t){let e=t-1;if(e<0){if(!this.wrapFocus_)return t;e=this.adapter.getListItemCount()-1}return this.adapter.focusItemAtIndex(e),e}focusFirstElement(){return this.adapter.focusItemAtIndex(0),0}focusLastElement(){const t=this.adapter.getListItemCount()-1;return this.adapter.focusItemAtIndex(t),t}setEnabled(t,e){this.isIndexValid_(t)&&this.adapter.setDisabledStateForElementIndex(t,!e)}preventDefaultEvent(t){const e=(""+t.target.tagName).toLowerCase();-1===ot.indexOf(e)&&t.preventDefault()}setSingleSelectionAtIndex_(t,e=!0){this.selectedIndex_!==t&&(this.selectedIndex_!==rt.UNSET_INDEX&&(this.adapter.setSelectedStateForElementIndex(this.selectedIndex_,!1),this.useActivatedClass_&&this.adapter.setActivatedStateForElementIndex(this.selectedIndex_,!1)),e&&this.adapter.setSelectedStateForElementIndex(t,!0),this.useActivatedClass_&&this.adapter.setActivatedStateForElementIndex(t,!0),this.setAriaForSingleSelectionAtIndex_(t),this.selectedIndex_=t,this.adapter.notifySelected(t))}setMultiSelectionAtIndex_(t,e=!0){const a=((t,e)=>{const a=Array.from(t),i=Array.from(e),r={added:[],removed:[]},o=a.sort(),n=i.sort();let d=0,c=0;for(;d<o.length||c<n.length;){const t=o[d],e=n[c];t!==e?void 0!==t&&(void 0===e||t<e)?(r.removed.push(t),d++):void 0!==e&&(void 0===t||e<t)&&(r.added.push(e),c++):(d++,c++)}return r})(dt(this.selectedIndex_),t);if(a.removed.length||a.added.length){for(const t of a.removed)e&&this.adapter.setSelectedStateForElementIndex(t,!1),this.useActivatedClass_&&this.adapter.setActivatedStateForElementIndex(t,!1);for(const t of a.added)e&&this.adapter.setSelectedStateForElementIndex(t,!0),this.useActivatedClass_&&this.adapter.setActivatedStateForElementIndex(t,!0);this.selectedIndex_=t,this.adapter.notifySelected(t,a)}}setAriaForSingleSelectionAtIndex_(t){this.selectedIndex_===rt.UNSET_INDEX&&(this.ariaCurrentAttrValue_=this.adapter.getAttributeForElementIndex(t,it.ARIA_CURRENT));const e=null!==this.ariaCurrentAttrValue_,a=e?it.ARIA_CURRENT:it.ARIA_SELECTED;this.selectedIndex_!==rt.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(this.selectedIndex_,a,"false");const i=e?this.ariaCurrentAttrValue_:"true";this.adapter.setAttributeForElementIndex(t,a,i)}setTabindexAtIndex_(t){this.focusedItemIndex_===rt.UNSET_INDEX&&0!==t?this.adapter.setTabIndexForElementIndex(0,-1):this.focusedItemIndex_>=0&&this.focusedItemIndex_!==t&&this.adapter.setTabIndexForElementIndex(this.focusedItemIndex_,-1),this.adapter.setTabIndexForElementIndex(t,0)}setTabindexToFirstSelectedItem_(){let t=0;"number"==typeof this.selectedIndex_&&this.selectedIndex_!==rt.UNSET_INDEX?t=this.selectedIndex_:nt(this.selectedIndex_)&&this.selectedIndex_.size>0&&(t=Math.min(...this.selectedIndex_)),this.setTabindexAtIndex_(t)}isIndexValid_(t){if(t instanceof Set){if(!this.isMulti_)throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");if(0===t.size)return!0;{let e=!1;for(const a of t)if(e=this.isIndexInRange_(a),e)break;return e}}if("number"==typeof t){if(this.isMulti_)throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: "+t);return t===rt.UNSET_INDEX||this.isIndexInRange_(t)}return!1}isIndexInRange_(t){const e=this.adapter.getListItemCount();return t>=0&&t<e}setSelectedIndexOnAction_(t,e,a){if(this.adapter.getDisabledStateForElementIndex(t))return;let i=t;if(this.isMulti_&&(i=new Set([t])),this.isIndexValid_(i)){if(this.isMulti_)this.toggleMultiAtIndex(t,a,e);else if(e||a)this.setSingleSelectionAtIndex_(t,e);else{this.selectedIndex_===t&&this.setSingleSelectionAtIndex_(rt.UNSET_INDEX)}e&&this.adapter.notifyAction(t)}}toggleMultiAtIndex(t,e,a=!0){let i=!1;i=void 0===e?!this.adapter.getSelectedStateForElementIndex(t):e;const r=dt(this.selectedIndex_);i?r.add(t):r.delete(t),this.setMultiSelectionAtIndex_(r,a)}}
/**
@license
Copyright 2020 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/const st=t=>t.hasAttribute("mwc-list-item");class lt extends o{constructor(){super(...arguments),this.mdcAdapter=null,this.mdcFoundationClass=ct,this.activatable=!1,this.multi=!1,this.wrapFocus=!1,this.itemRoles=null,this.innerRole=null,this.innerAriaLabel=null,this.rootTabbable=!1,this.previousTabindex=null,this.noninteractive=!1,this.items_=[]}get assignedElements(){const t=this.slotElement;return t?t.assignedNodes({flatten:!0}).filter(n):[]}get items(){return this.items_}updateItems(){const t=this.assignedElements,e=[];for(const a of t)st(a)&&(e.push(a),a._managingList=this),a.hasAttribute("divider")&&!a.hasAttribute("role")&&a.setAttribute("role","separator");this.items_=e;const a=new Set;if(this.items_.forEach((t,e)=>{this.itemRoles?t.setAttribute("role",this.itemRoles):t.removeAttribute("role"),t.selected&&a.add(e)}),this.multi)this.select(a);else{const t=a.size?a.entries().next().value[1]:-1;this.select(t)}const i=new Event("items-updated",{bubbles:!0,composed:!0});this.dispatchEvent(i)}get selected(){const t=this.index;if(!nt(t))return-1===t?null:this.items[t];const e=[];for(const a of t)e.push(this.items[a]);return e}get index(){return this.mdcFoundation?this.mdcFoundation.getSelectedIndex():-1}render(){const t=null===this.innerRole?void 0:this.innerRole,e=null===this.innerAriaLabel?void 0:this.innerAriaLabel,a=this.rootTabbable?"0":"-1";return d`
      <!-- @ts-ignore -->
      <ul
          tabindex=${a}
          role="${c(t)}"
          aria-label="${c(e)}"
          class="mdc-list"
          @keydown=${this.onKeydown}
          @focusin=${this.onFocusIn}
          @focusout=${this.onFocusOut}
          @request-selected=${this.onRequestSelected}
          @list-item-rendered=${this.onListItemConnected}>
        <slot></slot>
      </ul>
    `}firstUpdated(){super.firstUpdated(),this.items.length||(this.mdcFoundation.setMulti(this.multi),this.layout())}onFocusIn(t){if(this.mdcFoundation&&this.mdcRoot){const e=this.getIndexOfTarget(t);this.mdcFoundation.handleFocusIn(t,e)}}onFocusOut(t){if(this.mdcFoundation&&this.mdcRoot){const e=this.getIndexOfTarget(t);this.mdcFoundation.handleFocusOut(t,e)}}onKeydown(t){if(this.mdcFoundation&&this.mdcRoot){const e=this.getIndexOfTarget(t),a=t.target,i=st(a);this.mdcFoundation.handleKeydown(t,i,e)}}onRequestSelected(t){if(this.mdcFoundation){let e=this.getIndexOfTarget(t);if(-1===e&&(this.layout(),e=this.getIndexOfTarget(t),-1===e))return;if(this.items[e].disabled)return;const a=t.detail.selected,i=t.detail.source;this.mdcFoundation.handleSingleSelection(e,"interaction"===i,a),t.stopPropagation()}}getIndexOfTarget(t){const e=this.items,a=t.composedPath();for(const t of a){let a=-1;if(n(t)&&st(t)&&(a=e.indexOf(t)),-1!==a)return a}return-1}createAdapter(){return this.mdcAdapter={getListItemCount:()=>this.mdcRoot?this.items.length:0,getFocusedElementIndex:this.getFocusedItemIndex,getAttributeForElementIndex:(t,e)=>{if(!this.mdcRoot)return"";const a=this.items[t];return a?a.getAttribute(e):""},setAttributeForElementIndex:(t,e,a)=>{if(!this.mdcRoot)return;const i=this.items[t];i&&i.setAttribute(e,a)},focusItemAtIndex:t=>{const e=this.items[t];e&&e.focus()},setTabIndexForElementIndex:(t,e)=>{const a=this.items[t];a&&(a.tabindex=e)},notifyAction:t=>{const e={bubbles:!0,composed:!0};e.detail={index:t};const a=new CustomEvent("action",e);this.dispatchEvent(a)},notifySelected:(t,e)=>{const a={bubbles:!0,composed:!0};a.detail={index:t,diff:e};const i=new CustomEvent("selected",a);this.dispatchEvent(i)},isFocusInsideList:()=>s(this),isRootFocused:()=>{const t=this.mdcRoot;return t.getRootNode().activeElement===t},setDisabledStateForElementIndex:(t,e)=>{const a=this.items[t];a&&(a.disabled=e)},getDisabledStateForElementIndex:t=>{const e=this.items[t];return!!e&&e.disabled},setSelectedStateForElementIndex:(t,e)=>{const a=this.items[t];a&&(a.selected=e)},getSelectedStateForElementIndex:t=>{const e=this.items[t];return!!e&&e.selected},setActivatedStateForElementIndex:(t,e)=>{const a=this.items[t];a&&(a.activated=e)}},this.mdcAdapter}selectUi(t,e=!1){const a=this.items[t];a&&(a.selected=!0,a.activated=e)}deselectUi(t){const e=this.items[t];e&&(e.selected=!1,e.activated=!1)}select(t){this.mdcFoundation&&this.mdcFoundation.setSelectedIndex(t)}toggle(t,e){this.multi&&this.mdcFoundation.toggleMultiAtIndex(t,e)}onListItemConnected(t){const e=t.target;this.layout(-1===this.items.indexOf(e))}layout(t=!0){t&&this.updateItems();const e=this.items[0];for(const t of this.items)t.tabindex=-1;e&&(this.noninteractive?this.previousTabindex||(this.previousTabindex=e):e.tabindex=0)}getFocusedItemIndex(){if(!this.mdcRoot)return-1;if(!this.items.length)return-1;const t=l();if(!t.length)return-1;for(let e=t.length-1;e>=0;e--){const a=t[e];if(st(a))return this.items.indexOf(a)}return-1}focusItemAtIndex(t){for(const t of this.items)if(0===t.tabindex){t.tabindex=-1;break}this.items[t].tabindex=0,this.items[t].focus()}focus(){const t=this.mdcRoot;t&&t.focus()}blur(){const t=this.mdcRoot;t&&t.blur()}}t([e(".mdc-list")],lt.prototype,"mdcRoot",void 0),t([e("slot")],lt.prototype,"slotElement",void 0),t([a({type:Boolean}),i((function(t){this.mdcFoundation&&this.mdcFoundation.setUseActivatedClass(t)}))],lt.prototype,"activatable",void 0),t([a({type:Boolean}),i((function(t,e){this.mdcFoundation&&this.mdcFoundation.setMulti(t),void 0!==e&&this.layout()}))],lt.prototype,"multi",void 0),t([a({type:Boolean}),i((function(t){this.mdcFoundation&&this.mdcFoundation.setWrapFocus(t)}))],lt.prototype,"wrapFocus",void 0),t([a({type:String}),i((function(t,e){void 0!==e&&this.updateItems()}))],lt.prototype,"itemRoles",void 0),t([a({type:String})],lt.prototype,"innerRole",void 0),t([a({type:String})],lt.prototype,"innerAriaLabel",void 0),t([a({type:Boolean})],lt.prototype,"rootTabbable",void 0),t([a({type:Boolean,reflect:!0}),i((function(t){const e=this.slotElement;if(t&&e){const t=r(e,'[tabindex="0"]');this.previousTabindex=t,t&&t.setAttribute("tabindex","-1")}else!t&&this.previousTabindex&&(this.previousTabindex.setAttribute("tabindex","0"),this.previousTabindex=null)}))],lt.prototype,"noninteractive",void 0);
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
const pt=p`@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{display:block}.mdc-list{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);line-height:1.75rem;line-height:var(--mdc-typography-subtitle1-line-height, 1.75rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);line-height:1.5rem;margin:0;padding:8px 0;list-style-type:none;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));padding:var(--mdc-list-vertical-padding, 8px) 0}.mdc-list:focus{outline:none}.mdc-list-item{height:48px}.mdc-list--dense{padding-top:4px;padding-bottom:4px;font-size:.812rem}.mdc-list ::slotted([divider]){height:0;margin:0;border:none;border-bottom-width:1px;border-bottom-style:solid;border-bottom-color:rgba(0,0,0,.12)}.mdc-list ::slotted([divider][padded]){margin:0 var(--mdc-list-side-padding, 16px)}.mdc-list ::slotted([divider][inset]){margin-left:var(--mdc-list-inset-margin, 72px);margin-right:0;width:calc(100% - var(--mdc-list-inset-margin, 72px))}.mdc-list-group[dir=rtl] .mdc-list ::slotted([divider][inset]),[dir=rtl] .mdc-list-group .mdc-list ::slotted([divider][inset]){margin-left:0;margin-right:var(--mdc-list-inset-margin, 72px)}.mdc-list ::slotted([divider][inset][padded]){width:calc(100% - var(--mdc-list-inset-margin, 72px) - var(--mdc-list-side-padding, 16px))}.mdc-list--dense ::slotted([mwc-list-item]){height:40px}.mdc-list--dense ::slotted([mwc-list]){--mdc-list-item-graphic-size: 20px}.mdc-list--two-line.mdc-list--dense ::slotted([mwc-list-item]),.mdc-list--avatar-list.mdc-list--dense ::slotted([mwc-list-item]){height:60px}.mdc-list--avatar-list.mdc-list--dense ::slotted([mwc-list]){--mdc-list-item-graphic-size: 36px}:host([noninteractive]){pointer-events:none;cursor:default}.mdc-list--dense ::slotted(.mdc-list-item__primary-text){display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list--dense ::slotted(.mdc-list-item__primary-text)::before{display:inline-block;width:0;height:24px;content:"";vertical-align:0}.mdc-list--dense ::slotted(.mdc-list-item__primary-text)::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}`
/**
@license
Copyright 2020 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/;let mt=class extends lt{};mt.styles=pt,mt=t([m("mwc-list")],mt);
/**
 @license
 Copyright 2020 Google Inc. All Rights Reserved.

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
class ht extends g{constructor(){super(...arguments),this.value="",this.group=null,this.tabindex=-1,this.disabled=!1,this.twoline=!1,this.activated=!1,this.graphic=null,this.multipleGraphics=!1,this.hasMeta=!1,this.noninteractive=!1,this.selected=!1,this.shouldRenderRipple=!1,this._managingList=null,this.boundOnClick=this.onClick.bind(this),this._firstChanged=!0,this._skipPropRequest=!1,this.rippleHandlers=new _(()=>(this.shouldRenderRipple=!0,this.ripple)),this.listeners=[{target:this,eventNames:["click"],cb:()=>{this.onClick()}},{target:this,eventNames:["mouseenter"],cb:this.rippleHandlers.startHover},{target:this,eventNames:["mouseleave"],cb:this.rippleHandlers.endHover},{target:this,eventNames:["focus"],cb:this.rippleHandlers.startFocus},{target:this,eventNames:["blur"],cb:this.rippleHandlers.endFocus},{target:this,eventNames:["mousedown","touchstart"],cb:t=>{const e=t.type;this.onDown("mousedown"===e?"mouseup":"touchend",t)}}]}get text(){const t=this.textContent;return t?t.trim():""}render(){const t=this.renderText(),e=this.graphic?this.renderGraphic():d``,a=this.hasMeta?this.renderMeta():d``;return d`
      ${this.renderRipple()}
      ${e}
      ${t}
      ${a}`}renderRipple(){return this.shouldRenderRipple?d`
      <mwc-ripple
        .activated=${this.activated}>
      </mwc-ripple>`:this.activated?d`<div class="fake-activated-ripple"></div>`:d``}renderGraphic(){const t={multi:this.multipleGraphics};return d`
      <span class="mdc-list-item__graphic material-icons ${b(t)}">
        <slot name="graphic"></slot>
      </span>`}renderMeta(){return d`
      <span class="mdc-list-item__meta material-icons">
        <slot name="meta"></slot>
      </span>`}renderText(){const t=this.twoline?this.renderTwoline():this.renderSingleLine();return d`
      <span class="mdc-list-item__text">
        ${t}
      </span>`}renderSingleLine(){return d`<slot></slot>`}renderTwoline(){return d`
      <span class="mdc-list-item__primary-text">
        <slot></slot>
      </span>
      <span class="mdc-list-item__secondary-text">
        <slot name="secondary"></slot>
      </span>
    `}onClick(){this.fireRequestSelected(!this.selected,"interaction")}onDown(t,e){const a=()=>{window.removeEventListener(t,a),this.rippleHandlers.endPress()};window.addEventListener(t,a),this.rippleHandlers.startPress(e)}fireRequestSelected(t,e){if(this.noninteractive)return;const a=new CustomEvent("request-selected",{bubbles:!0,composed:!0,detail:{source:e,selected:t}});this.dispatchEvent(a)}connectedCallback(){super.connectedCallback(),this.noninteractive||this.setAttribute("mwc-list-item","");for(const t of this.listeners)for(const e of t.eventNames)t.target.addEventListener(e,t.cb,{passive:!0})}disconnectedCallback(){super.disconnectedCallback();for(const t of this.listeners)for(const e of t.eventNames)t.target.removeEventListener(e,t.cb);this._managingList&&this._managingList.layout(!0)}firstUpdated(){const t=new Event("list-item-rendered",{bubbles:!0,composed:!0});this.dispatchEvent(t)}}t([e("slot")],ht.prototype,"slotElement",void 0),t([h("mwc-ripple")],ht.prototype,"ripple",void 0),t([a({type:String})],ht.prototype,"value",void 0),t([a({type:String,reflect:!0})],ht.prototype,"group",void 0),t([a({type:Number,reflect:!0})],ht.prototype,"tabindex",void 0),t([a({type:Boolean,reflect:!0}),i((function(t){t?this.setAttribute("aria-disabled","true"):this.setAttribute("aria-disabled","false")}))],ht.prototype,"disabled",void 0),t([a({type:Boolean,reflect:!0})],ht.prototype,"twoline",void 0),t([a({type:Boolean,reflect:!0})],ht.prototype,"activated",void 0),t([a({type:String,reflect:!0})],ht.prototype,"graphic",void 0),t([a({type:Boolean})],ht.prototype,"multipleGraphics",void 0),t([a({type:Boolean})],ht.prototype,"hasMeta",void 0),t([a({type:Boolean,reflect:!0}),i((function(t){t?(this.removeAttribute("aria-checked"),this.removeAttribute("mwc-list-item"),this.selected=!1,this.activated=!1,this.tabIndex=-1):this.setAttribute("mwc-list-item","")}))],ht.prototype,"noninteractive",void 0),t([a({type:Boolean,reflect:!0}),i((function(t){const e=this.getAttribute("role"),a="gridcell"===e||"option"===e||"row"===e||"tab"===e;a&&t?this.setAttribute("aria-selected","true"):a&&this.setAttribute("aria-selected","false"),this._firstChanged?this._firstChanged=!1:this._skipPropRequest||this.fireRequestSelected(t,"property")}))],ht.prototype,"selected",void 0),t([u()],ht.prototype,"shouldRenderRipple",void 0),t([u()],ht.prototype,"_managingList",void 0);
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
const ut=p`:host{cursor:pointer;user-select:none;-webkit-tap-highlight-color:transparent;height:48px;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:var(--mdc-list-side-padding, 16px);padding-right:var(--mdc-list-side-padding, 16px);outline:none;height:48px;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host:focus{outline:none}:host([activated]){color:#6200ee;color:var(--mdc-theme-primary, #6200ee);--mdc-ripple-color: var(--mdc-theme-primary, #6200ee)}:host([activated]) .mdc-list-item__graphic{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host([activated]) .fake-activated-ripple::before{position:absolute;display:block;top:0;bottom:0;left:0;right:0;width:100%;height:100%;pointer-events:none;z-index:1;content:"";opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12);background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-list-item__graphic{flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;display:inline-flex}.mdc-list-item__graphic ::slotted(*){flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;width:100%;height:100%;text-align:center}.mdc-list-item__meta{width:var(--mdc-list-item-meta-size, 24px);height:var(--mdc-list-item-meta-size, 24px);margin-left:auto;margin-right:0;color:rgba(0,0,0,.38);color:var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38))}.mdc-list-item__meta.multi{width:auto}.mdc-list-item__meta ::slotted(*){width:var(--mdc-list-item-meta-size, 24px);line-height:var(--mdc-list-item-meta-size, 24px)}.mdc-list-item__meta ::slotted(.material-icons),.mdc-list-item__meta ::slotted(mwc-icon){line-height:var(--mdc-list-item-meta-size, 24px) !important}.mdc-list-item__meta ::slotted(:not(.material-icons):not(mwc-icon)){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit)}:host[dir=rtl] .mdc-list-item__meta,[dir=rtl] :host .mdc-list-item__meta{margin-left:0;margin-right:auto}.mdc-list-item__meta ::slotted(*){width:100%;height:100%}.mdc-list-item__text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-list-item__text ::slotted([for]),.mdc-list-item__text[for]{pointer-events:none}.mdc-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;margin-bottom:-20px;display:block}.mdc-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item__secondary-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;display:block}.mdc-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-list--dense .mdc-list-item__secondary-text{font-size:inherit}* ::slotted(a),a{color:inherit;text-decoration:none}:host([twoline]){height:72px}:host([twoline]) .mdc-list-item__text{align-self:flex-start}:host([disabled]),:host([noninteractive]){cursor:default;pointer-events:none}:host([disabled]) .mdc-list-item__text ::slotted(*){opacity:.38}:host([disabled]) .mdc-list-item__text ::slotted(*),:host([disabled]) .mdc-list-item__primary-text ::slotted(*),:host([disabled]) .mdc-list-item__secondary-text ::slotted(*){color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-list-item__secondary-text ::slotted(*){color:rgba(0,0,0,.54);color:var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54))}.mdc-list-item__graphic ::slotted(*){background-color:transparent;color:rgba(0,0,0,.38);color:var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38))}.mdc-list-group__subheader ::slotted(*){color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host([graphic=avatar]) .mdc-list-item__graphic{width:var(--mdc-list-item-graphic-size, 40px);height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-list-item__graphic.multi{width:auto}:host([graphic=avatar]) .mdc-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 40px);line-height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-list-item__graphic ::slotted(.material-icons),:host([graphic=avatar]) .mdc-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 40px) !important}:host([graphic=avatar]) .mdc-list-item__graphic ::slotted(*){border-radius:50%}:host([graphic=avatar],[graphic=medium],[graphic=large],[graphic=control]) .mdc-list-item__graphic{margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 16px)}:host[dir=rtl] :host([graphic=avatar],[graphic=medium],[graphic=large],[graphic=control]) .mdc-list-item__graphic,[dir=rtl] :host :host([graphic=avatar],[graphic=medium],[graphic=large],[graphic=control]) .mdc-list-item__graphic{margin-left:var(--mdc-list-item-graphic-margin, 16px);margin-right:0}:host([graphic=icon]) .mdc-list-item__graphic{width:var(--mdc-list-item-graphic-size, 24px);height:var(--mdc-list-item-graphic-size, 24px);margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 32px)}:host([graphic=icon]) .mdc-list-item__graphic.multi{width:auto}:host([graphic=icon]) .mdc-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 24px);line-height:var(--mdc-list-item-graphic-size, 24px)}:host([graphic=icon]) .mdc-list-item__graphic ::slotted(.material-icons),:host([graphic=icon]) .mdc-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 24px) !important}:host[dir=rtl] :host([graphic=icon]) .mdc-list-item__graphic,[dir=rtl] :host :host([graphic=icon]) .mdc-list-item__graphic{margin-left:var(--mdc-list-item-graphic-margin, 32px);margin-right:0}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:56px}:host([graphic=medium]:not([twoLine])),:host([graphic=large]:not([twoLine])){height:72px}:host([graphic=medium]) .mdc-list-item__graphic,:host([graphic=large]) .mdc-list-item__graphic{width:var(--mdc-list-item-graphic-size, 56px);height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-list-item__graphic.multi,:host([graphic=large]) .mdc-list-item__graphic.multi{width:auto}:host([graphic=medium]) .mdc-list-item__graphic ::slotted(*),:host([graphic=large]) .mdc-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 56px);line-height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-list-item__graphic ::slotted(.material-icons),:host([graphic=medium]) .mdc-list-item__graphic ::slotted(mwc-icon),:host([graphic=large]) .mdc-list-item__graphic ::slotted(.material-icons),:host([graphic=large]) .mdc-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 56px) !important}:host([graphic=large]){padding-left:0px}`
/**
@license
Copyright 2020 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/;let gt=class extends ht{};gt.styles=ut,gt=t([m("mwc-list-item")],gt);class _t extends g{render(){return d`<slot></slot>`}}t([a({type:Object})],_t.prototype,"span",void 0),t([a({type:Number})],_t.prototype,"order",void 0),t([a({type:String})],_t.prototype,"align",void 0);class bt extends g{constructor(){super(),this.inner=!1,this.fixedColumnWidth=!1;new MutationObserver(t=>{for(const e of t)"childList"===e.type&&e.addedNodes&&e.addedNodes.length>0&&this.requestUpdate()}).observe(this,{childList:!0})}removeCell(t){const e=t.target;0==e.assignedElements().length&&e.parentNode.remove()}generateCellClasses(t){const e=["mdc-layout-grid__cell"];if(t instanceof _t){if(t.span){const a=t.span;null!==a&&"object"==typeof a?Object.entries(a).forEach(t=>{e.push(" mdc-layout-grid__cell--span-"+t[1]+"-"+t[0])}):e.push(" mdc-layout-grid__cell--span-"+a)}t.order&&e.push(" mdc-layout-grid__cell--order-"+t.order),t.align&&e.push(" mdc-layout-grid__cell--align-"+t.align)}return e.join(" ")}render(){return this.inner?d`
        <div class="mdc-layout-grid__inner ${this.fixedColumnWidth?"mdc-layout-grid--fixed-column-width":""} ${this.position?"mdc-layout-grid--align-"+this.position:""}">
            ${Array.from(this.children).map((t,e)=>(t.setAttribute("slot","slot"+e),d`<div class="${this.generateCellClasses(t)}" ><slot name="slot${e}" @slotchange=${t=>this.removeCell(t)}></slot></div>`))}
        </div>`:d`
        <div class="mdc-layout-grid ${this.fixedColumnWidth?"mdc-layout-grid--fixed-column-width":""} ${this.position?"mdc-layout-grid--align-"+this.position:""}">
          <div class="mdc-layout-grid__inner">
            ${Array.from(this.children).map((t,e)=>(t.setAttribute("slot","slot"+e),d`<div class="${this.generateCellClasses(t)}" ><slot name="slot${e}" @slotchange=${t=>this.removeCell(t)}></slot></div>`))}
          </div>
        </div>`}}t([a({type:Boolean,reflect:!0})],bt.prototype,"inner",void 0),t([a({type:Boolean,reflect:!0})],bt.prototype,"fixedColumnWidth",void 0),t([a({type:String})],bt.prototype,"position",void 0);
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
const ft=p`:root{--mdc-layout-grid-margin-desktop: 24px;--mdc-layout-grid-gutter-desktop: 24px;--mdc-layout-grid-column-width-desktop: 72px;--mdc-layout-grid-margin-tablet: 16px;--mdc-layout-grid-gutter-tablet: 16px;--mdc-layout-grid-column-width-tablet: 72px;--mdc-layout-grid-margin-phone: 16px;--mdc-layout-grid-gutter-phone: 16px;--mdc-layout-grid-column-width-phone: 72px}@media(min-width: 840px){.mdc-layout-grid{box-sizing:border-box;margin:0 auto;padding:24px;padding:var(--mdc-layout-grid-margin-desktop, 24px)}}@media(min-width: 480px)and (max-width: 839px){.mdc-layout-grid{box-sizing:border-box;margin:0 auto;padding:16px;padding:var(--mdc-layout-grid-margin-tablet, 16px)}}@media(max-width: 479px){.mdc-layout-grid{box-sizing:border-box;margin:0 auto;padding:16px;padding:var(--mdc-layout-grid-margin-phone, 16px)}}@media(min-width: 840px){.mdc-layout-grid__inner{display:flex;flex-flow:row wrap;align-items:stretch;margin:-12px;margin:calc(var(--mdc-layout-grid-gutter-desktop, 24px) / 2 * -1)}@supports(display: grid){.mdc-layout-grid__inner{display:grid;margin:0;grid-gap:24px;grid-gap:var(--mdc-layout-grid-gutter-desktop, 24px);grid-template-columns:repeat(12, minmax(0, 1fr))}}}@media(min-width: 480px)and (max-width: 839px){.mdc-layout-grid__inner{display:flex;flex-flow:row wrap;align-items:stretch;margin:-8px;margin:calc(var(--mdc-layout-grid-gutter-tablet, 16px) / 2 * -1)}@supports(display: grid){.mdc-layout-grid__inner{display:grid;margin:0;grid-gap:16px;grid-gap:var(--mdc-layout-grid-gutter-tablet, 16px);grid-template-columns:repeat(8, minmax(0, 1fr))}}}@media(max-width: 479px){.mdc-layout-grid__inner{display:flex;flex-flow:row wrap;align-items:stretch;margin:-8px;margin:calc(var(--mdc-layout-grid-gutter-phone, 16px) / 2 * -1)}@supports(display: grid){.mdc-layout-grid__inner{display:grid;margin:0;grid-gap:16px;grid-gap:var(--mdc-layout-grid-gutter-phone, 16px);grid-template-columns:repeat(4, minmax(0, 1fr))}}}@media(min-width: 840px){.mdc-layout-grid__cell{width:calc(33.3333333333% - 24px);width:calc(33.3333333333% - var(--mdc-layout-grid-gutter-desktop, 24px));box-sizing:border-box;margin:12px;margin:calc(var(--mdc-layout-grid-gutter-desktop, 24px) / 2)}@supports(display: grid){.mdc-layout-grid__cell{width:auto;grid-column-end:span 4}}@supports(display: grid){.mdc-layout-grid__cell{margin:0}}.mdc-layout-grid__cell--span-1,.mdc-layout-grid__cell--span-1-desktop{width:calc(8.3333333333% - 24px);width:calc(8.3333333333% - var(--mdc-layout-grid-gutter-desktop, 24px))}@supports(display: grid){.mdc-layout-grid__cell--span-1,.mdc-layout-grid__cell--span-1-desktop{width:auto;grid-column-end:span 1}}.mdc-layout-grid__cell--span-2,.mdc-layout-grid__cell--span-2-desktop{width:calc(16.6666666667% - 24px);width:calc(16.6666666667% - var(--mdc-layout-grid-gutter-desktop, 24px))}@supports(display: grid){.mdc-layout-grid__cell--span-2,.mdc-layout-grid__cell--span-2-desktop{width:auto;grid-column-end:span 2}}.mdc-layout-grid__cell--span-3,.mdc-layout-grid__cell--span-3-desktop{width:calc(25% - 24px);width:calc(25% - var(--mdc-layout-grid-gutter-desktop, 24px))}@supports(display: grid){.mdc-layout-grid__cell--span-3,.mdc-layout-grid__cell--span-3-desktop{width:auto;grid-column-end:span 3}}.mdc-layout-grid__cell--span-4,.mdc-layout-grid__cell--span-4-desktop{width:calc(33.3333333333% - 24px);width:calc(33.3333333333% - var(--mdc-layout-grid-gutter-desktop, 24px))}@supports(display: grid){.mdc-layout-grid__cell--span-4,.mdc-layout-grid__cell--span-4-desktop{width:auto;grid-column-end:span 4}}.mdc-layout-grid__cell--span-5,.mdc-layout-grid__cell--span-5-desktop{width:calc(41.6666666667% - 24px);width:calc(41.6666666667% - var(--mdc-layout-grid-gutter-desktop, 24px))}@supports(display: grid){.mdc-layout-grid__cell--span-5,.mdc-layout-grid__cell--span-5-desktop{width:auto;grid-column-end:span 5}}.mdc-layout-grid__cell--span-6,.mdc-layout-grid__cell--span-6-desktop{width:calc(50% - 24px);width:calc(50% - var(--mdc-layout-grid-gutter-desktop, 24px))}@supports(display: grid){.mdc-layout-grid__cell--span-6,.mdc-layout-grid__cell--span-6-desktop{width:auto;grid-column-end:span 6}}.mdc-layout-grid__cell--span-7,.mdc-layout-grid__cell--span-7-desktop{width:calc(58.3333333333% - 24px);width:calc(58.3333333333% - var(--mdc-layout-grid-gutter-desktop, 24px))}@supports(display: grid){.mdc-layout-grid__cell--span-7,.mdc-layout-grid__cell--span-7-desktop{width:auto;grid-column-end:span 7}}.mdc-layout-grid__cell--span-8,.mdc-layout-grid__cell--span-8-desktop{width:calc(66.6666666667% - 24px);width:calc(66.6666666667% - var(--mdc-layout-grid-gutter-desktop, 24px))}@supports(display: grid){.mdc-layout-grid__cell--span-8,.mdc-layout-grid__cell--span-8-desktop{width:auto;grid-column-end:span 8}}.mdc-layout-grid__cell--span-9,.mdc-layout-grid__cell--span-9-desktop{width:calc(75% - 24px);width:calc(75% - var(--mdc-layout-grid-gutter-desktop, 24px))}@supports(display: grid){.mdc-layout-grid__cell--span-9,.mdc-layout-grid__cell--span-9-desktop{width:auto;grid-column-end:span 9}}.mdc-layout-grid__cell--span-10,.mdc-layout-grid__cell--span-10-desktop{width:calc(83.3333333333% - 24px);width:calc(83.3333333333% - var(--mdc-layout-grid-gutter-desktop, 24px))}@supports(display: grid){.mdc-layout-grid__cell--span-10,.mdc-layout-grid__cell--span-10-desktop{width:auto;grid-column-end:span 10}}.mdc-layout-grid__cell--span-11,.mdc-layout-grid__cell--span-11-desktop{width:calc(91.6666666667% - 24px);width:calc(91.6666666667% - var(--mdc-layout-grid-gutter-desktop, 24px))}@supports(display: grid){.mdc-layout-grid__cell--span-11,.mdc-layout-grid__cell--span-11-desktop{width:auto;grid-column-end:span 11}}.mdc-layout-grid__cell--span-12,.mdc-layout-grid__cell--span-12-desktop{width:calc(100% - 24px);width:calc(100% - var(--mdc-layout-grid-gutter-desktop, 24px))}@supports(display: grid){.mdc-layout-grid__cell--span-12,.mdc-layout-grid__cell--span-12-desktop{width:auto;grid-column-end:span 12}}}@media(min-width: 480px)and (max-width: 839px){.mdc-layout-grid__cell{width:calc(50% - 16px);width:calc(50% - var(--mdc-layout-grid-gutter-tablet, 16px));box-sizing:border-box;margin:8px;margin:calc(var(--mdc-layout-grid-gutter-tablet, 16px) / 2)}@supports(display: grid){.mdc-layout-grid__cell{width:auto;grid-column-end:span 4}}@supports(display: grid){.mdc-layout-grid__cell{margin:0}}.mdc-layout-grid__cell--span-1,.mdc-layout-grid__cell--span-1-tablet{width:calc(12.5% - 16px);width:calc(12.5% - var(--mdc-layout-grid-gutter-tablet, 16px))}@supports(display: grid){.mdc-layout-grid__cell--span-1,.mdc-layout-grid__cell--span-1-tablet{width:auto;grid-column-end:span 1}}.mdc-layout-grid__cell--span-2,.mdc-layout-grid__cell--span-2-tablet{width:calc(25% - 16px);width:calc(25% - var(--mdc-layout-grid-gutter-tablet, 16px))}@supports(display: grid){.mdc-layout-grid__cell--span-2,.mdc-layout-grid__cell--span-2-tablet{width:auto;grid-column-end:span 2}}.mdc-layout-grid__cell--span-3,.mdc-layout-grid__cell--span-3-tablet{width:calc(37.5% - 16px);width:calc(37.5% - var(--mdc-layout-grid-gutter-tablet, 16px))}@supports(display: grid){.mdc-layout-grid__cell--span-3,.mdc-layout-grid__cell--span-3-tablet{width:auto;grid-column-end:span 3}}.mdc-layout-grid__cell--span-4,.mdc-layout-grid__cell--span-4-tablet{width:calc(50% - 16px);width:calc(50% - var(--mdc-layout-grid-gutter-tablet, 16px))}@supports(display: grid){.mdc-layout-grid__cell--span-4,.mdc-layout-grid__cell--span-4-tablet{width:auto;grid-column-end:span 4}}.mdc-layout-grid__cell--span-5,.mdc-layout-grid__cell--span-5-tablet{width:calc(62.5% - 16px);width:calc(62.5% - var(--mdc-layout-grid-gutter-tablet, 16px))}@supports(display: grid){.mdc-layout-grid__cell--span-5,.mdc-layout-grid__cell--span-5-tablet{width:auto;grid-column-end:span 5}}.mdc-layout-grid__cell--span-6,.mdc-layout-grid__cell--span-6-tablet{width:calc(75% - 16px);width:calc(75% - var(--mdc-layout-grid-gutter-tablet, 16px))}@supports(display: grid){.mdc-layout-grid__cell--span-6,.mdc-layout-grid__cell--span-6-tablet{width:auto;grid-column-end:span 6}}.mdc-layout-grid__cell--span-7,.mdc-layout-grid__cell--span-7-tablet{width:calc(87.5% - 16px);width:calc(87.5% - var(--mdc-layout-grid-gutter-tablet, 16px))}@supports(display: grid){.mdc-layout-grid__cell--span-7,.mdc-layout-grid__cell--span-7-tablet{width:auto;grid-column-end:span 7}}.mdc-layout-grid__cell--span-8,.mdc-layout-grid__cell--span-8-tablet{width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-tablet, 16px))}@supports(display: grid){.mdc-layout-grid__cell--span-8,.mdc-layout-grid__cell--span-8-tablet{width:auto;grid-column-end:span 8}}.mdc-layout-grid__cell--span-9,.mdc-layout-grid__cell--span-9-tablet{width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-tablet, 16px))}@supports(display: grid){.mdc-layout-grid__cell--span-9,.mdc-layout-grid__cell--span-9-tablet{width:auto;grid-column-end:span 8}}.mdc-layout-grid__cell--span-10,.mdc-layout-grid__cell--span-10-tablet{width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-tablet, 16px))}@supports(display: grid){.mdc-layout-grid__cell--span-10,.mdc-layout-grid__cell--span-10-tablet{width:auto;grid-column-end:span 8}}.mdc-layout-grid__cell--span-11,.mdc-layout-grid__cell--span-11-tablet{width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-tablet, 16px))}@supports(display: grid){.mdc-layout-grid__cell--span-11,.mdc-layout-grid__cell--span-11-tablet{width:auto;grid-column-end:span 8}}.mdc-layout-grid__cell--span-12,.mdc-layout-grid__cell--span-12-tablet{width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-tablet, 16px))}@supports(display: grid){.mdc-layout-grid__cell--span-12,.mdc-layout-grid__cell--span-12-tablet{width:auto;grid-column-end:span 8}}}@media(max-width: 479px){.mdc-layout-grid__cell{width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-phone, 16px));box-sizing:border-box;margin:8px;margin:calc(var(--mdc-layout-grid-gutter-phone, 16px) / 2)}@supports(display: grid){.mdc-layout-grid__cell{width:auto;grid-column-end:span 4}}@supports(display: grid){.mdc-layout-grid__cell{margin:0}}.mdc-layout-grid__cell--span-1,.mdc-layout-grid__cell--span-1-phone{width:calc(25% - 16px);width:calc(25% - var(--mdc-layout-grid-gutter-phone, 16px))}@supports(display: grid){.mdc-layout-grid__cell--span-1,.mdc-layout-grid__cell--span-1-phone{width:auto;grid-column-end:span 1}}.mdc-layout-grid__cell--span-2,.mdc-layout-grid__cell--span-2-phone{width:calc(50% - 16px);width:calc(50% - var(--mdc-layout-grid-gutter-phone, 16px))}@supports(display: grid){.mdc-layout-grid__cell--span-2,.mdc-layout-grid__cell--span-2-phone{width:auto;grid-column-end:span 2}}.mdc-layout-grid__cell--span-3,.mdc-layout-grid__cell--span-3-phone{width:calc(75% - 16px);width:calc(75% - var(--mdc-layout-grid-gutter-phone, 16px))}@supports(display: grid){.mdc-layout-grid__cell--span-3,.mdc-layout-grid__cell--span-3-phone{width:auto;grid-column-end:span 3}}.mdc-layout-grid__cell--span-4,.mdc-layout-grid__cell--span-4-phone{width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-phone, 16px))}@supports(display: grid){.mdc-layout-grid__cell--span-4,.mdc-layout-grid__cell--span-4-phone{width:auto;grid-column-end:span 4}}.mdc-layout-grid__cell--span-5,.mdc-layout-grid__cell--span-5-phone{width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-phone, 16px))}@supports(display: grid){.mdc-layout-grid__cell--span-5,.mdc-layout-grid__cell--span-5-phone{width:auto;grid-column-end:span 4}}.mdc-layout-grid__cell--span-6,.mdc-layout-grid__cell--span-6-phone{width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-phone, 16px))}@supports(display: grid){.mdc-layout-grid__cell--span-6,.mdc-layout-grid__cell--span-6-phone{width:auto;grid-column-end:span 4}}.mdc-layout-grid__cell--span-7,.mdc-layout-grid__cell--span-7-phone{width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-phone, 16px))}@supports(display: grid){.mdc-layout-grid__cell--span-7,.mdc-layout-grid__cell--span-7-phone{width:auto;grid-column-end:span 4}}.mdc-layout-grid__cell--span-8,.mdc-layout-grid__cell--span-8-phone{width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-phone, 16px))}@supports(display: grid){.mdc-layout-grid__cell--span-8,.mdc-layout-grid__cell--span-8-phone{width:auto;grid-column-end:span 4}}.mdc-layout-grid__cell--span-9,.mdc-layout-grid__cell--span-9-phone{width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-phone, 16px))}@supports(display: grid){.mdc-layout-grid__cell--span-9,.mdc-layout-grid__cell--span-9-phone{width:auto;grid-column-end:span 4}}.mdc-layout-grid__cell--span-10,.mdc-layout-grid__cell--span-10-phone{width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-phone, 16px))}@supports(display: grid){.mdc-layout-grid__cell--span-10,.mdc-layout-grid__cell--span-10-phone{width:auto;grid-column-end:span 4}}.mdc-layout-grid__cell--span-11,.mdc-layout-grid__cell--span-11-phone{width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-phone, 16px))}@supports(display: grid){.mdc-layout-grid__cell--span-11,.mdc-layout-grid__cell--span-11-phone{width:auto;grid-column-end:span 4}}.mdc-layout-grid__cell--span-12,.mdc-layout-grid__cell--span-12-phone{width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-phone, 16px))}@supports(display: grid){.mdc-layout-grid__cell--span-12,.mdc-layout-grid__cell--span-12-phone{width:auto;grid-column-end:span 4}}}.mdc-layout-grid__cell--order-1{order:1}.mdc-layout-grid__cell--order-2{order:2}.mdc-layout-grid__cell--order-3{order:3}.mdc-layout-grid__cell--order-4{order:4}.mdc-layout-grid__cell--order-5{order:5}.mdc-layout-grid__cell--order-6{order:6}.mdc-layout-grid__cell--order-7{order:7}.mdc-layout-grid__cell--order-8{order:8}.mdc-layout-grid__cell--order-9{order:9}.mdc-layout-grid__cell--order-10{order:10}.mdc-layout-grid__cell--order-11{order:11}.mdc-layout-grid__cell--order-12{order:12}.mdc-layout-grid__cell--align-top{align-self:flex-start}@supports(display: grid){.mdc-layout-grid__cell--align-top{align-self:start}}.mdc-layout-grid__cell--align-middle{align-self:center}.mdc-layout-grid__cell--align-bottom{align-self:flex-end}@supports(display: grid){.mdc-layout-grid__cell--align-bottom{align-self:end}}@media(min-width: 840px){.mdc-layout-grid--fixed-column-width{width:1176px;width:calc( var(--mdc-layout-grid-column-width-desktop, 72px) * 12 + var(--mdc-layout-grid-gutter-desktop, 24px) * 11 + var(--mdc-layout-grid-margin-desktop, 24px) * 2 )}}@media(min-width: 480px)and (max-width: 839px){.mdc-layout-grid--fixed-column-width{width:720px;width:calc( var(--mdc-layout-grid-column-width-tablet, 72px) * 8 + var(--mdc-layout-grid-gutter-tablet, 16px) * 7 + var(--mdc-layout-grid-margin-tablet, 16px) * 2 )}}@media(max-width: 479px){.mdc-layout-grid--fixed-column-width{width:368px;width:calc( var(--mdc-layout-grid-column-width-phone, 72px) * 4 + var(--mdc-layout-grid-gutter-phone, 16px) * 3 + var(--mdc-layout-grid-margin-phone, 16px) * 2 )}}.mdc-layout-grid--align-left{margin-right:auto;margin-left:0}.mdc-layout-grid--align-right{margin-right:0;margin-left:auto}div.mdc-layout-grid{background:var(--mwc-layout-grid-background, none);border:var(--mwc-layout-grid-border, none);max-width:var(--mwc-layout-grid-max-width, none)}div.mdc-layout-grid__inner{min-height:var(--mwc-layout-grid-min-height, none);height:var(--mwc-layout-grid-height, none);max-height:var(--mwc-layout-grid-max-height, none)}`
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
*/;let yt=class extends bt{};yt.styles=ft,yt=t([m("mwc-layout-grid")],yt);let xt=class extends _t{};xt=t([m("mwc-layout-grid-cell")],xt);
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
 */
var vt=function(){function t(t){void 0===t&&(t={}),this.adapter=t}return Object.defineProperty(t,"cssClasses",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{}},enumerable:!0,configurable:!0}),t.prototype.init=function(){},t.prototype.destroy=function(){},t}(),wt=function(){function t(t,e){for(var a=[],i=2;i<arguments.length;i++)a[i-2]=arguments[i];this.root=t,this.initialize.apply(this,f(a)),this.foundation=void 0===e?this.getDefaultFoundation():e,this.foundation.init(),this.initialSyncWithDOM()}return t.attachTo=function(e){return new t(e,new vt({}))},t.prototype.initialize=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]},t.prototype.getDefaultFoundation=function(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")},t.prototype.initialSyncWithDOM=function(){},t.prototype.destroy=function(){this.foundation.destroy()},t.prototype.listen=function(t,e,a){this.root.addEventListener(t,e,a)},t.prototype.unlisten=function(t,e,a){this.root.removeEventListener(t,e,a)},t.prototype.emit=function(t,e,a){var i;void 0===a&&(a=!1),"function"==typeof CustomEvent?i=new CustomEvent(t,{bubbles:a,detail:e}):(i=document.createEvent("CustomEvent")).initCustomEvent(t,a,!1,e),this.root.dispatchEvent(i)},t}(),kt={animationend:{cssProperty:"animation",prefixed:"webkitAnimationEnd",standard:"animationend"},animationiteration:{cssProperty:"animation",prefixed:"webkitAnimationIteration",standard:"animationiteration"},animationstart:{cssProperty:"animation",prefixed:"webkitAnimationStart",standard:"animationstart"},transitionend:{cssProperty:"transition",prefixed:"webkitTransitionEnd",standard:"transitionend"}};
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
 */function Ct(t,e){if(function(t){return Boolean(t.document)&&"function"==typeof t.document.createElement}(t)&&e in kt){var a=t.document.createElement("div"),i=kt[e],r=i.standard,o=i.prefixed;return i.cssProperty in a.style?r:o}return e}
/**
 * @license
 * Copyright 2019 Google Inc.
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
 */function Et(t){return void 0===t&&(t=window),!!function(t){void 0===t&&(t=window);var e=!1;try{var a={get passive(){return e=!0,!1}},i=function(){};t.document.addEventListener("test",i,a),t.document.removeEventListener("test",i,a)}catch(t){e=!1}return e}
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
 */(t)&&{passive:!0}}function At(t,e){if(t.closest)return t.closest(e);for(var a=t;a;){if(It(a,e))return a;a=a.parentElement}return null}function It(t,e){return(t.matches||t.webkitMatchesSelector||t.msMatchesSelector).call(t,e)}
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
 */var Rt,St={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},Tt={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},Nt={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300};
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
 */
var Dt=["touchstart","pointerdown","mousedown","keydown"],Ht=["touchend","pointerup","mouseup","contextmenu"],Ot=[],Lt=function(t){function e(a){var i=t.call(this,x(x({},e.defaultAdapter),a))||this;return i.activationAnimationHasEnded_=!1,i.activationTimer_=0,i.fgDeactivationRemovalTimer_=0,i.fgScale_="0",i.frame_={width:0,height:0},i.initialSize_=0,i.layoutFrame_=0,i.maxRadius_=0,i.unboundedCoords_={left:0,top:0},i.activationState_=i.defaultActivationState_(),i.activationTimerCallback_=function(){i.activationAnimationHasEnded_=!0,i.runDeactivationUXLogicIfReady_()},i.activateHandler_=function(t){return i.activate_(t)},i.deactivateHandler_=function(){return i.deactivate_()},i.focusHandler_=function(){return i.handleFocus()},i.blurHandler_=function(){return i.handleBlur()},i.resizeHandler_=function(){return i.layout()},i}return y(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return St},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Tt},enumerable:!0,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Nt},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!0,configurable:!0}),e.prototype.init=function(){var t=this,a=this.supportsPressRipple_();if(this.registerRootHandlers_(a),a){var i=e.cssClasses,r=i.ROOT,o=i.UNBOUNDED;requestAnimationFrame((function(){t.adapter.addClass(r),t.adapter.isUnbounded()&&(t.adapter.addClass(o),t.layoutInternal_())}))}},e.prototype.destroy=function(){var t=this;if(this.supportsPressRipple_()){this.activationTimer_&&(clearTimeout(this.activationTimer_),this.activationTimer_=0,this.adapter.removeClass(e.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer_&&(clearTimeout(this.fgDeactivationRemovalTimer_),this.fgDeactivationRemovalTimer_=0,this.adapter.removeClass(e.cssClasses.FG_DEACTIVATION));var a=e.cssClasses,i=a.ROOT,r=a.UNBOUNDED;requestAnimationFrame((function(){t.adapter.removeClass(i),t.adapter.removeClass(r),t.removeCssVars_()}))}this.deregisterRootHandlers_(),this.deregisterDeactivationHandlers_()},e.prototype.activate=function(t){this.activate_(t)},e.prototype.deactivate=function(){this.deactivate_()},e.prototype.layout=function(){var t=this;this.layoutFrame_&&cancelAnimationFrame(this.layoutFrame_),this.layoutFrame_=requestAnimationFrame((function(){t.layoutInternal_(),t.layoutFrame_=0}))},e.prototype.setUnbounded=function(t){var a=e.cssClasses.UNBOUNDED;t?this.adapter.addClass(a):this.adapter.removeClass(a)},e.prototype.handleFocus=function(){var t=this;requestAnimationFrame((function(){return t.adapter.addClass(e.cssClasses.BG_FOCUSED)}))},e.prototype.handleBlur=function(){var t=this;requestAnimationFrame((function(){return t.adapter.removeClass(e.cssClasses.BG_FOCUSED)}))},e.prototype.supportsPressRipple_=function(){return this.adapter.browserSupportsCssVars()},e.prototype.defaultActivationState_=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},e.prototype.registerRootHandlers_=function(t){var e=this;t&&(Dt.forEach((function(t){e.adapter.registerInteractionHandler(t,e.activateHandler_)})),this.adapter.isUnbounded()&&this.adapter.registerResizeHandler(this.resizeHandler_)),this.adapter.registerInteractionHandler("focus",this.focusHandler_),this.adapter.registerInteractionHandler("blur",this.blurHandler_)},e.prototype.registerDeactivationHandlers_=function(t){var e=this;"keydown"===t.type?this.adapter.registerInteractionHandler("keyup",this.deactivateHandler_):Ht.forEach((function(t){e.adapter.registerDocumentInteractionHandler(t,e.deactivateHandler_)}))},e.prototype.deregisterRootHandlers_=function(){var t=this;Dt.forEach((function(e){t.adapter.deregisterInteractionHandler(e,t.activateHandler_)})),this.adapter.deregisterInteractionHandler("focus",this.focusHandler_),this.adapter.deregisterInteractionHandler("blur",this.blurHandler_),this.adapter.isUnbounded()&&this.adapter.deregisterResizeHandler(this.resizeHandler_)},e.prototype.deregisterDeactivationHandlers_=function(){var t=this;this.adapter.deregisterInteractionHandler("keyup",this.deactivateHandler_),Ht.forEach((function(e){t.adapter.deregisterDocumentInteractionHandler(e,t.deactivateHandler_)}))},e.prototype.removeCssVars_=function(){var t=this,a=e.strings;Object.keys(a).forEach((function(e){0===e.indexOf("VAR_")&&t.adapter.updateCssVariable(a[e],null)}))},e.prototype.activate_=function(t){var e=this;if(!this.adapter.isSurfaceDisabled()){var a=this.activationState_;if(!a.isActivated){var i=this.previousActivationEvent_;if(!(i&&void 0!==t&&i.type!==t.type))a.isActivated=!0,a.isProgrammatic=void 0===t,a.activationEvent=t,a.wasActivatedByPointer=!a.isProgrammatic&&(void 0!==t&&("mousedown"===t.type||"touchstart"===t.type||"pointerdown"===t.type)),void 0!==t&&Ot.length>0&&Ot.some((function(t){return e.adapter.containsEventTarget(t)}))?this.resetActivationState_():(void 0!==t&&(Ot.push(t.target),this.registerDeactivationHandlers_(t)),a.wasElementMadeActive=this.checkElementMadeActive_(t),a.wasElementMadeActive&&this.animateActivation_(),requestAnimationFrame((function(){Ot=[],a.wasElementMadeActive||void 0===t||" "!==t.key&&32!==t.keyCode||(a.wasElementMadeActive=e.checkElementMadeActive_(t),a.wasElementMadeActive&&e.animateActivation_()),a.wasElementMadeActive||(e.activationState_=e.defaultActivationState_())})))}}},e.prototype.checkElementMadeActive_=function(t){return void 0===t||"keydown"!==t.type||this.adapter.isSurfaceActive()},e.prototype.animateActivation_=function(){var t=this,a=e.strings,i=a.VAR_FG_TRANSLATE_START,r=a.VAR_FG_TRANSLATE_END,o=e.cssClasses,n=o.FG_DEACTIVATION,d=o.FG_ACTIVATION,c=e.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal_();var s="",l="";if(!this.adapter.isUnbounded()){var p=this.getFgTranslationCoordinates_(),m=p.startPoint,h=p.endPoint;s=m.x+"px, "+m.y+"px",l=h.x+"px, "+h.y+"px"}this.adapter.updateCssVariable(i,s),this.adapter.updateCssVariable(r,l),clearTimeout(this.activationTimer_),clearTimeout(this.fgDeactivationRemovalTimer_),this.rmBoundedActivationClasses_(),this.adapter.removeClass(n),this.adapter.computeBoundingRect(),this.adapter.addClass(d),this.activationTimer_=setTimeout((function(){return t.activationTimerCallback_()}),c)},e.prototype.getFgTranslationCoordinates_=function(){var t,e=this.activationState_,a=e.activationEvent;return{startPoint:t={x:(t=e.wasActivatedByPointer?function(t,e,a){if(!t)return{x:0,y:0};var i,r,o=e.x,n=e.y,d=o+a.left,c=n+a.top;if("touchstart"===t.type){var s=t;i=s.changedTouches[0].pageX-d,r=s.changedTouches[0].pageY-c}else{var l=t;i=l.pageX-d,r=l.pageY-c}return{x:i,y:r}}(a,this.adapter.getWindowPageOffset(),this.adapter.computeBoundingRect()):{x:this.frame_.width/2,y:this.frame_.height/2}).x-this.initialSize_/2,y:t.y-this.initialSize_/2},endPoint:{x:this.frame_.width/2-this.initialSize_/2,y:this.frame_.height/2-this.initialSize_/2}}},e.prototype.runDeactivationUXLogicIfReady_=function(){var t=this,a=e.cssClasses.FG_DEACTIVATION,i=this.activationState_,r=i.hasDeactivationUXRun,o=i.isActivated;(r||!o)&&this.activationAnimationHasEnded_&&(this.rmBoundedActivationClasses_(),this.adapter.addClass(a),this.fgDeactivationRemovalTimer_=setTimeout((function(){t.adapter.removeClass(a)}),Nt.FG_DEACTIVATION_MS))},e.prototype.rmBoundedActivationClasses_=function(){var t=e.cssClasses.FG_ACTIVATION;this.adapter.removeClass(t),this.activationAnimationHasEnded_=!1,this.adapter.computeBoundingRect()},e.prototype.resetActivationState_=function(){var t=this;this.previousActivationEvent_=this.activationState_.activationEvent,this.activationState_=this.defaultActivationState_(),setTimeout((function(){return t.previousActivationEvent_=void 0}),e.numbers.TAP_DELAY_MS)},e.prototype.deactivate_=function(){var t=this,e=this.activationState_;if(e.isActivated){var a=x({},e);e.isProgrammatic?(requestAnimationFrame((function(){return t.animateDeactivation_(a)})),this.resetActivationState_()):(this.deregisterDeactivationHandlers_(),requestAnimationFrame((function(){t.activationState_.hasDeactivationUXRun=!0,t.animateDeactivation_(a),t.resetActivationState_()})))}},e.prototype.animateDeactivation_=function(t){var e=t.wasActivatedByPointer,a=t.wasElementMadeActive;(e||a)&&this.runDeactivationUXLogicIfReady_()},e.prototype.layoutInternal_=function(){var t=this;this.frame_=this.adapter.computeBoundingRect();var a=Math.max(this.frame_.height,this.frame_.width);this.maxRadius_=this.adapter.isUnbounded()?a:Math.sqrt(Math.pow(t.frame_.width,2)+Math.pow(t.frame_.height,2))+e.numbers.PADDING;var i=Math.floor(a*e.numbers.INITIAL_ORIGIN_SCALE);this.adapter.isUnbounded()&&i%2!=0?this.initialSize_=i-1:this.initialSize_=i,this.fgScale_=""+this.maxRadius_/this.initialSize_,this.updateLayoutCssVars_()},e.prototype.updateLayoutCssVars_=function(){var t=e.strings,a=t.VAR_FG_SIZE,i=t.VAR_LEFT,r=t.VAR_TOP,o=t.VAR_FG_SCALE;this.adapter.updateCssVariable(a,this.initialSize_+"px"),this.adapter.updateCssVariable(o,this.fgScale_),this.adapter.isUnbounded()&&(this.unboundedCoords_={left:Math.round(this.frame_.width/2-this.initialSize_/2),top:Math.round(this.frame_.height/2-this.initialSize_/2)},this.adapter.updateCssVariable(i,this.unboundedCoords_.left+"px"),this.adapter.updateCssVariable(r,this.unboundedCoords_.top+"px"))},e}(vt),Ft=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.disabled=!1,e}return y(e,t),e.attachTo=function(t,a){void 0===a&&(a={isUnbounded:void 0});var i=new e(t);return void 0!==a.isUnbounded&&(i.unbounded=a.isUnbounded),i},e.createAdapter=function(t){return{addClass:function(e){return t.root.classList.add(e)},browserSupportsCssVars:function(){return function(t,e){void 0===e&&(e=!1);var a,i=t.CSS;if("boolean"==typeof Rt&&!e)return Rt;if(!i||"function"!=typeof i.supports)return!1;var r=i.supports("--css-vars","yes"),o=i.supports("(--css-vars: yes)")&&i.supports("color","#00000000");return a=r||o,e||(Rt=a),a}(window)},computeBoundingRect:function(){return t.root.getBoundingClientRect()},containsEventTarget:function(e){return t.root.contains(e)},deregisterDocumentInteractionHandler:function(t,e){return document.documentElement.removeEventListener(t,e,Et())},deregisterInteractionHandler:function(e,a){return t.root.removeEventListener(e,a,Et())},deregisterResizeHandler:function(t){return window.removeEventListener("resize",t)},getWindowPageOffset:function(){return{x:window.pageXOffset,y:window.pageYOffset}},isSurfaceActive:function(){return It(t.root,":active")},isSurfaceDisabled:function(){return Boolean(t.disabled)},isUnbounded:function(){return Boolean(t.unbounded)},registerDocumentInteractionHandler:function(t,e){return document.documentElement.addEventListener(t,e,Et())},registerInteractionHandler:function(e,a){return t.root.addEventListener(e,a,Et())},registerResizeHandler:function(t){return window.addEventListener("resize",t)},removeClass:function(e){return t.root.classList.remove(e)},updateCssVariable:function(e,a){return t.root.style.setProperty(e,a)}}},Object.defineProperty(e.prototype,"unbounded",{get:function(){return Boolean(this.unbounded_)},set:function(t){this.unbounded_=Boolean(t),this.setUnbounded_()},enumerable:!0,configurable:!0}),e.prototype.activate=function(){this.foundation.activate()},e.prototype.deactivate=function(){this.foundation.deactivate()},e.prototype.layout=function(){this.foundation.layout()},e.prototype.getDefaultFoundation=function(){return new Lt(e.createAdapter(this))},e.prototype.initialSyncWithDOM=function(){var t=this.root;this.unbounded="mdcRippleIsUnbounded"in t.dataset},e.prototype.setUnbounded_=function(){this.foundation.setUnbounded(Boolean(this.unbounded_))},e}(wt),zt={ANIM_CHECKED_INDETERMINATE:"mdc-checkbox--anim-checked-indeterminate",ANIM_CHECKED_UNCHECKED:"mdc-checkbox--anim-checked-unchecked",ANIM_INDETERMINATE_CHECKED:"mdc-checkbox--anim-indeterminate-checked",ANIM_INDETERMINATE_UNCHECKED:"mdc-checkbox--anim-indeterminate-unchecked",ANIM_UNCHECKED_CHECKED:"mdc-checkbox--anim-unchecked-checked",ANIM_UNCHECKED_INDETERMINATE:"mdc-checkbox--anim-unchecked-indeterminate",BACKGROUND:"mdc-checkbox__background",CHECKED:"mdc-checkbox--checked",CHECKMARK:"mdc-checkbox__checkmark",CHECKMARK_PATH:"mdc-checkbox__checkmark-path",DISABLED:"mdc-checkbox--disabled",INDETERMINATE:"mdc-checkbox--indeterminate",MIXEDMARK:"mdc-checkbox__mixedmark",NATIVE_CONTROL:"mdc-checkbox__native-control",ROOT:"mdc-checkbox",SELECTED:"mdc-checkbox--selected",UPGRADED:"mdc-checkbox--upgraded"},Bt={ARIA_CHECKED_ATTR:"aria-checked",ARIA_CHECKED_INDETERMINATE_VALUE:"mixed",DATA_INDETERMINATE_ATTR:"data-indeterminate",NATIVE_CONTROL_SELECTOR:".mdc-checkbox__native-control",TRANSITION_STATE_CHECKED:"checked",TRANSITION_STATE_INDETERMINATE:"indeterminate",TRANSITION_STATE_INIT:"init",TRANSITION_STATE_UNCHECKED:"unchecked"},Mt={ANIM_END_LATCH_MS:250},Ut=function(t){function e(a){var i=t.call(this,x(x({},e.defaultAdapter),a))||this;return i.currentCheckState_=Bt.TRANSITION_STATE_INIT,i.currentAnimationClass_="",i.animEndLatchTimer_=0,i.enableAnimationEndHandler_=!1,i}return y(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return zt},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Bt},enumerable:!0,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Mt},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},forceLayout:function(){},hasNativeControl:function(){return!1},isAttachedToDOM:function(){return!1},isChecked:function(){return!1},isIndeterminate:function(){return!1},removeClass:function(){},removeNativeControlAttr:function(){},setNativeControlAttr:function(){},setNativeControlDisabled:function(){}}},enumerable:!0,configurable:!0}),e.prototype.init=function(){this.currentCheckState_=this.determineCheckState_(),this.updateAriaChecked_(),this.adapter.addClass(zt.UPGRADED)},e.prototype.destroy=function(){clearTimeout(this.animEndLatchTimer_)},e.prototype.setDisabled=function(t){this.adapter.setNativeControlDisabled(t),t?this.adapter.addClass(zt.DISABLED):this.adapter.removeClass(zt.DISABLED)},e.prototype.handleAnimationEnd=function(){var t=this;this.enableAnimationEndHandler_&&(clearTimeout(this.animEndLatchTimer_),this.animEndLatchTimer_=setTimeout((function(){t.adapter.removeClass(t.currentAnimationClass_),t.enableAnimationEndHandler_=!1}),Mt.ANIM_END_LATCH_MS))},e.prototype.handleChange=function(){this.transitionCheckState_()},e.prototype.transitionCheckState_=function(){if(this.adapter.hasNativeControl()){var t=this.currentCheckState_,e=this.determineCheckState_();if(t!==e){this.updateAriaChecked_();var a=zt.SELECTED;e===Bt.TRANSITION_STATE_UNCHECKED?this.adapter.removeClass(a):this.adapter.addClass(a),this.currentAnimationClass_.length>0&&(clearTimeout(this.animEndLatchTimer_),this.adapter.forceLayout(),this.adapter.removeClass(this.currentAnimationClass_)),this.currentAnimationClass_=this.getTransitionAnimationClass_(t,e),this.currentCheckState_=e,this.adapter.isAttachedToDOM()&&this.currentAnimationClass_.length>0&&(this.adapter.addClass(this.currentAnimationClass_),this.enableAnimationEndHandler_=!0)}}},e.prototype.determineCheckState_=function(){var t=Bt.TRANSITION_STATE_INDETERMINATE,e=Bt.TRANSITION_STATE_CHECKED,a=Bt.TRANSITION_STATE_UNCHECKED;return this.adapter.isIndeterminate()?t:this.adapter.isChecked()?e:a},e.prototype.getTransitionAnimationClass_=function(t,a){var i=Bt.TRANSITION_STATE_INIT,r=Bt.TRANSITION_STATE_CHECKED,o=Bt.TRANSITION_STATE_UNCHECKED,n=e.cssClasses,d=n.ANIM_UNCHECKED_CHECKED,c=n.ANIM_UNCHECKED_INDETERMINATE,s=n.ANIM_CHECKED_UNCHECKED,l=n.ANIM_CHECKED_INDETERMINATE,p=n.ANIM_INDETERMINATE_CHECKED,m=n.ANIM_INDETERMINATE_UNCHECKED;switch(t){case i:return a===o?"":a===r?p:m;case o:return a===r?d:c;case r:return a===o?s:l;default:return a===r?p:m}},e.prototype.updateAriaChecked_=function(){this.adapter.isIndeterminate()?this.adapter.setNativeControlAttr(Bt.ARIA_CHECKED_ATTR,Bt.ARIA_CHECKED_INDETERMINATE_VALUE):this.adapter.removeNativeControlAttr(Bt.ARIA_CHECKED_ATTR)},e}(vt),Pt=["checked","indeterminate"],Vt=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.ripple_=e.createRipple_(),e}return y(e,t),e.attachTo=function(t){return new e(t)},Object.defineProperty(e.prototype,"ripple",{get:function(){return this.ripple_},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"checked",{get:function(){return this.nativeControl_.checked},set:function(t){this.nativeControl_.checked=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"indeterminate",{get:function(){return this.nativeControl_.indeterminate},set:function(t){this.nativeControl_.indeterminate=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"disabled",{get:function(){return this.nativeControl_.disabled},set:function(t){this.foundation.setDisabled(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"value",{get:function(){return this.nativeControl_.value},set:function(t){this.nativeControl_.value=t},enumerable:!0,configurable:!0}),e.prototype.initialize=function(){var t=Bt.DATA_INDETERMINATE_ATTR;this.nativeControl_.indeterminate="true"===this.nativeControl_.getAttribute(t),this.nativeControl_.removeAttribute(t)},e.prototype.initialSyncWithDOM=function(){var t=this;this.handleChange_=function(){return t.foundation.handleChange()},this.handleAnimationEnd_=function(){return t.foundation.handleAnimationEnd()},this.nativeControl_.addEventListener("change",this.handleChange_),this.listen(Ct(window,"animationend"),this.handleAnimationEnd_),this.installPropertyChangeHooks_()},e.prototype.destroy=function(){this.ripple_.destroy(),this.nativeControl_.removeEventListener("change",this.handleChange_),this.unlisten(Ct(window,"animationend"),this.handleAnimationEnd_),this.uninstallPropertyChangeHooks_(),t.prototype.destroy.call(this)},e.prototype.getDefaultFoundation=function(){var t=this;return new Ut({addClass:function(e){return t.root.classList.add(e)},forceLayout:function(){return t.root.offsetWidth},hasNativeControl:function(){return!!t.nativeControl_},isAttachedToDOM:function(){return Boolean(t.root.parentNode)},isChecked:function(){return t.checked},isIndeterminate:function(){return t.indeterminate},removeClass:function(e){t.root.classList.remove(e)},removeNativeControlAttr:function(e){t.nativeControl_.removeAttribute(e)},setNativeControlAttr:function(e,a){t.nativeControl_.setAttribute(e,a)},setNativeControlDisabled:function(e){t.nativeControl_.disabled=e}})},e.prototype.createRipple_=function(){var t=this,e=x(x({},Ft.createAdapter(this)),{deregisterInteractionHandler:function(e,a){return t.nativeControl_.removeEventListener(e,a,Et())},isSurfaceActive:function(){return It(t.nativeControl_,":active")},isUnbounded:function(){return!0},registerInteractionHandler:function(e,a){return t.nativeControl_.addEventListener(e,a,Et())}});return new Ft(this.root,new Lt(e))},e.prototype.installPropertyChangeHooks_=function(){var t=this,e=this.nativeControl_,a=Object.getPrototypeOf(e);Pt.forEach((function(i){var r=Object.getOwnPropertyDescriptor(a,i);if(jt(r)){var o=r.get,n={configurable:r.configurable,enumerable:r.enumerable,get:o,set:function(a){r.set.call(e,a),t.foundation.handleChange()}};Object.defineProperty(e,i,n)}}))},e.prototype.uninstallPropertyChangeHooks_=function(){var t=this.nativeControl_,e=Object.getPrototypeOf(t);Pt.forEach((function(a){var i=Object.getOwnPropertyDescriptor(e,a);jt(i)&&Object.defineProperty(t,a,i)}))},Object.defineProperty(e.prototype,"nativeControl_",{get:function(){var t=Bt.NATIVE_CONTROL_SELECTOR,e=this.root.querySelector(t);if(!e)throw new Error("Checkbox component requires a "+t+" element");return e},enumerable:!0,configurable:!0}),e}(wt);function jt(t){return!!t&&"function"==typeof t.set}
/**
 * @license
 * Copyright 2019 Google Inc.
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
 */var Kt,Xt="mdc-data-table__content",Gt="mdc-data-table__header-cell--sorted",Wt="mdc-data-table__header-cell--sorted-descending",qt="mdc-data-table__header-row",$t="mdc-data-table--in-progress",Yt="mdc-data-table__row--selected",Zt="data-column-id",Jt="data-row-id",Qt={CONTENT:"."+Xt,HEADER_CELL:"."+"mdc-data-table__header-cell",HEADER_CELL_WITH_SORT:"."+"mdc-data-table__header-cell--with-sort",HEADER_ROW:"."+qt,HEADER_ROW_CHECKBOX:"."+"mdc-data-table__header-row-checkbox",PROGRESS_INDICATOR:"."+"mdc-data-table__progress-indicator",ROW:"."+"mdc-data-table__row",ROW_CHECKBOX:"."+"mdc-data-table__row-checkbox",ROW_SELECTED:"."+Yt,SORT_ICON_BUTTON:"."+"mdc-data-table__sort-icon-button",SORT_STATUS_LABEL:"."+"mdc-data-table__sort-status-label"},te="Sorted in descending order",ee="Sorted in ascending order",ae={ARIA_SELECTED:"aria-selected",ARIA_SORT:"aria-sort",DATA_ROW_ID_ATTR:Jt,HEADER_ROW_CHECKBOX_SELECTOR:Qt.HEADER_ROW_CHECKBOX,ROW_CHECKBOX_SELECTOR:Qt.ROW_CHECKBOX,ROW_SELECTED_SELECTOR:Qt.ROW_SELECTED,ROW_SELECTOR:Qt.ROW};!function(t){t.ASCENDING="ascending",t.DESCENDING="descending",t.NONE="none",t.OTHER="other"}(Kt||(Kt={}));var ie="MDCDataTable:rowSelectionChanged",re="MDCDataTable:selectedAll",oe="MDCDataTable:unselectedAll",ne="MDCDataTable:sorted",de=function(t){function e(a){return t.call(this,x(x({},e.defaultAdapter),a))||this}return y(e,t),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},addClassAtRowIndex:function(){},getAttributeByHeaderCellIndex:function(){return""},getHeaderCellCount:function(){return 0},getHeaderCellElements:function(){return[]},getRowCount:function(){return 0},getRowElements:function(){return[]},getRowIdAtIndex:function(){return""},getRowIndexByChildElement:function(){return 0},getSelectedRowCount:function(){return 0},getTableBodyHeight:function(){return""},getTableHeaderHeight:function(){return""},isCheckboxAtRowIndexChecked:function(){return!1},isHeaderRowCheckboxChecked:function(){return!1},isRowsSelectable:function(){return!1},notifyRowSelectionChanged:function(){},notifySelectedAll:function(){},notifySortAction:function(){},notifyUnselectedAll:function(){},registerHeaderRowCheckbox:function(){},registerRowCheckboxes:function(){},removeClass:function(){},removeClassAtRowIndex:function(){},removeClassNameByHeaderCellIndex:function(){},setAttributeAtRowIndex:function(){},setAttributeByHeaderCellIndex:function(){},setClassNameByHeaderCellIndex:function(){},setHeaderRowCheckboxChecked:function(){},setHeaderRowCheckboxIndeterminate:function(){},setProgressIndicatorStyles:function(){},setRowCheckboxCheckedAtIndex:function(){},setSortStatusLabelByHeaderCellIndex:function(){}}},enumerable:!0,configurable:!0}),e.prototype.layout=function(){this.adapter.isRowsSelectable()&&(this.adapter.registerHeaderRowCheckbox(),this.adapter.registerRowCheckboxes(),this.setHeaderRowCheckboxState())},e.prototype.layoutAsync=function(){return v(this,void 0,void 0,(function(){return w(this,(function(t){switch(t.label){case 0:return this.adapter.isRowsSelectable()?[4,this.adapter.registerHeaderRowCheckbox()]:[3,3];case 1:return t.sent(),[4,this.adapter.registerRowCheckboxes()];case 2:t.sent(),this.setHeaderRowCheckboxState(),t.label=3;case 3:return[2]}}))}))},e.prototype.getRows=function(){return this.adapter.getRowElements()},e.prototype.getHeaderCells=function(){return this.adapter.getHeaderCellElements()},e.prototype.setSelectedRowIds=function(t){for(var e=0;e<this.adapter.getRowCount();e++){var a=this.adapter.getRowIdAtIndex(e),i=!1;a&&t.indexOf(a)>=0&&(i=!0),this.adapter.setRowCheckboxCheckedAtIndex(e,i),this.selectRowAtIndex(e,i)}this.setHeaderRowCheckboxState()},e.prototype.getRowIds=function(){for(var t=[],e=0;e<this.adapter.getRowCount();e++)t.push(this.adapter.getRowIdAtIndex(e));return t},e.prototype.getSelectedRowIds=function(){for(var t=[],e=0;e<this.adapter.getRowCount();e++)this.adapter.isCheckboxAtRowIndexChecked(e)&&t.push(this.adapter.getRowIdAtIndex(e));return t},e.prototype.handleHeaderRowCheckboxChange=function(){for(var t=this.adapter.isHeaderRowCheckboxChecked(),e=0;e<this.adapter.getRowCount();e++)this.adapter.setRowCheckboxCheckedAtIndex(e,t),this.selectRowAtIndex(e,t);t?this.adapter.notifySelectedAll():this.adapter.notifyUnselectedAll()},e.prototype.handleRowCheckboxChange=function(t){var e=this.adapter.getRowIndexByChildElement(t.target);if(-1!==e){var a=this.adapter.isCheckboxAtRowIndexChecked(e);this.selectRowAtIndex(e,a),this.setHeaderRowCheckboxState();var i=this.adapter.getRowIdAtIndex(e);this.adapter.notifyRowSelectionChanged({rowId:i,rowIndex:e,selected:a})}},e.prototype.handleSortAction=function(t){for(var e=t.columnId,a=t.columnIndex,i=t.headerCell,r=0;r<this.adapter.getHeaderCellCount();r++)r!==a&&(this.adapter.removeClassNameByHeaderCellIndex(r,Gt),this.adapter.removeClassNameByHeaderCellIndex(r,Wt),this.adapter.setAttributeByHeaderCellIndex(r,ae.ARIA_SORT,Kt.NONE),this.adapter.setSortStatusLabelByHeaderCellIndex(r,Kt.NONE));this.adapter.setClassNameByHeaderCellIndex(a,Gt);var o=this.adapter.getAttributeByHeaderCellIndex(a,ae.ARIA_SORT),n=Kt.NONE;o===Kt.ASCENDING?(this.adapter.setClassNameByHeaderCellIndex(a,Wt),this.adapter.setAttributeByHeaderCellIndex(a,ae.ARIA_SORT,Kt.DESCENDING),n=Kt.DESCENDING):o===Kt.DESCENDING?(this.adapter.removeClassNameByHeaderCellIndex(a,Wt),this.adapter.setAttributeByHeaderCellIndex(a,ae.ARIA_SORT,Kt.ASCENDING),n=Kt.ASCENDING):(this.adapter.setAttributeByHeaderCellIndex(a,ae.ARIA_SORT,Kt.ASCENDING),n=Kt.ASCENDING),this.adapter.setSortStatusLabelByHeaderCellIndex(a,n),this.adapter.notifySortAction({columnId:e,columnIndex:a,headerCell:i,sortValue:n})},e.prototype.showProgress=function(){var t=this.adapter.getTableBodyHeight(),e=this.adapter.getTableHeaderHeight();this.adapter.setProgressIndicatorStyles({height:t,top:e}),this.adapter.addClass($t)},e.prototype.hideProgress=function(){this.adapter.removeClass($t)},e.prototype.setHeaderRowCheckboxState=function(){this.adapter.getSelectedRowCount()===this.adapter.getRowCount()?(this.adapter.setHeaderRowCheckboxChecked(!0),this.adapter.setHeaderRowCheckboxIndeterminate(!1)):0===this.adapter.getSelectedRowCount()?(this.adapter.setHeaderRowCheckboxIndeterminate(!1),this.adapter.setHeaderRowCheckboxChecked(!1)):(this.adapter.setHeaderRowCheckboxIndeterminate(!0),this.adapter.setHeaderRowCheckboxChecked(!1))},e.prototype.selectRowAtIndex=function(t,e){e?(this.adapter.addClassAtRowIndex(t,Yt),this.adapter.setAttributeAtRowIndex(t,ae.ARIA_SELECTED,"true")):(this.adapter.removeClassAtRowIndex(t,Yt),this.adapter.setAttributeAtRowIndex(t,ae.ARIA_SELECTED,"false"))},e}(vt),ce=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return y(e,t),e.attachTo=function(t){return new e(t)},e.prototype.initialize=function(t){void 0===t&&(t=function(t){return new Vt(t)}),this.checkboxFactory=t},e.prototype.initialSyncWithDOM=function(){var t=this;this.headerRow=this.root.querySelector("."+qt),this.handleHeaderRowCheckboxChange=function(){return t.foundation.handleHeaderRowCheckboxChange()},this.headerRow.addEventListener("change",this.handleHeaderRowCheckboxChange),this.headerRowClickListener=function(e){t.handleHeaderRowClick(e)},this.headerRow.addEventListener("click",this.headerRowClickListener),this.content=this.root.querySelector("."+Xt),this.handleRowCheckboxChange=function(e){return t.foundation.handleRowCheckboxChange(e)},this.content.addEventListener("change",this.handleRowCheckboxChange),this.layout()},e.prototype.layout=function(){this.foundation.layout()},e.prototype.getHeaderCells=function(){return[].slice.call(this.root.querySelectorAll(Qt.HEADER_CELL))},e.prototype.getRows=function(){return this.foundation.getRows()},e.prototype.getSelectedRowIds=function(){return this.foundation.getSelectedRowIds()},e.prototype.setSelectedRowIds=function(t){this.foundation.setSelectedRowIds(t)},e.prototype.destroy=function(){this.headerRow.removeEventListener("change",this.handleHeaderRowCheckboxChange),this.headerRow.removeEventListener("click",this.headerRowClickListener),this.content.removeEventListener("change",this.handleRowCheckboxChange),this.headerRowCheckbox.destroy(),this.rowCheckboxList.forEach((function(t){t.destroy()}))},e.prototype.getDefaultFoundation=function(){var t=this;return new de({addClass:function(e){t.root.classList.add(e)},removeClass:function(e){t.root.classList.remove(e)},getHeaderCellElements:function(){return t.getHeaderCells()},getHeaderCellCount:function(){return t.getHeaderCells().length},getAttributeByHeaderCellIndex:function(e,a){return t.getHeaderCells()[e].getAttribute(a)},setAttributeByHeaderCellIndex:function(e,a,i){t.getHeaderCells()[e].setAttribute(a,i)},setClassNameByHeaderCellIndex:function(e,a){t.getHeaderCells()[e].classList.add(a)},removeClassNameByHeaderCellIndex:function(e,a){t.getHeaderCells()[e].classList.remove(a)},notifySortAction:function(e){t.emit(ne,e,!0)},getTableBodyHeight:function(){var e=t.root.querySelector(Qt.CONTENT);if(!e)throw new Error("MDCDataTable: Table body element not found.");return e.getBoundingClientRect().height+"px"},getTableHeaderHeight:function(){var e=t.root.querySelector(Qt.HEADER_ROW);if(!e)throw new Error("MDCDataTable: Table header element not found.");return e.getBoundingClientRect().height+"px"},setProgressIndicatorStyles:function(e){var a=t.root.querySelector(Qt.PROGRESS_INDICATOR);if(!a)throw new Error("MDCDataTable: Progress indicator element not found.");Object.assign(a.style,e)},addClassAtRowIndex:function(e,a){t.getRows()[e].classList.add(a)},getRowCount:function(){return t.getRows().length},getRowElements:function(){return[].slice.call(t.root.querySelectorAll(Qt.ROW))},getRowIdAtIndex:function(e){return t.getRows()[e].getAttribute(Jt)},getRowIndexByChildElement:function(e){return t.getRows().indexOf(At(e,Qt.ROW))},getSelectedRowCount:function(){return t.root.querySelectorAll(Qt.ROW_SELECTED).length},isCheckboxAtRowIndexChecked:function(e){return t.rowCheckboxList[e].checked},isHeaderRowCheckboxChecked:function(){return t.headerRowCheckbox.checked},isRowsSelectable:function(){return!!t.root.querySelector(Qt.ROW_CHECKBOX)},notifyRowSelectionChanged:function(e){t.emit(ie,{row:t.getRowByIndex(e.rowIndex),rowId:t.getRowIdByIndex(e.rowIndex),rowIndex:e.rowIndex,selected:e.selected},!0)},notifySelectedAll:function(){t.emit(re,{},!0)},notifyUnselectedAll:function(){t.emit(oe,{},!0)},registerHeaderRowCheckbox:function(){t.headerRowCheckbox&&t.headerRowCheckbox.destroy();var e=t.root.querySelector(Qt.HEADER_ROW_CHECKBOX);t.headerRowCheckbox=t.checkboxFactory(e)},registerRowCheckboxes:function(){t.rowCheckboxList&&t.rowCheckboxList.forEach((function(t){t.destroy()})),t.rowCheckboxList=[],t.getRows().forEach((function(e){var a=t.checkboxFactory(e.querySelector(Qt.ROW_CHECKBOX));t.rowCheckboxList.push(a)}))},removeClassAtRowIndex:function(e,a){t.getRows()[e].classList.remove(a)},setAttributeAtRowIndex:function(e,a,i){t.getRows()[e].setAttribute(a,i)},setHeaderRowCheckboxChecked:function(e){t.headerRowCheckbox.checked=e},setHeaderRowCheckboxIndeterminate:function(e){t.headerRowCheckbox.indeterminate=e},setRowCheckboxCheckedAtIndex:function(e,a){t.rowCheckboxList[e].checked=a},setSortStatusLabelByHeaderCellIndex:function(e,a){var i=t.getHeaderCells()[e].querySelector(Qt.SORT_STATUS_LABEL);i&&(i.textContent=t.getSortStatusMessageBySortValue(a))}})},e.prototype.getRowByIndex=function(t){return this.getRows()[t]},e.prototype.getRowIdByIndex=function(t){return this.getRowByIndex(t).getAttribute(Jt)},e.prototype.handleHeaderRowClick=function(t){var e=At(t.target,Qt.HEADER_CELL_WITH_SORT);if(e){var a=e.getAttribute(Zt),i=this.getHeaderCells().indexOf(e);-1!==i&&this.foundation.handleSortAction({columnId:a,columnIndex:i,headerCell:e})}},e.prototype.getSortStatusMessageBySortValue=function(t){switch(t){case Kt.ASCENDING:return ee;case Kt.DESCENDING:return te;default:return""}},e}(wt),se=p`/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/material-components/material-components-web/blob/master/LICENSE
 */
.mdc-data-table__content {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: Roboto, sans-serif;
  /* @alternate */
  font-family: var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));
  font-size: 0.875rem;
  /* @alternate */
  font-size: var(--mdc-typography-body2-font-size, 0.875rem);
  line-height: 1.25rem;
  /* @alternate */
  line-height: var(--mdc-typography-body2-line-height, 1.25rem);
  font-weight: 400;
  /* @alternate */
  font-weight: var(--mdc-typography-body2-font-weight, 400);
  letter-spacing: 0.0178571429em;
  /* @alternate */
  letter-spacing: var(--mdc-typography-body2-letter-spacing, 0.0178571429em);
  text-decoration: inherit;
  /* @alternate */
  -webkit-text-decoration: var(--mdc-typography-body2-text-decoration, inherit);
          text-decoration: var(--mdc-typography-body2-text-decoration, inherit);
  text-transform: inherit;
  /* @alternate */
  text-transform: var(--mdc-typography-body2-text-transform, inherit);
}

.mdc-data-table {
  background-color: #fff;
  /* @alternate */
  background-color: var(--mdc-theme-surface, #fff);
  border-radius: 4px;
  /* @alternate */
  border-radius: var(--mdc-shape-medium, 4px);
  border-width: 1px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.12);
  -webkit-overflow-scrolling: touch;
  display: inline-flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
}

.mdc-data-table__row {
  background-color: inherit;
}

.mdc-data-table__header-row {
  background-color: inherit;
}

.mdc-data-table__row--selected {
  background-color: rgba(98, 0, 238, 0.04);
}

.mdc-data-table__pagination-rows-per-page-select:not(.mdc-select--disabled) .mdc-notched-outline__leading,
.mdc-data-table__pagination-rows-per-page-select:not(.mdc-select--disabled) .mdc-notched-outline__notch,
.mdc-data-table__pagination-rows-per-page-select:not(.mdc-select--disabled) .mdc-notched-outline__trailing {
  border-color: rgba(0, 0, 0, 0.12);
}

.mdc-data-table__row,
.mdc-data-table__pagination {
  border-top-color: rgba(0, 0, 0, 0.12);
}

.mdc-data-table__row,
.mdc-data-table__pagination {
  border-top-width: 1px;
  border-top-style: solid;
}

.mdc-data-table__row:not(.mdc-data-table__row--selected):hover {
  background-color: rgba(0, 0, 0, 0.04);
}

.mdc-data-table__header-cell {
  color: rgba(0, 0, 0, 0.87);
}

.mdc-data-table__pagination-total,
.mdc-data-table__pagination-rows-per-page-label,
.mdc-data-table__cell {
  color: rgba(0, 0, 0, 0.87);
}

.mdc-data-table__cell {
  height: 52px;
}

.mdc-data-table__pagination {
  min-height: 52px;
}

.mdc-data-table__header-cell {
  height: 56px;
}

.mdc-data-table__cell,
.mdc-data-table__header-cell {
  padding-right: 16px;
  padding-left: 16px;
}

.mdc-data-table__header-cell--checkbox,
.mdc-data-table__cell--checkbox {
  /* @noflip */
  padding-left: 16px;
  /* @noflip */
  padding-right: 0;
}
[dir=rtl] .mdc-data-table__header-cell--checkbox, .mdc-data-table__header-cell--checkbox[dir=rtl],
[dir=rtl] .mdc-data-table__cell--checkbox,
.mdc-data-table__cell--checkbox[dir=rtl] {
  /* @noflip */
  padding-left: 0;
  /* @noflip */
  padding-right: 16px;
}

.mdc-data-table__sort-icon-button {
  color: rgba(0, 0, 0, 0.6);
}
.mdc-data-table__sort-icon-button::before, .mdc-data-table__sort-icon-button::after {
  background-color: rgba(0, 0, 0, 0.6);
}
.mdc-data-table__sort-icon-button:hover::before {
  opacity: 0.04;
}
.mdc-data-table__sort-icon-button.mdc-ripple-upgraded--background-focused::before, .mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):focus::before {
  transition-duration: 75ms;
  opacity: 0.12;
}
.mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded)::after {
  transition: opacity 150ms linear;
}
.mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):active::after {
  transition-duration: 75ms;
  opacity: 0.12;
}
.mdc-data-table__sort-icon-button.mdc-ripple-upgraded {
  --mdc-ripple-fg-opacity: 0.12;
}

.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button {
  color: rgba(0, 0, 0, 0.87);
}
.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button::before, .mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button::after {
  background-color: rgba(0, 0, 0, 0.87);
}
.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button:hover::before {
  opacity: 0.04;
}
.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button.mdc-ripple-upgraded--background-focused::before, .mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):focus::before {
  transition-duration: 75ms;
  opacity: 0.12;
}
.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded)::after {
  transition: opacity 150ms linear;
}
.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):active::after {
  transition-duration: 75ms;
  opacity: 0.12;
}
.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button.mdc-ripple-upgraded {
  --mdc-ripple-fg-opacity: 0.12;
}

.mdc-data-table__table-container {
  -webkit-overflow-scrolling: touch;
  overflow-x: auto;
  width: 100%;
}

.mdc-data-table__table {
  min-width: 100%;
  border: 0;
  white-space: nowrap;
  border-collapse: collapse;
  /**
   * With table-layout:fixed, table and column widths are defined by the width
   * of the first row of cells. Cells in subsequent rows do not affect column
   * widths. This results in a predictable table layout and may also speed up
   * rendering.
   */
  table-layout: fixed;
}

.mdc-data-table__cell {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: Roboto, sans-serif;
  /* @alternate */
  font-family: var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));
  font-size: 0.875rem;
  /* @alternate */
  font-size: var(--mdc-typography-body2-font-size, 0.875rem);
  line-height: 1.25rem;
  /* @alternate */
  line-height: var(--mdc-typography-body2-line-height, 1.25rem);
  font-weight: 400;
  /* @alternate */
  font-weight: var(--mdc-typography-body2-font-weight, 400);
  letter-spacing: 0.0178571429em;
  /* @alternate */
  letter-spacing: var(--mdc-typography-body2-letter-spacing, 0.0178571429em);
  text-decoration: inherit;
  /* @alternate */
  -webkit-text-decoration: var(--mdc-typography-body2-text-decoration, inherit);
          text-decoration: var(--mdc-typography-body2-text-decoration, inherit);
  text-transform: inherit;
  /* @alternate */
  text-transform: var(--mdc-typography-body2-text-transform, inherit);
  box-sizing: border-box;
  overflow: hidden;
  text-align: left;
  text-overflow: ellipsis;
}
[dir=rtl] .mdc-data-table__cell, .mdc-data-table__cell[dir=rtl] {
  /* @noflip */
  text-align: right;
}

.mdc-data-table__cell--numeric {
  text-align: right;
}
[dir=rtl] .mdc-data-table__cell--numeric, .mdc-data-table__cell--numeric[dir=rtl] {
  /* @noflip */
  text-align: left;
}

.mdc-data-table__header-cell {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: Roboto, sans-serif;
  /* @alternate */
  font-family: var(--mdc-typography-subtitle2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));
  font-size: 0.875rem;
  /* @alternate */
  font-size: var(--mdc-typography-subtitle2-font-size, 0.875rem);
  line-height: 1.375rem;
  /* @alternate */
  line-height: var(--mdc-typography-subtitle2-line-height, 1.375rem);
  font-weight: 500;
  /* @alternate */
  font-weight: var(--mdc-typography-subtitle2-font-weight, 500);
  letter-spacing: 0.0071428571em;
  /* @alternate */
  letter-spacing: var(--mdc-typography-subtitle2-letter-spacing, 0.0071428571em);
  text-decoration: inherit;
  /* @alternate */
  -webkit-text-decoration: var(--mdc-typography-subtitle2-text-decoration, inherit);
          text-decoration: var(--mdc-typography-subtitle2-text-decoration, inherit);
  text-transform: inherit;
  /* @alternate */
  text-transform: var(--mdc-typography-subtitle2-text-transform, inherit);
  box-sizing: border-box;
  text-align: left;
  text-overflow: ellipsis;
  overflow: hidden;
  outline: none;
}
[dir=rtl] .mdc-data-table__header-cell, .mdc-data-table__header-cell[dir=rtl] {
  /* @noflip */
  text-align: right;
}

.mdc-data-table__header-cell--checkbox,
.mdc-data-table__cell--checkbox {
  width: 1px;
}

.mdc-data-table__header-cell--numeric {
  text-align: right;
}
[dir=rtl] .mdc-data-table__header-cell--numeric, .mdc-data-table__header-cell--numeric[dir=rtl] {
  /* @noflip */
  text-align: left;
}

.mdc-data-table__sort-icon-button {
  width: 28px;
  height: 28px;
  padding: 2px;
  /* @noflip */
  margin-left: 4px;
  /* @noflip */
  margin-right: 0;
  transition: -webkit-transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
}
[dir=rtl] .mdc-data-table__sort-icon-button, .mdc-data-table__sort-icon-button[dir=rtl] {
  /* @noflip */
  margin-left: 0;
  /* @noflip */
  margin-right: 4px;
}
.mdc-data-table__header-cell--numeric .mdc-data-table__sort-icon-button {
  /* @noflip */
  margin-left: 0;
  /* @noflip */
  margin-right: 4px;
}
[dir=rtl] .mdc-data-table__header-cell--numeric .mdc-data-table__sort-icon-button, .mdc-data-table__header-cell--numeric .mdc-data-table__sort-icon-button[dir=rtl] {
  /* @noflip */
  margin-left: 4px;
  /* @noflip */
  margin-right: 0;
}
.mdc-data-table__header-cell--sorted-descending .mdc-data-table__sort-icon-button {
  -webkit-transform: rotate(-180deg);
          transform: rotate(-180deg);
}
.mdc-data-table__sort-icon-button:focus, .mdc-data-table__header-cell:hover .mdc-data-table__sort-icon-button, .mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button {
  opacity: 1;
}

.mdc-data-table__header-cell-wrapper {
  align-items: center;
  display: inline-flex;
  vertical-align: middle;
}

.mdc-data-table__header-cell--with-sort {
  cursor: pointer;
}

.mdc-data-table__progress-indicator {
  display: none;
  position: absolute;
  width: 100%;
}
.mdc-data-table--in-progress .mdc-data-table__progress-indicator {
  display: block;
}

.mdc-data-table__scrim {
  background-color: #fff;
  /* @alternate */
  background-color: var(--mdc-theme-surface, #fff);
  height: 100%;
  opacity: 0.32;
  position: absolute;
  top: 0;
  width: 100%;
}

.mdc-data-table__sort-status-label {
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  /* added line */
  width: 1px;
}

.mdc-data-table__pagination {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: Roboto, sans-serif;
  /* @alternate */
  font-family: var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));
  font-size: 0.875rem;
  /* @alternate */
  font-size: var(--mdc-typography-body2-font-size, 0.875rem);
  line-height: 1.25rem;
  /* @alternate */
  line-height: var(--mdc-typography-body2-line-height, 1.25rem);
  font-weight: 400;
  /* @alternate */
  font-weight: var(--mdc-typography-body2-font-weight, 400);
  letter-spacing: 0.0178571429em;
  /* @alternate */
  letter-spacing: var(--mdc-typography-body2-letter-spacing, 0.0178571429em);
  text-decoration: inherit;
  /* @alternate */
  -webkit-text-decoration: var(--mdc-typography-body2-text-decoration, inherit);
          text-decoration: var(--mdc-typography-body2-text-decoration, inherit);
  text-transform: inherit;
  /* @alternate */
  text-transform: var(--mdc-typography-body2-text-transform, inherit);
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
}

.mdc-data-table__pagination-trailing {
  /* @noflip */
  margin-left: 4px;
  /* @noflip */
  margin-right: 0;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
}
[dir=rtl] .mdc-data-table__pagination-trailing, .mdc-data-table__pagination-trailing[dir=rtl] {
  /* @noflip */
  margin-left: 0;
  /* @noflip */
  margin-right: 4px;
}

.mdc-data-table__pagination-navigation {
  align-items: center;
  display: flex;
}

.mdc-data-table__pagination-button {
  /* @noflip */
  margin-left: 0;
  /* @noflip */
  margin-right: 4px;
}
[dir=rtl] .mdc-data-table__pagination-button .mdc-button__icon, .mdc-data-table__pagination-button .mdc-button__icon[dir=rtl] {
  /* @noflip */
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}
[dir=rtl] .mdc-data-table__pagination-button, .mdc-data-table__pagination-button[dir=rtl] {
  /* @noflip */
  margin-left: 4px;
  /* @noflip */
  margin-right: 0;
}

.mdc-data-table__pagination-total {
  /* @noflip */
  margin-left: 14px;
  /* @noflip */
  margin-right: 36px;
  white-space: nowrap;
}
[dir=rtl] .mdc-data-table__pagination-total, .mdc-data-table__pagination-total[dir=rtl] {
  /* @noflip */
  margin-left: 36px;
  /* @noflip */
  margin-right: 14px;
}

.mdc-data-table__pagination-rows-per-page {
  /* @noflip */
  margin-left: 0;
  /* @noflip */
  margin-right: 22px;
  align-items: center;
  display: inline-flex;
}
[dir=rtl] .mdc-data-table__pagination-rows-per-page, .mdc-data-table__pagination-rows-per-page[dir=rtl] {
  /* @noflip */
  margin-left: 22px;
  /* @noflip */
  margin-right: 0;
}

.mdc-data-table__pagination-rows-per-page-label {
  /* @noflip */
  margin-left: 0;
  /* @noflip */
  margin-right: 12px;
  white-space: nowrap;
}
[dir=rtl] .mdc-data-table__pagination-rows-per-page-label, .mdc-data-table__pagination-rows-per-page-label[dir=rtl] {
  /* @noflip */
  margin-left: 12px;
  /* @noflip */
  margin-right: 0;
}

.mdc-data-table__pagination-rows-per-page-select {
  min-width: 80px;
  min-width: 80px;
  margin: 8px 0;
}
.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor {
  height: 36px;
}
.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor .mdc-floating-label--float-above {
  -webkit-transform: translateY(-27.25px) scale(1);
          transform: translateY(-27.25px) scale(1);
}
.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor .mdc-floating-label--float-above {
  font-size: 0.75rem;
}
.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,
.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  -webkit-transform: translateY(-24.75px) scale(0.75);
          transform: translateY(-24.75px) scale(0.75);
}
.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,
.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}
.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor .mdc-floating-label--shake {
  -webkit-animation: mdc-floating-label-shake-float-above-select-outlined-36px 250ms 1;
          animation: mdc-floating-label-shake-float-above-select-outlined-36px 250ms 1;
}
@-webkit-keyframes mdc-floating-label-shake-float-above-select-outlined-36px {
  0% {
    -webkit-transform: translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75);
            transform: translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75);
  }
  33% {
    -webkit-animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
            animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    -webkit-transform: translateX(calc(4% - 0%)) translateY(-24.75px) scale(0.75);
            transform: translateX(calc(4% - 0%)) translateY(-24.75px) scale(0.75);
  }
  66% {
    -webkit-animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
            animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    -webkit-transform: translateX(calc(-4% - 0%)) translateY(-24.75px) scale(0.75);
            transform: translateX(calc(-4% - 0%)) translateY(-24.75px) scale(0.75);
  }
  100% {
    -webkit-transform: translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75);
            transform: translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75);
  }
}
@keyframes mdc-floating-label-shake-float-above-select-outlined-36px {
  0% {
    -webkit-transform: translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75);
            transform: translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75);
  }
  33% {
    -webkit-animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
            animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    -webkit-transform: translateX(calc(4% - 0%)) translateY(-24.75px) scale(0.75);
            transform: translateX(calc(4% - 0%)) translateY(-24.75px) scale(0.75);
  }
  66% {
    -webkit-animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
            animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    -webkit-transform: translateX(calc(-4% - 0%)) translateY(-24.75px) scale(0.75);
            transform: translateX(calc(-4% - 0%)) translateY(-24.75px) scale(0.75);
  }
  100% {
    -webkit-transform: translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75);
            transform: translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75);
  }
}
.mdc-data-table__pagination-rows-per-page-select .mdc-select__dropdown-icon {
  width: 20px;
  height: 20px;
}
.mdc-data-table__pagination-rows-per-page-select.mdc-select--outlined .mdc-select__anchor :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch {
  max-width: calc(100% - 56px);
}
.mdc-data-table__pagination-rows-per-page-select .mdc-list-item {
  height: 36px;
}

.mdc-data-table__header-row-checkbox .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background::before,
.mdc-data-table__header-row-checkbox .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background::before,
.mdc-data-table__header-row-checkbox .mdc-checkbox__native-control[data-indeterminate=true] ~ .mdc-checkbox__background::before,
.mdc-data-table__row-checkbox .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background::before,
.mdc-data-table__row-checkbox .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background::before,
.mdc-data-table__row-checkbox .mdc-checkbox__native-control[data-indeterminate=true] ~ .mdc-checkbox__background::before {
  background-color: #6200ee;
  /* @alternate */
  background-color: var(--mdc-theme-primary, #6200ee);
}
.mdc-data-table__header-row-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before, .mdc-data-table__header-row-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after,
.mdc-data-table__row-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,
.mdc-data-table__row-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after {
  background-color: #6200ee;
  /* @alternate */
  background-color: var(--mdc-theme-primary, #6200ee);
}
.mdc-data-table__header-row-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before,
.mdc-data-table__row-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before {
  opacity: 0.04;
}
.mdc-data-table__header-row-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before, .mdc-data-table__header-row-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before,
.mdc-data-table__row-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,
.mdc-data-table__row-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before {
  transition-duration: 75ms;
  opacity: 0.12;
}
.mdc-data-table__header-row-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after,
.mdc-data-table__row-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after {
  transition: opacity 150ms linear;
}
.mdc-data-table__header-row-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after,
.mdc-data-table__row-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after {
  transition-duration: 75ms;
  opacity: 0.12;
}
.mdc-data-table__header-row-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded,
.mdc-data-table__row-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded {
  --mdc-ripple-fg-opacity: 0.12;
}
.mdc-data-table__header-row-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,
.mdc-data-table__header-row-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after,
.mdc-data-table__row-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,
.mdc-data-table__row-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after {
  background-color: #6200ee;
  /* @alternate */
  background-color: var(--mdc-theme-primary, #6200ee);
}
.mdc-data-table__header-row-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true]) ~ .mdc-checkbox__background,
.mdc-data-table__row-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true]) ~ .mdc-checkbox__background {
  border-color: rgba(0, 0, 0, 0.54);
  background-color: transparent;
}
.mdc-data-table__header-row-checkbox .mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background,
.mdc-data-table__header-row-checkbox .mdc-checkbox__native-control:enabled:indeterminate ~ .mdc-checkbox__background,
.mdc-data-table__header-row-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled ~ .mdc-checkbox__background,
.mdc-data-table__row-checkbox .mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background,
.mdc-data-table__row-checkbox .mdc-checkbox__native-control:enabled:indeterminate ~ .mdc-checkbox__background,
.mdc-data-table__row-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled ~ .mdc-checkbox__background {
  border-color: #6200ee;
  /* @alternate */
  border-color: var(--mdc-theme-primary, #6200ee);
  background-color: #6200ee;
  /* @alternate */
  background-color: var(--mdc-theme-primary, #6200ee);
}
@-webkit-keyframes mdc-checkbox-fade-in-background-8A000000primary00000000primary {
  0% {
    border-color: rgba(0, 0, 0, 0.54);
    background-color: transparent;
  }
  50% {
    border-color: #6200ee;
    /* @alternate */
    border-color: var(--mdc-theme-primary, #6200ee);
    background-color: #6200ee;
    /* @alternate */
    background-color: var(--mdc-theme-primary, #6200ee);
  }
}
@keyframes mdc-checkbox-fade-in-background-8A000000primary00000000primary {
  0% {
    border-color: rgba(0, 0, 0, 0.54);
    background-color: transparent;
  }
  50% {
    border-color: #6200ee;
    /* @alternate */
    border-color: var(--mdc-theme-primary, #6200ee);
    background-color: #6200ee;
    /* @alternate */
    background-color: var(--mdc-theme-primary, #6200ee);
  }
}
@-webkit-keyframes mdc-checkbox-fade-out-background-8A000000primary00000000primary {
  0%, 80% {
    border-color: #6200ee;
    /* @alternate */
    border-color: var(--mdc-theme-primary, #6200ee);
    background-color: #6200ee;
    /* @alternate */
    background-color: var(--mdc-theme-primary, #6200ee);
  }
  100% {
    border-color: rgba(0, 0, 0, 0.54);
    background-color: transparent;
  }
}
@keyframes mdc-checkbox-fade-out-background-8A000000primary00000000primary {
  0%, 80% {
    border-color: #6200ee;
    /* @alternate */
    border-color: var(--mdc-theme-primary, #6200ee);
    background-color: #6200ee;
    /* @alternate */
    background-color: var(--mdc-theme-primary, #6200ee);
  }
  100% {
    border-color: rgba(0, 0, 0, 0.54);
    background-color: transparent;
  }
}
.mdc-data-table__header-row-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled ~ .mdc-checkbox__background, .mdc-data-table__header-row-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled ~ .mdc-checkbox__background,
.mdc-data-table__row-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled ~ .mdc-checkbox__background,
.mdc-data-table__row-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled ~ .mdc-checkbox__background {
  -webkit-animation-name: mdc-checkbox-fade-in-background-8A000000primary00000000primary;
          animation-name: mdc-checkbox-fade-in-background-8A000000primary00000000primary;
}
.mdc-data-table__header-row-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled ~ .mdc-checkbox__background, .mdc-data-table__header-row-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled ~ .mdc-checkbox__background,
.mdc-data-table__row-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled ~ .mdc-checkbox__background,
.mdc-data-table__row-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled ~ .mdc-checkbox__background {
  -webkit-animation-name: mdc-checkbox-fade-out-background-8A000000primary00000000primary;
          animation-name: mdc-checkbox-fade-out-background-8A000000primary00000000primary;
}

/*# sourceMappingURL=mdc.data-table.css.map*/`;
/**
 * @license
 * Copyright 2019 Google Inc.
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
 */class le extends g{static get styles(){return[se,p`.mdc-data-table__table{ width: 100% };`]}static get properties(){return{research_id:{type:String},id:{type:String},identity:{type:String},age:{type:Number}}}constructor(t){super(),this._token=t.token,this.id=t.id,this.handler()}render(){return d`
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
        `}firstUpdated(){const t=this.shadowRoot.getElementById("#trials");new ce(t)}async _handleSearch(t){}async handler(){const t=await fetch("/subject/"+this.id,{method:"GET",headers:{Authorization:"Bearer: "+this._token}});if(200==t.status){const e=await t.json();this.id=e.id,this.identity=e.identity,this.age=e.age}else{const t=new k({message:"Error Loading Subject"});document.getElementById("content").appendChild(t)}}}window.customElements.define("subject-detail",le);class pe extends g{static get properties(){return{subjects:{type:Array}}}constructor(t){super(),this._token=t.token,this.subjects=[],this.handler()}render(){return d`
        <mwc-list id="subject-list" wrapfocus="" innerrole="navigation" innerarialabel="Subject List" itemroles="link" roottabbable="">
            ${this.subjects.map(t=>d`<mwc-list-item class="subject" twoline="" graphic="icon" @click="${this.detail}" subject="${t.id}" data-href="/subject/${t.id}" role="link" tabindex="0" aria-disable="false">
                        <span>${t.identity}</span>
                        <span slot="secondary">${t.id}</span>
                        <mwc-icon slot="graphic">face</mwc-icon>
                    </mwc-list-item>`)}
        </mwc-list>`}async detail(t){const e=t.target.getAttribute("subject"),a=new le({id:e,token:this._token});document.getElementById("content").replaceChildren(a)}async handler(t){const e=await fetch("/subjects",{method:"GET",headers:{Authorization:"Bearer: "+this._token}});if(200==e.status)this.subjects=await e.json();else{const t=new k({message:"Error Loading Subjects"});document.getElementById("content").appendChild(t)}}}window.customElements.define("subject-list",pe);export{pe as SubjectList};
//# sourceMappingURL=list-4dde18a4.js.map
