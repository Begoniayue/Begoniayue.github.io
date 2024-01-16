import{u as O}from"./index-CSU6RxZ9.js";import{_ as D}from"./_plugin-vue_export-helper-x3n3nnut.js";import{r as s,a as m,b as i,f as l,d as n,t as C,e,h as t,w as o,x as L,m as r,C as h,y as x,p as X,j as A}from"./index-ZKZBXv4v.js";const c=p=>(X("data-v-813afff9"),p=p(),A(),p),E={class:"user-content"},H={class:"header"},J={class:"user-body"},M={class:"api-tag"},P={class:"code-block"},U=c(()=>n("div",{class:"request-params"},"请求参数:",-1)),z=c(()=>n("div",{class:"response-params"},"返回数据:",-1)),G=c(()=>n("div",{class:"request-params"},"请求参数示例",-1)),K={class:"code-light"},Q=c(()=>n("div",{class:"response-params"},"成功返回示例",-1)),R={class:"code-light"},Y=c(()=>n("div",{class:"response-params"},"错误返回示例",-1)),Z={class:"code-light"},ee={__name:"ShareCard",setup(p){const{toClipboard:q}=O(),N=s("分享名片"),W=s("/Msg/ShareCard"),j=s("POST"),w=[{title:"参数名",dataIndex:"name",key:"name"},{title:"必选",dataIndex:"flag",key:"flag"},{title:"类型",dataIndex:"type",key:"type"},{title:"说明",dataIndex:"interpretation",key:"interpretation"}],B=[{title:"参数名",dataIndex:"name",key:"name"},{title:"类型",dataIndex:"type",key:"type"},{title:"说明",dataIndex:"interpretation",key:"interpretation"}],F=s([{name:"CardAlias",flag:"否",type:"string",interpretation:"名片别名"},{name:"CardNickName",flag:"否",type:"string",interpretation:"名片昵称"},{name:"CardWxId",flag:"否",type:"string",interpretation:"名片wxid"},{name:"ToWxid",flag:"否",type:"string",interpretation:"接收的微信ID"},{name:"Wxid",flag:"否",type:"string",interpretation:""}]),V=s([{name:"code",type:"string",interpretation:"200成功"},{name:"description",type:"string",interpretation:"返回数据"},{name:"message",type:"string",interpretation:"反馈信息"}]),I=s(`{
    "Base64": "string",
    "ToWxid": "string",
    "Type": 0,
    "VoiceTime": 0,
    "Wxid": "string"
}`),b=s(`{
 "code": "number",
 "description": "string",
}`),S=s(`{
    "message": "失败",
    "code": "1001",
    "data": null
}`),u=s(!0),g=s(!0),_=s(!0),v=(T,a)=>{a==="code"&&(u.value=!u.value),a==="data"&&(g.value=!g.value),a==="err"&&(_.value=!_.value),q(T),L.success("复制成功")};return(T,a)=>{const y=m("a-tag"),f=m("a-tooltip"),$=m("a-table"),k=m("highlightjs");return i(),l("div",E,[n("div",H,C(e(N)),1),n("div",J,[n("div",M,[t(f,null,{title:o(()=>[r("请求方法")]),default:o(()=>[n("span",null,[t(y,{color:"#108ee9"},{default:o(()=>[r(C(e(j)),1)]),_:1})])]),_:1}),t(f,null,{title:o(()=>[r("接口状态")]),default:o(()=>[n("span",null,[t(y,{color:"#e6a23c"},{default:o(()=>[r("有效")]),_:1})])]),_:1}),t(f,null,{title:o(()=>[r("Headers")]),default:o(()=>[n("span",null,[t(y,{color:"#e6a23c"},{default:o(()=>[r("Content-Type：application/json")]),_:1})])]),_:1})]),n("div",P,[n("code",null,C(e(W)),1)]),U,t($,{columns:w,"data-source":e(F),bordered:"",pagination:!1},null,8,["data-source"]),z,t($,{columns:B,"data-source":e(V),bordered:"",pagination:!1},null,8,["data-source"]),G,n("div",K,[e(u)?(i(),l("div",{key:0,class:"copy-icon",onClick:a[0]||(a[0]=d=>v(e(I),"code"))},[t(e(h))])):(i(),l("div",{key:1,class:"copy-icon",onClick:a[1]||(a[1]=d=>u.value=!0)},[t(e(x))])),t(k,{language:"JavaScript",code:e(I)},null,8,["code"])]),Q,n("div",R,[e(g)?(i(),l("div",{key:0,class:"copy-icon",onClick:a[2]||(a[2]=d=>v(e(b),"data"))},[t(e(h))])):(i(),l("div",{key:1,class:"copy-icon",onClick:a[3]||(a[3]=d=>g.value=!0)},[t(e(x))])),t(k,{language:"Xml",code:e(b)},null,8,["code"])]),Y,n("div",Z,[e(_)?(i(),l("div",{key:0,class:"copy-icon",onClick:a[4]||(a[4]=d=>v(e(S),"err"))},[t(e(h))])):(i(),l("div",{key:1,class:"copy-icon",onClick:a[5]||(a[5]=d=>_.value=!0)},[t(e(x))])),t(k,{language:"Xml",code:e(S)},null,8,["code"])])])])}}},se=D(ee,[["__scopeId","data-v-813afff9"]]);export{se as default};