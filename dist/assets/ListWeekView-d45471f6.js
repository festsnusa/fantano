import{A as c}from"./main-channel-ebc9b583.js";import{A as i}from"./AppVideos-c56af3f3.js";import{r as e,o as m,c as _,d as o,F as d,_ as l}from"./index-9f27658f.js";import"./AppPreloader-fc2ea911.js";import"./index-05353ede.js";function A(t,r,k,u,s,y){const p=e("AppHeader"),a=e("AppVideos"),n=e("a-back-top");return m(),_(d,null,[o(p,{currentIndex:3}),o(a,{type:"list-week",years:s.years,title:"List week"},null,8,["years"]),o(n)],64)}const f={name:"ListWeekView",components:{AppHeader:c,AppVideos:i},data(){return{years:Array.from(Array(13),(t,r)=>r+2010).reverse()}}},$=l(f,[["render",A]]);export{$ as default};