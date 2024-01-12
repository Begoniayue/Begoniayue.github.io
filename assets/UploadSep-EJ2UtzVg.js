import{u as U}from"./index-IKI8YSjj.js";import{_ as j}from"./_plugin-vue_export-helper-x3n3nnut.js";import{r as s,a as m,o as i,g as l,f as n,t as h,d as e,b as t,w as o,k as r,m as w,C,l as x,p as N,e as O}from"./index-UZnJtGCp.js";const c=p=>(N("data-v-5aecaea6"),p=p(),O(),p),V={class:"user-content"},W={class:"header"},X={class:"user-body"},E={class:"api-tag"},J={class:"code-block"},z=c(()=>n("div",{class:"request-params"},"请求参数:",-1)),A=c(()=>n("div",{class:"response-params"},"返回数据:",-1)),G=c(()=>n("div",{class:"request-params"},"请求参数示例",-1)),K={class:"code-light"},Q=c(()=>n("div",{class:"response-params"},"成功返回示例",-1)),R={class:"code-light"},Y=c(()=>n("div",{class:"response-params"},"错误返回示例",-1)),Z={class:"code-light"},ee={__name:"UploadSep",setup(p){const{toClipboard:$}=U(),q=s("朋友圈上传(分包模式)"),F=s("/FriendCircle/UploadSep"),L=s("POST"),D=[{title:"参数名",dataIndex:"name",key:"name"},{title:"必选",dataIndex:"flag",key:"flag"},{title:"类型",dataIndex:"type",key:"type"},{title:"说明",dataIndex:"interpretation",key:"interpretation"}],H=[{title:"参数名",dataIndex:"name",key:"name"},{title:"类型",dataIndex:"type",key:"type"},{title:"说明",dataIndex:"interpretation",key:"interpretation"}],M=s([{name:"Base64",flag:"否",type:"string",interpretation:"Base64 当前分包数据的base64"},{name:"ClientID",flag:"否",type:"string ",interpretation:"ClientID通信标识,每个包必须统一"},{name:"HashMd5",flag:"否",type:"string",interpretation:" HashMd5整个文件的hashMd5"},{name:"StartPos",flag:"否",type:"integer ",interpretation:"StartPos分包起始位置"},{name:"TotalLen",flag:"否",type:"integer",interpretation:" TotalLen总数据大小"},{name:"Type",flag:"否",type:"integer ",interpretation:" Type == 2是图片 5是视频"},{name:"Wxid",flag:"否",type:"string",interpretation:""}]),P=s([{name:"code",type:"string",interpretation:"200成功"},{name:"description",type:"string",interpretation:"返回数据"},{name:"message",type:"string",interpretation:"反馈信息"}]),I=s(`{
    "Base64": "string",
    "ClientID": "string",
    "HashMd5": "string",
    "StartPos": "0"
    "TotalLen": "0"
    "Type": "0"
    "Wxid": "string"
}`),S=s(`{
 "code": "number",
 "description": "string",
}`),b=s(`{
    "message": "失败",
    "code": "1001",
    "data": null
}`),u=s(!0),g=s(!0),_=s(!0),y=(T,a)=>{a==="code"&&(u.value=!u.value),a==="data"&&(g.value=!g.value),a==="err"&&(_.value=!_.value),$(T),w.success("复制成功")};return(T,a)=>{const v=m("a-tag"),f=m("a-tooltip"),B=m("a-table"),k=m("highlightjs");return i(),l("div",V,[n("div",W,h(e(q)),1),n("div",X,[n("div",E,[t(f,null,{title:o(()=>[r("请求方法")]),default:o(()=>[n("span",null,[t(v,{color:"#108ee9"},{default:o(()=>[r(h(e(L)),1)]),_:1})])]),_:1}),t(f,null,{title:o(()=>[r("接口状态")]),default:o(()=>[n("span",null,[t(v,{color:"#e6a23c"},{default:o(()=>[r("有效")]),_:1})])]),_:1}),r(),t(f,null,{title:o(()=>[r("Headers")]),default:o(()=>[n("span",null,[t(v,{color:"#e6a23c"},{default:o(()=>[r("Content-Type：application/json")]),_:1})])]),_:1})]),n("div",J,[n("code",null,h(e(F)),1)]),z,t(B,{columns:D,"data-source":e(M),bordered:"",pagination:!1},null,8,["data-source"]),A,t(B,{columns:H,"data-source":e(P),bordered:"",pagination:!1},null,8,["data-source"]),G,n("div",K,[e(u)?(i(),l("div",{key:0,class:"copy-icon",onClick:a[0]||(a[0]=d=>y(e(I),"code"))},[t(e(C))])):(i(),l("div",{key:1,class:"copy-icon",onClick:a[1]||(a[1]=d=>u.value=!0)},[t(e(x))])),t(k,{language:"JavaScript",code:e(I)},null,8,["code"])]),Q,n("div",R,[e(g)?(i(),l("div",{key:0,class:"copy-icon",onClick:a[2]||(a[2]=d=>y(e(S),"data"))},[t(e(C))])):(i(),l("div",{key:1,class:"copy-icon",onClick:a[3]||(a[3]=d=>g.value=!0)},[t(e(x))])),t(k,{language:"Xml",code:e(S)},null,8,["code"])]),Y,n("div",Z,[e(_)?(i(),l("div",{key:0,class:"copy-icon",onClick:a[4]||(a[4]=d=>y(e(b),"err"))},[t(e(C))])):(i(),l("div",{key:1,class:"copy-icon",onClick:a[5]||(a[5]=d=>_.value=!0)},[t(e(x))])),t(k,{language:"Xml",code:e(b)},null,8,["code"])])])])}}},se=j(ee,[["__scopeId","data-v-5aecaea6"]]);export{se as default};
