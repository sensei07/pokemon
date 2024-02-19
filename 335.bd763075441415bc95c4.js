"use strict";(self.webpackChunktest_project=self.webpackChunktest_project||[]).push([[335],{1128:(e,n,t)=>{t.r(n),t.d(n,{default:()=>D});var o=t(5893),r=t(4611),a=t(7294),i=t(1150),l=t(2276),u=t(5461),c=t(314),s=t(9711),f=t(3942),d=t(1679),p=t(4809),v=t(4268),h=t(7665);var y=function(e){var n;return(null===(n=e.pokemonsPage)||void 0===n?void 0:n.isLoading)||!1},m=function(e){var n;return null===(n=e.pokemonsPage)||void 0===n?void 0:n.error},g=function(e){var n;return(null===(n=e.pokemonsPage)||void 0===n?void 0:n.view)||d.Eh.SMALL},b=function(e){var n;return(null===(n=e.pokemonsPage)||void 0===n?void 0:n.offset)||0},w=function(e){var n,t;return null!==(t=null===(n=e.pokemonsPage)||void 0===n?void 0:n.search)&&void 0!==t?t:""},k=function(e){var n,t;return null!==(t=null===(n=e.pokemonsPage)||void 0===n?void 0:n.type)&&void 0!==t?t:d.nA.ALL},x=function(e){var n;return null===(n=e.pokemonsPage)||void 0===n?void 0:n.pokemonsByType},P=function(e){var n;return(null===(n=e.pokemonsPage)||void 0===n?void 0:n.showPokemonsByType)||!1},S=(0,v.hg)("pokemonsPage/fetchPokemonsList",(function(e,n){return t=void 0,o=void 0,a=function(){var e,t,o,r,a,i,l,u,c;return function(e,n){var t,o,r,a,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return a={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(a){return function(l){return function(a){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,o&&(r=2&a[0]?o.return:a[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,a[1])).done)return r;switch(o=0,r&&(a=[2&a[0],r.value]),a[0]){case 0:case 1:r=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,o=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!((r=(r=i.trys).length>0&&r[r.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!r||a[1]>r[0]&&a[1]<r[3])){i.label=a[1];break}if(6===a[0]&&i.label<r[1]){i.label=r[1],r=a;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(a);break}r[2]&&i.ops.pop(),i.trys.pop();continue}a=n.call(e,i)}catch(e){a=[6,e],o=0}finally{t=r=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,l])}}}(this,(function(s){switch(s.label){case 0:e=n.extra,t=n.rejectWithValue,o=n.getState,r=function(e){var n;return(null===(n=e.pokemonsPage)||void 0===n?void 0:n.limit)||9}(o()),a=function(e){var n,t;return null!==(t=null===(n=e.pokemonsPage)||void 0===n?void 0:n.order)&&void 0!==t?t:"asc"}(o()),i=w(o()),l=b(o()),u=k(o()),s.label=1;case 1:return s.trys.push([1,3,,4]),f={order:a,search:i,type:u},window.history.pushState(null,"",function(e){var n=new URLSearchParams(window.location.search);return Object.entries(e).forEach((function(e){var t=e[0],o=e[1];void 0!==o&&n.set(t,o)})),"?".concat(n.toString())}(f)),[4,e.api.get("/pokemon",{params:{limit:r,offset:l,type:u===d.nA.ALL?void 0:u}})];case 2:if(!(c=s.sent()).data)throw new Error;return[2,c.data.results];case 3:return s.sent(),[2,t("error")];case 4:return[2]}var f}))},new((r=void 0)||(r=Promise))((function(e,n){function i(e){try{u(a.next(e))}catch(e){n(e)}}function l(e){try{u(a.throw(e))}catch(e){n(e)}}function u(n){var t;n.done?e(n.value):(t=n.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,l)}u((a=a.apply(t,o||[])).next())}));var t,o,r,a})),j=t(4e3),O=(0,v.HF)({selectId:function(e){return e.name}}),C=O.getSelectors((function(e){return e.pokemonsPage||O.getInitialState()})),L=(0,v.oM)({name:"pokemonsPageSlice",initialState:O.getInitialState({isLoading:!1,error:void 0,ids:[],entities:{},view:d.Eh.BIG,page:1,offset:0,hasMore:!0,_inited:!1,limit:20,sort:d.Ar.CREATED,search:"",order:"asc",type:d.nA.ALL,pokemonsByType:void 0,showPokemonsByType:!1}),reducers:{setView:function(e,n){e.view=n.payload,localStorage.setItem(h.r,n.payload)},setPage:function(e,n){e.page=n.payload},setOffset:function(e,n){e.offset=n.payload},setOrder:function(e,n){e.order=n.payload},setSort:function(e,n){e.sort=n.payload},setType:function(e,n){e.type=n.payload},setSearch:function(e,n){e.search=n.payload},initState:function(e){e.view=localStorage.getItem(h.r),e._inited=!0}},extraReducers:function(e){e.addCase(S.pending,(function(e,n){e.error=void 0,e.isLoading=!0,n.meta.arg.replace&&O.removeAll(e)})).addCase(S.fulfilled,(function(e,n){e.showPokemonsByType=!1,e.isLoading=!1,e.hasMore=n.payload.length>=e.limit,n.meta.arg.replace?O.setAll(e,n.payload):O.addMany(e,n.payload)})).addCase(S.rejected,(function(e,n){e.isLoading=!1,e.error=n.payload})).addCase(j.x.pending,(function(e){e.error=void 0,e.isLoading=!0})).addCase(j.x.fulfilled,(function(e,n){e.showPokemonsByType=!0,e.isLoading=!1,e.pokemonsByType=n.payload})).addCase(j.x.rejected,(function(e,n){e.isLoading=!1,e.error=n.payload}))}}),T=L.reducer,A=L.actions,N=(0,a.memo)((function(e){var n=e.className,t=(0,f.v9)(C.selectAll),r=function(e){if(e)return e.map((function(e){var n=e.pokemon;return e.slot,{name:n.name,url:n.url}}))}((0,f.v9)(x)),a=(0,f.v9)(P),i=(0,f.v9)(y),l=(0,f.v9)(g);return(0,f.v9)(m)?(0,o.jsx)(p.xv,{text:"Error while loading pokemons"},void 0):(0,o.jsx)(d.WC,{isLoading:i,view:l,pokemons:a?r:t,virtualized:!a,className:n},void 0)})),E=t(5022);var B=function(){return B=Object.assign||function(e){for(var n,t=1,o=arguments.length;t<o;t++)for(var r in n=arguments[t])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e},B.apply(this,arguments)},I=(0,a.memo)((function(e){var n=e.className,t=e.value,i=e.onChange,l=e.type,u=void 0===l?"text":l,c=e.placeholder,s=e.autofocus,f=e.readonly,d=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)n.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(t[o[r]]=e[o[r]])}return t}(e,["className","value","onChange","type","placeholder","autofocus","readonly"]),p=(0,a.useRef)(null),v=(0,a.useState)(!1),h=v[0],y=v[1],m=(0,a.useState)(0),g=m[0],b=m[1],w=h&&!f;return(0,a.useEffect)((function(){var e;s&&(y(!0),null===(e=p.current)||void 0===e||e.focus())}),[s]),{}.fTN1PnWu=f,(0,o.jsxs)("div",B({className:(0,r.A)("LuFDUWoP",{},[n])},{children:[c&&(0,o.jsx)("div",B({className:"emAQQ85i"},{children:"".concat(c,">")}),void 0),(0,o.jsxs)("div",B({className:"y1GiFC_L"},{children:[(0,o.jsx)("input",B({ref:p,type:u,value:t,onChange:function(e){null==i||i(e.target.value),b(e.target.value.length)},className:"LVdIPwcx",onFocus:function(){y(!0)},onBlur:function(){y(!1)},onSelect:function(e){var n;b((null===(n=null==e?void 0:e.target)||void 0===n?void 0:n.selectionStart)||0)},readOnly:f},d),void 0),w&&(0,o.jsx)("span",{className:"lqMFGBuL",style:{left:"".concat(9*g,"px")}},void 0)]}),void 0)]}),void 0)})),R=t(9362),W=t(6974);const G={sortWrapper:"tpJXfdRj",search:"u4Bs2EWm",tabs:"z_PcdRyE"};var M=function(){return M=Object.assign||function(e){for(var n,t=1,o=arguments.length;t<o;t++)for(var r in n=arguments[t])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e},M.apply(this,arguments)},_=(0,a.memo)((function(e){var n,t,i=(0,W.s0)(),l=(0,f.v9)(C.selectAll),c=e.className,s=(0,u.T)(),p=(0,f.v9)(g),v=(0,f.v9)(w),h=(0,f.v9)(k),y=(0,a.useCallback)((function(){s(S({replace:!0}))}),[s]),m=(n=function(){var e=l.find((function(e){return e.name===v}));if(e){s(A.setSearch(""));var n=(0,R.T)(e.url);i("/pokemons/".concat(n))}},500,t=(0,a.useRef)(),(0,a.useCallback)((function(){for(var e=[],o=0;o<arguments.length;o++)e[o]=arguments[o];t.current&&clearTimeout(t.current),t.current=setTimeout((function(){n.apply(void 0,e)}),500)}),[n,500])),b=(0,a.useCallback)((function(e){s(A.setView(e))}),[s]),x=((0,a.useCallback)((function(e){s(A.setSort(e)),s(A.setOffset(0)),y()}),[s,y]),(0,a.useCallback)((function(e){return n=void 0,t=void 0,r=function(){return function(e,n){var t,o,r,a,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return a={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(a){return function(l){return function(a){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,o&&(r=2&a[0]?o.return:a[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,a[1])).done)return r;switch(o=0,r&&(a=[2&a[0],r.value]),a[0]){case 0:case 1:r=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,o=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!((r=(r=i.trys).length>0&&r[r.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!r||a[1]>r[0]&&a[1]<r[3])){i.label=a[1];break}if(6===a[0]&&i.label<r[1]){i.label=r[1],r=a;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(a);break}r[2]&&i.ops.pop(),i.trys.pop();continue}a=n.call(e,i)}catch(e){a=[6,e],o=0}finally{t=r=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,l])}}}(this,(function(n){switch(n.label){case 0:return[4,s(A.setSearch(e))];case 1:return n.sent(),[4,s(A.setOffset(0))];case 2:return n.sent(),[2]}}))},new((o=void 0)||(o=Promise))((function(e,a){function i(e){try{u(r.next(e))}catch(e){a(e)}}function l(e){try{u(r.throw(e))}catch(e){a(e)}}function u(n){var t;n.done?e(n.value):(t=n.value,t instanceof o?t:new o((function(e){e(t)}))).then(i,l)}u((r=r.apply(n,t||[])).next())}));var n,t,o,r}),[s])),P=(0,a.useCallback)((function(e){s(A.setType(e)),s(A.setOffset(0)),y()}),[s,y]);return(0,a.useEffect)((function(){m()}),[m,l,v]),(0,o.jsxs)("div",M({className:(0,r.A)(G.PokemonsPageFilters,{},[c])},{children:[(0,o.jsx)("div",M({className:G.sortWrapper},{children:(0,o.jsx)(d.lx,{view:p,onViewClick:b},void 0)}),void 0),(0,o.jsx)(E.Z,M({className:G.search},{children:(0,o.jsx)(I,{onChange:x,value:v,placeholder:"Search"},void 0)}),void 0),(0,o.jsx)(d.Kj,{value:h,onChangeType:P,className:G.tabs},void 0)]}),void 0)})),F=(0,v.hg)("pokemonsPage/fetchNextPokemonsPage",(function(e,n){return t=void 0,o=void 0,a=function(){var e,t,o,r,a;return function(e,n){var t,o,r,a,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return a={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(a){return function(l){return function(a){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,o&&(r=2&a[0]?o.return:a[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,a[1])).done)return r;switch(o=0,r&&(a=[2&a[0],r.value]),a[0]){case 0:case 1:r=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,o=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!((r=(r=i.trys).length>0&&r[r.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!r||a[1]>r[0]&&a[1]<r[3])){i.label=a[1];break}if(6===a[0]&&i.label<r[1]){i.label=r[1],r=a;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(a);break}r[2]&&i.ops.pop(),i.trys.pop();continue}a=n.call(e,i)}catch(e){a=[6,e],o=0}finally{t=r=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,l])}}}(this,(function(i){return e=n.getState,t=n.dispatch,o=function(e){var n;return null===(n=e.pokemonsPage)||void 0===n?void 0:n.hasMore}(e()),r=b(e()),a=y(e()),o&&!a&&(t(A.setOffset(r+20)),t(S({}))),[2]}))},new((r=void 0)||(r=Promise))((function(e,n){function i(e){try{u(a.next(e))}catch(e){n(e)}}function l(e){try{u(a.throw(e))}catch(e){n(e)}}function u(n){var t;n.done?e(n.value):(t=n.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,l)}u((a=a.apply(t,o||[])).next())}));var t,o,r,a})),V=(0,v.hg)("pokemonsPage/initPokemonsPage",(function(e,n){return t=void 0,o=void 0,a=function(){var t,o,r,a,i,l,u;return function(e,n){var t,o,r,a,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return a={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(a){return function(l){return function(a){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,o&&(r=2&a[0]?o.return:a[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,a[1])).done)return r;switch(o=0,r&&(a=[2&a[0],r.value]),a[0]){case 0:case 1:r=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,o=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!((r=(r=i.trys).length>0&&r[r.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!r||a[1]>r[0]&&a[1]<r[3])){i.label=a[1];break}if(6===a[0]&&i.label<r[1]){i.label=r[1],r=a;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(a);break}r[2]&&i.ops.pop(),i.trys.pop();continue}a=n.call(e,i)}catch(e){a=[6,e],o=0}finally{t=r=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,l])}}}(this,(function(c){return t=n.getState,o=n.dispatch,r=function(e){var n;return null===(n=e.pokemonsPage)||void 0===n?void 0:n._inited}(t()),r||(a=e.get("order"),i=e.get("sort"),l=e.get("search"),u=e.get("type"),a&&o(A.setOrder(a)),i&&o(A.setSort(i)),l&&o(A.setSearch(l)),u&&o(A.setType(u)),o(A.initState()),o(S({}))),[2]}))},new((r=void 0)||(r=Promise))((function(e,n){function i(e){try{u(a.next(e))}catch(e){n(e)}}function l(e){try{u(a.throw(e))}catch(e){n(e)}}function u(n){var t;n.done?e(n.value):(t=n.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,l)}u((a=a.apply(t,o||[])).next())}));var t,o,r,a}));var Q=function(){return Q=Object.assign||function(e){for(var n,t=1,o=arguments.length;t<o;t++)for(var r in n=arguments[t])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e},Q.apply(this,arguments)},z={pokemonsPage:T},U=function(e){var n=e.className,t=(0,u.T)(),f=(0,s.lr)()[0],d=(0,a.useCallback)((function(){t(F())}),[t]);return(0,l.Q)((function(){t(V(f))})),(0,o.jsx)(i.W,Q({reducers:z,removeAfterUnmount:!1},{children:(0,o.jsxs)(c.T,Q({onScrollEnd:d,className:(0,r.A)("e4ymz9Qm",{},[n])},{children:[(0,o.jsx)(_,{},void 0),(0,o.jsx)(N,{className:"AgRBigEx"},void 0)]}),void 0)}),void 0)};const D=(0,a.memo)(U)}}]);