import{u as T}from"./index-CSU6RxZ9.js";import{_ as V}from"./_plugin-vue_export-helper-x3n3nnut.js";import{r as a,a as g,b as i,f as l,d as s,t as h,e,h as t,w as o,m as d,x as W,C,y as x,p as X,j as E}from"./index-ZKZBXv4v.js";const r=p=>(X("data-v-66c575a6"),p=p(),E(),p),H={class:"user-content"},J={class:"header"},P={class:"user-body"},U={class:"api-tag"},z={class:"code-block"},A=r(()=>s("div",{class:"request-params"},"请求参数:",-1)),G=r(()=>s("div",{class:"response-params"},"返回数据:",-1)),K=r(()=>s("div",{class:"request-params"},"请求参数示例",-1)),M={class:"code-light"},Q=r(()=>s("div",{class:"response-params"},"成功返回示例",-1)),R={class:"code-light"},Y=r(()=>s("div",{class:"response-params"},"错误返回示例",-1)),Z={class:"code-light"},ee={__name:"FinderLiveDetail",setup(p){const{toClipboard:S}=T(),$=a("直播详情"),q=a("/Finder/FinderLiveDetail"),L=a("POST"),N=[{title:"参数名",dataIndex:"name",key:"name"},{title:"必选",dataIndex:"flag",key:"flag"},{title:"类型",dataIndex:"type",key:"type"},{title:"说明",dataIndex:"interpretation",key:"interpretation"}],O=[{title:"参数名",dataIndex:"name",key:"name"},{title:"类型",dataIndex:"type",key:"type"},{title:"说明",dataIndex:"interpretation",key:"interpretation"}],w=a([{name:"FinderNonceID",flag:"否",type:"string",interpretation:""},{name:"FinderObjectID",flag:"否",type:"string",interpretation:""},{name:"Wxid",flag:"否",type:"string",interpretation:""}]),B=a([{name:"code",type:"string",interpretation:"200成功"},{name:"description",type:"string",interpretation:"返回数据"},{name:"message",type:"string",interpretation:"反馈信息"}]),I=a(`{
    "FinderNonceID": "string",
    "FinderObjectID": "string",
    "Wxid": "string"
}`),b=a(`{
 "code": "number",
 "description": "string",
}`),F=a(`{
    "message": "失败",
    "code": "1001",
    "data": null
}`),u=a(!0),_=a(!0),v=a(!0),m=(D,n)=>{n==="code"&&(u.value=!u.value),n==="data"&&(_.value=!_.value),n==="err"&&(v.value=!v.value),S(D),W.success("复制成功")};return(D,n)=>{const y=g("a-tag"),f=g("a-tooltip"),j=g("a-table"),k=g("highlightjs");return i(),l("div",H,[s("div",J,h(e($)),1),s("div",P,[s("div",U,[t(f,null,{title:o(()=>[d("请求方法")]),default:o(()=>[s("span",null,[t(y,{color:"#108ee9"},{default:o(()=>[d(h(e(L)),1)]),_:1})])]),_:1}),t(f,null,{title:o(()=>[d("接口状态")]),default:o(()=>[s("span",null,[t(y,{color:"#e6a23c"},{default:o(()=>[d("有效")]),_:1})])]),_:1}),d(),t(f,null,{title:o(()=>[d("Headers")]),default:o(()=>[s("span",null,[t(y,{color:"#e6a23c"},{default:o(()=>[d("Content-Type：application/json")]),_:1})])]),_:1})]),s("div",z,[s("code",null,h(e(q)),1)]),A,t(j,{columns:N,"data-source":e(w),bordered:"",pagination:!1},null,8,["data-source"]),G,t(j,{columns:O,"data-source":e(B),bordered:"",pagination:!1},null,8,["data-source"]),K,s("div",M,[e(u)?(i(),l("div",{key:0,class:"copy-icon",onClick:n[0]||(n[0]=c=>m(e(I),"code"))},[t(e(C))])):(i(),l("div",{key:1,class:"copy-icon",onClick:n[1]||(n[1]=c=>u.value=!0)},[t(e(x))])),t(k,{language:"JavaScript",code:e(I)},null,8,["code"])]),Q,s("div",R,[e(_)?(i(),l("div",{key:0,class:"copy-icon",onClick:n[2]||(n[2]=c=>m(e(b),"data"))},[t(e(C))])):(i(),l("div",{key:1,class:"copy-icon",onClick:n[3]||(n[3]=c=>_.value=!0)},[t(e(x))])),t(k,{language:"Xml",code:e(b)},null,8,["code"])]),Y,s("div",Z,[e(v)?(i(),l("div",{key:0,class:"copy-icon",onClick:n[4]||(n[4]=c=>m(e(F),"err"))},[t(e(C))])):(i(),l("div",{key:1,class:"copy-icon",onClick:n[5]||(n[5]=c=>v.value=!0)},[t(e(x))])),t(k,{language:"Xml",code:e(F)},null,8,["code"])])])])}}},ae=V(ee,[["__scopeId","data-v-66c575a6"]]);export{ae as default};
