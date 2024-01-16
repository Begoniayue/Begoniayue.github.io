import{u as Q}from"./index-CSU6RxZ9.js";import{_ as R}from"./_plugin-vue_export-helper-x3n3nnut.js";import{r as a,a as v,b as i,f as l,d as s,t as h,e,h as t,w as n,m as d,x as T,C,y as I,p as V,j as L}from"./index-ZKZBXv4v.js";const r=p=>(V("data-v-94106d3b"),p=p(),L(),p),W={class:"user-content"},X={class:"header"},E={class:"user-body"},H={class:"api-tag"},J={class:"code-block"},P=r(()=>s("div",{class:"request-params"},"请求参数:",-1)),U=r(()=>s("div",{class:"response-params"},"返回数据:",-1)),z=r(()=>s("div",{class:"request-params"},"请求参数示例",-1)),A={class:"code-light"},K=r(()=>s("div",{class:"response-params"},"成功返回示例",-1)),M={class:"code-light"},Y=r(()=>s("div",{class:"response-params"},"错误返回示例",-1)),Z={class:"code-light"},ee={__name:"GetChatRoomInfoDetail",setup(p){const{toClipboard:q}=Q(),j=a("获取群信息(带公告内容)"),F=a("/Group/GetChatRoomInfoDetail"),G=a("POST"),w=[{title:"参数名",dataIndex:"name",key:"name"},{title:"必选",dataIndex:"flag",key:"flag"},{title:"类型",dataIndex:"type",key:"type"},{title:"说明",dataIndex:"interpretation",key:"interpretation"}],B=[{title:"参数名",dataIndex:"name",key:"name"},{title:"类型",dataIndex:"type",key:"type"},{title:"说明",dataIndex:"interpretation",key:"interpretation"}],N=a([{name:"QID",flag:"否",type:"string",interpretation:"QID == 群ID"},{name:"Wxid",flag:"否",type:"string",interpretation:""}]),O=a([{name:"code",type:"string",interpretation:"200成功"},{name:"description",type:"string",interpretation:"返回数据"},{name:"message",type:"string",interpretation:"反馈信息"}]),x=a(`{
    "QID": "string",
    "Wxid": "string"
}`),b=a(`{
 "code": "number",
 "description": "string",
}`),D=a(`{
    "message": "失败",
    "code": "1001",
    "data": null
}`),u=a(!0),_=a(!0),m=a(!0),g=(S,o)=>{o==="code"&&(u.value=!u.value),o==="data"&&(_.value=!_.value),o==="err"&&(m.value=!m.value),q(S),T.success("复制成功")};return(S,o)=>{const y=v("a-tag"),f=v("a-tooltip"),$=v("a-table"),k=v("highlightjs");return i(),l("div",W,[s("div",X,h(e(j)),1),s("div",E,[s("div",H,[t(f,null,{title:n(()=>[d("请求方法")]),default:n(()=>[s("span",null,[t(y,{color:"#108ee9"},{default:n(()=>[d(h(e(G)),1)]),_:1})])]),_:1}),t(f,null,{title:n(()=>[d("接口状态")]),default:n(()=>[s("span",null,[t(y,{color:"#e6a23c"},{default:n(()=>[d("有效")]),_:1})])]),_:1}),d(),t(f,null,{title:n(()=>[d("Headers")]),default:n(()=>[s("span",null,[t(y,{color:"#e6a23c"},{default:n(()=>[d("Content-Type：application/json")]),_:1})])]),_:1})]),s("div",J,[s("code",null,h(e(F)),1)]),P,t($,{columns:w,"data-source":e(N),bordered:"",pagination:!1},null,8,["data-source"]),U,t($,{columns:B,"data-source":e(O),bordered:"",pagination:!1},null,8,["data-source"]),z,s("div",A,[e(u)?(i(),l("div",{key:0,class:"copy-icon",onClick:o[0]||(o[0]=c=>g(e(x),"code"))},[t(e(C))])):(i(),l("div",{key:1,class:"copy-icon",onClick:o[1]||(o[1]=c=>u.value=!0)},[t(e(I))])),t(k,{language:"JavaScript",code:e(x)},null,8,["code"])]),K,s("div",M,[e(_)?(i(),l("div",{key:0,class:"copy-icon",onClick:o[2]||(o[2]=c=>g(e(b),"data"))},[t(e(C))])):(i(),l("div",{key:1,class:"copy-icon",onClick:o[3]||(o[3]=c=>_.value=!0)},[t(e(I))])),t(k,{language:"Xml",code:e(b)},null,8,["code"])]),Y,s("div",Z,[e(m)?(i(),l("div",{key:0,class:"copy-icon",onClick:o[4]||(o[4]=c=>g(e(D),"err"))},[t(e(C))])):(i(),l("div",{key:1,class:"copy-icon",onClick:o[5]||(o[5]=c=>m.value=!0)},[t(e(I))])),t(k,{language:"Xml",code:e(D)},null,8,["code"])])])])}}},ae=R(ee,[["__scopeId","data-v-94106d3b"]]);export{ae as default};
