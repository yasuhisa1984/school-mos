!function(t){var e=function(){"use strict";return{isMsie:function(){return!!/(msie|trident)/i.test(navigator.userAgent)&&navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2]},isBlankString:function(t){return!t||/^\s*$/.test(t)},escapeRegExChars:function(t){return t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")},isString:function(t){return"string"==typeof t},isNumber:function(t){return"number"==typeof t},isArray:t.isArray,isFunction:t.isFunction,isObject:t.isPlainObject,isUndefined:function(t){return void 0===t},toStr:function(t){return e.isUndefined(t)||null===t?"":t+""},bind:t.proxy,each:function(e,n){function i(t,e){return n(e,t)}t.each(e,i)},map:t.map,filter:t.grep,every:function(e,n){var i=!0;return e?(t.each(e,function(t,r){if(!(i=n.call(null,r,t,e)))return!1}),!!i):i},some:function(e,n){var i=!1;return e?(t.each(e,function(t,r){if(i=n.call(null,r,t,e))return!1}),!!i):i},mixin:t.extend,getUniqueId:function(){var t=0;return function(){return t++}}(),templatify:function(e){function n(){return String(e)}return t.isFunction(e)?e:n},defer:function(t){setTimeout(t,0)},debounce:function(t,e,n){var i,r;return function(){var s,o,u=this,a=arguments;return s=function(){i=null,n||(r=t.apply(u,a))},o=n&&!i,clearTimeout(i),i=setTimeout(s,e),o&&(r=t.apply(u,a)),r}},throttle:function(t,e){var n,i,r,s,o,u;return o=0,u=function(){o=new Date,r=null,s=t.apply(n,i)},function(){var a=new Date,c=e-(a-o);return n=this,i=arguments,c<=0?(clearTimeout(r),r=null,o=a,s=t.apply(n,i)):r||(r=setTimeout(u,c)),s}},noop:function(){}}}(),n="0.10.5",i=function(){"use strict";function t(t){return t=e.toStr(t),t?t.split(/\s+/):[]}function n(t){return t=e.toStr(t),t?t.split(/\W+/):[]}function i(t){return function(){var n=[].slice.call(arguments,0);return function(i){var r=[];return e.each(n,function(n){r=r.concat(t(e.toStr(i[n])))}),r}}}return{nonword:n,whitespace:t,obj:{nonword:i(n),whitespace:i(t)}}}(),r=function(){"use strict";function n(n){this.maxSize=e.isNumber(n)?n:100,this.reset(),this.maxSize<=0&&(this.set=this.get=t.noop)}function i(){this.head=this.tail=null}function r(t,e){this.key=t,this.val=e,this.prev=this.next=null}return e.mixin(n.prototype,{set:function(t,e){var n,i=this.list.tail;this.size>=this.maxSize&&(this.list.remove(i),delete this.hash[i.key]),(n=this.hash[t])?(n.val=e,this.list.moveToFront(n)):(n=new r(t,e),this.list.add(n),this.hash[t]=n,this.size++)},get:function(t){var e=this.hash[t];if(e)return this.list.moveToFront(e),e.val},reset:function(){this.size=0,this.hash={},this.list=new i}}),e.mixin(i.prototype,{add:function(t){this.head&&(t.next=this.head,this.head.prev=t),this.head=t,this.tail=this.tail||t},remove:function(t){t.prev?t.prev.next=t.next:this.head=t.next,t.next?t.next.prev=t.prev:this.tail=t.prev},moveToFront:function(t){this.remove(t),this.add(t)}}),n}(),s=function(){"use strict";function t(t){this.prefix=["__",t,"__"].join(""),this.ttlKey="__ttl__",this.keyMatcher=new RegExp("^"+e.escapeRegExChars(this.prefix))}function n(){return(new Date).getTime()}function i(t){return JSON.stringify(e.isUndefined(t)?null:t)}function r(t){return JSON.parse(t)}var s,o;try{s=window.localStorage,s.setItem("~~~","!"),s.removeItem("~~~")}catch(t){s=null}return o=s&&window.JSON?{_prefix:function(t){return this.prefix+t},_ttlKey:function(t){return this._prefix(t)+this.ttlKey},get:function(t){return this.isExpired(t)&&this.remove(t),r(s.getItem(this._prefix(t)))},set:function(t,r,o){return e.isNumber(o)?s.setItem(this._ttlKey(t),i(n()+o)):s.removeItem(this._ttlKey(t)),s.setItem(this._prefix(t),i(r))},remove:function(t){return s.removeItem(this._ttlKey(t)),s.removeItem(this._prefix(t)),this},clear:function(){var t,e,n=[],i=s.length;for(t=0;t<i;t++)(e=s.key(t)).match(this.keyMatcher)&&n.push(e.replace(this.keyMatcher,""));for(t=n.length;t--;)this.remove(n[t]);return this},isExpired:function(t){var i=r(s.getItem(this._ttlKey(t)));return!!(e.isNumber(i)&&n()>i)}}:{get:e.noop,set:e.noop,remove:e.noop,clear:e.noop,isExpired:e.noop},e.mixin(t.prototype,o),t}(),o=function(){"use strict";function n(e){e=e||{},this.cancelled=!1,this.lastUrl=null,this._send=e.transport?i(e.transport):t.ajax,this._get=e.rateLimiter?e.rateLimiter(this._get):this._get,this._cache=!1===e.cache?new r(0):a}function i(n){return function(i,r){function s(t){e.defer(function(){u.resolve(t)})}function o(t){e.defer(function(){u.reject(t)})}var u=t.Deferred();return n(i,r,s,o),u}}var s=0,o={},u=6,a=new r(10);return n.setMaxPendingRequests=function(t){u=t},n.resetCache=function(){a.reset()},e.mixin(n.prototype,{_get:function(t,e,n){function i(e){n&&n(null,e),h._cache.set(t,e)}function r(){n&&n(!0)}function a(){s--,delete o[t],h.onDeckRequestArgs&&(h._get.apply(h,h.onDeckRequestArgs),h.onDeckRequestArgs=null)}var c,h=this;this.cancelled||t!==this.lastUrl||((c=o[t])?c.done(i).fail(r):s<u?(s++,o[t]=this._send(t,e).done(i).fail(r).always(a)):this.onDeckRequestArgs=[].slice.call(arguments,0))},get:function(t,n,i){var r;return e.isFunction(n)&&(i=n,n={}),this.cancelled=!1,this.lastUrl=t,(r=this._cache.get(t))?e.defer(function(){i&&i(null,r)}):this._get(t,n,i),!!r},cancel:function(){this.cancelled=!0}}),n}(),u=function(){"use strict";function n(e){e=e||{},e.datumTokenizer&&e.queryTokenizer||t.error("datumTokenizer and queryTokenizer are both required"),this.datumTokenizer=e.datumTokenizer,this.queryTokenizer=e.queryTokenizer,this.reset()}function i(t){return t=e.filter(t,function(t){return!!t}),t=e.map(t,function(t){return t.toLowerCase()})}function r(){return{ids:[],children:{}}}function s(t){for(var e={},n=[],i=0,r=t.length;i<r;i++)e[t[i]]||(e[t[i]]=!0,n.push(t[i]));return n}function o(t,e){function n(t,e){return t-e}var i=0,r=0,s=[];t=t.sort(n),e=e.sort(n);for(var o=t.length,u=e.length;i<o&&r<u;)t[i]<e[r]?i++:t[i]>e[r]?r++:(s.push(t[i]),i++,r++);return s}return e.mixin(n.prototype,{bootstrap:function(t){this.datums=t.datums,this.trie=t.trie},add:function(t){var n=this;t=e.isArray(t)?t:[t],e.each(t,function(t){var s,o;s=n.datums.push(t)-1,o=i(n.datumTokenizer(t)),e.each(o,function(t){var e,i,o;for(e=n.trie,i=t.split("");o=i.shift();)e=e.children[o]||(e.children[o]=r()),e.ids.push(s)})})},get:function(t){var n,r,u=this;return n=i(this.queryTokenizer(t)),e.each(n,function(t){var e,n,i,s;if(r&&0===r.length)return!1;for(e=u.trie,n=t.split("");e&&(i=n.shift());)e=e.children[i];if(!e||0!==n.length)return r=[],!1;s=e.ids.slice(0),r=r?o(r,s):s}),r?e.map(s(r),function(t){return u.datums[t]}):[]},reset:function(){this.datums=[],this.trie=r()},serialize:function(){return{datums:this.datums,trie:this.trie}}}),n}(),a=function(){"use strict";function i(t){return t.local||null}function r(i){var r,s;return s={url:null,thumbprint:"",ttl:864e5,filter:null,ajax:{}},(r=i.prefetch||null)&&(r=e.isString(r)?{url:r}:r,r=e.mixin(s,r),r.thumbprint=n+r.thumbprint,r.ajax.type=r.ajax.type||"GET",r.ajax.dataType=r.ajax.dataType||"json",!r.url&&t.error("prefetch requires url to be set")),r}function s(n){function i(t){return function(n){return e.debounce(n,t)}}function r(t){return function(n){return e.throttle(n,t)}}var s,o;return o={url:null,cache:!0,wildcard:"%QUERY",replace:null,rateLimitBy:"debounce",rateLimitWait:300,send:null,filter:null,ajax:{}},(s=n.remote||null)&&(s=e.isString(s)?{url:s}:s,s=e.mixin(o,s),s.rateLimiter=/^throttle$/i.test(s.rateLimitBy)?r(s.rateLimitWait):i(s.rateLimitWait),s.ajax.type=s.ajax.type||"GET",s.ajax.dataType=s.ajax.dataType||"json",delete s.rateLimitBy,delete s.rateLimitWait,!s.url&&t.error("remote requires url to be set")),s}return{local:i,prefetch:r,remote:s}}();!function(n){"use strict";function r(e){e&&(e.local||e.prefetch||e.remote)||t.error("one of local, prefetch, or remote is required"),this.limit=e.limit||5,this.sorter=c(e.sorter),this.dupDetector=e.dupDetector||h,this.local=a.local(e),this.prefetch=a.prefetch(e),this.remote=a.remote(e),this.cacheKey=this.prefetch?this.prefetch.cacheKey||this.prefetch.url:null,this.index=new u({datumTokenizer:e.datumTokenizer,queryTokenizer:e.queryTokenizer}),this.storage=this.cacheKey?new s(this.cacheKey):null}function c(t){function n(e){return e.sort(t)}function i(t){return t}return e.isFunction(t)?n:i}function h(){return!1}var l,d;l=n.Bloodhound,d={data:"data",protocol:"protocol",thumbprint:"thumbprint"},n.Bloodhound=r,r.noConflict=function(){return n.Bloodhound=l,r},r.tokenizers=i,e.mixin(r.prototype,{_loadPrefetch:function(e){function n(t){s.clear(),s.add(e.filter?e.filter(t):t),s._saveToStorage(s.index.serialize(),e.thumbprint,e.ttl)}var i,r,s=this;return(i=this._readFromStorage(e.thumbprint))?(this.index.bootstrap(i),r=t.Deferred().resolve()):r=t.ajax(e.url,e.ajax).done(n),r},_getFromRemote:function(t,e){function n(t,n){e(t?[]:s.remote.filter?s.remote.filter(n):n)}var i,r,s=this;if(this.transport)return t=t||"",r=encodeURIComponent(t),i=this.remote.replace?this.remote.replace(this.remote.url,t):this.remote.url.replace(this.remote.wildcard,r),this.transport.get(i,this.remote.ajax,n)},_cancelLastRemoteRequest:function(){this.transport&&this.transport.cancel()},_saveToStorage:function(t,e,n){this.storage&&(this.storage.set(d.data,t,n),this.storage.set(d.protocol,location.protocol,n),this.storage.set(d.thumbprint,e,n))},_readFromStorage:function(t){var e,n={};return this.storage&&(n.data=this.storage.get(d.data),n.protocol=this.storage.get(d.protocol),n.thumbprint=this.storage.get(d.thumbprint)),e=n.thumbprint!==t||n.protocol!==location.protocol,n.data&&!e?n.data:null},_initialize:function(){function n(){r.add(e.isFunction(s)?s():s)}var i,r=this,s=this.local;return i=this.prefetch?this._loadPrefetch(this.prefetch):t.Deferred().resolve(),s&&i.done(n),this.transport=this.remote?new o(this.remote):null,this.initPromise=i.promise()},initialize:function(t){return!this.initPromise||t?this._initialize():this.initPromise},add:function(t){this.index.add(t)},get:function(t,n){function i(t){var i=s.slice(0);e.each(t,function(t){var n;return n=e.some(i,function(e){return r.dupDetector(t,e)}),!n&&i.push(t),i.length<r.limit}),n&&n(r.sorter(i))}var r=this,s=[],o=!1;s=this.index.get(t),s=this.sorter(s).slice(0,this.limit),s.length<this.limit?o=this._getFromRemote(t,i):this._cancelLastRemoteRequest(),o||(s.length>0||!this.transport)&&n&&n(s)},clear:function(){this.index.reset()},clearPrefetchCache:function(){this.storage&&this.storage.clear()},clearRemoteCache:function(){this.transport&&o.resetCache()},ttAdapter:function(){return e.bind(this.get,this)}})}(this);var c=function(){return{wrapper:'<span class="twitter-typeahead"></span>',dropdown:'<span class="tt-dropdown-menu"></span>',dataset:'<div class="tt-dataset-%CLASS%"></div>',suggestions:'<span class="tt-suggestions"></span>',suggestion:'<div class="tt-suggestion"></div>'}}(),h=function(){"use strict";var t={wrapper:{position:"relative",display:"inline-block"},hint:{position:"absolute",top:"0",left:"0",borderColor:"transparent",boxShadow:"none",opacity:"1"},input:{position:"relative",verticalAlign:"top",backgroundColor:"transparent"},inputWithNoHint:{position:"relative",verticalAlign:"top"},dropdown:{position:"absolute",top:"100%",left:"0",zIndex:"100",display:"none"},suggestions:{display:"block"},suggestion:{whiteSpace:"nowrap",cursor:"pointer"},suggestionChild:{whiteSpace:"normal"},ltr:{left:"0",right:"auto"},rtl:{left:"auto",right:" 0"}};return e.isMsie()&&e.mixin(t.input,{backgroundImage:"url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)"}),e.isMsie()&&e.isMsie()<=7&&e.mixin(t.input,{marginTop:"-1px"}),t}(),l=function(){"use strict";function n(e){e&&e.el||t.error("EventBus initialized without el"),this.$el=t(e.el)}return e.mixin(n.prototype,{trigger:function(t){var e=[].slice.call(arguments,1);this.$el.trigger("typeahead:"+t,e)}}),n}(),d=function(){"use strict";function t(t,e,n,i){var r;if(!n)return this;for(e=e.split(a),n=i?u(n,i):n,this._callbacks=this._callbacks||{};r=e.shift();)this._callbacks[r]=this._callbacks[r]||{sync:[],async:[]},this._callbacks[r][t].push(n);return this}function e(e,n,i){return t.call(this,"async",e,n,i)}function n(e,n,i){return t.call(this,"sync",e,n,i)}function i(t){var e;if(!this._callbacks)return this;for(t=t.split(a);e=t.shift();)delete this._callbacks[e];return this}function r(t){var e,n,i,r,o;if(!this._callbacks)return this;for(t=t.split(a),i=[].slice.call(arguments,1);(e=t.shift())&&(n=this._callbacks[e]);)r=s(n.sync,this,[e].concat(i)),o=s(n.async,this,[e].concat(i)),r()&&c(o);return this}function s(t,e,n){function i(){for(var i,r=0,s=t.length;!i&&r<s;r+=1)i=!1===t[r].apply(e,n);return!i}return i}function o(){return window.setImmediate?function(t){setImmediate(function(){t()})}:function(t){setTimeout(function(){t()},0)}}function u(t,e){return t.bind?t.bind(e):function(){t.apply(e,[].slice.call(arguments,0))}}var a=/\s+/,c=o();return{onSync:n,onAsync:e,off:i,trigger:r}}(),p=function(t){"use strict";function n(t,n,i){for(var r,s=[],o=0,u=t.length;o<u;o++)s.push(e.escapeRegExChars(t[o]));return r=i?"\\b("+s.join("|")+")\\b":"("+s.join("|")+")",n?new RegExp(r):new RegExp(r,"i")}var i={node:null,pattern:null,tagName:"strong",className:null,wordsOnly:!1,caseSensitive:!1};return function(r){function s(e){var n,i,s;return(n=u.exec(e.data))&&(s=t.createElement(r.tagName),r.className&&(s.className=r.className),i=e.splitText(n.index),i.splitText(n[0].length),s.appendChild(i.cloneNode(!0)),e.parentNode.replaceChild(s,i)),!!n}function o(t,e){for(var n,i=3,r=0;r<t.childNodes.length;r++)n=t.childNodes[r],n.nodeType===i?r+=e(n)?1:0:o(n,e)}var u;r=e.mixin({},i,r),r.node&&r.pattern&&(r.pattern=e.isArray(r.pattern)?r.pattern:[r.pattern],u=n(r.pattern,r.caseSensitive,r.wordsOnly),o(r.node,s))}}(window.document),f=function(){"use strict";function n(n){var r,s,u,a,c=this;n=n||{},n.input||t.error("input is missing"),r=e.bind(this._onBlur,this),s=e.bind(this._onFocus,this),u=e.bind(this._onKeydown,this),a=e.bind(this._onInput,this),this.$hint=t(n.hint),this.$input=t(n.input).on("blur.tt",r).on("focus.tt",s).on("keydown.tt",u),0===this.$hint.length&&(this.setHint=this.getHint=this.clearHint=this.clearHintIfInvalid=e.noop),e.isMsie()?this.$input.on("keydown.tt keypress.tt cut.tt paste.tt",function(t){o[t.which||t.keyCode]||e.defer(e.bind(c._onInput,c,t))}):this.$input.on("input.tt",a),this.query=this.$input.val(),this.$overflowHelper=i(this.$input)}function i(e){return t('<pre aria-hidden="true"></pre>').css({position:"absolute",visibility:"hidden",whiteSpace:"pre",fontFamily:e.css("font-family"),fontSize:e.css("font-size"),fontStyle:e.css("font-style"),fontVariant:e.css("font-variant"),fontWeight:e.css("font-weight"),wordSpacing:e.css("word-spacing"),letterSpacing:e.css("letter-spacing"),textIndent:e.css("text-indent"),textRendering:e.css("text-rendering"),textTransform:e.css("text-transform")}).insertAfter(e)}function r(t,e){return n.normalizeQuery(t)===n.normalizeQuery(e)}function s(t){return t.altKey||t.ctrlKey||t.metaKey||t.shiftKey}var o;return o={9:"tab",27:"esc",37:"left",39:"right",13:"enter",38:"up",40:"down"},n.normalizeQuery=function(t){return(t||"").replace(/^\s*/g,"").replace(/\s{2,}/g," ")},e.mixin(n.prototype,d,{_onBlur:function(){this.resetInputValue(),this.trigger("blurred")},_onFocus:function(){this.trigger("focused")},_onKeydown:function(t){var e=o[t.which||t.keyCode];this._managePreventDefault(e,t),e&&this._shouldTrigger(e,t)&&this.trigger(e+"Keyed",t)},_onInput:function(){this._checkInputValue()},_managePreventDefault:function(t,e){var n,i,r;switch(t){case"tab":i=this.getHint(),r=this.getInputValue(),n=i&&i!==r&&!s(e);break;case"up":case"down":n=!s(e);break;default:n=!1}n&&e.preventDefault()},_shouldTrigger:function(t,e){var n;switch(t){case"tab":n=!s(e);break;default:n=!0}return n},_checkInputValue:function(){var t,e,n;t=this.getInputValue(),e=r(t,this.query),n=!!e&&this.query.length!==t.length,this.query=t,e?n&&this.trigger("whitespaceChanged",this.query):this.trigger("queryChanged",this.query)},focus:function(){this.$input.focus()},blur:function(){this.$input.blur()},getQuery:function(){return this.query},setQuery:function(t){this.query=t},getInputValue:function(){return this.$input.val()},setInputValue:function(t,e){this.$input.val(t),e?this.clearHint():this._checkInputValue()},resetInputValue:function(){this.setInputValue(this.query,!0)},getHint:function(){return this.$hint.val()},setHint:function(t){this.$hint.val(t)},clearHint:function(){this.setHint("")},clearHintIfInvalid:function(){var t,e,n,i;t=this.getInputValue(),e=this.getHint(),n=t!==e&&0===e.indexOf(t),!(i=""!==t&&n&&!this.hasOverflow())&&this.clearHint()},getLanguageDirection:function(){return(this.$input.css("direction")||"ltr").toLowerCase()},hasOverflow:function(){var t=this.$input.width()-2;return this.$overflowHelper.text(this.getInputValue()),this.$overflowHelper.width()>=t},isCursorAtEnd:function(){var t,n,i;return t=this.$input.val().length,n=this.$input[0].selectionStart,e.isNumber(n)?n===t:!document.selection||(i=document.selection.createRange(),i.moveStart("character",-t),t===i.text.length)},destroy:function(){this.$hint.off(".tt"),this.$input.off(".tt"),this.$hint=this.$input=this.$overflowHelper=null}}),n}(),g=function(){"use strict";function n(n){n=n||{},n.templates=n.templates||{},n.source||t.error("missing source"),n.name&&!s(n.name)&&t.error("invalid dataset name: "+n.name),this.query=null,this.highlight=!!n.highlight,this.name=n.name||e.getUniqueId(),this.source=n.source,this.displayFn=i(n.display||n.displayKey),this.templates=r(n.templates,this.displayFn),this.$el=t(c.dataset.replace("%CLASS%",this.name))}function i(t){function n(e){return e[t]}return t=t||"value",e.isFunction(t)?t:n}function r(t,n){function i(t){return"<p>"+n(t)+"</p>"}return{empty:t.empty&&e.templatify(t.empty),header:t.header&&e.templatify(t.header),footer:t.footer&&e.templatify(t.footer),suggestion:t.suggestion||i}}function s(t){return/^[_a-zA-Z0-9-]+$/.test(t)}var o="ttDataset",u="ttValue",a="ttDatum";return n.extractDatasetName=function(e){return t(e).data(o)},n.extractValue=function(e){return t(e).data(u)},n.extractDatum=function(e){return t(e).data(a)},e.mixin(n.prototype,d,{_render:function(n,i){function r(){return g.templates.empty({query:n,isEmpty:!0})}function s(){function r(e){var n;return n=t(c.suggestion).append(g.templates.suggestion(e)).data(o,g.name).data(u,g.displayFn(e)).data(a,e),n.children().each(function(){t(this).css(h.suggestionChild)}),n}var s,l;return s=t(c.suggestions).css(h.suggestions),l=e.map(i,r),s.append.apply(s,l),g.highlight&&p({className:"tt-highlight",node:s[0],pattern:n}),s}function l(){return g.templates.header({query:n,isEmpty:!f})}function d(){return g.templates.footer({query:n,isEmpty:!f})}if(this.$el){var f,g=this;this.$el.empty(),f=i&&i.length,!f&&this.templates.empty?this.$el.html(r()).prepend(g.templates.header?l():null).append(g.templates.footer?d():null):f&&this.$el.html(s()).prepend(g.templates.header?l():null).append(g.templates.footer?d():null),this.trigger("rendered")}},getRoot:function(){return this.$el},update:function(t){function e(e){n.canceled||t!==n.query||n._render(t,e)}var n=this;this.query=t,this.canceled=!1,this.source(t,e)},cancel:function(){this.canceled=!0},clear:function(){this.cancel(),this.$el.empty(),this.trigger("rendered")},isEmpty:function(){return this.$el.is(":empty")},destroy:function(){this.$el=null}}),n}(),m=function(){"use strict";function n(n){var r,s,o,u=this;n=n||{},n.menu||t.error("menu is required"),this.isOpen=!1,this.isEmpty=!0,this.datasets=e.map(n.datasets,i),r=e.bind(this._onSuggestionClick,this),s=e.bind(this._onSuggestionMouseEnter,this),o=e.bind(this._onSuggestionMouseLeave,this),this.$menu=t(n.menu).on("click.tt",".tt-suggestion",r).on("mouseenter.tt",".tt-suggestion",s).on("mouseleave.tt",".tt-suggestion",o),e.each(this.datasets,function(t){u.$menu.append(t.getRoot()),t.onSync("rendered",u._onRendered,u)})}function i(t){return new g(t)}return e.mixin(n.prototype,d,{_onSuggestionClick:function(e){this.trigger("suggestionClicked",t(e.currentTarget))},_onSuggestionMouseEnter:function(e){this._removeCursor(),this._setCursor(t(e.currentTarget),!0)},_onSuggestionMouseLeave:function(){this._removeCursor()},_onRendered:function(){function t(t){return t.isEmpty()}this.isEmpty=e.every(this.datasets,t),this.isEmpty?this._hide():this.isOpen&&this._show(),this.trigger("datasetRendered")},_hide:function(){this.$menu.hide()},_show:function(){this.$menu.css("display","block")},_getSuggestions:function(){return this.$menu.find(".tt-suggestion")},_getCursor:function(){return this.$menu.find(".tt-cursor").first()},_setCursor:function(t,e){t.first().addClass("tt-cursor"),!e&&this.trigger("cursorMoved")},_removeCursor:function(){this._getCursor().removeClass("tt-cursor")},_moveCursor:function(t){var e,n,i,r;if(this.isOpen){if(n=this._getCursor(),e=this._getSuggestions(),this._removeCursor(),i=e.index(n)+t,-1===(i=(i+1)%(e.length+1)-1))return void this.trigger("cursorRemoved");i<-1&&(i=e.length-1),this._setCursor(r=e.eq(i)),this._ensureVisible(r)}},_ensureVisible:function(t){var e,n,i,r;e=t.position().top,n=e+t.outerHeight(!0),i=this.$menu.scrollTop(),r=this.$menu.height()+parseInt(this.$menu.css("paddingTop"),10)+parseInt(this.$menu.css("paddingBottom"),10),e<0?this.$menu.scrollTop(i+e):r<n&&this.$menu.scrollTop(i+(n-r))},close:function(){this.isOpen&&(this.isOpen=!1,this._removeCursor(),this._hide(),this.trigger("closed"))},open:function(){this.isOpen||(this.isOpen=!0,!this.isEmpty&&this._show(),this.trigger("opened"))},setLanguageDirection:function(t){this.$menu.css("ltr"===t?h.ltr:h.rtl)},moveCursorUp:function(){this._moveCursor(-1)},moveCursorDown:function(){this._moveCursor(1)},getDatumForSuggestion:function(t){var e=null;return t.length&&(e={raw:g.extractDatum(t),value:g.extractValue(t),datasetName:g.extractDatasetName(t)}),e},getDatumForCursor:function(){return this.getDatumForSuggestion(this._getCursor().first())},getDatumForTopSuggestion:function(){return this.getDatumForSuggestion(this._getSuggestions().first())},update:function(t){function n(e){e.update(t)}e.each(this.datasets,n)},empty:function(){function t(t){t.clear()}e.each(this.datasets,t),this.isEmpty=!0},isVisible:function(){return this.isOpen&&!this.isEmpty},destroy:function(){function t(t){t.destroy()}this.$menu.off(".tt"),this.$menu=null,e.each(this.datasets,t)}}),n}(),y=function(){"use strict";function n(n){var r,s,o;n=n||{},n.input||t.error("missing input"),this.isActivated=!1,this.autoselect=!!n.autoselect,this.minLength=e.isNumber(n.minLength)?n.minLength:1,this.$node=i(n.input,n.withHint),r=this.$node.find(".tt-dropdown-menu"),s=this.$node.find(".tt-input"),o=this.$node.find(".tt-hint"),s.on("blur.tt",function(t){var n,i,o;n=document.activeElement,i=r.is(n),o=r.has(n).length>0,e.isMsie()&&(i||o)&&(t.preventDefault(),t.stopImmediatePropagation(),e.defer(function(){s.focus()}))}),r.on("mousedown.tt",function(t){t.preventDefault()}),this.eventBus=n.eventBus||new l({el:s}),this.dropdown=new m({menu:r,datasets:n.datasets}).onSync("suggestionClicked",this._onSuggestionClicked,this).onSync("cursorMoved",this._onCursorMoved,this).onSync("cursorRemoved",this._onCursorRemoved,this).onSync("opened",this._onOpened,this).onSync("closed",this._onClosed,this).onAsync("datasetRendered",this._onDatasetRendered,this),this.input=new f({input:s,hint:o}).onSync("focused",this._onFocused,this).onSync("blurred",this._onBlurred,this).onSync("enterKeyed",this._onEnterKeyed,this).onSync("tabKeyed",this._onTabKeyed,this).onSync("escKeyed",this._onEscKeyed,this).onSync("upKeyed",this._onUpKeyed,this).onSync("downKeyed",this._onDownKeyed,this).onSync("leftKeyed",this._onLeftKeyed,this).onSync("rightKeyed",this._onRightKeyed,this).onSync("queryChanged",this._onQueryChanged,this).onSync("whitespaceChanged",this._onWhitespaceChanged,this),this._setLanguageDirection()}function i(e,n){var i,s,u,a;i=t(e),s=t(c.wrapper).css(h.wrapper),u=t(c.dropdown).css(h.dropdown),a=i.clone().css(h.hint).css(r(i)),a.val("").removeData().addClass("tt-hint").removeAttr("id name placeholder required").prop("readonly",!0).attr({autocomplete:"off",spellcheck:"false",tabindex:-1}),i.data(o,{dir:i.attr("dir"),autocomplete:i.attr("autocomplete"),spellcheck:i.attr("spellcheck"),style:i.attr("style")}),i.addClass("tt-input").attr({autocomplete:"off",spellcheck:!1}).css(n?h.input:h.inputWithNoHint);try{!i.attr("dir")&&i.attr("dir","auto")}catch(t){}return i.wrap(s).parent().prepend(n?a:null).append(u)}function r(t){return{backgroundAttachment:t.css("background-attachment"),backgroundClip:t.css("background-clip"),backgroundColor:t.css("background-color"),backgroundImage:t.css("background-image"),backgroundOrigin:t.css("background-origin"),backgroundPosition:t.css("background-position"),backgroundRepeat:t.css("background-repeat"),backgroundSize:t.css("background-size")}}function s(t){var n=t.find(".tt-input");e.each(n.data(o),function(t,i){e.isUndefined(t)?n.removeAttr(i):n.attr(i,t)}),n.detach().removeData(o).removeClass("tt-input").insertAfter(t),t.remove()}var o="ttAttrs";return e.mixin(n.prototype,{_onSuggestionClicked:function(t,e){var n;(n=this.dropdown.getDatumForSuggestion(e))&&this._select(n)},_onCursorMoved:function(){var t=this.dropdown.getDatumForCursor();this.input.setInputValue(t.value,!0),this.eventBus.trigger("cursorchanged",t.raw,t.datasetName)},_onCursorRemoved:function(){this.input.resetInputValue(),this._updateHint()},_onDatasetRendered:function(){this._updateHint()},_onOpened:function(){this._updateHint(),this.eventBus.trigger("opened")},_onClosed:function(){this.input.clearHint(),this.eventBus.trigger("closed")},_onFocused:function(){this.isActivated=!0,this.dropdown.open()},_onBlurred:function(){this.isActivated=!1,this.dropdown.empty(),this.dropdown.close()},_onEnterKeyed:function(t,e){var n,i;n=this.dropdown.getDatumForCursor(),i=this.dropdown.getDatumForTopSuggestion(),n?(this._select(n),e.preventDefault()):this.autoselect&&i&&(this._select(i),e.preventDefault())},_onTabKeyed:function(t,e){var n;(n=this.dropdown.getDatumForCursor())?(this._select(n),e.preventDefault()):this._autocomplete(!0)},_onEscKeyed:function(){this.dropdown.close(),this.input.resetInputValue()},_onUpKeyed:function(){var t=this.input.getQuery();this.dropdown.isEmpty&&t.length>=this.minLength?this.dropdown.update(t):this.dropdown.moveCursorUp(),this.dropdown.open()},_onDownKeyed:function(){var t=this.input.getQuery();this.dropdown.isEmpty&&t.length>=this.minLength?this.dropdown.update(t):this.dropdown.moveCursorDown(),this.dropdown.open()},_onLeftKeyed:function(){"rtl"===this.dir&&this._autocomplete()},_onRightKeyed:function(){"ltr"===this.dir&&this._autocomplete()},_onQueryChanged:function(t,e){this.input.clearHintIfInvalid(),e.length>=this.minLength?this.dropdown.update(e):this.dropdown.empty(),this.dropdown.open(),this._setLanguageDirection()},_onWhitespaceChanged:function(){this._updateHint(),this.dropdown.open()},_setLanguageDirection:function(){var t;this.dir!==(t=this.input.getLanguageDirection())&&(this.dir=t,this.$node.css("direction",t),this.dropdown.setLanguageDirection(t))},_updateHint:function(){var t,n,i,r,s,o;t=this.dropdown.getDatumForTopSuggestion(),t&&this.dropdown.isVisible()&&!this.input.hasOverflow()?(n=this.input.getInputValue(),i=f.normalizeQuery(n),r=e.escapeRegExChars(i),s=new RegExp("^(?:"+r+")(.+$)","i"),o=s.exec(t.value),o?this.input.setHint(n+o[1]):this.input.clearHint()):this.input.clearHint()},_autocomplete:function(t){var e,n,i,r;e=this.input.getHint(),n=this.input.getQuery(),i=t||this.input.isCursorAtEnd(),e&&n!==e&&i&&(r=this.dropdown.getDatumForTopSuggestion(),r&&this.input.setInputValue(r.value),this.eventBus.trigger("autocompleted",r.raw,r.datasetName))},_select:function(t){this.input.setQuery(t.value),this.input.setInputValue(t.value,!0),this._setLanguageDirection(),this.eventBus.trigger("selected",t.raw,t.datasetName),this.dropdown.close(),e.defer(e.bind(this.dropdown.empty,this.dropdown))},open:function(){this.dropdown.open()},close:function(){this.dropdown.close()},setVal:function(t){t=e.toStr(t),this.isActivated?this.input.setInputValue(t):(this.input.setQuery(t),this.input.setInputValue(t,!0)),this._setLanguageDirection()},getVal:function(){return this.input.getQuery()},destroy:function(){this.input.destroy(),this.dropdown.destroy(),s(this.$node),this.$node=null}}),n}();!function(){"use strict";var n,i,r;n=t.fn.typeahead,i="ttTypeahead",r={initialize:function(n,r){function s(){var s,o=t(this);e.each(r,function(t){t.highlight=!!n.highlight}),s=new y({input:o,eventBus:new l({el:o}),withHint:!!e.isUndefined(n.hint)||!!n.hint,minLength:n.minLength,autoselect:n.autoselect,datasets:r}),o.data(i,s)}return r=e.isArray(r)?r:[].slice.call(arguments,1),n=n||{},this.each(s)},open:function(){function e(){var e,n=t(this);(e=n.data(i))&&e.open()}return this.each(e)},close:function(){function e(){var e,n=t(this);(e=n.data(i))&&e.close()}return this.each(e)},val:function(e){function n(){var n,r=t(this);(n=r.data(i))&&n.setVal(e)}function r(t){var e,n;return(e=t.data(i))&&(n=e.getVal()),n}return arguments.length?this.each(n):r(this.first())},destroy:function(){function e(){var e,n=t(this);(e=n.data(i))&&(e.destroy(),n.removeData(i))}return this.each(e)}},t.fn.typeahead=function(e){var n;return r[e]&&"initialize"!==e?(n=this.filter(function(){return!!t(this).data(i)}),r[e].apply(n,[].slice.call(arguments,1))):r.initialize.apply(this,arguments)},t.fn.typeahead.noConflict=function(){return t.fn.typeahead=n,this}}()}(window.jQuery);