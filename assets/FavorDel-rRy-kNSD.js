import{u as V}from"./index-BA9CNwg-.js";import{_ as L}from"./_plugin-vue_export-helper-x3n3nnut.js";import{r as a,a as m,o as l,g as i,f as s,t as h,d as e,b as t,w as n,h as d,m as W,C,k as x,p as X,e as E}from"./index-mNOZYs86.js";const r=p=>(X("data-v-27906309"),p=p(),E(),p),H={class:"user-content"},J={class:"header"},P={class:"user-body"},U={class:"api-tag"},z={class:"code-block"},A=r(()=>s("div",{class:"request-params"},"请求参数:",-1)),G=r(()=>s("div",{class:"response-params"},"返回数据:",-1)),K=r(()=>s("div",{class:"request-params"},"请求参数示例",-1)),M={class:"code-light"},Q=r(()=>s("div",{class:"response-params"},"成功返回示例",-1)),R={class:"code-light"},Y=r(()=>s("div",{class:"response-params"},"错误返回示例",-1)),Z={class:"code-light"},ee={__name:"FavorDel",setup(p){const{toClipboard:q}=V(),D=a("删除收藏"),j=a("/Favor/Del"),w=a("POST"),B=[{title:"参数名",dataIndex:"name",key:"name"},{title:"必选",dataIndex:"flag",key:"flag"},{title:"类型",dataIndex:"type",key:"type"},{title:"说明",dataIndex:"interpretation",key:"interpretation"}],N=[{title:"参数名",dataIndex:"name",key:"name"},{title:"类型",dataIndex:"type",key:"type"},{title:"说明",dataIndex:"interpretation",key:"interpretation"}],O=a([{name:"FavId",flag:"否",type:"integer",interpretation:""},{name:"Wxid",flag:"否",type:"string",interpretation:""}]),T=a([{name:"code",type:"string",interpretation:"200成功"},{name:"description",type:"string",interpretation:"返回数据"},{name:"message",type:"string",interpretation:"反馈信息"}]),I=a(`{
    "FavId": "integer",
    "Wxid": "string"
}`),b=a(`{
 "code": "number",
 "description": "string",
}`),F=a(`{
    "message": "失败",
    "code": "1001",
    "data": null
}`),u=a(!0),_=a(!0),v=a(!0),g=(S,o)=>{o==="code"&&(u.value=!u.value),o==="data"&&(_.value=!_.value),o==="err"&&(v.value=!v.value),q(S),W.success("复制成功")};return(S,o)=>{const y=m("a-tag"),f=m("a-tooltip"),$=m("a-table"),k=m("highlightjs");return l(),i("div",H,[s("div",J,h(e(D)),1),s("div",P,[s("div",U,[t(f,null,{title:n(()=>[d("请求方法")]),default:n(()=>[s("span",null,[t(y,{color:"#108ee9"},{default:n(()=>[d(h(e(w)),1)]),_:1})])]),_:1}),t(f,null,{title:n(()=>[d("接口状态")]),default:n(()=>[s("span",null,[t(y,{color:"#e6a23c"},{default:n(()=>[d("有效")]),_:1})])]),_:1}),d(),t(f,null,{title:n(()=>[d("Headers")]),default:n(()=>[s("span",null,[t(y,{color:"#e6a23c"},{default:n(()=>[d("Content-Type：application/json")]),_:1})])]),_:1})]),s("div",z,[s("code",null,h(e(j)),1)]),A,t($,{columns:B,"data-source":e(O),bordered:"",pagination:!1},null,8,["data-source"]),G,t($,{columns:N,"data-source":e(T),bordered:"",pagination:!1},null,8,["data-source"]),K,s("div",M,[e(u)?(l(),i("div",{key:0,class:"copy-icon",onClick:o[0]||(o[0]=c=>g(e(I),"code"))},[t(e(C))])):(l(),i("div",{key:1,class:"copy-icon",onClick:o[1]||(o[1]=c=>u.value=!0)},[t(e(x))])),t(k,{language:"JavaScript",code:e(I)},null,8,["code"])]),Q,s("div",R,[e(_)?(l(),i("div",{key:0,class:"copy-icon",onClick:o[2]||(o[2]=c=>g(e(b),"data"))},[t(e(C))])):(l(),i("div",{key:1,class:"copy-icon",onClick:o[3]||(o[3]=c=>_.value=!0)},[t(e(x))])),t(k,{language:"Xml",code:e(b)},null,8,["code"])]),Y,s("div",Z,[e(v)?(l(),i("div",{key:0,class:"copy-icon",onClick:o[4]||(o[4]=c=>g(e(F),"err"))},[t(e(C))])):(l(),i("div",{key:1,class:"copy-icon",onClick:o[5]||(o[5]=c=>v.value=!0)},[t(e(x))])),t(k,{language:"Xml",code:e(F)},null,8,["code"])])])])}}},ae=L(ee,[["__scopeId","data-v-27906309"]]);export{ae as default};
