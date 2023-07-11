import{I as Ye,J as Je,_ as le,r as E,o as S,f as j,w as v,d as R,c as ue,g as Se,e as V,t as te,F as Re,b as z,K as Ze,p as Qe,h as et}from"./index-5162fff2.js";const tt=Ye({name:"AppDropdown",props:["arr"],components:{DownOutlined:Je}});function nt(t,e,n,s,r,o){const i=E("DownOutlined"),a=E("RouterLink"),c=E("a-menu-item"),l=E("a-menu"),f=E("a-dropdown");return S(),j(f,null,{overlay:v(()=>[R(l,null,{default:v(()=>[(S(!0),ue(Re,null,Se(t.arr,(h,p)=>(S(),j(c,{key:p},{default:v(()=>[R(a,{to:`/${h.link}`},{default:v(()=>[V(te(h.title.toUpperCase()),1)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})]),default:v(()=>[z("a",{class:"ant-dropdown-link",onClick:e[0]||(e[0]=Ze(()=>{},["prevent"]))},[V(" NAVIGATE "),R(i)])]),_:1})}const rt=le(tt,[["render",nt]]),st="/assets/fantano-logo-fbc9edd5.png",ot=t=>(Qe("data-v-6a51bdde"),t=t(),et(),t),it={class:"header"},at=ot(()=>z("img",{class:"header__logo",src:st,alt:"#"},null,-1)),ct={class:"header__right"};function lt(t,e,n,s,r,o){const i=E("RouterLink"),a=E("Dropdown");return S(),ue("header",it,[R(i,{to:"/"},{default:v(()=>[at]),_:1}),z("nav",null,[z("div",ct,[R(a,{arr:r.arr},null,8,["arr"])])])])}const ut={name:"AppHeader",props:["currentIndex"],components:{Dropdown:rt},data(){return{arr:[{title:"reviews",link:"videos"},{title:"wtr",link:"wtr"},{title:"ynr",link:"ynr"},{title:"list week",link:"list-week"},{title:"podcasts",link:"podcasts"},{title:"vinyls",link:"vinyls"},{title:"trkrvws",link:"trkrvws"},{title:"other",link:"other"}]}}},Yr=le(ut,[["render",lt],["__scopeId","data-v-6a51bdde"]]),ht={name:"AppBreadcrumb",props:["arr","title"]};function dt(t,e,n,s,r,o){const i=E("Router-Link"),a=E("a-breadcrumb-item"),c=E("a-breadcrumb");return S(),j(c,null,{default:v(()=>[(S(!0),ue(Re,null,Se(n.arr,(l,f)=>(S(),j(a,{key:f},{default:v(()=>[R(i,{to:l.link},{default:v(()=>[V(te(l.title),1)]),_:2},1032,["to"])]),_:2},1024))),128)),R(a,null,{default:v(()=>[V(te(n.title),1)]),_:1})]),_:1})}const Jr=le(ht,[["render",dt]]);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ke=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},ft=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const o=t[n++];e[s++]=String.fromCharCode((r&31)<<6|o&63)}else if(r>239&&r<365){const o=t[n++],i=t[n++],a=t[n++],c=((r&7)<<18|(o&63)<<12|(i&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const o=t[n++],i=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(o&63)<<6|i&63)}}return e.join("")},Te={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const o=t[r],i=r+1<t.length,a=i?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,f=o>>2,h=(o&3)<<4|a>>4;let p=(a&15)<<2|l>>6,_=l&63;c||(_=64,i||(p=64)),s.push(n[f],n[h],n[p],n[_])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ke(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ft(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const o=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,o==null||a==null||l==null||h==null)throw Error();const p=o<<2|a>>4;if(s.push(p),l!==64){const _=a<<4&240|l>>2;if(s.push(_),h!==64){const y=l<<6&192|h;s.push(y)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},pt=function(t){const e=ke(t);return Te.encodeByteArray(e,!0)},W=function(t){return pt(t).replace(/\./g,"")},mt=function(t){try{return Te.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function gt(){return typeof indexedDB=="object"}function _t(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var o;e(((o=r.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}function bt(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wt=()=>bt().__FIREBASE_DEFAULTS__,yt=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Et=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&mt(t[1]);return e&&JSON.parse(e)},Ae=()=>{try{return wt()||yt()||Et()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},vt=t=>{var e,n;return(n=(e=Ae())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},It=t=>{const e=vt(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Dt=()=>{var t;return(t=Ae())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const i=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[W(JSON.stringify(n)),W(JSON.stringify(i)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rt="FirebaseError";class B extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Rt,Object.setPrototypeOf(this,B.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,xe.prototype.create)}}class xe{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,o=this.errors[e],i=o?kt(o,s):"Error",a=`${this.serviceName}: ${i} (${r}).`;return new B(r,a,s)}}function kt(t,e){return t.replace(Tt,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Tt=/\{\$([^}]+)}/g;function ne(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const o=t[r],i=e[r];if(pe(o)&&pe(i)){if(!ne(o,i))return!1}else if(o!==i)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function pe(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(t){return t&&t._delegate?t._delegate:t}class P{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Ct;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(o){if(r)return null;throw o}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ot(e))try{this.getOrInitializeService({instanceIdentifier:C})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:r});s.resolve(o)}catch{}}}}clearInstance(e=C){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=C){return this.instances.has(e)}getOptions(e=C){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[o,i]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);s===a&&i.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),o=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;o.add(e),this.onInitCallbacks.set(r,o);const i=this.instances.get(r);return i&&e(i,r),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:xt(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=C){return this.component?this.component.multipleInstances?e:C:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function xt(t){return t===C?void 0:t}function Ot(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new At(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var u;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(u||(u={}));const $t={debug:u.DEBUG,verbose:u.VERBOSE,info:u.INFO,warn:u.WARN,error:u.ERROR,silent:u.SILENT},Pt=u.INFO,Mt={[u.DEBUG]:"log",[u.VERBOSE]:"log",[u.INFO]:"info",[u.WARN]:"warn",[u.ERROR]:"error"},Nt=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=Mt[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Lt{constructor(e){this.name=e,this._logLevel=Pt,this._logHandler=Nt,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in u))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?$t[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,u.DEBUG,...e),this._logHandler(this,u.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,u.VERBOSE,...e),this._logHandler(this,u.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,u.INFO,...e),this._logHandler(this,u.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,u.WARN,...e),this._logHandler(this,u.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,u.ERROR,...e),this._logHandler(this,u.ERROR,...e)}}const Ht=(t,e)=>e.some(n=>t instanceof n);let me,ge;function Ft(){return me||(me=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ut(){return ge||(ge=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Oe=new WeakMap,re=new WeakMap,Be=new WeakMap,Y=new WeakMap,de=new WeakMap;function jt(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",o),t.removeEventListener("error",i)},o=()=>{n(I(t.result)),r()},i=()=>{s(t.error),r()};t.addEventListener("success",o),t.addEventListener("error",i)});return e.then(n=>{n instanceof IDBCursor&&Oe.set(n,t)}).catch(()=>{}),de.set(e,t),e}function Vt(t){if(re.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",i),t.removeEventListener("abort",i)},o=()=>{n(),r()},i=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",o),t.addEventListener("error",i),t.addEventListener("abort",i)});re.set(t,e)}let se={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return re.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Be.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return I(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function zt(t){se=t(se)}function Wt(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(J(this),e,...n);return Be.set(s,e.sort?e.sort():[e]),I(s)}:Ut().includes(t)?function(...e){return t.apply(J(this),e),I(Oe.get(this))}:function(...e){return I(t.apply(J(this),e))}}function Gt(t){return typeof t=="function"?Wt(t):(t instanceof IDBTransaction&&Vt(t),Ht(t,Ft())?new Proxy(t,se):t)}function I(t){if(t instanceof IDBRequest)return jt(t);if(Y.has(t))return Y.get(t);const e=Gt(t);return e!==t&&(Y.set(t,e),de.set(e,t)),e}const J=t=>de.get(t);function qt(t,e,{blocked:n,upgrade:s,blocking:r,terminated:o}={}){const i=indexedDB.open(t,e),a=I(i);return s&&i.addEventListener("upgradeneeded",c=>{s(I(i.result),c.oldVersion,c.newVersion,I(i.transaction))}),n&&i.addEventListener("blocked",()=>n()),a.then(c=>{o&&c.addEventListener("close",()=>o()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const Kt=["get","getKey","getAll","getAllKeys","count"],Xt=["put","add","delete","clear"],Z=new Map;function _e(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Z.get(e))return Z.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=Xt.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Kt.includes(n)))return;const o=async function(i,...a){const c=this.transaction(i,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return Z.set(e,o),o}zt(t=>({...t,get:(e,n,s)=>_e(e,n)||t.get(e,n,s),has:(e,n)=>!!_e(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Jt(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Jt(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const oe="@firebase/app",be="0.8.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T=new Lt("@firebase/app"),Zt="@firebase/app-compat",Qt="@firebase/analytics-compat",en="@firebase/analytics",tn="@firebase/app-check-compat",nn="@firebase/app-check",rn="@firebase/auth",sn="@firebase/auth-compat",on="@firebase/database",an="@firebase/database-compat",cn="@firebase/functions",ln="@firebase/functions-compat",un="@firebase/installations",hn="@firebase/installations-compat",dn="@firebase/messaging",fn="@firebase/messaging-compat",pn="@firebase/performance",mn="@firebase/performance-compat",gn="@firebase/remote-config",_n="@firebase/remote-config-compat",bn="@firebase/storage",wn="@firebase/storage-compat",yn="@firebase/firestore",En="@firebase/firestore-compat",vn="firebase",In="9.14.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ie="[DEFAULT]",Dn={[oe]:"fire-core",[Zt]:"fire-core-compat",[en]:"fire-analytics",[Qt]:"fire-analytics-compat",[nn]:"fire-app-check",[tn]:"fire-app-check-compat",[rn]:"fire-auth",[sn]:"fire-auth-compat",[on]:"fire-rtdb",[an]:"fire-rtdb-compat",[cn]:"fire-fn",[ln]:"fire-fn-compat",[un]:"fire-iid",[hn]:"fire-iid-compat",[dn]:"fire-fcm",[fn]:"fire-fcm-compat",[pn]:"fire-perf",[mn]:"fire-perf-compat",[gn]:"fire-rc",[_n]:"fire-rc-compat",[bn]:"fire-gcs",[wn]:"fire-gcs-compat",[yn]:"fire-fst",[En]:"fire-fst-compat","fire-js":"fire-js",[vn]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G=new Map,ae=new Map;function Cn(t,e){try{t.container.addComponent(e)}catch(n){T.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function q(t){const e=t.name;if(ae.has(e))return T.debug(`There were multiple attempts to register component ${e}.`),!1;ae.set(e,t);for(const n of G.values())Cn(n,t);return!0}function Sn(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rn={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},D=new xe("app","Firebase",Rn);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new P("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw D.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tn=In;function $e(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:ie,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw D.create("bad-app-name",{appName:String(r)});if(n||(n=Dt()),!n)throw D.create("no-options");const o=G.get(r);if(o){if(ne(n,o.options)&&ne(s,o.config))return o;throw D.create("duplicate-app",{appName:r})}const i=new Bt(r);for(const c of ae.values())i.addComponent(c);const a=new kn(n,s,i);return G.set(r,a),a}function An(t=ie){const e=G.get(t);if(!e&&t===ie)return $e();if(!e)throw D.create("no-app",{appName:t});return e}function O(t,e,n){var s;let r=(s=Dn[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const o=r.match(/\s|\//),i=e.match(/\s|\//);if(o||i){const a=[`Unable to register library "${r}" with version "${e}":`];o&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),o&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),T.warn(a.join(" "));return}q(new P(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xn="firebase-heartbeat-database",On=1,M="firebase-heartbeat-store";let Q=null;function Pe(){return Q||(Q=qt(xn,On,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(M)}}}).catch(t=>{throw D.create("idb-open",{originalErrorMessage:t.message})})),Q}async function Bn(t){var e;try{return(await Pe()).transaction(M).objectStore(M).get(Me(t))}catch(n){if(n instanceof B)T.warn(n.message);else{const s=D.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});T.warn(s.message)}}}async function we(t,e){var n;try{const r=(await Pe()).transaction(M,"readwrite");return await r.objectStore(M).put(e,Me(t)),r.done}catch(s){if(s instanceof B)T.warn(s.message);else{const r=D.create("idb-set",{originalErrorMessage:(n=s)===null||n===void 0?void 0:n.message});T.warn(r.message)}}}function Me(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $n=1024,Pn=30*24*60*60*1e3;class Mn{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ln(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ye();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const o=new Date(r.date).valueOf();return Date.now()-o<=Pn}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ye(),{heartbeatsToSend:n,unsentEntries:s}=Nn(this._heartbeatsCache.heartbeats),r=W(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function ye(){return new Date().toISOString().substring(0,10)}function Nn(t,e=$n){const n=[];let s=t.slice();for(const r of t){const o=n.find(i=>i.agent===r.agent);if(o){if(o.dates.push(r.date),Ee(n)>e){o.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Ee(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Ln{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return gt()?_t().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Bn(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return we(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return we(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Ee(t){return W(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hn(t){q(new P("platform-logger",e=>new Yt(e),"PRIVATE")),q(new P("heartbeat",e=>new Mn(e),"PRIVATE")),O(oe,be,t),O(oe,be,"esm2017"),O("fire-js","")}Hn("");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ne="firebasestorage.googleapis.com",Le="storageBucket",Fn=2*60*1e3,Un=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d extends B{constructor(e,n,s=0){super(ee(e),`Firebase Storage: ${n} (${ee(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,d.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return ee(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function ee(t){return"storage/"+t}function He(){const t="An unknown error occurred, please check the error payload for server response.";return new d("unknown",t)}function jn(t){return new d("object-not-found","Object '"+t+"' does not exist.")}function Vn(t){return new d("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function zn(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new d("unauthenticated",t)}function Wn(){return new d("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function Gn(t){return new d("unauthorized","User does not have permission to access '"+t+"'.")}function qn(){return new d("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function Kn(){return new d("canceled","User canceled the upload/download.")}function Xn(t){return new d("invalid-url","Invalid URL '"+t+"'.")}function Yn(t){return new d("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function Jn(){return new d("no-default-bucket","No default bucket found. Did you set the '"+Le+"' property when initializing the app?")}function Zn(){return new d("no-download-url","The given file does not have any download URLs.")}function ce(t){return new d("invalid-argument",t)}function Fe(){return new d("app-deleted","The Firebase app was deleted.")}function Qn(t){return new d("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function $(t){throw new d("internal-error","Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=g.makeFromUrl(e,n)}catch{return new g(e,"")}if(s.path==="")return s;throw Yn(e)}static makeFromUrl(e,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function o(w){w.path.charAt(w.path.length-1)==="/"&&(w.path_=w.path_.slice(0,-1))}const i="(/(.*))?$",a=new RegExp("^gs://"+r+i,"i"),c={bucket:1,path:3};function l(w){w.path_=decodeURIComponent(w.path)}const f="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",_=new RegExp(`^https?://${h}/${f}/b/${r}/o${p}`,"i"),y={bucket:1,path:3},N=n===Ne?"(?:storage.googleapis.com|storage.cloud.google.com)":n,b="([^?#]*)",L=new RegExp(`^https?://${N}/${r}/${b}`,"i"),x=[{regex:a,indices:c,postModify:o},{regex:_,indices:y,postModify:l},{regex:L,indices:{bucket:1,path:2},postModify:l}];for(let w=0;w<x.length;w++){const H=x[w],K=H.regex.exec(e);if(K){const Xe=K[H.indices.bucket];let X=K[H.indices.path];X||(X=""),s=new g(Xe,X),H.postModify(s);break}}if(s==null)throw Xn(e);return s}}class er{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tr(t,e,n){let s=1,r=null,o=null,i=!1,a=0;function c(){return a===2}let l=!1;function f(...b){l||(l=!0,e.apply(null,b))}function h(b){r=setTimeout(()=>{r=null,t(_,c())},b)}function p(){o&&clearTimeout(o)}function _(b,...L){if(l){p();return}if(b){p(),f.call(null,b,...L);return}if(c()||i){p(),f.call(null,b,...L);return}s<64&&(s*=2);let x;a===1?(a=2,x=0):x=(s+Math.random())*1e3,h(x)}let y=!1;function N(b){y||(y=!0,p(),!l&&(r!==null?(b||(a=2),clearTimeout(r),h(0)):b||(a=1)))}return h(0),o=setTimeout(()=>{i=!0,N(!0)},n),N}function nr(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rr(t){return t!==void 0}function sr(t){return typeof t=="object"&&!Array.isArray(t)}function Ue(t){return typeof t=="string"||t instanceof String}function ve(t,e,n,s){if(s<e)throw ce(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw ce(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(t,e,n){let s=e;return n==null&&(s=`https://${e}`),`${n}://${s}/v0${t}`}function Ve(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const r=e(s)+"="+e(t[s]);n=n+r+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var k;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(k||(k={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function or(t,e){const n=t>=500&&t<600,r=[408,429].indexOf(t)!==-1,o=e.indexOf(t)!==-1;return n||r||o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(e,n,s,r,o,i,a,c,l,f,h,p=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=o,this.additionalRetryCodes_=i,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=f,this.connectionFactory_=h,this.retry=p,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((_,y)=>{this.resolve_=_,this.reject_=y,this.start_()})}start_(){const e=(s,r)=>{if(r){s(!1,new F(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const i=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&o.addUploadProgressListener(i),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(i),this.pendingConnection_=null;const a=o.getErrorCode()===k.NO_ERROR,c=o.getStatus();if((!a||or(c,this.additionalRetryCodes_))&&this.retry){const f=o.getErrorCode()===k.ABORT;s(!1,new F(!1,null,f));return}const l=this.successCodes_.indexOf(c)!==-1;s(!0,new F(l,o))})},n=(s,r)=>{const o=this.resolve_,i=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());rr(c)?o(c):o()}catch(c){i(c)}else if(a!==null){const c=He();c.serverResponse=a.getErrorText(),this.errorCallback_?i(this.errorCallback_(a,c)):i(c)}else if(r.canceled){const c=this.appDelete_?Fe():Kn();i(c)}else{const c=qn();i(c)}};this.canceled_?n(!1,new F(!1,null,!0)):this.backoffId_=tr(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&nr(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class F{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function ar(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function cr(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function lr(t,e){e&&(t["X-Firebase-GMPID"]=e)}function ur(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function hr(t,e,n,s,r,o,i=!0){const a=Ve(t.urlParams),c=t.url+a,l=Object.assign({},t.headers);return lr(l,e),ar(l,n),cr(l,o),ur(l,s),new ir(c,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(t){let e;try{e=JSON.parse(t)}catch{return null}return sr(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dr(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function fr(t,e){const n=e.split("/").filter(s=>s.length>0).join("/");return t.length===0?n:t+"/"+n}function We(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pr(t,e){return e}class m{constructor(e,n,s,r){this.server=e,this.local=n||e,this.writable=!!s,this.xform=r||pr}}let U=null;function mr(t){return!Ue(t)||t.length<2?t:We(t)}function gr(){if(U)return U;const t=[];t.push(new m("bucket")),t.push(new m("generation")),t.push(new m("metageneration")),t.push(new m("name","fullPath",!0));function e(o,i){return mr(i)}const n=new m("name");n.xform=e,t.push(n);function s(o,i){return i!==void 0?Number(i):i}const r=new m("size");return r.xform=s,t.push(r),t.push(new m("timeCreated")),t.push(new m("updated")),t.push(new m("md5Hash",null,!0)),t.push(new m("cacheControl",null,!0)),t.push(new m("contentDisposition",null,!0)),t.push(new m("contentEncoding",null,!0)),t.push(new m("contentLanguage",null,!0)),t.push(new m("contentType",null,!0)),t.push(new m("metadata","customMetadata",!0)),U=t,U}function _r(t,e){function n(){const s=t.bucket,r=t.fullPath,o=new g(s,r);return e._makeStorageReference(o)}Object.defineProperty(t,"ref",{get:n})}function br(t,e,n){const s={};s.type="file";const r=n.length;for(let o=0;o<r;o++){const i=n[o];s[i.local]=i.xform(s,e[i.server])}return _r(s,t),s}function wr(t,e,n){const s=ze(e);return s===null?null:br(t,s,n)}function yr(t,e,n,s){const r=ze(e);if(r===null||!Ue(r.downloadTokens))return null;const o=r.downloadTokens;if(o.length===0)return null;const i=encodeURIComponent;return o.split(",").map(l=>{const f=t.bucket,h=t.fullPath,p="/b/"+i(f)+"/o/"+i(h),_=je(p,n,s),y=Ve({alt:"media",token:l});return _+y})[0]}class Er{constructor(e,n,s,r){this.url=e,this.method=n,this.handler=s,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vr(t){if(!t)throw He()}function Ir(t,e){function n(s,r){const o=wr(t,r,e);return vr(o!==null),yr(o,r,t.host,t._protocol)}return n}function Dr(t){function e(n,s){let r;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?r=Wn():r=zn():n.getStatus()===402?r=Vn(t.bucket):n.getStatus()===403?r=Gn(t.path):r=s,r.status=n.getStatus(),r.serverResponse=s.serverResponse,r}return e}function Cr(t){const e=Dr(t);function n(s,r){let o=e(s,r);return s.getStatus()===404&&(o=jn(t.path)),o.serverResponse=r.serverResponse,o}return n}function Sr(t,e,n){const s=e.fullServerUrl(),r=je(s,t.host,t._protocol),o="GET",i=t.maxOperationRetryTime,a=new Er(r,o,Ir(t,n),i);return a.errorHandler=Cr(e),a}class Rr{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=k.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=k.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=k.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,s,r){if(this.sent_)throw $("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),r!==void 0)for(const o in r)r.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,r[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw $("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw $("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw $("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw $("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class kr extends Rr{initXhr(){this.xhr_.responseType="text"}}function Tr(){return new kr}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(e,n){this._service=e,n instanceof g?this._location=n:this._location=g.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new A(e,n)}get root(){const e=new g(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return We(this._location.path)}get storage(){return this._service}get parent(){const e=dr(this._location.path);if(e===null)return null;const n=new g(this._location.bucket,e);return new A(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Qn(e)}}function Ar(t){t._throwIfRoot("getDownloadURL");const e=Sr(t.storage,t._location,gr());return t.storage.makeRequestWithTokens(e,Tr).then(n=>{if(n===null)throw Zn();return n})}function xr(t,e){const n=fr(t._location.path,e),s=new g(t._location.bucket,n);return new A(t.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Or(t){return/^[A-Za-z]+:\/\//.test(t)}function Br(t,e){return new A(t,e)}function Ge(t,e){if(t instanceof fe){const n=t;if(n._bucket==null)throw Jn();const s=new A(n,n._bucket);return e!=null?Ge(s,e):s}else return e!==void 0?xr(t,e):t}function $r(t,e){if(e&&Or(e)){if(t instanceof fe)return Br(t,e);throw ce("To use ref(service, url), the first argument must be a Storage instance.")}else return Ge(t,e)}function Ie(t,e){const n=e==null?void 0:e[Le];return n==null?null:g.makeFromBucketSpec(n,t)}function Pr(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:r}=s;r&&(t._overrideAuthToken=typeof r=="string"?r:St(r,t.app.options.projectId))}class fe{constructor(e,n,s,r,o){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=o,this._bucket=null,this._host=Ne,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Fn,this._maxUploadRetryTime=Un,this._requests=new Set,r!=null?this._bucket=g.makeFromBucketSpec(r,this._host):this._bucket=Ie(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=g.makeFromBucketSpec(this._url,e):this._bucket=Ie(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){ve("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){ve("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new A(this,e)}_makeRequest(e,n,s,r,o=!0){if(this._deleted)return new er(Fe());{const i=hr(e,this._appId,s,r,n,this._firebaseVersion,o);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}async makeRequestWithTokens(e,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,r).getPromise()}}const De="@firebase/storage",Ce="0.9.14";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qe="storage";function Mr(t){return t=he(t),Ar(t)}function Nr(t,e){return t=he(t),$r(t,e)}function Lr(t=An(),e){t=he(t);const s=Sn(t,qe).getImmediate({identifier:e}),r=It("storage");return r&&Hr(s,...r),s}function Hr(t,e,n,s={}){Pr(t,e,n,s)}function Fr(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new fe(n,s,r,e,Tn)}function Ur(){q(new P(qe,Fr,"PUBLIC").setMultipleInstances(!0)),O(De,Ce,""),O(De,Ce,"esm2017")}Ur();var jr="firebase",Vr="9.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */O(jr,Vr,"app");const zr={apiKey:"AIzaSyDJKengyV3DYC6v8HCFKwtHTV7FrTnE9d8",authDomain:"fantano-core-969b5.firebaseapp.com",projectId:"fantano-core-969b5",storageBucket:"fantano-core-969b5.appspot.com",messagingSenderId:"771435426511",appId:"1:771435426511:web:852e91795dcd46138e7dba",measurementId:"G-BDDRSDHTD3"},Wr=$e(zr),Gr=Lr(Wr);function Zr(t){return`https://www.youtube.com/embed/${qr(t)}`}function qr(t){let e="";const n=/(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|[^#]*[?&]v=|youtu\.be\/|[^#]*[?&]vi=))([^?&"'>]+)/,s=t.match(n);if(s&&s[1])e=s[1];else{const r=/^https?:\/\/youtu.be\/([\w-]{11})/,o=t.match(r);o&&o[1]&&(e=o[1])}return e}function Qr(t){return`http://img.youtube.com/vi/${Kr(t)}/0.jpg`}function Kr(t){let e=/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,n=t.match(e);return n&&n[7].length==11?n[7]:!1}async function es(t){const e=Nr(Gr,`texts/${t}.md`);try{const n=await Mr(e);return await(await fetch(n)).text()}catch(n){return console.error("Error retrieving Markdown file:",n),""}}export{Yr as A,Jr as B,es as d,Qr as g,Zr as t};
