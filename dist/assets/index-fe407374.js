import{E as c,G as f,H as d,I as l,J as p,K as r,L as v,x as m,N as h,O as w}from"./index-4c1de486.js";function M(e){return c()?(f(e),!0):!1}const y=typeof window<"u",L=()=>{};function E(...e){if(e.length!==1)return d(...e);const n=e[0];return typeof n=="function"?l(p(()=>({get:n,set:L}))):r(n)}const S=y?window:void 0;function g(){const e=r(!1);return h()&&w(()=>{e.value=!0}),e}function C(e){const n=g();return m(()=>(n.value,!!e()))}function x(e,n={}){const{window:s=S}=n,a=C(()=>s&&"matchMedia"in s&&typeof s.matchMedia=="function");let t;const u=r(!1),i=()=>{t&&("removeEventListener"in t?t.removeEventListener("change",o):t.removeListener(o))},o=()=>{a.value&&(i(),t=s.matchMedia(E(e).value),u.value=!!(t!=null&&t.matches),t&&("addEventListener"in t?t.addEventListener("change",o):t.addListener(o)))};return v(o),M(()=>i()),u}export{x as u};