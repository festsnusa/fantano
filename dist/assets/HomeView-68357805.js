import{g as L,A,B as U,j as f}from"./main-channel-b96d3e04.js";import{o as m,c as g,a as C,_ as y,r as u,b as p,t as $,d,w as b,F as v,e as x,f as w,g as R,h as E,v as k,p as S,i as B}from"./index-5e88fd56.js";import{A as I}from"./AppPreloader-cb5d31a2.js";const N="/assets/vk-b764f8fc.png",H={class:"footer"},j=C('<ul class="list" data-v-0f2d1c87><a href="https://vk.com/mbdtfisstill6" target="_blank" data-v-0f2d1c87><li class="item" data-v-0f2d1c87><img class="image" src="'+N+'" data-v-0f2d1c87></li></a></ul><p class="text" data-v-0f2d1c87>Copyright © 2023 The Needle Drop</p>',2),T=[j];function V(o,r,n,s,t,e){return m(),g("footer",H,T)}const q={name:"AppFooter"},W=y(q,[["render",V],["__scopeId","data-v-0f2d1c87"]]),D={class:"header"},F={class:"header__title"},M={class:"content"},z=["src","alt","onLoad"],K={class:"content__title"};function P(o,r,n,s,t,e){const c=u("a-button"),a=u("RouterLink"),l=u("AppPreloader");return m(),g(v,null,[p("div",D,[p("h2",F,$(n.title),1),d(a,{to:`/${n.link}`},{default:b(()=>[d(c,{type:"dashed"},{default:b(()=>[E("Show all")]),_:1})]),_:1},8,["to"])]),p("div",M,[(m(!0),g(v,null,x(n.arr,(i,h)=>w((m(),R(a,{class:"content__element",to:`/videos/${i.id}`},{default:b(()=>[w(d(l,null,null,512),[[k,!i.imageShow]]),w(p("img",{class:"content__image",src:t.thumbnail(i.video),alt:i.title,onLoad:_=>i.imageShow=!0},null,40,z),[[k,i.imageShow]]),p("p",K,$(i.title),1)]),_:2},1032,["to"])),[[k,h<5]])),256))])],64)}const Q={name:"HomeBlock",props:["title","link","arr"],components:{AppPreloader:I},data(){return{thumbnail:L}}},Y=y(Q,[["render",P],["__scopeId","data-v-3980dcbf"]]),O=o=>(S("data-v-9bd54a29"),o=o(),B(),o),Z={class:"reviews"},G={class:"wtr"},X={class:"ynr"},J=O(()=>p("div",{class:"list-week"},null,-1));function ee(o,r,n,s,t,e){const c=u("AppHeader"),a=u("Breadcrumb"),l=u("HomeBlock"),i=u("AppFooter"),h=u("a-back-top");return m(),g(v,null,[d(c),d(a,{class:"breadcrumb",title:"Home"}),p("main",null,[p("div",Z,[d(l,{title:"REVIEWS",link:"videos",arr:t.reviews},null,8,["arr"])]),p("div",G,[d(l,{title:"WTRs",link:"wtr",arr:t.wtr},null,8,["arr"])]),p("div",X,[d(l,{title:"YUNOREVIEWS",link:"ynr",arr:t.ynr},null,8,["arr"])]),J]),d(i),d(h)],64)}const te={name:"HomeView",components:{AppHeader:A,Breadcrumb:U,AppFooter:W,HomeBlock:Y,AppPreloader:I},data(){return{reviews:f.filter(o=>o.type=="review").slice(0,5),wtr:f.filter(o=>o.type=="weekly").slice(0,5),ynr:f.filter(o=>o.type=="YUNOREVIEW").slice(0,5)}},methods:{async fetchLastFm(o,r,n){fetch(`http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=9be755d7287c977402ce830fc6b09896&artist=${encodeURIComponent(r)}&album=${encodeURIComponent(n)}&format=json`).then(t=>t.json()).catch(t=>{console.error("Error:",t)}).then(t=>{const e=t.album;if(!Array.isArray(e.tags.tag))return;let c=e.tags.tag.map(a=>a.name);console.log(o,c)}).catch(t=>{console.error("Error:",t)})},splitMarkdownParagraphs(o){const r=o.split(/\n\s*\n|\n/);let n=[];return r.forEach(s=>{let t=s.split(" / "),e={};e.id=t[0],e.tags=t[1],n.push(e)}),n},getSpotifyLink(o,r,n){const s="BQBAspwrTtcoSz8Q3eFdU0bWP-ayX-TuV-sMLh-baVdxzFO5iwIB_DLrrFvuF6qg-LRLjXUDmgSCEtqSGbVLepJY9xi7ie6WHZ8-4nxoZzYb1PeL3I7Zwr6DLI0Q7QeN-UPyj3ga2vYgbtDnOp4UzVH56Sh6v2ahvgC-qu0CwANaG5t065zeovXlBNbgTkOiDqQiM61h1wjAmL5TC7_IivBMZx3ihbAYphU5cZikq_Kjvn6bZiWgQ2Gj3Sip9tiKE9U-GBrqAkoWRiDvHINlu6Bw",t=`album:${encodeURIComponent(r)} artist:${encodeURIComponent(n)}`;fetch(`https://api.spotify.com/v1/search?q=${t}&type=album`,{headers:{Authorization:`Bearer ${s}`}}).then(e=>e.json()).then(e=>{const c=e.albums.items;if(c.length>0){const l=c[0].external_urls.spotify;console.log(o,l)}else console.log("No album found with the specified title and artist")}).catch(e=>{console.error("Error retrieving album:",e)})},getAppleMusicLink(o,r,n){const s=`${r} ${n}`,t=`https://itunes.apple.com/search?term=${encodeURIComponent(s)}&entity=album&limit=1`;fetch(t).then(e=>e.json()).then(e=>{if(e.results&&e.results.length>0){const a=e.results[0].collectionViewUrl;console.log(o,a)}else return null}).catch(e=>(console.error("Error:",e),null))},async searchAlbumOniTunes(o,r,n){try{const s=`${r} ${n}`,t=`https://itunes.apple.com/search?term=${encodeURIComponent(s)}&entity=album`,c=(await this.axios.get(t)).data.results;if(c.length>0){const a=c[0].collectionViewUrl;console.log(o,a)}else console.log("No matching album found.")}catch(s){console.error("An error occurred:",s.message)}},getYouTubeLink(o,r,n){const s=`${r} ${n} album`,t="AIzaSyCetglNoZRO6IU3JBIhlmIneiHFef2Q4tM";fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(s)}&type=video&maxResults=10&key=${t}`).then(e=>e.json()).then(e=>{const c=e.items;if(c.length>0){const a=c.find(l=>l.snippet.title.toLowerCase().includes(r.toLowerCase()));if(a){const l=`https://www.youtube.com/watch?v=${a.id.videoId}`;console.log(o,l)}else console.log("No album found with the specified title and artist")}else console.log("No videos found with the specified title and artist")}).catch(e=>{console.error("Error retrieving album:",e)})},getBandcampLink(o,r,n){const t=`https://api.bandcamp.com/api/album/2/search?key=&q=${encodeURIComponent(r)}+${encodeURIComponent(n)}`;fetch(t).then(e=>e.json()).then(e=>{if(e.results.length>0){const a=e.results[0].url;console.log(a)}else console.log("No album found with the specified title and artist")}).catch(e=>{console.error("Error retrieving album:",e)})},getSoundcloudLink(o,r,n){const s="YOUR_CLIENT_ID",t=`https://api.soundcloud.com/tracks?q=${encodeURIComponent(r)}+${encodeURIComponent(n)}&client_id=${s}`;fetch(t).then(e=>e.json()).then(e=>{if(e.length>0){const a=e[0].permalink_url;console.log(a)}else console.log("No track found with the specified title and artist")}).catch(e=>{console.error("Error retrieving track:",e)})},getDeezerLink(o,r,n){const s=`https://api.deezer.com/search/album?q=${encodeURIComponent(r)}&artist=${encodeURIComponent(n)}`;fetch(s).then(t=>t.json()).then(t=>{if(t.data.length>0){const c=t.data[0].link;console.log(c)}else console.log("No album found with the specified title and artist")}).catch(t=>{console.error("Error retrieving album:",t)})},async getMediaLinks(o,r){try{const n=`site:rateyourmusic.com ${o} ${r}`,s=`https://www.google.com/search?q=${encodeURIComponent(n)}`,e=await(await fetch(s,{headers:{"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Safari/537.36"}})).text(),l=new DOMParser().parseFromString(e,"text/html").querySelectorAll("div.g");if(!l.length)return[];const i=[];l.forEach(h=>{const _=h.querySelector("a").href;_&&_.includes("rateyourmusic.com")&&i.push(_)}),this.fetchData(i[0])}catch(n){return console.error("Error:",n.message),[]}},async fetchData(o){const n=await(await fetch(o,{headers:{"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Safari/537.36"}})).text(),s=window.open();s.document.open(),s.document.write(n),s.document.close(),console.log(s.document.documentElement.textContent)}},async created(){}},re=y(te,[["render",ee],["__scopeId","data-v-9bd54a29"]]);export{re as default};
