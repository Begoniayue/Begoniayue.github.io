import{u as F}from"./index-BA9CNwg-.js";import{_ as N}from"./_plugin-vue_export-helper-x3n3nnut.js";import{r as a,a as m,o as i,g as l,f as s,b as t,w as n,h as d,t as T,d as e,m as V,C as h,k as C,p as X,e as D}from"./index-mNOZYs86.js";const c=p=>(X("data-v-ef032727"),p=p(),D(),p),E={class:"user-content"},H=c(()=>s("div",{class:"header"}," 退出登录 ",-1)),J={class:"user-body"},P={class:"api-tag"},U={class:"code-block"},W=c(()=>s("div",{class:"request-params"},"请求参数:",-1)),z=c(()=>s("div",{class:"response-params"},"返回数据:",-1)),A=c(()=>s("div",{class:"request-params"},"请求参数示例",-1)),G={class:"code-light"},K=c(()=>s("div",{class:"response-params"},"成功返回示例",-1)),M={class:"code-light"},Q=c(()=>s("div",{class:"response-params"},"错误返回示例",-1)),R={class:"code-light"},Y={__name:"LogOut",setup(p){const{toClipboard:S}=F(),$=a("/Login/LogOut"),w=[{title:"参数名",dataIndex:"name",key:"name"},{title:"必选",dataIndex:"flag",key:"flag"},{title:"类型",dataIndex:"type",key:"type"},{title:"说明",dataIndex:"interpretation",key:"interpretation"}],q=[{title:"参数名",dataIndex:"name",key:"name"},{title:"类型",dataIndex:"type",key:"type"},{title:"说明",dataIndex:"interpretation",key:"interpretation"}],j=a([{name:"wxid",flag:"是",type:"string",interpretation:"请输入登陆成功的wxid"}]),B=a([{name:"code",type:"string",interpretation:"200成功"},{name:"description",type:"string",interpretation:"返回数据"},{name:"message",type:"string",interpretation:"反馈信息"}]),x=a(`{
  "Wxid": "string"
}`),I=a(`{
 "code": "number",
 "description": "string",
}`),b=a(`{
    "message": "失败",
    "code": "1001",
    "data": null
}`),u=a(!0),_=a(!0),g=a(!0),v=(L,o)=>{o==="code"&&(u.value=!u.value),o==="data"&&(_.value=!_.value),o==="err"&&(g.value=!g.value),S(L),V.success("复制成功")};return(L,o)=>{const y=m("a-tag"),f=m("a-tooltip"),O=m("a-table"),k=m("highlightjs");return i(),l("div",E,[H,s("div",J,[s("div",P,[t(f,null,{title:n(()=>[d("请求方法")]),default:n(()=>[s("span",null,[t(y,{color:"#108ee9"},{default:n(()=>[d("POST")]),_:1})])]),_:1}),t(f,null,{title:n(()=>[d("接口状态")]),default:n(()=>[s("span",null,[t(y,{color:"#e6a23c"},{default:n(()=>[d("有效")]),_:1})])]),_:1}),d(),t(f,null,{title:n(()=>[d("Headers")]),default:n(()=>[s("span",null,[t(y,{color:"#e6a23c"},{default:n(()=>[d("Content-Type：application/json")]),_:1})])]),_:1})]),s("div",U,[s("code",null,T(e($)),1)]),W,t(O,{columns:w,"data-source":e(j),bordered:"",pagination:!1},null,8,["data-source"]),z,t(O,{columns:q,"data-source":e(B),bordered:"",pagination:!1},null,8,["data-source"]),A,s("div",G,[e(u)?(i(),l("div",{key:0,class:"copy-icon",onClick:o[0]||(o[0]=r=>v(e(x),"code"))},[t(e(h))])):(i(),l("div",{key:1,class:"copy-icon",onClick:o[1]||(o[1]=r=>u.value=!0)},[t(e(C))])),t(k,{language:"JavaScript",code:e(x)},null,8,["code"])]),K,s("div",M,[e(_)?(i(),l("div",{key:0,class:"copy-icon",onClick:o[2]||(o[2]=r=>v(e(I),"data"))},[t(e(h))])):(i(),l("div",{key:1,class:"copy-icon",onClick:o[3]||(o[3]=r=>_.value=!0)},[t(e(C))])),t(k,{language:"Xml",code:e(I)},null,8,["code"])]),Q,s("div",R,[e(g)?(i(),l("div",{key:0,class:"copy-icon",onClick:o[4]||(o[4]=r=>v(e(b),"err"))},[t(e(h))])):(i(),l("div",{key:1,class:"copy-icon",onClick:o[5]||(o[5]=r=>g.value=!0)},[t(e(C))])),t(k,{language:"Xml",code:e(b)},null,8,["code"])])])])}}},oe=N(Y,[["__scopeId","data-v-ef032727"]]);export{oe as default};