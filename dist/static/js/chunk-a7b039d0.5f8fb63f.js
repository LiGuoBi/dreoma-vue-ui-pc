(window['webpackJsonp']=window['webpackJsonp']||[]).push([['chunk-a7b039d0'],{'2e91':function(t,e,r){'use strict';function n(t,e,r,n,i,o,a){try{var s=t[o](a),c=s.value}catch(u){return void r(u)}s.done?e(c):Promise.resolve(c).then(n,i)}function i(t){return function(){var e=this,r=arguments;return new Promise((function(i,o){var a=t.apply(e,r);function s(t){n(a,i,o,s,c,'next',t)}function c(t){n(a,i,o,s,c,'throw',t)}s(void 0)}))}}r.d(e,'a',(function(){return i}))},'6a61':function(t,e,r){var n=function(t){'use strict';var e,r=Object.prototype,n=r.hasOwnProperty,i='function'===typeof Symbol?Symbol:{},o=i.iterator||'@@iterator',a=i.asyncIterator||'@@asyncIterator',s=i.toStringTag||'@@toStringTag';function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},'')}catch(T){c=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var i=e&&e.prototype instanceof y?e:y,o=Object.create(i.prototype),a=new P(n||[]);return o._invoke=C(t,r,a),o}function l(t,e,r){try{return{type:'normal',arg:t.call(e,r)}}catch(T){return{type:'throw',arg:T}}}t.wrap=u;var f='suspendedStart',h='suspendedYield',v='executing',d='completed',p={};function y(){}function m(){}function g(){}var w={};w[o]=function(){return this};var x=Object.getPrototypeOf,_=x&&x(x(G([])));_&&_!==r&&n.call(_,o)&&(w=_);var b=g.prototype=y.prototype=Object.create(w);function E(t){['next','throw','return'].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function r(i,o,a,s){var c=l(t[i],t,o);if('throw'!==c.type){var u=c.arg,f=u.value;return f&&'object'===typeof f&&n.call(f,'__await')?e.resolve(f.__await).then((function(t){r('next',t,a,s)}),(function(t){r('throw',t,a,s)})):e.resolve(f).then((function(t){u.value=t,a(u)}),(function(t){return r('throw',t,a,s)}))}s(c.arg)}var i;function o(t,n){function o(){return new e((function(e,i){r(t,n,e,i)}))}return i=i?i.then(o,o):o()}this._invoke=o}function C(t,e,r){var n=f;return function(i,o){if(n===v)throw new Error('Generator is already running');if(n===d){if('throw'===i)throw o;return N()}r.method=i,r.arg=o;while(1){var a=r.delegate;if(a){var s=O(a,r);if(s){if(s===p)continue;return s}}if('next'===r.method)r.sent=r._sent=r.arg;else if('throw'===r.method){if(n===f)throw n=d,r.arg;r.dispatchException(r.arg)}else'return'===r.method&&r.abrupt('return',r.arg);n=v;var c=l(t,e,r);if('normal'===c.type){if(n=r.done?d:h,c.arg===p)continue;return{value:c.arg,done:r.done}}'throw'===c.type&&(n=d,r.method='throw',r.arg=c.arg)}}}function O(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,'throw'===r.method){if(t.iterator['return']&&(r.method='return',r.arg=e,O(t,r),'throw'===r.method))return p;r.method='throw',r.arg=new TypeError('The iterator does not provide a \'throw\' method')}return p}var i=l(n,t.iterator,r.arg);if('throw'===i.type)return r.method='throw',r.arg=i.arg,r.delegate=null,p;var o=i.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,'return'!==r.method&&(r.method='next',r.arg=e),r.delegate=null,p):o:(r.method='throw',r.arg=new TypeError('iterator result is not an object'),r.delegate=null,p)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type='normal',delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:'root'}],t.forEach(j,this),this.reset(!0)}function G(t){if(t){var r=t[o];if(r)return r.call(t);if('function'===typeof t.next)return t;if(!isNaN(t.length)){var i=-1,a=function r(){while(++i<t.length)if(n.call(t,i))return r.value=t[i],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:N}}function N(){return{value:e,done:!0}}return m.prototype=b.constructor=g,g.constructor=m,m.displayName=c(g,s,'GeneratorFunction'),t.isGeneratorFunction=function(t){var e='function'===typeof t&&t.constructor;return!!e&&(e===m||'GeneratorFunction'===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c(t,s,'GeneratorFunction')),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},E(L.prototype),L.prototype[a]=function(){return this},t.AsyncIterator=L,t.async=function(e,r,n,i,o){void 0===o&&(o=Promise);var a=new L(u(e,r,n,i),o);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(b),c(b,s,'Generator'),b[o]=function(){return this},b.toString=function(){return'[object Generator]'},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=G,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method='next',this.arg=e,this.tryEntries.forEach(k),!t)for(var r in this)'t'===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if('throw'===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function i(n,i){return s.type='throw',s.arg=t,r.next=n,i&&(r.method='next',r.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if('root'===a.tryLoc)return i('end');if(a.tryLoc<=this.prev){var c=n.call(a,'catchLoc'),u=n.call(a,'finallyLoc');if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!u)throw new Error('try statement without catch or finally');if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,'finallyLoc')&&this.prev<i.finallyLoc){var o=i;break}}o&&('break'===t||'continue'===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method='next',this.next=o.finallyLoc,p):this.complete(a)},complete:function(t,e){if('throw'===t.type)throw t.arg;return'break'===t.type||'continue'===t.type?this.next=t.arg:'return'===t.type?(this.rval=this.arg=t.arg,this.method='return',this.next='end'):'normal'===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if('throw'===n.type){var i=n.arg;k(r)}return i}}throw new Error('illegal catch attempt')},delegateYield:function(t,r,n){return this.delegate={iterator:G(t),resultName:r,nextLoc:n},'next'===this.method&&(this.arg=e),p}},t}(t.exports);try{regeneratorRuntime=n}catch(i){Function('r','regeneratorRuntime = r')(n)}},d67d:function(t,e,r){'use strict';r('d8db')},d8db:function(t,e,r){},d938:function(t,e,r){'use strict';r('fa09')},e2e0:function(t,e,r){'use strict';r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r('div',[r('el-card',{staticClass:'box-card'},[r('div',{staticClass:'clearfix',attrs:{slot:'header'},slot:'header'},[r('span',[t._v('发展历程1')])]),r('vrs-course1'),r('dl',{staticClass:'tip-box'},[r('dt',[t._v('TIP：居中 item：odd可自定义对齐方式')]),r('dd',[t._v('组件位置：@/views/common/course/vrs-course1/vrs-course1.vue')])])],1),r('el-card',{staticClass:'box-card'},[r('div',{staticClass:'clearfix',attrs:{slot:'header'},slot:'header'},[r('span',[t._v('发展历程2')])]),r('vrs-course2'),r('dl',{staticClass:'tip-box'},[r('dt',[t._v('TIP：根据index更改标识颜色')]),r('dd',[t._v('组件位置：@/views/common/course/vrs-course2/vrs-course2.vue')])])],1)],1)},i=[],o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r('div',{staticClass:'vrs-course1'},[t._m(0),t._l(t.develop,(function(e,n){return r('div',{key:n,staticClass:'vrs-item flex'},[r('div',{staticClass:'vrs-item-inner flex column flex-item'},[r('div',{staticClass:'vrs-time'},[t._v(t._s(e.title))]),r('div',{staticClass:'vrs-content'},[t._v(t._s(e.description))])]),t._m(1,!0),r('div',{staticClass:'flex-item'})])})),t._m(2)],2)},a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r('div',{staticClass:'vrs-radius flex flex-l vrs-before'},[r('span',{staticClass:'vrs-radius-span'}),r('em')])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r('div',{staticClass:'vrs-radius flex-l'},[r('span',{staticClass:'vrs-radius-span'},[r('div')]),r('em')])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r('div',{staticClass:'vrs-radius flex flex-l'},[r('span',{staticClass:'vrs-radius-span'})])}],s=(r('6a61'),r('2e91')),c={name:'',components:{},data:function(){return{develop:[]}},computed:{},created:function(){var t=Object(s['a'])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.develop=[{title:'2019.05',description:'中共十一届三中全会举行。邓小平在全会前召开的中央工作会议闭幕会上作《解放思想，实事求是，团结一致向前看》的总结讲话，这篇讲话实际上是全会的主题报告。'},{title:'2019.05',description:'中共十一届三中全会举行。邓小平在全会前召开的中央工作会议闭幕会上作《解放思想，实事求是，团结一致向前看》的总结讲话，这篇讲话实际上是全会的主题报告。'},{title:'2019.05',description:'中共十一届三中全会举行。邓小平在全会前召开的中央工作会议闭幕会上作《解放思想，实事求是，团结一致向前看》的总结讲话，这篇讲话实际上是全会的主题报告。'},{title:'2019.05',description:'中共十一届三中全会举行。邓小平在全会前召开的中央工作会议闭幕会上作《解放思想，实事求是，团结一致向前看》的总结讲话，这篇讲话实际上是全会的主题报告。'}];case 1:case'end':return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),methods:{}},u=c,l=(r('d67d'),r('c701')),f=Object(l['a'])(u,o,a,!1,null,'719c4bf5',null),h=f.exports,v=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r('div',{staticClass:'vrs-course2 container'},t._l(t.aboutDev,(function(e,n){return r('div',{key:n,staticClass:'vrs-list flex between'},[r('span',[t._v(t._s(e.title))]),t._m(0,!0),r('p',{staticClass:'vrs-text'},[t._v(t._s(e.description))])])})),0)},d=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r('div',{staticClass:'vrs-line'},[r('span',{staticClass:'vrs-yuan'}),r('span',{staticClass:'vrs-xian'})])}],p={name:'',components:{},data:function(){return{aboutDev:[{title:'2016年',description:'国家主席习近平18日应约同美国总统特朗普通电话'},{title:'2017年',description:'特朗普表示，我期待着同习近平主席在二十国集团领导人大阪峰会期间再次会晤，就双边关系和我们共同关心的问题进行深入沟通。美方重视美中经贸合作，希望双方工作团队能展开沟通，尽早找到解决当前分歧的办法。相信全世界都希望看到美中达成协议。'},{title:'2018年',description:'习近平指出，近一段时间来，中美关系遇到一些困难，这不符合双方利益。中美合则两利、斗则俱伤。双方应该按照我们达成的共识，在相互尊重、互惠互利基础上，推进以协调、合作、稳定为基调的中美关系。'},{title:'2019年',description:'中美作为全球最大的两个经济体，要共同发挥引领作用，推动二十国集团大阪峰会达成积极成果，为全球市场注入信心和活力。我愿意同总统先生在二十国集团领导人大阪峰会期间举行会晤，就事关中美关系发展的根本性问题交换意见。'}]}},created:function(){}},y=p,m=(r('d938'),Object(l['a'])(y,v,d,!1,null,'11674817',null)),g=m.exports,w={name:'course',components:{vrsCourse1:h,vrsCourse2:g}},x=w,_=Object(l['a'])(x,n,i,!1,null,null,null);e['default']=_.exports},fa09:function(t,e,r){}}])