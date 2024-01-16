import{u as O}from"./index-CSU6RxZ9.js";import{_ as Q}from"./_plugin-vue_export-helper-x3n3nnut.js";import{r as a,a as v,b as i,f as l,d as s,t as h,e,h as t,w as n,m as c,x as R,C,y as b,p as T,j as V}from"./index-ZKZBXv4v.js";const r=p=>(T("data-v-3e17c92b"),p=p(),V(),p),L={class:"user-content"},W={class:"header"},X={class:"user-body"},E={class:"api-tag"},H={class:"code-block"},J=r(()=>s("div",{class:"request-params"},"请求参数:",-1)),P=r(()=>s("div",{class:"response-params"},"返回数据:",-1)),U=r(()=>s("div",{class:"request-params"},"请求参数示例",-1)),z={class:"code-light"},A=r(()=>s("div",{class:"response-params"},"成功返回示例",-1)),K={class:"code-light"},Y=r(()=>s("div",{class:"response-params"},"错误返回示例",-1)),Z={class:"code-light"},ee={__name:"GetChatRoomMemberDetail",setup(p){const{toClipboard:q}=O(),j=a("获取群成员"),F=a("/Group/GetChatRoomMemberDetail"),G=a("POST"),w=[{title:"参数名",dataIndex:"name",key:"name"},{title:"必选",dataIndex:"flag",key:"flag"},{title:"类型",dataIndex:"type",key:"type"},{title:"说明",dataIndex:"interpretation",key:"interpretation"}],B=[{title:"参数名",dataIndex:"name",key:"name"},{title:"类型",dataIndex:"type",key:"type"},{title:"说明",dataIndex:"interpretation",key:"interpretation"}],M=a([{name:"QID",flag:"否",type:"string",interpretation:"QID == 群ID"},{name:"Wxid",flag:"否",type:"string",interpretation:""}]),N=a([{name:"code",type:"string",interpretation:"200成功"},{name:"description",type:"string",interpretation:"返回数据"},{name:"message",type:"string",interpretation:"反馈信息"}]),x=a(`{
    "QID": "string",
    "Wxid": "string"
}`),I=a(`{
 "code": "number",
 "description": "string",
}`),D=a(`{
    "message": "失败",
    "code": "1001",
    "data": null
}`),u=a(!0),m=a(!0),_=a(!0),g=(S,o)=>{o==="code"&&(u.value=!u.value),o==="data"&&(m.value=!m.value),o==="err"&&(_.value=!_.value),q(S),R.success("复制成功")};return(S,o)=>{const y=v("a-tag"),f=v("a-tooltip"),$=v("a-table"),k=v("highlightjs");return i(),l("div",L,[s("div",W,h(e(j)),1),s("div",X,[s("div",E,[t(f,null,{title:n(()=>[c("请求方法")]),default:n(()=>[s("span",null,[t(y,{color:"#108ee9"},{default:n(()=>[c(h(e(G)),1)]),_:1})])]),_:1}),t(f,null,{title:n(()=>[c("接口状态")]),default:n(()=>[s("span",null,[t(y,{color:"#e6a23c"},{default:n(()=>[c("有效")]),_:1})])]),_:1}),c(),t(f,null,{title:n(()=>[c("Headers")]),default:n(()=>[s("span",null,[t(y,{color:"#e6a23c"},{default:n(()=>[c("Content-Type：application/json")]),_:1})])]),_:1})]),s("div",H,[s("code",null,h(e(F)),1)]),J,t($,{columns:w,"data-source":e(M),bordered:"",pagination:!1},null,8,["data-source"]),P,t($,{columns:B,"data-source":e(N),bordered:"",pagination:!1},null,8,["data-source"]),U,s("div",z,[e(u)?(i(),l("div",{key:0,class:"copy-icon",onClick:o[0]||(o[0]=d=>g(e(x),"code"))},[t(e(C))])):(i(),l("div",{key:1,class:"copy-icon",onClick:o[1]||(o[1]=d=>u.value=!0)},[t(e(b))])),t(k,{language:"JavaScript",code:e(x)},null,8,["code"])]),A,s("div",K,[e(m)?(i(),l("div",{key:0,class:"copy-icon",onClick:o[2]||(o[2]=d=>g(e(I),"data"))},[t(e(C))])):(i(),l("div",{key:1,class:"copy-icon",onClick:o[3]||(o[3]=d=>m.value=!0)},[t(e(b))])),t(k,{language:"Xml",code:e(I)},null,8,["code"])]),Y,s("div",Z,[e(_)?(i(),l("div",{key:0,class:"copy-icon",onClick:o[4]||(o[4]=d=>g(e(D),"err"))},[t(e(C))])):(i(),l("div",{key:1,class:"copy-icon",onClick:o[5]||(o[5]=d=>_.value=!0)},[t(e(b))])),t(k,{language:"Xml",code:e(D)},null,8,["code"])])])])}}},ae=Q(ee,[["__scopeId","data-v-3e17c92b"]]);export{ae as default};