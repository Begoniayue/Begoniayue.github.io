import{u as N}from"./index-CSU6RxZ9.js";import{_ as O}from"./_plugin-vue_export-helper-x3n3nnut.js";import{r as n,a as m,b as i,f as l,d as s,t as h,e,h as t,w as o,m as r,x as V,C,y as x,p as W,j as X}from"./index-ZKZBXv4v.js";const d=p=>(W("data-v-2ba1a2bc"),p=p(),X(),p),D={class:"user-content"},E={class:"header"},H={class:"user-body"},J={class:"api-tag"},z={class:"code-block"},A=d(()=>s("div",{class:"request-params"},"请求参数:",-1)),G=d(()=>s("div",{class:"response-params"},"返回数据:",-1)),K=d(()=>s("div",{class:"request-params"},"请求参数示例",-1)),M={class:"code-light"},Q=d(()=>s("div",{class:"response-params"},"成功返回示例",-1)),R={class:"code-light"},Y=d(()=>s("div",{class:"response-params"},"错误返回示例",-1)),Z={class:"code-light"},ee={__name:"TargetUserPage",setup(p){const{toClipboard:q}=N(),B=n("查看指定人首页"),F=n("/Finder/TargetUserPage"),j=n("POST"),L=[{title:"参数名",dataIndex:"name",key:"name"},{title:"必选",dataIndex:"flag",key:"flag"},{title:"类型",dataIndex:"type",key:"type"},{title:"说明",dataIndex:"interpretation",key:"interpretation"}],P=[{title:"参数名",dataIndex:"name",key:"name"},{title:"类型",dataIndex:"type",key:"type"},{title:"说明",dataIndex:"interpretation",key:"interpretation"}],U=n([{name:"LastBuffer",flag:"否",type:"string",interpretation:""},{name:"Target",flag:"否",type:"string",interpretation:""},{name:"Wxid",flag:"否",type:"string",interpretation:""}]),w=n([{name:"code",type:"string",interpretation:"200成功"},{name:"description",type:"string",interpretation:"返回数据"},{name:"message",type:"string",interpretation:"反馈信息"}]),b=n(`{
    "LastBuffer": "string",
    "Target": "string",
    "Wxid": "string"
}`),I=n(`{
 "code": "number",
 "description": "string",
}`),T=n(`{
    "message": "失败",
    "code": "1001",
    "data": null
}`),u=n(!0),g=n(!0),_=n(!0),v=(S,a)=>{a==="code"&&(u.value=!u.value),a==="data"&&(g.value=!g.value),a==="err"&&(_.value=!_.value),q(S),V.success("复制成功")};return(S,a)=>{const y=m("a-tag"),f=m("a-tooltip"),$=m("a-table"),k=m("highlightjs");return i(),l("div",D,[s("div",E,h(e(B)),1),s("div",H,[s("div",J,[t(f,null,{title:o(()=>[r("请求方法")]),default:o(()=>[s("span",null,[t(y,{color:"#108ee9"},{default:o(()=>[r(h(e(j)),1)]),_:1})])]),_:1}),t(f,null,{title:o(()=>[r("接口状态")]),default:o(()=>[s("span",null,[t(y,{color:"#e6a23c"},{default:o(()=>[r("有效")]),_:1})])]),_:1}),r(),t(f,null,{title:o(()=>[r("Headers")]),default:o(()=>[s("span",null,[t(y,{color:"#e6a23c"},{default:o(()=>[r("Content-Type：application/json")]),_:1})])]),_:1})]),s("div",z,[s("code",null,h(e(F)),1)]),A,t($,{columns:L,"data-source":e(U),bordered:"",pagination:!1},null,8,["data-source"]),G,t($,{columns:P,"data-source":e(w),bordered:"",pagination:!1},null,8,["data-source"]),K,s("div",M,[e(u)?(i(),l("div",{key:0,class:"copy-icon",onClick:a[0]||(a[0]=c=>v(e(b),"code"))},[t(e(C))])):(i(),l("div",{key:1,class:"copy-icon",onClick:a[1]||(a[1]=c=>u.value=!0)},[t(e(x))])),t(k,{language:"JavaScript",code:e(b)},null,8,["code"])]),Q,s("div",R,[e(g)?(i(),l("div",{key:0,class:"copy-icon",onClick:a[2]||(a[2]=c=>v(e(I),"data"))},[t(e(C))])):(i(),l("div",{key:1,class:"copy-icon",onClick:a[3]||(a[3]=c=>g.value=!0)},[t(e(x))])),t(k,{language:"Xml",code:e(I)},null,8,["code"])]),Y,s("div",Z,[e(_)?(i(),l("div",{key:0,class:"copy-icon",onClick:a[4]||(a[4]=c=>v(e(T),"err"))},[t(e(C))])):(i(),l("div",{key:1,class:"copy-icon",onClick:a[5]||(a[5]=c=>_.value=!0)},[t(e(x))])),t(k,{language:"Xml",code:e(T)},null,8,["code"])])])])}}},ne=O(ee,[["__scopeId","data-v-2ba1a2bc"]]);export{ne as default};