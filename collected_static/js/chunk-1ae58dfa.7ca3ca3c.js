(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1ae58dfa"],{"05f1":function(e,t,a){"use strict";a("f995")},d4c8:function(e,t,a){"use strict";a.r(t);a("ac1f"),a("841c");var n=a("7a23"),r=function(e){return Object(n["pushScopeId"])("data-v-0234aefd"),e=e(),Object(n["popScopeId"])(),e},o=Object(n["createTextVNode"])("搜索"),c=r((function(){return Object(n["createElementVNode"])("span",{style:{"font-size":"20px","padding-left":"20px","font-weight":"bolder"}},"装配状态",-1)})),l={key:1},u={class:"demo-pagination-block"};function s(e,t,a,r,s,d){var i=Object(n["resolveComponent"])("el-input"),p=Object(n["resolveComponent"])("el-col"),b=Object(n["resolveComponent"])("el-button"),f=Object(n["resolveComponent"])("el-header"),m=Object(n["resolveComponent"])("el-table-column"),g=Object(n["resolveComponent"])("el-table"),h=Object(n["resolveComponent"])("el-pagination"),j=Object(n["resolveComponent"])("el-main"),O=Object(n["resolveComponent"])("el-container");return Object(n["openBlock"])(),Object(n["createBlock"])(O,{style:{background:"white"}},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(f,{style:{"padding-bottom":"0px","padding-top":"20px","padding-left":"20px"}},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(p,{span:6},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(i,{modelValue:s.searchInfo,"onUpdate:modelValue":t[0]||(t[0]=function(e){return s.searchInfo=e}),placeholder:"输入检索的内容",clearable:"",onClear:d.goback},null,8,["modelValue","onClear"])]})),_:1}),Object(n["createVNode"])(p,{span:4,align:"left"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(b,{type:"primary",onClick:d.search},{default:Object(n["withCtx"])((function(){return[o]})),_:1},8,["onClick"]),c]})),_:1})]})),_:1}),Object(n["createVNode"])(j,null,{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(g,{data:s.asdata,border:"",style:{width:"100%"},"highlight-current-row":"",onCellDblclick:d.editCell},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(m,{prop:"orderid.orderid",label:"订单号"}),Object(n["createVNode"])(m,{prop:"orderid.customer",label:"客户名称"}),Object(n["createVNode"])(m,{prop:"startday",label:"开始日期"}),Object(n["createVNode"])(m,{prop:"endday",label:"交货日期"}),Object(n["createVNode"])(m,{prop:"status",label:"状态",formatter:d.formatStatus},null,8,["formatter"]),Object(n["createVNode"])(m,{prop:"remark",label:"备注"},{default:Object(n["withCtx"])((function(e){return[e.row.tbremark?(Object(n["openBlock"])(),Object(n["createBlock"])(i,{key:0,modelValue:e.row.remark,"onUpdate:modelValue":function(t){return e.row.remark=t},onBlur:function(t){return d.commitCell(e.row,e.row.remark,e.column)}},null,8,["modelValue","onUpdate:modelValue","onBlur"])):(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",l,Object(n["toDisplayString"])(e.row.remark),1))]})),_:1})]})),_:1},8,["data","onCellDblclick"]),Object(n["createElementVNode"])("div",u,[Object(n["createVNode"])(h,{currentPage:s.currentPage,"onUpdate:currentPage":t[1]||(t[1]=function(e){return s.currentPage=e}),"page-count":s.pageCount,"onUpdate:page-count":t[2]||(t[2]=function(e){return s.pageCount=e}),layout:"total, prev, pager, next",total:s.total,"onUpdate:total":t[3]||(t[3]=function(e){return s.total=e}),onCurrentChange:d.currentChange},null,8,["currentPage","page-count","total","onCurrentChange"])])]})),_:1})]})),_:1})}var d=a("1da1"),i=(a("96cf"),a("bc3a")),p=a.n(i),b={name:"assta",data:function(){return{asdata:[],searchInfo:"",currentPage:1,total:0,pageCount:0}},methods:{search:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("/api/home/processassemble/",{params:{search:e.searchInfo}});case 2:a=t.sent,0!==a.data.count?e.asdata=a.data.results:e.asdata=[];case 4:case"end":return t.stop()}}),t)})))()},formatStatus:function(e){return"process"===e.status?"进行中":"finish"===e.status?"已完成":"pending"===e.status?"未开始":void 0},getasdata:function(){var e=this;p.a.get("/api/home/processassemble/").then((function(t){e.asdata=t.data.results,e.total=t.data.count,e.pageCount=Math.ceil(e.total/16)}))},getasdataPage:function(e){var t=this;p.a.get("/api/home/processassemble/",{params:{page:e}}).then((function(e){t.asdata=e.data.results}))},CurrentChange:function(e){this.getasdataPage(e)},currentChange:function(e){this.currentPage=e,this.getasdataPage(e)},goback:function(){this.getasdataPage(this.currentPage)},editCell:function(e,t){"remark"===t.property&&(e.tbremark=!0)},commitCell:function(e,t,a){"remark"===a.property&&(e.tbremark=!1,delete e.tbremark),this.patchStorge(a.property,t,e)},patchStorge:function(e,t,a){var n={};n[e]=t,console.log(a),p.a.patch("/api/home/processassemble/"+a.orderid.id+"/",n)}},created:function(){this.getasdata()}},f=(a("05f1"),a("6b0d")),m=a.n(f);const g=m()(b,[["render",s],["__scopeId","data-v-0234aefd"]]);t["default"]=g},f995:function(e,t,a){}}]);
//# sourceMappingURL=chunk-1ae58dfa.7ca3ca3c.js.map