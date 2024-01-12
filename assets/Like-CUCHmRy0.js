import{u as U}from"./index-IKI8YSjj.js";import{_ as V}from"./_plugin-vue_export-helper-x3n3nnut.js";import{r as a,a as _,o as i,g as r,f as s,t as C,d as e,b as t,w as o,k as l,m as W,C as I,l as h,p as X,e as D}from"./index-UZnJtGCp.js";const c=p=>(X("data-v-e27f4b5d"),p=p(),D(),p),E={class:"user-content"},H={class:"header"},J={class:"user-body"},P={class:"api-tag"},z={class:"code-block"},A=c(()=>s("div",{class:"request-params"},"请求参数:",-1)),G=c(()=>s("div",{class:"response-params"},"返回数据:",-1)),K=c(()=>s("div",{class:"request-params"},"请求参数示例",-1)),M={class:"code-light"},Q=c(()=>s("div",{class:"response-params"},"成功返回示例",-1)),R={class:"code-light"},Y=c(()=>s("div",{class:"response-params"},"错误返回示例",-1)),Z={class:"code-light"},ee={__name:"Like",setup(p){const{toClipboard:$}=U(),j=a("点赞"),q=a("/Finder/Like"),B=a("POST"),L=[{title:"参数名",dataIndex:"name",key:"name"},{title:"必选",dataIndex:"flag",key:"flag"},{title:"类型",dataIndex:"type",key:"type"},{title:"说明",dataIndex:"interpretation",key:"interpretation"}],N=[{title:"参数名",dataIndex:"name",key:"name"},{title:"类型",dataIndex:"type",key:"type"},{title:"说明",dataIndex:"interpretation",key:"interpretation"}],w=a([{name:"CommentId",flag:"否",type:"string",interpretation:""},{name:"FinderUsername",flag:"否",type:"string",interpretation:""},{name:"Id",flag:"否",type:"string",interpretation:""},{name:"ObjectNonceId",flag:"否",type:"string",interpretation:""},{name:"Optype",flag:"否",type:"integer ",interpretation:""},{name:"SessionBuffer",flag:"否",type:"string",interpretation:""},{name:"Wxid",flag:"否",type:"string",interpretation:""}]),T=a([{name:"code",type:"string",interpretation:"200成功"},{name:"description",type:"string",interpretation:"返回数据"},{name:"message",type:"string",interpretation:"反馈信息"}]),b=a(`{
    "CommentId": "string",
    "FinderUsername": "string",
    "Id": "string",
    "ObjectNonceId": "string",
    "Optype": "0",
    "SessionBuffer": "string",
    "Wxid": "string"
}`),x=a(`{
 "code": "number",
 "description": "string",
}`),S=a(`{
    "message": "失败",
    "code": "1001",
    "data": null
}`),u=a(!0),g=a(!0),m=a(!0),v=(F,n)=>{n==="code"&&(u.value=!u.value),n==="data"&&(g.value=!g.value),n==="err"&&(m.value=!m.value),$(F),W.success("复制成功")};return(F,n)=>{const y=_("a-tag"),f=_("a-tooltip"),O=_("a-table"),k=_("highlightjs");return i(),r("div",E,[s("div",H,C(e(j)),1),s("div",J,[s("div",P,[t(f,null,{title:o(()=>[l("请求方法")]),default:o(()=>[s("span",null,[t(y,{color:"#108ee9"},{default:o(()=>[l(C(e(B)),1)]),_:1})])]),_:1}),t(f,null,{title:o(()=>[l("接口状态")]),default:o(()=>[s("span",null,[t(y,{color:"#e6a23c"},{default:o(()=>[l("有效")]),_:1})])]),_:1}),l(),t(f,null,{title:o(()=>[l("Headers")]),default:o(()=>[s("span",null,[t(y,{color:"#e6a23c"},{default:o(()=>[l("Content-Type：application/json")]),_:1})])]),_:1})]),s("div",z,[s("code",null,C(e(q)),1)]),A,t(O,{columns:L,"data-source":e(w),bordered:"",pagination:!1},null,8,["data-source"]),G,t(O,{columns:N,"data-source":e(T),bordered:"",pagination:!1},null,8,["data-source"]),K,s("div",M,[e(u)?(i(),r("div",{key:0,class:"copy-icon",onClick:n[0]||(n[0]=d=>v(e(b),"code"))},[t(e(I))])):(i(),r("div",{key:1,class:"copy-icon",onClick:n[1]||(n[1]=d=>u.value=!0)},[t(e(h))])),t(k,{language:"JavaScript",code:e(b)},null,8,["code"])]),Q,s("div",R,[e(g)?(i(),r("div",{key:0,class:"copy-icon",onClick:n[2]||(n[2]=d=>v(e(x),"data"))},[t(e(I))])):(i(),r("div",{key:1,class:"copy-icon",onClick:n[3]||(n[3]=d=>g.value=!0)},[t(e(h))])),t(k,{language:"Xml",code:e(x)},null,8,["code"])]),Y,s("div",Z,[e(m)?(i(),r("div",{key:0,class:"copy-icon",onClick:n[4]||(n[4]=d=>v(e(S),"err"))},[t(e(I))])):(i(),r("div",{key:1,class:"copy-icon",onClick:n[5]||(n[5]=d=>m.value=!0)},[t(e(h))])),t(k,{language:"Xml",code:e(S)},null,8,["code"])])])])}}},ae=V(ee,[["__scopeId","data-v-e27f4b5d"]]);export{ae as default};
