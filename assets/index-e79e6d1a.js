import S from"./index-782834fa.js";import{g as k,aD as x,ax as D,ay as H,_ as L,o as R,a as U,F as W,d as i,w as c,B as n,u as o,a8 as b,az as A,aE as F,aF as V,H as q,J as z}from"./vendor-2fa3486a.js";import{S as E}from"./index-a30c3fe3.js";import"./pub-aa9a05f9.js";function N(){const{proxy:l}=k(),{$pub:_}=l,{slRandomString:p}=_,f=p(),h=p();let t=null,s=null;function g(e){_.slBasePolling(()=>r()).then(()=>{const a=r();t=new x.fabric.Canvas(h,{width:a.offsetWidth,height:a.offsetHeight,isDrawingMode:!0}),t.freeDrawingBrush.color="black",t.freeDrawingBrush.width=2})}function r(){return document.getElementById(f)}function I(){t.clear(),t.backgroundColor="red";const e=r();t.setWidth(+e.offsetWidth),t.setHeight(+e.offsetHeight),t.renderAll(),s=null}function w(){const e=new D,a=e.folder("images");a.file("a.jpg",t.toDataURL({format:"jpg",quality:1}).split(",")[1],{base64:!0}),a.file("a.png",t.toDataURL({format:"png",quality:1}).split(",")[1],{base64:!0}),a.file("a.webp",t.toDataURL({format:"webp",quality:1}).split(",")[1],{base64:!0}),e.generateAsync({type:"blob"}).then(function(B){H(B,"images.zip")})}function m(e){t.setWidth(+e),u()}function v(e){t.setHeight(+e),u()}function d(e){t.setBackgroundColor(e,t.renderAll.bind(t))}function C(e){x.fabric.Image.fromURL(e,a=>{s=a,a.set({selectable:!0}),t.add(a),u()})}function u(){s&&s.set({left:t.width/2-s.width/2,top:t.height/2-s.height/2}),t.renderAll()}return{fabricCanvasContentId:f,fabricCanvasId:h,fabricInit:g,clearCanvas:I,saveCanvas:w,setCanvasWidth:m,setCanvasHeight:v,setCanvasBackgroundColor:d,setLogoImg:C}}const y=l=>(q("data-v-e5665f1e"),l=l(),z(),l),T={class:"sl-layout-content"},j=y(()=>n("div",null,"自定义占位图",-1)),J={class:"option-btn"},M={class:"main-content"},P={class:"c-draw"},$=y(()=>n("div",null,null,-1)),O=["id"],Z=["id"],G={class:"option-bar"},K={class:"flex"},Q=y(()=>n("div",null,null,-1)),X={__name:"index",setup(l){const{fabricCanvasContentId:_,fabricCanvasId:p,fabricInit:f,clearCanvas:h,saveCanvas:t,setCanvasWidth:s,setCanvasHeight:g,setCanvasBackgroundColor:r,setLogoImg:I}=N();k();function w(m){I(m.img.src)}return R(()=>{f()}),(m,v)=>{const d=A,C=F,u=V,e=S;return U(),W("div",T,[i(e,null,{title:c(()=>[j]),extra:c(()=>[n("div",J,[i(d,{type:"primary",onClick:o(t)},{default:c(()=>[b("导出图片")]),_:1},8,["onClick"]),i(d,{type:"primary",status:"danger",onClick:o(h)},{default:c(()=>[b("清空")]),_:1},8,["onClick"])])]),default:c(()=>[n("div",M,[n("div",P,[$,n("div",{class:"draw-canvas",id:o(_)},[n("canvas",{id:o(p)},null,8,Z)],8,O)]),n("div",G,[n("div",null,[i(C,{placeholder:"宽度","button-text":"确定","search-button":"",onInput:o(s),onSearch:o(s)},null,8,["onInput","onSearch"])]),n("div",null,[i(C,{placeholder:"高度","button-text":"确定","search-button":"",onInput:o(g),onSearch:o(g)},null,8,["onInput","onSearch"])]),n("div",K,[i(u,{defaultValue:"#165DFF",showText:"",onChange:o(r)},null,8,["onChange"]),i(d,{type:"primary",onClick:v[0]||(v[0]=a=>o(r)("transparent"))},{default:c(()=>[b("背景透明")]),_:1})]),Q,n("div",null,[i(E,{multiple:!1,onOnToImage:w},{default:c(()=>[i(d,{type:"primary",status:"success"},{default:c(()=>[b("上传图片")]),_:1})]),_:1})])])])]),_:1})])}}},at=L(X,[["__scopeId","data-v-e5665f1e"]]);export{at as default};