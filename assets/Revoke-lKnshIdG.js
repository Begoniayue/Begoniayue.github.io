import{u as R}from"./index-B_WWDWWy.js";import{_ as U}from"./_plugin-vue_export-helper-x3n3nnut.js";import{r as s,a as _,o as i,g as l,f as a,t as C,d as e,b as t,w as o,j as r,m as V,C as h,k as I,p as L,e as W}from"./index-48LKXzQB.js";const c=p=>(L("data-v-4dbea37c"),p=p(),W(),p),X={class:"user-content"},D={class:"header"},E={class:"user-body"},H={class:"api-tag"},J={class:"code-block"},P=c(()=>a("div",{class:"request-params"},"请求参数:",-1)),z=c(()=>a("div",{class:"response-params"},"返回数据:",-1)),A=c(()=>a("div",{class:"request-params"},"请求参数示例",-1)),G={class:"code-light"},K=c(()=>a("div",{class:"response-params"},"成功返回示例",-1)),Q={class:"code-light"},Y=c(()=>a("div",{class:"response-params"},"错误返回示例",-1)),Z={class:"code-light"},ee={__name:"Revoke",setup(p){const{toClipboard:$}=R(),q=s("撤回消息"),w=s("/Msg/Revoke"),M=s("POST"),j=[{title:"参数名",dataIndex:"name",key:"name"},{title:"必选",dataIndex:"flag",key:"flag"},{title:"类型",dataIndex:"type",key:"type"},{title:"说明",dataIndex:"interpretation",key:"interpretation"}],F=[{title:"参数名",dataIndex:"name",key:"name"},{title:"类型",dataIndex:"type",key:"type"},{title:"说明",dataIndex:"interpretation",key:"interpretation"}],B=s([{name:"ClientMsgId",flag:"否",type:"integer",interpretation:""},{name:"CreateTime",flag:"否",type:"integer",interpretation:""},{name:"NewMsgId",flag:"否",type:"integer",interpretation:""},{name:"ToUserName",flag:"否",type:"string",interpretation:""},{name:"Wxid",flag:"否",type:"string",interpretation:""}]),O=s([{name:"code",type:"string",interpretation:"200成功"},{name:"description",type:"string",interpretation:"返回数据"},{name:"message",type:"string",interpretation:"反馈信息"}]),x=s(`{
    "ClientMsgId": 0,
    "CreateTime": 0,
    "NewMsgId": 0,
    "ToUserName": "string",
    "Wxid": "string"
}`),b=s(`{
 "code": "number",
 "description": "string",
}`),N=s(`{
    "message": "失败",
    "code": "1001",
    "data": null
}`),u=s(!0),g=s(!0),m=s(!0),v=(T,n)=>{n==="code"&&(u.value=!u.value),n==="data"&&(g.value=!g.value),n==="err"&&(m.value=!m.value),$(T),V.success("复制成功")};return(T,n)=>{const y=_("a-tag"),f=_("a-tooltip"),S=_("a-table"),k=_("highlightjs");return i(),l("div",X,[a("div",D,C(e(q)),1),a("div",E,[a("div",H,[t(f,null,{title:o(()=>[r("请求方法")]),default:o(()=>[a("span",null,[t(y,{color:"#108ee9"},{default:o(()=>[r(C(e(M)),1)]),_:1})])]),_:1}),t(f,null,{title:o(()=>[r("接口状态")]),default:o(()=>[a("span",null,[t(y,{color:"#e6a23c"},{default:o(()=>[r("有效")]),_:1})])]),_:1}),r(),t(f,null,{title:o(()=>[r("Headers")]),default:o(()=>[a("span",null,[t(y,{color:"#e6a23c"},{default:o(()=>[r("Content-Type：application/json")]),_:1})])]),_:1})]),a("div",J,[a("code",null,C(e(w)),1)]),P,t(S,{columns:j,"data-source":e(B),bordered:"",pagination:!1},null,8,["data-source"]),z,t(S,{columns:F,"data-source":e(O),bordered:"",pagination:!1},null,8,["data-source"]),A,a("div",G,[e(u)?(i(),l("div",{key:0,class:"copy-icon",onClick:n[0]||(n[0]=d=>v(e(x),"code"))},[t(e(h))])):(i(),l("div",{key:1,class:"copy-icon",onClick:n[1]||(n[1]=d=>u.value=!0)},[t(e(I))])),t(k,{language:"JavaScript",code:e(x)},null,8,["code"])]),K,a("div",Q,[e(g)?(i(),l("div",{key:0,class:"copy-icon",onClick:n[2]||(n[2]=d=>v(e(b),"data"))},[t(e(h))])):(i(),l("div",{key:1,class:"copy-icon",onClick:n[3]||(n[3]=d=>g.value=!0)},[t(e(I))])),t(k,{language:"Xml",code:e(b)},null,8,["code"])]),Y,a("div",Z,[e(m)?(i(),l("div",{key:0,class:"copy-icon",onClick:n[4]||(n[4]=d=>v(e(N),"err"))},[t(e(h))])):(i(),l("div",{key:1,class:"copy-icon",onClick:n[5]||(n[5]=d=>m.value=!0)},[t(e(I))])),t(k,{language:"Xml",code:e(N)},null,8,["code"])])])])}}},se=U(ee,[["__scopeId","data-v-4dbea37c"]]);export{se as default};
