import{u as V}from"./index-BA9CNwg-.js";import{_ as L}from"./_plugin-vue_export-helper-x3n3nnut.js";import{r as o,a as g,o as i,g as l,f as a,t as h,d as e,b as t,w as s,h as c,m as W,C as S,k as C,p as X,e as D}from"./index-mNOZYs86.js";const d=p=>(X("data-v-2b057017"),p=p(),D(),p),E={class:"user-content"},H={class:"header"},J={class:"user-body"},P={class:"api-tag"},z={class:"code-block"},A=d(()=>a("div",{class:"request-params"},"请求参数:",-1)),G=d(()=>a("div",{class:"response-params"},"返回数据:",-1)),K=d(()=>a("div",{class:"request-params"},"请求参数示例",-1)),M={class:"code-light"},Q=d(()=>a("div",{class:"response-params"},"成功返回示例",-1)),R={class:"code-light"},Y=d(()=>a("div",{class:"response-params"},"错误返回示例",-1)),Z={class:"code-light"},ee={__name:"Search",setup(p){const{toClipboard:q}=V(),N=o("搜索联系人"),T=o("/Friend/Search"),j=o("POST"),w=[{title:"参数名",dataIndex:"name",key:"name"},{title:"必选",dataIndex:"flag",key:"flag"},{title:"类型",dataIndex:"type",key:"type"},{title:"说明",dataIndex:"interpretation",key:"interpretation"}],B=[{title:"参数名",dataIndex:"name",key:"name"},{title:"类型",dataIndex:"type",key:"type"},{title:"说明",dataIndex:"interpretation",key:"interpretation"}],O=o([{name:"FromScene",flag:"否",type:"integer",interpretation:""},{name:"SearchScene",flag:"否",type:"integer",interpretation:"爆粉情况下特殊通道请自行填写,默认时FromScene=0,SearchScene=1"},{name:"ToUserName",flag:"否",type:"string",interpretation:""},{name:"Wxid",flag:"否",type:"string",interpretation:""}]),U=o([{name:"code",type:"string",interpretation:"200成功"},{name:"description",type:"string",interpretation:"返回数据"},{name:"message",type:"string",interpretation:"反馈信息"}]),x=o(`{
    "FromScene": "0",
    "SearchScene": "0"
    "ToUserName": "string"
    "Wxid": "string"
}`),b=o(`{
 "code": "number",
 "description": "string",
}`),I=o(`{
    "message": "失败",
    "code": "1001",
    "data": null
}`),u=o(!0),m=o(!0),_=o(!0),v=(F,n)=>{n==="code"&&(u.value=!u.value),n==="data"&&(m.value=!m.value),n==="err"&&(_.value=!_.value),q(F),W.success("复制成功")};return(F,n)=>{const y=g("a-tag"),f=g("a-tooltip"),$=g("a-table"),k=g("highlightjs");return i(),l("div",E,[a("div",H,h(e(N)),1),a("div",J,[a("div",P,[t(f,null,{title:s(()=>[c("请求方法")]),default:s(()=>[a("span",null,[t(y,{color:"#108ee9"},{default:s(()=>[c(h(e(j)),1)]),_:1})])]),_:1}),t(f,null,{title:s(()=>[c("接口状态")]),default:s(()=>[a("span",null,[t(y,{color:"#e6a23c"},{default:s(()=>[c("有效")]),_:1})])]),_:1}),c(),t(f,null,{title:s(()=>[c("Headers")]),default:s(()=>[a("span",null,[t(y,{color:"#e6a23c"},{default:s(()=>[c("Content-Type：application/json")]),_:1})])]),_:1})]),a("div",z,[a("code",null,h(e(T)),1)]),A,t($,{columns:w,"data-source":e(O),bordered:"",pagination:!1},null,8,["data-source"]),G,t($,{columns:B,"data-source":e(U),bordered:"",pagination:!1},null,8,["data-source"]),K,a("div",M,[e(u)?(i(),l("div",{key:0,class:"copy-icon",onClick:n[0]||(n[0]=r=>v(e(x),"code"))},[t(e(S))])):(i(),l("div",{key:1,class:"copy-icon",onClick:n[1]||(n[1]=r=>u.value=!0)},[t(e(C))])),t(k,{language:"JavaScript",code:e(x)},null,8,["code"])]),Q,a("div",R,[e(m)?(i(),l("div",{key:0,class:"copy-icon",onClick:n[2]||(n[2]=r=>v(e(b),"data"))},[t(e(S))])):(i(),l("div",{key:1,class:"copy-icon",onClick:n[3]||(n[3]=r=>m.value=!0)},[t(e(C))])),t(k,{language:"Xml",code:e(b)},null,8,["code"])]),Y,a("div",Z,[e(_)?(i(),l("div",{key:0,class:"copy-icon",onClick:n[4]||(n[4]=r=>v(e(I),"err"))},[t(e(S))])):(i(),l("div",{key:1,class:"copy-icon",onClick:n[5]||(n[5]=r=>_.value=!0)},[t(e(C))])),t(k,{language:"Xml",code:e(I)},null,8,["code"])])])])}}},oe=L(ee,[["__scopeId","data-v-2b057017"]]);export{oe as default};
