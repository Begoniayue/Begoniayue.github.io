import{u as N}from"./index-BA9CNwg-.js";import{_ as O}from"./_plugin-vue_export-helper-x3n3nnut.js";import{r as o,a as g,o as i,g as l,f as n,t as h,d as e,b as t,w as a,h as d,m as L,C as x,k as C,p as D,e as E}from"./index-mNOZYs86.js";const c=p=>(D("data-v-1b9e0e40"),p=p(),E(),p),H={class:"user-content"},J={class:"header"},M={class:"user-body"},P={class:"api-tag"},U={class:"code-block"},z=c(()=>n("div",{class:"request-params"},"请求参数:",-1)),A=c(()=>n("div",{class:"response-params"},"返回数据:",-1)),G=c(()=>n("div",{class:"request-params"},"请求参数示例",-1)),K={class:"code-light"},Q=c(()=>n("div",{class:"response-params"},"成功返回示例",-1)),R={class:"code-light"},Y=c(()=>n("div",{class:"response-params"},"错误返回示例",-1)),Z={class:"code-light"},ee={__name:"ShareVideo",setup(p){const{toClipboard:q}=N(),T=o("发送分享视频消息"),W=o("/Msg/ShareVideo"),w=o("POST"),F=[{title:"参数名",dataIndex:"name",key:"name"},{title:"必选",dataIndex:"flag",key:"flag"},{title:"类型",dataIndex:"type",key:"type"},{title:"说明",dataIndex:"interpretation",key:"interpretation"}],X=[{title:"参数名",dataIndex:"name",key:"name"},{title:"类型",dataIndex:"type",key:"type"},{title:"说明",dataIndex:"interpretation",key:"interpretation"}],j=o([{name:"Xml",flag:"否",type:"string",interpretation:"xml请自行构造 "},{name:"ToWxid",flag:"否",type:"string",interpretation:""},{name:"Wxid",flag:"否",type:"string",interpretation:"Wxid == 微信id 多个wxid请用,隔开"}]),B=o([{name:"code",type:"string",interpretation:"200成功"},{name:"description",type:"string",interpretation:"返回数据"},{name:"message",type:"string",interpretation:"反馈信息"}]),b=o(`{
    "Xml": "string",
    "ToWxid": "string",
    "Wxid": "string"
}`),I=o(`{
 "code": "number",
 "description": "string",
}`),S=o(`{
    "message": "失败",
    "code": "1001",
    "data": null
}`),u=o(!0),_=o(!0),m=o(!0),v=(V,s)=>{s==="code"&&(u.value=!u.value),s==="data"&&(_.value=!_.value),s==="err"&&(m.value=!m.value),q(V),L.success("复制成功")};return(V,s)=>{const y=g("a-tag"),f=g("a-tooltip"),$=g("a-table"),k=g("highlightjs");return i(),l("div",H,[n("div",J,h(e(T)),1),n("div",M,[n("div",P,[t(f,null,{title:a(()=>[d("请求方法")]),default:a(()=>[n("span",null,[t(y,{color:"#108ee9"},{default:a(()=>[d(h(e(w)),1)]),_:1})])]),_:1}),t(f,null,{title:a(()=>[d("接口状态")]),default:a(()=>[n("span",null,[t(y,{color:"#e6a23c"},{default:a(()=>[d("有效")]),_:1})])]),_:1}),d(),t(f,null,{title:a(()=>[d("Headers")]),default:a(()=>[n("span",null,[t(y,{color:"#e6a23c"},{default:a(()=>[d("Content-Type：application/json")]),_:1})])]),_:1})]),n("div",U,[n("code",null,h(e(W)),1)]),z,t($,{columns:F,"data-source":e(j),bordered:"",pagination:!1},null,8,["data-source"]),A,t($,{columns:X,"data-source":e(B),bordered:"",pagination:!1},null,8,["data-source"]),G,n("div",K,[e(u)?(i(),l("div",{key:0,class:"copy-icon",onClick:s[0]||(s[0]=r=>v(e(b),"code"))},[t(e(x))])):(i(),l("div",{key:1,class:"copy-icon",onClick:s[1]||(s[1]=r=>u.value=!0)},[t(e(C))])),t(k,{language:"JavaScript",code:e(b)},null,8,["code"])]),Q,n("div",R,[e(_)?(i(),l("div",{key:0,class:"copy-icon",onClick:s[2]||(s[2]=r=>v(e(I),"data"))},[t(e(x))])):(i(),l("div",{key:1,class:"copy-icon",onClick:s[3]||(s[3]=r=>_.value=!0)},[t(e(C))])),t(k,{language:"Xml",code:e(I)},null,8,["code"])]),Y,n("div",Z,[e(m)?(i(),l("div",{key:0,class:"copy-icon",onClick:s[4]||(s[4]=r=>v(e(S),"err"))},[t(e(x))])):(i(),l("div",{key:1,class:"copy-icon",onClick:s[5]||(s[5]=r=>m.value=!0)},[t(e(C))])),t(k,{language:"Xml",code:e(S)},null,8,["code"])])])])}}},oe=O(ee,[["__scopeId","data-v-1b9e0e40"]]);export{oe as default};