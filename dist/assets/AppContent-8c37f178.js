import{o as t,c as o,F as u,j as h,b as a,A,n as S,_ as m,r as p,i as r,v as _,d as i,w as b,t as w,p as C,f as $,s as x}from"./index-b795a212.js";function k(s,v,n,g,l,d){return t(),o("div",{class:"preloader",style:S(d.cssVars)},[(t(),o(u,null,h(8,c=>a("span",{class:A(`rot-${c}`)},null,2)),64))],4)}const I={name:"AppPreloader",props:{color:{type:String,default:"#41b883"},scale:{type:Number,default:1}},computed:{cssVars(){return{"--color":this.color,"--scale":this.scale}}}},L=m(I,[["render",k],["__scopeId","data-v-b8a79861"]]),P=s=>(C("data-v-ddd58284"),s=s(),$(),s),N={class:"content"},V={class:"content__element"},B=["src","alt","onLoad"],z={class:"content__title"},D={key:1,class:"content__element"},F=P(()=>a("span",null,"No videos",-1)),R=[F];function j(s,v,n,g,l,d){const c=p("AppPreloader"),y=p("RouterLink");return t(),o("div",N,[n.arr.length?(t(!0),o(u,{key:0},h(n.arr,(e,f)=>r((t(),o("div",V,[i(y,{to:`/videos/${e.id}`},{default:b(()=>[r(i(c,null,null,512),[[_,!e.imageShow]]),r(a("img",{class:"content__image",src:l.thumbnail(e.video),alt:e.title,onLoad:T=>e.imageShow=!0},null,40,B),[[_,e.imageShow]]),a("p",z,w(e.title),1)]),_:2},1032,["to"])],512)),[[_,f<n.contentCount]])),256)):(t(),o("div",D,R))])}const E={name:"AppContent",props:["arr","contentCount"],components:{AppPreloader:L},data(){return{thumbnail:x}}},G=m(E,[["render",j],["__scopeId","data-v-ddd58284"]]);export{G as A,L as a};
