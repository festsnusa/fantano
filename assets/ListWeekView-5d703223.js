import{A as c}from"./helper-c130db00.js";import{A as i}from"./AppVideos-415a0127.js";import{r as e,o as m,c as _,d as o,F as d,_ as l}from"./index-5a0a373b.js";import"./AppContent-58ec9dd8.js";import"./index-2dc1ed43.js";function A(t,r,k,u,s,y){const p=e("AppHeader"),a=e("AppVideos"),n=e("a-back-top");return m(),_(d,null,[o(p,{currentIndex:3}),o(a,{type:"list-week",years:s.years,title:"List week"},null,8,["years"]),o(n)],64)}const f={name:"ListWeekView",components:{AppHeader:c,AppVideos:i},data(){return{years:Array.from(Array(13),(t,r)=>r+2010).reverse()}}},$=l(f,[["render",A]]);export{$ as default};