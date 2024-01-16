import{u as O}from"./index-CSU6RxZ9.js";import{_ as T}from"./_plugin-vue_export-helper-x3n3nnut.js";import{r as n,a as v,b as i,f as l,d as o,t as h,e,h as t,w as a,m as c,x as V,C,y as x,p as K,j as W}from"./index-ZKZBXv4v.js";const r=p=>(K("data-v-ff6a0928"),p=p(),W(),p),X={class:"user-content"},D={class:"header"},E={class:"user-body"},H={class:"api-tag"},J={class:"code-block"},P=r(()=>o("div",{class:"request-params"},"请求参数:",-1)),U=r(()=>o("div",{class:"response-params"},"返回数据:",-1)),z=r(()=>o("div",{class:"request-params"},"请求参数示例",-1)),M={class:"code-light"},Q=r(()=>o("div",{class:"response-params"},"成功返回示例",-1)),R={class:"code-light"},Y=r(()=>o("div",{class:"response-params"},"错误返回示例",-1)),Z={class:"code-light"},ee={__name:"GroupListApi",setup(p){const{toClipboard:L}=O(),j=n("同步群"),F=n("/Group/GroupListApi"),G=n("POST"),w=[{title:"参数名",dataIndex:"name",key:"name"},{title:"必选",dataIndex:"flag",key:"flag"},{title:"类型",dataIndex:"type",key:"type"},{title:"说明",dataIndex:"interpretation",key:"interpretation"}],A=[{title:"参数名",dataIndex:"name",key:"name"},{title:"类型",dataIndex:"type",key:"type"},{title:"说明",dataIndex:"interpretation",key:"interpretation"}],B=n([{name:"Key",flag:"否",type:"string",interpretation:""},{name:"Wxid",flag:"否",type:"string",interpretation:""}]),N=n([{name:"code",type:"string",interpretation:"200成功"},{name:"description",type:"string",interpretation:"返回数据"},{name:"message",type:"string",interpretation:"反馈信息"}]),I=n(`{
    "Key": "string",
    "Wxid": "string"
}`),b=n(`{
 "code": "number",
 "description": "string",
}`),S=n(`{
    "message": "失败",
    "code": "1001",
    "data": null
}`),u=n(!0),_=n(!0),m=n(!0),g=($,s)=>{s==="code"&&(u.value=!u.value),s==="data"&&(_.value=!_.value),s==="err"&&(m.value=!m.value),L($),V.success("复制成功")};return($,s)=>{const y=v("a-tag"),f=v("a-tooltip"),q=v("a-table"),k=v("highlightjs");return i(),l("div",X,[o("div",D,h(e(j)),1),o("div",E,[o("div",H,[t(f,null,{title:a(()=>[c("请求方法")]),default:a(()=>[o("span",null,[t(y,{color:"#108ee9"},{default:a(()=>[c(h(e(G)),1)]),_:1})])]),_:1}),t(f,null,{title:a(()=>[c("接口状态")]),default:a(()=>[o("span",null,[t(y,{color:"#e6a23c"},{default:a(()=>[c("有效")]),_:1})])]),_:1}),c(),t(f,null,{title:a(()=>[c("Headers")]),default:a(()=>[o("span",null,[t(y,{color:"#e6a23c"},{default:a(()=>[c("Content-Type：application/json")]),_:1})])]),_:1})]),o("div",J,[o("code",null,h(e(F)),1)]),P,t(q,{columns:w,"data-source":e(B),bordered:"",pagination:!1},null,8,["data-source"]),U,t(q,{columns:A,"data-source":e(N),bordered:"",pagination:!1},null,8,["data-source"]),z,o("div",M,[e(u)?(i(),l("div",{key:0,class:"copy-icon",onClick:s[0]||(s[0]=d=>g(e(I),"code"))},[t(e(C))])):(i(),l("div",{key:1,class:"copy-icon",onClick:s[1]||(s[1]=d=>u.value=!0)},[t(e(x))])),t(k,{language:"JavaScript",code:e(I)},null,8,["code"])]),Q,o("div",R,[e(_)?(i(),l("div",{key:0,class:"copy-icon",onClick:s[2]||(s[2]=d=>g(e(b),"data"))},[t(e(C))])):(i(),l("div",{key:1,class:"copy-icon",onClick:s[3]||(s[3]=d=>_.value=!0)},[t(e(x))])),t(k,{language:"Xml",code:e(b)},null,8,["code"])]),Y,o("div",Z,[e(m)?(i(),l("div",{key:0,class:"copy-icon",onClick:s[4]||(s[4]=d=>g(e(S),"err"))},[t(e(C))])):(i(),l("div",{key:1,class:"copy-icon",onClick:s[5]||(s[5]=d=>m.value=!0)},[t(e(x))])),t(k,{language:"Xml",code:e(S)},null,8,["code"])])])])}}},ne=T(ee,[["__scopeId","data-v-ff6a0928"]]);export{ne as default};