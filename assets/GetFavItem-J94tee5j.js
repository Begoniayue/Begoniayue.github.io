import{u as V}from"./index-BA9CNwg-.js";import{_ as L}from"./_plugin-vue_export-helper-x3n3nnut.js";import{r as o,a as m,o as i,g as l,f as s,t as h,d as e,b as t,w as n,h as d,m as W,C as I,k as C,p as X,e as D}from"./index-mNOZYs86.js";const r=p=>(X("data-v-3ee99492"),p=p(),D(),p),E={class:"user-content"},H={class:"header"},J={class:"user-body"},P={class:"api-tag"},U={class:"code-block"},z=r(()=>s("div",{class:"request-params"},"请求参数:",-1)),A=r(()=>s("div",{class:"response-params"},"返回数据:",-1)),K=r(()=>s("div",{class:"request-params"},"请求参数示例",-1)),M={class:"code-light"},Q=r(()=>s("div",{class:"response-params"},"成功返回示例",-1)),R={class:"code-light"},Y=r(()=>s("div",{class:"response-params"},"错误返回示例",-1)),Z={class:"code-light"},ee={__name:"GetFavItem",setup(p){const{toClipboard:q}=V(),j=o("读取收藏内容"),w=o("/Favor/GetFavItem"),B=o("POST"),G=[{title:"参数名",dataIndex:"name",key:"name"},{title:"必选",dataIndex:"flag",key:"flag"},{title:"类型",dataIndex:"type",key:"type"},{title:"说明",dataIndex:"interpretation",key:"interpretation"}],N=[{title:"参数名",dataIndex:"name",key:"name"},{title:"类型",dataIndex:"type",key:"type"},{title:"说明",dataIndex:"interpretation",key:"interpretation"}],O=o([{name:"FavId",flag:"否",type:"integer ",interpretation:"FavId在同步收藏中获取"},{name:"Wxid",flag:"否",type:"string",interpretation:""}]),T=o([{name:"code",type:"string",interpretation:"200成功"},{name:"description",type:"string",interpretation:"返回数据"},{name:"message",type:"string",interpretation:"反馈信息"}]),x=o(`{
    "FavId": "integer",
    "Wxid": "string"
}`),F=o(`{
 "code": "number",
 "description": "string",
}`),b=o(`{
    "message": "失败",
    "code": "1001",
    "data": null
}`),u=o(!0),v=o(!0),_=o(!0),g=(S,a)=>{a==="code"&&(u.value=!u.value),a==="data"&&(v.value=!v.value),a==="err"&&(_.value=!_.value),q(S),W.success("复制成功")};return(S,a)=>{const y=m("a-tag"),f=m("a-tooltip"),$=m("a-table"),k=m("highlightjs");return i(),l("div",E,[s("div",H,h(e(j)),1),s("div",J,[s("div",P,[t(f,null,{title:n(()=>[d("请求方法")]),default:n(()=>[s("span",null,[t(y,{color:"#108ee9"},{default:n(()=>[d(h(e(B)),1)]),_:1})])]),_:1}),t(f,null,{title:n(()=>[d("接口状态")]),default:n(()=>[s("span",null,[t(y,{color:"#e6a23c"},{default:n(()=>[d("有效")]),_:1})])]),_:1}),d(),t(f,null,{title:n(()=>[d("Headers")]),default:n(()=>[s("span",null,[t(y,{color:"#e6a23c"},{default:n(()=>[d("Content-Type：application/json")]),_:1})])]),_:1})]),s("div",U,[s("code",null,h(e(w)),1)]),z,t($,{columns:G,"data-source":e(O),bordered:"",pagination:!1},null,8,["data-source"]),A,t($,{columns:N,"data-source":e(T),bordered:"",pagination:!1},null,8,["data-source"]),K,s("div",M,[e(u)?(i(),l("div",{key:0,class:"copy-icon",onClick:a[0]||(a[0]=c=>g(e(x),"code"))},[t(e(I))])):(i(),l("div",{key:1,class:"copy-icon",onClick:a[1]||(a[1]=c=>u.value=!0)},[t(e(C))])),t(k,{language:"JavaScript",code:e(x)},null,8,["code"])]),Q,s("div",R,[e(v)?(i(),l("div",{key:0,class:"copy-icon",onClick:a[2]||(a[2]=c=>g(e(F),"data"))},[t(e(I))])):(i(),l("div",{key:1,class:"copy-icon",onClick:a[3]||(a[3]=c=>v.value=!0)},[t(e(C))])),t(k,{language:"Xml",code:e(F)},null,8,["code"])]),Y,s("div",Z,[e(_)?(i(),l("div",{key:0,class:"copy-icon",onClick:a[4]||(a[4]=c=>g(e(b),"err"))},[t(e(I))])):(i(),l("div",{key:1,class:"copy-icon",onClick:a[5]||(a[5]=c=>_.value=!0)},[t(e(C))])),t(k,{language:"Xml",code:e(b)},null,8,["code"])])])])}}},oe=L(ee,[["__scopeId","data-v-3ee99492"]]);export{oe as default};