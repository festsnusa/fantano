import{g as A,A as B,B as H,j as p}from"./main-channel-2e127672.js";import{o as l,c as i,a as S,_ as f,r as a,b as t,t as $,d as s,w as u,e as x,F as v,f as V,g as m,h as I,v as h,p as E,i as F}from"./index-4237c0a7.js";import{A as g}from"./AppPreloader-e17f5a58.js";const N="/assets/vk-b764f8fc.png",R={class:"footer"},L=S('<ul class="list" data-v-0f2d1c87><a href="https://vk.com/mbdtfisstill6" target="_blank" data-v-0f2d1c87><li class="item" data-v-0f2d1c87><img class="image" src="'+N+'" data-v-0f2d1c87></li></a></ul><p class="text" data-v-0f2d1c87>Copyright © 2023 The Needle Drop</p>',2),T=[L];function W(e,w,c,k,n,b){return l(),i("footer",R,T)}const C={name:"AppFooter"},D=f(C,[["render",W],["__scopeId","data-v-0f2d1c87"]]),P={class:"header"},j={class:"header__title"},O={class:"content"},U=["src","alt","onLoad"],Y={class:"content__title"};function q(e,w,c,k,n,b){const d=a("a-button"),_=a("RouterLink"),r=a("AppPreloader");return l(),i(v,null,[t("div",P,[t("h2",j,$(c.title),1),s(_,{to:`/${c.link}`},{default:u(()=>[s(d,{type:"dashed"},{default:u(()=>[x("Show all")]),_:1})]),_:1},8,["to"])]),t("div",O,[(l(!0),i(v,null,V(c.arr,(o,y)=>m((l(),I(_,{class:"content__element",to:`/videos/${o.id}`},{default:u(()=>[m(s(r,null,null,512),[[h,!o.imageShow]]),m(t("img",{class:"content__image",src:n.thumbnail(o.video),alt:o.title,onLoad:te=>o.imageShow=!0},null,40,U),[[h,o.imageShow]]),t("p",Y,$(o.title),1)]),_:2},1032,["to"])),[[h,y<5]])),256))])],64)}const z={name:"HomeBlock",props:["title","link","arr"],components:{AppPreloader:g},data(){return{thumbnail:A}}},G=f(z,[["render",q],["__scopeId","data-v-3980dcbf"]]),J=e=>(E("data-v-1a28b142"),e=e(),F(),e),K={class:"reviews"},M={class:"wtr"},Q={class:"ynr"},X=J(()=>t("div",{class:"list-week"},null,-1));function Z(e,w,c,k,n,b){const d=a("AppHeader"),_=a("Breadcrumb"),r=a("HomeBlock"),o=a("AppFooter");return l(),i(v,null,[s(d),s(_,{class:"breadcrumb",title:"Home"}),t("main",null,[t("div",K,[s(r,{title:"REVIEWS",link:"videos",arr:n.reviews},null,8,["arr"])]),t("div",M,[s(r,{title:"WTRs",link:"wtr",arr:n.wtr},null,8,["arr"])]),t("div",Q,[s(r,{title:"YUNOREVIEWS",link:"ynr",arr:n.ynr},null,8,["arr"])]),X]),s(o)],64)}const ee={name:"HomeView",components:{AppHeader:B,Breadcrumb:H,AppFooter:D,HomeBlock:G,AppPreloader:g},data(){return{reviews:p.filter(e=>e.type=="review").slice(0,5),wtr:p.filter(e=>e.type=="weekly").slice(0,5),ynr:p.filter(e=>e.type=="YUNOREVIEW").slice(0,5)}},created(){}},ne=f(ee,[["render",Z],["__scopeId","data-v-1a28b142"]]);export{ne as default};