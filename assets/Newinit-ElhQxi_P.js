import{u as L}from"./index-CSU6RxZ9.js";import{_ as O}from"./_plugin-vue_export-helper-x3n3nnut.js";import{r as n,a as v,b as i,f as l,d as o,h as t,w as a,m as d,t as T,e,x as V,C as h,y as x,p as X,j as D}from"./index-ZKZBXv4v.js";const c=p=>(X("data-v-328ed989"),p=p(),D(),p),E={class:"user-content"},H=c(()=>o("div",{class:"header"}," 初始化 ",-1)),J={class:"user-body"},P={class:"api-tag"},U={class:"code-block"},W=c(()=>o("div",{class:"request-params"},"请求参数:",-1)),z=c(()=>o("div",{class:"response-params"},"返回数据:",-1)),A=c(()=>o("div",{class:"request-params"},"请求参数示例",-1)),G={class:"code-light"},K=c(()=>o("div",{class:"response-params"},"成功返回示例",-1)),M={class:"code-light"},Q=c(()=>o("div",{class:"response-params"},"错误返回示例",-1)),R={class:"code-light"},Y={__name:"Newinit",setup(p){const{toClipboard:S}=L(),$=n("/Login/Newinit"),j=[{title:"参数名",dataIndex:"name",key:"name"},{title:"必选",dataIndex:"flag",key:"flag"},{title:"类型",dataIndex:"type",key:"type"},{title:"说明",dataIndex:"interpretation",key:"interpretation"}],q=[{title:"参数名",dataIndex:"name",key:"name"},{title:"类型",dataIndex:"type",key:"type"},{title:"说明",dataIndex:"interpretation",key:"interpretation"}],B=n([{name:"wxid",flag:"是",type:"string",interpretation:"请输入登陆成功的wxid"}]),F=n([{name:"code",type:"string",interpretation:"200成功"},{name:"description",type:"string",interpretation:"返回数据"},{name:"message",type:"string",interpretation:"反馈信息"}]),C=n(`{
  "Wxid": "string"
}`),I=n(`{
 "code": "number",
 "description": "string",
}`),b=n(`{
    "message": "失败",
    "code": "1001",
    "data": null
}`),u=n(!0),_=n(!0),m=n(!0),g=(w,s)=>{s==="code"&&(u.value=!u.value),s==="data"&&(_.value=!_.value),s==="err"&&(m.value=!m.value),S(w),V.success("复制成功")};return(w,s)=>{const y=v("a-tag"),f=v("a-tooltip"),N=v("a-table"),k=v("highlightjs");return i(),l("div",E,[H,o("div",J,[o("div",P,[t(f,null,{title:a(()=>[d("请求方法")]),default:a(()=>[o("span",null,[t(y,{color:"#108ee9"},{default:a(()=>[d("POST")]),_:1})])]),_:1}),t(f,null,{title:a(()=>[d("接口状态")]),default:a(()=>[o("span",null,[t(y,{color:"#e6a23c"},{default:a(()=>[d("有效")]),_:1})])]),_:1}),d(),t(f,null,{title:a(()=>[d("Headers")]),default:a(()=>[o("span",null,[t(y,{color:"#e6a23c"},{default:a(()=>[d("Content-Type：application/json")]),_:1})])]),_:1})]),o("div",U,[o("code",null,T(e($)),1)]),W,t(N,{columns:j,"data-source":e(B),bordered:"",pagination:!1},null,8,["data-source"]),z,t(N,{columns:q,"data-source":e(F),bordered:"",pagination:!1},null,8,["data-source"]),A,o("div",G,[e(u)?(i(),l("div",{key:0,class:"copy-icon",onClick:s[0]||(s[0]=r=>g(e(C),"code"))},[t(e(h))])):(i(),l("div",{key:1,class:"copy-icon",onClick:s[1]||(s[1]=r=>u.value=!0)},[t(e(x))])),t(k,{language:"JavaScript",code:e(C)},null,8,["code"])]),K,o("div",M,[e(_)?(i(),l("div",{key:0,class:"copy-icon",onClick:s[2]||(s[2]=r=>g(e(I),"data"))},[t(e(h))])):(i(),l("div",{key:1,class:"copy-icon",onClick:s[3]||(s[3]=r=>_.value=!0)},[t(e(x))])),t(k,{language:"Xml",code:e(I)},null,8,["code"])]),Q,o("div",R,[e(m)?(i(),l("div",{key:0,class:"copy-icon",onClick:s[4]||(s[4]=r=>g(e(b),"err"))},[t(e(h))])):(i(),l("div",{key:1,class:"copy-icon",onClick:s[5]||(s[5]=r=>m.value=!0)},[t(e(x))])),t(k,{language:"Xml",code:e(b)},null,8,["code"])])])])}}},se=O(Y,[["__scopeId","data-v-328ed989"]]);export{se as default};
