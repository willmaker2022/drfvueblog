(function(e){function t(t){for(var r,c,u=t[0],i=t[1],d=t[2],l=0,s=[];l<u.length;l++)c=u[l],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&s.push(a[c][0]),a[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(t);while(s.length)s.shift()();return o.push.apply(o,d||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var u=n[c];0!==a[u]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},c={app:0},a={app:0},o=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-88474454":"4045905d","chunk-0eab572c":"2b304a7b","chunk-1ae58dfa":"7ca3ca3c","chunk-25c6530c":"2d983ecd","chunk-2dd2c6b4":"1a17dc1b","chunk-3a5c634e":"7aba69f8","chunk-3cf707c7":"93023c8a","chunk-2fbefec8":"f09d16b7","chunk-490ee50d":"0ba5826d","chunk-4afad8aa":"8545368b","chunk-685a7ea5":"2ea13ce6","chunk-3c5f5aa0":"2d8ba233","chunk-c07914c6":"e59769c2","chunk-e86e9d0c":"8c1d99ba","chunk-6dce46c7":"50ed52f0","chunk-a137856e":"8ad78962","chunk-a13ebfaa":"bfb60a45"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-0eab572c":1,"chunk-1ae58dfa":1,"chunk-25c6530c":1,"chunk-2dd2c6b4":1,"chunk-3a5c634e":1,"chunk-2fbefec8":1,"chunk-490ee50d":1,"chunk-4afad8aa":1,"chunk-3c5f5aa0":1,"chunk-c07914c6":1,"chunk-e86e9d0c":1,"chunk-6dce46c7":1,"chunk-a137856e":1};c[e]?t.push(c[e]):0!==c[e]&&n[e]&&t.push(c[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-88474454":"31d6cfe0","chunk-0eab572c":"6b5365ec","chunk-1ae58dfa":"ab8e985d","chunk-25c6530c":"70fa9cf8","chunk-2dd2c6b4":"0373ee2c","chunk-3a5c634e":"7cb6bf86","chunk-3cf707c7":"31d6cfe0","chunk-2fbefec8":"6d70d0d5","chunk-490ee50d":"283a40ed","chunk-4afad8aa":"ed5a8eb2","chunk-685a7ea5":"31d6cfe0","chunk-3c5f5aa0":"aa710adc","chunk-c07914c6":"65811c23","chunk-e86e9d0c":"8d56e0e5","chunk-6dce46c7":"4806dde3","chunk-a137856e":"cd6e7c1f","chunk-a13ebfaa":"31d6cfe0"}[e]+".css",a=i.p+r,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var d=o[u],l=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(l===r||l===a))return t()}var s=document.getElementsByTagName("style");for(u=0;u<s.length;u++){d=s[u],l=d.getAttribute("data-href");if(l===r||l===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||a,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete c[e],f.parentNode.removeChild(f),n(o)},f.href=a;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){c[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=o);var d,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e);var s=new Error;d=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",s.name="ChunkLoadError",s.type=r,s.request=c,n[1](s)}a[e]=void 0}};var f=setTimeout((function(){d({type:"timeout",target:l})}),12e4);l.onerror=l.onload=d,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],l=d.push.bind(d);d.push=t,d=d.slice();for(var s=0;s<d.length;s++)t(d[s]);var f=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"32e3":function(e,t,n){"use strict";n("34ac")},"34ac":function(e,t,n){},"534f":function(e,t,n){e.exports=n.p+"img/logo1.dc2c2fb7.png"},"5fa8":function(e,t,n){},"88ae":function(e,t,n){"use strict";n("e4f7")},aee8:function(e,t,n){"use strict";n("5fa8")},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function c(e,t,n,c,a,o){var u=Object(r["resolveComponent"])("router-view");return c.isRouterAlive?(Object(r["openBlock"])(),Object(r["createBlock"])(u,{key:0})):Object(r["createCommentVNode"])("",!0)}var a={class:"login"},o={class:"login_box"},u={class:"login_logo"},i=["src"],d={class:"btns"},l=Object(r["createTextVNode"])("登录"),s=Object(r["createTextVNode"])("注册"),f={class:"dialog-footer"},m=Object(r["createTextVNode"])("取消"),h=Object(r["createTextVNode"])("确定");function b(e,t,n,c,b,p){var O=Object(r["resolveComponent"])("el-input"),j=Object(r["resolveComponent"])("el-form-item"),g=Object(r["resolveComponent"])("el-button"),w=Object(r["resolveComponent"])("el-form"),k=Object(r["resolveComponent"])("el-row"),x=Object(r["resolveComponent"])("el-dialog");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",a,[Object(r["createElementVNode"])("div",o,[Object(r["createElementVNode"])("div",u,[Object(r["createElementVNode"])("img",{src:b.logourl},null,8,i)]),Object(r["createVNode"])(w,{ref:"loginFormRef",model:b.loginForm,rules:b.loginFormRul,class:"login_form"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(j,{prop:"username"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(O,{modelValue:b.loginForm.username,"onUpdate:modelValue":t[0]||(t[0]=function(e){return b.loginForm.username=e}),placeholder:"请输入用户名"},null,8,["modelValue"])]})),_:1}),Object(r["createVNode"])(j,{prop:"password"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(O,{type:"password",autocomplete:"off",placeholder:"请输入密码",modelValue:b.loginForm.password,"onUpdate:modelValue":t[1]||(t[1]=function(e){return b.loginForm.password=e})},null,8,["modelValue"])]})),_:1}),Object(r["createElementVNode"])("div",d,[Object(r["createVNode"])(j,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(g,{type:"primary",onClick:p.login},{default:Object(r["withCtx"])((function(){return[l]})),_:1},8,["onClick"]),Object(r["createVNode"])(g,{type:"info",onClick:t[2]||(t[2]=function(e){return b.registerVisible=!0})},{default:Object(r["withCtx"])((function(){return[s]})),_:1})]})),_:1})])]})),_:1},8,["model","rules"])]),Object(r["createVNode"])(x,{modelValue:b.registerVisible,"onUpdate:modelValue":t[7]||(t[7]=function(e){return b.registerVisible=e}),title:"注册新用户",width:"30%"},{footer:Object(r["withCtx"])((function(){return[Object(r["createElementVNode"])("span",f,[Object(r["createVNode"])(g,{onClick:t[6]||(t[6]=function(e){return b.registerVisible=!1})},{default:Object(r["withCtx"])((function(){return[m]})),_:1}),Object(r["createVNode"])(g,{type:"primary",onClick:p.addUser},{default:Object(r["withCtx"])((function(){return[h]})),_:1},8,["onClick"])])]})),default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(w,{ref:"addFormRef",model:b.addForm,rules:b.addFormRul,"label-width":"300px",class:"addForm"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(k,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(j,{label:"请输入用户名",prop:"addusername","label-width":"120px"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(O,{modelValue:b.addForm.addusername,"onUpdate:modelValue":t[3]||(t[3]=function(e){return b.addForm.addusername=e})},null,8,["modelValue"])]})),_:1})]})),_:1}),Object(r["createVNode"])(k,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(j,{label:"请输入密码",prop:"addpassword","label-width":"120px"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(O,{type:"password",modelValue:b.addForm.addpassword,"onUpdate:modelValue":t[4]||(t[4]=function(e){return b.addForm.addpassword=e})},null,8,["modelValue"])]})),_:1})]})),_:1}),Object(r["createVNode"])(k,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(j,{label:"请再输入密码",prop:"addpassword2","label-width":"120px"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(O,{type:"password",modelValue:b.addForm.addpassword2,"onUpdate:modelValue":t[5]||(t[5]=function(e){return b.addForm.addpassword2=e})},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1},8,["model","rules"])]})),_:1},8,["modelValue"])])}var p=n("bc3a"),O=n.n(p),j=n("3ef4"),g={data:function(){return{logourl:n("534f"),registerVisible:!1,info:"",loginForm:{username:"",password:"",password2:""},addForm:{addusername:"",addpassword:"",addpassword2:""},loginFormRul:{username:[{required:!0,message:"请输入用户名：",trigger:"blur"},{min:3,max:20,message:"Length should be 3 to 20",trigger:"blur"}],password:[{required:!0,message:"请输入密码：",trigger:"blur"},{min:3,max:20,message:"Length should be 8 to 20",trigger:"blur"}],password2:[{required:!0,message:"请输入密码：",trigger:"blur"},{min:3,max:20,message:"Length should be 8 to 20",trigger:"blur"}]},addFormRul:{addusername:[{required:!0,message:"请输入用户名：",trigger:"blur"},{min:3,max:20,message:"Length should be 8 to 20",trigger:"blur"}],addpassword:[{pattern:/^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$)([^\u4e00-\u9fa5\s]){8,20}$/,required:!0,message:"请输入密码：",trigger:"blur"},{min:8,max:20,message:"8-20位英文字母、数字或者符号（除空格），且字母、数字和标点符号至少包含两种",trigger:"blur"}],addpassword2:[{pattern:/^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$)([^\u4e00-\u9fa5\s]){8,20}$/,required:!0,message:"请输入密码：",trigger:"blur"},{min:8,max:20,message:"8-20位英文字母、数字或者符号（除空格），且字母、数字和标点符号至少包含两种",trigger:"blur"}]}}},methods:{login:function(){var e=this;this.$refs.loginFormRef.validate((function(t){t&&O.a.post("/api/token/",{username:e.loginForm.username,password:e.loginForm.password}).then((function(t){var n=localStorage,r=Date.parse(t.headers.date)+1008e4;n.setItem("access.product",t.data.access),n.setItem("refresh.product",t.data.refresh),n.setItem("expiredTime.product",r),n.setItem("username.product",e.loginForm.username),e.$router.push("/home/")})).catch((function(e){401===e.request.status&&Object(j["a"])("密码错误！")}))}))},addUser:function(){var e=this;this.addForm.addpassword===this.addForm.addpassword2?(O.a.post("/api/user/",{username:this.addForm.addusername,password:this.addForm.addpassword}).then((function(t){e.signupResponse=t.data,alert("用户注册成功，快去登录吧！")})).catch((function(e){alert(e.message)})),this.registerVisible=!1):Object(j["a"])("两次密码输入不同，请重新输入。")}}},w=(n("32e3"),n("6b0d")),k=n.n(w);const x=k()(g,[["render",b],["__scopeId","data-v-330a6eb4"]]);var v=x,V=n("d4ec"),N=n("bee2"),C=function(){function e(){Object(V["a"])(this,e)}return Object(N["a"])(e,[{key:"_getSystem",value:function(){var e=navigator.userAgent.toLowerCase();if(e.indexOf("windows")>=0)return!0}},{key:"_addHandler",value:function(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent?e.attachEvent("on"+t,n):e["on"+t]=n}},{key:"_correct",value:function(){document.getElementsByTagName("body")[0].style.zoom=1/window.devicePixelRatio}},{key:"_watch",value:function(){var e=this;e._addHandler(window,"resize",(function(){e._correct()}))}},{key:"init",value:function(){var e=this;e._getSystem()&&(e._correct(),e._watch())}}]),e}(),_=C,y={name:"App",components:{Login:v},created:function(){(new _).init()},setup:function(){var e=Object(r["ref"])(!0),t=function(){e.value=!1,Object(r["nextTick"])((function(){e.value=!0}))};return Object(r["provide"])("reload",t),{isRouterAlive:e}}};n("aee8");const T=k()(y,[["render",c]]);var F=T,E=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),P=function(e){return Object(r["pushScopeId"])("data-v-85249454"),e=e(),Object(r["popScopeId"])(),e},L=["src"],S=Object(r["createTextVNode"])("  "),I=P((function(){return Object(r["createElementVNode"])("a",{href:"http://www.insaoptics.com/"},"荧飒光学",-1)})),A=P((function(){return Object(r["createElementVNode"])("span",{class:"sub-menu-font"},"生产计划",-1)})),H=Object(r["createTextVNode"])("订单管理"),B=Object(r["createTextVNode"])("电路板状态"),$=Object(r["createTextVNode"])("干涉仪状态"),R=Object(r["createTextVNode"])("机械件状态"),q=Object(r["createTextVNode"])("装配状态"),z=Object(r["createTextVNode"])("测试状态"),U=Object(r["createTextVNode"])("软件状态"),D=P((function(){return Object(r["createElementVNode"])("span",{class:"sub-menu-font"},"维修记录",-1)})),M=Object(r["createTextVNode"])("维修记录"),Z=Object(r["createTextVNode"])("编号生成"),J=P((function(){return Object(r["createElementVNode"])("span",{class:"sub-menu-font"},"库存管理",-1)})),K=Object(r["createTextVNode"])("库存表"),G=Object(r["createTextVNode"])("出库记录"),Q=Object(r["createTextVNode"])("入库记录"),W=Object(r["createTextVNode"])("购买记录"),X={key:0},Y=Object(r["createTextVNode"])("退出");function ee(e,t,n,c,a,o){var u=Object(r["resolveComponent"])("el-col"),i=Object(r["resolveComponent"])("el-menu-item"),d=Object(r["resolveComponent"])("el-sub-menu"),l=Object(r["resolveComponent"])("el-menu"),s=Object(r["resolveComponent"])("el-button"),f=Object(r["resolveComponent"])("el-header"),m=Object(r["resolveComponent"])("router-view"),h=Object(r["resolveComponent"])("el-main"),b=Object(r["resolveComponent"])("el-container");return Object(r["openBlock"])(),Object(r["createBlock"])(b,{style:Object(r["normalizeStyle"])({height:a.clientHeight+"px"})},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(f,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(u,{span:4,class:"header_left"},{default:Object(r["withCtx"])((function(){return[Object(r["createElementVNode"])("img",{class:"myimg",src:a.logourl},null,8,L),S,I]})),_:1}),Object(r["createVNode"])(u,{span:16,class:"header_div"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(l,{"background-color":"#95d475",router:!0,ellipsis:!1,mode:"horizontal"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(d,{index:"product","popper-class":"el-popper"},{title:Object(r["withCtx"])((function(){return[A]})),default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(i,{index:"product"},{default:Object(r["withCtx"])((function(){return[H]})),_:1}),Object(r["createVNode"])(i,{index:"elsta"},{default:Object(r["withCtx"])((function(){return[B]})),_:1}),Object(r["createVNode"])(i,{index:"scsta"},{default:Object(r["withCtx"])((function(){return[$]})),_:1}),Object(r["createVNode"])(i,{index:"mesta"},{default:Object(r["withCtx"])((function(){return[R]})),_:1}),Object(r["createVNode"])(i,{index:"assta"},{default:Object(r["withCtx"])((function(){return[q]})),_:1}),Object(r["createVNode"])(i,{index:"tssta"},{default:Object(r["withCtx"])((function(){return[z]})),_:1}),Object(r["createVNode"])(i,{index:"swsta"},{default:Object(r["withCtx"])((function(){return[U]})),_:1})]})),_:1}),Object(r["createVNode"])(d,{index:"service","popper-class":"el-popper"},{title:Object(r["withCtx"])((function(){return[D]})),default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(i,{index:"service"},{default:Object(r["withCtx"])((function(){return[M]})),_:1}),Object(r["createVNode"])(i,{index:"batchno"},{default:Object(r["withCtx"])((function(){return[Z]})),_:1})]})),_:1}),Object(r["createVNode"])(d,{index:"storage","popper-class":"el-popper"},{title:Object(r["withCtx"])((function(){return[J]})),default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(i,{index:"storage"},{default:Object(r["withCtx"])((function(){return[K]})),_:1}),Object(r["createVNode"])(i,{index:"outstorage"},{default:Object(r["withCtx"])((function(){return[G]})),_:1}),Object(r["createVNode"])(i,{index:"instorage"},{default:Object(r["withCtx"])((function(){return[Q]})),_:1}),Object(r["createVNode"])(i,{index:"buystorage"},{default:Object(r["withCtx"])((function(){return[W]})),_:1})]})),_:1})]})),_:1})]})),_:1}),Object(r["createVNode"])(u,{class:"welcome",span:4},{default:Object(r["withCtx"])((function(){return[a.hasLogin?(Object(r["openBlock"])(),Object(r["createElementBlock"])("span",X,"欢迎，"+Object(r["toDisplayString"])(a.username)+"   ",1)):Object(r["createCommentVNode"])("",!0),Object(r["createElementVNode"])("div",null,[Object(r["createVNode"])(s,{type:"primary",onClick:t[0]||(t[0]=Object(r["withModifiers"])((function(e){return o.loginOut()}),["prevent"]))},{default:Object(r["withCtx"])((function(){return[Y]})),_:1})])]})),_:1})]})),_:1}),Object(r["createVNode"])(h,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(m)]})),_:1})]})),_:1},8,["style"])}n("a9e3");var te={data:function(){return{logourl:n("534f"),hasLogin:!0,username:"",clientHeight:document.body.clientHeight}},mounted:function(){var e=this,t=localStorage,n=Number(t.getItem("expiredTime.product")),r=(new Date).getTime(),c=t.getItem("refresh.product");e.username=t.getItem("username.product"),n>r?e.hasLogin=!0:null!==c?O.a.post("/api/token/refresh/",{refresh:c}).then((function(n){var r=Date.parse(n.headers.date)+6e4;t.setItem("access.product",n.data.access),t.setItem("expiredTime.product",r),t.removeItem("refresh.product"),e.hasLogin=!0})).catch((function(){t.clear(),e.hasLogin=!1})):(t.clear(),e.hasLogin=!1,this.$router.push({name:"Login"})),window.onresize=function(){return function(){window.screenHeight=document.body.clientHeight,e.clientHeight=window.screenHeight}()}},methods:{loginOut:function(){localStorage.clear(),this.hasLogin=!1,this.$router.push({name:"Login"})}},watch:{clientHeight:function(e){if(!this.timer){this.clientHeight=e,this.timer=!0;var t=this;setTimeout((function(){console.log(t.clientHeight),t.timer=!1}),400)}}}};n("88ae");const ne=k()(te,[["render",ee],["__scopeId","data-v-85249454"]]);var re=ne,ce=[{path:"/home",name:"Home",component:re,redirect:"/home/product",meta:{title:"荧飒光学"},children:[{path:"elsta",name:"elsta",component:function(){return Promise.all([n.e("chunk-88474454"),n.e("chunk-2dd2c6b4")]).then(n.bind(null,"7496"))},meta:{title:"电路板状态"}},{path:"product",name:"product",component:function(){return Promise.all([n.e("chunk-88474454"),n.e("chunk-685a7ea5"),n.e("chunk-3cf707c7"),n.e("chunk-3c5f5aa0")]).then(n.bind(null,"a594"))},meta:{title:"订单管理"}},{path:"scsta",name:"scsta",component:function(){return Promise.all([n.e("chunk-88474454"),n.e("chunk-4afad8aa")]).then(n.bind(null,"f6b0"))},meta:{title:"干涉仪状态"}},{path:"mesta",name:"mesta",component:function(){return Promise.all([n.e("chunk-88474454"),n.e("chunk-a137856e")]).then(n.bind(null,"5eda"))},meta:{title:"机械件状态"}},{path:"assta",name:"assta",component:function(){return Promise.all([n.e("chunk-88474454"),n.e("chunk-1ae58dfa")]).then(n.bind(null,"d4c8"))},meta:{title:"调试状态"}},{path:"tssta",name:"tssta",component:function(){return Promise.all([n.e("chunk-88474454"),n.e("chunk-490ee50d")]).then(n.bind(null,"44c4b"))},meta:{title:"测试状态"}},{path:"swsta",name:"swsta",component:function(){return Promise.all([n.e("chunk-88474454"),n.e("chunk-25c6530c")]).then(n.bind(null,"f9f2"))},meta:{title:"软件状态"}},{path:"service",name:"service",component:function(){return Promise.all([n.e("chunk-88474454"),n.e("chunk-685a7ea5"),n.e("chunk-e86e9d0c")]).then(n.bind(null,"f37a"))},meta:{title:"维修报告"}},{path:"storage",name:"storage",component:function(){return Promise.all([n.e("chunk-88474454"),n.e("chunk-685a7ea5"),n.e("chunk-3cf707c7"),n.e("chunk-c07914c6")]).then(n.bind(null,"82e1"))},meta:{title:"库存管理"}},{path:"outstorage",name:"outstorage",component:function(){return Promise.all([n.e("chunk-88474454"),n.e("chunk-0eab572c")]).then(n.bind(null,"81c6"))},meta:{title:"出库记录"}},{path:"instorage",name:"instorage",component:function(){return Promise.all([n.e("chunk-88474454"),n.e("chunk-6dce46c7")]).then(n.bind(null,"6d4f"))},meta:{title:"入库记录"}},{path:"buystorage",name:"buystorage",component:function(){return Promise.all([n.e("chunk-88474454"),n.e("chunk-3a5c634e")]).then(n.bind(null,"5af6"))},meta:{title:"购买记录"}},{path:"batchno",name:"batchno",component:function(){return Promise.all([n.e("chunk-88474454"),n.e("chunk-3cf707c7"),n.e("chunk-2fbefec8")]).then(n.bind(null,"a7a4"))},meta:{title:"编号生成"}}]},{path:"/",name:"Login",component:v,meta:{title:"荧飒光学"}}],ae=Object(E["a"])({history:Object(E["b"])(),routes:ce});ae.beforeEach((function(e,t,n){if("/"===e.path)n();else{var r=localStorage.getItem("username.product");r?n():n("/")}}));var oe=ae,ue=n("c3a1"),ie=(n("7437"),n("c1a0")),de=Object(r["createApp"])(F);de.use(ue["a"],{locale:ie["a"]}),de.use(oe),de.mount("#app"),oe.beforeEach((function(e,t,n){e.meta.title&&(document.title=String(e.meta.title)),n()}))},e4f7:function(e,t,n){}});
//# sourceMappingURL=app.32edb187.js.map