import{u as V}from"./index-IKI8YSjj.js";import{_ as L}from"./_plugin-vue_export-helper-x3n3nnut.js";import{r as a,a as g,o as i,g as l,f as s,t as x,d as e,b as t,w as o,k as d,m as W,C as h,l as C,p as X,e as D}from"./index-UZnJtGCp.js";const c=p=>(X("data-v-fd46fea9"),p=p(),D(),p),E={class:"user-content"},H={class:"header"},J={class:"user-body"},P={class:"api-tag"},z={class:"code-block"},A=c(()=>s("div",{class:"request-params"},"请求参数:",-1)),G=c(()=>s("div",{class:"response-params"},"返回数据:",-1)),K=c(()=>s("div",{class:"request-params"},"请求参数示例",-1)),M={class:"code-light"},Q=c(()=>s("div",{class:"response-params"},"成功返回示例",-1)),R={class:"code-light"},Y=c(()=>s("div",{class:"response-params"},"错误返回示例",-1)),Z={class:"code-light"},ee={__name:"FinderSendText",setup(p){const{toClipboard:$}=V(),q=a("发送私信文字"),j=a("/Finder/FinderSendText"),w=a("POST"),B=[{title:"参数名",dataIndex:"name",key:"name"},{title:"必选",dataIndex:"flag",key:"flag"},{title:"类型",dataIndex:"type",key:"type"},{title:"说明",dataIndex:"interpretation",key:"interpretation"}],N=[{title:"参数名",dataIndex:"name",key:"name"},{title:"类型",dataIndex:"type",key:"type"},{title:"说明",dataIndex:"interpretation",key:"interpretation"}],O=a([{name:"FinderUsername",flag:"否",type:"string",interpretation:""},{name:"Text",flag:"否",type:"string",interpretation:""},{name:"Wxid",flag:"否",type:"string",interpretation:""}]),U=a([{name:"code",type:"string",interpretation:"200成功"},{name:"description",type:"string",interpretation:"返回数据"},{name:"message",type:"string",interpretation:"反馈信息"}]),I=a(`{
    "FinderUsername": "string",
    "Text": "string",
    "Wxid": "string"
}`),b=a(`{
 "code": "number",
 "description": "string",
}`),F=a(`{
    "message": "失败",
    "code": "1001",
    "data": null
}`),u=a(!0),_=a(!0),m=a(!0),v=(S,n)=>{n==="code"&&(u.value=!u.value),n==="data"&&(_.value=!_.value),n==="err"&&(m.value=!m.value),$(S),W.success("复制成功")};return(S,n)=>{const y=g("a-tag"),f=g("a-tooltip"),T=g("a-table"),k=g("highlightjs");return i(),l("div",E,[s("div",H,x(e(q)),1),s("div",J,[s("div",P,[t(f,null,{title:o(()=>[d("请求方法")]),default:o(()=>[s("span",null,[t(y,{color:"#108ee9"},{default:o(()=>[d(x(e(w)),1)]),_:1})])]),_:1}),t(f,null,{title:o(()=>[d("接口状态")]),default:o(()=>[s("span",null,[t(y,{color:"#e6a23c"},{default:o(()=>[d("有效")]),_:1})])]),_:1}),d(),t(f,null,{title:o(()=>[d("Headers")]),default:o(()=>[s("span",null,[t(y,{color:"#e6a23c"},{default:o(()=>[d("Content-Type：application/json")]),_:1})])]),_:1})]),s("div",z,[s("code",null,x(e(j)),1)]),A,t(T,{columns:B,"data-source":e(O),bordered:"",pagination:!1},null,8,["data-source"]),G,t(T,{columns:N,"data-source":e(U),bordered:"",pagination:!1},null,8,["data-source"]),K,s("div",M,[e(u)?(i(),l("div",{key:0,class:"copy-icon",onClick:n[0]||(n[0]=r=>v(e(I),"code"))},[t(e(h))])):(i(),l("div",{key:1,class:"copy-icon",onClick:n[1]||(n[1]=r=>u.value=!0)},[t(e(C))])),t(k,{language:"JavaScript",code:e(I)},null,8,["code"])]),Q,s("div",R,[e(_)?(i(),l("div",{key:0,class:"copy-icon",onClick:n[2]||(n[2]=r=>v(e(b),"data"))},[t(e(h))])):(i(),l("div",{key:1,class:"copy-icon",onClick:n[3]||(n[3]=r=>_.value=!0)},[t(e(C))])),t(k,{language:"Xml",code:e(b)},null,8,["code"])]),Y,s("div",Z,[e(m)?(i(),l("div",{key:0,class:"copy-icon",onClick:n[4]||(n[4]=r=>v(e(F),"err"))},[t(e(h))])):(i(),l("div",{key:1,class:"copy-icon",onClick:n[5]||(n[5]=r=>m.value=!0)},[t(e(C))])),t(k,{language:"Xml",code:e(F)},null,8,["code"])])])])}}},ae=L(ee,[["__scopeId","data-v-fd46fea9"]]);export{ae as default};
