import{u as O}from"./index-B_WWDWWy.js";import{_ as V}from"./_plugin-vue_export-helper-x3n3nnut.js";import{r as o,a as m,o as i,g as l,f as s,t as C,d as e,b as t,w as a,j as d,m as L,C as x,k as h,p as X,e as E}from"./index-48LKXzQB.js";const r=p=>(X("data-v-f25bc5b3"),p=p(),E(),p),H={class:"user-content"},J={class:"header"},M={class:"user-body"},P={class:"api-tag"},U={class:"code-block"},z=r(()=>s("div",{class:"request-params"},"请求参数:",-1)),A=r(()=>s("div",{class:"response-params"},"返回数据:",-1)),G=r(()=>s("div",{class:"request-params"},"请求参数示例",-1)),K={class:"code-light"},Q=r(()=>s("div",{class:"response-params"},"成功返回示例",-1)),R={class:"code-light"},Y=r(()=>s("div",{class:"response-params"},"错误返回示例",-1)),Z={class:"code-light"},ee={__name:"SendCDNFile",setup(p){const{toClipboard:$}=O(),q=o("发送文件(转发,并非上传)"),T=o("/Msg/SendCDNFile"),W=o("POST"),j=[{title:"参数名",dataIndex:"name",key:"name"},{title:"必选",dataIndex:"flag",key:"flag"},{title:"类型",dataIndex:"type",key:"type"},{title:"说明",dataIndex:"interpretation",key:"interpretation"}],w=[{title:"参数名",dataIndex:"name",key:"name"},{title:"类型",dataIndex:"type",key:"type"},{title:"说明",dataIndex:"interpretation",key:"interpretation"}],D=o([{name:"Content",flag:"否",type:"string",interpretation:"收到文件消息xml"},{name:"ToWxid",flag:"否",type:"string",interpretation:""},{name:"Wxid",flag:"否",type:"string",interpretation:"Wxid == 微信id 多个wxid请用,隔开"}]),B=o([{name:"code",type:"string",interpretation:"200成功"},{name:"description",type:"string",interpretation:"返回数据"},{name:"message",type:"string",interpretation:"反馈信息"}]),b=o(`{
    "Content": "string",
    "ToWxid": "string",
    "Wxid": "string"
}`),I=o(`{
 "code": "number",
 "description": "string",
}`),S=o(`{
    "message": "失败",
    "code": "1001",
    "data": null
}`),u=o(!0),_=o(!0),g=o(!0),v=(F,n)=>{n==="code"&&(u.value=!u.value),n==="data"&&(_.value=!_.value),n==="err"&&(g.value=!g.value),$(F),L.success("复制成功")};return(F,n)=>{const y=m("a-tag"),f=m("a-tooltip"),N=m("a-table"),k=m("highlightjs");return i(),l("div",H,[s("div",J,C(e(q)),1),s("div",M,[s("div",P,[t(f,null,{title:a(()=>[d("请求方法")]),default:a(()=>[s("span",null,[t(y,{color:"#108ee9"},{default:a(()=>[d(C(e(W)),1)]),_:1})])]),_:1}),t(f,null,{title:a(()=>[d("接口状态")]),default:a(()=>[s("span",null,[t(y,{color:"#e6a23c"},{default:a(()=>[d("有效")]),_:1})])]),_:1}),d(),t(f,null,{title:a(()=>[d("Headers")]),default:a(()=>[s("span",null,[t(y,{color:"#e6a23c"},{default:a(()=>[d("Content-Type：application/json")]),_:1})])]),_:1})]),s("div",U,[s("code",null,C(e(T)),1)]),z,t(N,{columns:j,"data-source":e(D),bordered:"",pagination:!1},null,8,["data-source"]),A,t(N,{columns:w,"data-source":e(B),bordered:"",pagination:!1},null,8,["data-source"]),G,s("div",K,[e(u)?(i(),l("div",{key:0,class:"copy-icon",onClick:n[0]||(n[0]=c=>v(e(b),"code"))},[t(e(x))])):(i(),l("div",{key:1,class:"copy-icon",onClick:n[1]||(n[1]=c=>u.value=!0)},[t(e(h))])),t(k,{language:"JavaScript",code:e(b)},null,8,["code"])]),Q,s("div",R,[e(_)?(i(),l("div",{key:0,class:"copy-icon",onClick:n[2]||(n[2]=c=>v(e(I),"data"))},[t(e(x))])):(i(),l("div",{key:1,class:"copy-icon",onClick:n[3]||(n[3]=c=>_.value=!0)},[t(e(h))])),t(k,{language:"Xml",code:e(I)},null,8,["code"])]),Y,s("div",Z,[e(g)?(i(),l("div",{key:0,class:"copy-icon",onClick:n[4]||(n[4]=c=>v(e(S),"err"))},[t(e(x))])):(i(),l("div",{key:1,class:"copy-icon",onClick:n[5]||(n[5]=c=>g.value=!0)},[t(e(h))])),t(k,{language:"Xml",code:e(S)},null,8,["code"])])])])}}},oe=V(ee,[["__scopeId","data-v-f25bc5b3"]]);export{oe as default};
