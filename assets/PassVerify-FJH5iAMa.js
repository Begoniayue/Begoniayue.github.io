import{u as T}from"./index-BA9CNwg-.js";import{_ as L}from"./_plugin-vue_export-helper-x3n3nnut.js";import{r as a,a as m,o as i,g as l,f as s,t as h,d as e,b as t,w as o,h as r,m as W,C,k as x,p as X,e as D}from"./index-mNOZYs86.js";const d=p=>(X("data-v-23ae081b"),p=p(),D(),p),E={class:"user-content"},H={class:"header"},J={class:"user-body"},U={class:"api-tag"},z={class:"code-block"},A=d(()=>s("div",{class:"request-params"},"请求参数:",-1)),G=d(()=>s("div",{class:"response-params"},"返回数据:",-1)),K=d(()=>s("div",{class:"request-params"},"请求参数示例",-1)),M={class:"code-light"},Q=d(()=>s("div",{class:"response-params"},"成功返回示例",-1)),R={class:"code-light"},Y=d(()=>s("div",{class:"response-params"},"错误返回示例",-1)),Z={class:"code-light"},ee={__name:"PassVerify",setup(p){const{toClipboard:q}=T(),F=a("通过好友请求"),P=a("/Friend/PassVerify"),j=a("POST"),w=[{title:"参数名",dataIndex:"name",key:"name"},{title:"必选",dataIndex:"flag",key:"flag"},{title:"类型",dataIndex:"type",key:"type"},{title:"说明",dataIndex:"interpretation",key:"interpretation"}],B=[{title:"参数名",dataIndex:"name",key:"name"},{title:"类型",dataIndex:"type",key:"type"},{title:"说明",dataIndex:"interpretation",key:"interpretation"}],N=a([{name:"Scene",flag:"否",type:"integer",interpretation:"代表来源,请在消息中的xml中获取"},{name:"V1",flag:"否",type:"string ",interpretation:""},{name:"V2",flag:"否",type:"string",interpretation:""},{name:"Wxid",flag:"否",type:"string",interpretation:""}]),O=a([{name:"code",type:"string",interpretation:"200成功"},{name:"description",type:"string",interpretation:"返回数据"},{name:"message",type:"string",interpretation:"反馈信息"}]),b=a(`{
    "Scene": "0",
    "V1": "string"
    "V2": "string"
    "Wxid": "string"
}`),I=a(`{
 "code": "number",
 "description": "string",
}`),V=a(`{
    "message": "失败",
    "code": "1001",
    "data": null
}`),u=a(!0),_=a(!0),g=a(!0),v=(S,n)=>{n==="code"&&(u.value=!u.value),n==="data"&&(_.value=!_.value),n==="err"&&(g.value=!g.value),q(S),W.success("复制成功")};return(S,n)=>{const y=m("a-tag"),f=m("a-tooltip"),$=m("a-table"),k=m("highlightjs");return i(),l("div",E,[s("div",H,h(e(F)),1),s("div",J,[s("div",U,[t(f,null,{title:o(()=>[r("请求方法")]),default:o(()=>[s("span",null,[t(y,{color:"#108ee9"},{default:o(()=>[r(h(e(j)),1)]),_:1})])]),_:1}),t(f,null,{title:o(()=>[r("接口状态")]),default:o(()=>[s("span",null,[t(y,{color:"#e6a23c"},{default:o(()=>[r("有效")]),_:1})])]),_:1}),r(),t(f,null,{title:o(()=>[r("Headers")]),default:o(()=>[s("span",null,[t(y,{color:"#e6a23c"},{default:o(()=>[r("Content-Type：application/json")]),_:1})])]),_:1})]),s("div",z,[s("code",null,h(e(P)),1)]),A,t($,{columns:w,"data-source":e(N),bordered:"",pagination:!1},null,8,["data-source"]),G,t($,{columns:B,"data-source":e(O),bordered:"",pagination:!1},null,8,["data-source"]),K,s("div",M,[e(u)?(i(),l("div",{key:0,class:"copy-icon",onClick:n[0]||(n[0]=c=>v(e(b),"code"))},[t(e(C))])):(i(),l("div",{key:1,class:"copy-icon",onClick:n[1]||(n[1]=c=>u.value=!0)},[t(e(x))])),t(k,{language:"JavaScript",code:e(b)},null,8,["code"])]),Q,s("div",R,[e(_)?(i(),l("div",{key:0,class:"copy-icon",onClick:n[2]||(n[2]=c=>v(e(I),"data"))},[t(e(C))])):(i(),l("div",{key:1,class:"copy-icon",onClick:n[3]||(n[3]=c=>_.value=!0)},[t(e(x))])),t(k,{language:"Xml",code:e(I)},null,8,["code"])]),Y,s("div",Z,[e(g)?(i(),l("div",{key:0,class:"copy-icon",onClick:n[4]||(n[4]=c=>v(e(V),"err"))},[t(e(C))])):(i(),l("div",{key:1,class:"copy-icon",onClick:n[5]||(n[5]=c=>g.value=!0)},[t(e(x))])),t(k,{language:"Xml",code:e(V)},null,8,["code"])])])])}}},ae=L(ee,[["__scopeId","data-v-23ae081b"]]);export{ae as default};
