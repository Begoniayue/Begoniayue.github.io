import{u as N}from"./index-BA9CNwg-.js";import{_ as O}from"./_plugin-vue_export-helper-x3n3nnut.js";import{r as s,a as v,o as i,g as l,f as n,t as $,d as e,b as t,w as a,h as c,m as T,C as h,k as C,p as U,e as V}from"./index-mNOZYs86.js";const r=p=>(U("data-v-cd5f88a9"),p=p(),V(),p),W={class:"user-content"},X={class:"header"},E={class:"user-body"},H={class:"api-tag"},J={class:"code-block"},z=r(()=>n("div",{class:"request-params"},"请求参数:",-1)),A=r(()=>n("div",{class:"response-params"},"返回数据:",-1)),G=r(()=>n("div",{class:"request-params"},"请求参数示例",-1)),K={class:"code-light"},M=r(()=>n("div",{class:"response-params"},"成功返回示例",-1)),Q={class:"code-light"},R=r(()=>n("div",{class:"response-params"},"错误返回示例",-1)),Y={class:"code-light"},Z={__name:"PhoneDeviceLogin",setup(p){const{toClipboard:q}=N(),D=s("铺助手机扫码登录"),P=s("/Login/PhoneDeviceLogin"),j=[{title:"参数名",dataIndex:"name",key:"name"},{title:"必选",dataIndex:"flag",key:"flag"},{title:"类型",dataIndex:"type",key:"type"},{title:"说明",dataIndex:"interpretation",key:"interpretation"}],w=[{title:"参数名",dataIndex:"name",key:"name"},{title:"类型",dataIndex:"type",key:"type"},{title:"说明",dataIndex:"interpretation",key:"interpretation"}],B=s([{name:"Url",flag:"否",type:"string",interpretation:" "},{name:"Wxid",flag:"否",type:"string",interpretation:" "}]),F=s([{name:"code",type:"string",interpretation:"200成功"},{name:"description",type:"string",interpretation:"返回数据"},{name:"message",type:"string",interpretation:"反馈信息"}]),x=s(`{
    "Url": "string",
    "Wxid": "string"
}`),I=s(`{
 "code": "number",
 "description": "string",
}`),b=s(`{
    "message": "失败",
    "code": "1001",
    "data": null
}`),u=s(!0),_=s(!0),g=s(!0),m=(L,o)=>{o==="code"&&(u.value=!u.value),o==="data"&&(_.value=!_.value),o==="err"&&(g.value=!g.value),q(L),T.success("复制成功")};return(L,o)=>{const y=v("a-tag"),f=v("a-tooltip"),S=v("a-table"),k=v("highlightjs");return i(),l("div",W,[n("div",X,$(e(D)),1),n("div",E,[n("div",H,[t(f,null,{title:a(()=>[c("请求方法")]),default:a(()=>[n("span",null,[t(y,{color:"#108ee9"},{default:a(()=>[c("POST")]),_:1})])]),_:1}),t(f,null,{title:a(()=>[c("接口状态")]),default:a(()=>[n("span",null,[t(y,{color:"#e6a23c"},{default:a(()=>[c("有效")]),_:1})])]),_:1}),c(),t(f,null,{title:a(()=>[c("Headers")]),default:a(()=>[n("span",null,[t(y,{color:"#e6a23c"},{default:a(()=>[c("Content-Type：application/json")]),_:1})])]),_:1})]),n("div",J,[n("code",null,$(e(P)),1)]),z,t(S,{columns:j,"data-source":e(B),bordered:"",pagination:!1},null,8,["data-source"]),A,t(S,{columns:w,"data-source":e(F),bordered:"",pagination:!1},null,8,["data-source"]),G,n("div",K,[e(u)?(i(),l("div",{key:0,class:"copy-icon",onClick:o[0]||(o[0]=d=>m(e(x),"code"))},[t(e(h))])):(i(),l("div",{key:1,class:"copy-icon",onClick:o[1]||(o[1]=d=>u.value=!0)},[t(e(C))])),t(k,{language:"JavaScript",code:e(x)},null,8,["code"])]),M,n("div",Q,[e(_)?(i(),l("div",{key:0,class:"copy-icon",onClick:o[2]||(o[2]=d=>m(e(I),"data"))},[t(e(h))])):(i(),l("div",{key:1,class:"copy-icon",onClick:o[3]||(o[3]=d=>_.value=!0)},[t(e(C))])),t(k,{language:"Xml",code:e(I)},null,8,["code"])]),R,n("div",Y,[e(g)?(i(),l("div",{key:0,class:"copy-icon",onClick:o[4]||(o[4]=d=>m(e(b),"err"))},[t(e(h))])):(i(),l("div",{key:1,class:"copy-icon",onClick:o[5]||(o[5]=d=>g.value=!0)},[t(e(C))])),t(k,{language:"Xml",code:e(b)},null,8,["code"])])])])}}},ne=O(Z,[["__scopeId","data-v-cd5f88a9"]]);export{ne as default};