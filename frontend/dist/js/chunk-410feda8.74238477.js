(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-410feda8"],{1747:function(e,t,a){"use strict";a("701c")},"701c":function(e,t,a){},f9f2:function(e,t,a){"use strict";a.r(t);a("ac1f"),a("841c");var r=a("7a23"),n=function(e){return Object(r["pushScopeId"])("data-v-93380126"),e=e(),Object(r["popScopeId"])(),e},o=Object(r["createTextVNode"])("搜索"),c=n((function(){return Object(r["createElementVNode"])("span",{style:{"font-size":"20px","padding-left":"20px","font-weight":"bolder"}},"机械件状态",-1)})),l={key:1},u={class:"demo-pagination-block"};function s(e,t,a,n,s,i){var d=Object(r["resolveComponent"])("el-input"),p=Object(r["resolveComponent"])("el-col"),b=Object(r["resolveComponent"])("el-button"),f=Object(r["resolveComponent"])("el-row"),m=Object(r["resolveComponent"])("el-table-column"),g=Object(r["resolveComponent"])("el-table"),h=Object(r["resolveComponent"])("el-pagination"),w=Object(r["resolveComponent"])("el-card");return Object(r["openBlock"])(),Object(r["createBlock"])(w,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(f,{gutter:12,"margin-bottom":"20px"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(p,{span:6},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(d,{modelValue:s.searchInfo,"onUpdate:modelValue":t[0]||(t[0]=function(e){return s.searchInfo=e}),placeholder:"输入检索的内容",clearable:"",onClear:i.goback},null,8,["modelValue","onClear"])]})),_:1}),Object(r["createVNode"])(p,{span:18,align:"left"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(b,{type:"primary",onClick:i.search},{default:Object(r["withCtx"])((function(){return[o]})),_:1},8,["onClick"]),c]})),_:1})]})),_:1}),Object(r["createVNode"])(g,{data:s.swdata,border:"",style:{width:"100%"},"highlight-current-row":"",onCellDblclick:i.editCell},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(m,{prop:"orderid.orderid",label:"订单号"}),Object(r["createVNode"])(m,{prop:"orderid.customer",label:"客户名称"}),Object(r["createVNode"])(m,{prop:"startday",label:"开始日期"}),Object(r["createVNode"])(m,{prop:"endday",label:"交货日期"}),Object(r["createVNode"])(m,{prop:"status",label:"状态",formatter:i.formatStatus},null,8,["formatter"]),Object(r["createVNode"])(m,{prop:"remark",label:"备注"},{default:Object(r["withCtx"])((function(e){return[e.row.tbremark?(Object(r["openBlock"])(),Object(r["createBlock"])(d,{key:0,modelValue:e.row.remark,"onUpdate:modelValue":function(t){return e.row.remark=t},onBlur:function(t){return i.commitCell(e.row,e.row.remark,e.column)}},null,8,["modelValue","onUpdate:modelValue","onBlur"])):(Object(r["openBlock"])(),Object(r["createElementBlock"])("span",l,Object(r["toDisplayString"])(e.row.remark),1))]})),_:1})]})),_:1},8,["data","onCellDblclick"]),Object(r["createElementVNode"])("div",u,[Object(r["createVNode"])(h,{currentPage:s.currentPage,"onUpdate:currentPage":t[1]||(t[1]=function(e){return s.currentPage=e}),"page-count":s.pageCount,"onUpdate:page-count":t[2]||(t[2]=function(e){return s.pageCount=e}),layout:"total, prev, pager, next",total:s.total,"onUpdate:total":t[3]||(t[3]=function(e){return s.total=e}),onCurrentChange:i.currentChange},null,8,["currentPage","page-count","total","onCurrentChange"])])]})),_:1})}var i=a("1da1"),d=(a("96cf"),a("bc3a")),p=a.n(d),b={name:"swsta",data:function(){return{swdata:[],searchInfo:"",currentPage:1,total:0,pageCount:0}},methods:{search:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("/api/home/processsoftware/",{params:{search:e.searchInfo}});case 2:a=t.sent,0!==a.data.count?e.swdata=a.data.results:e.swdata=[];case 4:case"end":return t.stop()}}),t)})))()},formatStatus:function(e){return"process"===e.status?"进行中":"finish"===e.status?"已完成":"pending"===e.status?"未开始":void 0},getswdata:function(){var e=this;p.a.get("/api/home/processsoftware/").then((function(t){e.swdata=t.data.results,e.total=t.data.count,e.pageCount=Math.ceil(e.total/20)}))},getswdataPage:function(e){var t=this;p.a.get("/api/home/processsoftware/",{params:{page:e}}).then((function(e){t.swdata=e.data.results}))},CurrentChange:function(e){this.getmedataPage(e)},currentChange:function(e){this.currentPage=e,this.getswdataPage(e)},goback:function(){this.getswdataPage(this.currentPage)},editCell:function(e,t){"remark"===t.property&&(e.tbremark=!0)},commitCell:function(e,t,a){"remark"===a.property&&(e.tbremark=!1,delete e.tbremark),this.patchStorge(a.property,t,e)},patchStorge:function(e,t,a){var r={};r[e]=t,p.a.patch("/api/home/processsoftware/"+a.orderid.id+"/",r)}},created:function(){this.getswdata()}},f=(a("1747"),a("6b0d")),m=a.n(f);const g=m()(b,[["render",s],["__scopeId","data-v-93380126"]]);t["default"]=g}}]);
//# sourceMappingURL=chunk-410feda8.74238477.js.map