import{u as D}from"./index-BA9CNwg-.js";import{_ as N}from"./_plugin-vue_export-helper-x3n3nnut.js";import{r as s,a as _,o as i,g as l,f as a,t as h,d as e,b as t,w as o,m as O,h as r,C as x,k as C,p as U,e as X}from"./index-mNOZYs86.js";const d=p=>(U("data-v-73a758ac"),p=p(),X(),p),E={class:"user-content"},H={class:"header"},J={class:"user-body"},M={class:"api-tag"},P={class:"code-block"},z=d(()=>a("div",{class:"request-params"},"请求参数:",-1)),A=d(()=>a("div",{class:"response-params"},"返回数据:",-1)),G=d(()=>a("div",{class:"request-params"},"请求参数示例",-1)),K={class:"code-light"},Q=d(()=>a("div",{class:"response-params"},"成功返回示例",-1)),R={class:"code-light"},Y=d(()=>a("div",{class:"response-params"},"错误返回示例",-1)),Z={class:"code-light"},ee={__name:"ShareLink",setup(p){const{toClipboard:q}=D(),L=s("发送分享链接消息"),w=s("/Msg/ShareLink"),B=s("POST"),F=[{title:"参数名",dataIndex:"name",key:"name"},{title:"必选",dataIndex:"flag",key:"flag"},{title:"类型",dataIndex:"type",key:"type"},{title:"说明",dataIndex:"interpretation",key:"interpretation"}],V=[{title:"参数名",dataIndex:"name",key:"name"},{title:"类型",dataIndex:"type",key:"type"},{title:"说明",dataIndex:"interpretation",key:"interpretation"}],W=s([{name:"Desc",flag:"否",type:"string",interpretation:"描述"},{name:"ThumbUrl",flag:"否",type:"string",interpretation:"名片昵称"},{name:"Title",flag:"否",type:"string",interpretation:"标题"},{name:"Url",flag:"否",type:"string",interpretation:"名片wxid"},{name:"ToWxid",flag:"否",type:"string",interpretation:"接收的微信ID"},{name:"Wxid",flag:"否",type:"string",interpretation:""}]),j=s([{name:"code",type:"string",interpretation:"200成功"},{name:"description",type:"string",interpretation:"返回数据"},{name:"message",type:"string",interpretation:"反馈信息"}]),I=s(`{
    "Base64": "string",
    "ToWxid": "string",
    "Type": 0,
    "VoiceTime": 0,
    "Wxid": "string"
}`),b=s(`{
 "code": "number",
 "description": "string",
}`),S=s(`{
    "message": "失败",
    "code": "1001",
    "data": null
}`),u=s(!0),g=s(!0),m=s(!0),v=(T,n)=>{n==="code"&&(u.value=!u.value),n==="data"&&(g.value=!g.value),n==="err"&&(m.value=!m.value),q(T),O.success("复制成功")};return(T,n)=>{const y=_("a-tag"),f=_("a-tooltip"),$=_("a-table"),k=_("highlightjs");return i(),l("div",E,[a("div",H,h(e(L)),1),a("div",J,[a("div",M,[t(f,null,{title:o(()=>[r("请求方法")]),default:o(()=>[a("span",null,[t(y,{color:"#108ee9"},{default:o(()=>[r(h(e(B)),1)]),_:1})])]),_:1}),t(f,null,{title:o(()=>[r("接口状态")]),default:o(()=>[a("span",null,[t(y,{color:"#e6a23c"},{default:o(()=>[r("有效")]),_:1})])]),_:1}),t(f,null,{title:o(()=>[r("Headers")]),default:o(()=>[a("span",null,[t(y,{color:"#e6a23c"},{default:o(()=>[r("Content-Type：application/json")]),_:1})])]),_:1})]),a("div",P,[a("code",null,h(e(w)),1)]),z,t($,{columns:F,"data-source":e(W),bordered:"",pagination:!1},null,8,["data-source"]),A,t($,{columns:V,"data-source":e(j),bordered:"",pagination:!1},null,8,["data-source"]),G,a("div",K,[e(u)?(i(),l("div",{key:0,class:"copy-icon",onClick:n[0]||(n[0]=c=>v(e(I),"code"))},[t(e(x))])):(i(),l("div",{key:1,class:"copy-icon",onClick:n[1]||(n[1]=c=>u.value=!0)},[t(e(C))])),t(k,{language:"JavaScript",code:e(I)},null,8,["code"])]),Q,a("div",R,[e(g)?(i(),l("div",{key:0,class:"copy-icon",onClick:n[2]||(n[2]=c=>v(e(b),"data"))},[t(e(x))])):(i(),l("div",{key:1,class:"copy-icon",onClick:n[3]||(n[3]=c=>g.value=!0)},[t(e(C))])),t(k,{language:"Xml",code:e(b)},null,8,["code"])]),Y,a("div",Z,[e(m)?(i(),l("div",{key:0,class:"copy-icon",onClick:n[4]||(n[4]=c=>v(e(S),"err"))},[t(e(x))])):(i(),l("div",{key:1,class:"copy-icon",onClick:n[5]||(n[5]=c=>m.value=!0)},[t(e(C))])),t(k,{language:"Xml",code:e(S)},null,8,["code"])])])])}}},se=N(ee,[["__scopeId","data-v-73a758ac"]]);export{se as default};
