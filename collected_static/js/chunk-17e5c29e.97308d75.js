(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-17e5c29e"],{"3cfb":function(e,t,r){},"58f4":function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var a=r("7a23"),n=r("9ee5");const o=Object(a["defineComponent"])({name:"Search"}),c={class:"icon",width:"200",height:"200",viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},l=Object(a["createElementVNode"])("path",{fill:"currentColor",d:"M795.904 750.72l124.992 124.928a32 32 0 01-45.248 45.248L750.656 795.904a416 416 0 1145.248-45.248zM480 832a352 352 0 100-704 352 352 0 000 704z"},null,-1),u=[l];function d(e,t,r,n,o,l){return Object(a["openBlock"])(),Object(a["createElementBlock"])("svg",c,u)}var i=Object(n["a"])(o,[["render",d]])},"8d3a":function(e,t,r){"use strict";r("3cfb")},"9ee5":function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var a=(e,t)=>{const r=e.__vccOpts||e;for(const[a,n]of t)r[a]=n;return r}},a594:function(e,t,r){"use strict";r.r(t);r("ac1f"),r("841c");var a=r("7a23"),n=function(e){return Object(a["pushScopeId"])("data-v-f3d37af4"),e=e(),Object(a["popScopeId"])(),e},o=Object(a["createTextVNode"])("搜索"),c=Object(a["createTextVNode"])("增加"),l=Object(a["createTextVNode"])("删除 "),u=n((function(){return Object(a["createElementVNode"])("span",{style:{"font-size":"20px","padding-left":"20px","font-weight":"bolder"}},"所有订单",-1)})),d=Object(a["createTextVNode"])(" 将 "),i=Object(a["createTextVNode"])(" 更改为 "),s={key:1},b={key:1},p={class:"demo-pagination-block"},f=Object(a["createTextVNode"])("请上传配置单"),m={class:"dialog-footer"},O=Object(a["createTextVNode"])("取消"),j=Object(a["createTextVNode"])("确定"),h={class:"dialog-footer"},g=Object(a["createTextVNode"])("取消"),w=Object(a["createTextVNode"])("确定");function V(e,t,r,n,V,v){var C=Object(a["resolveComponent"])("el-input"),x=Object(a["resolveComponent"])("el-col"),k=Object(a["resolveComponent"])("el-button"),N=Object(a["resolveComponent"])("el-header"),y=Object(a["resolveComponent"])("el-tag"),_=Object(a["resolveComponent"])("el-timeline-item"),B=Object(a["resolveComponent"])("el-timeline"),P=Object(a["resolveComponent"])("el-table-column"),S=Object(a["resolveComponent"])("el-link"),R=Object(a["resolveComponent"])("el-option"),F=Object(a["resolveComponent"])("el-select"),U=Object(a["resolveComponent"])("el-table"),D=Object(a["resolveComponent"])("el-pagination"),I=Object(a["resolveComponent"])("el-form-item"),E=Object(a["resolveComponent"])("el-row"),z=Object(a["resolveComponent"])("el-date-picker"),T=Object(a["resolveComponent"])("el-upload"),L=Object(a["resolveComponent"])("el-form"),H=Object(a["resolveComponent"])("el-dialog"),M=Object(a["resolveComponent"])("el-main"),q=Object(a["resolveComponent"])("el-container"),A=Object(a["resolveDirective"])("loading");return Object(a["openBlock"])(),Object(a["createBlock"])(q,{style:{background:"white"}},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(N,{style:{"padding-bottom":"0px","padding-top":"20px","padding-left":"20px"}},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(x,{span:6},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(C,{modelValue:V.searchInfo,"onUpdate:modelValue":t[0]||(t[0]=function(e){return V.searchInfo=e}),placeholder:"输入检索的内容",clearable:"",onClear:v.goback},null,8,["modelValue","onClear"])]})),_:1}),Object(a["createVNode"])(x,{span:12,align:"left"},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(k,{onClick:v.search},{default:Object(a["withCtx"])((function(){return[o]})),_:1},8,["onClick"]),Object(a["createVNode"])(k,{type:"success",onClick:t[1]||(t[1]=function(e){return V.addProductVisible=!0})},{default:Object(a["withCtx"])((function(){return[c]})),_:1}),Object(a["createVNode"])(k,{type:"danger",onClick:t[2]||(t[2]=function(e){return V.deleteVisible=!0}),disabled:!!V.removeDisabled},{default:Object(a["withCtx"])((function(){return[l]})),_:1},8,["disabled"]),u]})),_:1})]})),_:1}),Object(a["createVNode"])(M,null,{default:Object(a["withCtx"])((function(){return[Object(a["withDirectives"])(Object(a["createVNode"])(U,{data:V.product,onRowClick:v.rowClicked,border:"",onCellDblclick:v.editCell,"element-loading-text":"数据正在加载中...",style:{width:"100%"},"highlight-current-row":"","row-style":{height:"20px"}},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(P,{type:"expand"},{default:Object(a["withCtx"])((function(e){return[Object(a["createVNode"])(B,null,{default:Object(a["withCtx"])((function(){return[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(e.row.producthistory,(function(e,t){return Object(a["openBlock"])(),Object(a["createBlock"])(_,{key:t,timestamp:v.formatedate(e.operateday),icon:V.timelineconfig.icon,size:V.timelineconfig.size},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(y,{class:"mx-1",size:"large"},{default:Object(a["withCtx"])((function(){return[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.user),1)]})),_:2},1024),d,Object(a["createVNode"])(y,{class:"mx-1",size:"large"},{default:Object(a["withCtx"])((function(){return[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.proitem),1)]})),_:2},1024),i,Object(a["createVNode"])(y,{class:"mx-1",size:"large",type:"进行中"===e.newcontent?"danger":""},{default:Object(a["withCtx"])((function(){return[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.newcontent),1)]})),_:2},1032,["type"])]})),_:2},1032,["timestamp","icon","size"])})),128))]})),_:2},1024)]})),_:1}),Object(a["createVNode"])(P,{prop:"orderid",label:"订单号","show-overflow-tooltip":""},{default:Object(a["withCtx"])((function(e){return[e.row.conffile?(Object(a["openBlock"])(),Object(a["createBlock"])(S,{key:0,href:e.row.conffile,target:"_blank",class:"buttonText",type:"primary",underline:!1},{default:Object(a["withCtx"])((function(){return[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.row.orderid),1)]})),_:2},1032,["href"])):(Object(a["openBlock"])(),Object(a["createElementBlock"])("span",s,Object(a["toDisplayString"])(e.row.orderid),1))]})),_:1}),Object(a["createVNode"])(P,{prop:"customer",label:"用户","min-width":"130px","show-overflow-tooltip":""}),Object(a["createVNode"])(P,{prop:"productid",label:"仪器型号","show-overflow-tooltip":""}),Object(a["createVNode"])(P,{prop:"serial",label:"序列号","show-overflow-tooltip":""}),Object(a["createVNode"])(P,{prop:"startday",label:"入单日期","show-overflow-tooltip":""}),Object(a["createVNode"])(P,{prop:"endday",label:"交货日期","show-overflow-tooltip":""}),Object(a["createVNode"])(P,{prop:"elsta",label:"电路板状态"},{default:Object(a["withCtx"])((function(e){return[Object(a["createVNode"])(F,{modelValue:e.row.elsta,"onUpdate:modelValue":function(t){return e.row.elsta=t},onChange:function(t){return v.changeELSta(e.row)},class:Object(a["normalizeClass"])(e.row.elsta)},{default:Object(a["withCtx"])((function(){return[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(V.staopts,(function(t){return Object(a["openBlock"])(),Object(a["createBlock"])(R,{key:t.value,label:t.label,value:t.value,disabled:v.getDisabledInfo(e.row.elsta,t.value)},null,8,["label","value","disabled"])})),128))]})),_:2},1032,["modelValue","onUpdate:modelValue","onChange","class"])]})),_:1}),Object(a["createVNode"])(P,{prop:"mesta",label:"机械件状态","show-overflow-tooltip":""},{default:Object(a["withCtx"])((function(e){return[Object(a["createVNode"])(F,{modelValue:e.row.mesta,"onUpdate:modelValue":function(t){return e.row.mesta=t},onChange:function(t){return v.changeMESta(e.row)},class:Object(a["normalizeClass"])(e.row.mesta)},{default:Object(a["withCtx"])((function(){return[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(V.staopts,(function(t){return Object(a["openBlock"])(),Object(a["createBlock"])(R,{key:t.value,label:t.label,value:t.value,disabled:v.getDisabledInfo(e.row.mesta,t.value)},null,8,["label","value","disabled"])})),128))]})),_:2},1032,["modelValue","onUpdate:modelValue","onChange","class"])]})),_:1}),Object(a["createVNode"])(P,{prop:"scsta",label:"干涉仪状态","show-overflow-tooltip":""},{default:Object(a["withCtx"])((function(e){return[Object(a["createVNode"])(F,{modelValue:e.row.scsta,"onUpdate:modelValue":function(t){return e.row.scsta=t},onChange:function(t){return v.changeSCSta(e.row)},class:Object(a["normalizeClass"])(e.row.scsta)},{default:Object(a["withCtx"])((function(){return[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(V.staopts,(function(t){return Object(a["openBlock"])(),Object(a["createBlock"])(R,{key:t.value,label:t.label,value:t.value,disabled:v.getDisabledInfo(e.row.scsta,t.value)},null,8,["label","value","disabled"])})),128))]})),_:2},1032,["modelValue","onUpdate:modelValue","onChange","class"])]})),_:1}),Object(a["createVNode"])(P,{prop:"assta",label:"装配状态","show-overflow-tooltip":""},{default:Object(a["withCtx"])((function(e){return[Object(a["createVNode"])(F,{modelValue:e.row.assta,"onUpdate:modelValue":function(t){return e.row.assta=t},onChange:function(t){return v.changeASSta(e.row)},class:Object(a["normalizeClass"])(e.row.assta)},{default:Object(a["withCtx"])((function(){return[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(V.staopts,(function(t){return Object(a["openBlock"])(),Object(a["createBlock"])(R,{key:t.value,label:t.label,value:t.value,disabled:v.getDisabledInfo(e.row.assta,t.value)},null,8,["label","value","disabled"])})),128))]})),_:2},1032,["modelValue","onUpdate:modelValue","onChange","class"])]})),_:1}),Object(a["createVNode"])(P,{prop:"tssta",label:"测试状态","show-overflow-tooltip":""},{default:Object(a["withCtx"])((function(e){return[Object(a["createVNode"])(F,{modelValue:e.row.tssta,"onUpdate:modelValue":function(t){return e.row.tssta=t},onChange:function(t){return v.changeTSSta(e.row)},class:Object(a["normalizeClass"])(e.row.tssta)},{default:Object(a["withCtx"])((function(){return[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(V.staopts,(function(t){return Object(a["openBlock"])(),Object(a["createBlock"])(R,{key:t.value,label:t.label,value:t.value,disabled:v.getDisabledInfo(e.row.tssta,t.value)},null,8,["label","value","disabled"])})),128))]})),_:2},1032,["modelValue","onUpdate:modelValue","onChange","class"])]})),_:1}),Object(a["createVNode"])(P,{prop:"swsta",label:"软件状态","show-overflow-tooltip":""},{default:Object(a["withCtx"])((function(e){return[Object(a["createVNode"])(F,{modelValue:e.row.swsta,"onUpdate:modelValue":function(t){return e.row.swsta=t},onChange:function(t){return v.changeSWSta(e.row)},class:Object(a["normalizeClass"])(e.row.swsta)},{default:Object(a["withCtx"])((function(){return[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(V.staopts,(function(t){return Object(a["openBlock"])(),Object(a["createBlock"])(R,{key:t.value,label:t.label,value:t.value,disabled:v.getDisabledInfo(e.row.swsta,t.value)},null,8,["label","value","disabled"])})),128))]})),_:2},1032,["modelValue","onUpdate:modelValue","onChange","class"])]})),_:1}),Object(a["createVNode"])(P,{prop:"pmsta",label:"货前款状态","show-overflow-tooltip":""},{default:Object(a["withCtx"])((function(e){return[Object(a["createVNode"])(F,{modelValue:e.row.pmsta,"onUpdate:modelValue":function(t){return e.row.pmsta=t},onChange:function(t){return v.changePMSta(e.row)},class:Object(a["normalizeClass"])(e.row.pmsta)},{default:Object(a["withCtx"])((function(){return[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(V.staopts,(function(t){return Object(a["openBlock"])(),Object(a["createBlock"])(R,{key:t.value,label:t.label,value:t.value,disabled:v.getDisabledInfo(e.row.pmsta,t.value)},null,8,["label","value","disabled"])})),128))]})),_:2},1032,["modelValue","onUpdate:modelValue","onChange","class"])]})),_:1}),Object(a["createVNode"])(P,{prop:"dista",label:"发货状态","show-overflow-tooltip":""},{default:Object(a["withCtx"])((function(e){return[Object(a["createVNode"])(F,{modelValue:e.row.dista,"onUpdate:modelValue":function(t){return e.row.dista=t},onChange:function(t){return v.changeDISta(e.row)},class:Object(a["normalizeClass"])(e.row.dista)},{default:Object(a["withCtx"])((function(){return[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(V.staopts,(function(t){return Object(a["openBlock"])(),Object(a["createBlock"])(R,{key:t.value,label:t.label,value:t.value,disabled:v.getDisabledInfo(e.row.dista,t.value)},null,8,["label","value","disabled"])})),128))]})),_:2},1032,["modelValue","onUpdate:modelValue","onChange","class"])]})),_:1}),Object(a["createVNode"])(P,{prop:"bista",label:"开票状态","show-overflow-tooltip":""},{default:Object(a["withCtx"])((function(e){return[Object(a["createVNode"])(F,{modelValue:e.row.bista,"onUpdate:modelValue":function(t){return e.row.bista=t},onChange:function(t){return v.changeBISta(e.row)},class:Object(a["normalizeClass"])(e.row.bista)},{default:Object(a["withCtx"])((function(){return[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(V.staopts,(function(t){return Object(a["openBlock"])(),Object(a["createBlock"])(R,{key:t.value,label:t.label,value:t.value,disabled:v.getDisabledInfo(e.row.bista,t.value)},null,8,["label","value","disabled"])})),128))]})),_:2},1032,["modelValue","onUpdate:modelValue","onChange","class"])]})),_:1}),Object(a["createVNode"])(P,{prop:"duesta",label:"尾款状态","show-overflow-tooltip":""},{default:Object(a["withCtx"])((function(e){return[Object(a["createVNode"])(F,{modelValue:e.row.duesta,"onUpdate:modelValue":function(t){return e.row.duesta=t},onChange:function(t){return v.changeDUESta(e.row)},class:Object(a["normalizeClass"])(e.row.duesta)},{default:Object(a["withCtx"])((function(){return[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(V.staopts,(function(t){return Object(a["openBlock"])(),Object(a["createBlock"])(R,{key:t.value,label:t.label,value:t.value,disabled:v.getDisabledInfo(e.row.duesta,t.value)},null,8,["label","value","disabled"])})),128))]})),_:2},1032,["modelValue","onUpdate:modelValue","onChange","class"])]})),_:1}),Object(a["createVNode"])(P,{prop:"remark",label:"备注","show-overflow-tooltip":"","min-width":"130px"},{default:Object(a["withCtx"])((function(e){return[e.row.tbremark?(Object(a["openBlock"])(),Object(a["createBlock"])(C,{key:0,modelValue:e.row.remark,"onUpdate:modelValue":function(t){return e.row.remark=t},onBlur:function(t){return v.commitCell(e.row,e.row.remark,e.column)}},null,8,["modelValue","onUpdate:modelValue","onBlur"])):(Object(a["openBlock"])(),Object(a["createElementBlock"])("span",b,Object(a["toDisplayString"])(e.row.remark),1))]})),_:1})]})),_:1},8,["data","onRowClick","onCellDblclick"]),[[A,V.loading,void 0,{fullscreen:!0,lock:!0}]]),Object(a["createElementVNode"])("div",p,[Object(a["createVNode"])(D,{currentPage:V.currentPage,"onUpdate:currentPage":t[3]||(t[3]=function(e){return V.currentPage=e}),"page-count":V.pageCount,"onUpdate:page-count":t[4]||(t[4]=function(e){return V.pageCount=e}),layout:"total, prev, pager, next",total:V.total,"onUpdate:total":t[5]||(t[5]=function(e){return V.total=e}),onCurrentChange:v.CurrentChange},null,8,["currentPage","page-count","total","onCurrentChange"])]),Object(a["createVNode"])(H,{modelValue:V.addProductVisible,"onUpdate:modelValue":t[14]||(t[14]=function(e){return V.addProductVisible=e}),title:"添加产品订单",width:"50%"},{footer:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("span",m,[Object(a["createVNode"])(k,{onClick:t[13]||(t[13]=function(e){return V.addProductVisible=!1})},{default:Object(a["withCtx"])((function(){return[O]})),_:1}),Object(a["createVNode"])(k,{type:"primary",onClick:v.addProduct},{default:Object(a["withCtx"])((function(){return[j]})),_:1},8,["onClick"])])]})),default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(L,{ref:"addProductRef",model:V.addProductForm,rules:e.addProductRul,"label-width":"300px",class:"addStorgeForm"},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(E,{gutter:20},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(x,{span:12},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(I,{label:"订单号",prop:"orderid","label-width":"100px"},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(C,{modelValue:V.addProductForm.orderid,"onUpdate:modelValue":t[6]||(t[6]=function(e){return V.addProductForm.orderid=e})},null,8,["modelValue"])]})),_:1})]})),_:1}),Object(a["createVNode"])(x,{span:12},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(I,{label:"仪器型号",prop:"productid","label-width":"100px"},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(C,{modelValue:V.addProductForm.productid,"onUpdate:modelValue":t[7]||(t[7]=function(e){return V.addProductForm.productid=e})},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1}),Object(a["createVNode"])(E,{gutter:20},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(x,{span:12},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(I,{label:"序列号",prop:"serial","label-width":"100px"},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(C,{modelValue:V.addProductForm.serial,"onUpdate:modelValue":t[8]||(t[8]=function(e){return V.addProductForm.serial=e})},null,8,["modelValue"])]})),_:1})]})),_:1}),Object(a["createVNode"])(x,{span:12},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(I,{label:"订单类型",prop:"category","label-width":"100px",align:"left"},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(F,{modelValue:V.addProductForm.category,"onUpdate:modelValue":t[9]||(t[9]=function(e){return V.addProductForm.category=e}),placeholder:"选择订单类型"},{default:Object(a["withCtx"])((function(){return[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(V.oropts,(function(e){return Object(a["openBlock"])(),Object(a["createBlock"])(R,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])]})),_:1})]})),_:1})]})),_:1}),Object(a["createVNode"])(E,{gutter:20},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(x,{span:12},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(I,{label:"用户",prop:"customer","label-width":"100px"},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(C,{modelValue:V.addProductForm.customer,"onUpdate:modelValue":t[10]||(t[10]=function(e){return V.addProductForm.customer=e})},null,8,["modelValue"])]})),_:1})]})),_:1}),Object(a["createVNode"])(x,{span:12},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(I,{label:"交货日期",prop:"endday","label-width":"100px",align:"left"},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(z,{modelValue:V.addProductForm.endday,"onUpdate:modelValue":t[11]||(t[11]=function(e){return V.addProductForm.endday=e}),type:"date","value-format":"YYYY-MM-DD",placeholder:"Pick a day"},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1}),Object(a["createVNode"])(E,{gutter:20},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(x,{span:24},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(I,{label:"备注",prop:"remark","label-width":"100px"},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(C,{modelValue:V.addProductForm.remark,"onUpdate:modelValue":t[12]||(t[12]=function(e){return V.addProductForm.remark=e})},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1}),Object(a["createVNode"])(E,{gutter:20},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(x,{span:24},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(I,{prop:"remark","label-width":"100px",align:"left"},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(T,{"on-change":v.handleUpload,action:"#","auto-upload":!1},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(k,{type:"primary"},{default:Object(a["withCtx"])((function(){return[f]})),_:1})]})),_:1},8,["on-change"])]})),_:1})]})),_:1})]})),_:1})]})),_:1},8,["model","rules"])]})),_:1},8,["modelValue"]),Object(a["createVNode"])(H,{modelValue:V.deleteVisible,"onUpdate:modelValue":t[16]||(t[16]=function(e){return V.deleteVisible=e}),title:"确认删除",width:"50%"},{footer:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("span",h,[Object(a["createVNode"])(k,{onClick:t[15]||(t[15]=function(e){return V.deleteVisible=!1})},{default:Object(a["withCtx"])((function(){return[g]})),_:1}),Object(a["createVNode"])(k,{type:"primary",onClick:v.remove},{default:Object(a["withCtx"])((function(){return[w]})),_:1},8,["onClick"])])]})),_:1},8,["modelValue"])]})),_:1})]})),_:1})}var v=r("1da1"),C=(r("5319"),r("96cf"),r("58f4")),x=r("bc3a"),k=r.n(x),N=r("4328"),y=r.n(N),_=r("0a06b"),B=r("5089"),P={name:"productPlan",components:{Search:C["a"],BIconAlarm:B["a"]},data:function(){return{loading:!0,removeDisabled:!0,deleteVisible:!1,oropts:[{value:"std",label:"标准"},{value:"unstd",label:"非标"}],staopts:[{value:"pending",label:"未开始",disabled:!1},{value:"process",label:"进行中",disabled:!1},{value:"finish",label:"已完成",disabled:!1}],product:[],producthistory:[],searchInfo:"",currentPage:1,total:0,pageCount:0,addProductVisible:!1,selectedRow:0,addProductForm:{orderid:"",customer:"",productid:"",serial:"",startday:"",endday:"",category:"std",conffile:""},addStaForm:{order_id:"",status:"pending"},addStorgerul:{orderid:[{required:!0,message:"请输入订单号",trigger:"blur"},{min:3,max:7,message:"订单号为3位数字",trigger:"blur"}],customer:[{required:!0,message:"请输入用户名称",trigger:"blur"},{min:3,max:20,message:"用户名长度最短为 3 ",trigger:"blur"}],productid:[{required:!0,message:"请输入产品型号",trigger:"blur"},{min:3,max:20,message:"产品名长度最短为 3 ",trigger:"blur"}],serial:[{required:!0,message:"请输入序列号",trigger:"blur"},{min:3,max:7,message:"序列号为3位数字",trigger:"blur"}],endday:[{required:!0,message:"请输入交货日期",trigger:"blur"},{message:"日期",trigger:"blur"}],category:[{required:!0,message:"请输入订单类型",trigger:"blur"},{message:"日期",trigger:"blur"}]},timelineconfig:{icon:B["a"],size:"large"}}},methods:{search:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,k.a.get("/api/home/product/",{params:{search:e.searchInfo}});case 2:r=t.sent,0!==r.data.count?e.product=r.data.results:e.product=[],e.loading=!1;case 5:case"end":return t.stop()}}),t)})))()},getDisabledInfo:function(e,t){var r;return"pending"===e&&(r=!1),"process"===e&&"pending"===t&&(r=!0),"process"===e&&"pending"!==t&&(r=!1),"finish"===e&&(r=!0),r},formatedate:function(e){var t=e.replace("T"," ");return t.substr(0,16,16)},getProduct:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,k.a.get("/api/home/product/").then((function(t){e.product=t.data.results,e.total=t.data.count,e.pageCount=Math.ceil(e.total/16),e.loading=!1}));case 2:case"end":return t.stop()}}),t)})))()},getProductPage:function(e){var t=this;k.a.get("/api/home/product/",{params:{page:e}}).then((function(e){t.product=e.data.results,t.loading=!1}))},CurrentChange:function(e){this.loading=!0,this.getProductPage(e)},formatUpdated:function(e){return e.updated.substr(0,10,10).replace("T"," ")},formateCategory:function(e){return"std"===e.category?"标准":"unstd"===e.category?"非标":void 0},addProductHistory:function(e,t,r){return Object(v["a"])(regeneratorRuntime.mark((function a(){var n,o,c;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(console.log("orderid",e),"process"===r&&(n="进行中"),"finish"===r&&(n="已完成"),o=!0,Object(_["a"])().then((function(e){e[0]||(alert("登录已过期，请重新登录"),o=!1,this.$router.push({name:"Login"}))})),!o){a.next=9;break}return c=new Date,a.next=9,k.a.post("/api/home/producthistory/",y.a.stringify({orderid_id:e,proitem:t,newcontent:n,operateday:c}),{headers:{Authorization:"Bearer "+localStorage.getItem("access.product")}}).then((function(e){console.log(e)}));case 9:case"end":return a.stop()}}),a)})))()},addProduct:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){var r,a,n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r=!0,Object(_["a"])().then((function(e){e[0]||(alert("登录已过期，请重新登录"),r=!1,this.$router.push({name:"Login"}))})),!r){t.next=16;break}return a=new Date,n=a.toISOString().substr(0,10,10),o=new FormData,o.append("orderid",e.addProductForm.orderid),o.append("customer",e.addProductForm.customer),o.append("productid",e.addProductForm.productid),o.append("serial",e.addProductForm.serial),o.append("startday",n),o.append("endday",e.addProductForm.endday),o.append("category",e.addProductForm.category),o.append("conffile",e.addProductForm.conffile),t.next=16,k.a.post("/api/home/product/",o,{headers:{Authorization:"Bearer "+localStorage.getItem("access.product")}}).then((function(t){e.addStaForm.order_id=t.data.id,e.getProduct()}));case 16:e.addProductVisible=!1;case 17:case"end":return t.stop()}}),t)})))()},rowClicked:function(e){this.selectedRow=e.id,this.removeDisabled=!1},changeProSta:function(e){var t=this;return Object(v["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.changeStatus("product",e.status,e.id);case 2:return r.next=4,t.addProductHistory(e.id,"整体状态",e.status);case 4:case"end":return r.stop()}}),r)})))()},changeELSta:function(e){var t=this;return Object(v["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.changeStatus("processelprepare",e.elsta,e.id);case 2:return r.next=4,t.addProductHistory(e.id,"电路板状态",e.elsta);case 4:case"end":return r.stop()}}),r)})))()},changeMESta:function(e){var t=this;return Object(v["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.changeStatus("processmeprepare",e.mesta,e.id);case 2:return r.next=4,t.addProductHistory(e.id,"机械件状态",e.mesta);case 4:case"end":return r.stop()}}),r)})))()},changeSCSta:function(e){var t=this;return Object(v["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.changeStatus("processscprepare",e.scsta,e.id);case 2:return r.next=4,t.addProductHistory(e.id,"干涉仪状态",e.scsta);case 4:case"end":return r.stop()}}),r)})))()},changeASSta:function(e){var t=this;return Object(v["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.changeStatus("processassemble",e.assta,e.id);case 2:return r.next=4,t.addProductHistory(e.id,"装配状态",e.assta);case 4:case"end":return r.stop()}}),r)})))()},changeTSSta:function(e){var t=this;return Object(v["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.changeStatus("processtesting",e.tssta,e.id);case 2:return r.next=4,t.addProductHistory(e.id,"测试状态",e.tssta);case 4:case"end":return r.stop()}}),r)})))()},changeSWSta:function(e){var t=this;return Object(v["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.changeStatus("processsoftware",e.swsta,e.id);case 2:return r.next=4,t.addProductHistory(e.id,"软件状态",e.swsta);case 4:case"end":return r.stop()}}),r)})))()},changePMSta:function(e){var t=this;return Object(v["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.changeStatus("processpayment",e.pmsta,e.id);case 2:return r.next=4,t.addProductHistory(e.id,"付款状态",e.pmsta);case 4:case"end":return r.stop()}}),r)})))()},changeDISta:function(e){var t=this;return Object(v["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.changeStatus("processdeliver",e.dista,e.id);case 2:t.addProductHistory(e.id,"发货状态",e.dista);case 3:case"end":return r.stop()}}),r)})))()},changeBISta:function(e){var t=this;return Object(v["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.changeStatus("processbilling",e.bista,e.id);case 2:return r.next=4,t.addProductHistory(e.id,"开票状态",e.bista);case 4:case"end":return r.stop()}}),r)})))()},changeDUESta:function(e){var t=this;return Object(v["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.changeStatus("processdueing",e.duesta,e.id);case 2:return r.next=4,t.addProductHistory(e.id,"尾款状态",e.duesta);case 4:case"end":return r.stop()}}),r)})))()},changeStatus:function(e,t,r){return Object(v["a"])(regeneratorRuntime.mark((function a(){var n,o,c;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=!0,a.next=3,Object(_["a"])().then((function(e){e[0]||(alert("登录已过期，请重新登录"),n=!1,this.$router.push({name:"Login"}))}));case 3:n&&(o=new Date,c=o.toISOString().substr(0,10,10),"process"===t&&k.a.patch("/api/home/"+e+"/"+r+"/",{status:t,startday:c}).then((function(e){console.log(e)})).catch((function(a){404===a.request.status&&k.a.post("/api/home/"+e+"/",{orderid_id:r,status:t,startday:c})})),"finish"===t&&k.a.patch("/api/home/"+e+"/"+r+"/",{status:t,endday:c}).then((function(e){console.log(e)})).catch((function(a){404===a.request.status&&k.a.post("/api/home/"+e+"/",{orderid_id:r,status:t,endday:c})})));case 4:case"end":return a.stop()}}),a)})))()},editCell:function(e,t){"remark"===t.property&&(e.tbremark=!0)},commitCell:function(e,t,r){"remark"===r.property&&(e.tbremark=!1,delete e.tbremark),this.patchStorge(r.property,t,e)},patchStorge:function(e,t,r){var a={};a[e]=t,console.log(r),k.a.patch("/api/home/product/"+r.id+"/",a).then((function(e){console.log("pathch:",e)}))},goback:function(){this.loading=!0,this.getProductPage(this.currentPage)},remove:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:k.a.delete("/api/home/product/"+e.selectedRow+"/").then((function(t){console.log(t),e.getProduct()})),e.deleteVisible=!1;case 2:case"end":return t.stop()}}),t)})))()},handleUpload:function(e){this.addProductForm.conffile=e.raw}},created:function(){this.getProduct()}},S=(r("8d3a"),r("6b0d")),R=r.n(S);const F=R()(P,[["render",V],["__scopeId","data-v-f3d37af4"]]);t["default"]=F}}]);
//# sourceMappingURL=chunk-17e5c29e.97308d75.js.map