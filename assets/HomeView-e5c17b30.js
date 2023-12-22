import{A as I,B as A}from"./Breadcrumb-04c02c70.js";import{o as _,c as m,a as L,_ as v,r as d,b as c,t as b,d as i,w as h,F as g,e as k,f as y,p as $,g as x,h as j}from"./index-b0fda7e0.js";import{A as R,a as C}from"./AppContent-cce5b469.js";const U={name:"AppFooter"},B="/assets/vk-b764f8fc.png",S={class:"footer"},H=L('<ul class="list" data-v-d5d14d2f><a href="https://vk.com/mbdtfisstill6" target="_blank" data-v-d5d14d2f><li class="item" data-v-d5d14d2f><img class="image" src="'+B+'" data-v-d5d14d2f></li></a></ul><p class="text" data-v-d5d14d2f>Copyright © 2023 The Needle Drop</p>',2),E=[H];function N(e,s,n,o,t,a){return _(),m("footer",S,E)}const T=v(U,[["render",N],["__scopeId","data-v-d5d14d2f"]]),F={class:"header"},V={class:"header__title"};function W(e,s,n,o,t,a){const r=d("a-button"),p=d("RouterLink"),u=d("AppContent");return _(),m(g,null,[c("div",F,[c("h2",V,b(n.title),1),i(p,{to:`/${n.link}`},{default:h(()=>[i(r,{type:"dashed"},{default:h(()=>[k("Show all")]),_:1})]),_:1},8,["to"])]),i(u,{arr:n.arr,contentCount:"5"},null,8,["arr"])],64)}const M={name:"HomeBlock",props:["title","link","arr"],components:{AppContent:R,AppPreloader:C}},q=v(M,[["render",W],["__scopeId","data-v-0fc95c39"]]),D=e=>($("data-v-7fb48ff4"),e=e(),x(),e),K=D(()=>c("h2",{class:"title"},"Random Reviews",-1)),z=["src"],Q={class:"carousel__left"},P=["src","alt"],Y={class:"carousel__right"},G={class:"carousel__title"},O={class:"links"},Z=["href"],X={class:"text-field multiline"};function J(e,s,n,o,t,a){const r=d("RouterLink"),p=d("a-button"),u=d("a-carousel");return _(),m(g,null,[K,i(u,{arrows:"","dots-class":"slick-dots slick-thumb"},{customPaging:h(l=>[c("a",null,[c("img",{src:a.getImgUrl(l.i)},null,8,z)])]),default:h(()=>[(_(!0),m(g,null,y(t.reviews,l=>(_(),m("div",{class:"carousel",key:l.id},[c("div",Q,[c("img",{src:l.image,alt:l.title},null,8,P)]),c("div",Y,[i(r,{to:`/videos/${l.id}`},{default:h(()=>[c("h1",G,b(l.title),1)]),_:2},1032,["to"]),c("div",O,[(_(!0),m(g,null,y(l.externalLinks,f=>(_(),m("a",{href:f.source,target:"_blank"},[i(p,null,{default:h(()=>[k(b(f.title),1)]),_:2},1024)],8,Z))),256))]),c("div",X,b(t.captions[l.id]||"Loading..."),1)])]))),128))]),_:1})],64)}const ee={name:"CarouselApp",inject:["json"],data(){return{reviews:this.json.sort(()=>.5-Math.random()).filter(e=>e.type==="review").slice(0,10),captions:{}}},methods:{getImgUrl(e){return this.reviews[e].image},async getCaption(e){try{const s=await j(e);if(s!==void 0)return s}catch(s){return console.log(s),""}},async loadCaptions(){for(const e of this.reviews){const s=await this.getCaption(e.video);this.captions[e.id]=s}}},created(){this.loadCaptions()}},te=v(ee,[["render",J],["__scopeId","data-v-7fb48ff4"]]),oe=e=>($("data-v-ada8d2d4"),e=e(),x(),e),se={class:"reviews"},ne={class:"wtr"},ae={class:"ynr"},re=oe(()=>c("div",{class:"list-week"},null,-1));function ce(e,s,n,o,t,a){const r=d("AppHeader"),p=d("Breadcrumb"),u=d("HomeBlock"),l=d("AppFooter"),f=d("a-back-top");return _(),m(g,null,[i(r),i(p,{class:"breadcrumb",title:"Home"}),c("main",null,[c("div",se,[i(u,{title:"REVIEWS",link:"videos",arr:t.reviews},null,8,["arr"])]),c("div",ne,[i(u,{title:"WTRs",link:"wtr",arr:t.wtr},null,8,["arr"])]),c("div",ae,[i(u,{title:"YNRs",link:"ynr",arr:t.ynr},null,8,["arr"])]),re]),i(l),i(f)],64)}const le={name:"HomeView",components:{AppHeader:I,Breadcrumb:A,AppFooter:T,HomeBlock:q,AppPreloader:C,Carousel:te},inject:["json"],data(){return{reviews:this.json.filter(e=>e.type=="review").slice(0,5),wtr:this.json.filter(e=>e.type=="weekly").slice(0,5),ynr:this.json.filter(e=>e.type=="YUNOREVIEW").slice(0,5)}},methods:{async fetchLastFm(e,s,n){fetch(`http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=9be755d7287c977402ce830fc6b09896&artist=${encodeURIComponent(s)}&album=${encodeURIComponent(n)}&format=json`).then(t=>t.json()).catch(t=>(console.error("Error:",t),"")).then(t=>{let r=t.album.image;return r[r.length-1]["#text"]}).catch(t=>(console.error("Error:",t),""))},async fetchLastFmImages(e,s,n){await fetch(`http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=e44382d410187390db28095da14f7f98&artist=${encodeURIComponent(s)}&album=${encodeURIComponent(n)}&format=json`).then(t=>t.json()).then(t=>{let r=t.album.image,p=r[r.length-1];console.log(e,p["#text"])})},splitMarkdownParagraphs(e){const s=e.split(/\n\s*\n|\n/);let n=[];return s.forEach(o=>{let t=o.split(" / "),a={};a.id=t[0],a.tags=t[1],n.push(a)}),n},getSpotifyLink(e,s,n){const o="BQBAspwrTtcoSz8Q3eFdU0bWP-ayX-TuV-sMLh-baVdxzFO5iwIB_DLrrFvuF6qg-LRLjXUDmgSCEtqSGbVLepJY9xi7ie6WHZ8-4nxoZzYb1PeL3I7Zwr6DLI0Q7QeN-UPyj3ga2vYgbtDnOp4UzVH56Sh6v2ahvgC-qu0CwANaG5t065zeovXlBNbgTkOiDqQiM61h1wjAmL5TC7_IivBMZx3ihbAYphU5cZikq_Kjvn6bZiWgQ2Gj3Sip9tiKE9U-GBrqAkoWRiDvHINlu6Bw",t=`album:${encodeURIComponent(s)} artist:${encodeURIComponent(n)}`;fetch(`https://api.spotify.com/v1/search?q=${t}&type=album`,{headers:{Authorization:`Bearer ${o}`}}).then(a=>a.json()).then(a=>{const r=a.albums.items;if(r.length>0){const u=r[0].external_urls.spotify;console.log(e,u)}else console.log("No album found with the specified title and artist")}).catch(a=>{console.error("Error retrieving album:",a)})},getAppleMusicLink(){this.json.forEach(e=>{if(e.type!=="review"||e.externalLinks.length>1)return;const s=`${e.albumTitle} ${e.artistName}`,n=`https://itunes.apple.com/search?term=${encodeURIComponent(s)}&entity=album&limit=1`;fetch(n).then(o=>o.json()).then(o=>{if(o.results&&o.results.length>0){const a=o.results[0].collectionViewUrl;console.log(e.id,a)}else return null}).catch(o=>(console.error("Error:",o),null))})},pushAppleMusicLink(){console.log(this.json)},pushImages(){console.log(this.json)},async getMediaLinks(e,s,n){try{const o=`site:music.apple.com ${s} ${n}`,t=`https://www.google.com/search?q=${encodeURIComponent(o)}`,r=await(await fetch(t,{headers:{"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Safari/537.36"}})).text(),l=new DOMParser().parseFromString(r,"text/html").querySelectorAll("div.g");if(!l.length)return[];const w=l[0].querySelector("a").href;w&&w.includes("apple")&&console.log(e,w)}catch(o){return console.error("Error:",o.message),[]}},async fetchData(e){const n=await(await fetch(e,{headers:{"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Safari/537.36"}})).text(),o=window.open();o.document.open(),o.document.write(n),o.document.close(),console.log(o.document.documentElement.textContent)}},async created(){}},ue=v(le,[["render",ce],["__scopeId","data-v-ada8d2d4"]]);export{ue as default};
