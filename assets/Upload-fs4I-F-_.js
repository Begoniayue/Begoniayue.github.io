import{u as V}from"./index-CSU6RxZ9.js";import{_ as L}from"./_plugin-vue_export-helper-x3n3nnut.js";import{r as o,a as v,b as l,f as i,d as a,t as h,e,h as t,w as n,m as d,x as W,C,y as x,p as X,j as D}from"./index-ZKZBXv4v.js";const r=p=>(X("data-v-5d564212"),p=p(),D(),p),E={class:"user-content"},H={class:"header"},J={class:"user-body"},P={class:"api-tag"},z={class:"code-block"},A=r(()=>a("div",{class:"request-params"},"请求参数:",-1)),G=r(()=>a("div",{class:"response-params"},"返回数据:",-1)),K=r(()=>a("div",{class:"request-params"},"请求参数示例",-1)),M={class:"code-light"},Q=r(()=>a("div",{class:"response-params"},"成功返回示例",-1)),R={class:"code-light"},Y=r(()=>a("div",{class:"response-params"},"错误返回示例",-1)),Z={class:"code-light"},ee={__name:"Upload",setup(p){const{toClipboard:B}=V(),F=o("朋友圈上传"),j=o("/FriendCircle/Upload"),U=o("POST"),w=[{title:"参数名",dataIndex:"name",key:"name"},{title:"必选",dataIndex:"flag",key:"flag"},{title:"类型",dataIndex:"type",key:"type"},{title:"说明",dataIndex:"interpretation",key:"interpretation"}],N=[{title:"参数名",dataIndex:"name",key:"name"},{title:"类型",dataIndex:"type",key:"type"},{title:"说明",dataIndex:"interpretation",key:"interpretation"}],O=o([{name:"Base64",flag:"否",type:"string",interpretation:"支持图片和视频"},{name:"Wxid",flag:"否",type:"string",interpretation:""}]),T=o([{name:"code",type:"string",interpretation:"200成功"},{name:"description",type:"string",interpretation:"返回数据"},{name:"message",type:"string",interpretation:"反馈信息"}]),I=o(`{
    "Base64": "string ",
    "Wxid": "string"
}`),b=o(`{
 "code": "number",
 "description": "string",
}`),S=o(`{
    "message": "失败",
    "code": "1001",
    "data": null
}`),u=o(!0),_=o(!0),m=o(!0),g=($,s)=>{s==="code"&&(u.value=!u.value),s==="data"&&(_.value=!_.value),s==="err"&&(m.value=!m.value),B($),W.success("复制成功")};return($,s)=>{const y=v("a-tag"),f=v("a-tooltip"),q=v("a-table"),k=v("highlightjs");return l(),i("div",E,[a("div",H,h(e(F)),1),a("div",J,[a("div",P,[t(f,null,{title:n(()=>[d("请求方法")]),default:n(()=>[a("span",null,[t(y,{color:"#108ee9"},{default:n(()=>[d(h(e(U)),1)]),_:1})])]),_:1}),t(f,null,{title:n(()=>[d("接口状态")]),default:n(()=>[a("span",null,[t(y,{color:"#e6a23c"},{default:n(()=>[d("有效")]),_:1})])]),_:1}),d(),t(f,null,{title:n(()=>[d("Headers")]),default:n(()=>[a("span",null,[t(y,{color:"#e6a23c"},{default:n(()=>[d("Content-Type：application/json")]),_:1})])]),_:1})]),a("div",z,[a("code",null,h(e(j)),1)]),A,t(q,{columns:w,"data-source":e(O),bordered:"",pagination:!1},null,8,["data-source"]),G,t(q,{columns:N,"data-source":e(T),bordered:"",pagination:!1},null,8,["data-source"]),K,a("div",M,[e(u)?(l(),i("div",{key:0,class:"copy-icon",onClick:s[0]||(s[0]=c=>g(e(I),"code"))},[t(e(C))])):(l(),i("div",{key:1,class:"copy-icon",onClick:s[1]||(s[1]=c=>u.value=!0)},[t(e(x))])),t(k,{language:"JavaScript",code:e(I)},null,8,["code"])]),Q,a("div",R,[e(_)?(l(),i("div",{key:0,class:"copy-icon",onClick:s[2]||(s[2]=c=>g(e(b),"data"))},[t(e(C))])):(l(),i("div",{key:1,class:"copy-icon",onClick:s[3]||(s[3]=c=>_.value=!0)},[t(e(x))])),t(k,{language:"Xml",code:e(b)},null,8,["code"])]),Y,a("div",Z,[e(m)?(l(),i("div",{key:0,class:"copy-icon",onClick:s[4]||(s[4]=c=>g(e(S),"err"))},[t(e(C))])):(l(),i("div",{key:1,class:"copy-icon",onClick:s[5]||(s[5]=c=>m.value=!0)},[t(e(x))])),t(k,{language:"Xml",code:e(S)},null,8,["code"])])])])}}},oe=L(ee,[["__scopeId","data-v-5d564212"]]);export{oe as default};
