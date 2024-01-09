import{u as O}from"./index-B_WWDWWy.js";import{_ as R}from"./_plugin-vue_export-helper-x3n3nnut.js";import{r as a,a as g,o as i,g as l,f as n,t as C,d as t,b as e,w as s,j as c,m as V,C as h,k as x,p as L,e as W}from"./index-48LKXzQB.js";const r=p=>(L("data-v-5c86432f"),p=p(),W(),p),X={class:"user-content"},E={class:"header"},H={class:"user-body"},J={class:"api-tag"},P={class:"code-block"},U=r(()=>n("div",{class:"request-params"},"请求参数:",-1)),z=r(()=>n("div",{class:"response-params"},"返回数据:",-1)),A=r(()=>n("div",{class:"request-params"},"请求参数示例",-1)),K={class:"code-light"},M=r(()=>n("div",{class:"response-params"},"成功返回示例",-1)),Q={class:"code-light"},Y=r(()=>n("div",{class:"response-params"},"错误返回示例",-1)),Z={class:"code-light"},tt={__name:"GetContractDetail",setup(p){const{toClipboard:w}=O(),F=a("获取通讯录好友详情(20上限)"),T=a("/Friend/GetContractDetail"),j=a("POST"),D=[{title:"参数名",dataIndex:"name",key:"name"},{title:"必选",dataIndex:"flag",key:"flag"},{title:"类型",dataIndex:"type",key:"type"},{title:"说明",dataIndex:"interpretation",key:"interpretation"}],B=[{title:"参数名",dataIndex:"name",key:"name"},{title:"类型",dataIndex:"type",key:"type"},{title:"说明",dataIndex:"interpretation",key:"interpretation"}],G=a([{name:"ChatRoom",flag:"否",type:"string",interpretation:""},{name:"Towxids",flag:"否",type:"string",interpretation:"多个微信请用,隔开(最多20个),ChatRoom请留空"},{name:"Wxid",flag:"否",type:"string",interpretation:""}]),N=a([{name:"code",type:"string",interpretation:"200成功"},{name:"description",type:"string",interpretation:"返回数据"},{name:"message",type:"string",interpretation:"反馈信息"}]),I=a(`{
    "ChatRoom": "string",
    "Towxids": "string",
    "Wxid": "string"
}`),b=a(`{
 "code": "number",
 "description": "string",
}`),S=a(`{
    "message": "失败",
    "code": "1001",
    "data": null
}`),u=a(!0),_=a(!0),m=a(!0),v=($,o)=>{o==="code"&&(u.value=!u.value),o==="data"&&(_.value=!_.value),o==="err"&&(m.value=!m.value),w($),V.success("复制成功")};return($,o)=>{const y=g("a-tag"),f=g("a-tooltip"),q=g("a-table"),k=g("highlightjs");return i(),l("div",X,[n("div",E,C(t(F)),1),n("div",H,[n("div",J,[e(f,null,{title:s(()=>[c("请求方法")]),default:s(()=>[n("span",null,[e(y,{color:"#108ee9"},{default:s(()=>[c(C(t(j)),1)]),_:1})])]),_:1}),e(f,null,{title:s(()=>[c("接口状态")]),default:s(()=>[n("span",null,[e(y,{color:"#e6a23c"},{default:s(()=>[c("有效")]),_:1})])]),_:1}),c(),e(f,null,{title:s(()=>[c("Headers")]),default:s(()=>[n("span",null,[e(y,{color:"#e6a23c"},{default:s(()=>[c("Content-Type：application/json")]),_:1})])]),_:1})]),n("div",P,[n("code",null,C(t(T)),1)]),U,e(q,{columns:D,"data-source":t(G),bordered:"",pagination:!1},null,8,["data-source"]),z,e(q,{columns:B,"data-source":t(N),bordered:"",pagination:!1},null,8,["data-source"]),A,n("div",K,[t(u)?(i(),l("div",{key:0,class:"copy-icon",onClick:o[0]||(o[0]=d=>v(t(I),"code"))},[e(t(h))])):(i(),l("div",{key:1,class:"copy-icon",onClick:o[1]||(o[1]=d=>u.value=!0)},[e(t(x))])),e(k,{language:"JavaScript",code:t(I)},null,8,["code"])]),M,n("div",Q,[t(_)?(i(),l("div",{key:0,class:"copy-icon",onClick:o[2]||(o[2]=d=>v(t(b),"data"))},[e(t(h))])):(i(),l("div",{key:1,class:"copy-icon",onClick:o[3]||(o[3]=d=>_.value=!0)},[e(t(x))])),e(k,{language:"Xml",code:t(b)},null,8,["code"])]),Y,n("div",Z,[t(m)?(i(),l("div",{key:0,class:"copy-icon",onClick:o[4]||(o[4]=d=>v(t(S),"err"))},[e(t(h))])):(i(),l("div",{key:1,class:"copy-icon",onClick:o[5]||(o[5]=d=>m.value=!0)},[e(t(x))])),e(k,{language:"Xml",code:t(S)},null,8,["code"])])])])}}},at=R(tt,[["__scopeId","data-v-5c86432f"]]);export{at as default};
