import{A as b,B as P,j as A,g as S}from"./main-channel-dcea95af.js";import{A as k,a as y,u as B}from"./AppVideos-562211e1.js";import{A as x}from"./AppPreloader-5ab0db51.js";import{u as L}from"./index-f6eb9b41.js";import{r as a,o,c as i,d as r,b as n,F as _,e as V,f as c,v as p,g as I,w as D,t as H,p as N,i as R,_ as T,m as j}from"./index-cac4a906.js";const C=e=>(N("data-v-b8f7efcf"),e=e(),R(),e),F={class:"reviews"},M={key:0,class:"reviews__content"},E=["src","alt","onLoad"],Q={class:"review__title"},$={key:1,class:"reviews__content"},q=C(()=>n("p",null,"No videos",-1)),z=[q];function G(e,l,K,O,t,g){const d=a("AppHeader"),u=a("Breadcrumb"),h=a("AppPreloader"),m=a("RouterLink"),v=a("AppPagination"),w=a("a-back-top");return o(),i(_,null,[r(d,{currentIndex:0}),r(u,{class:"breadcrumb",arr:t.breadcrumbArr,title:t.tag},null,8,["arr","title"]),n("main",F,[t.reviews.length?(o(),i("div",M,[(o(!0),i(_,null,V(g.paginatedData,(s,f)=>(o(),I(m,{class:"review",key:f,to:`/videos/${s.id}`},{default:D(()=>[c(r(h,null,null,512),[[p,!s.imageShow]]),c(n("img",{class:"review__image",src:t.thumbnail(s.video),alt:s.title,onLoad:U=>s.imageShow=!0},null,40,E),[[p,s.imageShow]]),n("p",Q,H(s.title),1)]),_:2},1032,["to"]))),128))])):(o(),i("div",$,z)),c(r(v,{reviews:t.reviews,totalPages:t.totalPages},null,8,["reviews","totalPages"]),[[p,t.reviews.length]])]),r(w)],64)}const J={name:"ReviewsView",components:{AppHeader:b,AppVideos:k,AppPreloader:x,AppPagination:y,Breadcrumb:P},data(){return{tag:this.$route.params.tag,reviews:A.filter(e=>e.type=="review").filter(e=>e.tags.includes(this.$route.params.tag)),page:1,perPage:20,totalPages:1,gotoNumber:"",isLargeScreen:L("(min-width: 1024px)"),thumbnail:S,breadcrumbArr:[{title:"Home",link:"/"}]}},computed:{paginatedData(){return this.reviews.slice((this.page-1)*this.perPage,this.page*this.perPage)},...j(B)},created(){console.log(this.reviews.length),this.perPage=this.isLargeScreen?20:6,this.totalPages=Math.ceil(this.reviews.length/this.perPage),this.pageStore.currentPage=1,this.pageStore.$subscribe((e,l)=>{this.page=l.currentPage})}},te=T(J,[["render",G],["__scopeId","data-v-b8f7efcf"]]);export{te as default};