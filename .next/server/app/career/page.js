(()=>{var e={};e.id=324,e.ids=[324],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},6088:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>n.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>d,routeModule:()=>m,tree:()=>l});var i=s(482),r=s(9108),a=s(2563),n=s.n(a),o=s(8300),c={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(c[e]=()=>o[e]);s.d(t,c);let l=["",{children:["career",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,6962)),"C:\\Sakib Projects\\nextJs\\misi_web\\misi_web\\src\\app\\career\\page.js"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,2874)),"C:\\Sakib Projects\\nextJs\\misi_web\\misi_web\\src\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,9361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["C:\\Sakib Projects\\nextJs\\misi_web\\misi_web\\src\\app\\career\\page.js"],u="/career/page",p={require:s,loadChunk:()=>Promise.resolve()},m=new i.AppPageRouteModule({definition:{kind:r.x.APP_PAGE,page:"/career/page",pathname:"/career",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},8324:(e,t,s)=>{Promise.resolve().then(s.bind(s,6647))},978:(e,t)=>{"use strict";function s(){return null}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6647:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>d});var i=s(5344),r=s(3729),a=s(978),n=s.n(a);s(2540),s(701),s(3824),s(9264),s(5077),s(6837);var o=s(6506),c=s(2242);s(9410);var l=s(1500);let d=()=>{let[e,t]=(0,r.useState)([{id:1,title:"Vacancy: Front office employee",description:"",image:"https://picsum.photos/200?random=1"},{id:2,title:"Vacancy: Psychologist / Neuropsychologist",description:"",image:"https://picsum.photos/200?random=2"},{id:3,title:"Vacancy: GZ PSYCHOLOGIST / Psychotherapist",description:"",image:"https://picsum.photos/200?random=3"},{id:4,title:"Vacancy: Psychologist Arabic",description:"",image:"https://picsum.photos/200?random=4"}]);return(0,i.jsxs)("div",{children:[(0,i.jsxs)(n(),{children:[i.jsx("title",{children:"Career"}),i.jsx("meta",{name:"description",content:"Sensehair is a saloon shop website with an appointment/booking system."}),i.jsx("meta",{name:"viewport",content:"width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, shrink-to-fit=no"}),i.jsx("link",{rel:"icon",href:"/favicon.ico"})]}),i.jsx(c.default,{title:"Career",image:"carHeader"}),i.jsx(l.default,{}),(0,i.jsxs)("div",{className:"container py-5",children:[i.jsx("h1",{className:"text-center fw-bold",children:"Vacancies"}),i.jsx("hr",{}),e.map(e=>(0,i.jsxs)("div",{className:"rounded-5 p-4 row shadow mb-4","data-aos":"zoom-in","data-aos-duration":"750","data-aos-delay":"200",children:[i.jsx("div",{className:"col-4 col-lg-3",children:i.jsx("div",{className:"rounded-4",style:{width:"100%",height:"200px",overflow:"hidden"},children:i.jsx("img",{src:e.image,style:{width:"100%",height:"auto",objectFit:"cover"}})})}),(0,i.jsxs)("div",{className:"col-7",children:[i.jsx(o.default,{href:`/jobs/${e.id}`,children:i.jsx("h2",{className:"cursor-pointer text-dark",children:e.title})}),i.jsx("div",{children:e.description}),(0,i.jsxs)("div",{children:[i.jsx(o.default,{href:"/apply",children:i.jsx("button",{className:"btn m-1 btn-sm btn-dark",children:"Apply Now"})}),i.jsx(o.default,{href:`/jobs/${e.id}`,children:i.jsx("button",{className:"btn btn-sm btn-dark",children:"Read more"})})]})]})]},e.id))]})]})}},2242:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>o});var i=s(5344),r=s(3729),a=s(717);s(2540),s(701),s(8593),s(3824),s(9264),s(5077),s(6837),s(9973);var n=s(5816);let o=({title:e,image:t})=>((0,r.useEffect)(()=>{a.Z.init()},[]),(0,i.jsxs)("header",{id:"header",className:"vh-80",children:[i.jsx(n.Z,{isSlider:!0}),i.jsx("div",{id:`${t||"aboutHeader"}`,className:"d-flex vh-80",children:i.jsx("div",{className:"m-auto text-white text-center",children:i.jsx("h1",{className:"font-weight-600 h1 aos-init aos-animate","data-aos":"fade-up","data-aos-delay":"700","data-aos-duration":"750",children:e||"About Us"})})})]}))},1500:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>o});var i=s(5344),r=s(3729),a=s(9921);let n=(e,t)=>-(e.getBoundingClientRect().top-(innerHeight-window.innerHeight/(100/(100-t)))),o=()=>((0,r.useEffect)(()=>{(e=>{var t=document.querySelector(e),s=document.querySelector("html");document.addEventListener("scroll",e=>{t&&(n(s,0)>350?(t.style.transition="opacity 750ms ease-in-out",t.style.opacity="1"):t.style.opacity="0")})})("#scroll-to-top")},[]),i.jsx("section",{id:"scroll-to-top",children:i.jsx("button",{className:"btn btn-dark",onClick:()=>{document.body.scrollTop=0,document.documentElement.scrollTop=0},children:i.jsx(a.ZTc,{})})}))},6962:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$typeof:()=>a,__esModule:()=>r,default:()=>n});let i=(0,s(6843).createProxy)(String.raw`C:\Sakib Projects\nextJs\misi_web\misi_web\src\app\career\page.js`),{__esModule:r,$$typeof:a}=i,n=i.default}};var t=require("../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),i=t.X(0,[638,422,337,208,357,462],()=>s(6088));module.exports=i})();