import{u as N}from"./index-BA9CNwg-.js";import{_ as O}from"./_plugin-vue_export-helper-x3n3nnut.js";import{r as o,a as m,o as i,g as l,f as s,t as x,d as e,b as t,w as a,h as d,m as V,C as h,k as C,p as L,e as D}from"./index-mNOZYs86.js";const r=p=>(L("data-v-e78ee90c"),p=p(),D(),p),E={class:"user-content"},H={class:"header"},J={class:"user-body"},M={class:"api-tag"},P={class:"code-block"},U=r(()=>s("div",{class:"request-params"},"请求参数:",-1)),z=r(()=>s("div",{class:"response-params"},"返回数据:",-1)),G=r(()=>s("div",{class:"request-params"},"请求参数示例",-1)),K={class:"code-light"},Q=r(()=>s("div",{class:"response-params"},"成功返回示例",-1)),R={class:"code-light"},Y=r(()=>s("div",{class:"response-params"},"错误返回示例",-1)),Z={class:"code-light"},ee={__name:"SendApp",setup(p){const{toClipboard:q}=N(),W=o("发送App消息"),w=o("/Msg/SendApp"),A=o("POST"),F=[{title:"参数名",dataIndex:"name",key:"name"},{title:"必选",dataIndex:"flag",key:"flag"},{title:"类型",dataIndex:"type",key:"type"},{title:"说明",dataIndex:"interpretation",key:"interpretation"}],X=[{title:"参数名",dataIndex:"name",key:"name"},{title:"类型",dataIndex:"type",key:"type"},{title:"说明",dataIndex:"interpretation",key:"interpretation"}],j=o([{name:"Xml",flag:"否",type:"string",interpretation:"xml请自行构造"},{name:"Type",flag:"否",type:"integer",interpretation:"Type请根据场景设置"},{name:"ToWxid",flag:"否",type:"string",interpretation:""},{name:"Wxid",flag:"否",type:"string",interpretation:"Wxid == 微信id 多个wxid请用,隔开"}]),B=o([{name:"code",type:"string",interpretation:"200成功"},{name:"description",type:"string",interpretation:"返回数据"},{name:"message",type:"string",interpretation:"反馈信息"}]),I=o(`{
    "ToWxid": "string",
    "Type": 0,
    "Wxid": "string",
    "Xml": "string"
}`),b=o(`{
 "code": "number",
 "description": "string",
}`),S=o(`{
    "message": "失败",
    "code": "1001",
    "data": null
}`),u=o(!0),_=o(!0),g=o(!0),v=(T,n)=>{n==="code"&&(u.value=!u.value),n==="data"&&(_.value=!_.value),n==="err"&&(g.value=!g.value),q(T),V.success("复制成功")};return(T,n)=>{const y=m("a-tag"),f=m("a-tooltip"),$=m("a-table"),k=m("highlightjs");return i(),l("div",E,[s("div",H,x(e(W)),1),s("div",J,[s("div",M,[t(f,null,{title:a(()=>[d("请求方法")]),default:a(()=>[s("span",null,[t(y,{color:"#108ee9"},{default:a(()=>[d(x(e(A)),1)]),_:1})])]),_:1}),t(f,null,{title:a(()=>[d("接口状态")]),default:a(()=>[s("span",null,[t(y,{color:"#e6a23c"},{default:a(()=>[d("有效")]),_:1})])]),_:1}),d(),t(f,null,{title:a(()=>[d("Headers")]),default:a(()=>[s("span",null,[t(y,{color:"#e6a23c"},{default:a(()=>[d("Content-Type：application/json")]),_:1})])]),_:1})]),s("div",P,[s("code",null,x(e(w)),1)]),U,t($,{columns:F,"data-source":e(j),bordered:"",pagination:!1},null,8,["data-source"]),z,t($,{columns:X,"data-source":e(B),bordered:"",pagination:!1},null,8,["data-source"]),G,s("div",K,[e(u)?(i(),l("div",{key:0,class:"copy-icon",onClick:n[0]||(n[0]=c=>v(e(I),"code"))},[t(e(h))])):(i(),l("div",{key:1,class:"copy-icon",onClick:n[1]||(n[1]=c=>u.value=!0)},[t(e(C))])),t(k,{language:"JavaScript",code:e(I)},null,8,["code"])]),Q,s("div",R,[e(_)?(i(),l("div",{key:0,class:"copy-icon",onClick:n[2]||(n[2]=c=>v(e(b),"data"))},[t(e(h))])):(i(),l("div",{key:1,class:"copy-icon",onClick:n[3]||(n[3]=c=>_.value=!0)},[t(e(C))])),t(k,{language:"Xml",code:e(b)},null,8,["code"])]),Y,s("div",Z,[e(g)?(i(),l("div",{key:0,class:"copy-icon",onClick:n[4]||(n[4]=c=>v(e(S),"err"))},[t(e(h))])):(i(),l("div",{key:1,class:"copy-icon",onClick:n[5]||(n[5]=c=>g.value=!0)},[t(e(C))])),t(k,{language:"Xml",code:e(S)},null,8,["code"])])])])}}},oe=O(ee,[["__scopeId","data-v-e78ee90c"]]);export{oe as default};
