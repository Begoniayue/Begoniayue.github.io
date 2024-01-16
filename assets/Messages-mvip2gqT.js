import{u as N}from"./index-CSU6RxZ9.js";import{_ as O}from"./_plugin-vue_export-helper-x3n3nnut.js";import{r as a,a as m,b as i,f as l,d as n,t as h,e,h as t,w as o,m as r,x as T,C,y as x,p as U,j as X}from"./index-ZKZBXv4v.js";const c=p=>(U("data-v-d8d41e3e"),p=p(),X(),p),D={class:"user-content"},E={class:"header"},H={class:"user-body"},J={class:"api-tag"},P={class:"code-block"},z=c(()=>n("div",{class:"request-params"},"请求参数:",-1)),A=c(()=>n("div",{class:"response-params"},"返回数据:",-1)),G=c(()=>n("div",{class:"request-params"},"请求参数示例",-1)),K={class:"code-light"},Q=c(()=>n("div",{class:"response-params"},"成功返回示例",-1)),R={class:"code-light"},Y=c(()=>n("div",{class:"response-params"},"错误返回示例",-1)),Z={class:"code-light"},ee={__name:"Messages",setup(p){const{toClipboard:$}=N(),q=a("发布朋友圈"),B=a("/FriendCircle/Messages"),F=a("POST"),j=[{title:"参数名",dataIndex:"name",key:"name"},{title:"必选",dataIndex:"flag",key:"flag"},{title:"类型",dataIndex:"type",key:"type"},{title:"说明",dataIndex:"interpretation",key:"interpretation"}],W=[{title:"参数名",dataIndex:"name",key:"name"},{title:"类型",dataIndex:"type",key:"type"},{title:"说明",dataIndex:"interpretation",key:"interpretation"}],w=a([{name:"BlackList",flag:"否",type:"string",interpretation:""},{name:"Content",flag:"否",type:"string",interpretation:"请自行构造xml内容,注意:如果发的不是视频ISVideo记得提交false"},{name:"ISVideo",flag:"否",type:"boolean",interpretation:""},{name:"WithUserList",flag:"否",type:"string",interpretation:""},{name:"Wxid",flag:"否",type:"string",interpretation:""}]),M=a([{name:"code",type:"string",interpretation:"200成功"},{name:"description",type:"string",interpretation:"返回数据"},{name:"message",type:"string",interpretation:"反馈信息"}]),I=a(`{
    "BlackList": "string ",
    "Content": "string"
    "ISVideo": "true"
    "WithUserList": "string"
    "Wxid": "string"
}`),b=a(`{
 "code": "number",
 "description": "string",
}`),S=a(`{
    "message": "失败",
    "code": "1001",
    "data": null
}`),u=a(!0),g=a(!0),_=a(!0),v=(L,s)=>{s==="code"&&(u.value=!u.value),s==="data"&&(g.value=!g.value),s==="err"&&(_.value=!_.value),$(L),T.success("复制成功")};return(L,s)=>{const y=m("a-tag"),f=m("a-tooltip"),V=m("a-table"),k=m("highlightjs");return i(),l("div",D,[n("div",E,h(e(q)),1),n("div",H,[n("div",J,[t(f,null,{title:o(()=>[r("请求方法")]),default:o(()=>[n("span",null,[t(y,{color:"#108ee9"},{default:o(()=>[r(h(e(F)),1)]),_:1})])]),_:1}),t(f,null,{title:o(()=>[r("接口状态")]),default:o(()=>[n("span",null,[t(y,{color:"#e6a23c"},{default:o(()=>[r("有效")]),_:1})])]),_:1}),r(),t(f,null,{title:o(()=>[r("Headers")]),default:o(()=>[n("span",null,[t(y,{color:"#e6a23c"},{default:o(()=>[r("Content-Type：application/json")]),_:1})])]),_:1})]),n("div",P,[n("code",null,h(e(B)),1)]),z,t(V,{columns:j,"data-source":e(w),bordered:"",pagination:!1},null,8,["data-source"]),A,t(V,{columns:W,"data-source":e(M),bordered:"",pagination:!1},null,8,["data-source"]),G,n("div",K,[e(u)?(i(),l("div",{key:0,class:"copy-icon",onClick:s[0]||(s[0]=d=>v(e(I),"code"))},[t(e(C))])):(i(),l("div",{key:1,class:"copy-icon",onClick:s[1]||(s[1]=d=>u.value=!0)},[t(e(x))])),t(k,{language:"JavaScript",code:e(I)},null,8,["code"])]),Q,n("div",R,[e(g)?(i(),l("div",{key:0,class:"copy-icon",onClick:s[2]||(s[2]=d=>v(e(b),"data"))},[t(e(C))])):(i(),l("div",{key:1,class:"copy-icon",onClick:s[3]||(s[3]=d=>g.value=!0)},[t(e(x))])),t(k,{language:"Xml",code:e(b)},null,8,["code"])]),Y,n("div",Z,[e(_)?(i(),l("div",{key:0,class:"copy-icon",onClick:s[4]||(s[4]=d=>v(e(S),"err"))},[t(e(C))])):(i(),l("div",{key:1,class:"copy-icon",onClick:s[5]||(s[5]=d=>_.value=!0)},[t(e(x))])),t(k,{language:"Xml",code:e(S)},null,8,["code"])])])])}}},ae=O(ee,[["__scopeId","data-v-d8d41e3e"]]);export{ae as default};
