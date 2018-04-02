!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(r){function n(t,e){var i,n,s,o=t.nodeName.toLowerCase();return"area"===o?(n=(i=t.parentNode).name,!(!t.href||!n||"map"!==i.nodeName.toLowerCase())&&(!!(s=r("img[usemap='#"+n+"']")[0])&&a(s))):(/^(input|select|textarea|button|object)$/.test(o)?!t.disabled:"a"===o&&t.href||e)&&a(t)}function a(t){return r.expr.filters.visible(t)&&!r(t).parents().addBack().filter(function(){return"hidden"===r.css(this,"visibility")}).length}var t,e,i,s;r.ui=r.ui||{},r.extend(r.ui,{version:"1.11.4",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),r.fn.extend({scrollParent:function(t){var e=this.css("position"),i="absolute"===e,n=t?/(auto|scroll|hidden)/:/(auto|scroll)/,s=this.parents().filter(function(){var t=r(this);return(!i||"static"!==t.css("position"))&&n.test(t.css("overflow")+t.css("overflow-y")+t.css("overflow-x"))}).eq(0);return"fixed"!==e&&s.length?s:r(this[0].ownerDocument||document)},uniqueId:(t=0,function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++t)})}),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&r(this).removeAttr("id")})}}),r.extend(r.expr[":"],{data:r.expr.createPseudo?r.expr.createPseudo(function(e){return function(t){return!!r.data(t,e)}}):function(t,e,i){return!!r.data(t,i[3])},focusable:function(t){return n(t,!isNaN(r.attr(t,"tabindex")))},tabbable:function(t){var e=r.attr(t,"tabindex"),i=isNaN(e);return(i||0<=e)&&n(t,!i)}}),r("<a>").outerWidth(1).jquery||r.each(["Width","Height"],function(t,i){function n(t,e,i,n){return r.each(s,function(){e-=parseFloat(r.css(t,"padding"+this))||0,i&&(e-=parseFloat(r.css(t,"border"+this+"Width"))||0),n&&(e-=parseFloat(r.css(t,"margin"+this))||0)}),e}var s="Width"===i?["Left","Right"]:["Top","Bottom"],o=i.toLowerCase(),a={innerWidth:r.fn.innerWidth,innerHeight:r.fn.innerHeight,outerWidth:r.fn.outerWidth,outerHeight:r.fn.outerHeight};r.fn["inner"+i]=function(t){return t===undefined?a["inner"+i].call(this):this.each(function(){r(this).css(o,n(this,t)+"px")})},r.fn["outer"+i]=function(t,e){return"number"!=typeof t?a["outer"+i].call(this,t):this.each(function(){r(this).css(o,n(this,t,!0,e)+"px")})}}),r.fn.addBack||(r.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),r("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(r.fn.removeData=(e=r.fn.removeData,function(t){return arguments.length?e.call(this,r.camelCase(t)):e.call(this)})),r.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),r.fn.extend({focus:(s=r.fn.focus,function(e,i){return"number"==typeof e?this.each(function(){var t=this;setTimeout(function(){r(t).focus(),i&&i.call(t)},e)}):s.apply(this,arguments)}),disableSelection:(i="onselectstart"in document.createElement("div")?"selectstart":"mousedown",function(){return this.bind(i+".ui-disableSelection",function(t){t.preventDefault()})}),enableSelection:function(){return this.unbind(".ui-disableSelection")},zIndex:function(t){if(t!==undefined)return this.css("zIndex",t);if(this.length)for(var e,i,n=r(this[0]);n.length&&n[0]!==document;){if(("absolute"===(e=n.css("position"))||"relative"===e||"fixed"===e)&&(i=parseInt(n.css("zIndex"),10),!isNaN(i)&&0!==i))return i;n=n.parent()}return 0}}),r.ui.plugin={add:function(t,e,i){var n,s=r.ui[t].prototype;for(n in i)s.plugins[n]=s.plugins[n]||[],s.plugins[n].push([e,i[n]])},call:function(t,e,i,n){var s,o=t.plugins[e];if(o&&(n||t.element[0].parentNode&&11!==t.element[0].parentNode.nodeType))for(s=0;s<o.length;s++)t.options[o[s][0]]&&o[s][1].apply(t.element,i)}}}),function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(h){var o,i=0,r=Array.prototype.slice;return h.cleanData=(o=h.cleanData,function(t){var e,i,n;for(n=0;null!=(i=t[n]);n++)try{(e=h._data(i,"events"))&&e.remove&&h(i).triggerHandler("remove")}catch(s){}o(t)}),h.widget=function(t,i,e){var n,s,o,a,r={},u=t.split(".")[0];return t=t.split(".")[1],n=u+"-"+t,e||(e=i,i=h.Widget),h.expr[":"][n.toLowerCase()]=function(t){return!!h.data(t,n)},h[u]=h[u]||{},s=h[u][t],o=h[u][t]=function(t,e){if(!this._createWidget)return new o(t,e);arguments.length&&this._createWidget(t,e)},h.extend(o,s,{version:e.version,_proto:h.extend({},e),_childConstructors:[]}),(a=new i).options=h.widget.extend({},a.options),h.each(e,function(e,n){var s,o;h.isFunction(n)?r[e]=(s=function(){return i.prototype[e].apply(this,arguments)},o=function(t){return i.prototype[e].apply(this,t)},function(){var t,e=this._super,i=this._superApply;return this._super=s,this._superApply=o,t=n.apply(this,arguments),this._super=e,this._superApply=i,t}):r[e]=n}),o.prototype=h.widget.extend(a,{widgetEventPrefix:s&&a.widgetEventPrefix||t},r,{constructor:o,namespace:u,widgetName:t,widgetFullName:n}),s?(h.each(s._childConstructors,function(t,e){var i=e.prototype;h.widget(i.namespace+"."+i.widgetName,o,e._proto)}),delete s._childConstructors):i._childConstructors.push(o),h.widget.bridge(t,o),o},h.widget.extend=function(t){for(var e,i,n=r.call(arguments,1),s=0,o=n.length;s<o;s++)for(e in n[s])i=n[s][e],n[s].hasOwnProperty(e)&&i!==undefined&&(h.isPlainObject(i)?t[e]=h.isPlainObject(t[e])?h.widget.extend({},t[e],i):h.widget.extend({},i):t[e]=i);return t},h.widget.bridge=function(o,e){var a=e.prototype.widgetFullName||o;h.fn[o]=function(i){var t="string"==typeof i,n=r.call(arguments,1),s=this;return t?this.each(function(){var t,e=h.data(this,a);return"instance"===i?(s=e,!1):e?h.isFunction(e[i])&&"_"!==i.charAt(0)?(t=e[i].apply(e,n))!==e&&t!==undefined?(s=t&&t.jquery?s.pushStack(t.get()):t,!1):void 0:h.error("no such method '"+i+"' for "+o+" widget instance"):h.error("cannot call methods on "+o+" prior to initialization; attempted to call method '"+i+"'")}):(n.length&&(i=h.widget.extend.apply(null,[i].concat(n))),this.each(function(){var t=h.data(this,a);t?(t.option(i||{}),t._init&&t._init()):h.data(this,a,new e(i,this))})),s}},h.Widget=function(){},h.Widget._childConstructors=[],h.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,e){e=h(e||this.defaultElement||this)[0],this.element=h(e),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=h(),this.hoverable=h(),this.focusable=h(),e!==this&&(h.data(e,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===e&&this.destroy()}}),this.document=h(e.style?e.ownerDocument:e.document||e),this.window=h(this.document[0].defaultView||this.document[0].parentWindow)),this.options=h.widget.extend({},this.options,this._getCreateOptions(),t),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:h.noop,_getCreateEventData:h.noop,_create:h.noop,_init:h.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(h.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:h.noop,widget:function(){return this.element},option:function(t,e){var i,n,s,o=t;if(0===arguments.length)return h.widget.extend({},this.options);if("string"==typeof t)if(o={},t=(i=t.split(".")).shift(),i.length){for(n=o[t]=h.widget.extend({},this.options[t]),s=0;s<i.length-1;s++)n[i[s]]=n[i[s]]||{},n=n[i[s]];if(t=i.pop(),1===arguments.length)return n[t]===undefined?null:n[t];n[t]=e}else{if(1===arguments.length)return this.options[t]===undefined?null:this.options[t];o[t]=e}return this._setOptions(o),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return this.options[t]=e,"disabled"===t&&(this.widget().toggleClass(this.widgetFullName+"-disabled",!!e),e&&(this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus"))),this},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_on:function(a,r,t){var u,l=this;"boolean"!=typeof a&&(t=r,r=a,a=!1),t?(r=u=h(r),this.bindings=this.bindings.add(r)):(t=r,r=this.element,u=this.widget()),h.each(t,function(t,e){function i(){if(a||!0!==l.options.disabled&&!h(this).hasClass("ui-state-disabled"))return("string"==typeof e?l[e]:e).apply(l,arguments)}"string"!=typeof e&&(i.guid=e.guid=e.guid||i.guid||h.guid++);var n=t.match(/^([\w:-]*)\s*(.*)$/),s=n[1]+l.eventNamespace,o=n[2];o?u.delegate(o,s,i):r.bind(s,i)})},_off:function(t,e){e=(e||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.unbind(e).undelegate(e),this.bindings=h(this.bindings.not(t).get()),this.focusable=h(this.focusable.not(t).get()),this.hoverable=h(this.hoverable.not(t).get())},_delay:function(t,e){function i(){return("string"==typeof t?n[t]:t).apply(n,arguments)}var n=this;return setTimeout(i,e||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){h(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){h(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){h(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){h(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,e,i){var n,s,o=this.options[t];if(i=i||{},(e=h.Event(e)).type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),e.target=this.element[0],s=e.originalEvent)for(n in s)n in e||(e[n]=s[n]);return this.element.trigger(e,i),!(h.isFunction(o)&&!1===o.apply(this.element[0],[e].concat(i))||e.isDefaultPrevented())}},h.each({show:"fadeIn",hide:"fadeOut"},function(o,a){h.Widget.prototype["_"+o]=function(e,t,i){"string"==typeof t&&(t={effect:t});var n,s=t?!0===t||"number"==typeof t?a:t.effect||a:o;"number"==typeof(t=t||{})&&(t={duration:t}),n=!h.isEmptyObject(t),t.complete=i,t.delay&&e.delay(t.delay),n&&h.effects&&h.effects.effect[s]?e[o](t):s!==o&&e[s]?e[s](t.duration,t.easing,i):e.queue(function(t){h(this)[o](),i&&i.call(e[0]),t()})}}),h.widget}),function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(A){return function(){function x(t,e,i){return[parseFloat(t[0])*(u.test(t[0])?e/100:1),parseFloat(t[1])*(u.test(t[1])?i/100:1)]}function C(t,e){return parseInt(A.css(t,e),10)||0}function e(t){var e=t[0];return 9===e.nodeType?{width:t.width(),height:t.height(),offset:{top:0,left:0}}:A.isWindow(e)?{width:t.width(),height:t.height(),offset:{top:t.scrollTop(),left:t.scrollLeft()}}:e.preventDefault?{width:0,height:0,offset:{top:e.pageY,left:e.pageX}}:{width:t.outerWidth(),height:t.outerHeight(),offset:t.offset()}}A.ui=A.ui||{};var s,I,T=Math.max,W=Math.abs,k=Math.round,n=/left|center|right/,o=/top|center|bottom/,a=/[\+\-]\d+(\.[\d]+)?%?/,r=/^\w+/,u=/%$/,i=A.fn.position;A.position={scrollbarWidth:function(){if(s!==undefined)return s;var t,e,i=A("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),n=i.children()[0];return A("body").append(i),t=n.offsetWidth,i.css("overflow","scroll"),t===(e=n.offsetWidth)&&(e=i[0].clientWidth),i.remove(),s=t-e},getScrollInfo:function(t){var e=t.isWindow||t.isDocument?"":t.element.css("overflow-x"),i=t.isWindow||t.isDocument?"":t.element.css("overflow-y"),n="scroll"===e||"auto"===e&&t.width<t.element[0].scrollWidth;return{width:"scroll"===i||"auto"===i&&t.height<t.element[0].scrollHeight?A.position.scrollbarWidth():0,height:n?A.position.scrollbarWidth():0}},getWithinInfo:function(t){var e=A(t||window),i=A.isWindow(e[0]),n=!!e[0]&&9===e[0].nodeType;return{element:e,isWindow:i,isDocument:n,offset:e.offset()||{left:0,top:0},scrollLeft:e.scrollLeft(),scrollTop:e.scrollTop(),width:i||n?e.width():e.outerWidth(),height:i||n?e.height():e.outerHeight()}}},A.fn.position=function(c){if(!c||!c.of)return i.apply(this,arguments);c=A.extend({},c);var d,f,m,p,g,t,v=A(c.of),b=A.position.getWithinInfo(c.within),_=A.position.getScrollInfo(b),y=(c.collision||"flip").split(" "),w={};return t=e(v),v[0].preventDefault&&(c.at="left top"),f=t.width,m=t.height,p=t.offset,g=A.extend({},p),A.each(["my","at"],function(){var t,e,i=(c[this]||"").split(" ");1===i.length&&(i=n.test(i[0])?i.concat(["center"]):o.test(i[0])?["center"].concat(i):["center","center"]),i[0]=n.test(i[0])?i[0]:"center",i[1]=o.test(i[1])?i[1]:"center",t=a.exec(i[0]),e=a.exec(i[1]),w[this]=[t?t[0]:0,e?e[0]:0],c[this]=[r.exec(i[0])[0],r.exec(i[1])[0]]}),1===y.length&&(y[1]=y[0]),"right"===c.at[0]?g.left+=f:"center"===c.at[0]&&(g.left+=f/2),"bottom"===c.at[1]?g.top+=m:"center"===c.at[1]&&(g.top+=m/2),d=x(w.at,f,m),g.left+=d[0],g.top+=d[1],this.each(function(){var i,t,a=A(this),r=a.outerWidth(),u=a.outerHeight(),e=C(this,"marginLeft"),n=C(this,"marginTop"),s=r+e+C(this,"marginRight")+_.width,o=u+n+C(this,"marginBottom")+_.height,l=A.extend({},g),h=x(w.my,a.outerWidth(),a.outerHeight());"right"===c.my[0]?l.left-=r:"center"===c.my[0]&&(l.left-=r/2),"bottom"===c.my[1]?l.top-=u:"center"===c.my[1]&&(l.top-=u/2),l.left+=h[0],l.top+=h[1],I||(l.left=k(l.left),l.top=k(l.top)),i={marginLeft:e,marginTop:n},A.each(["left","top"],function(t,e){A.ui.position[y[t]]&&A.ui.position[y[t]][e](l,{targetWidth:f,targetHeight:m,elemWidth:r,elemHeight:u,collisionPosition:i,collisionWidth:s,collisionHeight:o,offset:[d[0]+h[0],d[1]+h[1]],my:c.my,at:c.at,within:b,elem:a})}),c.using&&(t=function(t){var e=p.left-l.left,i=e+f-r,n=p.top-l.top,s=n+m-u,o={target:{element:v,left:p.left,top:p.top,width:f,height:m},element:{element:a,left:l.left,top:l.top,width:r,height:u},horizontal:i<0?"left":0<e?"right":"center",vertical:s<0?"top":0<n?"bottom":"middle"};f<r&&W(e+i)<f&&(o.horizontal="center"),m<u&&W(n+s)<m&&(o.vertical="middle"),T(W(e),W(i))>T(W(n),W(s))?o.important="horizontal":o.important="vertical",c.using.call(this,t,o)}),a.offset(A.extend(l,{using:t}))})},A.ui.position={fit:{left:function(t,e){var i,n=e.within,s=n.isWindow?n.scrollLeft:n.offset.left,o=n.width,a=t.left-e.collisionPosition.marginLeft,r=s-a,u=a+e.collisionWidth-o-s;e.collisionWidth>o?0<r&&u<=0?(i=t.left+r+e.collisionWidth-o-s,t.left+=r-i):t.left=0<u&&r<=0?s:u<r?s+o-e.collisionWidth:s:0<r?t.left+=r:0<u?t.left-=u:t.left=T(t.left-a,t.left)},top:function(t,e){var i,n=e.within,s=n.isWindow?n.scrollTop:n.offset.top,o=e.within.height,a=t.top-e.collisionPosition.marginTop,r=s-a,u=a+e.collisionHeight-o-s;e.collisionHeight>o?0<r&&u<=0?(i=t.top+r+e.collisionHeight-o-s,t.top+=r-i):t.top=0<u&&r<=0?s:u<r?s+o-e.collisionHeight:s:0<r?t.top+=r:0<u?t.top-=u:t.top=T(t.top-a,t.top)}},flip:{left:function(t,e){var i,n,s=e.within,o=s.offset.left+s.scrollLeft,a=s.width,r=s.isWindow?s.scrollLeft:s.offset.left,u=t.left-e.collisionPosition.marginLeft,l=u-r,h=u+e.collisionWidth-a-r,c="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,d="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,f=-2*e.offset[0];l<0?((i=t.left+c+d+f+e.collisionWidth-a-o)<0||i<W(l))&&(t.left+=c+d+f):0<h&&(0<(n=t.left-e.collisionPosition.marginLeft+c+d+f-r)||W(n)<h)&&(t.left+=c+d+f)},top:function(t,e){var i,n,s=e.within,o=s.offset.top+s.scrollTop,a=s.height,r=s.isWindow?s.scrollTop:s.offset.top,u=t.top-e.collisionPosition.marginTop,l=u-r,h=u+e.collisionHeight-a-r,c="top"===e.my[1]?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,d="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,f=-2*e.offset[1];l<0?((n=t.top+c+d+f+e.collisionHeight-a-o)<0||n<W(l))&&(t.top+=c+d+f):0<h&&(0<(i=t.top-e.collisionPosition.marginTop+c+d+f-r)||W(i)<h)&&(t.top+=c+d+f)}},flipfit:{left:function(){A.ui.position.flip.left.apply(this,arguments),A.ui.position.fit.left.apply(this,arguments)},top:function(){A.ui.position.flip.top.apply(this,arguments),A.ui.position.fit.top.apply(this,arguments)}}},function(){var t,e,i,n,s,o=document.getElementsByTagName("body")[0],a=document.createElement("div");for(s in t=document.createElement(o?"div":"body"),i={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},o&&A.extend(i,{position:"absolute",left:"-1000px",top:"-1000px"}),i)t.style[s]=i[s];t.appendChild(a),(e=o||document.documentElement).insertBefore(t,e.firstChild),a.style.cssText="position: absolute; left: 10.7432222px;",n=A(a).offset().left,I=10<n&&n<11,t.innerHTML="",e.removeChild(t)}()}(),A.ui.position}),function(t){"function"==typeof define&&define.amd?define(["jquery","./core","./widget","./position"],t):t(jQuery)}(function(r){return r.widget("ui.menu",{version:"1.11.4",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-carat-1-e"},items:"> *",menus:"ul",position:{my:"left-1 top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.mouseHandled=!1,this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content").toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length).attr({role:this.options.role,tabIndex:0}),this.options.disabled&&this.element.addClass("ui-state-disabled").attr("aria-disabled","true"),this._on({"mousedown .ui-menu-item":function(t){t.preventDefault()},"click .ui-menu-item":function(t){var e=r(t.target);!this.mouseHandled&&e.not(".ui-state-disabled").length&&(this.select(t),t.isPropagationStopped()||(this.mouseHandled=!0),e.has(".ui-menu").length?this.expand(t):!this.element.is(":focus")&&r(this.document[0].activeElement).closest(".ui-menu").length&&(this.element.trigger("focus",[!0]),this.active&&1===this.active.parents(".ui-menu").length&&clearTimeout(this.timer)))},"mouseenter .ui-menu-item":function(t){if(!this.previousFilter){var e=r(t.currentTarget);e.siblings(".ui-state-active").removeClass("ui-state-active"),this.focus(t,e)}},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(t,e){var i=this.active||this.element.find(this.options.items).eq(0);e||this.focus(t,i)},blur:function(t){this._delay(function(){r.contains(this.element[0],this.document[0].activeElement)||this.collapseAll(t)})},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click:function(t){this._closeOnDocumentClick(t)&&this.collapseAll(t),this.mouseHandled=!1}})},_destroy:function(){this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-menu-icons ui-front").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(),this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").removeUniqueId().removeClass("ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function(){var t=r(this);t.data("ui-menu-submenu-carat")&&t.remove()}),this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")},_keydown:function(t){var e,i,n,s,o=!0;switch(t.keyCode){case r.ui.keyCode.PAGE_UP:this.previousPage(t);break;case r.ui.keyCode.PAGE_DOWN:this.nextPage(t);break;case r.ui.keyCode.HOME:this._move("first","first",t);break;case r.ui.keyCode.END:this._move("last","last",t);break;case r.ui.keyCode.UP:this.previous(t);break;case r.ui.keyCode.DOWN:this.next(t);break;case r.ui.keyCode.LEFT:this.collapse(t);break;case r.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(t);break;case r.ui.keyCode.ENTER:case r.ui.keyCode.SPACE:this._activate(t);break;case r.ui.keyCode.ESCAPE:this.collapse(t);break;default:o=!1,i=this.previousFilter||"",n=String.fromCharCode(t.keyCode),s=!1,clearTimeout(this.filterTimer),n===i?s=!0:n=i+n,e=this._filterMenuItems(n),(e=s&&-1!==e.index(this.active.next())?this.active.nextAll(".ui-menu-item"):e).length||(n=String.fromCharCode(t.keyCode),e=this._filterMenuItems(n)),e.length?(this.focus(t,e),this.previousFilter=n,this.filterTimer=this._delay(function(){delete this.previousFilter},1e3)):delete this.previousFilter}o&&t.preventDefault()},_activate:function(t){this.active.is(".ui-state-disabled")||(this.active.is("[aria-haspopup='true']")?this.expand(t):this.select(t))},refresh:function(){var t,e=this,n=this.options.icons.submenu,i=this.element.find(this.options.menus);this.element.toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length),i.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-front").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var t=r(this),e=t.parent(),i=r("<span>").addClass("ui-menu-icon ui-icon "+n).data("ui-menu-submenu-carat",!0);e.attr("aria-haspopup","true").prepend(i),t.attr("aria-labelledby",e.attr("id"))}),(t=i.add(this.element).find(this.options.items)).not(".ui-menu-item").each(function(){var t=r(this);e._isDivider(t)&&t.addClass("ui-widget-content ui-menu-divider")}),t.not(".ui-menu-item, .ui-menu-divider").addClass("ui-menu-item").uniqueId().attr({tabIndex:-1,role:this._itemRole()}),t.filter(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!r.contains(this.element[0],this.active[0])&&this.blur()},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},_setOption:function(t,e){"icons"===t&&this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(e.submenu),"disabled"===t&&this.element.toggleClass("ui-state-disabled",!!e).attr("aria-disabled",e),this._super(t,e)},focus:function(t,e){var i,n;this.blur(t,t&&"focus"===t.type),this._scrollIntoView(e),this.active=e.first(),n=this.active.addClass("ui-state-focus").removeClass("ui-state-active"),this.options.role&&this.element.attr("aria-activedescendant",n.attr("id")),this.active.parent().closest(".ui-menu-item").addClass("ui-state-active"),t&&"keydown"===t.type?this._close():this.timer=this._delay(function(){this._close()},this.delay),(i=e.children(".ui-menu")).length&&t&&/^mouse/.test(t.type)&&this._startOpening(i),this.activeMenu=e.parent(),this._trigger("focus",t,{item:e})},_scrollIntoView:function(t){var e,i,n,s,o,a;this._hasScroll()&&(e=parseFloat(r.css(this.activeMenu[0],"borderTopWidth"))||0,i=parseFloat(r.css(this.activeMenu[0],"paddingTop"))||0,n=t.offset().top-this.activeMenu.offset().top-e-i,s=this.activeMenu.scrollTop(),o=this.activeMenu.height(),a=t.outerHeight(),n<0?this.activeMenu.scrollTop(s+n):o<n+a&&this.activeMenu.scrollTop(s+n-o+a))},blur:function(t,e){e||clearTimeout(this.timer),this.active&&(this.active.removeClass("ui-state-focus"),this.active=null,this._trigger("blur",t,{item:this.active}))},_startOpening:function(t){clearTimeout(this.timer),"true"===t.attr("aria-hidden")&&(this.timer=this._delay(function(){this._close(),this._open(t)},this.delay))},_open:function(t){var e=r.extend({of:this.active},this.options.position);clearTimeout(this.timer),this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden","true"),t.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(e)},collapseAll:function(e,i){clearTimeout(this.timer),this.timer=this._delay(function(){var t=i?this.element:r(e&&e.target).closest(this.element.find(".ui-menu"));t.length||(t=this.element),this._close(t),this.blur(e),this.activeMenu=t},this.delay)},_close:function(t){t||(t=this.active?this.active.parent():this.element),t.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false").end().find(".ui-state-active").not(".ui-state-focus").removeClass("ui-state-active")},_closeOnDocumentClick:function(t){return!r(t.target).closest(".ui-menu").length},_isDivider:function(t){return!/[^\-\u2014\u2013\s]/.test(t.text())},collapse:function(t){var e=this.active&&this.active.parent().closest(".ui-menu-item",this.element);e&&e.length&&(this._close(),this.focus(t,e))},expand:function(t){var e=this.active&&this.active.children(".ui-menu ").find(this.options.items).first();e&&e.length&&(this._open(e.parent()),this._delay(function(){this.focus(t,e)}))},next:function(t){this._move("next","first",t)},previous:function(t){this._move("prev","last",t)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_move:function(t,e,i){var n;this.active&&(n="first"===t||"last"===t?this.active["first"===t?"prevAll":"nextAll"](".ui-menu-item").eq(-1):this.active[t+"All"](".ui-menu-item").eq(0)),n&&n.length&&this.active||(n=this.activeMenu.find(this.options.items)[e]()),this.focus(i,n)},nextPage:function(t){var e,i,n;this.active?this.isLastItem()||(this._hasScroll()?(i=this.active.offset().top,n=this.element.height(),this.active.nextAll(".ui-menu-item").each(function(){return(e=r(this)).offset().top-i-n<0}),this.focus(t,e)):this.focus(t,this.activeMenu.find(this.options.items)[this.active?"last":"first"]())):this.next(t)},previousPage:function(t){var e,i,n;this.active?this.isFirstItem()||(this._hasScroll()?(i=this.active.offset().top,n=this.element.height(),this.active.prevAll(".ui-menu-item").each(function(){return 0<(e=r(this)).offset().top-i+n}),this.focus(t,e)):this.focus(t,this.activeMenu.find(this.options.items).first())):this.next(t)},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(t){this.active=this.active||r(t.target).closest(".ui-menu-item");var e={item:this.active};this.active.has(".ui-menu").length||this.collapseAll(t,!0),this._trigger("select",t,e)},_filterMenuItems:function(t){var e=t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&"),i=new RegExp("^"+e,"i");return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function(){return i.test(r.trim(r(this).text()))})}})}),function(t){"function"==typeof define&&define.amd?define(["jquery","./core","./widget","./position","./menu"],t):t(jQuery)}(function(o){return o.widget("ui.selectmenu",{version:"1.11.4",defaultElement:"<select>",options:{appendTo:null,disabled:null,icons:{button:"ui-icon-triangle-1-s"},position:{my:"left top",at:"left bottom",collision:"none"},width:null,change:null,close:null,focus:null,open:null,select:null},_create:function(){var t=this.element.uniqueId().attr("id");this.ids={element:t,button:t+"-button",menu:t+"-menu"},this._drawButton(),this._drawMenu(),this.options.disabled&&this.disable()},_drawButton:function(){var t=this;this.label=o("label[for='"+this.ids.element+"']").attr("for",this.ids.button),this._on(this.label,{click:function(t){this.button.focus(),t.preventDefault()}}),this.element.hide(),this.button=o("<span>",{"class":"ui-selectmenu-button ui-widget ui-state-default ui-corner-all",tabindex:this.options.disabled?-1:0,id:this.ids.button,role:"combobox","aria-expanded":"false","aria-autocomplete":"list","aria-owns":this.ids.menu,"aria-haspopup":"true"}).insertAfter(this.element),o("<span>",{"class":"ui-icon "+this.options.icons.button}).prependTo(this.button),this.buttonText=o("<span>",{"class":"ui-selectmenu-text"}).appendTo(this.button),this._setText(this.buttonText,this.element.find("option:selected").text()),this._resizeButton(),this._on(this.button,this._buttonEvents),this.button.one("focusin",function(){t.menuItems||t._refreshMenu()}),this._hoverable(this.button),this._focusable(this.button)},_drawMenu:function(){var n=this;this.menu=o("<ul>",{"aria-hidden":"true","aria-labelledby":this.ids.button,id:this.ids.menu}),this.menuWrap=o("<div>",{"class":"ui-selectmenu-menu ui-front"}).append(this.menu).appendTo(this._appendTo()),this.menuInstance=this.menu.menu({role:"listbox",select:function(t,e){t.preventDefault(),n._setSelection(),n._select(e.item.data("ui-selectmenu-item"),t)},focus:function(t,e){var i=e.item.data("ui-selectmenu-item");null!=n.focusIndex&&i.index!==n.focusIndex&&(n._trigger("focus",t,{item:i}),n.isOpen||n._select(i,t)),n.focusIndex=i.index,n.button.attr("aria-activedescendant",n.menuItems.eq(i.index).attr("id"))}}).menu("instance"),this.menu.addClass("ui-corner-bottom").removeClass("ui-corner-all"),this.menuInstance._off(this.menu,"mouseleave"),this.menuInstance._closeOnDocumentClick=function(){return!1},this.menuInstance._isDivider=function(){return!1}},refresh:function(){this._refreshMenu(),this._setText(this.buttonText,this._getSelectedItem().text()),this.options.width||this._resizeButton()},_refreshMenu:function(){this.menu.empty();var t,e=this.element.find("option");e.length&&(this._parseOptions(e),this._renderMenu(this.menu,this.items),this.menuInstance.refresh(),this.menuItems=this.menu.find("li").not(".ui-selectmenu-optgroup"),t=this._getSelectedItem(),this.menuInstance.focus(null,t),this._setAria(t.data("ui-selectmenu-item")),this._setOption("disabled",this.element.prop("disabled")))},open:function(t){this.options.disabled||(this.menuItems?(this.menu.find(".ui-state-focus").removeClass("ui-state-focus"),this.menuInstance.focus(null,this._getSelectedItem())):this._refreshMenu(),this.isOpen=!0,this._toggleAttr(),this._resizeMenu(),this._position(),this._on(this.document,this._documentClick),this._trigger("open",t))},_position:function(){this.menuWrap.position(o.extend({of:this.button},this.options.position))},close:function(t){this.isOpen&&(this.isOpen=!1,this._toggleAttr(),this.range=null,this._off(this.document),this._trigger("close",t))},widget:function(){return this.button},menuWidget:function(){return this.menu},_renderMenu:function(i,t){var n=this,s="";o.each(t,function(t,e){e.optgroup!==s&&(o("<li>",{"class":"ui-selectmenu-optgroup ui-menu-divider"+(e.element.parent("optgroup").prop("disabled")?" ui-state-disabled":""),text:e.optgroup}).appendTo(i),s=e.optgroup),n._renderItemData(i,e)})},_renderItemData:function(t,e){return this._renderItem(t,e).data("ui-selectmenu-item",e)},_renderItem:function(t,e){var i=o("<li>");return e.disabled&&i.addClass("ui-state-disabled"),this._setText(i,e.label),i.appendTo(t)},_setText:function(t,e){e?t.text(e):t.html("&#160;")},_move:function(t,e){var i,n,s=".ui-menu-item";this.isOpen?i=this.menuItems.eq(this.focusIndex):(i=this.menuItems.eq(this.element[0].selectedIndex),s+=":not(.ui-state-disabled)"),(n="first"===t||"last"===t?i["first"===t?"prevAll":"nextAll"](s).eq(-1):i[t+"All"](s).eq(0)).length&&this.menuInstance.focus(e,n)},_getSelectedItem:function(){return this.menuItems.eq(this.element[0].selectedIndex)},_toggle:function(t){this[this.isOpen?"close":"open"](t)},_setSelection:function(){var t;this.range&&(window.getSelection?((t=window.getSelection()).removeAllRanges(),t.addRange(this.range)):this.range.select(),this.button.focus())},_documentClick:{mousedown:function(t){this.isOpen&&(o(t.target).closest(".ui-selectmenu-menu, #"+this.ids.button).length||this.close(t))}},_buttonEvents:{mousedown:function(){var t;window.getSelection?(t=window.getSelection()).rangeCount&&(this.range=t.getRangeAt(0)):this.range=document.selection.createRange()},click:function(t){this._setSelection(),this._toggle(t)},keydown:function(t){var e=!0;switch(t.keyCode){case o.ui.keyCode.TAB:case o.ui.keyCode.ESCAPE:this.close(t),e=!1;break;case o.ui.keyCode.ENTER:this.isOpen&&this._selectFocusedItem(t);break;case o.ui.keyCode.UP:t.altKey?this._toggle(t):this._move("prev",t);break;case o.ui.keyCode.DOWN:t.altKey?this._toggle(t):this._move("next",t);break;case o.ui.keyCode.SPACE:this.isOpen?this._selectFocusedItem(t):this._toggle(t);break;case o.ui.keyCode.LEFT:this._move("prev",t);break;case o.ui.keyCode.RIGHT:this._move("next",t);break;case o.ui.keyCode.HOME:case o.ui.keyCode.PAGE_UP:this._move("first",t);break;case o.ui.keyCode.END:case o.ui.keyCode.PAGE_DOWN:this._move("last",t);break;default:this.menu.trigger(t),e=!1}e&&t.preventDefault()}},_selectFocusedItem:function(t){var e=this.menuItems.eq(this.focusIndex);e.hasClass("ui-state-disabled")||this._select(e.data("ui-selectmenu-item"),t)},_select:function(t,e){var i=this.element[0].selectedIndex;this.element[0].selectedIndex=t.index,this._setText(this.buttonText,t.label),this._setAria(t),this._trigger("select",e,{item:t}),t.index!==i&&this._trigger("change",e,{item:t}),this.close(e)},_setAria:function(t){var e=this.menuItems.eq(t.index).attr("id");this.button.attr({"aria-labelledby":e,"aria-activedescendant":e}),this.menu.attr("aria-activedescendant",e)},_setOption:function(t,e){"icons"===t&&this.button.find("span.ui-icon").removeClass(this.options.icons.button).addClass(e.button),this._super(t,e),"appendTo"===t&&this.menuWrap.appendTo(this._appendTo()),"disabled"===t&&(this.menuInstance.option("disabled",e),
this.button.toggleClass("ui-state-disabled",e).attr("aria-disabled",e),this.element.prop("disabled",e),e?(this.button.attr("tabindex",-1),this.close()):this.button.attr("tabindex",0)),"width"===t&&this._resizeButton()},_appendTo:function(){var t=this.options.appendTo;return t&&(t=t.jquery||t.nodeType?o(t):this.document.find(t).eq(0)),t&&t[0]||(t=this.element.closest(".ui-front")),t.length||(t=this.document[0].body),t},_toggleAttr:function(){this.button.toggleClass("ui-corner-top",this.isOpen).toggleClass("ui-corner-all",!this.isOpen).attr("aria-expanded",this.isOpen),this.menuWrap.toggleClass("ui-selectmenu-open",this.isOpen),this.menu.attr("aria-hidden",!this.isOpen)},_resizeButton:function(){var t=this.options.width;t||(t=this.element.show().outerWidth(),this.element.hide()),this.button.outerWidth(t)},_resizeMenu:function(){this.menu.outerWidth(Math.max(this.button.outerWidth(),this.menu.width("").outerWidth()+1))},_getCreateOptions:function(){return{disabled:this.element.prop("disabled")}},_parseOptions:function(t){var s=[];t.each(function(t,e){var i=o(e),n=i.parent("optgroup");s.push({element:i,index:t,value:i.val(),label:i.text(),optgroup:n.attr("label")||"",disabled:n.prop("disabled")||i.prop("disabled")})}),this.items=s},_destroy:function(){this.menuWrap.remove(),this.button.remove(),this.element.show(),this.element.removeUniqueId(),this.label.attr("for",this.ids.element)}})});