import{u as Q}from"./index-IKI8YSjj.js";import{_ as T}from"./_plugin-vue_export-helper-x3n3nnut.js";import{r as o,a as g,o as i,g as l,f as n,t as C,d as e,b as t,w as s,k as c,m as V,C as h,l as I,p as L,e as W}from"./index-UZnJtGCp.js";const d=p=>(L("data-v-4a5e5acb"),p=p(),W(),p),X={class:"user-content"},E={class:"header"},G={class:"user-body"},H={class:"api-tag"},J={class:"code-block"},P=d(()=>n("div",{class:"request-params"},"请求参数:",-1)),U=d(()=>n("div",{class:"response-params"},"返回数据:",-1)),z=d(()=>n("div",{class:"request-params"},"请求参数示例",-1)),A={class:"code-light"},K=d(()=>n("div",{class:"response-params"},"成功返回示例",-1)),M={class:"code-light"},Y=d(()=>n("div",{class:"response-params"},"错误返回示例",-1)),Z={class:"code-light"},ee={__name:"SetChatRoomRemarks",setup(p){const{toClipboard:q}=Q(),D=o("设置群备注(仅自己可见)"),F=o("/Group/SetChatRoomRemarks"),j=o("POST"),w=[{title:"参数名",dataIndex:"name",key:"name"},{title:"必选",dataIndex:"flag",key:"flag"},{title:"类型",dataIndex:"type",key:"type"},{title:"说明",dataIndex:"interpretation",key:"interpretation"}],B=[{title:"参数名",dataIndex:"name",key:"name"},{title:"类型",dataIndex:"type",key:"type"},{title:"说明",dataIndex:"interpretation",key:"interpretation"}],N=o([{name:"Content",flag:"否",type:"string",interpretation:""},{name:"QID",flag:"否",type:"string",interpretation:"QID == 群ID"},{name:"Wxid",flag:"否",type:"string",interpretation:""}]),O=o([{name:"code",type:"string",interpretation:"200成功"},{name:"description",type:"string",interpretation:"返回数据"},{name:"message",type:"string",interpretation:"反馈信息"}]),x=o(`{
    "Content": "string",
    "QID": "string",
    "Wxid": "string"
}`),b=o(`{
 "code": "number",
 "description": "string",
}`),S=o(`{
    "message": "失败",
    "code": "1001",
    "data": null
}`),u=o(!0),m=o(!0),_=o(!0),v=(R,a)=>{a==="code"&&(u.value=!u.value),a==="data"&&(m.value=!m.value),a==="err"&&(_.value=!_.value),q(R),V.success("复制成功")};return(R,a)=>{const y=g("a-tag"),k=g("a-tooltip"),$=g("a-table"),f=g("highlightjs");return i(),l("div",X,[n("div",E,C(e(D)),1),n("div",G,[n("div",H,[t(k,null,{title:s(()=>[c("请求方法")]),default:s(()=>[n("span",null,[t(y,{color:"#108ee9"},{default:s(()=>[c(C(e(j)),1)]),_:1})])]),_:1}),t(k,null,{title:s(()=>[c("接口状态")]),default:s(()=>[n("span",null,[t(y,{color:"#e6a23c"},{default:s(()=>[c("有效")]),_:1})])]),_:1}),c(),t(k,null,{title:s(()=>[c("Headers")]),default:s(()=>[n("span",null,[t(y,{color:"#e6a23c"},{default:s(()=>[c("Content-Type：application/json")]),_:1})])]),_:1})]),n("div",J,[n("code",null,C(e(F)),1)]),P,t($,{columns:w,"data-source":e(N),bordered:"",pagination:!1},null,8,["data-source"]),U,t($,{columns:B,"data-source":e(O),bordered:"",pagination:!1},null,8,["data-source"]),z,n("div",A,[e(u)?(i(),l("div",{key:0,class:"copy-icon",onClick:a[0]||(a[0]=r=>v(e(x),"code"))},[t(e(h))])):(i(),l("div",{key:1,class:"copy-icon",onClick:a[1]||(a[1]=r=>u.value=!0)},[t(e(I))])),t(f,{language:"JavaScript",code:e(x)},null,8,["code"])]),K,n("div",M,[e(m)?(i(),l("div",{key:0,class:"copy-icon",onClick:a[2]||(a[2]=r=>v(e(b),"data"))},[t(e(h))])):(i(),l("div",{key:1,class:"copy-icon",onClick:a[3]||(a[3]=r=>m.value=!0)},[t(e(I))])),t(f,{language:"Xml",code:e(b)},null,8,["code"])]),Y,n("div",Z,[e(_)?(i(),l("div",{key:0,class:"copy-icon",onClick:a[4]||(a[4]=r=>v(e(S),"err"))},[t(e(h))])):(i(),l("div",{key:1,class:"copy-icon",onClick:a[5]||(a[5]=r=>_.value=!0)},[t(e(I))])),t(f,{language:"Xml",code:e(S)},null,8,["code"])])])])}}},oe=T(ee,[["__scopeId","data-v-4a5e5acb"]]);export{oe as default};
