(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-30a4db60"],{7496:function(e,t,a){"use strict";a.r(t);a("ac1f"),a("841c");var r=a("7a23"),n=function(e){return Object(r["pushScopeId"])("data-v-65eb8844"),e=e(),Object(r["popScopeId"])(),e},o=Object(r["createTextVNode"])("搜索"),c=n((function(){return Object(r["createElementVNode"])("span",{style:{"font-size":"20px","padding-left":"20px","font-weight":"bolder"}},"电路板状态",-1)})),l={key:1},u={class:"demo-pagination-block"};function i(e,t,a,n,i,s){var p=Object(r["resolveComponent"])("el-input"),d=Object(r["resolveComponent"])("el-col"),b=Object(r["resolveComponent"])("el-button"),f=Object(r["resolveComponent"])("el-row"),m=Object(r["resolveComponent"])("el-table-column"),g=Object(r["resolveComponent"])("el-table"),h=Object(r["resolveComponent"])("el-pagination"),j=Object(r["resolveComponent"])("el-card");return Object(r["openBlock"])(),Object(r["createBlock"])(j,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(f,{gutter:12,"margin-bottom":"20px"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(d,{span:6},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(p,{modelValue:i.searchInfo,"onUpdate:modelValue":t[0]||(t[0]=function(e){return i.searchInfo=e}),placeholder:"输入检索的内容",clearable:"",onClear:s.goback},null,8,["modelValue","onClear"])]})),_:1}),Object(r["createVNode"])(d,{span:18,align:"left"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(b,{type:"primary",onClick:s.search},{default:Object(r["withCtx"])((function(){return[o]})),_:1},8,["onClick"]),c]})),_:1})]})),_:1}),Object(r["createVNode"])(g,{data:i.elstadata,border:"",style:{width:"100%"},onCellDblclick:s.editCell,"highlight-current-row":""},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(m,{prop:"orderid.orderid",label:"订单号"}),Object(r["createVNode"])(m,{prop:"orderid.customer",label:"客户名称"}),Object(r["createVNode"])(m,{prop:"startday",label:"开始日期"}),Object(r["createVNode"])(m,{prop:"endday",label:"交货日期"}),Object(r["createVNode"])(m,{prop:"status",label:"状态",formatter:s.formatStatus},null,8,["formatter"]),Object(r["createVNode"])(m,{prop:"remark",label:"备注"},{default:Object(r["withCtx"])((function(e){return[e.row.tbremark?(Object(r["openBlock"])(),Object(r["createBlock"])(p,{key:0,modelValue:e.row.remark,"onUpdate:modelValue":function(t){return e.row.remark=t},onBlur:function(t){return s.commitCell(e.row,e.row.remark,e.column)}},null,8,["modelValue","onUpdate:modelValue","onBlur"])):(Object(r["openBlock"])(),Object(r["createElementBlock"])("span",l,Object(r["toDisplayString"])(e.row.remark),1))]})),_:1})]})),_:1},8,["data","onCellDblclick"]),Object(r["createElementVNode"])("div",u,[Object(r["createVNode"])(h,{currentPage:i.currentPage,"onUpdate:currentPage":t[1]||(t[1]=function(e){return i.currentPage=e}),"page-count":i.pageCount,"onUpdate:page-count":t[2]||(t[2]=function(e){return i.pageCount=e}),layout:"total, prev, pager, next",total:i.total,"onUpdate:total":t[3]||(t[3]=function(e){return i.total=e}),onCurrentChange:s.currentChange},null,8,["currentPage","page-count","total","onCurrentChange"])])]})),_:1})}var s=a("1da1"),p=(a("96cf"),a("bc3a")),d=a.n(p),b={name:"elsta",data:function(){return{elstadata:[],searchInfo:"",currentPage:1,total:0,pageCount:0}},methods:{search:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,d.a.get("/api/home/processelprepare/",{params:{search:e.searchInfo}});case 2:a=t.sent,0!==a.data.count?e.elstadata=a.data.results:e.elstadata=[];case 4:case"end":return t.stop()}}),t)})))()},formatStatus:function(e){return"process"===e.status?"进行中":"finish"===e.status?"已完成":"pending"===e.status?"未开始":void 0},getelsta:function(){var e=this;d.a.get("/api/home/processelprepare/").then((function(t){e.elstadata=t.data.results,e.total=t.data.count,e.pageCount=Math.ceil(e.total/16)}))},getelstaPage:function(e){var t=this;d.a.get("/api/home/processelprepare/",{params:{page:e}}).then((function(e){t.elstadata=e.data.results}))},CurrentChange:function(e){this.getelstaPage(e)},currentChange:function(e){this.currentPage=e,this.getelstaPage(e)},goback:function(){this.getelstaPage(this.currentPage)},editCell:function(e,t){"remark"===t.property&&(e.tbremark=!0)},commitCell:function(e,t,a){"remark"===a.property&&(e.tbremark=!1,delete e.tbremark),this.patchStorge(a.property,t,e)},patchStorge:function(e,t,a){var r={};r[e]=t,console.log(a),d.a.patch("/api/home/processelprepare/"+a.orderid.id+"/",r)}},created:function(){this.getelsta()}},f=(a("cc20"),a("6b0d")),m=a.n(f);const g=m()(b,[["render",i],["__scopeId","data-v-65eb8844"]]);t["default"]=g},"7e56":function(e,t,a){},cc20:function(e,t,a){"use strict";a("7e56")}}]);
//# sourceMappingURL=chunk-30a4db60.e97bd027.js.map