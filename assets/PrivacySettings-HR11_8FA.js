import{u as T}from"./index-IKI8YSjj.js";import{_ as L}from"./_plugin-vue_export-helper-x3n3nnut.js";import{r as s,a as v,o as i,g as l,f as a,t as C,d as e,b as t,w as o,k as c,m as W,C as h,l as x,p as X,e as D}from"./index-UZnJtGCp.js";const d=p=>(X("data-v-a0942980"),p=p(),D(),p),E={class:"user-content"},H={class:"header"},J={class:"user-body"},U={class:"api-tag"},z={class:"code-block"},A=d(()=>a("div",{class:"request-params"},"请求参数:",-1)),G=d(()=>a("div",{class:"response-params"},"返回数据:",-1)),K=d(()=>a("div",{class:"request-params"},"请求参数示例",-1)),M={class:"code-light"},Q=d(()=>a("div",{class:"response-params"},"成功返回示例",-1)),R={class:"code-light"},Y=d(()=>a("div",{class:"response-params"},"错误返回示例",-1)),Z={class:"code-light"},ee={__name:"PrivacySettings",setup(p){const{toClipboard:q}=T(),V=s("朋友圈权限设置"),P=s("/FriendCircle/PrivacySettings"),j=s("POST"),w=[{title:"参数名",dataIndex:"name",key:"name"},{title:"必选",dataIndex:"flag",key:"flag"},{title:"类型",dataIndex:"type",key:"type"},{title:"说明",dataIndex:"interpretation",key:"interpretation"}],B=[{title:"参数名",dataIndex:"name",key:"name"},{title:"类型",dataIndex:"type",key:"type"},{title:"说明",dataIndex:"interpretation",key:"interpretation"}],N=s([{name:"Function",flag:"否",type:"integer",interpretation:"核心参数请联系客服获取代码列表"},{name:"Value",flag:"否",type:"integer",interpretation:""},{name:"Wxid",flag:"否",type:"string",interpretation:""}]),O=s([{name:"code",type:"string",interpretation:"200成功"},{name:"description",type:"string",interpretation:"返回数据"},{name:"message",type:"string",interpretation:"反馈信息"}]),I=s(`{
    "Function": "0 ",
    "Value": "0"
    "Wxid": "string"
}`),b=s(`{
 "code": "number",
 "description": "string",
}`),S=s(`{
    "message": "失败",
    "code": "1001",
    "data": null
}`),u=s(!0),_=s(!0),g=s(!0),m=(F,n)=>{n==="code"&&(u.value=!u.value),n==="data"&&(_.value=!_.value),n==="err"&&(g.value=!g.value),q(F),W.success("复制成功")};return(F,n)=>{const y=v("a-tag"),f=v("a-tooltip"),$=v("a-table"),k=v("highlightjs");return i(),l("div",E,[a("div",H,C(e(V)),1),a("div",J,[a("div",U,[t(f,null,{title:o(()=>[c("请求方法")]),default:o(()=>[a("span",null,[t(y,{color:"#108ee9"},{default:o(()=>[c(C(e(j)),1)]),_:1})])]),_:1}),t(f,null,{title:o(()=>[c("接口状态")]),default:o(()=>[a("span",null,[t(y,{color:"#e6a23c"},{default:o(()=>[c("有效")]),_:1})])]),_:1}),c(),t(f,null,{title:o(()=>[c("Headers")]),default:o(()=>[a("span",null,[t(y,{color:"#e6a23c"},{default:o(()=>[c("Content-Type：application/json")]),_:1})])]),_:1})]),a("div",z,[a("code",null,C(e(P)),1)]),A,t($,{columns:w,"data-source":e(N),bordered:"",pagination:!1},null,8,["data-source"]),G,t($,{columns:B,"data-source":e(O),bordered:"",pagination:!1},null,8,["data-source"]),K,a("div",M,[e(u)?(i(),l("div",{key:0,class:"copy-icon",onClick:n[0]||(n[0]=r=>m(e(I),"code"))},[t(e(h))])):(i(),l("div",{key:1,class:"copy-icon",onClick:n[1]||(n[1]=r=>u.value=!0)},[t(e(x))])),t(k,{language:"JavaScript",code:e(I)},null,8,["code"])]),Q,a("div",R,[e(_)?(i(),l("div",{key:0,class:"copy-icon",onClick:n[2]||(n[2]=r=>m(e(b),"data"))},[t(e(h))])):(i(),l("div",{key:1,class:"copy-icon",onClick:n[3]||(n[3]=r=>_.value=!0)},[t(e(x))])),t(k,{language:"Xml",code:e(b)},null,8,["code"])]),Y,a("div",Z,[e(g)?(i(),l("div",{key:0,class:"copy-icon",onClick:n[4]||(n[4]=r=>m(e(S),"err"))},[t(e(h))])):(i(),l("div",{key:1,class:"copy-icon",onClick:n[5]||(n[5]=r=>g.value=!0)},[t(e(x))])),t(k,{language:"Xml",code:e(S)},null,8,["code"])])])])}}},se=L(ee,[["__scopeId","data-v-a0942980"]]);export{se as default};
