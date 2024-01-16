import{u as B}from"./index-CSU6RxZ9.js";import{_ as F}from"./_plugin-vue_export-helper-x3n3nnut.js";import{r as o,a as y,b as i,f as r,d as a,t as D,e,h as t,w as s,m as l,x as L,C as x,y as C,p as Q,j as R}from"./index-ZKZBXv4v.js";const c=p=>(Q("data-v-e9351af4"),p=p(),R(),p),T={class:"user-content"},U={class:"header"},V={class:"user-body"},X={class:"api-tag"},E={class:"code-block"},G=c(()=>a("div",{class:"request-params"},"请求参数:",-1)),H=c(()=>a("div",{class:"response-params"},"返回数据:",-1)),J=c(()=>a("div",{class:"request-params"},"请求参数示例",-1)),z={class:"code-light"},A=c(()=>a("div",{class:"response-params"},"成功返回示例",-1)),K={class:"code-light"},W=c(()=>a("div",{class:"response-params"},"错误返回示例",-1)),Y={class:"code-light"},Z={__name:"getQRCode",setup(p){const{toClipboard:O}=B(),$=o("获取二维码"),j=o("/Login/GetQR"),w=[{title:"参数名",dataIndex:"name",key:"name"},{title:"必选",dataIndex:"flag",key:"flag"},{title:"类型",dataIndex:"type",key:"type"},{title:"说明",dataIndex:"interpretation",key:"interpretation"}],N=[{title:"参数名",dataIndex:"name",key:"name"},{title:"类型",dataIndex:"type",key:"type"},{title:"说明",dataIndex:"interpretation",key:"interpretation"}],q=o([{name:"DeviceId",flag:"否",type:"string",interpretation:"可以写62，或32长度16进制，新设备登陆可忽略"},{name:"DeviceName",flag:"否",type:"string",interpretation:"设备名称"},{name:"OSModel",flag:"否",type:"string",interpretation:"OSModel=mac登陆Mac设备，忽略会登陆iPad"},{name:"domain",flag:"否",type:"string",interpretation:" "},{name:"Proxy",flag:"否",type:"object",interpretation:"测试长效代理"},{name:"ProxyIp",flag:"否",type:"string",interpretation:"自定义长效代理IP+端口 不使用代理请留空"},{name:"ProxyUser",flag:"否",type:"string",interpretation:"自定义长效代理IP平台账号 不使用代理请留空"},{name:"ProxyPassword",flag:"否",type:"string",interpretation:"自定义长效代理IP平台密码 不使用代理请留空"}]),M=o([{name:"code",type:"string",interpretation:"200成功"},{name:"description",type:"string",interpretation:"返回数据"},{name:"message",type:"string",interpretation:"反馈信息"}]),I=o(`{
    "DeviceID": "string",
    "DeviceName": "string",
    "OSModel": "string",
    "domain": "string",
    "Proxy": {
        "ProxyIp": "string",
        "ProxyPassword": "string",
        "ProxyUser": "string"
    }
}`),h=o(`{
 "code": "number",
 "description": "string",
}`),P=o(`{
    "message": "失败",
    "code": "1001",
    "data": null
}`),u=o(!0),g=o(!0),m=o(!0),_=(b,n)=>{n==="code"&&(u.value=!u.value),n==="data"&&(g.value=!g.value),n==="err"&&(m.value=!m.value),O(b),L.success("复制成功")};return(b,n)=>{const v=y("a-tag"),f=y("a-tooltip"),S=y("a-table"),k=y("highlightjs");return i(),r("div",T,[a("div",U,D(e($)),1),a("div",V,[a("div",X,[t(f,null,{title:s(()=>[l("请求方法")]),default:s(()=>[a("span",null,[t(v,{color:"#108ee9"},{default:s(()=>[l("POST")]),_:1})])]),_:1}),t(f,null,{title:s(()=>[l("接口状态")]),default:s(()=>[a("span",null,[t(v,{color:"#e6a23c"},{default:s(()=>[l("有效")]),_:1})])]),_:1}),l(),t(f,null,{title:s(()=>[l("Headers")]),default:s(()=>[a("span",null,[t(v,{color:"#e6a23c"},{default:s(()=>[l("Content-Type：application/json")]),_:1})])]),_:1})]),a("div",E,[a("code",null,D(e(j)),1)]),G,t(S,{columns:w,"data-source":e(q),bordered:"",pagination:!1},null,8,["data-source"]),H,t(S,{columns:N,"data-source":e(M),bordered:"",pagination:!1},null,8,["data-source"]),J,a("div",z,[e(u)?(i(),r("div",{key:0,class:"copy-icon",onClick:n[0]||(n[0]=d=>_(e(I),"code"))},[t(e(x))])):(i(),r("div",{key:1,class:"copy-icon",onClick:n[1]||(n[1]=d=>u.value=!0)},[t(e(C))])),t(k,{language:"JavaScript",code:e(I)},null,8,["code"])]),A,a("div",K,[e(g)?(i(),r("div",{key:0,class:"copy-icon",onClick:n[2]||(n[2]=d=>_(e(h),"data"))},[t(e(x))])):(i(),r("div",{key:1,class:"copy-icon",onClick:n[3]||(n[3]=d=>g.value=!0)},[t(e(C))])),t(k,{language:"Xml",code:e(h)},null,8,["code"])]),W,a("div",Y,[e(m)?(i(),r("div",{key:0,class:"copy-icon",onClick:n[4]||(n[4]=d=>_(e(P),"err"))},[t(e(x))])):(i(),r("div",{key:1,class:"copy-icon",onClick:n[5]||(n[5]=d=>m.value=!0)},[t(e(C))])),t(k,{language:"Xml",code:e(P)},null,8,["code"])])])])}}},ae=F(Z,[["__scopeId","data-v-e9351af4"]]);export{ae as default};
