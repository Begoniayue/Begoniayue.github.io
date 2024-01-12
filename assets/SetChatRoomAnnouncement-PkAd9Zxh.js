import{u as R}from"./index-IKI8YSjj.js";import{_ as T}from"./_plugin-vue_export-helper-x3n3nnut.js";import{r as s,a as g,o as i,g as l,f as o,t as C,d as e,b as t,w as a,k as c,m as V,C as h,l as x,p as L,e as Q}from"./index-UZnJtGCp.js";const r=p=>(L("data-v-a87fe3dd"),p=p(),Q(),p),W={class:"user-content"},X={class:"header"},E={class:"user-body"},G={class:"api-tag"},H={class:"code-block"},J=r(()=>o("div",{class:"request-params"},"请求参数:",-1)),P=r(()=>o("div",{class:"response-params"},"返回数据:",-1)),U=r(()=>o("div",{class:"request-params"},"请求参数示例",-1)),z={class:"code-light"},K=r(()=>o("div",{class:"response-params"},"成功返回示例",-1)),M={class:"code-light"},Y=r(()=>o("div",{class:"response-params"},"错误返回示例",-1)),Z={class:"code-light"},ee={__name:"SetChatRoomAnnouncement",setup(p){const{toClipboard:F}=R(),j=s("设置群公告"),w=s("/Group/SetChatRoomAnnouncement"),A=s("POST"),B=[{title:"参数名",dataIndex:"name",key:"name"},{title:"必选",dataIndex:"flag",key:"flag"},{title:"类型",dataIndex:"type",key:"type"},{title:"说明",dataIndex:"interpretation",key:"interpretation"}],D=[{title:"参数名",dataIndex:"name",key:"name"},{title:"类型",dataIndex:"type",key:"type"},{title:"说明",dataIndex:"interpretation",key:"interpretation"}],N=s([{name:"Content",flag:"否",type:"string",interpretation:"Content == 公告内容"},{name:"QID",flag:"否",type:"string",interpretation:""},{name:"Wxid",flag:"否",type:"string",interpretation:""}]),O=s([{name:"code",type:"string",interpretation:"200成功"},{name:"description",type:"string",interpretation:"返回数据"},{name:"message",type:"string",interpretation:"反馈信息"}]),I=s(`{
    "Content": "string",
    "QID": "string",
    "Wxid": "string"
}`),b=s(`{
 "code": "number",
 "description": "string",
}`),S=s(`{
    "message": "失败",
    "code": "1001",
    "data": null
}`),u=s(!0),m=s(!0),_=s(!0),v=($,n)=>{n==="code"&&(u.value=!u.value),n==="data"&&(m.value=!m.value),n==="err"&&(_.value=!_.value),F($),V.success("复制成功")};return($,n)=>{const y=g("a-tag"),f=g("a-tooltip"),q=g("a-table"),k=g("highlightjs");return i(),l("div",W,[o("div",X,C(e(j)),1),o("div",E,[o("div",G,[t(f,null,{title:a(()=>[c("请求方法")]),default:a(()=>[o("span",null,[t(y,{color:"#108ee9"},{default:a(()=>[c(C(e(A)),1)]),_:1})])]),_:1}),t(f,null,{title:a(()=>[c("接口状态")]),default:a(()=>[o("span",null,[t(y,{color:"#e6a23c"},{default:a(()=>[c("有效")]),_:1})])]),_:1}),c(),t(f,null,{title:a(()=>[c("Headers")]),default:a(()=>[o("span",null,[t(y,{color:"#e6a23c"},{default:a(()=>[c("Content-Type：application/json")]),_:1})])]),_:1})]),o("div",H,[o("code",null,C(e(w)),1)]),J,t(q,{columns:B,"data-source":e(N),bordered:"",pagination:!1},null,8,["data-source"]),P,t(q,{columns:D,"data-source":e(O),bordered:"",pagination:!1},null,8,["data-source"]),U,o("div",z,[e(u)?(i(),l("div",{key:0,class:"copy-icon",onClick:n[0]||(n[0]=d=>v(e(I),"code"))},[t(e(h))])):(i(),l("div",{key:1,class:"copy-icon",onClick:n[1]||(n[1]=d=>u.value=!0)},[t(e(x))])),t(k,{language:"JavaScript",code:e(I)},null,8,["code"])]),K,o("div",M,[e(m)?(i(),l("div",{key:0,class:"copy-icon",onClick:n[2]||(n[2]=d=>v(e(b),"data"))},[t(e(h))])):(i(),l("div",{key:1,class:"copy-icon",onClick:n[3]||(n[3]=d=>m.value=!0)},[t(e(x))])),t(k,{language:"Xml",code:e(b)},null,8,["code"])]),Y,o("div",Z,[e(_)?(i(),l("div",{key:0,class:"copy-icon",onClick:n[4]||(n[4]=d=>v(e(S),"err"))},[t(e(h))])):(i(),l("div",{key:1,class:"copy-icon",onClick:n[5]||(n[5]=d=>_.value=!0)},[t(e(x))])),t(k,{language:"Xml",code:e(S)},null,8,["code"])])])])}}},se=T(ee,[["__scopeId","data-v-a87fe3dd"]]);export{se as default};
