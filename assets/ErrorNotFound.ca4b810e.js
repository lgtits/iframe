import{f as s,m as re,d as le,h as v,g as F,i as V,j as ve,k as me,s as ie,l as ge,n as U,q as he,w as be,t as P,T as ye,u as ke,v as pe,_ as xe,o as qe,a as $e,e as Q,x as _e}from"./index.91d16978.js";const D={xs:18,sm:24,md:32,lg:38,xl:46},ue={size:String};function oe(e,t=D){return s(()=>e.size!==void 0?{fontSize:e.size in t?`${t[e.size]}px`:e.size}:null)}const H=e=>re(le(e)),Ee=e=>re(e);function we(e,t){return e!==void 0&&e()||t}function z(e,t){return e!==void 0?t.concat(e()):t}const W="0 0 24 24",X=e=>e,I=e=>`ionicons ${e}`,se={"mdi-":e=>`mdi ${e}`,"icon-":X,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":I,"ion-ios":I,"ion-logo":I,"iconfont ":X,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`},ce={o_:"-outlined",r_:"-round",s_:"-sharp"},de={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},Se=new RegExp("^("+Object.keys(se).join("|")+")"),Be=new RegExp("^("+Object.keys(ce).join("|")+")"),G=new RegExp("^("+Object.keys(de).join("|")+")"),Re=/^[Mm]\s?[-+]?\.?\d/,Ce=/^img:/,Le=/^svguse:/,Pe=/^ion-/,Te=/^(fa-(sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;var Y=H({name:"QIcon",props:{...ue,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:t}){const{proxy:{$q:a}}=F(),n=oe(e),u=s(()=>"q-icon"+(e.left===!0?" on-left":"")+(e.right===!0?" on-right":"")+(e.color!==void 0?` text-${e.color}`:"")),f=s(()=>{let c,r=e.name;if(r==="none"||!r)return{none:!0};if(a.iconMapFn!==null){const o=a.iconMapFn(r);if(o!==void 0)if(o.icon!==void 0){if(r=o.icon,r==="none"||!r)return{none:!0}}else return{cls:o.cls,content:o.content!==void 0?o.content:" "}}if(Re.test(r)===!0){const[o,y=W]=r.split("|");return{svg:!0,viewBox:y,nodes:o.split("&&").map(i=>{const[k,h,p]=i.split("@@");return v("path",{style:h,d:k,transform:p})})}}if(Ce.test(r)===!0)return{img:!0,src:r.substring(4)};if(Le.test(r)===!0){const[o,y=W]=r.split("|");return{svguse:!0,src:o.substring(7),viewBox:y}}let q=" ";const b=r.match(Se);if(b!==null)c=se[b[1]](r);else if(Te.test(r)===!0)c=r;else if(Pe.test(r)===!0)c=`ionicons ion-${a.platform.is.ios===!0?"ios":"md"}${r.substring(3)}`;else if(G.test(r)===!0){c="notranslate material-symbols";const o=r.match(G);o!==null&&(r=r.substring(6),c+=de[o[1]]),q=r}else{c="notranslate material-icons";const o=r.match(Be);o!==null&&(r=r.substring(2),c+=ce[o[1]]),q=r}return{cls:c,content:q}});return()=>{const c={class:u.value,style:n.value,"aria-hidden":"true",role:"presentation"};return f.value.none===!0?v(e.tag,c,we(t.default)):f.value.img===!0?v("span",c,z(t.default,[v("img",{src:f.value.src})])):f.value.svg===!0?v("span",c,z(t.default,[v("svg",{viewBox:f.value.viewBox||"0 0 24 24"},f.value.nodes)])):f.value.svguse===!0?v("span",c,z(t.default,[v("svg",{viewBox:f.value.viewBox},[v("use",{"xlink:href":f.value.src})])])):(f.value.cls!==void 0&&(c.class+=" "+f.value.cls),v(e.tag,c,z(t.default,[f.value.content])))}}});const Oe={size:{type:[Number,String],default:"1em"},color:String};function Ae(e){return{cSize:s(()=>e.size in D?`${D[e.size]}px`:e.size),classes:s(()=>"q-spinner"+(e.color?` text-${e.color}`:""))}}var Me=H({name:"QSpinner",props:{...Oe,thickness:{type:Number,default:5}},setup(e){const{cSize:t,classes:a}=Ae(e);return()=>v("svg",{class:a.value+" q-spinner-mat",width:t.value,height:t.value,viewBox:"25 25 50 50"},[v("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e.thickness,"stroke-miterlimit":"10"})])}});function je(e,t){const a=e.style;for(const n in t)a[n]=t[n]}function ze(e,t=250){let a=!1,n;return function(){return a===!1&&(a=!0,setTimeout(()=>{a=!1},t),n=e.apply(this,arguments)),n}}function J(e,t,a,n){a.modifiers.stop===!0&&ie(e);const u=a.modifiers.color;let f=a.modifiers.center;f=f===!0||n===!0;const c=document.createElement("span"),r=document.createElement("span"),q=ge(e),{left:b,top:o,width:y,height:i}=t.getBoundingClientRect(),k=Math.sqrt(y*y+i*i),h=k/2,p=`${(y-k)/2}px`,d=f?p:`${q.left-b-h}px`,x=`${(i-k)/2}px`,L=f?x:`${q.top-o-h}px`;r.className="q-ripple__inner",je(r,{height:`${k}px`,width:`${k}px`,transform:`translate3d(${d},${L},0) scale3d(.2,.2,1)`,opacity:0}),c.className=`q-ripple${u?" text-"+u:""}`,c.setAttribute("dir","ltr"),c.appendChild(r),t.appendChild(c);const R=()=>{c.remove(),clearTimeout(C)};a.abort.push(R);let C=setTimeout(()=>{r.classList.add("q-ripple__inner--enter"),r.style.transform=`translate3d(${p},${x},0) scale3d(1,1,1)`,r.style.opacity=.2,C=setTimeout(()=>{r.classList.remove("q-ripple__inner--enter"),r.classList.add("q-ripple__inner--leave"),r.style.opacity=0,C=setTimeout(()=>{c.remove(),a.abort.splice(a.abort.indexOf(R),1)},275)},250)},50)}function Z(e,{modifiers:t,value:a,arg:n}){const u=Object.assign({},e.cfg.ripple,t,a);e.modifiers={early:u.early===!0,stop:u.stop===!0,center:u.center===!0,color:u.color||n,keyCodes:[].concat(u.keyCodes||13)}}var Ne=Ee({name:"ripple",beforeMount(e,t){const a=t.instance.$.appContext.config.globalProperties.$q.config||{};if(a.ripple===!1)return;const n={cfg:a,enabled:t.value!==!1,modifiers:{},abort:[],start(u){n.enabled===!0&&u.qSkipRipple!==!0&&u.type===(n.modifiers.early===!0?"pointerdown":"click")&&J(u,e,n,u.qKeyEvent===!0)},keystart:ze(u=>{n.enabled===!0&&u.qSkipRipple!==!0&&V(u,n.modifiers.keyCodes)===!0&&u.type===`key${n.modifiers.early===!0?"down":"up"}`&&J(u,e,n,!0)},300)};Z(n,t),e.__qripple=n,ve(n,"main",[[e,"pointerdown","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,t){if(t.oldValue!==t.value){const a=e.__qripple;a!==void 0&&(a.enabled=t.value!==!1,a.enabled===!0&&Object(t.value)===t.value&&Z(a,t))}},beforeUnmount(e){const t=e.__qripple;t!==void 0&&(t.abort.forEach(a=>{a()}),me(t,"main"),delete e._qripple)}});const fe={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},Ke=Object.keys(fe),Ie={align:{type:String,validator:e=>Ke.includes(e)}};function Ve(e){return s(()=>{const t=e.align===void 0?e.vertical===!0?"stretch":"left":e.align;return`${e.vertical===!0?"items":"justify"}-${fe[t]}`})}function De(e){return e.appContext.config.globalProperties.$router!==void 0}function ee(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function te(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Fe(e,t){for(const a in t){const n=t[a],u=e[a];if(typeof n=="string"){if(n!==u)return!1}else if(Array.isArray(u)===!1||u.length!==n.length||n.some((f,c)=>f!==u[c]))return!1}return!0}function ne(e,t){return Array.isArray(t)===!0?e.length===t.length&&e.every((a,n)=>a===t[n]):e.length===1&&e[0]===t}function Qe(e,t){return Array.isArray(e)===!0?ne(e,t):Array.isArray(t)===!0?ne(t,e):e===t}function He(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const a in e)if(Qe(e[a],t[a])===!1)return!1;return!0}const Ue={to:[String,Object],replace:Boolean,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"},href:String,target:String,disable:Boolean};function We({fallbackTag:e,useDisableForRouterLinkProps:t=!0}={}){const a=F(),{props:n,proxy:u,emit:f}=a,c=De(a),r=s(()=>n.disable!==!0&&n.href!==void 0),q=t===!0?s(()=>c===!0&&n.disable!==!0&&r.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""):s(()=>c===!0&&r.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""),b=s(()=>q.value===!0?L(n.to):null),o=s(()=>b.value!==null),y=s(()=>r.value===!0||o.value===!0),i=s(()=>n.type==="a"||y.value===!0?"a":n.tag||e||"div"),k=s(()=>r.value===!0?{href:n.href,target:n.target}:o.value===!0?{href:b.value.href,target:n.target}:{}),h=s(()=>{if(o.value===!1)return-1;const{matched:m}=b.value,{length:$}=m,E=m[$-1];if(E===void 0)return-1;const S=u.$route.matched;if(S.length===0)return-1;const B=S.findIndex(te.bind(null,E));if(B>-1)return B;const N=ee(m[$-2]);return $>1&&ee(E)===N&&S[S.length-1].path!==N?S.findIndex(te.bind(null,m[$-2])):B}),p=s(()=>o.value===!0&&h.value!==-1&&Fe(u.$route.params,b.value.params)),d=s(()=>p.value===!0&&h.value===u.$route.matched.length-1&&He(u.$route.params,b.value.params)),x=s(()=>o.value===!0?d.value===!0?` ${n.exactActiveClass} ${n.activeClass}`:n.exact===!0?"":p.value===!0?` ${n.activeClass}`:"":"");function L(m){try{return u.$router.resolve(m)}catch{}return null}function R(m,{returnRouterError:$,to:E=n.to,replace:S=n.replace}={}){if(n.disable===!0)return m.preventDefault(),Promise.resolve(!1);if(m.metaKey||m.altKey||m.ctrlKey||m.shiftKey||m.button!==void 0&&m.button!==0||n.target==="_blank")return Promise.resolve(!1);m.preventDefault();const B=u.$router[S===!0?"replace":"push"](E);return $===!0?B:B.then(()=>{}).catch(()=>{})}function C(m){if(o.value===!0){const $=E=>R(m,E);f("click",m,$),m.defaultPrevented!==!0&&$()}else f("click",m)}return{hasRouterLink:o,hasHrefLink:r,hasLink:y,linkTag:i,resolvedLink:b,linkIsActive:p,linkIsExactActive:d,linkClass:x,linkAttrs:k,getLink:L,navigateToRouterLink:R,navigateOnClick:C}}const ae={none:0,xs:4,sm:8,md:16,lg:24,xl:32},Xe={xs:8,sm:10,md:14,lg:20,xl:24},Ge=["button","submit","reset"],Ye=/[^\s]\/[^\s]/,Je=["flat","outline","push","unelevated"],Ze=(e,t)=>e.flat===!0?"flat":e.outline===!0?"outline":e.push===!0?"push":e.unelevated===!0?"unelevated":t,et={...ue,...Ue,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,...Je.reduce((e,t)=>(e[t]=Boolean)&&e,{}),square:Boolean,round:Boolean,rounded:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...Ie.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean};function tt(e){const t=oe(e,Xe),a=Ve(e),{hasRouterLink:n,hasLink:u,linkTag:f,linkAttrs:c,navigateOnClick:r}=We({fallbackTag:"button"}),q=s(()=>{const d=e.fab===!1&&e.fabMini===!1?t.value:{};return e.padding!==void 0?Object.assign({},d,{padding:e.padding.split(/\s+/).map(x=>x in ae?ae[x]+"px":x).join(" "),minWidth:"0",minHeight:"0"}):d}),b=s(()=>e.rounded===!0||e.fab===!0||e.fabMini===!0),o=s(()=>e.disable!==!0&&e.loading!==!0),y=s(()=>o.value===!0?e.tabindex||0:-1),i=s(()=>Ze(e,"standard")),k=s(()=>{const d={tabindex:y.value};return u.value===!0?Object.assign(d,c.value):Ge.includes(e.type)===!0&&(d.type=e.type),f.value==="a"?(e.disable===!0?d["aria-disabled"]="true":d.href===void 0&&(d.role="button"),n.value!==!0&&Ye.test(e.type)===!0&&(d.type=e.type)):e.disable===!0&&(d.disabled="",d["aria-disabled"]="true"),e.loading===!0&&e.percentage!==void 0&&Object.assign(d,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage}),d}),h=s(()=>{let d;e.color!==void 0?e.flat===!0||e.outline===!0?d=`text-${e.textColor||e.color}`:d=`bg-${e.color} text-${e.textColor||"white"}`:e.textColor&&(d=`text-${e.textColor}`);const x=e.round===!0?"round":`rectangle${b.value===!0?" q-btn--rounded":e.square===!0?" q-btn--square":""}`;return`q-btn--${i.value} q-btn--${x}`+(d!==void 0?" "+d:"")+(o.value===!0?" q-btn--actionable q-focusable q-hoverable":e.disable===!0?" disabled":"")+(e.fab===!0?" q-btn--fab":e.fabMini===!0?" q-btn--fab-mini":"")+(e.noCaps===!0?" q-btn--no-uppercase":"")+(e.dense===!0?" q-btn--dense":"")+(e.stretch===!0?" no-border-radius self-stretch":"")+(e.glossy===!0?" glossy":"")+(e.square?" q-btn--square":"")}),p=s(()=>a.value+(e.stack===!0?" column":" row")+(e.noWrap===!0?" no-wrap text-no-wrap":"")+(e.loading===!0?" q-btn__content--hidden":""));return{classes:h,style:q,innerClasses:p,attributes:k,hasLink:u,linkTag:f,navigateOnClick:r,isActionable:o}}const{passiveCapture:_}=ke;let T=null,O=null,A=null;var nt=H({name:"QBtn",props:{...et,percentage:Number,darkPercentage:Boolean,onTouchstart:[Function,Array]},emits:["click","keydown","mousedown","keyup"],setup(e,{slots:t,emit:a}){const{proxy:n}=F(),{classes:u,style:f,innerClasses:c,attributes:r,hasLink:q,linkTag:b,navigateOnClick:o,isActionable:y}=tt(e),i=U(null),k=U(null);let h=null,p,d=null;const x=s(()=>e.label!==void 0&&e.label!==null&&e.label!==""),L=s(()=>e.disable===!0||e.ripple===!1?!1:{keyCodes:q.value===!0?[13,32]:[13],...e.ripple===!0?{}:e.ripple}),R=s(()=>({center:e.round})),C=s(()=>{const l=Math.max(0,Math.min(100,e.percentage));return l>0?{transition:"transform 0.6s",transform:`translateX(${l-100}%)`}:{}}),m=s(()=>{if(e.loading===!0)return{onMousedown:j,onTouchstart:j,onClick:j,onKeydown:j,onKeyup:j};if(y.value===!0){const l={onClick:E,onKeydown:S,onMousedown:N};if(n.$q.platform.has.touch===!0){const g=e.onTouchstart!==void 0?"":"Passive";l[`onTouchstart${g}`]=B}return l}return{onClick:P}}),$=s(()=>({ref:i,class:"q-btn q-btn-item non-selectable no-outline "+u.value,style:f.value,...r.value,...m.value}));function E(l){if(i.value!==null){if(l!==void 0){if(l.defaultPrevented===!0)return;const g=document.activeElement;if(e.type==="submit"&&g!==document.body&&i.value.contains(g)===!1&&g.contains(i.value)===!1){i.value.focus();const K=()=>{document.removeEventListener("keydown",P,!0),document.removeEventListener("keyup",K,_),i.value!==null&&i.value.removeEventListener("blur",K,_)};document.addEventListener("keydown",P,!0),document.addEventListener("keyup",K,_),i.value.addEventListener("blur",K,_)}}o(l)}}function S(l){i.value!==null&&(a("keydown",l),V(l,[13,32])===!0&&O!==i.value&&(O!==null&&M(),l.defaultPrevented!==!0&&(i.value.focus(),O=i.value,i.value.classList.add("q-btn--active"),document.addEventListener("keyup",w,!0),i.value.addEventListener("blur",w,_)),P(l)))}function B(l){i.value!==null&&(a("touchstart",l),l.defaultPrevented!==!0&&(T!==i.value&&(T!==null&&M(),T=i.value,h=l.target,h.addEventListener("touchcancel",w,_),h.addEventListener("touchend",w,_)),p=!0,d!==null&&clearTimeout(d),d=setTimeout(()=>{d=null,p=!1},200)))}function N(l){i.value!==null&&(l.qSkipRipple=p===!0,a("mousedown",l),l.defaultPrevented!==!0&&A!==i.value&&(A!==null&&M(),A=i.value,i.value.classList.add("q-btn--active"),document.addEventListener("mouseup",w,_)))}function w(l){if(i.value!==null&&!(l!==void 0&&l.type==="blur"&&document.activeElement===i.value)){if(l!==void 0&&l.type==="keyup"){if(O===i.value&&V(l,[13,32])===!0){const g=new MouseEvent("click",l);g.qKeyEvent=!0,l.defaultPrevented===!0&&pe(g),l.cancelBubble===!0&&ie(g),i.value.dispatchEvent(g),P(l),l.qKeyEvent=!0}a("keyup",l)}M()}}function M(l){const g=k.value;l!==!0&&(T===i.value||A===i.value)&&g!==null&&g!==document.activeElement&&(g.setAttribute("tabindex",-1),g.focus()),T===i.value&&(h!==null&&(h.removeEventListener("touchcancel",w,_),h.removeEventListener("touchend",w,_)),T=h=null),A===i.value&&(document.removeEventListener("mouseup",w,_),A=null),O===i.value&&(document.removeEventListener("keyup",w,!0),i.value!==null&&i.value.removeEventListener("blur",w,_),O=null),i.value!==null&&i.value.classList.remove("q-btn--active")}function j(l){P(l),l.qSkipRipple=!0}return he(()=>{M(!0)}),Object.assign(n,{click:E}),()=>{let l=[];e.icon!==void 0&&l.push(v(Y,{name:e.icon,left:e.stack===!1&&x.value===!0,role:"img","aria-hidden":"true"})),x.value===!0&&l.push(v("span",{class:"block"},[e.label])),l=z(t.default,l),e.iconRight!==void 0&&e.round===!1&&l.push(v(Y,{name:e.iconRight,right:e.stack===!1&&x.value===!0,role:"img","aria-hidden":"true"}));const g=[v("span",{class:"q-focus-helper",ref:k})];return e.loading===!0&&e.percentage!==void 0&&g.push(v("span",{class:"q-btn__progress absolute-full overflow-hidden"+(e.darkPercentage===!0?" q-btn__progress--dark":"")},[v("span",{class:"q-btn__progress-indicator fit block",style:C.value})])),g.push(v("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+c.value},l)),e.loading!==null&&g.push(v(ye,{name:"q-transition--fade"},()=>e.loading===!0?[v("span",{key:"loading",class:"absolute-full flex flex-center"},t.loading!==void 0?t.loading():[v(Me)])]:null)),be(v(b.value,$.value,g),[[Ne,L.value,void 0,R.value]])}}});const at=le({name:"ErrorNotFound"}),rt={class:"fullscreen bg-blue text-white text-center q-pa-md flex flex-center"},lt=Q("div",{style:{"font-size":"30vh"}}," 404 ",-1),it=Q("div",{class:"text-h2",style:{opacity:".4"}}," Oops. Nothing here... ",-1);function ut(e,t,a,n,u,f){return qe(),$e("div",rt,[Q("div",null,[lt,it,_e(nt,{class:"q-mt-xl",color:"white","text-color":"blue",unelevated:"",to:"/",label:"Go Home","no-caps":""})])])}var st=xe(at,[["render",ut]]);export{st as default};
