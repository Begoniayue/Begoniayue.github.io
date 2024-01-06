import{u as O}from"./index-BA9CNwg-.js";import{_ as V}from"./_plugin-vue_export-helper-x3n3nnut.js";import{r as n,a as m,o as i,g as l,f as a,t as h,d as e,b as t,w as o,h as d,m as L,C as x,k as C,p as X,e as D}from"./index-mNOZYs86.js";const r=p=>(X("data-v-0c73cb4f"),p=p(),D(),p),E={class:"user-content"},H={class:"header"},J={class:"user-body"},M={class:"api-tag"},P={class:"code-block"},z=r(()=>a("div",{class:"request-params"},"请求参数:",-1)),A=r(()=>a("div",{class:"response-params"},"返回数据:",-1)),G=r(()=>a("div",{class:"request-params"},"请求参数示例",-1)),K={class:"code-light"},Q=r(()=>a("div",{class:"response-params"},"成功返回示例",-1)),R={class:"code-light"},Y=r(()=>a("div",{class:"response-params"},"错误返回示例",-1)),Z={class:"code-light"},ee={__name:"UploadImg",setup(p){const{toClipboard:B}=O(),T=n("发送图片"),W=n("/Msg/UploadImg"),F=n("POST"),U=[{title:"参数名",dataIndex:"name",key:"name"},{title:"必选",dataIndex:"flag",key:"flag"},{title:"类型",dataIndex:"type",key:"type"},{title:"说明",dataIndex:"interpretation",key:"interpretation"}],j=[{title:"参数名",dataIndex:"name",key:"name"},{title:"类型",dataIndex:"type",key:"type"},{title:"说明",dataIndex:"interpretation",key:"interpretation"}],w=n([{name:"Base64",flag:"否",type:"string",interpretation:"请注意base64格式 "},{name:"ToWxid",flag:"否",type:"string",interpretation:""},{name:"Wxid",flag:"否",type:"string",interpretation:"Wxid == 微信id"}]),N=n([{name:"code",type:"string",interpretation:"200成功"},{name:"description",type:"string",interpretation:"返回数据"},{name:"message",type:"string",interpretation:"反馈信息"}]),I=n(`{
    "Base64": "string",
    "ToWxid": "string",
    "Wxid": "string"
}`),b=n(`{
 "code": "number",
 "description": "string",
}`),S=n(`{
    "message": "失败",
    "code": "1001",
    "data": null
}`),u=n(!0),g=n(!0),_=n(!0),v=($,s)=>{s==="code"&&(u.value=!u.value),s==="data"&&(g.value=!g.value),s==="err"&&(_.value=!_.value),B($),L.success("复制成功")};return($,s)=>{const y=m("a-tag"),f=m("a-tooltip"),q=m("a-table"),k=m("highlightjs");return i(),l("div",E,[a("div",H,h(e(T)),1),a("div",J,[a("div",M,[t(f,null,{title:o(()=>[d("请求方法")]),default:o(()=>[a("span",null,[t(y,{color:"#108ee9"},{default:o(()=>[d(h(e(F)),1)]),_:1})])]),_:1}),t(f,null,{title:o(()=>[d("接口状态")]),default:o(()=>[a("span",null,[t(y,{color:"#e6a23c"},{default:o(()=>[d("有效")]),_:1})])]),_:1}),d(),t(f,null,{title:o(()=>[d("Headers")]),default:o(()=>[a("span",null,[t(y,{color:"#e6a23c"},{default:o(()=>[d("Content-Type：application/json")]),_:1})])]),_:1})]),a("div",P,[a("code",null,h(e(W)),1)]),z,t(q,{columns:U,"data-source":e(w),bordered:"",pagination:!1},null,8,["data-source"]),A,t(q,{columns:j,"data-source":e(N),bordered:"",pagination:!1},null,8,["data-source"]),G,a("div",K,[e(u)?(i(),l("div",{key:0,class:"copy-icon",onClick:s[0]||(s[0]=c=>v(e(I),"code"))},[t(e(x))])):(i(),l("div",{key:1,class:"copy-icon",onClick:s[1]||(s[1]=c=>u.value=!0)},[t(e(C))])),t(k,{language:"JavaScript",code:e(I)},null,8,["code"])]),Q,a("div",R,[e(g)?(i(),l("div",{key:0,class:"copy-icon",onClick:s[2]||(s[2]=c=>v(e(b),"data"))},[t(e(x))])):(i(),l("div",{key:1,class:"copy-icon",onClick:s[3]||(s[3]=c=>g.value=!0)},[t(e(C))])),t(k,{language:"Xml",code:e(b)},null,8,["code"])]),Y,a("div",Z,[e(_)?(i(),l("div",{key:0,class:"copy-icon",onClick:s[4]||(s[4]=c=>v(e(S),"err"))},[t(e(x))])):(i(),l("div",{key:1,class:"copy-icon",onClick:s[5]||(s[5]=c=>_.value=!0)},[t(e(C))])),t(k,{language:"Xml",code:e(S)},null,8,["code"])])])])}}},ne=V(ee,[["__scopeId","data-v-0c73cb4f"]]);export{ne as default};