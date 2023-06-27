import{B as z,A as B}from"./Breadcrumb-1cd1b4c7.js";import{_ as p,o as i,c as a,b as o,n as N,r as s,d,f as m,v as f,F as _,e as k,w as x,h as V,t as g,k as I,g as b,l as C,m as y}from"./index-e25e7d3f.js";import{u as L}from"./index-4e066886.js";const S={mdi:{size:24,viewbox:"0 0 24 24"},"simple-icons":{size:24,viewbox:"0 0 24 24"},default:{size:0,viewbox:"0 0 0 0"}},M={name:"icon",props:{type:String,path:{type:String,required:!0},size:{type:[String,Number],default:24},viewbox:String,flip:{type:String,validator:t=>["horizontal","vertical","both","none"].includes(t)},rotate:{type:Number,default:0}},computed:{styles(){return{"--sx":["both","horizontal"].includes(this.flip)?"-1":"1","--sy":["both","vertical"].includes(this.flip)?"-1":"1","--r":isNaN(this.rotate)?this.rotate:this.rotate+"deg"}},defaults(){return S[this.type]||S.default},sizeValue(){return this.size||this.defaults.size},viewboxValue(){return this.viewbox||this.defaults.viewbox}}},H=["width","height","viewBox"],Y=["d"];function j(t,e,n,h,r,c){return i(),a("svg",{width:c.sizeValue,height:c.sizeValue,viewBox:c.viewboxValue,style:N(c.styles)},[o("path",{d:n.path},null,8,Y)],12,H)}const F=p(M,[["render",j],["__scopeId","data-v-76aa6b74"]]);var W="M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z";const U={class:"stars"};function q(t,e,n,h,r,c){const u=s("SvgIcon");return i(),a("div",U,[d(u,{type:"mdi",path:r.path},null,8,["path"])])}const O={name:"ReviewStar",components:{SvgIcon:F},data(){return{path:W}}},D=p(O,[["render",q],["__scopeId","data-v-cd040290"]]),K={name:"AppToggle",props:["toggleValue","checked"],data(){return{checkedFlag:this.checked}}};function P(t,e,n,h,r,c){const u=s("a-switch");return i(),a("div",null,[d(u,{checked:r.checkedFlag,"onUpdate:checked":e[0]||(e[0]=l=>r.checkedFlag=l),"checked-children":"EN","un-checked-children":"RU",onChange:e[1]||(e[1]=l=>n.toggleValue(r.checkedFlag))},null,8,["checked"])])}const Q=p(K,[["render",P]]),Z={class:"video"},G=["src"],J={class:"external-links"},X=["onClick"],ee={class:"player"},te=["src"];function ne(t,e,n,h,r,c){const u=s("a-button");return i(),a(_,null,[o("div",Z,[o("iframe",{src:r.video(n.current.video),title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:""},null,8,G)]),m(o("ul",J,[(i(!0),a(_,null,k(n.current.externalLinks,l=>(i(),a("li",{onClick:v=>c.changePlayer(l.title)},[d(u,null,{default:x(()=>[V(g(l.title),1)]),_:2},1024)],8,X))),256))],512),[[f,n.current.externalLinks]]),m(o("div",ee,[(i(!0),a(_,null,k(n.current.externalLinks,l=>m((i(),a("iframe",{class:"iframe",style:{"border-radius":"12px"},src:c.toEmbedLink,width:"100%",height:"452",frameBorder:"0",allowfullscreen:"",allow:"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",loading:"lazy"},null,8,te)),[[f,r.player==l.title]])),256))],512),[[f,n.current.externalLinks]])],64)}const re={name:"VideoSideSection",props:["current"],data(){return{video:I,player:"spotify"}},computed:{toEmbedLink(){if(this.player==="spotify"){let t=this.current.externalLinks.find(e=>e.title=="spotify");return t==null?"":t.source.replace("/album/","/embed/album/")}if(this.player==="AM"){let t=this.current.externalLinks.find(e=>e.title=="AM");return t==null?"":t.source.replace("music.apple.com","embed.music.apple.com")}return this.current.externalLinks}},methods:{changePlayer(t){this.player=t}}},A=p(re,[["render",ne],["__scopeId","data-v-11f0dbc3"]]);function ie(t,e,n,h,r,c){const u=s("VideoSideSection"),l=s("a-affix");return i(),b(l,{"offset-top":r.top},{default:x(()=>[d(u,{current:n.current,transformYouTubeLink:n.transformYouTubeLink},null,8,["current","transformYouTubeLink"])]),_:1},8,["offset-top"])}const se={name:"AppAffix",props:["current","transformYouTubeLink"],components:{VideoSideSection:A},data(){return{top:20}}},oe=p(se,[["render",ie]]),ce={class:"review"},le={class:"review__right"},ae={class:"review__header"},ue={class:"review__title"},de={class:"tags"},_e={class:"tag"},pe={class:"text-field multiline"},he={class:"markdown__ru"},me={class:"markdown__en"},fe={class:"review__left"};function be(t,e,n,h,r,c){const u=s("Breadcrumb"),l=s("a-button"),v=s("RouterLink"),T=s("Toggle"),R=s("ReviewStar"),$=s("Affix"),E=s("VideoSideSection");return i(),a(_,null,[d(u,{class:"breadcrumb",arr:r.breadcrumbArr,title:r.current.title},null,8,["arr","title"]),o("main",ce,[o("div",le,[o("div",ae,[o("h1",ue,g(r.current.title)+" ("+g(r.current.year)+")",1),o("ul",de,[(i(!0),a(_,null,k(r.current.tags,w=>(i(),a("li",_e,[d(v,{to:`/tags/${w.toLowerCase()}`},{default:x(()=>[d(l,null,{default:x(()=>[V(g(w.toLowerCase()),1)]),_:2},1024)]),_:2},1032,["to"])]))),256))]),r.filesLoaded==2?(i(),b(T,{key:0,class:"toggle",toggleValue:c.toggleValue,checked:r.en},null,8,["toggleValue","checked"])):C("",!0),(i(!0),a(_,null,k(r.current.rating,w=>m((i(),b(R,null,null,512)),[[f,!isNaN(r.current.rating)]])),256))]),o("div",pe,[m(o("div",he,null,512),[[f,!r.en]]),m(o("div",me,null,512),[[f,r.en]])])]),o("div",fe,[r.isAffix?(i(),b($,{key:0,current:r.current},null,8,["current"])):(i(),b(E,{key:1,current:r.current},null,8,["current"]))])])],64)}const ve={name:"AppVideo",components:{ReviewStar:D,Toggle:Q,Affix:oe,VideoSideSection:A,Breadcrumb:z},inject:["json"],data(){return{arr:this.json.filter(t=>t.type=="review"),current:null,en:!1,isLargeScreen:L("(min-width: 1024px)"),textEn:"",textRu:"",filesLoaded:0,isAffix:L("(min-width: 1300px)"),breadcrumbArr:[{title:"Home",link:"/"}]}},computed:{calculateWidth(){return this.isLargeScreen?640:400}},methods:{toggleValue(t){this.en=t},updateScreen(){this.isLargeScreen=L("(min-width: 1024px)")},addBreadcrumbLink(t){let e={};t=="review"?(e.title="Reviews",e.link="/videos",this.breadcrumbArr.push(e)):t=="weekly"?(e.title="Weekly Track Roundups",e.link="/wtr",this.breadcrumbArr.push(e)):t=="YUNOREVIEW"?(e.title="YUNOREVIEWs",e.link="/ynr",this.breadcrumbArr.push(e)):t=="TRACK REVIEW"?(e.title="TRACK REVIEW",e.link="/trkrvws",this.breadcrumbArr.push(e)):t=="list-week"?(e.title="list week",e.link="/list-week",this.breadcrumbArr.push(e)):t=="podcast"?(e.title="podcasts",e.link="/podcasts",this.breadcrumbArr.push(e)):t=="vinyl"?(e.title="vinyls",e.link="/vinyls",this.breadcrumbArr.push(e)):t=="other"&&(e.title="other",e.link="/other",this.breadcrumbArr.push(e))},stringToHTML(t){let e=document.createElement("div");return e.innerHTML=t,e}},async created(){this.current=this.json.filter(n=>n.id==this.$route.params.video)[0],this.addBreadcrumbLink(this.current.type),y(`${this.$route.params.video}-en`).then(n=>{n!==""&&(this.textEn=n,this.en=!0,this.filesLoaded++,document.querySelector(".markdown__en").innerHTML=this.textEn)}).catch(n=>{console.log(n)}),y(`${this.$route.params.video}-ru`).then(n=>{n!==""&&(this.textRu=n,this.en=!1,this.filesLoaded++,document.querySelector(".markdown__ru").innerHTML=this.textRu)}).catch(n=>{console.log(n)})}},ge=p(ve,[["render",be],["__scopeId","data-v-8031cbab"]]);function ke(t,e,n,h,r,c){const u=s("AppHeader"),l=s("AppVideo"),v=s("a-back-top");return i(),a(_,null,[d(u),d(l),d(v)],64)}const xe={components:{AppHeader:B,AppVideo:ge}},Se=p(xe,[["render",ke]]);export{Se as default};
