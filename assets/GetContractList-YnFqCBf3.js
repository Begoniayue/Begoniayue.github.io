import{u as O}from"./index-CSU6RxZ9.js";import{_ as T}from"./_plugin-vue_export-helper-x3n3nnut.js";import{r as a,a as g,b as i,f as l,d as o,t as k,e as t,h as e,w as s,m as c,x as V,C as h,y as x,p as R,j as X}from"./index-ZKZBXv4v.js";const d=p=>(R("data-v-f79864c1"),p=p(),X(),p),D={class:"user-content"},E={class:"header"},H={class:"user-body"},J={class:"api-tag"},P={class:"code-block"},U=d(()=>o("div",{class:"request-params"},"请求参数:",-1)),z=d(()=>o("div",{class:"response-params"},"返回数据:",-1)),A=d(()=>o("div",{class:"request-params"},"请求参数示例",-1)),K={class:"code-light"},M=d(()=>o("div",{class:"response-params"},"成功返回示例",-1)),Q={class:"code-light"},Y=d(()=>o("div",{class:"response-params"},"错误返回示例",-1)),Z={class:"code-light"},tt={__name:"GetContractList",setup(p){const{toClipboard:F}=O(),L=a("获取通讯录好友"),j=a("/Friend/GetContractList"),W=a("POST"),w=[{title:"参数名",dataIndex:"name",key:"name"},{title:"必选",dataIndex:"flag",key:"flag"},{title:"类型",dataIndex:"type",key:"type"},{title:"说明",dataIndex:"interpretation",key:"interpretation"}],B=[{title:"参数名",dataIndex:"name",key:"name"},{title:"类型",dataIndex:"type",key:"type"},{title:"说明",dataIndex:"interpretation",key:"interpretation"}],G=a([{name:"CurrentChatRoomContactSeq",flag:"否",type:"integer",interpretation:"没有的情况下请填写0"},{name:"CurrentWxcontactSeq",flag:"否",type:"integer",interpretation:"没有的情况下请填写0"},{name:"Wxid",flag:"否",type:"string",interpretation:""}]),N=a([{name:"code",type:"string",interpretation:"200成功"},{name:"description",type:"string",interpretation:"返回数据"},{name:"message",type:"string",interpretation:"反馈信息"}]),I=a(`{
    "CurrentChatRoomContactSeq": "0",
    "CurrentWxcontactSeq": "0"
    "Wxid": "string"
}`),b=a(`{
 "code": "number",
 "description": "string",
}`),S=a(`{
    "message": "失败",
    "code": "1001",
    "data": null
}`),u=a(!0),_=a(!0),m=a(!0),v=(q,n)=>{n==="code"&&(u.value=!u.value),n==="data"&&(_.value=!_.value),n==="err"&&(m.value=!m.value),F(q),V.success("复制成功")};return(q,n)=>{const y=g("a-tag"),f=g("a-tooltip"),$=g("a-table"),C=g("highlightjs");return i(),l("div",D,[o("div",E,k(t(L)),1),o("div",H,[o("div",J,[e(f,null,{title:s(()=>[c("请求方法")]),default:s(()=>[o("span",null,[e(y,{color:"#108ee9"},{default:s(()=>[c(k(t(W)),1)]),_:1})])]),_:1}),e(f,null,{title:s(()=>[c("接口状态")]),default:s(()=>[o("span",null,[e(y,{color:"#e6a23c"},{default:s(()=>[c("有效")]),_:1})])]),_:1}),c(),e(f,null,{title:s(()=>[c("Headers")]),default:s(()=>[o("span",null,[e(y,{color:"#e6a23c"},{default:s(()=>[c("Content-Type：application/json")]),_:1})])]),_:1})]),o("div",P,[o("code",null,k(t(j)),1)]),U,e($,{columns:w,"data-source":t(G),bordered:"",pagination:!1},null,8,["data-source"]),z,e($,{columns:B,"data-source":t(N),bordered:"",pagination:!1},null,8,["data-source"]),A,o("div",K,[t(u)?(i(),l("div",{key:0,class:"copy-icon",onClick:n[0]||(n[0]=r=>v(t(I),"code"))},[e(t(h))])):(i(),l("div",{key:1,class:"copy-icon",onClick:n[1]||(n[1]=r=>u.value=!0)},[e(t(x))])),e(C,{language:"JavaScript",code:t(I)},null,8,["code"])]),M,o("div",Q,[t(_)?(i(),l("div",{key:0,class:"copy-icon",onClick:n[2]||(n[2]=r=>v(t(b),"data"))},[e(t(h))])):(i(),l("div",{key:1,class:"copy-icon",onClick:n[3]||(n[3]=r=>_.value=!0)},[e(t(x))])),e(C,{language:"Xml",code:t(b)},null,8,["code"])]),Y,o("div",Z,[t(m)?(i(),l("div",{key:0,class:"copy-icon",onClick:n[4]||(n[4]=r=>v(t(S),"err"))},[e(t(h))])):(i(),l("div",{key:1,class:"copy-icon",onClick:n[5]||(n[5]=r=>m.value=!0)},[e(t(x))])),e(C,{language:"Xml",code:t(S)},null,8,["code"])])])])}}},at=T(tt,[["__scopeId","data-v-f79864c1"]]);export{at as default};