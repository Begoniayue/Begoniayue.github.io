import{u as T}from"./index-CSU6RxZ9.js";import{_ as B}from"./_plugin-vue_export-helper-x3n3nnut.js";import{r as s,a as _,b as i,f as r,d as o,t as w,e,h as t,w as a,m as l,x as F,C as x,y as h,p as V,j as W}from"./index-ZKZBXv4v.js";const d=p=>(V("data-v-da17fc1d"),p=p(),W(),p),X={class:"user-content"},D={class:"header"},E={class:"user-body"},H={class:"api-tag"},J={class:"code-block"},z=d(()=>o("div",{class:"request-params"},"请求参数:",-1)),A=d(()=>o("div",{class:"response-params"},"返回数据:",-1)),G=d(()=>o("div",{class:"request-params"},"请求参数示例",-1)),K={class:"code-light"},M=d(()=>o("div",{class:"response-params"},"成功返回示例",-1)),Q={class:"code-light"},R=d(()=>o("div",{class:"response-params"},"错误返回示例",-1)),Y={class:"code-light"},Z={__name:"NewService",setup(p){const{toClipboard:N}=T(),O=s("新服务一键推登录"),$=s("/Login/OneClickLoginToNewService"),j=[{title:"参数名",dataIndex:"name",key:"name"},{title:"必选",dataIndex:"flag",key:"flag"},{title:"类型",dataIndex:"type",key:"type"},{title:"说明",dataIndex:"interpretation",key:"interpretation"}],U=[{title:"参数名",dataIndex:"name",key:"name"},{title:"类型",dataIndex:"type",key:"type"},{title:"说明",dataIndex:"interpretation",key:"interpretation"}],q=s([{name:"OS",flag:"否",type:"string",interpretation:" "},{name:"Url",flag:"否",type:"string",interpretation:" "},{name:"Wxid",flag:"否",type:"string",interpretation:" "},{name:"Proxy",flag:"否",type:"object",interpretation:"测试长效代理"},{name:"ProxyIp",flag:"否",type:"string",interpretation:"自定义长效代理IP+端口 不使用代理请留空"},{name:"ProxyUser",flag:"否",type:"string",interpretation:"自定义长效代理IP平台账号 不使用代理请留空"},{name:"ProxyPassword",flag:"否",type:"string",interpretation:"自定义长效代理IP平台密码 不使用代理请留空"}]),L=s([{name:"code",type:"string",interpretation:"200成功"},{name:"description",type:"string",interpretation:"返回数据"},{name:"message",type:"string",interpretation:"反馈信息"}]),C=s(`{
    "OS": "string",
    "Proxy": {
        "ProxyIp": "string",
        "ProxyPassword": "string",
        "ProxyUser": "string"
    },
    "Url": "string",
    "Wxid": "string"
}`),I=s(`{
 "code": "number",
 "description": "string",
}`),P=s(`{
    "message": "失败",
    "code": "1001",
    "data": null
}`),u=s(!0),g=s(!0),y=s(!0),m=(b,n)=>{n==="code"&&(u.value=!u.value),n==="data"&&(g.value=!g.value),n==="err"&&(y.value=!y.value),N(b),F.success("复制成功")};return(b,n)=>{const v=_("a-tag"),f=_("a-tooltip"),S=_("a-table"),k=_("highlightjs");return i(),r("div",X,[o("div",D,w(e(O)),1),o("div",E,[o("div",H,[t(f,null,{title:a(()=>[l("请求方法")]),default:a(()=>[o("span",null,[t(v,{color:"#108ee9"},{default:a(()=>[l("POST")]),_:1})])]),_:1}),t(f,null,{title:a(()=>[l("接口状态")]),default:a(()=>[o("span",null,[t(v,{color:"#e6a23c"},{default:a(()=>[l("有效")]),_:1})])]),_:1}),l(),t(f,null,{title:a(()=>[l("Headers")]),default:a(()=>[o("span",null,[t(v,{color:"#e6a23c"},{default:a(()=>[l("Content-Type：application/json")]),_:1})])]),_:1})]),o("div",J,[o("code",null,w(e($)),1)]),z,t(S,{columns:j,"data-source":e(q),bordered:"",pagination:!1},null,8,["data-source"]),A,t(S,{columns:U,"data-source":e(L),bordered:"",pagination:!1},null,8,["data-source"]),G,o("div",K,[e(u)?(i(),r("div",{key:0,class:"copy-icon",onClick:n[0]||(n[0]=c=>m(e(C),"code"))},[t(e(x))])):(i(),r("div",{key:1,class:"copy-icon",onClick:n[1]||(n[1]=c=>u.value=!0)},[t(e(h))])),t(k,{language:"JavaScript",code:e(C)},null,8,["code"])]),M,o("div",Q,[e(g)?(i(),r("div",{key:0,class:"copy-icon",onClick:n[2]||(n[2]=c=>m(e(I),"data"))},[t(e(x))])):(i(),r("div",{key:1,class:"copy-icon",onClick:n[3]||(n[3]=c=>g.value=!0)},[t(e(h))])),t(k,{language:"Xml",code:e(I)},null,8,["code"])]),R,o("div",Y,[e(y)?(i(),r("div",{key:0,class:"copy-icon",onClick:n[4]||(n[4]=c=>m(e(P),"err"))},[t(e(x))])):(i(),r("div",{key:1,class:"copy-icon",onClick:n[5]||(n[5]=c=>y.value=!0)},[t(e(h))])),t(k,{language:"Xml",code:e(P)},null,8,["code"])])])])}}},oe=B(Z,[["__scopeId","data-v-da17fc1d"]]);export{oe as default};
