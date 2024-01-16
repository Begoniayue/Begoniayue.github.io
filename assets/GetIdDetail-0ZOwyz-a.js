import{u as O}from"./index-CSU6RxZ9.js";import{_ as V}from"./_plugin-vue_export-helper-x3n3nnut.js";import{r as s,a as m,b as i,f as l,d as n,t as I,e,h as t,w as o,m as d,x as L,C as h,y as x,p as W,j as X}from"./index-ZKZBXv4v.js";const c=p=>(W("data-v-5aaca289"),p=p(),X(),p),E={class:"user-content"},H={class:"header"},J={class:"user-body"},P={class:"api-tag"},U={class:"code-block"},z=c(()=>n("div",{class:"request-params"},"请求参数:",-1)),A=c(()=>n("div",{class:"response-params"},"返回数据:",-1)),K=c(()=>n("div",{class:"request-params"},"请求参数示例",-1)),M={class:"code-light"},Q=c(()=>n("div",{class:"response-params"},"成功返回示例",-1)),R={class:"code-light"},Y=c(()=>n("div",{class:"response-params"},"错误返回示例",-1)),Z={class:"code-light"},ee={__name:"GetIdDetail",setup(p){const{toClipboard:w}=O(),D=s("获取特定ID详情内容"),F=s("/FriendCircle/GetIdDetail"),T=s("POST"),j=[{title:"参数名",dataIndex:"name",key:"name"},{title:"必选",dataIndex:"flag",key:"flag"},{title:"类型",dataIndex:"type",key:"type"},{title:"说明",dataIndex:"interpretation",key:"interpretation"}],B=[{title:"参数名",dataIndex:"name",key:"name"},{title:"类型",dataIndex:"type",key:"type"},{title:"说明",dataIndex:"interpretation",key:"interpretation"}],G=s([{name:"Id",flag:"否",type:"integer",interpretation:"Id为当前朋友圈内容的id"},{name:"IdStr",flag:"否",type:"string",interpretation:""},{name:"Towxid",flag:"否",type:"string",interpretation:""},{name:"Wxid",flag:"否",type:"string",interpretation:""}]),N=s([{name:"code",type:"string",interpretation:"200成功"},{name:"description",type:"string",interpretation:"返回数据"},{name:"message",type:"string",interpretation:"反馈信息"}]),C=s(`{
    "Id": "0",
    "IdStr": "string"
    "Towxid": "string"
    "Wxid": "string"
}`),b=s(`{
 "code": "number",
 "description": "string",
}`),S=s(`{
    "message": "失败",
    "code": "1001",
    "data": null
}`),u=s(!0),_=s(!0),g=s(!0),v=($,a)=>{a==="code"&&(u.value=!u.value),a==="data"&&(_.value=!_.value),a==="err"&&(g.value=!g.value),w($),L.success("复制成功")};return($,a)=>{const y=m("a-tag"),f=m("a-tooltip"),q=m("a-table"),k=m("highlightjs");return i(),l("div",E,[n("div",H,I(e(D)),1),n("div",J,[n("div",P,[t(f,null,{title:o(()=>[d("请求方法")]),default:o(()=>[n("span",null,[t(y,{color:"#108ee9"},{default:o(()=>[d(I(e(T)),1)]),_:1})])]),_:1}),t(f,null,{title:o(()=>[d("接口状态")]),default:o(()=>[n("span",null,[t(y,{color:"#e6a23c"},{default:o(()=>[d("有效")]),_:1})])]),_:1}),d(),t(f,null,{title:o(()=>[d("Headers")]),default:o(()=>[n("span",null,[t(y,{color:"#e6a23c"},{default:o(()=>[d("Content-Type：application/json")]),_:1})])]),_:1})]),n("div",U,[n("code",null,I(e(F)),1)]),z,t(q,{columns:j,"data-source":e(G),bordered:"",pagination:!1},null,8,["data-source"]),A,t(q,{columns:B,"data-source":e(N),bordered:"",pagination:!1},null,8,["data-source"]),K,n("div",M,[e(u)?(i(),l("div",{key:0,class:"copy-icon",onClick:a[0]||(a[0]=r=>v(e(C),"code"))},[t(e(h))])):(i(),l("div",{key:1,class:"copy-icon",onClick:a[1]||(a[1]=r=>u.value=!0)},[t(e(x))])),t(k,{language:"JavaScript",code:e(C)},null,8,["code"])]),Q,n("div",R,[e(_)?(i(),l("div",{key:0,class:"copy-icon",onClick:a[2]||(a[2]=r=>v(e(b),"data"))},[t(e(h))])):(i(),l("div",{key:1,class:"copy-icon",onClick:a[3]||(a[3]=r=>_.value=!0)},[t(e(x))])),t(k,{language:"Xml",code:e(b)},null,8,["code"])]),Y,n("div",Z,[e(g)?(i(),l("div",{key:0,class:"copy-icon",onClick:a[4]||(a[4]=r=>v(e(S),"err"))},[t(e(h))])):(i(),l("div",{key:1,class:"copy-icon",onClick:a[5]||(a[5]=r=>g.value=!0)},[t(e(x))])),t(k,{language:"Xml",code:e(S)},null,8,["code"])])])])}}},se=V(ee,[["__scopeId","data-v-5aaca289"]]);export{se as default};