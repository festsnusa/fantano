import{A as c}from"./helper-0e3d8b65.js";import{A as i}from"./AppVideos-6064197c.js";import{r as e,o as m,c as _,d as o,F as l,_ as d}from"./index-85bea274.js";import"./AppContent-e3b21648.js";import"./index-f984d53a.js";function y(n,r,V,f,t,u){const p=e("AppHeader"),s=e("AppVideos"),a=e("a-back-top");return m(),_(l,null,[o(p,{currentIndex:5}),o(s,{type:"vinyl",years:t.years,title:"Vinyls"},null,8,["years"]),o(a)],64)}const A={name:"VinylsView",components:{AppHeader:c,AppVideos:i},data(){return{years:Array.from(Array(10),(n,r)=>r+2012).reverse()}}},b=d(A,[["render",y]]);export{b as default};