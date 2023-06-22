import{g as I,A as R,B as A,j as f}from"./main-channel-3eefa969.js";import{o as h,c as _,a as E,_ as w,r as u,b as d,t as y,d as i,w as b,F as k,e as C,f as g,g as U,h as B,v,p as L,i as N}from"./index-d7e63df0.js";import{A as $}from"./AppPreloader-5d2a47ad.js";const S="/assets/vk-b764f8fc.png",V={class:"footer"},j=E('<ul class="list" data-v-0f2d1c87><a href="https://vk.com/mbdtfisstill6" target="_blank" data-v-0f2d1c87><li class="item" data-v-0f2d1c87><img class="image" src="'+S+'" data-v-0f2d1c87></li></a></ul><p class="text" data-v-0f2d1c87>Copyright © 2023 The Needle Drop</p>',2),x=[j];function H(o,s,n,c,t,e){return h(),_("footer",V,x)}const F={name:"AppFooter"},P=w(F,[["render",H],["__scopeId","data-v-0f2d1c87"]]),D={class:"header"},O={class:"header__title"},Q={class:"content"},Y=["src","alt","onLoad"],z={class:"content__title"};function Z(o,s,n,c,t,e){const r=u("a-button"),a=u("RouterLink"),l=u("AppPreloader");return h(),_(k,null,[d("div",D,[d("h2",O,y(n.title),1),i(a,{to:`/${n.link}`},{default:b(()=>[i(r,{type:"dashed"},{default:b(()=>[B("Show all")]),_:1})]),_:1},8,["to"])]),d("div",Q,[(h(!0),_(k,null,C(n.arr,(p,m)=>g((h(),U(a,{class:"content__element",to:`/videos/${p.id}`},{default:b(()=>[g(i(l,null,null,512),[[v,!p.imageShow]]),g(d("img",{class:"content__image",src:t.thumbnail(p.video),alt:p.title,onLoad:te=>p.imageShow=!0},null,40,Y),[[v,p.imageShow]]),d("p",z,y(p.title),1)]),_:2},1032,["to"])),[[v,m<5]])),256))])],64)}const q={name:"HomeBlock",props:["title","link","arr"],components:{AppPreloader:$},data(){return{thumbnail:I}}},M=w(q,[["render",Z],["__scopeId","data-v-3980dcbf"]]),T=o=>(L("data-v-23b59776"),o=o(),N(),o),W={class:"reviews"},G={class:"wtr"},X={class:"ynr"},J=T(()=>d("div",{class:"list-week"},null,-1));function K(o,s,n,c,t,e){const r=u("AppHeader"),a=u("Breadcrumb"),l=u("HomeBlock"),p=u("AppFooter"),m=u("a-back-top");return h(),_(k,null,[i(r),i(a,{class:"breadcrumb",title:"Home"}),d("main",null,[d("div",W,[i(l,{title:"REVIEWS",link:"videos",arr:t.reviews},null,8,["arr"])]),d("div",G,[i(l,{title:"WTRs",link:"wtr",arr:t.wtr},null,8,["arr"])]),d("div",X,[i(l,{title:"YUNOREVIEWS",link:"ynr",arr:t.ynr},null,8,["arr"])]),J]),i(p),i(m)],64)}const ee={name:"HomeView",components:{AppHeader:R,Breadcrumb:A,AppFooter:P,HomeBlock:M,AppPreloader:$},data(){return{reviews:f.filter(o=>o.type=="review").slice(0,5),wtr:f.filter(o=>o.type=="weekly").slice(0,5),ynr:f.filter(o=>o.type=="YUNOREVIEW").slice(0,5)}},methods:{async fetchLastFm(o,s,n,c){fetch(`http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=${s}&artist=${encodeURIComponent(n)}&album=${encodeURIComponent(c)}&format=json`).then(t=>t.json()).catch(t=>{console.error("Error:",t)}).then(t=>{const e=t.album;if(!Array.isArray(e.tags.tag))return;let r=e.tags.tag.map(a=>a.name);console.log(o,r)}).catch(t=>{console.error("Error:",t)})},splitMarkdownParagraphs(o){o=o.replace(/\r/g,"");const s=o.split(/\n\s*\n|\n/);let n=[];return s.forEach(c=>{let t=c.split(" / "),e={};e.id=t[0],e.tags=t[1],n.push(e)}),n},getSpotifyLink(o,s,n){const c="BQAiQiePpzG8UOZMRMBJbbeED1S7WgZCJg2ZmXrxZvYRdLXJFbfjNIVTyOh7wb9eZn7Ub5B9NyJ6T8z3ogXRAXZvCQG2bd7UnSFtiAmPiIjAIP0hGqyt68cQiaun7BDzV_5BDQOoWOrPin5tXyMltoB9Ed05OcNyY2b2qR72lz1iDWesxHJCTrRt2OEAIZgEzo6uonrNcG5ciR11lHrh_NowudIRMuG9Gye7tZ62ZQxJIZupbwwQ5e-ElC0W_1d7wqYOfp6VtfgVazX8UPi5YhCB",t=`album:${encodeURIComponent(s)} artist:${encodeURIComponent(n)}`;fetch(`https://api.spotify.com/v1/search?q=${t}&type=album`,{headers:{Authorization:`Bearer ${c}`}}).then(e=>e.json()).then(e=>{const r=e.albums.items;if(r.length>0){const l=r[0].external_urls.spotify;console.log([o,l])}else console.log("No album found with the specified title and artist")}).catch(e=>{console.error("Error retrieving album:",e)})},getAppleMusicLink(o,s,n){const c=`${s} ${n}`,t=`https://itunes.apple.com/search?term=${encodeURIComponent(c)}&entity=album&limit=1`;fetch(t).then(e=>e.json()).then(e=>{if(e.results&&e.results.length>0){const a=e.results[0].collectionViewUrl;console.log(a)}else return null}).catch(e=>(console.error("Error:",e),null))},getYouTubeLink(o,s,n){const c=`${s} ${n} album`,t="AIzaSyD8veGTCgXd1xMkSnd_yljDUFQk3edSFaM";fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(c)}&type=video&maxResults=10&key=${t}`).then(e=>e.json()).then(e=>{const r=e.items;if(r.length>0){const a=r.find(l=>l.snippet.title.toLowerCase().includes(s.toLowerCase()));if(a){const l=`https://www.youtube.com/watch?v=${a.id.videoId}`;console.log(l)}else console.log("No album found with the specified title and artist")}else console.log("No videos found with the specified title and artist")}).catch(e=>{console.error("Error retrieving album:",e)})},getBandcampLink(o,s,n){const t=`https://api.bandcamp.com/api/album/2/search?key=&q=${encodeURIComponent(s)}+${encodeURIComponent(n)}`;fetch(t).then(e=>e.json()).then(e=>{if(e.results.length>0){const a=e.results[0].url;console.log(a)}else console.log("No album found with the specified title and artist")}).catch(e=>{console.error("Error retrieving album:",e)})},getSoundcloudLink(o,s,n){const c="YOUR_CLIENT_ID",t=`https://api.soundcloud.com/tracks?q=${encodeURIComponent(s)}+${encodeURIComponent(n)}&client_id=${c}`;fetch(t).then(e=>e.json()).then(e=>{if(e.length>0){const a=e[0].permalink_url;console.log(a)}else console.log("No track found with the specified title and artist")}).catch(e=>{console.error("Error retrieving track:",e)})},getDeezerLink(o,s,n){const c=`https://api.deezer.com/search/album?q=${encodeURIComponent(s)}&artist=${encodeURIComponent(n)}`;fetch(c).then(t=>t.json()).then(t=>{if(t.data.length>0){const r=t.data[0].link;console.log(r)}else console.log("No album found with the specified title and artist")}).catch(t=>{console.error("Error retrieving album:",t)})}},async created(){}},ce=w(ee,[["render",K],["__scopeId","data-v-23b59776"]]);export{ce as default};
