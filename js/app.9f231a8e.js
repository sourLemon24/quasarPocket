(function(e){function t(t){for(var n,c,s=t[0],u=t[1],i=t[2],p=0,f=[];p<s.length;p++)c=s[p],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&f.push(a[c][0]),a[c]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);l&&l(t);while(f.length)f.shift()();return o.push.apply(o,i||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,c=1;c<r.length;c++){var u=r[c];0!==a[u]&&(n=!1)}n&&(o.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},a={app:0},o=[];function c(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"2c70ade5","chunk-d8420b28":"0b3876ab","chunk-d84361c0":"574745df"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(e){var t=[],r=a[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=n);var o,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=c(e);var i=new Error;o=function(t){u.onerror=u.onload=null,clearTimeout(p);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",i.name="ChunkLoadError",i.type=n,i.request=o,r[1](i)}a[e]=void 0}};var p=setTimeout((function(){o({type:"timeout",target:u})}),12e4);u.onerror=u.onload=o,document.head.appendChild(u)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/quasarPocket/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var p=0;p<u.length;p++)t(u[p]);var l=i;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},4360:function(e,t,r){"use strict";var n=r("1da1"),a=(r("96cf"),r("2b0e")),o=r("2f62"),c=(r("d9e2"),r("15fd")),s=r("ade3"),u=r("5530"),i=(r("d3b7"),r("bc3a")),p=r.n(i),l=void 0,f=p.a.create({baseURL:"http://127.0.0.1:8001/api/"});function d(){return g.apply(this,arguments)}function g(){return g=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=Math.floor(.001*Date.now()),T.getters.isRefreshTokenValid(t)){e.next=5;break}T.dispatch("logout"),e.next=9;break;case 5:if(T.getters.isAccessTokenValid(t)){e.next=9;break}return r={refresh:T.state.auth.refreshToken},e.next=9,T.dispatch("authRefresh",r);case 9:return e.abrupt("return",T.state.auth.accessToken);case 10:case"end":return e.stop()}}),e)}))),g.apply(this,arguments)}f.defaults.headers.post["Content-Type"]="application/json",f.interceptors.request.use(function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.skipAuth){e.next=2;break}return e.abrupt("return",t);case 2:return e.next=4,d();case 4:return r=e.sent,e.abrupt("return",Object(u["a"])(Object(u["a"])({},t),{},{headers:{common:Object(s["a"])({},"Authorization","Bearer ".concat(r))}}));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),(function(e){return console.log(e),Promise.reject(e)})),f.interceptors.response.use(function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.status,401===r&&l.$store.dispatch("logout"),e.abrupt("return",t);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());var h=["transactionId"],m=["categoryId"],v={signin:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,f.post("auth/token/obtain/",t,{skipAuth:!0});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),signup:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,f.post("auth/register/",t,{skipAuth:!0});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),refreshToken:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.post("auth/token/refresh/",t,{skipAuth:!0});case 3:return r=e.sent,e.abrupt("return",r);case 7:e.prev=7,e.t0=e["catch"](0),console.log("api/refreshToken error",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));function t(t){return e.apply(this,arguments)}return t}(),getUser:function(){try{return f.get("users/me/")}catch(e){console.log("api/getUser error catch",e),T.dispatch("logout")}},addCategory:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,f.post("pockets/categories/",t);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),getCategories:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r,n,a,o,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.start_date,n=void 0===r?"1900-01-01":r,a=t.end_date,o=void 0===a?"2100-01-01":a,c={start_date:n,end_date:o},e.abrupt("return",f.get("pockets/categories/transactions-by-categories",{params:c}));case 3:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),getTransactions:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r,n,a,o,c,s,u,i,p;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.limit,n=void 0===r?1e3:r,a=t.offset,o=void 0===a?0:a,c=t.start_date,s=void 0===c?"1900-01-01":c,u=t.end_date,i=void 0===u?"2100-01-01":u,p={limit:n,offset:o,start_date:s,end_date:i},e.abrupt("return",f.get("pockets/transactions/",{params:p}));case 3:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),getWidgets:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",f.get("pockets/widgets"));case 1:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),addWidget:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,f.post("pockets/widgets/",t);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),deleteWidget:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,f.delete("pockets/widgets/".concat(t,"/"));case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),addTransaction:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,f.post("pockets/transactions/",t);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),deleteTransaction:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,f.delete("pockets/transactions/".concat(t));case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),editTransaction:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.transactionId,n=Object(c["a"])(t,h),e.next=3,f.patch("pockets/transactions/".concat(r,"/"),n);case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),deleteCategory:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,f.delete("pockets/categories/".concat(t));case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),editCategory:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.categoryId,n=Object(c["a"])(t,m),e.next=3,f.patch("pockets/categories/".concat(r,"/"),n);case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},w={state:{username:localStorage.getItem("user"),email:"",password:"",error:null,accessToken:"",refreshToken:"",accessTokenExpires:null,refreshTokenExpires:null},mutations:{GET_ERROR:function(e,t){e.error=t,alert(t.message)},AUTH_SUCSESS:function(e,t){alert("Вы вошли в систему"),e.email=t.email,e.password=t.password},CLEAR_USER_DATA:function(){console.log("wait reload"),location.reload()}},actions:{AUTH_REQUEST:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,r){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.commit,e.prev=1,r.email!==localStorage.getItem("email")||r.password!==localStorage.getItem("password")){e.next=6;break}n("AUTH_SUCSESS",r),e.next=7;break;case 6:throw new Error("неправильный пароль или почта");case 7:e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](1),n("GET_ERROR",e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));function t(t,r){return e.apply(this,arguments)}return t}(),AUTH_REG:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,r){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=t.commit,e.prev=1,localStorage.setItem("user",r.username),localStorage.setItem("password",r.password),localStorage.setItem("email",r.email),e.next=11;break;case 7:throw e.prev=7,e.t0=e["catch"](1),n("GET_ERROR",e.t0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[1,7]])})));function t(t,r){return e.apply(this,arguments)}return t}(),logout:function(e){var t=e.commit;t("CLEAR_USER_DATA")},authRefresh:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,r){var n,a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,a=t.dispatch,e.prev=1,e.next=4,v.refreshToken(r);case 4:o=e.sent,n("AUTH_SUCSESS",o),e.next=12;break;case 8:e.prev=8,e.t0=e["catch"](1),console.log("Ошибка при обновлении токена",e.t0),a("logout");case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));function t(t,r){return e.apply(this,arguments)}return t}()},getters:{isLoggedIn:function(e){return e.email===localStorage.getItem("email")&&e.password===localStorage.getItem("password")},token:function(e){return e.accessToken},isAccessTokenValid:function(e){return function(t){return t<e.accessTokenExpires}},isRefreshTokenValid:function(e){return function(t){return t<e.refreshTokenExpires}}}},b=r("b85c"),k=(r("a434"),r("c740"),r("d81d"),r("4de4"),r("7db0"),{state:{categories:[]},mutations:{GET_CATEGORIES:function(e,t){e.categories=t},ADD_CATEGORY:function(e,t){e.categories.splice(0,0,t),console.log("Была добавлена категория",t)},UPDATE_CATEGORIES:function(e){console.log("список категорий после обновление через сторе",e.categories)}},actions:{addCategory:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,r){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=t.commit,a=t.state,e.prev=1,n("ADD_CATEGORY",r),console.log("новый список категорий в сторе",a.categories),e.next=10;break;case 6:throw e.prev=6,e.t0=e["catch"](1),console.log("Ошибка добавления категории",e.t0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[1,6]])})));function t(t,r){return e.apply(this,arguments)}return t}(),deleteCategory:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,r){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=t.state,e.prev=1,console.log("Была удалена категория",r),a=n.categories.findIndex((function(e){return e.id===r})),n.categories.splice(a,1),console.log("новый список категорий в сторе",n.categories),e.next=12;break;case 8:throw e.prev=8,e.t0=e["catch"](1),console.log("Ошибка удаления категории",e.t0),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));function t(t,r){return e.apply(this,arguments)}return t}(),editCategory:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,r){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=t.state,e.prev=1,a=n.categories.findIndex((function(e){return e.id===r.categoryId})),n.categories.splice(a,1,r),console.log("Была отредактирована категория",r),console.log("новый список категорий в сторе",n.categories),e.next=12;break;case 8:throw e.prev=8,e.t0=e["catch"](1),console.log("Ошибка редактирования категории",e.t0),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));function t(t,r){return e.apply(this,arguments)}return t}(),updateCategories:function(e){var t,r=e.state,n=r.categories.map((function(e){return e.id})),a=Object(b["a"])(n);try{var o=function(){var e=t.value,r=T.state.transactions.transactions.filter((function(t){return t.category.id===e})),n=r.map((function(e){return+e.amount})).reduce((function(e,t){return e+t}),0);T.state.categories.categories.find((function(t){return t.id===e})).total=n};for(a.s();!(t=a.n()).done;)o()}catch(c){a.e(c)}finally{a.f()}console.log("был обновлен список категорий")},getCategories:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,r){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.prev=1,e.next=4,v.getCategories(r).then((function(e){return e.data}));case 4:a=e.sent,n("GET_CATEGORIES",a),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](1),console.log("Ошибка в store/categories/getCategories",e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));function t(t,r){return e.apply(this,arguments)}return t}()},getters:{}}),R={state:{transactions:[],datePickerTransactions:[]},mutations:{GET_TRANSACTIONS:function(e,t){e.transactions=t.results},ADD_TRANSACTION:function(e,t){e.transactions.splice(0,0,t)}},actions:{addTransaction:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,r){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=t.commit,a=t.dispatch,e.prev=1,console.log("Была добавлена транзакция",r),n("ADD_TRANSACTION",r),a("updateCategories"),e.next=11;break;case 7:throw e.prev=7,e.t0=e["catch"](1),console.log("Ошибка добавления транзакции",e.t0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[1,7]])})));function t(t,r){return e.apply(this,arguments)}return t}(),deleteTransaction:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,r){var n,a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=t.state,a=t.dispatch,e.prev=1,o=n.transactions.findIndex((function(e){return e.id===r})),n.transactions.splice(o,1),console.log("Была удалена транзакция",r),a("updateCategories"),console.log("новый список транзакций в сторе",n.transactions),e.next=13;break;case 9:throw e.prev=9,e.t0=e["catch"](1),console.log("Ошибка удаления транзакции",e.t0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));function t(t,r){return e.apply(this,arguments)}return t}(),editTransaction:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,r){var n,a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=t.state,a=t.dispatch,e.prev=1,console.log("Была отредактирована транзакция",r),o=n.transactions.findIndex((function(e){return e.id===r.id})),n.transactions.splice(o,1,r),a("updateCategories"),console.log("новый список транзакций в сторе",n.transactions),e.next=13;break;case 9:throw e.prev=9,e.t0=e["catch"](1),console.log("Ошибка редактирования транзакции",e.t0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));function t(t,r){return e.apply(this,arguments)}return t}(),getTransactions:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,r){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.prev=1,e.next=4,v.getTransactions(r).then((function(e){return e.data}));case 4:a=e.sent,n("GET_TRANSACTIONS",a),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](1),console.log("Ошибка в store/getInitialData",e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));function t(t,r){return e.apply(this,arguments)}return t}(),updateTransactionsByDatePicker:function(e,t){var r=e.dispatch,n=e.state;n.transactions.splice(0,n.transactions.length,t),r("updateCategories")}},getters:{}},x={state:{widgets:[],showModalAddWidget:!1},mutations:{GET_WIDGETS:function(e,t){e.widgets=t},ADD_WIDGET:function(e,t){e.widgets.splice(0,0,t)},SHOW_ADD_WIDGET_MODAL:function(e){e.showModalAddWidget=!0}},actions:{getWidgets:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.prev=1,e.next=4,v.getWidgets().then((function(e){return e.data}));case 4:n=e.sent,r("GET_WIDGETS",n),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](1),console.log("Ошибка в store/widgets/getWidgets",e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));function t(t){return e.apply(this,arguments)}return t}(),addWidget:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,r){var n,a,o,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,a=t.state,o=t.dispatch,e.prev=1,e.next=4,v.addWidget(r);case 4:c=e.sent,console.log("Был добавлен виджет",c),n("ADD_WIDGET",c.data),o("getWidgets"),console.log("новый список виджетов в сторе",a.widgets),e.next=15;break;case 11:throw e.prev=11,e.t0=e["catch"](1),console.log("Ошибка добавления виджета",e.t0),e.t0;case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));function t(t,r){return e.apply(this,arguments)}return t}(),deleteWidget:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,r){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.state,a=t.dispatch,e.prev=1,e.next=4,v.deleteWidget(r);case 4:console.log("Был удален виджет с id: ",r),a("getWidgets"),console.log("новый список виджетов в сторе",n.widgets),e.next=13;break;case 9:throw e.prev=9,e.t0=e["catch"](1),console.log("Ошибка удаления виджета",e.t0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));function t(t,r){return e.apply(this,arguments)}return t}()},getters:{}};a["a"].use(o["a"]);var y=new o["a"].Store({state:{error:{}},mutations:{GET_USERNAME:function(e,t){e.auth.username=t}},getters:{},modules:{auth:w,categories:k,transactions:R,widgets:x},actions:{getInitialData:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case 1:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()}}),T=t["a"]=y},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d"),r("a1a3");var n=r("2b0e"),a=r("1dce"),o=r.n(a),c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},s=[],u={},i=u,p=r("2877"),l=Object(p["a"])(i,c,s,!1,null,"7b7c5849",null),f=l.exports,d=(r("d3b7"),r("3ca3"),r("ddb0"),r("8c4f")),g=r("4360");n["a"].use(d["a"]);var h=[{path:"/",name:"Main",component:function(){return r.e("about").then(r.bind(null,"cd56"))},meta:{requiresAuth:!0}},{name:"Signin",path:"/auth/signin",component:function(){return r.e("chunk-d84361c0").then(r.bind(null,"54e2"))}},{name:"Signup",path:"/auth/signup",component:function(){return r.e("chunk-d8420b28").then(r.bind(null,"5c9c"))}}],m=new d["a"]({mode:"history",base:"/quasarPocket/",routes:h});m.beforeEach((function(e,t,r){e.matched.some((function(e){return e.meta.requiresAuth}))&&!g["a"].getters.isLoggedIn?r("/auth/signin"):r()}));var v=m,w=(r("c867"),r("e54f"),r("b05d"));n["a"].use(w["a"],{config:{},plugins:{}}),n["a"].use(o.a),n["a"].config.productionTip=!1,new n["a"]({router:v,store:g["a"],render:function(e){return e(f)}}).$mount("#app")},a1a3:function(e,t,r){},c867:function(e,t,r){}});
//# sourceMappingURL=app.9f231a8e.js.map