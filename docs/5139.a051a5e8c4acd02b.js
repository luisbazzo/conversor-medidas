"use strict";(self.webpackChunkconversorAngular=self.webpackChunkconversorAngular||[]).push([[5139],{5139:(q,O,h)=>{h.r(O),h.d(O,{startInputShims:()=>X});var w=h(5861),C=h(9279),_=h(9397),m=h(3457),A=(()=>{return(e=A||(A={})).Body="body",e.Ionic="ionic",e.Native="native",e.None="none",A;var e})();const j={getEngine(){var e;return(null===(e=null==m.w?void 0:m.w.Capacitor)||void 0===e?void 0:e.isPluginAvailable("Keyboard"))&&(null==m.w?void 0:m.w.Capacitor.Plugins.Keyboard)},getResizeMode(){const e=this.getEngine();return e&&e.getResizeMode?e.getResizeMode():Promise.resolve(void 0)}},I=new WeakMap,P=(e,n,t,o=0,s=!1)=>{I.has(e)!==t&&(t?F(e,n,o,s):H(e,n))},F=(e,n,t,o=!1)=>{const s=n.parentNode,i=n.cloneNode(!1);i.classList.add("cloned-input"),i.tabIndex=-1,o&&(i.disabled=!0),s.appendChild(i),I.set(e,i);const d="rtl"===e.ownerDocument.dir?9999:-9999;e.style.pointerEvents="none",n.style.transform=`translate3d(${d}px,${t}px,0) scale(0)`},H=(e,n)=>{const t=I.get(e);t&&(I.delete(e),t.remove()),e.style.pointerEvents="",n.style.transform=""},p="input, textarea, [no-blur], [contenteditable]",K="$ionPaddingTimer",T=(e,n,t)=>{const o=e[K];o&&clearTimeout(o),n>0?e.style.setProperty("--keyboard-offset",`${n}px`):e[K]=setTimeout(()=>{e.style.setProperty("--keyboard-offset","0px"),t&&t()},120)},N=(e,n,t)=>{e.addEventListener("focusout",()=>{n&&T(n,0,t)},{once:!0})};let y=0;const V=(e,n,t,o,s,i,a,d=!1)=>{const r=i&&(void 0===a||a.mode===A.None),S=function(){var u=(0,w.Z)(function*(){J(e,n,t,o,s,r,d)});return function(){return u.apply(this,arguments)}}();return e.addEventListener("focusin",S,!0),()=>{e.removeEventListener("focusin",S,!0)}},J=function(){var e=(0,w.Z)(function*(n,t,o,s,i,a,d=!1){if(!o&&!s)return;const r=((e,n,t)=>{var o;return((e,n,t,o)=>{const s=e.top,i=e.bottom,a=n.top,r=a+15,u=Math.min(n.bottom,o-t)-50-i,g=r-s,l=Math.round(u<0?-u:g>0?-g:0),v=Math.min(l,s-a),M=Math.abs(v)/.3;return{scrollAmount:v,scrollDuration:Math.min(400,Math.max(150,M)),scrollPadding:t,inputSafeY:4-(s-r)}})((null!==(o=e.closest("ion-item,[ion-item]"))&&void 0!==o?o:e).getBoundingClientRect(),n.getBoundingClientRect(),t,e.ownerDocument.defaultView.innerHeight)})(n,o||s,i);if(o&&Math.abs(r.scrollAmount)<4)return t.focus(),void(a&&null!==o&&(y+=r.scrollPadding,T(o,y),N(t,o,()=>y=0)));if(P(n,t,!0,r.inputSafeY,d),t.focus(),(0,_.r)(()=>n.click()),a&&o&&(y+=r.scrollPadding,T(o,y)),typeof window<"u"){let S;const u=function(){var l=(0,w.Z)(function*(){void 0!==S&&clearTimeout(S),window.removeEventListener("ionKeyboardDidShow",g),window.removeEventListener("ionKeyboardDidShow",u),o&&(yield(0,C.c)(o,0,r.scrollAmount,r.scrollDuration)),P(n,t,!1,r.inputSafeY),t.focus(),a&&N(t,o,()=>y=0)});return function(){return l.apply(this,arguments)}}(),g=()=>{window.removeEventListener("ionKeyboardDidShow",g),window.addEventListener("ionKeyboardDidShow",u)};if(o){const l=yield(0,C.g)(o);if(r.scrollAmount>l.scrollHeight-l.clientHeight-l.scrollTop)return"password"===t.type?(r.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",g)):window.addEventListener("ionKeyboardDidShow",u),void(S=setTimeout(u,1e3))}u()}});return function(t,o,s,i,a,d){return e.apply(this,arguments)}}(),X=function(){var e=(0,w.Z)(function*(n,t){const o=document,s="ios"===t,i="android"===t,a=n.getNumber("keyboardHeight",290),d=n.getBoolean("scrollAssist",!0),r=n.getBoolean("hideCaretOnScroll",s),S=n.getBoolean("inputBlurring",s),u=n.getBoolean("scrollPadding",!0),g=Array.from(o.querySelectorAll("ion-input, ion-textarea")),l=new WeakMap,v=new WeakMap,U=yield j.getResizeMode(),M=function(){var f=(0,w.Z)(function*(c){yield new Promise(b=>(0,_.c)(c,b));const x=c.shadowRoot||c,D=x.querySelector("input")||x.querySelector("textarea"),L=(0,C.f)(c),W=L?null:c.closest("ion-footer");if(D){if(L&&r&&!l.has(c)){const b=((e,n,t)=>{if(!t||!n)return()=>{};const o=d=>{(e=>e===e.getRootNode().activeElement)(n)&&P(e,n,d)},s=()=>P(e,n,!1),i=()=>o(!0),a=()=>o(!1);return(0,_.a)(t,"ionScrollStart",i),(0,_.a)(t,"ionScrollEnd",a),n.addEventListener("blur",s),()=>{(0,_.b)(t,"ionScrollStart",i),(0,_.b)(t,"ionScrollEnd",a),n.removeEventListener("blur",s)}})(c,D,L);l.set(c,b)}if("date"!==D.type&&"datetime-local"!==D.type&&(L||W)&&d&&!v.has(c)){const b=V(c,D,L,W,a,u,U,i);v.set(c,b)}}});return function(x){return f.apply(this,arguments)}}();S&&(()=>{let e=!0,n=!1;const t=document;(0,_.a)(t,"ionScrollStart",()=>{n=!0}),t.addEventListener("focusin",()=>{e=!0},!0),t.addEventListener("touchend",a=>{if(n)return void(n=!1);const d=t.activeElement;if(!d||d.matches(p))return;const r=a.target;r!==d&&(r.matches(p)||r.closest(p)||(e=!1,setTimeout(()=>{e||d.blur()},50)))},!1)})();for(const f of g)M(f);o.addEventListener("ionInputDidLoad",f=>{M(f.detail)}),o.addEventListener("ionInputDidUnload",f=>{(f=>{if(r){const c=l.get(f);c&&c(),l.delete(f)}if(d){const c=v.get(f);c&&c(),v.delete(f)}})(f.detail)})});return function(t,o){return e.apply(this,arguments)}}()}}]);