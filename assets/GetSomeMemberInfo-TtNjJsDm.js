import{u as M}from"./index-IKI8YSjj.js";import{_ as N}from"./_plugin-vue_export-helper-x3n3nnut.js";import{r as s,a as g,o as i,g as l,f as n,t as x,d as e,b as t,w as a,k as d,m as O,C as h,l as C,p as V,e as L}from"./index-UZnJtGCp.js";const c=p=>(V("data-v-59db593e"),p=p(),L(),p),Q={class:"user-content"},X={class:"header"},E={class:"user-body"},H={class:"api-tag"},J={class:"code-block"},P=c(()=>n("div",{class:"request-params"},"请求参数:",-1)),U=c(()=>n("div",{class:"response-params"},"返回数据:",-1)),z=c(()=>n("div",{class:"request-params"},"请求参数示例",-1)),A={class:"code-light"},K=c(()=>n("div",{class:"response-params"},"成功返回示例",-1)),R={class:"code-light"},Y=c(()=>n("div",{class:"response-params"},"错误返回示例",-1)),Z={class:"code-light"},ee={__name:"GetSomeMemberInfo",setup(p){const{toClipboard:q}=M(),W=s("获取群成员信息"),F=s("/Group/GetSomeMemberInfo"),G=s("POST"),j=[{title:"参数名",dataIndex:"name",key:"name"},{title:"必选",dataIndex:"flag",key:"flag"},{title:"类型",dataIndex:"type",key:"type"},{title:"说明",dataIndex:"interpretation",key:"interpretation"}],w=[{title:"参数名",dataIndex:"name",key:"name"},{title:"类型",dataIndex:"type",key:"type"},{title:"说明",dataIndex:"interpretation",key:"interpretation"}],B=s([{name:"QID",flag:"否",type:"string",interpretation:""},{name:"ToWxid",flag:"否",type:"string",interpretation:"多个ToWxid请用,隔开。"},{name:"Wxid",flag:"否",type:"string",interpretation:""}]),D=s([{name:"code",type:"string",interpretation:"200成功"},{name:"description",type:"string",interpretation:"返回数据"},{name:"message",type:"string",interpretation:"反馈信息"}]),I=s(`{
    "QID": "string",
    "ToWxid": "string",
    "Wxid": "string"
}`),b=s(`{
 "code": "number",
 "description": "string",
}`),S=s(`{
    "message": "失败",
    "code": "1001",
    "data": null
}`),u=s(!0),m=s(!0),_=s(!0),v=(T,o)=>{o==="code"&&(u.value=!u.value),o==="data"&&(m.value=!m.value),o==="err"&&(_.value=!_.value),q(T),O.success("复制成功")};return(T,o)=>{const y=g("a-tag"),f=g("a-tooltip"),$=g("a-table"),k=g("highlightjs");return i(),l("div",Q,[n("div",X,x(e(W)),1),n("div",E,[n("div",H,[t(f,null,{title:a(()=>[d("请求方法")]),default:a(()=>[n("span",null,[t(y,{color:"#108ee9"},{default:a(()=>[d(x(e(G)),1)]),_:1})])]),_:1}),t(f,null,{title:a(()=>[d("接口状态")]),default:a(()=>[n("span",null,[t(y,{color:"#e6a23c"},{default:a(()=>[d("有效")]),_:1})])]),_:1}),d(),t(f,null,{title:a(()=>[d("Headers")]),default:a(()=>[n("span",null,[t(y,{color:"#e6a23c"},{default:a(()=>[d("Content-Type：application/json")]),_:1})])]),_:1})]),n("div",J,[n("code",null,x(e(F)),1)]),P,t($,{columns:j,"data-source":e(B),bordered:"",pagination:!1},null,8,["data-source"]),U,t($,{columns:w,"data-source":e(D),bordered:"",pagination:!1},null,8,["data-source"]),z,n("div",A,[e(u)?(i(),l("div",{key:0,class:"copy-icon",onClick:o[0]||(o[0]=r=>v(e(I),"code"))},[t(e(h))])):(i(),l("div",{key:1,class:"copy-icon",onClick:o[1]||(o[1]=r=>u.value=!0)},[t(e(C))])),t(k,{language:"JavaScript",code:e(I)},null,8,["code"])]),K,n("div",R,[e(m)?(i(),l("div",{key:0,class:"copy-icon",onClick:o[2]||(o[2]=r=>v(e(b),"data"))},[t(e(h))])):(i(),l("div",{key:1,class:"copy-icon",onClick:o[3]||(o[3]=r=>m.value=!0)},[t(e(C))])),t(k,{language:"Xml",code:e(b)},null,8,["code"])]),Y,n("div",Z,[e(_)?(i(),l("div",{key:0,class:"copy-icon",onClick:o[4]||(o[4]=r=>v(e(S),"err"))},[t(e(h))])):(i(),l("div",{key:1,class:"copy-icon",onClick:o[5]||(o[5]=r=>_.value=!0)},[t(e(C))])),t(k,{language:"Xml",code:e(S)},null,8,["code"])])])])}}},se=N(ee,[["__scopeId","data-v-59db593e"]]);export{se as default};
