import{u as N}from"./index-BA9CNwg-.js";import{_ as O}from"./_plugin-vue_export-helper-x3n3nnut.js";import{r as a,a as _,o as i,g as l,f as n,t as x,d as e,b as t,w as o,h as d,m as V,C as h,k as C,p as L,e as D}from"./index-mNOZYs86.js";const c=p=>(L("data-v-734741d3"),p=p(),D(),p),E={class:"user-content"},H={class:"header"},J={class:"user-body"},P={class:"api-tag"},U={class:"code-block"},z=c(()=>n("div",{class:"request-params"},"请求参数:",-1)),A=c(()=>n("div",{class:"response-params"},"返回数据:",-1)),G=c(()=>n("div",{class:"request-params"},"请求参数示例",-1)),K={class:"code-light"},Q=c(()=>n("div",{class:"response-params"},"成功返回示例",-1)),R={class:"code-light"},Y=c(()=>n("div",{class:"response-params"},"错误返回示例",-1)),Z={class:"code-light"},ee={__name:"SendTransmitMsg",setup(p){const{toClipboard:q}=N(),W=a("转发聊天记录"),w=a("/Msg/SendTransmitMsg"),F=a("POST"),M=[{title:"参数名",dataIndex:"name",key:"name"},{title:"必选",dataIndex:"flag",key:"flag"},{title:"类型",dataIndex:"type",key:"type"},{title:"说明",dataIndex:"interpretation",key:"interpretation"}],X=[{title:"参数名",dataIndex:"name",key:"name"},{title:"类型",dataIndex:"type",key:"type"},{title:"说明",dataIndex:"interpretation",key:"interpretation"}],j=a([{name:"Xml",flag:"否",type:"string",interpretation:"xml请自行构造 "},{name:"ToWxid",flag:"否",type:"string",interpretation:""},{name:"Wxid",flag:"否",type:"string",interpretation:"Wxid == 微信id 多个wxid请用,隔开"}]),B=a([{name:"code",type:"string",interpretation:"200成功"},{name:"description",type:"string",interpretation:"返回数据"},{name:"message",type:"string",interpretation:"反馈信息"}]),I=a(`{
    "Xml": "string",
    "ToWxid": "string",
    "Wxid": "string"
}`),b=a(`{
 "code": "number",
 "description": "string",
}`),S=a(`{
    "message": "失败",
    "code": "1001",
    "data": null
}`),u=a(!0),m=a(!0),g=a(!0),v=(T,s)=>{s==="code"&&(u.value=!u.value),s==="data"&&(m.value=!m.value),s==="err"&&(g.value=!g.value),q(T),V.success("复制成功")};return(T,s)=>{const y=_("a-tag"),f=_("a-tooltip"),$=_("a-table"),k=_("highlightjs");return i(),l("div",E,[n("div",H,x(e(W)),1),n("div",J,[n("div",P,[t(f,null,{title:o(()=>[d("请求方法")]),default:o(()=>[n("span",null,[t(y,{color:"#108ee9"},{default:o(()=>[d(x(e(F)),1)]),_:1})])]),_:1}),t(f,null,{title:o(()=>[d("接口状态")]),default:o(()=>[n("span",null,[t(y,{color:"#e6a23c"},{default:o(()=>[d("有效")]),_:1})])]),_:1}),d(),t(f,null,{title:o(()=>[d("Headers")]),default:o(()=>[n("span",null,[t(y,{color:"#e6a23c"},{default:o(()=>[d("Content-Type：application/json")]),_:1})])]),_:1})]),n("div",U,[n("code",null,x(e(w)),1)]),z,t($,{columns:M,"data-source":e(j),bordered:"",pagination:!1},null,8,["data-source"]),A,t($,{columns:X,"data-source":e(B),bordered:"",pagination:!1},null,8,["data-source"]),G,n("div",K,[e(u)?(i(),l("div",{key:0,class:"copy-icon",onClick:s[0]||(s[0]=r=>v(e(I),"code"))},[t(e(h))])):(i(),l("div",{key:1,class:"copy-icon",onClick:s[1]||(s[1]=r=>u.value=!0)},[t(e(C))])),t(k,{language:"JavaScript",code:e(I)},null,8,["code"])]),Q,n("div",R,[e(m)?(i(),l("div",{key:0,class:"copy-icon",onClick:s[2]||(s[2]=r=>v(e(b),"data"))},[t(e(h))])):(i(),l("div",{key:1,class:"copy-icon",onClick:s[3]||(s[3]=r=>m.value=!0)},[t(e(C))])),t(k,{language:"Xml",code:e(b)},null,8,["code"])]),Y,n("div",Z,[e(g)?(i(),l("div",{key:0,class:"copy-icon",onClick:s[4]||(s[4]=r=>v(e(S),"err"))},[t(e(h))])):(i(),l("div",{key:1,class:"copy-icon",onClick:s[5]||(s[5]=r=>g.value=!0)},[t(e(C))])),t(k,{language:"Xml",code:e(S)},null,8,["code"])])])])}}},ae=O(ee,[["__scopeId","data-v-734741d3"]]);export{ae as default};
