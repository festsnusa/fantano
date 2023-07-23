import{B as R,A as N}from"./Breadcrumb-fbd41e17.js";import{_ as h,o as s,c as a,b as u,n as z,r as l,d as _,g as B,h as P,i as v,v as b,F as m,j as g,w as k,e as A,t as y,k as f,l as j,m as C,q as S}from"./index-b795a212.js";import{u as x}from"./index-4b58ce96.js";const V={mdi:{size:24,viewbox:"0 0 24 24"},"simple-icons":{size:24,viewbox:"0 0 24 24"},default:{size:0,viewbox:"0 0 0 0"}},M={name:"icon",props:{type:String,path:{type:String,required:!0},size:{type:[String,Number],default:24},viewbox:String,flip:{type:String,validator:t=>["horizontal","vertical","both","none"].includes(t)},rotate:{type:Number,default:0}},computed:{styles(){return{"--sx":["both","horizontal"].includes(this.flip)?"-1":"1","--sy":["both","vertical"].includes(this.flip)?"-1":"1","--r":isNaN(this.rotate)?this.rotate:this.rotate+"deg"}},defaults(){return V[this.type]||V.default},sizeValue(){return this.size||this.defaults.size},viewboxValue(){return this.viewbox||this.defaults.viewbox}}},H=["width","height","viewBox"],K=["d"];function U(t,e,n,p,r,o){return s(),a("svg",{width:o.sizeValue,height:o.sizeValue,viewBox:o.viewboxValue,style:z(o.styles)},[u("path",{d:n.path},null,8,K)],12,H)}const Y=h(M,[["render",U],["__scopeId","data-v-76aa6b74"]]);var F="M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z";const W={class:"stars"};function q(t,e,n,p,r,o){const i=l("SvgIcon");return s(),a("div",W,[_(i,{type:"mdi",path:r.path},null,8,["path"])])}const O={name:"ReviewStar",components:{SvgIcon:Y},data(){return{path:F}}},D=h(O,[["render",q],["__scopeId","data-v-cd040290"]]),Q={name:"AppToggle",props:["toggleValue","checked"],data(){return{checkedFlag:this.checked}}};function Z(t,e,n,p,r,o){const i=l("a-switch");return s(),a("div",null,[_(i,{checked:r.checkedFlag,"onUpdate:checked":e[0]||(e[0]=d=>r.checkedFlag=d),"checked-children":"EN","un-checked-children":"RU",onChange:e[1]||(e[1]=d=>n.toggleValue(r.checkedFlag))},null,8,["checked"])])}const G=h(Q,[["render",Z]]),J={name:"VKPlaylist",props:{playlistUrl:{type:String,required:!0},width:{type:Number,default:300},height:{type:Number,default:400}},setup(t){const e=B(!1),n=i=>{const d=/playlist\/-([\d]+)_([\w]+)/,c=i.match(d);return c&&c.length===3?{ownerId:`-${c[1]}`,playlistId:c[2]}:{ownerId:null,playlistId:null}},{ownerId:p,playlistId:r}=n(t.playlistUrl);P(()=>{if(e.value)o();else{const i=document.createElement("script");i.src="https://vk.com/js/api/openapi.js?168",i.async=!0,i.defer=!0,document.head.appendChild(i),i.onload=()=>{e.value=!0,o()}}});const o=i=>{VK.Widgets.Playlist("vkPlaylist",p,r,t.width,t.height,{mode:4})};return{embedPlaylist:o}}},X={id:"vkPlaylist",ref:"vkPlaylist"};function ee(t,e,n,p,r,o){return s(),a("div",X,null,512)}const te=h(J,[["render",ee]]),ne={class:"video"},re=["src"],se={class:"external-links"},ie=["onClick"],oe={class:"player"},le=["src"];function ce(t,e,n,p,r,o){const i=l("a-button"),d=l("VKPlaylist");return s(),a(m,null,[u("div",ne,[u("iframe",{src:r.video(n.current.video),rel:"0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:""},null,8,re)]),v(u("ul",se,[(s(!0),a(m,null,g(n.current.externalLinks,c=>(s(),a("li",{onClick:L=>o.changePlayer(c.title)},[_(i,null,{default:k(()=>[A(y(c.title),1)]),_:2},1024)],8,ie))),256))],512),[[b,n.current.externalLinks]]),v(u("div",oe,[(s(!0),a(m,null,g(n.current.externalLinks,c=>(s(),a("div",null,[c.title==="VK"?(s(),f(d,{key:0,playlistUrl:c.source},null,8,["playlistUrl"])):v((s(),a("iframe",{key:1,class:"iframe",style:{"border-radius":"12px"},src:o.toEmbedLink,width:"100%",height:"452",frameBorder:"0",allowfullscreen:"",allow:"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",loading:"lazy"},null,8,le)),[[b,r.player==c.title]])]))),256))],512),[[b,n.current.externalLinks]])],64)}const ae={name:"VideoSideSection",props:["current"],components:{VKPlaylist:te},data(){var t;return{video:j,player:(t=this.current.externalLinks)!=null&&t.length?this.current.externalLinks[0].title:"spotify"}},computed:{toEmbedLink(){if(this.player==="spotify"){let t=this.current.externalLinks.find(e=>e.title=="spotify");return t==null?"":t.source.replace("/album/","/embed/album/")}else if(this.player==="AM"){let t=this.current.externalLinks.find(e=>e.title=="AM");return t==null?"":t.source.replace("music.apple.com","embed.music.apple.com")}else{let t=this.current.externalLinks.find(e=>e.title==this.player);return t==null?"":t.source}}},methods:{changePlayer(t){this.player=t}}},$=h(ae,[["render",ce],["__scopeId","data-v-49ea3526"]]);function ue(t,e,n,p,r,o){const i=l("VideoSideSection"),d=l("a-affix");return s(),f(d,{"offset-top":r.top},{default:k(()=>[_(i,{current:n.current,transformYouTubeLink:n.transformYouTubeLink},null,8,["current","transformYouTubeLink"])]),_:1},8,["offset-top"])}const de={name:"AppAffix",props:["current","transformYouTubeLink"],components:{VideoSideSection:$},data(){return{top:20}}},_e=h(de,[["render",ue]]),pe={class:"review"},he={class:"review__right"},me={class:"review__header"},fe={class:"review__title"},ve={class:"tags"},be={class:"tag"},ye={class:"text-field multiline"},ge={class:"markdown__ru"},ke={class:"markdown__en"},we={class:"review__left"};function xe(t,e,n,p,r,o){const i=l("Breadcrumb"),d=l("a-button"),c=l("RouterLink"),L=l("Toggle"),T=l("ReviewStar"),I=l("Affix"),E=l("VideoSideSection");return s(),a(m,null,[_(i,{class:"breadcrumb",arr:r.breadcrumbArr,title:r.current.title},null,8,["arr","title"]),u("main",pe,[u("div",he,[u("div",me,[u("h1",fe,y(r.current.title)+" ("+y(r.current.year)+")",1),u("ul",ve,[(s(!0),a(m,null,g(r.current.tags,w=>(s(),a("li",be,[_(c,{to:`/tags/${w.toLowerCase()}`},{default:k(()=>[_(d,null,{default:k(()=>[A(y(w.toLowerCase()),1)]),_:2},1024)]),_:2},1032,["to"])]))),256))]),r.filesLoaded==2?(s(),f(L,{key:0,class:"toggle",toggleValue:o.toggleValue,checked:r.en},null,8,["toggleValue","checked"])):C("",!0),(s(!0),a(m,null,g(r.current.rating,w=>v((s(),f(T,null,null,512)),[[b,!isNaN(r.current.rating)]])),256))]),u("div",ye,[v(u("div",ge,null,512),[[b,!r.en]]),v(u("div",ke,null,512),[[b,r.en]])])]),u("div",we,[r.isAffix?(s(),f(I,{key:0,current:r.current},null,8,["current"])):(s(),f(E,{key:1,current:r.current},null,8,["current"]))])])],64)}const Le={name:"AppVideo",components:{ReviewStar:D,Toggle:G,Affix:_e,VideoSideSection:$,Breadcrumb:R},inject:["json"],data(){return{arr:this.json.filter(t=>t.type=="review"),current:null,en:!1,isLargeScreen:x("(min-width: 1024px)"),textEn:"",textRu:"",filesLoaded:0,isAffix:x("(min-width: 1300px)"),breadcrumbArr:[{title:"Home",link:"/"}]}},computed:{calculateWidth(){return this.isLargeScreen?640:400}},methods:{toggleValue(t){this.en=t},updateScreen(){this.isLargeScreen=x("(min-width: 1024px)")},addBreadcrumbLink(t){let e={};t=="review"?(e.title="Reviews",e.link="/videos",this.breadcrumbArr.push(e)):t=="weekly"?(e.title="Weekly Track Roundups",e.link="/wtr",this.breadcrumbArr.push(e)):t=="YUNOREVIEW"?(e.title="YUNOREVIEWs",e.link="/ynr",this.breadcrumbArr.push(e)):t=="TRACK REVIEW"?(e.title="TRACK REVIEW",e.link="/trkrvws",this.breadcrumbArr.push(e)):t=="list-week"?(e.title="list week",e.link="/list-week",this.breadcrumbArr.push(e)):t=="podcast"?(e.title="podcasts",e.link="/podcasts",this.breadcrumbArr.push(e)):t=="vinyl"?(e.title="vinyls",e.link="/vinyls",this.breadcrumbArr.push(e)):t=="other"&&(e.title="other",e.link="/other",this.breadcrumbArr.push(e))},stringToHTML(t){let e=document.createElement("div");return e.innerHTML=t,e}},async created(){this.current=this.json.filter(n=>n.id==this.$route.params.video)[0],this.addBreadcrumbLink(this.current.type),S(`${this.$route.params.video}-en`).then(n=>{if(n!=="")this.textEn=n,this.en=!0,this.filesLoaded++,document.querySelector(".markdown__en").innerHTML=this.textEn;else throw new Error("Not found")}).catch(n=>{console.log(n)}),S(`${this.$route.params.video}-ru`).then(n=>{if(n!=="")this.textRu=n,this.en=!1,this.filesLoaded++,document.querySelector(".markdown__ru").innerHTML=this.textRu;else throw new Error("Not found")}).catch(n=>{console.log(n)})}},Se=h(Le,[["render",xe],["__scopeId","data-v-080d6b39"]]);function Ve(t,e,n,p,r,o){const i=l("AppHeader"),d=l("AppVideo"),c=l("a-back-top");return s(),a(m,null,[_(i),_(d),_(c)],64)}const Ae={components:{AppHeader:N,AppVideo:Se}},Ee=h(Ae,[["render",Ve]]);export{Ee as default};
