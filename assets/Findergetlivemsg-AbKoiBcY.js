import{u as U}from"./index-IKI8YSjj.js";import{_ as V}from"./_plugin-vue_export-helper-x3n3nnut.js";import{r as s,a as _,o as i,g as r,f as a,t as h,d as e,b as t,w as o,k as l,m as L,C,l as I,p as W,e as X}from"./index-UZnJtGCp.js";const c=p=>(W("data-v-f7a63480"),p=p(),X(),p),D={class:"user-content"},E={class:"header"},H={class:"user-body"},J={class:"api-tag"},z={class:"code-block"},A=c(()=>a("div",{class:"request-params"},"请求参数:",-1)),G=c(()=>a("div",{class:"response-params"},"返回数据:",-1)),K=c(()=>a("div",{class:"request-params"},"请求参数示例",-1)),M={class:"code-light"},Q=c(()=>a("div",{class:"response-params"},"成功返回示例",-1)),R={class:"code-light"},Y=c(()=>a("div",{class:"response-params"},"错误返回示例",-1)),Z={class:"code-light"},ee={__name:"Findergetlivemsg",setup(p){const{toClipboard:j}=U(),q=s("直播内容详情"),N=s("/Finder/Findergetlivemsg"),O=s("POST"),P=[{title:"参数名",dataIndex:"name",key:"name"},{title:"必选",dataIndex:"flag",key:"flag"},{title:"类型",dataIndex:"type",key:"type"},{title:"说明",dataIndex:"interpretation",key:"interpretation"}],w=[{title:"参数名",dataIndex:"name",key:"name"},{title:"类型",dataIndex:"type",key:"type"},{title:"说明",dataIndex:"interpretation",key:"interpretation"}],B=s([{name:"FinderUsername",flag:"否",type:"string",interpretation:""},{name:"Id",flag:"否",type:"string",interpretation:""},{name:"ObjectNonceId",flag:"否",type:"string",interpretation:""},{name:"Param1",flag:"否",type:"string",interpretation:""},{name:"Param2",flag:"否",type:"string",interpretation:""},{name:"Wxid",flag:"否",type:"string",interpretation:""}]),T=s([{name:"code",type:"string",interpretation:"200成功"},{name:"description",type:"string",interpretation:"返回数据"},{name:"message",type:"string",interpretation:"反馈信息"}]),x=s(`{
    "FinderUsername": "string",
    "Id": "string",
    "ObjectNonceId": "string",
    "Param1": "string",
    "Param2": "string",
    "Wxid": "string"
}`),b=s(`{
 "code": "number",
 "description": "string",
}`),F=s(`{
    "message": "失败",
    "code": "1001",
    "data": null
}`),u=s(!0),g=s(!0),m=s(!0),v=(S,n)=>{n==="code"&&(u.value=!u.value),n==="data"&&(g.value=!g.value),n==="err"&&(m.value=!m.value),j(S),L.success("复制成功")};return(S,n)=>{const y=_("a-tag"),f=_("a-tooltip"),$=_("a-table"),k=_("highlightjs");return i(),r("div",D,[a("div",E,h(e(q)),1),a("div",H,[a("div",J,[t(f,null,{title:o(()=>[l("请求方法")]),default:o(()=>[a("span",null,[t(y,{color:"#108ee9"},{default:o(()=>[l(h(e(O)),1)]),_:1})])]),_:1}),t(f,null,{title:o(()=>[l("接口状态")]),default:o(()=>[a("span",null,[t(y,{color:"#e6a23c"},{default:o(()=>[l("有效")]),_:1})])]),_:1}),l(),t(f,null,{title:o(()=>[l("Headers")]),default:o(()=>[a("span",null,[t(y,{color:"#e6a23c"},{default:o(()=>[l("Content-Type：application/json")]),_:1})])]),_:1})]),a("div",z,[a("code",null,h(e(N)),1)]),A,t($,{columns:P,"data-source":e(B),bordered:"",pagination:!1},null,8,["data-source"]),G,t($,{columns:w,"data-source":e(T),bordered:"",pagination:!1},null,8,["data-source"]),K,a("div",M,[e(u)?(i(),r("div",{key:0,class:"copy-icon",onClick:n[0]||(n[0]=d=>v(e(x),"code"))},[t(e(C))])):(i(),r("div",{key:1,class:"copy-icon",onClick:n[1]||(n[1]=d=>u.value=!0)},[t(e(I))])),t(k,{language:"JavaScript",code:e(x)},null,8,["code"])]),Q,a("div",R,[e(g)?(i(),r("div",{key:0,class:"copy-icon",onClick:n[2]||(n[2]=d=>v(e(b),"data"))},[t(e(C))])):(i(),r("div",{key:1,class:"copy-icon",onClick:n[3]||(n[3]=d=>g.value=!0)},[t(e(I))])),t(k,{language:"Xml",code:e(b)},null,8,["code"])]),Y,a("div",Z,[e(m)?(i(),r("div",{key:0,class:"copy-icon",onClick:n[4]||(n[4]=d=>v(e(F),"err"))},[t(e(C))])):(i(),r("div",{key:1,class:"copy-icon",onClick:n[5]||(n[5]=d=>m.value=!0)},[t(e(I))])),t(k,{language:"Xml",code:e(F)},null,8,["code"])])])])}}},se=V(ee,[["__scopeId","data-v-f7a63480"]]);export{se as default};
