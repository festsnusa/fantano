import{A as x,B as I}from"./helper-0e3d8b65.js";import{o as _,c as m,a as A,_ as b,r as p,b as c,t as w,d as i,w as h,F as g,e as y,f as C,g as k,j as L,p as j,h as B}from"./index-85bea274.js";import{A as U,a as $}from"./AppContent-e3b21648.js";const R="/assets/vk-b764f8fc.png",S={class:"footer"},H=A('<ul class="list" data-v-0f2d1c87><a href="https://vk.com/mbdtfisstill6" target="_blank" data-v-0f2d1c87><li class="item" data-v-0f2d1c87><img class="image" src="'+R+'" data-v-0f2d1c87></li></a></ul><p class="text" data-v-0f2d1c87>Copyright © 2023 The Needle Drop</p>',2),E=[H];function N(e,r,s,o,t,n){return _(),m("footer",S,E)}const T={name:"AppFooter"},F=b(T,[["render",N],["__scopeId","data-v-0f2d1c87"]]),V={class:"header"},W={class:"header__title"};function M(e,r,s,o,t,n){const a=p("a-button"),d=p("RouterLink"),u=p("AppContent");return _(),m(g,null,[c("div",V,[c("h2",W,w(s.title),1),i(d,{to:`/${s.link}`},{default:h(()=>[i(a,{type:"dashed"},{default:h(()=>[y("Show all")]),_:1})]),_:1},8,["to"])]),i(u,{arr:s.arr,contentCount:"5"},null,8,["arr"])],64)}const q={name:"HomeBlock",props:["title","link","arr"],components:{AppContent:U,AppPreloader:$}},D=b(q,[["render",M],["__scopeId","data-v-0fc95c39"]]),K=["src"],z={class:"carousel__left"},Q=["src"],P={class:"carousel__right"},G={class:"carousel__links"},O=["href"];function Y(e,r,s,o,t,n){const a=p("RouterLink"),d=p("a-button"),u=p("a-carousel");return _(),C(u,{arrows:"","dots-class":"slick-dots slick-thumb"},{customPaging:h(l=>[c("a",null,[c("img",{src:n.getImgUrl(l.i)},null,8,K)])]),default:h(()=>[(_(!0),m(g,null,k(t.reviews,l=>(_(),m("div",{class:"carousel",key:l.id},[c("div",z,[c("img",{src:l.image},null,8,Q)]),c("div",P,[i(a,{to:`/videos/${l.id}`},{default:h(()=>[c("h1",null,w(l.title),1)]),_:2},1032,["to"]),(_(!0),m(g,null,k(l.externalLinks,f=>(_(),m("div",G,[c("a",{href:f.source,target:"_blank"},[i(d,null,{default:h(()=>[y(w(f.title),1)]),_:2},1024)],8,O)]))),256))])]))),128))]),_:1})}const Z={name:"CarouselApp",data(){return{reviews:L.sort(()=>.5-Math.random()).filter(e=>e.type==="review").slice(0,10)}},methods:{getImgUrl(e){return this.reviews[e].image}}},X=b(Z,[["render",Y],["__scopeId","data-v-ae566de5"]]),J=e=>(j("data-v-89d8d203"),e=e(),B(),e),ee={class:"reviews"},te={class:"wtr"},oe={class:"ynr"},se=J(()=>c("div",{class:"list-week"},null,-1));function ne(e,r,s,o,t,n){const a=p("AppHeader"),d=p("Breadcrumb"),u=p("HomeBlock"),l=p("AppFooter"),f=p("a-back-top");return _(),m(g,null,[i(a),i(d,{class:"breadcrumb",title:"Home"}),c("main",null,[c("div",ee,[i(u,{title:"REVIEWS",link:"videos",arr:t.reviews},null,8,["arr"])]),c("div",te,[i(u,{title:"WTRs",link:"wtr",arr:t.wtr},null,8,["arr"])]),c("div",oe,[i(u,{title:"YNRs",link:"ynr",arr:t.ynr},null,8,["arr"])]),se]),i(l),i(f)],64)}const re={name:"HomeView",components:{AppHeader:x,Breadcrumb:I,AppFooter:F,HomeBlock:D,AppPreloader:$,Carousel:X},inject:["json"],data(){return{reviews:this.json.filter(e=>e.type=="review").slice(0,5),wtr:this.json.filter(e=>e.type=="weekly").slice(0,5),ynr:this.json.filter(e=>e.type=="YUNOREVIEW").slice(0,5)}},methods:{async fetchLastFm(e,r,s){fetch(`http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=9be755d7287c977402ce830fc6b09896&artist=${encodeURIComponent(r)}&album=${encodeURIComponent(s)}&format=json`).then(t=>t.json()).catch(t=>(console.error("Error:",t),"")).then(t=>{let a=t.album.image;return a[a.length-1]["#text"]}).catch(t=>(console.error("Error:",t),""))},async fetchLastFmImages(e,r,s){await fetch(`http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=e44382d410187390db28095da14f7f98&artist=${encodeURIComponent(r)}&album=${encodeURIComponent(s)}&format=json`).then(t=>t.json()).then(t=>{let a=t.album.image,d=a[a.length-1];console.log(e,d["#text"])})},splitMarkdownParagraphs(e){const r=e.split(/\n\s*\n|\n/);let s=[];return r.forEach(o=>{let t=o.split(" / "),n={};n.id=t[0],n.tags=t[1],s.push(n)}),s},getSpotifyLink(e,r,s){const o="BQBAspwrTtcoSz8Q3eFdU0bWP-ayX-TuV-sMLh-baVdxzFO5iwIB_DLrrFvuF6qg-LRLjXUDmgSCEtqSGbVLepJY9xi7ie6WHZ8-4nxoZzYb1PeL3I7Zwr6DLI0Q7QeN-UPyj3ga2vYgbtDnOp4UzVH56Sh6v2ahvgC-qu0CwANaG5t065zeovXlBNbgTkOiDqQiM61h1wjAmL5TC7_IivBMZx3ihbAYphU5cZikq_Kjvn6bZiWgQ2Gj3Sip9tiKE9U-GBrqAkoWRiDvHINlu6Bw",t=`album:${encodeURIComponent(r)} artist:${encodeURIComponent(s)}`;fetch(`https://api.spotify.com/v1/search?q=${t}&type=album`,{headers:{Authorization:`Bearer ${o}`}}).then(n=>n.json()).then(n=>{const a=n.albums.items;if(a.length>0){const u=a[0].external_urls.spotify;console.log(e,u)}else console.log("No album found with the specified title and artist")}).catch(n=>{console.error("Error retrieving album:",n)})},getAppleMusicLink(){this.json.forEach(e=>{if(e.type!=="review"||e.externalLinks.length>1)return;const r=`${e.albumTitle} ${e.artistName}`,s=`https://itunes.apple.com/search?term=${encodeURIComponent(r)}&entity=album&limit=1`;fetch(s).then(o=>o.json()).then(o=>{if(o.results&&o.results.length>0){const n=o.results[0].collectionViewUrl;console.log(e.id,n)}else return null}).catch(o=>(console.error("Error:",o),null))})},pushAppleMusicLink(){console.log(this.json)},pushImages(){console.log(this.json)},async getMediaLinks(e,r,s){try{const o=`site:music.apple.com ${r} ${s}`,t=`https://www.google.com/search?q=${encodeURIComponent(o)}`,a=await(await fetch(t,{headers:{"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Safari/537.36"}})).text(),l=new DOMParser().parseFromString(a,"text/html").querySelectorAll("div.g");if(!l.length)return[];const v=l[0].querySelector("a").href;v&&v.includes("apple")&&console.log(e,v)}catch(o){return console.error("Error:",o.message),[]}},async fetchData(e){const s=await(await fetch(e,{headers:{"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Safari/537.36"}})).text(),o=window.open();o.document.open(),o.document.write(s),o.document.close(),console.log(o.document.documentElement.textContent)}},async created(){}},ie=b(re,[["render",ne],["__scopeId","data-v-89d8d203"]]);export{ie as default};
