import{u as q}from"./index-B_WWDWWy.js";import{_ as A}from"./_plugin-vue_export-helper-x3n3nnut.js";import{r as a,a as y,o as i,g as r,f as o,t as L,d as e,b as t,w as s,j as l,m as B,C as x,k as h,p as F,e as T}from"./index-48LKXzQB.js";const c=p=>(F("data-v-b70e758d"),p=p(),T(),p),U={class:"user-content"},X={class:"header"},E={class:"user-body"},H={class:"api-tag"},J={class:"code-block"},z=c(()=>o("div",{class:"request-params"},"请求参数:",-1)),G=c(()=>o("div",{class:"response-params"},"返回数据:",-1)),K=c(()=>o("div",{class:"request-params"},"请求参数示例",-1)),M={class:"code-light"},Q=c(()=>o("div",{class:"response-params"},"成功返回示例",-1)),R={class:"code-light"},W=c(()=>o("div",{class:"response-params"},"错误返回示例",-1)),Y={class:"code-light"},Z={__name:"SmsLoginAndroid",setup(p){const{toClipboard:$}=q(),j=a("安卓设备验证码登陆"),w=a("/Login/SmsLoginAndroid"),D=[{title:"参数名",dataIndex:"name",key:"name"},{title:"必选",dataIndex:"flag",key:"flag"},{title:"类型",dataIndex:"type",key:"type"},{title:"说明",dataIndex:"interpretation",key:"interpretation"}],N=[{title:"参数名",dataIndex:"name",key:"name"},{title:"类型",dataIndex:"type",key:"type"},{title:"说明",dataIndex:"interpretation",key:"interpretation"}],O=a([{name:"Data",flag:"否",type:"string",interpretation:" "},{name:"DeviceName",flag:"否",type:"string",interpretation:" "},{name:"Opcode",flag:"否",type:"integer",interpretation:" "},{name:"Phone",flag:"否",type:"string",interpretation:" "},{name:"Verifycode",flag:"否",type:"string",interpretation:" "},{name:"Proxy",flag:"否",type:"object",interpretation:"测试长效代理"},{name:"ProxyIp",flag:"否",type:"string",interpretation:"自定义长效代理IP+端口 不使用代理请留空"},{name:"ProxyUser",flag:"否",type:"string",interpretation:"自定义长效代理IP平台账号 不使用代理请留空"},{name:"ProxyPassword",flag:"否",type:"string",interpretation:"自定义长效代理IP平台密码 不使用代理请留空"}]),V=a([{name:"code",type:"string",interpretation:"200成功"},{name:"description",type:"string",interpretation:"返回数据"},{name:"message",type:"string",interpretation:"反馈信息"}]),C=a(`{
    "Data": "string",
    "DeviceName": "string",
    "Opcode": 0,
    "Phone": "string",
    "Proxy": {
        "ProxyIp": "string",
        "ProxyPassword": "string",
        "ProxyUser": "string"
    },
    "Verifycode": "string"
}`),I=a(`{
 "code": "number",
 "description": "string",
}`),P=a(`{
    "message": "失败",
    "code": "1001",
    "data": null
}`),u=a(!0),g=a(!0),m=a(!0),_=(b,n)=>{n==="code"&&(u.value=!u.value),n==="data"&&(g.value=!g.value),n==="err"&&(m.value=!m.value),$(b),B.success("复制成功")};return(b,n)=>{const v=y("a-tag"),f=y("a-tooltip"),S=y("a-table"),k=y("highlightjs");return i(),r("div",U,[o("div",X,L(e(j)),1),o("div",E,[o("div",H,[t(f,null,{title:s(()=>[l("请求方法")]),default:s(()=>[o("span",null,[t(v,{color:"#108ee9"},{default:s(()=>[l("POST")]),_:1})])]),_:1}),t(f,null,{title:s(()=>[l("接口状态")]),default:s(()=>[o("span",null,[t(v,{color:"#e6a23c"},{default:s(()=>[l("有效")]),_:1})])]),_:1}),l(),t(f,null,{title:s(()=>[l("Headers")]),default:s(()=>[o("span",null,[t(v,{color:"#e6a23c"},{default:s(()=>[l("Content-Type：application/json")]),_:1})])]),_:1})]),o("div",J,[o("code",null,L(e(w)),1)]),z,t(S,{columns:D,"data-source":e(O),bordered:"",pagination:!1},null,8,["data-source"]),G,t(S,{columns:N,"data-source":e(V),bordered:"",pagination:!1},null,8,["data-source"]),K,o("div",M,[e(u)?(i(),r("div",{key:0,class:"copy-icon",onClick:n[0]||(n[0]=d=>_(e(C),"code"))},[t(e(x))])):(i(),r("div",{key:1,class:"copy-icon",onClick:n[1]||(n[1]=d=>u.value=!0)},[t(e(h))])),t(k,{language:"JavaScript",code:e(C)},null,8,["code"])]),Q,o("div",R,[e(g)?(i(),r("div",{key:0,class:"copy-icon",onClick:n[2]||(n[2]=d=>_(e(I),"data"))},[t(e(x))])):(i(),r("div",{key:1,class:"copy-icon",onClick:n[3]||(n[3]=d=>g.value=!0)},[t(e(h))])),t(k,{language:"Xml",code:e(I)},null,8,["code"])]),W,o("div",Y,[e(m)?(i(),r("div",{key:0,class:"copy-icon",onClick:n[4]||(n[4]=d=>_(e(P),"err"))},[t(e(x))])):(i(),r("div",{key:1,class:"copy-icon",onClick:n[5]||(n[5]=d=>m.value=!0)},[t(e(h))])),t(k,{language:"Xml",code:e(P)},null,8,["code"])])])])}}},oe=A(Z,[["__scopeId","data-v-b70e758d"]]);export{oe as default};
