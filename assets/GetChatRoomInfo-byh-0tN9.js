import{u as R}from"./index-IKI8YSjj.js";import{_ as T}from"./_plugin-vue_export-helper-x3n3nnut.js";import{r as n,a as g,o as i,g as l,f as s,t as h,d as e,b as t,w as a,k as c,m as V,C,l as I,p as L,e as Q}from"./index-UZnJtGCp.js";const r=p=>(L("data-v-979f158c"),p=p(),Q(),p),W={class:"user-content"},X={class:"header"},E={class:"user-body"},H={class:"api-tag"},J={class:"code-block"},P=r(()=>s("div",{class:"request-params"},"请求参数:",-1)),U=r(()=>s("div",{class:"response-params"},"返回数据:",-1)),z=r(()=>s("div",{class:"request-params"},"请求参数示例",-1)),A={class:"code-light"},K=r(()=>s("div",{class:"response-params"},"成功返回示例",-1)),M={class:"code-light"},Y=r(()=>s("div",{class:"response-params"},"错误返回示例",-1)),Z={class:"code-light"},ee={__name:"GetChatRoomInfo",setup(p){const{toClipboard:D}=R(),F=n("获取群详情(不带公告内容)"),G=n("/Group/GetChatRoomInfo"),j=n("POST"),w=[{title:"参数名",dataIndex:"name",key:"name"},{title:"必选",dataIndex:"flag",key:"flag"},{title:"类型",dataIndex:"type",key:"type"},{title:"说明",dataIndex:"interpretation",key:"interpretation"}],B=[{title:"参数名",dataIndex:"name",key:"name"},{title:"类型",dataIndex:"type",key:"type"},{title:"说明",dataIndex:"interpretation",key:"interpretation"}],N=n([{name:"QID",flag:"否",type:"string",interpretation:" 群ID,多个查询请用,隔开"},{name:"Wxid",flag:"否",type:"string",interpretation:""}]),O=n([{name:"code",type:"string",interpretation:"200成功"},{name:"description",type:"string",interpretation:"返回数据"},{name:"message",type:"string",interpretation:"反馈信息"}]),x=n(`{
    "QID": "string",
    "Wxid": "string"
}`),b=n(`{
 "code": "number",
 "description": "string",
}`),S=n(`{
    "message": "失败",
    "code": "1001",
    "data": null
}`),u=n(!0),_=n(!0),m=n(!0),v=($,o)=>{o==="code"&&(u.value=!u.value),o==="data"&&(_.value=!_.value),o==="err"&&(m.value=!m.value),D($),V.success("复制成功")};return($,o)=>{const y=g("a-tag"),f=g("a-tooltip"),q=g("a-table"),k=g("highlightjs");return i(),l("div",W,[s("div",X,h(e(F)),1),s("div",E,[s("div",H,[t(f,null,{title:a(()=>[c("请求方法")]),default:a(()=>[s("span",null,[t(y,{color:"#108ee9"},{default:a(()=>[c(h(e(j)),1)]),_:1})])]),_:1}),t(f,null,{title:a(()=>[c("接口状态")]),default:a(()=>[s("span",null,[t(y,{color:"#e6a23c"},{default:a(()=>[c("有效")]),_:1})])]),_:1}),c(),t(f,null,{title:a(()=>[c("Headers")]),default:a(()=>[s("span",null,[t(y,{color:"#e6a23c"},{default:a(()=>[c("Content-Type：application/json")]),_:1})])]),_:1})]),s("div",J,[s("code",null,h(e(G)),1)]),P,t(q,{columns:w,"data-source":e(N),bordered:"",pagination:!1},null,8,["data-source"]),U,t(q,{columns:B,"data-source":e(O),bordered:"",pagination:!1},null,8,["data-source"]),z,s("div",A,[e(u)?(i(),l("div",{key:0,class:"copy-icon",onClick:o[0]||(o[0]=d=>v(e(x),"code"))},[t(e(C))])):(i(),l("div",{key:1,class:"copy-icon",onClick:o[1]||(o[1]=d=>u.value=!0)},[t(e(I))])),t(k,{language:"JavaScript",code:e(x)},null,8,["code"])]),K,s("div",M,[e(_)?(i(),l("div",{key:0,class:"copy-icon",onClick:o[2]||(o[2]=d=>v(e(b),"data"))},[t(e(C))])):(i(),l("div",{key:1,class:"copy-icon",onClick:o[3]||(o[3]=d=>_.value=!0)},[t(e(I))])),t(k,{language:"Xml",code:e(b)},null,8,["code"])]),Y,s("div",Z,[e(m)?(i(),l("div",{key:0,class:"copy-icon",onClick:o[4]||(o[4]=d=>v(e(S),"err"))},[t(e(C))])):(i(),l("div",{key:1,class:"copy-icon",onClick:o[5]||(o[5]=d=>m.value=!0)},[t(e(I))])),t(k,{language:"Xml",code:e(S)},null,8,["code"])])])])}}},ne=T(ee,[["__scopeId","data-v-979f158c"]]);export{ne as default};
