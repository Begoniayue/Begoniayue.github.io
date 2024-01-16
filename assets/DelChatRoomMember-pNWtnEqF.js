import{u as B}from"./index-CSU6RxZ9.js";import{_ as M}from"./_plugin-vue_export-helper-x3n3nnut.js";import{r as s,a as g,b as i,f as l,d as a,t as k,e,h as t,w as n,m as r,x as O,C,y as x,p as V,j as L}from"./index-ZKZBXv4v.js";const c=p=>(V("data-v-6e50a788"),p=p(),L(),p),X={class:"user-content"},E={class:"header"},G={class:"user-body"},H={class:"api-tag"},J={class:"code-block"},P=c(()=>a("div",{class:"request-params"},"请求参数:",-1)),U=c(()=>a("div",{class:"response-params"},"返回数据:",-1)),z=c(()=>a("div",{class:"request-params"},"请求参数示例",-1)),A={class:"code-light"},K=c(()=>a("div",{class:"response-params"},"成功返回示例",-1)),Q={class:"code-light"},Y=c(()=>a("div",{class:"response-params"},"错误返回示例",-1)),Z={class:"code-light"},ee={__name:"DelChatRoomMember",setup(p){const{toClipboard:S}=B(),$=s("删除群成员"),q=s("/Group/DelChatRoomMember"),T=s("POST"),j=[{title:"参数名",dataIndex:"name",key:"name"},{title:"必选",dataIndex:"flag",key:"flag"},{title:"类型",dataIndex:"type",key:"type"},{title:"说明",dataIndex:"interpretation",key:"interpretation"}],F=[{title:"参数名",dataIndex:"name",key:"name"},{title:"类型",dataIndex:"type",key:"type"},{title:"说明",dataIndex:"interpretation",key:"interpretation"}],W=s([{name:"ChatRoomName",flag:"否",type:"string",interpretation:""},{name:"ToWxids",flag:"否",type:"string",interpretation:"多个微信ID用,隔开 ChatRoomName 群ID"},{name:"Wxid",flag:"否",type:"string",interpretation:""}]),w=s([{name:"code",type:"string",interpretation:"200成功"},{name:"description",type:"string",interpretation:"返回数据"},{name:"message",type:"string",interpretation:"反馈信息"}]),b=s(`{
    "ChatRoomName": "string",
    "ToWxids": "string",
    "Wxid": "string"
}`),I=s(`{
 "code": "number",
 "description": "string",
}`),D=s(`{
    "message": "失败",
    "code": "1001",
    "data": null
}`),u=s(!0),m=s(!0),_=s(!0),v=(N,o)=>{o==="code"&&(u.value=!u.value),o==="data"&&(m.value=!m.value),o==="err"&&(_.value=!_.value),S(N),O.success("复制成功")};return(N,o)=>{const y=g("a-tag"),f=g("a-tooltip"),R=g("a-table"),h=g("highlightjs");return i(),l("div",X,[a("div",E,k(e($)),1),a("div",G,[a("div",H,[t(f,null,{title:n(()=>[r("请求方法")]),default:n(()=>[a("span",null,[t(y,{color:"#108ee9"},{default:n(()=>[r(k(e(T)),1)]),_:1})])]),_:1}),t(f,null,{title:n(()=>[r("接口状态")]),default:n(()=>[a("span",null,[t(y,{color:"#e6a23c"},{default:n(()=>[r("有效")]),_:1})])]),_:1}),r(),t(f,null,{title:n(()=>[r("Headers")]),default:n(()=>[a("span",null,[t(y,{color:"#e6a23c"},{default:n(()=>[r("Content-Type：application/json")]),_:1})])]),_:1})]),a("div",J,[a("code",null,k(e(q)),1)]),P,t(R,{columns:j,"data-source":e(W),bordered:"",pagination:!1},null,8,["data-source"]),U,t(R,{columns:F,"data-source":e(w),bordered:"",pagination:!1},null,8,["data-source"]),z,a("div",A,[e(u)?(i(),l("div",{key:0,class:"copy-icon",onClick:o[0]||(o[0]=d=>v(e(b),"code"))},[t(e(C))])):(i(),l("div",{key:1,class:"copy-icon",onClick:o[1]||(o[1]=d=>u.value=!0)},[t(e(x))])),t(h,{language:"JavaScript",code:e(b)},null,8,["code"])]),K,a("div",Q,[e(m)?(i(),l("div",{key:0,class:"copy-icon",onClick:o[2]||(o[2]=d=>v(e(I),"data"))},[t(e(C))])):(i(),l("div",{key:1,class:"copy-icon",onClick:o[3]||(o[3]=d=>m.value=!0)},[t(e(x))])),t(h,{language:"Xml",code:e(I)},null,8,["code"])]),Y,a("div",Z,[e(_)?(i(),l("div",{key:0,class:"copy-icon",onClick:o[4]||(o[4]=d=>v(e(D),"err"))},[t(e(C))])):(i(),l("div",{key:1,class:"copy-icon",onClick:o[5]||(o[5]=d=>_.value=!0)},[t(e(x))])),t(h,{language:"Xml",code:e(D)},null,8,["code"])])])])}}},se=M(ee,[["__scopeId","data-v-6e50a788"]]);export{se as default};