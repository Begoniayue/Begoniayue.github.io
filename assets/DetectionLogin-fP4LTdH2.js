import{u as O}from"./index-B_WWDWWy.js";import{_ as T}from"./_plugin-vue_export-helper-x3n3nnut.js";import{r as a,a as g,o as i,g as l,f as n,t as L,d as e,b as t,w as s,j as c,m as U,C as h,k as C,p as V,e as X}from"./index-48LKXzQB.js";const r=p=>(V("data-v-b9ea5150"),p=p(),X(),p),E={class:"user-content"},H={class:"header"},J={class:"user-body"},P={class:"api-tag"},Q={class:"code-block"},R=r(()=>n("div",{class:"request-params"},"请求参数:",-1)),z=r(()=>n("div",{class:"response-params"},"返回数据:",-1)),A=r(()=>n("div",{class:"request-params"},"请求参数示例",-1)),G={class:"code-light"},K=r(()=>n("div",{class:"response-params"},"成功返回示例",-1)),M={class:"code-light"},W=r(()=>n("div",{class:"response-params"},"错误返回示例",-1)),Y={class:"code-light"},Z={__name:"DetectionLogin",setup(p){const{toClipboard:j}=O(),q=a("检测二维码"),D=a("/Login/CheckQR"),w=[{title:"参数名",dataIndex:"name",key:"name"},{title:"必选",dataIndex:"flag",key:"flag"},{title:"类型",dataIndex:"type",key:"type"},{title:"说明",dataIndex:"interpretation",key:"interpretation"}],B=[{title:"参数名",dataIndex:"name",key:"name"},{title:"类型",dataIndex:"type",key:"type"},{title:"说明",dataIndex:"interpretation",key:"interpretation"}],F=a([{name:"uuid",flag:"是",type:"string",interpretation:"请输入取码时返回的UUID"},{name:"domain",flag:"否",type:"string",interpretation:"外国号写:1,否则忽略"}]),N=a([{name:"code",type:"string",interpretation:"200成功"},{name:"description",type:"string",interpretation:"返回数据"},{name:"message",type:"string",interpretation:"反馈信息"}]),b=a(`{
    "domain: "string"
    "uuid": "string"
}`),x=a(`{
 "code": "number",
}`),I=a(`{
    "message": "失败",
    "code": "1001",
    "data": null
}`),u=a(!0),_=a(!0),m=a(!0),v=(S,o)=>{o==="code"&&(u.value=!u.value),o==="data"&&(_.value=!_.value),o==="err"&&(m.value=!m.value),j(S),U.success("复制成功")};return(S,o)=>{const y=g("a-tag"),k=g("a-tooltip"),$=g("a-table"),f=g("highlightjs");return i(),l("div",E,[n("div",H,L(e(q)),1),n("div",J,[n("div",P,[t(k,null,{title:s(()=>[c("请求方法")]),default:s(()=>[n("span",null,[t(y,{color:"#108ee9"},{default:s(()=>[c("POST")]),_:1})])]),_:1}),t(k,null,{title:s(()=>[c("接口状态")]),default:s(()=>[n("span",null,[t(y,{color:"#e6a23c"},{default:s(()=>[c("有效")]),_:1})])]),_:1}),c(),t(k,null,{title:s(()=>[c("Headers")]),default:s(()=>[n("span",null,[t(y,{color:"#e6a23c"},{default:s(()=>[c("Content-Type：application/json")]),_:1})])]),_:1})]),n("div",Q,[n("code",null,L(e(D)),1)]),R,t($,{columns:w,"data-source":e(F),bordered:"",pagination:!1},null,8,["data-source"]),z,t($,{columns:B,"data-source":e(N),bordered:"",pagination:!1},null,8,["data-source"]),A,n("div",G,[e(u)?(i(),l("div",{key:0,class:"copy-icon",onClick:o[0]||(o[0]=d=>v(e(b),"code"))},[t(e(h))])):(i(),l("div",{key:1,class:"copy-icon",onClick:o[1]||(o[1]=d=>u.value=!0)},[t(e(C))])),t(f,{language:"JavaScript",code:e(b)},null,8,["code"])]),K,n("div",M,[e(_)?(i(),l("div",{key:0,class:"copy-icon",onClick:o[2]||(o[2]=d=>v(e(x),"data"))},[t(e(h))])):(i(),l("div",{key:1,class:"copy-icon",onClick:o[3]||(o[3]=d=>_.value=!0)},[t(e(C))])),t(f,{language:"Xml",code:e(x)},null,8,["code"])]),W,n("div",Y,[e(m)?(i(),l("div",{key:0,class:"copy-icon",onClick:o[4]||(o[4]=d=>v(e(I),"err"))},[t(e(h))])):(i(),l("div",{key:1,class:"copy-icon",onClick:o[5]||(o[5]=d=>m.value=!0)},[t(e(C))])),t(f,{language:"Xml",code:e(I)},null,8,["code"])])])])}}},ne=T(Z,[["__scopeId","data-v-b9ea5150"]]);export{ne as default};
