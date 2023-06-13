import{A as L}from"./AppPreloader-a1c810e4.js";import{K as w,o,c as l,e as h,L as B,a as n,N as A,F as u,d as y,t as c,v,p as f,g as S,O as b,_ as x,k as P,m as d,r as _,f as M,w as T,b as m}from"./index-0c9b6e03.js";import{j as p}from"./main-channel-fd26c33a.js";const Y=w("year",{state:()=>({currentYear:""}),persist:{storage:sessionStorage}}),C=w("rating",{state:()=>({currentRating:""}),persist:{storage:sessionStorage}}),I=e=>(f("data-v-3ee9fbb5"),e=e(),S(),e),O={class:"search"},U=I(()=>n("option",{value:""},"Filter by year",-1)),j=["value"],q=I(()=>n("option",{value:""},"Filter by rating",-1)),G=["value"];function E(e,t,s,k,i,a){return o(),l("div",O,[h(n("input",{class:"search__input",type:"text","onUpdate:modelValue":t[0]||(t[0]=r=>i.text=r),onInput:t[1]||(t[1]=r=>s.searchReview(i.text)),placeholder:"Search by title..."},null,544),[[B,i.text]]),h(n("select",{class:"search__select","onUpdate:modelValue":t[2]||(t[2]=r=>i.year=r),name:"select",onChange:t[3]||(t[3]=r=>s.filterByYear(i.year,i.rating))},[U,(o(!0),l(u,null,y(s.years,r=>(o(),l("option",{value:r},c(r),9,j))),256))],544),[[A,i.year]]),h(n("select",{class:"search__select_rating","onUpdate:modelValue":t[4]||(t[4]=r=>i.rating=r),name:"select_rating",onChange:t[5]||(t[5]=r=>s.filterByRating(i.rating,i.year))},[q,(o(!0),l(u,null,y(i.ratings,r=>(o(),l("option",{value:r},c(r),9,G))),256))],544),[[A,i.rating],[v,s.type=="review"]])])}const z={name:"AppFilter",props:["filterByYear","searchReview","filterByRating","type","years"],data(){return{text:"",year:"",rating:"",ratings:[10,9,8,7,6,5,4,3,2,1,0,"NOT GOOD","NOT BAD","CLASSIC","-"]}},computed:{...b(Y,C)},mounted(){this.year=this.yearStore.currentYear,this.rating=this.ratingStore.currentRating,this.type!="review"&&(this.ratingStore.currentRating=""),this.yearStore.$subscribe((e,t)=>{this.year=t.currentYear}),this.ratingStore.$subscribe((e,t)=>{this.rating=t.currentRating})}},K=x(z,[["render",E],["__scopeId","data-v-3ee9fbb5"]]),N=w("page",{state:()=>({currentPage:1}),persist:{storage:sessionStorage}}),H=e=>(f("data-v-3b6a77c5"),e=e(),S(),e),J={class:"pagination"},Q={class:"pagination__header"},W={key:0},X=["onClick"],Z={key:0},$={class:"pagination__footer"},ee={class:"gotoPage"},te=H(()=>n("span",null,"Go to page",-1));function se(e,t,s,k,i,a){return o(),l("div",J,[n("div",Q,[n("div",{class:P({"arrow left":!0,disabled:i.page==1}),onClick:t[0]||(t[0]=(...r)=>a.prev&&a.prev(...r))},null,2),s.totalPages>a.displayedPages[a.displayedPages.length-2]&&a.firstPage>1?(o(),l(u,{key:0},[n("div",{class:"item",onClick:t[1]||(t[1]=r=>a.setIndex(1))},c(1)),a.firstPage>2?(o(),l("div",W,"...")):d("",!0)],64)):d("",!0),(o(!0),l(u,null,y(a.displayedPages,r=>(o(),l("div",{key:`pagination-item-${r}`,class:P({item:!0,on:i.page==r}),onClick:R=>a.setIndex(r)},c(r),11,X))),128)),s.totalPages>a.displayedPages[a.displayedPages.length-1]?(o(),l(u,{key:1},[a.lastPage<s.totalPages-1?(o(),l("div",Z,"...")):d("",!0),n("div",{class:"item",onClick:t[2]||(t[2]=r=>a.setIndex(s.totalPages))},c(s.totalPages),1)],64)):d("",!0),n("div",{class:P({"arrow right":!0,disabled:i.page==s.totalPages}),onClick:t[3]||(t[3]=(...r)=>a.next&&a.next(...r))},null,2)]),n("div",$,[n("div",ee,[te,h(n("input",{type:"number","onUpdate:modelValue":t[4]||(t[4]=r=>i.gotoNumber=r)},null,512),[[B,i.gotoNumber]]),n("button",{onClick:t[5]||(t[5]=r=>a.gotopage(Number(i.gotoNumber)))},"Go")])])])}const re={name:"AppPagination",props:["reviews","totalPages"],data(){return{page:1,perPage:16,maxVisibleButtons:10,gotoNumber:""}},computed:{...b(N),paginatedData(){return this.reviews.slice((this.page-1)*this.perPage,this.page*this.perPage)},firstPage(){return Math.max(this.page-(this.page===this.totalPages?2:1),1)},lastPage(){return Math.min(this.page+(this.page===1?2:1),this.totalPages)},displayedPages(){return this.totalPages<=this.maxVisibleButtons||this.page>this.totalPages?this.totalPages:Array.from({length:this.lastPage-this.firstPage+1},(e,t)=>t+this.firstPage)}},methods:{prev(){this.pageStore.currentPage=Math.max(this.page-1,1)},next(){this.pageStore.currentPage=Math.min(this.page+1,this.totalPages)},setIndex(e){this.pageStore.currentPage=e},gotopage(e){this.gotoNumber="",!(isNaN(e)||e<1||e>this.totalPages)&&this.setIndex(e)}},created(){this.page=this.pageStore.currentPage,this.pageStore.$subscribe((e,t)=>{this.page=t.currentPage})}},ie=x(re,[["render",se],["__scopeId","data-v-3b6a77c5"]]),ae=e=>(f("data-v-c1132126"),e=e(),S(),e),ne={class:"reviews"},oe={class:"reviews__left"},le={class:"reviews__heading"},ge={key:0,class:"reviews__content"},he=["src","alt","onLoad"],ce={class:"review__title"},ue={key:1,class:"reviews__content"},pe=ae(()=>n("p",null,"No videos",-1)),de=[pe],_e={class:"reviews__right"};function ve(e,t,s,k,i,a){const r=_("AppPreloader"),R=_("RouterLink"),V=_("AppPagination"),D=_("AppFilter");return o(),l("main",ne,[n("section",oe,[n("h2",le,c(s.title),1),i.reviews.length?(o(),l("div",ge,[(o(!0),l(u,null,y(a.paginatedData,(g,F)=>(o(),M(R,{class:"review",key:F,to:`/videos/${g.id}`},{default:T(()=>[h(m(r,null,null,512),[[v,!g.imageShow]]),h(n("img",{class:"review__image",src:a.getThumbnail(g.video),alt:g.title,onLoad:Pe=>g.imageShow=!0},null,40,he),[[v,g.imageShow]]),n("p",ce,c(g.title),1)]),_:2},1032,["to"]))),128))])):(o(),l("div",ue,de)),h(m(V,{reviews:i.reviews,totalPages:i.totalPages},null,8,["reviews","totalPages"]),[[v,i.reviews.length]])]),n("aside",_e,[m(D,{filterByYear:a.filterByYear,searchReview:a.searchReview,filterByRating:a.filterByRating,type:s.type,years:s.years},null,8,["filterByYear","searchReview","filterByRating","type","years"])])])}const ye={name:"AppVideos",props:["type","years","title"],components:{AppFilter:K,AppPreloader:L,AppPagination:ie},data(){return{reviews:p.filter(e=>e.type==this.type),page:1,perPage:16,totalPages:1,maxVisibleButtons:10,gotoNumber:""}},computed:{paginatedData(){return this.reviews.slice((this.page-1)*this.perPage,this.page*this.perPage)},...b(N,Y,C)},methods:{getThumbnail(e){return`http://img.youtube.com/vi/${this.getVideoID(e)}/0.jpg`},getVideoID(e){let t=/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,s=e.match(t);return s&&s[7].length==11?s[7]:!1},setTotalPages(){this.totalPages=Math.ceil(this.reviews.length/this.perPage)},filterByYear(e,t){this.reviews=p.filter(s=>s.type==this.type),this.pageStore.currentPage=1,document.querySelector(".search__input").value="",this.yearStore.currentYear=e,e!=""&&(this.reviews=this.reviews.filter(s=>s.year==e)),this.type=="review"&&t!=""&&(this.reviews=this.reviews.filter(s=>s.rating==t)),this.setTotalPages()},filterByRating(e,t){this.reviews=p.filter(s=>s.type==this.type),this.pageStore.currentPage=1,document.querySelector(".search__input").value="",t!=""&&(this.reviews=p.filter(s=>s.year==t)),this.ratingStore.currentRating=e,e!=""&&(this.reviews=this.reviews.filter(s=>s.rating==e),this.totalPages=Math.ceil(this.reviews.length/this.perPage))},searchReview(e){this.reviews=p.filter(t=>t.type==this.type),this.pageStore.currentPage=1,document.querySelector(".search__select").value="",e.length!=0&&(this.reviews=this.reviews.filter(t=>t.title.toLowerCase().includes(e.toLowerCase())))},checkYears(){this.years.includes(Number(this.yearStore.currentYear))||(this.yearStore.currentYear="")}},created(){this.checkYears(),this.yearStore.currentYear!=""&&(this.reviews=this.reviews.filter(e=>e.year==+this.yearStore.currentYear)),this.totalPages=Math.ceil(this.reviews.length/this.perPage),this.pageStore.currentPage=this.pageStore.currentPage>this.totalPages?1:this.pageStore.currentPage,this.page=this.pageStore.currentPage,this.pageStore.$subscribe((e,t)=>{this.page=t.currentPage})},mounted(){this.yearStore.currentYear!=""&&(this.reviews=this.reviews.filter(e=>e.year==this.yearStore.currentYear)),this.ratingStore.currentRating!=""&&(this.reviews=this.reviews.filter(e=>e.rating==this.ratingStore.currentRating)),this.setTotalPages()}},Se=x(ye,[["render",ve],["__scopeId","data-v-c1132126"]]);export{Se as A};
