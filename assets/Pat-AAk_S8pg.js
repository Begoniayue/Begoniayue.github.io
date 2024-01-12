import{u as N}from"./index-IKI8YSjj.js";import{_ as O}from"./_plugin-vue_export-helper-x3n3nnut.js";import{r as o,a as m,o as i,g as l,f as n,t as x,d as e,b as t,w as a,k as d,m as Q,C as h,l as C,p as V,e as L}from"./index-UZnJtGCp.js";const r=p=>(V("data-v-ee11e128"),p=p(),L(),p),X={class:"user-content"},E={class:"header"},G={class:"user-body"},H={class:"api-tag"},J={class:"code-block"},U=r(()=>n("div",{class:"request-params"},"请求参数:",-1)),z=r(()=>n("div",{class:"response-params"},"返回数据:",-1)),A=r(()=>n("div",{class:"request-params"},"请求参数示例",-1)),K={class:"code-light"},M=r(()=>n("div",{class:"response-params"},"成功返回示例",-1)),R={class:"code-light"},Y=r(()=>n("div",{class:"response-params"},"错误返回示例",-1)),Z={class:"code-light"},ee={__name:"Pat",setup(p){const{toClipboard:q}=N(),D=o("拍一拍群人员(爱她就拍她,类似@)"),W=o("/Group/Pat"),F=o("POST"),P=[{title:"参数名",dataIndex:"name",key:"name"},{title:"必选",dataIndex:"flag",key:"flag"},{title:"类型",dataIndex:"type",key:"type"},{title:"说明",dataIndex:"interpretation",key:"interpretation"}],j=[{title:"参数名",dataIndex:"name",key:"name"},{title:"类型",dataIndex:"type",key:"type"},{title:"说明",dataIndex:"interpretation",key:"interpretation"}],w=o([{name:"QID",flag:"否",type:"string",interpretation:"QID == 群ID"},{name:"ToWxid",flag:"否",type:"string",interpretation:"ToWxid == 不支持多个"},{name:"Wxid",flag:"否",type:"string",interpretation:""}]),B=o([{name:"code",type:"string",interpretation:"200成功"},{name:"description",type:"string",interpretation:"返回数据"},{name:"message",type:"string",interpretation:"反馈信息"}]),I=o(`{
    "QID": "string",
    "ToWxid": "string",
    "Wxid": "string"
}`),b=o(`{
 "code": "number",
 "description": "string",
}`),S=o(`{
    "message": "失败",
    "code": "1001",
    "data": null
}`),u=o(!0),_=o(!0),g=o(!0),v=(T,s)=>{s==="code"&&(u.value=!u.value),s==="data"&&(_.value=!_.value),s==="err"&&(g.value=!g.value),q(T),Q.success("复制成功")};return(T,s)=>{const y=m("a-tag"),f=m("a-tooltip"),$=m("a-table"),k=m("highlightjs");return i(),l("div",X,[n("div",E,x(e(D)),1),n("div",G,[n("div",H,[t(f,null,{title:a(()=>[d("请求方法")]),default:a(()=>[n("span",null,[t(y,{color:"#108ee9"},{default:a(()=>[d(x(e(F)),1)]),_:1})])]),_:1}),t(f,null,{title:a(()=>[d("接口状态")]),default:a(()=>[n("span",null,[t(y,{color:"#e6a23c"},{default:a(()=>[d("有效")]),_:1})])]),_:1}),d(),t(f,null,{title:a(()=>[d("Headers")]),default:a(()=>[n("span",null,[t(y,{color:"#e6a23c"},{default:a(()=>[d("Content-Type：application/json")]),_:1})])]),_:1})]),n("div",J,[n("code",null,x(e(W)),1)]),U,t($,{columns:P,"data-source":e(w),bordered:"",pagination:!1},null,8,["data-source"]),z,t($,{columns:j,"data-source":e(B),bordered:"",pagination:!1},null,8,["data-source"]),A,n("div",K,[e(u)?(i(),l("div",{key:0,class:"copy-icon",onClick:s[0]||(s[0]=c=>v(e(I),"code"))},[t(e(h))])):(i(),l("div",{key:1,class:"copy-icon",onClick:s[1]||(s[1]=c=>u.value=!0)},[t(e(C))])),t(k,{language:"JavaScript",code:e(I)},null,8,["code"])]),M,n("div",R,[e(_)?(i(),l("div",{key:0,class:"copy-icon",onClick:s[2]||(s[2]=c=>v(e(b),"data"))},[t(e(h))])):(i(),l("div",{key:1,class:"copy-icon",onClick:s[3]||(s[3]=c=>_.value=!0)},[t(e(C))])),t(k,{language:"Xml",code:e(b)},null,8,["code"])]),Y,n("div",Z,[e(g)?(i(),l("div",{key:0,class:"copy-icon",onClick:s[4]||(s[4]=c=>v(e(S),"err"))},[t(e(h))])):(i(),l("div",{key:1,class:"copy-icon",onClick:s[5]||(s[5]=c=>g.value=!0)},[t(e(C))])),t(k,{language:"Xml",code:e(S)},null,8,["code"])])])])}}},oe=O(ee,[["__scopeId","data-v-ee11e128"]]);export{oe as default};
