import{r as v,e as U,q as Z,W as ee,j as C,a as h,b as re,d as te}from"./app-7ed33370.js";import{T as R}from"./TextInput-cc4c1d70.js";import{C as z,H as oe,T as K,B as ne}from"./Text-07e48caf.js";import{G as ae}from"./Guest-9f357365.js";import"./index-44cc2f23.js";import"./ApplicationLogo-44b8ee2e.js";/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var B=function(){return B=Object.assign||function(e){for(var n,c=1,o=arguments.length;c<o;c++)for(var t in n=arguments[c])Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t]);return e},B.apply(this,arguments)};function ie(e,n,c,o){return new(c||(c=Promise))(function(t,d){function a(u){try{i(o.next(u))}catch(r){d(r)}}function p(u){try{i(o.throw(u))}catch(r){d(r)}}function i(u){var r;u.done?t(u.value):(r=u.value,r instanceof c?r:new c(function(f){f(r)})).then(a,p)}i((o=o.apply(e,n||[])).next())})}function ce(e,n){var c,o,t,d,a={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return d={next:p(0),throw:p(1),return:p(2)},typeof Symbol=="function"&&(d[Symbol.iterator]=function(){return this}),d;function p(i){return function(u){return function(r){if(c)throw new TypeError("Generator is already executing.");for(;a;)try{if(c=1,o&&(t=2&r[0]?o.return:r[0]?o.throw||((t=o.return)&&t.call(o),0):o.next)&&!(t=t.call(o,r[1])).done)return t;switch(o=0,t&&(r=[2&r[0],t.value]),r[0]){case 0:case 1:t=r;break;case 4:return a.label++,{value:r[1],done:!1};case 5:a.label++,o=r[1],r=[0];continue;case 7:r=a.ops.pop(),a.trys.pop();continue;default:if(t=a.trys,!((t=t.length>0&&t[t.length-1])||r[0]!==6&&r[0]!==2)){a=0;continue}if(r[0]===3&&(!t||r[1]>t[0]&&r[1]<t[3])){a.label=r[1];break}if(r[0]===6&&a.label<t[1]){a.label=t[1],t=r;break}if(t&&a.label<t[2]){a.label=t[2],a.ops.push(r);break}t[2]&&a.ops.pop(),a.trys.pop();continue}r=n.call(e,a)}catch(f){r=[6,f],o=0}finally{c=t=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([i,u])}}}var V,se=function(e){var n;e?function(c){if(c)for(;c.lastChild;)c.lastChild.remove()}(typeof e=="string"?document.getElementById(e):e):(n=document.querySelector(".grecaptcha-badge"))&&n.parentNode&&document.body.removeChild(n.parentNode)},ue=function(e,n){se(n),window.___grecaptcha_cfg=void 0;var c=document.querySelector("#"+e);c&&c.remove(),function(){var o=document.querySelector('script[src^="https://www.gstatic.com/recaptcha/releases"]');o&&o.remove()}()},le=function(e){var n=e.render,c=e.onLoadCallbackName,o=e.language,t=e.onLoad,d=e.useRecaptchaNet,a=e.useEnterprise,p=e.scriptProps,i=p===void 0?{}:p,u=i.nonce,r=u===void 0?"":u,f=i.defer,G=f!==void 0&&f,g=i.async,F=g!==void 0&&g,x=i.id,S=x===void 0?"":x,O=i.appendTo,b=S||"google-recaptcha-v3";if(function(w){return!!document.querySelector("#"+w)}(b))t();else{var P=function(w){return"https://www."+(w.useRecaptchaNet?"recaptcha.net":"google.com")+"/recaptcha/"+(w.useEnterprise?"enterprise.js":"api.js")}({useEnterprise:a,useRecaptchaNet:d}),y=document.createElement("script");y.id=b,y.src=P+"?render="+n+(n==="explicit"?"&onload="+c:"")+(o?"&hl="+o:""),r&&(y.nonce=r),y.defer=!!G,y.async=!!F,y.onload=t,(O==="body"?document.body:document.getElementsByTagName("head")[0]).appendChild(y)}},$=function(e){typeof process<"u"&&process.env&&!1||console.warn(e)};(function(e){e.SCRIPT_NOT_AVAILABLE="Recaptcha script is not available"})(V||(V={}));var J=v.createContext({executeRecaptcha:function(){throw Error("GoogleReCaptcha Context has not yet been implemented, if you are using useGoogleReCaptcha hook, make sure the hook is called inside component wrapped by GoogleRecaptchaProvider")}});J.Consumer;function de(e){var n=e.reCaptchaKey,c=e.useEnterprise,o=c!==void 0&&c,t=e.useRecaptchaNet,d=t!==void 0&&t,a=e.scriptProps,p=e.language,i=e.container,u=e.children,r=v.useState(null),f=r[0],G=r[1],g=v.useRef(n),F=JSON.stringify(a),x=JSON.stringify(i==null?void 0:i.parameters);v.useEffect(function(){if(n){var b=(a==null?void 0:a.id)||"google-recaptcha-v3",P=(a==null?void 0:a.onLoadCallbackName)||"onRecaptchaLoadCallback";return window[P]=function(){var y=o?window.grecaptcha.enterprise:window.grecaptcha,w=B({badge:"inline",size:"invisible",sitekey:n},(i==null?void 0:i.parameters)||{});g.current=y.render(i==null?void 0:i.element,w)},le({render:i!=null&&i.element?"explicit":n,onLoadCallbackName:P,useEnterprise:o,useRecaptchaNet:d,scriptProps:a,language:p,onLoad:function(){if(window&&window.grecaptcha){var y=o?window.grecaptcha.enterprise:window.grecaptcha;y.ready(function(){G(y)})}else $("<GoogleRecaptchaProvider /> "+V.SCRIPT_NOT_AVAILABLE)},onError:function(){$("Error loading google recaptcha script")}}),function(){ue(b,i==null?void 0:i.element)}}$("<GoogleReCaptchaProvider /> recaptcha key not provided")},[o,d,F,x,p,n,i==null?void 0:i.element]);var S=v.useCallback(function(b){if(!f||!f.execute)throw new Error("<GoogleReCaptchaProvider /> Google Recaptcha has not been loaded");return f.execute(g.current,{action:b})},[f,g]),O=v.useMemo(function(){return{executeRecaptcha:f?S:void 0,container:i==null?void 0:i.element}},[S,f,i==null?void 0:i.element]);return U.createElement(J.Provider,{value:O},u)}var pe=function(){return v.useContext(J)};function fe(e){var n=this,c=e.action,o=e.onVerify,t=e.refreshReCaptcha,d=pe();v.useEffect(function(){var p=d.executeRecaptcha;p&&ie(n,void 0,void 0,function(){var i;return ce(this,function(u){switch(u.label){case 0:return[4,p(c)];case 1:return i=u.sent(),o?(o(i),[2]):($("Please define an onVerify function"),[2])}})})},[c,o,t,d]);var a=d.container;return typeof a=="string"?U.createElement("div",{id:a}):null}function X(e,n){return e(n={exports:{}},n.exports),n.exports;/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */}var l=typeof Symbol=="function"&&Symbol.for,I=l?Symbol.for("react.element"):60103,H=l?Symbol.for("react.portal"):60106,E=l?Symbol.for("react.fragment"):60107,_=l?Symbol.for("react.strict_mode"):60108,k=l?Symbol.for("react.profiler"):60114,N=l?Symbol.for("react.provider"):60109,M=l?Symbol.for("react.context"):60110,D=l?Symbol.for("react.async_mode"):60111,q=l?Symbol.for("react.concurrent_mode"):60111,L=l?Symbol.for("react.forward_ref"):60112,T=l?Symbol.for("react.suspense"):60113,me=l?Symbol.for("react.suspense_list"):60120,A=l?Symbol.for("react.memo"):60115,j=l?Symbol.for("react.lazy"):60116,ye=l?Symbol.for("react.block"):60121,he=l?Symbol.for("react.fundamental"):60117,ve=l?Symbol.for("react.responder"):60118,ge=l?Symbol.for("react.scope"):60119;function m(e){if(typeof e=="object"&&e!==null){var n=e.$$typeof;switch(n){case I:switch(e=e.type){case D:case q:case E:case k:case _:case T:return e;default:switch(e=e&&e.$$typeof){case M:case L:case j:case A:case N:return e;default:return n}}case H:return n}}}function W(e){return m(e)===q}var be={AsyncMode:D,ConcurrentMode:q,ContextConsumer:M,ContextProvider:N,Element:I,ForwardRef:L,Fragment:E,Lazy:j,Memo:A,Portal:H,Profiler:k,StrictMode:_,Suspense:T,isAsyncMode:function(e){return W(e)||m(e)===D},isConcurrentMode:W,isContextConsumer:function(e){return m(e)===M},isContextProvider:function(e){return m(e)===N},isElement:function(e){return typeof e=="object"&&e!==null&&e.$$typeof===I},isForwardRef:function(e){return m(e)===L},isFragment:function(e){return m(e)===E},isLazy:function(e){return m(e)===j},isMemo:function(e){return m(e)===A},isPortal:function(e){return m(e)===H},isProfiler:function(e){return m(e)===k},isStrictMode:function(e){return m(e)===_},isSuspense:function(e){return m(e)===T},isValidElementType:function(e){return typeof e=="string"||typeof e=="function"||e===E||e===q||e===k||e===_||e===T||e===me||typeof e=="object"&&e!==null&&(e.$$typeof===j||e.$$typeof===A||e.$$typeof===N||e.$$typeof===M||e.$$typeof===L||e.$$typeof===he||e.$$typeof===ve||e.$$typeof===ge||e.$$typeof===ye)},typeOf:m},s=X(function(e,n){}),Y=(s.AsyncMode,s.ConcurrentMode,s.ContextConsumer,s.ContextProvider,s.Element,s.ForwardRef,s.Fragment,s.Lazy,s.Memo,s.Portal,s.Profiler,s.StrictMode,s.Suspense,s.isAsyncMode,s.isConcurrentMode,s.isContextConsumer,s.isContextProvider,s.isElement,s.isForwardRef,s.isFragment,s.isLazy,s.isMemo,s.isPortal,s.isProfiler,s.isStrictMode,s.isSuspense,s.isValidElementType,s.typeOf,X(function(e){e.exports=be})),we={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Q={};Q[Y.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Q[Y.Memo]=we;function Ee(){const{catradar:e}=Z().props,n=e.recaptcha_site_key,{data:c,setData:o,post:t,processing:d,errors:a,reset:p}=ee({name:"",email:"",password:"",password_confirmation:"",token:""});v.useEffect(()=>()=>{p("password","password_confirmation")},[]);const i=r=>{r.preventDefault(),t(route("register"))},u=v.useCallback(r=>{debugger;o("token",r)});return C(ae,{children:[h(re,{title:"Register"}),h(de,{reCaptchaKey:{recaptcha_site_key:n},children:h("form",{onSubmit:i,children:C(z,{children:[C(z.Header,{children:[h(oe,{children:"Register "}),C(K,{size:"sm",color:"secondary",children:["Already have an account?"," ",h(K,{as:te,size:"sm",href:route("login"),children:"Login"})]})]}),C(z.Body,{children:[C("div",{className:"space-y-4",children:[h(R,{id:"name",label:"Name",onChange:r=>o("name",r.target.value),placeholder:"Your name",error:a.name,value:c.name,required:!0}),h(R,{id:"email",label:"Email",autoComplete:"email",onChange:r=>o("email",r.target.value),placeholder:"you@reactor.dev",error:a.email,value:c.email,required:!0}),h(R,{id:"password",type:"password",label:"Password",autoComplete:"current-password",onChange:r=>o("password",r.target.value),placeholder:"Your password",error:a.password,required:!0}),h(R,{id:"password_confirmation",type:"password",label:"Confirm Password",onChange:r=>o("password_confirmation",r.target.value),placeholder:"Confirm Password",error:a.password_confirmation,required:!0})]}),h(fe,{onVerify:u}),h("input",{type:"hidden",id:"token"}),h(ne,{type:"submit",className:"mt-6",radius:"lg",fullWidth:!0,loading:d,children:"Register"})]})]})})})]})}export{Ee as default};
