import{A,a as C}from"./AppFooter-584a8783.js";import{Y as R}from"./vue3-youtube.umd-03f0e432.js";import{o as v,c as h,e as B,b as s,n as S,l as j,m as F,q as H,s as Y,u as _,x as y,y as z,v as N,r as k,a as O,t as w,F as M,_ as E}from"./index-6e127ddb.js";import{j as T}from"./main-channel-b73c72c1.js";var D={name:"Toggle",emits:["input","update:modelValue","change"],props:{value:{validator:function(e){return t=>["number","string","boolean"].indexOf(typeof t)!==-1||t==null},required:!1},modelValue:{validator:function(e){return t=>["number","string","boolean"].indexOf(typeof t)!==-1||t==null},required:!1},id:{type:[String,Number],required:!1,default:"toggle"},name:{type:[String,Number],required:!1,default:"toggle"},disabled:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},falseValue:{type:[String,Number,Boolean],required:!1,default:!1},trueValue:{type:[String,Number,Boolean],required:!1,default:!0},onLabel:{type:[String,Object],required:!1,default:""},offLabel:{type:[String,Object],required:!1,default:""},classes:{type:Object,required:!1,default:()=>({})},labelledby:{type:String,required:!1},describedby:{type:String,required:!1},aria:{required:!1,type:Object,default:()=>({})}},setup(e,t){const a=function(o,g,d){const{value:u,modelValue:r,falseValue:i,trueValue:l,disabled:b}=_(o),c=r&&r.value!==void 0?r:u,p=y(()=>c.value===l.value),m=f=>{g.emit("input",f),g.emit("update:modelValue",f),g.emit("change",f)},q=()=>{m(l.value)},L=()=>{m(i.value)};return[null,void 0,!1,0,"0","off"].indexOf(c.value)!==-1&&[i.value,l.value].indexOf(c.value)===-1&&L(),[!0,1,"1","on"].indexOf(c.value)!==-1&&[i.value,l.value].indexOf(c.value)===-1&&q(),{externalValue:c,checked:p,update:m,check:q,uncheck:L,handleInput:f=>{m(f.target.checked?l.value:i.value)},handleClick:()=>{b.value||(p.value?L():q())}}}(e,t),V=function(o,g,d){const{trueValue:u,falseValue:r,onLabel:i,offLabel:l}=_(o),b=d.checked,c=d.update;return{label:y(()=>{let p=b.value?i.value:l.value;return p||(p="&nbsp;"),p}),toggle:()=>{c(b.value?r.value:u.value)},on:()=>{c(u.value)},off:()=>{c(r.value)}}}(e,0,{checked:a.checked,update:a.update}),n=function(o,g,d){const u=_(o),r=u.disabled,i=d.checked,l=y(()=>({container:"toggle-container",toggle:"toggle",toggleOn:"toggle-on",toggleOff:"toggle-off",toggleOnDisabled:"toggle-on-disabled",toggleOffDisabled:"toggle-off-disabled",handle:"toggle-handle",handleOn:"toggle-handle-on",handleOff:"toggle-handle-off",handleOnDisabled:"toggle-handle-on-disabled",handleOffDisabled:"toggle-handle-off-disabled",label:"toggle-label",...u.classes.value}));return{classList:y(()=>({container:l.value.container,toggle:[l.value.toggle,r.value?i.value?l.value.toggleOnDisabled:l.value.toggleOffDisabled:i.value?l.value.toggleOn:l.value.toggleOff],handle:[l.value.handle,r.value?i.value?l.value.handleOnDisabled:l.value.handleOffDisabled:i.value?l.value.handleOn:l.value.handleOff],label:l.value.label}))}}(e,0,{checked:a.checked}),x=function(o,g,d){const{disabled:u}=_(o),r=d.check,i=d.uncheck,l=d.checked;return{handleSpace:()=>{u.value||(l.value?i():r())}}}(e,0,{check:a.check,uncheck:a.uncheck,checked:a.checked});return{...a,...n,...V,...x}}};const I=["tabindex","aria-checked","aria-describedby","aria-labelledby"],K=["id","name","value","checked","disabled"],U=["innerHTML"],P=["checked"];D.render=function(e,t,a,V,n,x){return v(),h("div",H({class:e.classList.container,tabindex:a.disabled?void 0:0,"aria-checked":e.checked,"aria-describedby":a.describedby,"aria-labelledby":a.labelledby,role:"switch"},a.aria,{onKeypress:t[1]||(t[1]=Y(z((...o)=>e.handleSpace&&e.handleSpace(...o),["prevent"]),["space"]))}),[B(s("input",{type:"checkbox",id:a.id,name:a.name,value:a.trueValue,checked:e.checked,disabled:a.disabled},null,8,K),[[N,!1]]),s("div",{class:S(e.classList.toggle),onClick:t[0]||(t[0]=(...o)=>e.handleClick&&e.handleClick(...o))},[s("span",{class:S(e.classList.handle)},null,2),j(e.$slots,"label",{checked:e.checked,classList:e.classList},()=>[s("span",{class:S(e.classList.label),innerHTML:e.label},null,10,U)]),a.required?(v(),h("input",{key:0,type:"checkbox",style:{appearance:"none",height:"1px",margin:"0",padding:"0",fontSize:"0",background:"transparent",position:"absolute",width:"100%",bottom:"0",outline:"none"},checked:e.checked,"aria-hidden":"true",tabindex:"-1",required:""},null,8,P)):F("v-if",!0)],2)],16,I)},D.__file="src/Toggle.vue";const G={class:"review"},J={class:"review__left"},Q=["src"],W={class:"review__right"},X={class:"review__header"},Z={class:"review__title"},$={class:"text-field multiline"},ee={key:0},le={key:1};function ae(e,t,a,V,n,x){const o=k("AppHeader"),g=k("YouTube"),d=k("Toggle"),u=k("AppFooter");return v(),h(M,null,[O(o),s("div",G,[s("div",J,[O(g,{class:"video",src:n.current.video,onReady:e.onReady,ref:"youtube"},null,8,["src","onReady"]),s("iframe",{style:{"border-radius":"12px"},src:`${n.current.spotify}&theme=0`,width:"100%",height:"452",frameBorder:"0",allowfullscreen:"",allow:"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",loading:"lazy"},null,8,Q)]),s("div",W,[s("div",X,[s("h1",Z,w(n.current.title)+" ("+w(n.current.year)+")",1),B(O(d,{class:"review__toggle",modelValue:n.en,"onUpdate:modelValue":t[0]||(t[0]=r=>n.en=r),name:"toggle",onLabel:"EN",offLabel:"RU"},null,8,["modelValue"]),[[N,"ru"in n.current]])]),s("div",$,[n.en?(v(),h("p",ee,w(n.current.en),1)):(v(),h("p",le,w(n.current.ru),1))])])]),O(u)],64)}const te={components:{AppHeader:A,AppFooter:C,YouTube:R,Toggle:D},data(){return{arr:T.filter(e=>e.type=="review"),current:null,en:!0}},created(){this.current=T.filter(e=>e.id==this.$route.params.review)[0]}},de=E(te,[["render",ae],["__scopeId","data-v-f79d430a"]]);export{de as default};