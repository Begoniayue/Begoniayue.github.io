import{u as O}from"./index-BA9CNwg-.js";import{_ as V}from"./_plugin-vue_export-helper-x3n3nnut.js";import{r as o,a as m,o as i,g as l,f as n,t as h,d as e,b as t,w as a,h as d,m as L,C as x,k as C,p as X,e as D}from"./index-mNOZYs86.js";const r=p=>(X("data-v-48f55b70"),p=p(),D(),p),E={class:"user-content"},H={class:"header"},J={class:"user-body"},P={class:"api-tag"},U={class:"code-block"},z=r(()=>n("div",{class:"request-params"},"请求参数:",-1)),A=r(()=>n("div",{class:"response-params"},"返回数据:",-1)),G=r(()=>n("div",{class:"request-params"},"请求参数示例",-1)),K={class:"code-light"},Q=r(()=>n("div",{class:"response-params"},"成功返回示例",-1)),R={class:"code-light"},Y=r(()=>n("div",{class:"response-params"},"错误返回示例",-1)),Z={class:"code-light"},ee={__name:"BatchSendMsg",setup(p){const{toClipboard:W}=O(),$=o("批量发送文本消息"),q=o("/Msg/BatchSendMsg"),w=o("POST"),F=[{title:"参数名",dataIndex:"name",key:"name"},{title:"必选",dataIndex:"flag",key:"flag"},{title:"类型",dataIndex:"type",key:"type"},{title:"说明",dataIndex:"interpretation",key:"interpretation"}],M=[{title:"参数名",dataIndex:"name",key:"name"},{title:"类型",dataIndex:"type",key:"type"},{title:"说明",dataIndex:"interpretation",key:"interpretation"}],j=o([{name:"Content",flag:"否",type:"string",interpretation:""},{name:"ToWxids",flag:"否",type:"string",interpretation:"ToWxids用,隔开"},{name:"Wxid",flag:"否",type:"string",interpretation:"Wxid == 微信id 多个wxid请用,隔开"}]),N=o([{name:"code",type:"string",interpretation:"200成功"},{name:"description",type:"string",interpretation:"返回数据"},{name:"message",type:"string",interpretation:"反馈信息"}]),b=o(`{
    "Content": "string",
    "ToWxids": "string",
    "Wxid": "string"
}`),I=o(`{
 "code": "number",
 "description": "string",
}`),S=o(`{
    "message": "失败",
    "code": "1001",
    "data": null
}`),u=o(!0),g=o(!0),_=o(!0),v=(B,s)=>{s==="code"&&(u.value=!u.value),s==="data"&&(g.value=!g.value),s==="err"&&(_.value=!_.value),W(B),L.success("复制成功")};return(B,s)=>{const y=m("a-tag"),f=m("a-tooltip"),T=m("a-table"),k=m("highlightjs");return i(),l("div",E,[n("div",H,h(e($)),1),n("div",J,[n("div",P,[t(f,null,{title:a(()=>[d("请求方法")]),default:a(()=>[n("span",null,[t(y,{color:"#108ee9"},{default:a(()=>[d(h(e(w)),1)]),_:1})])]),_:1}),t(f,null,{title:a(()=>[d("接口状态")]),default:a(()=>[n("span",null,[t(y,{color:"#e6a23c"},{default:a(()=>[d("有效")]),_:1})])]),_:1}),d(),t(f,null,{title:a(()=>[d("Headers")]),default:a(()=>[n("span",null,[t(y,{color:"#e6a23c"},{default:a(()=>[d("Content-Type：application/json")]),_:1})])]),_:1})]),n("div",U,[n("code",null,h(e(q)),1)]),z,t(T,{columns:F,"data-source":e(j),bordered:"",pagination:!1},null,8,["data-source"]),A,t(T,{columns:M,"data-source":e(N),bordered:"",pagination:!1},null,8,["data-source"]),G,n("div",K,[e(u)?(i(),l("div",{key:0,class:"copy-icon",onClick:s[0]||(s[0]=c=>v(e(b),"code"))},[t(e(x))])):(i(),l("div",{key:1,class:"copy-icon",onClick:s[1]||(s[1]=c=>u.value=!0)},[t(e(C))])),t(k,{language:"JavaScript",code:e(b)},null,8,["code"])]),Q,n("div",R,[e(g)?(i(),l("div",{key:0,class:"copy-icon",onClick:s[2]||(s[2]=c=>v(e(I),"data"))},[t(e(x))])):(i(),l("div",{key:1,class:"copy-icon",onClick:s[3]||(s[3]=c=>g.value=!0)},[t(e(C))])),t(k,{language:"Xml",code:e(I)},null,8,["code"])]),Y,n("div",Z,[e(_)?(i(),l("div",{key:0,class:"copy-icon",onClick:s[4]||(s[4]=c=>v(e(S),"err"))},[t(e(x))])):(i(),l("div",{key:1,class:"copy-icon",onClick:s[5]||(s[5]=c=>_.value=!0)},[t(e(C))])),t(k,{language:"Xml",code:e(S)},null,8,["code"])])])])}}},oe=V(ee,[["__scopeId","data-v-48f55b70"]]);export{oe as default};
