import{_ as C,o as g,c as p,a as h,q as A,r as m,f as R,e as V,n as O,s as Q,u as $,x as J,y as T,z as w,A as _,B as W,v as B,C as H,D as F,E as Y,G as K,H as U,I as M,J as G,K as P,L as Z,b as L,t as S,F as N,d as X,M as ee}from"./index-63fc1ddc.js";import{A as ne,a as te}from"./AppFooter-57aea98b.js";import{Y as ae}from"./vue3-youtube.umd-baa7447c.js";import{j as z}from"./main-channel-aa93630e.js";const E={mdi:{size:24,viewbox:"0 0 24 24"},"simple-icons":{size:24,viewbox:"0 0 24 24"},default:{size:0,viewbox:"0 0 0 0"}},ie={name:"icon",props:{type:String,path:{type:String,required:!0},size:{type:[String,Number],default:24},viewbox:String,flip:{type:String,validator:e=>["horizontal","vertical","both","none"].includes(e)},rotate:{type:Number,default:0}},computed:{styles(){return{"--sx":["both","horizontal"].includes(this.flip)?"-1":"1","--sy":["both","vertical"].includes(this.flip)?"-1":"1","--r":isNaN(this.rotate)?this.rotate:this.rotate+"deg"}},defaults(){return E[this.type]||E.default},sizeValue(){return this.size||this.defaults.size},viewboxValue(){return this.viewbox||this.defaults.viewbox}}},le=["width","height","viewBox"],oe=["d"];function re(e,a,t,v,n,c){return g(),p("svg",{width:c.sizeValue,height:c.sizeValue,viewBox:c.viewboxValue,style:A(c.styles)},[h("path",{d:t.path},null,8,oe)],12,le)}const ce=C(ie,[["render",re],["__scopeId","data-v-76aa6b74"]]);var se="M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z";function ue(e,a,t,v,n,c){const l=m("SvgIcon");return g(),R(l,{type:"mdi",path:n.path},null,8,["path"])}const de={name:"ReviewStar",components:{SvgIcon:ce},data(){return{path:se}}},he=C(de,[["render",ue]]);var I={name:"Toggle",emits:["input","update:modelValue","change"],props:{value:{validator:function(e){return a=>["number","string","boolean"].indexOf(typeof a)!==-1||a==null},required:!1},modelValue:{validator:function(e){return a=>["number","string","boolean"].indexOf(typeof a)!==-1||a==null},required:!1},id:{type:[String,Number],required:!1,default:"toggle"},name:{type:[String,Number],required:!1,default:"toggle"},disabled:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},falseValue:{type:[String,Number,Boolean],required:!1,default:!1},trueValue:{type:[String,Number,Boolean],required:!1,default:!0},onLabel:{type:[String,Object],required:!1,default:""},offLabel:{type:[String,Object],required:!1,default:""},classes:{type:Object,required:!1,default:()=>({})},labelledby:{type:String,required:!1},describedby:{type:String,required:!1},aria:{required:!1,type:Object,default:()=>({})}},setup(e,a){const t=function(l,r,u){const{value:d,modelValue:s,falseValue:o,trueValue:i,disabled:k}=w(l),f=s&&s.value!==void 0?s:d,b=_(()=>f.value===i.value),j=y=>{r.emit("input",y),r.emit("update:modelValue",y),r.emit("change",y)},x=()=>{j(i.value)},q=()=>{j(o.value)};return[null,void 0,!1,0,"0","off"].indexOf(f.value)!==-1&&[o.value,i.value].indexOf(f.value)===-1&&q(),[!0,1,"1","on"].indexOf(f.value)!==-1&&[o.value,i.value].indexOf(f.value)===-1&&x(),{externalValue:f,checked:b,update:j,check:x,uncheck:q,handleInput:y=>{j(y.target.checked?i.value:o.value)},handleClick:()=>{k.value||(b.value?q():x())}}}(e,a),v=function(l,r,u){const{trueValue:d,falseValue:s,onLabel:o,offLabel:i}=w(l),k=u.checked,f=u.update;return{label:_(()=>{let b=k.value?o.value:i.value;return b||(b="&nbsp;"),b}),toggle:()=>{f(k.value?s.value:d.value)},on:()=>{f(d.value)},off:()=>{f(s.value)}}}(e,0,{checked:t.checked,update:t.update}),n=function(l,r,u){const d=w(l),s=d.disabled,o=u.checked,i=_(()=>({container:"toggle-container",toggle:"toggle",toggleOn:"toggle-on",toggleOff:"toggle-off",toggleOnDisabled:"toggle-on-disabled",toggleOffDisabled:"toggle-off-disabled",handle:"toggle-handle",handleOn:"toggle-handle-on",handleOff:"toggle-handle-off",handleOnDisabled:"toggle-handle-on-disabled",handleOffDisabled:"toggle-handle-off-disabled",label:"toggle-label",...d.classes.value}));return{classList:_(()=>({container:i.value.container,toggle:[i.value.toggle,s.value?o.value?i.value.toggleOnDisabled:i.value.toggleOffDisabled:o.value?i.value.toggleOn:i.value.toggleOff],handle:[i.value.handle,s.value?o.value?i.value.handleOnDisabled:i.value.handleOffDisabled:o.value?i.value.handleOn:i.value.handleOff],label:i.value.label}))}}(e,0,{checked:t.checked}),c=function(l,r,u){const{disabled:d}=w(l),s=u.check,o=u.uncheck,i=u.checked;return{handleSpace:()=>{d.value||(i.value?o():s())}}}(e,0,{check:t.check,uncheck:t.uncheck,checked:t.checked});return{...t,...n,...v,...c}}};const fe=["tabindex","aria-checked","aria-describedby","aria-labelledby"],ge=["id","name","value","checked","disabled"],pe=["innerHTML"],ve=["checked"];I.render=function(e,a,t,v,n,c){return g(),p("div",J({class:e.classList.container,tabindex:t.disabled?void 0:0,"aria-checked":e.checked,"aria-describedby":t.describedby,"aria-labelledby":t.labelledby,role:"switch"},t.aria,{onKeypress:a[1]||(a[1]=T(W((...l)=>e.handleSpace&&e.handleSpace(...l),["prevent"]),["space"]))}),[V(h("input",{type:"checkbox",id:t.id,name:t.name,value:t.trueValue,checked:e.checked,disabled:t.disabled},null,8,ge),[[B,!1]]),h("div",{class:O(e.classList.toggle),onClick:a[0]||(a[0]=(...l)=>e.handleClick&&e.handleClick(...l))},[h("span",{class:O(e.classList.handle)},null,2),Q(e.$slots,"label",{checked:e.checked,classList:e.classList},()=>[h("span",{class:O(e.classList.label),innerHTML:e.label},null,10,pe)]),t.required?(g(),p("input",{key:0,type:"checkbox",style:{appearance:"none",height:"1px",margin:"0",padding:"0",fontSize:"0",background:"transparent",position:"absolute",width:"100%",bottom:"0",outline:"none"},checked:e.checked,"aria-hidden":"true",tabindex:"-1",required:""},null,8,ve)):$("v-if",!0)],2)],16,fe)},I.__file="src/Toggle.vue";function be(e){return H()?(F(e),!0):!1}const me=typeof window<"u",ye=()=>{};function _e(...e){if(e.length!==1)return Y(...e);const a=e[0];return typeof a=="function"?K(U(()=>({get:a,set:ye}))):M(a)}const ke=me?window:void 0;function je(){const e=M(!1);return P()&&Z(()=>{e.value=!0}),e}function we(e){const a=je();return _(()=>(a.value,!!e()))}function D(e,a={}){const{window:t=ke}=a,v=we(()=>t&&"matchMedia"in t&&typeof t.matchMedia=="function");let n;const c=M(!1),l=()=>{n&&("removeEventListener"in n?n.removeEventListener("change",r):n.removeListener(r))},r=()=>{v.value&&(l(),n=t.matchMedia(_e(e).value),c.value=!!(n!=null&&n.matches),n&&("addEventListener"in n?n.addEventListener("change",r):n.addListener(r)))};return G(r),be(()=>l()),c}const Le=`# JavaScript专题之jQuery通用遍历方法each的实现

## each介绍

jQuery 的 each 方法，作为一个通用遍历方法，可用于遍历对象和数组。

语法为：

\`\`\`js
jQuery.each(object, [callback])
\`\`\`

回调函数拥有两个参数：第一个为对象的成员或数组的索引，第二个为对应变量或内容。

\`\`\`js
// 遍历数组
$.each( [0,1,2], function(i, n){
    console.log( "Item #" + i + ": " + n );
});

// Item #0: 0
// Item #1: 1
// Item #2: 2
\`\`\`

\`\`\`js
// 遍历对象
$.each({ name: "John", lang: "JS" }, function(i, n) {
    console.log("Name: " + i + ", Value: " + n);
});
// Name: name, Value: John
// Name: lang, Value: JS
\`\`\`

## 退出循环

尽管 ES5 提供了 forEach 方法，但是 forEach 没有办法中止或者跳出 forEach 循环，除了抛出一个异常。但是对于 jQuery 的 each 函数，如果需要退出 each 循环可使回调函数返回 false，其它返回值将被忽略。

\`\`\`js
$.each( [0, 1, 2, 3, 4, 5], function(i, n){
    if (i > 2) return false;
    console.log( "Item #" + i + ": " + n );
});

// Item #0: 0
// Item #1: 1
// Item #2: 2
\`\`\`

## 第一版

那么我们该怎么实现这样一个 each 方法呢？

首先，我们肯定要根据参数的类型进行判断，如果是数组，就调用 for 循环，如果是对象，就使用 for in 循环，有一个例外是类数组对象，对于类数组对象，我们依然可以使用 for 循环。

更多关于类数组对象的知识，我们可以查看[《JavaScript专题之类数组对象与arguments》](https://github.com/mqyqingfeng/Blog/issues/14)

那么又该如何判断类数组对象和数组呢？实际上，我们在[《JavaScript专题之类型判断(下)》](https://github.com/mqyqingfeng/Blog/issues/30)就讲过jQuery 数组和类数组对象判断函数 isArrayLike 的实现。

所以，我们可以轻松写出第一版：

\`\`\`js
// 第一版
function each(obj, callback) {
    var length, i = 0;

    if ( isArrayLike(obj) ) {
        length = obj.length;
        for ( ; i < length; i++ ) {
            callback(i, obj[i])
        }
    } else {
        for ( i in obj ) {
            callback(i, obj[i])
        }
    }

    return obj;
}
\`\`\`

## 中止循环

现在已经可以遍历对象和数组了，但是依然有一个效果没有实现，就是中止循环，按照 jQuery each 的实现，当回调函数返回 false 的时候，我们就中止循环。这个实现起来也很简单：

我们只用把：

\`\`\`js
callback(i, obj[i])
\`\`\`

替换成：

\`\`\`js
if (callback(i, obj[i]) === false) {
    break;
}
\`\`\`

轻松实现中止循环的功能。

## this

我们在实际的开发中，我们有时会在 callback 函数中用到 this，先举个不怎么恰当的例子：

\`\`\`js
// 我们给每个人添加一个 age 属性，age 的值为 18 + index
var person = [
    {name: 'kevin'},
    {name: 'daisy'}
]
$.each(person, function(index, item){
    this.age = 18 + index;
})

console.log(person)
\`\`\`

这个时候，我们就希望 this 能指向当前遍历的元素，然后给每个元素添加 age 属性。

指定 this，我们可以使用 call 或者 apply，其实也很简单：

我们把：

\`\`\`js
if (callback(i, obj[i]) === false) {
    break;
}
\`\`\`

替换成：

\`\`\`js
if (callback.call(obj[i], i, obj[i]) === false) {
    break;
}
\`\`\`

关于 this，我们再举个常用的例子：

\`\`\`js
$.each($("p"), function(){
   $(this).hover(function(){ ... });
})
\`\`\`

虽然我们经常会这样写：

\`\`\`js
$("p").each(function(){
    $(this).hover(function(){ ... });
})
\`\`\`

但是因为 $("p").each() 方法是定义在 jQuery 函数的 prototype 对象上面的，而 $.data()方法是定义 jQuery 函数上面的，调用的时候不从复杂的 jQuery 对象上调用，速度快得多。所以我们推荐使用第一种写法。

回到第一种写法上，就是因为将 this 指向了当前 DOM 元素，我们才能使用 $(this)将当前 DOM 元素包装成 jQuery 对象，优雅的使用 hover 方法。

所以最终的 each 源码为：

\`\`\`js
function each(obj, callback) {
    var length, i = 0;

    if (isArrayLike(obj)) {
        length = obj.length;
        for (; i < length; i++) {
            if (callback.call(obj[i], i, obj[i]) === false) {
                break;
            }
        }
    } else {
        for (i in obj) {
            if (callback.call(obj[i], i, obj[i]) === false) {
                break;
            }
        }
    }

    return obj;
}
\`\`\`

## 性能比较

我们在性能上比较下 for 循环和 each 函数：

\`\`\`js
var arr = Array.from({length: 1000000}, (v, i) => i);

console.time('for')
var i = 0;
for (; i < arr.length; i++) {
    i += arr[i];
}
console.timeEnd('for')


console.time('each')
var j = 0;
$.each(arr, function(index, item){
    j += item;
})
console.timeEnd('each')
\`\`\`

这里显示一次运算的结果：

![性能比较](https://github.com/mqyqingfeng/Blog/raw/master/Images/each/each1.png)

从上图可以看出，for 循环的性能是明显好于 each 函数的，each 函数本质上也是用的 for 循环，到底是慢在了哪里呢？

我们再看一个例子：

\`\`\`js
function each(obj, callback) {
    var i = 0;
    var length = obj.length
    for (; i < length; i++) {
        value = callback(i, obj[i]);
    }
}

function eachWithCall(obj, callback) {
    var i = 0;
    var length = obj.length
    for (; i < length; i++) {
        value = callback.call(obj[i], i, obj[i]);
    }
}

var arr = Array.from({length: 1000000}, (v, i) => i);

console.time('each')
var i = 0;
each(arr, function(index, item){
    i += item;
})
console.timeEnd('each')


console.time('eachWithCall')
var j = 0;
eachWithCall(arr, function(index, item){
    j += item;
})
console.timeEnd('eachWithCall')
\`\`\`

这里显示一次运算的结果：

![性能比较](https://github.com/mqyqingfeng/Blog/raw/master/Images/each/each2.png)

each 函数和 eachWithCall 函数唯一的区别就是 eachWithCall 调用了 call，从结果我们可以推测出，call 会导致性能损失，但也正是 call 的存在，我们才能将 this 指向循环中当前的元素。

有舍有得吧。

## 专题系列

JavaScript专题系列目录地址：[https://github.com/mqyqingfeng/Blog](https://github.com/mqyqingfeng/Blog)。

JavaScript专题系列预计写二十篇左右，主要研究日常开发中一些功能点的实现，比如防抖、节流、去重、类型判断、拷贝、最值、扁平、柯里、递归、乱序、排序等，特点是研(chao)究(xi) underscore 和 jQuery 的实现方式。

如果有错误或者不严谨的地方，请务必给予指正，十分感谢。如果喜欢或者有所启发，欢迎 star，对作者也是一种鼓励。`,Se={class:"review"},xe={class:"review__left"},qe=["src"],Oe={class:"review__right"},Ve={class:"review__header"},Be={class:"review__title"},Ie={class:"text-field multiline"},Ce={key:0},Me={key:1};function Ne(e,a,t,v,n,c){const l=m("AppHeader"),r=m("YouTube"),u=m("Toggle"),d=m("ReviewStar"),s=m("AppFooter");return g(),p(N,null,[L(l),h("div",Se,[h("div",xe,[L(r,{class:"video",src:n.current.video,onReady:e.onReady,ref:"youtube",width:c.calculateWidth},null,8,["src","onReady","width"]),n.current.spotify!=""?(g(),p("iframe",{key:0,class:"spotify",style:{"border-radius":"12px"},src:`${n.current.spotify}&theme=0`,width:"100%",height:"452",frameBorder:"0",allowfullscreen:"",allow:"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",loading:"lazy"},null,8,qe)):$("",!0)]),h("div",Oe,[h("div",Ve,[h("h1",Be,S(n.current.title)+" ("+S(n.current.year)+")",1),V(L(u,{class:"review__toggle",modelValue:n.en,"onUpdate:modelValue":a[0]||(a[0]=o=>n.en=o),name:"toggle",onLabel:"EN",offLabel:"RU"},null,8,["modelValue"]),[[B,"ru"in n.current]])]),h("div",Ie,[n.en?(g(),p("p",Ce,S(n.current.en),1)):(g(),p("p",Me,S(n.current.ru),1))]),(g(!0),p(N,null,X(n.current.rating,o=>V((g(),R(d,null,null,512)),[[B,!isNaN(n.current.rating)]])),256))])]),L(s)],64)}const ze={components:{AppHeader:ne,AppFooter:te,ReviewStar:he,YouTube:ae,Toggle:I,Markdown:ee},data(){return{arr:z.filter(e=>e.type=="review"),current:null,en:!0,isLargeScreen:D("(min-width: 1024px)"),markdown:Le}},computed:{calculateWidth(){return this.isLargeScreen?640:400}},methods:{updateScreen(){this.isLargeScreen=D("(min-width: 1024px)")}},created(){this.current=z.filter(e=>e.id==this.$route.params.review)[0]}},Ae=C(ze,[["render",Ne],["__scopeId","data-v-b759c07f"]]);export{Ae as default};
