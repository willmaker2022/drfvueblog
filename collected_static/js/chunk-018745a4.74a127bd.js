(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-018745a4"],{"7c3d":function(e,t,a){},d41e:function(e,t,a){"use strict";a("7c3d")},f6b0:function(e,t,a){"use strict";a.r(t);a("ac1f"),a("841c");var r=a("7a23"),n=function(e){return Object(r["pushScopeId"])("data-v-f22ef8f2"),e=e(),Object(r["popScopeId"])(),e},o=Object(r["createTextVNode"])("搜索"),c=n((function(){return Object(r["createElementVNode"])("span",{style:{"font-size":"20px","padding-left":"20px","font-weight":"bolder"}},"干涉仪状态",-1)})),l={key:1},u={class:"demo-pagination-block"};function s(e,t,a,n,s,d){var i=Object(r["resolveComponent"])("el-input"),p=Object(r["resolveComponent"])("el-col"),b=Object(r["resolveComponent"])("el-button"),f=Object(r["resolveComponent"])("el-row"),m=Object(r["resolveComponent"])("el-table-column"),g=Object(r["resolveComponent"])("el-table"),h=Object(r["resolveComponent"])("el-pagination"),j=Object(r["resolveComponent"])("el-card");return Object(r["openBlock"])(),Object(r["createBlock"])(j,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(f,{gutter:12,"margin-bottom":"20px"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(p,{span:6},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(i,{modelValue:s.searchInfo,"onUpdate:modelValue":t[0]||(t[0]=function(e){return s.searchInfo=e}),placeholder:"输入检索的内容",clearable:"",onClear:d.goback},null,8,["modelValue","onClear"])]})),_:1}),Object(r["createVNode"])(p,{span:18,align:"left"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(b,{type:"primary",onClick:d.search},{default:Object(r["withCtx"])((function(){return[o]})),_:1},8,["onClick"]),c]})),_:1})]})),_:1}),Object(r["createVNode"])(g,{data:s.scdata,border:"",style:{width:"100%"},"highlight-current-row":"",onCellDblclick:d.editCell},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(m,{prop:"orderid.orderid",label:"订单号"}),Object(r["createVNode"])(m,{prop:"orderid.customer",label:"客户名称"}),Object(r["createVNode"])(m,{prop:"startday",label:"开始日期"}),Object(r["createVNode"])(m,{prop:"endday",label:"交货日期"}),Object(r["createVNode"])(m,{prop:"status",label:"状态",formatter:d.formatStatus},null,8,["formatter"]),Object(r["createVNode"])(m,{prop:"remark",label:"备注"},{default:Object(r["withCtx"])((function(e){return[e.row.tbremark?(Object(r["openBlock"])(),Object(r["createBlock"])(i,{key:0,modelValue:e.row.remark,"onUpdate:modelValue":function(t){return e.row.remark=t},onBlur:function(t){return d.commitCell(e.row,e.row.remark,e.column)}},null,8,["modelValue","onUpdate:modelValue","onBlur"])):(Object(r["openBlock"])(),Object(r["createElementBlock"])("span",l,Object(r["toDisplayString"])(e.row.remark),1))]})),_:1})]})),_:1},8,["data","onCellDblclick"]),Object(r["createElementVNode"])("div",u,[Object(r["createVNode"])(h,{currentPage:s.currentPage,"onUpdate:currentPage":t[1]||(t[1]=function(e){return s.currentPage=e}),"page-count":s.pageCount,"onUpdate:page-count":t[2]||(t[2]=function(e){return s.pageCount=e}),layout:"total, prev, pager, next",total:s.total,"onUpdate:total":t[3]||(t[3]=function(e){return s.total=e}),onCurrentChange:d.currentChange},null,8,["currentPage","page-count","total","onCurrentChange"])])]})),_:1})}var d=a("1da1"),i=(a("96cf"),a("bc3a")),p=a.n(i),b={name:"scsta",data:function(){return{scdata:[],searchInfo:"",currentPage:1,total:0,pageCount:0}},methods:{search:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("/api/home/processscprepare/",{params:{search:e.searchInfo}});case 2:a=t.sent,0!==a.data.count?e.scdata=a.data.results:e.scdata=[];case 4:case"end":return t.stop()}}),t)})))()},formatStatus:function(e){return"process"===e.status?"进行中":"finish"===e.status?"已完成":"pending"===e.status?"未开始":void 0},getscdata:function(){var e=this;p.a.get("/api/home/processscprepare/").then((function(t){e.scdata=t.data.results,e.total=t.data.count,e.pageCount=Math.ceil(e.total/16)}))},getscdataPage:function(e){var t=this;p.a.get("/api/home/processscprepare/",{params:{page:e}}).then((function(e){t.scdata=e.data.results}))},CurrentChange:function(e){this.getscdataPage(e)},currentChange:function(e){this.currentPage=e,this.getscdataPage(e)},goback:function(){this.getscdataPage(this.currentPage)},editCell:function(e,t){"remark"===t.property&&(e.tbremark=!0)},commitCell:function(e,t,a){"remark"===a.property&&(e.tbremark=!1,delete e.tbremark),this.patchStorge(a.property,t,e)},patchStorge:function(e,t,a){var r={};r[e]=t,p.a.patch("/api/home/processscprepare/"+a.orderid.id+"/",r)}},created:function(){this.getscdata()}},f=(a("d41e"),a("6b0d")),m=a.n(f);const g=m()(b,[["render",s],["__scopeId","data-v-f22ef8f2"]]);t["default"]=g}}]);
//# sourceMappingURL=chunk-018745a4.74a127bd.js.map