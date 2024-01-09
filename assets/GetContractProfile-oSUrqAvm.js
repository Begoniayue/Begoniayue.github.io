import{u as T}from"./index-B_WWDWWy.js";import{_ as V}from"./_plugin-vue_export-helper-x3n3nnut.js";import{r as a,a as v,o as l,g as i,f as s,t as C,d as e,b as t,w as n,j as c,m as L,C as h,k as x,p as U,e as W}from"./index-48LKXzQB.js";const r=p=>(U("data-v-9d18e66b"),p=p(),W(),p),X={class:"user-content"},D={class:"header"},E={class:"user-body"},H={class:"api-tag"},J={class:"code-block"},z=r(()=>s("div",{class:"request-params"},"请求参数:",-1)),A=r(()=>s("div",{class:"response-params"},"返回数据:",-1)),K=r(()=>s("div",{class:"request-params"},"请求参数示例",-1)),M={class:"code-light"},Q=r(()=>s("div",{class:"response-params"},"成功返回示例",-1)),R={class:"code-light"},Y=r(()=>s("div",{class:"response-params"},"错误返回示例",-1)),Z={class:"code-light"},ee={__name:"GetContractProfile",setup(p){const{toClipboard:j}=T(),F=a("取个人信息"),P=a("/User/GetContractProfile"),w=a("POST"),B=[{title:"参数名",dataIndex:"name",key:"name"},{title:"必选",dataIndex:"flag",key:"flag"},{title:"类型",dataIndex:"type",key:"type"},{title:"说明",dataIndex:"interpretation",key:"interpretation"}],G=[{title:"参数名",dataIndex:"name",key:"name"},{title:"类型",dataIndex:"type",key:"type"},{title:"说明",dataIndex:"interpretation",key:"interpretation"}],N=a([{name:"Wxid",flag:"否",type:"string",interpretation:"微信id"}]),O=a([{name:"code",type:"string",interpretation:"200成功"},{name:"description",type:"string",interpretation:"返回数据"},{name:"message",type:"string",interpretation:"反馈信息"}]),b=a(`{
    "Wxid": "string"
}`),I=a(`{
 "code": "number",
 "description": "string",
}`),S=a(`{
    "message": "失败",
    "code": "1001",
    "data": null
}`),u=a(!0),_=a(!0),m=a(!0),g=($,o)=>{o==="code"&&(u.value=!u.value),o==="data"&&(_.value=!_.value),o==="err"&&(m.value=!m.value),j($),L.success("复制成功")};return($,o)=>{const y=v("a-tag"),f=v("a-tooltip"),q=v("a-table"),k=v("highlightjs");return l(),i("div",X,[s("div",D,C(e(F)),1),s("div",E,[s("div",H,[t(f,null,{title:n(()=>[c("请求方法")]),default:n(()=>[s("span",null,[t(y,{color:"#108ee9"},{default:n(()=>[c(C(e(w)),1)]),_:1})])]),_:1}),t(f,null,{title:n(()=>[c("接口状态")]),default:n(()=>[s("span",null,[t(y,{color:"#e6a23c"},{default:n(()=>[c("有效")]),_:1})])]),_:1}),c(),t(f,null,{title:n(()=>[c("Headers")]),default:n(()=>[s("span",null,[t(y,{color:"#e6a23c"},{default:n(()=>[c("Content-Type：application/json")]),_:1})])]),_:1})]),s("div",J,[s("code",null,C(e(P)),1)]),z,t(q,{columns:B,"data-source":e(N),bordered:"",pagination:!1},null,8,["data-source"]),A,t(q,{columns:G,"data-source":e(O),bordered:"",pagination:!1},null,8,["data-source"]),K,s("div",M,[e(u)?(l(),i("div",{key:0,class:"copy-icon",onClick:o[0]||(o[0]=d=>g(e(b),"code"))},[t(e(h))])):(l(),i("div",{key:1,class:"copy-icon",onClick:o[1]||(o[1]=d=>u.value=!0)},[t(e(x))])),t(k,{language:"JavaScript",code:e(b)},null,8,["code"])]),Q,s("div",R,[e(_)?(l(),i("div",{key:0,class:"copy-icon",onClick:o[2]||(o[2]=d=>g(e(I),"data"))},[t(e(h))])):(l(),i("div",{key:1,class:"copy-icon",onClick:o[3]||(o[3]=d=>_.value=!0)},[t(e(x))])),t(k,{language:"Xml",code:e(I)},null,8,["code"])]),Y,s("div",Z,[e(m)?(l(),i("div",{key:0,class:"copy-icon",onClick:o[4]||(o[4]=d=>g(e(S),"err"))},[t(e(h))])):(l(),i("div",{key:1,class:"copy-icon",onClick:o[5]||(o[5]=d=>m.value=!0)},[t(e(x))])),t(k,{language:"Xml",code:e(S)},null,8,["code"])])])])}}},ae=V(ee,[["__scopeId","data-v-9d18e66b"]]);export{ae as default};
