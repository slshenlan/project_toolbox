import{_ as p,g as d,a as r,F as i,d as u,w as _,a5 as m,aG as f}from"./vendor-2fa3486a.js";import{a as g,b as h,c as I}from"./pub-aa9a05f9.js";const y={class:"sl-upload"},b={__name:"index",props:{multiple:{type:Boolean,default:!0},accept:{type:String,default:g.join(",")},maxNumber:{type:Number,default:0}},emits:["onToImage"],setup(o,{emit:s}){const n=o;d();function c(e){return l(e),!1}function l(e){h(e)&&I(e).then(t=>{t.onload=()=>{const a={img:t,fileName:e.name,size:e.size,type:e.type,width:t.width,height:t.height};s("onToImage",a)}})}return(e,t)=>{const a=f;return r(),i("div",y,[u(a,{action:"/",multiple:"",draggable:"",onBeforeUpload:c,accept:n.accept},{"upload-button":_(()=>[m(e.$slots,"default",{},void 0,!0)]),_:3},8,["accept"])])}}},v=p(b,[["__scopeId","data-v-284c38e5"]]);export{v as S};