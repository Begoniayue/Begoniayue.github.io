import{u as L}from"./index-CSU6RxZ9.js";import{_ as W}from"./_plugin-vue_export-helper-x3n3nnut.js";import{r as a,a as v,b as i,f as l,d as n,t as h,e,h as t,w as o,m as c,x as X,C,y as x,p as D,j as E}from"./index-ZKZBXv4v.js";const r=p=>(D("data-v-75cda659"),p=p(),E(),p),H={class:"user-content"},J={class:"header"},K={class:"user-body"},P={class:"api-tag"},U={class:"code-block"},z=r(()=>n("div",{class:"request-params"},"请求参数:",-1)),A=r(()=>n("div",{class:"response-params"},"返回数据:",-1)),G=r(()=>n("div",{class:"request-params"},"请求参数示例",-1)),M={class:"code-light"},Q=r(()=>n("div",{class:"response-params"},"成功返回示例",-1)),R={class:"code-light"},Y=r(()=>n("div",{class:"response-params"},"错误返回示例",-1)),Z={class:"code-light"},ee={__name:"Sync",setup(p){const{toClipboard:F}=L(),j=a("同步收藏"),w=a("/Favor/Sync"),B=a("POST"),N=[{title:"参数名",dataIndex:"name",key:"name"},{title:"必选",dataIndex:"flag",key:"flag"},{title:"类型",dataIndex:"type",key:"type"},{title:"说明",dataIndex:"interpretation",key:"interpretation"}],O=[{title:"参数名",dataIndex:"name",key:"name"},{title:"类型",dataIndex:"type",key:"type"},{title:"说明",dataIndex:"interpretation",key:"interpretation"}],T=a([{name:"Keybuf",flag:"否",type:"string",interpretation:"keybuf:第二次请求需要带上第一次返回的"},{name:"Wxid",flag:"否",type:"string",interpretation:""}]),V=a([{name:"code",type:"string",interpretation:"200成功"},{name:"description",type:"string",interpretation:"返回数据"},{name:"message",type:"string",interpretation:"反馈信息"}]),b=a(`{
    "keybuf": "string",
    "Wxid": "string"
}`),I=a(`{
 "code": "number",
 "description": "string",
}`),S=a(`{
    "message": "失败",
    "code": "1001",
    "data": null
}`),u=a(!0),_=a(!0),m=a(!0),y=($,s)=>{s==="code"&&(u.value=!u.value),s==="data"&&(_.value=!_.value),s==="err"&&(m.value=!m.value),F($),X.success("复制成功")};return($,s)=>{const g=v("a-tag"),f=v("a-tooltip"),q=v("a-table"),k=v("highlightjs");return i(),l("div",H,[n("div",J,h(e(j)),1),n("div",K,[n("div",P,[t(f,null,{title:o(()=>[c("请求方法")]),default:o(()=>[n("span",null,[t(g,{color:"#108ee9"},{default:o(()=>[c(h(e(B)),1)]),_:1})])]),_:1}),t(f,null,{title:o(()=>[c("接口状态")]),default:o(()=>[n("span",null,[t(g,{color:"#e6a23c"},{default:o(()=>[c("有效")]),_:1})])]),_:1}),c(),t(f,null,{title:o(()=>[c("Headers")]),default:o(()=>[n("span",null,[t(g,{color:"#e6a23c"},{default:o(()=>[c("Content-Type：application/json")]),_:1})])]),_:1})]),n("div",U,[n("code",null,h(e(w)),1)]),z,t(q,{columns:N,"data-source":e(T),bordered:"",pagination:!1},null,8,["data-source"]),A,t(q,{columns:O,"data-source":e(V),bordered:"",pagination:!1},null,8,["data-source"]),G,n("div",M,[e(u)?(i(),l("div",{key:0,class:"copy-icon",onClick:s[0]||(s[0]=d=>y(e(b),"code"))},[t(e(C))])):(i(),l("div",{key:1,class:"copy-icon",onClick:s[1]||(s[1]=d=>u.value=!0)},[t(e(x))])),t(k,{language:"JavaScript",code:e(b)},null,8,["code"])]),Q,n("div",R,[e(_)?(i(),l("div",{key:0,class:"copy-icon",onClick:s[2]||(s[2]=d=>y(e(I),"data"))},[t(e(C))])):(i(),l("div",{key:1,class:"copy-icon",onClick:s[3]||(s[3]=d=>_.value=!0)},[t(e(x))])),t(k,{language:"Xml",code:e(I)},null,8,["code"])]),Y,n("div",Z,[e(m)?(i(),l("div",{key:0,class:"copy-icon",onClick:s[4]||(s[4]=d=>y(e(S),"err"))},[t(e(C))])):(i(),l("div",{key:1,class:"copy-icon",onClick:s[5]||(s[5]=d=>m.value=!0)},[t(e(x))])),t(k,{language:"Xml",code:e(S)},null,8,["code"])])])])}}},ae=W(ee,[["__scopeId","data-v-75cda659"]]);export{ae as default};
