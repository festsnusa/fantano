import{A as b,B as f,g as A}from"./helper-c130db00.js";import{A as S,a as k,u as y}from"./AppVideos-415a0127.js";import{a as B}from"./AppContent-58ec9dd8.js";import{u as x}from"./index-2dc1ed43.js";import{r as a,o,c as i,d as r,b as n,F as _,g as L,i as c,v as p,f as V,w as I,t as D,p as H,h as N,_ as j,m as R}from"./index-5a0a373b.js";const T=e=>(H("data-v-324f3511"),e=e(),N(),e),C={class:"reviews"},F={key:0,class:"reviews__content"},M=["src","alt","onLoad"],E={class:"review__title"},Q={key:1,class:"reviews__content"},$=T(()=>n("p",null,"No videos",-1)),q=[$];function z(e,l,J,K,t,g){const d=a("AppHeader"),u=a("Breadcrumb"),h=a("AppPreloader"),m=a("RouterLink"),v=a("AppPagination"),w=a("a-back-top");return o(),i(_,null,[r(d,{currentIndex:0}),r(u,{class:"breadcrumb",arr:t.breadcrumbArr,title:t.tag},null,8,["arr","title"]),n("main",C,[t.reviews.length?(o(),i("div",F,[(o(!0),i(_,null,L(g.paginatedData,(s,P)=>(o(),V(m,{class:"review",key:P,to:`/videos/${s.id}`},{default:I(()=>[c(r(h,null,null,512),[[p,!s.imageShow]]),c(n("img",{class:"review__image",src:t.thumbnail(s.video),alt:s.title,onLoad:O=>s.imageShow=!0},null,40,M),[[p,s.imageShow]]),n("p",E,D(s.title),1)]),_:2},1032,["to"]))),128))])):(o(),i("div",Q,q)),c(r(v,{reviews:t.reviews,totalPages:t.totalPages},null,8,["reviews","totalPages"]),[[p,t.reviews.length]])]),r(w)],64)}const G={name:"ReviewsView",components:{AppHeader:b,AppVideos:S,AppPreloader:B,AppPagination:k,Breadcrumb:f},inject:["json"],data(){return{tag:this.$route.params.tag,reviews:this.json.filter(e=>e.type=="review").filter(e=>e.tags.includes(this.$route.params.tag)),page:1,perPage:20,totalPages:1,gotoNumber:"",isLargeScreen:x("(min-width: 1024px)"),thumbnail:A,breadcrumbArr:[{title:"Home",link:"/"}]}},computed:{paginatedData(){return this.reviews.slice((this.page-1)*this.perPage,this.page*this.perPage)},...R(y)},created(){console.log(this.reviews.length),this.perPage=this.isLargeScreen?20:6,this.totalPages=Math.ceil(this.reviews.length/this.perPage),this.pageStore.currentPage=1,this.pageStore.$subscribe((e,l)=>{this.page=l.currentPage})}},ee=j(G,[["render",z],["__scopeId","data-v-324f3511"]]);export{ee as default};