import{x as c,y as f,z as d,A as l,B as p,C as r,D as v,E as m,G as h,H as w}from"./index-18dc3d86.js";function y(e){return c()?(f(e),!0):!1}const M=typeof window<"u",E=()=>{};function L(...e){if(e.length!==1)return d(...e);const n=e[0];return typeof n=="function"?l(p(()=>({get:n,set:E}))):r(n)}const S=M?window:void 0;function g(){const e=r(!1);return h()&&w(()=>{e.value=!0}),e}function C(e){const n=g();return m(()=>(n.value,!!e()))}function R(e,n={}){const{window:s=S}=n,a=C(()=>s&&"matchMedia"in s&&typeof s.matchMedia=="function");let t;const u=r(!1),i=()=>{t&&("removeEventListener"in t?t.removeEventListener("change",o):t.removeListener(o))},o=()=>{a.value&&(i(),t=s.matchMedia(L(e).value),u.value=!!(t!=null&&t.matches),t&&("addEventListener"in t?t.addEventListener("change",o):t.addListener(o)))};return v(o),y(()=>i()),u}export{R as u};
