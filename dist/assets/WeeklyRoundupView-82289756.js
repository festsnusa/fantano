import{A as c}from"./main-channel-eb3dcf05.js";import{A as m}from"./AppVideos-dde276bd.js";import{r as e,o as d,c as _,d as o,F as i,_ as l}from"./index-06dd93b4.js";import"./AppPreloader-dd9758cf.js";import"./index-e1389592.js";function u(p,r,A,k,t,f){const n=e("AppHeader"),a=e("AppVideos"),s=e("a-back-top");return d(),_(i,null,[o(n,{currentIndex:1}),o(a,{type:"weekly",years:t.years,title:"Weekly Track Roundups"},null,8,["years"]),o(s)],64)}const y={name:"WeeklyRoundupView",components:{AppHeader:c,AppVideos:m},data(){return{years:Array.from(Array(8),(p,r)=>r+2016).reverse()}}},W=l(y,[["render",u]]);export{W as default};