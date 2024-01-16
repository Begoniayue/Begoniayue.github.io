import{u as O}from"./index-CSU6RxZ9.js";import{_ as V}from"./_plugin-vue_export-helper-x3n3nnut.js";import{r as o,a as v,b as i,f as l,d as n,t as C,e,h as t,w as a,m as c,x as W,C as h,y as x,p as L,j as X}from"./index-ZKZBXv4v.js";const r=p=>(L("data-v-2b3eb6be"),p=p(),X(),p),E={class:"user-content"},H={class:"header"},J={class:"user-body"},P={class:"api-tag"},U={class:"code-block"},z=r(()=>n("div",{class:"request-params"},"请求参数:",-1)),A=r(()=>n("div",{class:"response-params"},"返回数据:",-1)),K=r(()=>n("div",{class:"request-params"},"请求参数示例",-1)),M={class:"code-light"},Q=r(()=>n("div",{class:"response-params"},"成功返回示例",-1)),R={class:"code-light"},Y=r(()=>n("div",{class:"response-params"},"错误返回示例",-1)),Z={class:"code-light"},ee={__name:"GetContractDetail100",setup(p){const{toClipboard:F}=O(),T=o("获取通讯录好友详情(100上限)"),j=o("/Friend/GetContractDetail100"),w=o("POST"),D=[{title:"参数名",dataIndex:"name",key:"name"},{title:"必选",dataIndex:"flag",key:"flag"},{title:"类型",dataIndex:"type",key:"type"},{title:"说明",dataIndex:"interpretation",key:"interpretation"}],B=[{title:"参数名",dataIndex:"name",key:"name"},{title:"类型",dataIndex:"type",key:"type"},{title:"说明",dataIndex:"interpretation",key:"interpretation"}],G=o([{name:"ToWxid",flag:"否",type:"string",interpretation:"多个微信请用,隔开(最多100个)"},{name:"Wxid",flag:"否",type:"string",interpretation:""}]),N=o([{name:"code",type:"string",interpretation:"200成功"},{name:"description",type:"string",interpretation:"返回数据"},{name:"message",type:"string",interpretation:"反馈信息"}]),b=o(`{
    "Towxids": "string",
    "Wxid": "string"
}`),I=o(`{
 "code": "number",
 "description": "string",
}`),S=o(`{
    "message": "失败",
    "code": "1001",
    "data": null
}`),u=o(!0),_=o(!0),m=o(!0),g=($,s)=>{s==="code"&&(u.value=!u.value),s==="data"&&(_.value=!_.value),s==="err"&&(m.value=!m.value),F($),W.success("复制成功")};return($,s)=>{const y=v("a-tag"),f=v("a-tooltip"),q=v("a-table"),k=v("highlightjs");return i(),l("div",E,[n("div",H,C(e(T)),1),n("div",J,[n("div",P,[t(f,null,{title:a(()=>[c("请求方法")]),default:a(()=>[n("span",null,[t(y,{color:"#108ee9"},{default:a(()=>[c(C(e(w)),1)]),_:1})])]),_:1}),t(f,null,{title:a(()=>[c("接口状态")]),default:a(()=>[n("span",null,[t(y,{color:"#e6a23c"},{default:a(()=>[c("有效")]),_:1})])]),_:1}),c(),t(f,null,{title:a(()=>[c("Headers")]),default:a(()=>[n("span",null,[t(y,{color:"#e6a23c"},{default:a(()=>[c("Content-Type：application/json")]),_:1})])]),_:1})]),n("div",U,[n("code",null,C(e(j)),1)]),z,t(q,{columns:D,"data-source":e(G),bordered:"",pagination:!1},null,8,["data-source"]),A,t(q,{columns:B,"data-source":e(N),bordered:"",pagination:!1},null,8,["data-source"]),K,n("div",M,[e(u)?(i(),l("div",{key:0,class:"copy-icon",onClick:s[0]||(s[0]=d=>g(e(b),"code"))},[t(e(h))])):(i(),l("div",{key:1,class:"copy-icon",onClick:s[1]||(s[1]=d=>u.value=!0)},[t(e(x))])),t(k,{language:"JavaScript",code:e(b)},null,8,["code"])]),Q,n("div",R,[e(_)?(i(),l("div",{key:0,class:"copy-icon",onClick:s[2]||(s[2]=d=>g(e(I),"data"))},[t(e(h))])):(i(),l("div",{key:1,class:"copy-icon",onClick:s[3]||(s[3]=d=>_.value=!0)},[t(e(x))])),t(k,{language:"Xml",code:e(I)},null,8,["code"])]),Y,n("div",Z,[e(m)?(i(),l("div",{key:0,class:"copy-icon",onClick:s[4]||(s[4]=d=>g(e(S),"err"))},[t(e(h))])):(i(),l("div",{key:1,class:"copy-icon",onClick:s[5]||(s[5]=d=>m.value=!0)},[t(e(x))])),t(k,{language:"Xml",code:e(S)},null,8,["code"])])])])}}},oe=V(ee,[["__scopeId","data-v-2b3eb6be"]]);export{oe as default};