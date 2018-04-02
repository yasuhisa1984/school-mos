!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(o){function n(t,e){var i,n,s,a=t.nodeName.toLowerCase();return"area"===a?(n=(i=t.parentNode).name,!(!t.href||!n||"map"!==i.nodeName.toLowerCase())&&(!!(s=o("img[usemap='#"+n+"']")[0])&&r(s))):(/^(input|select|textarea|button|object)$/.test(a)?!t.disabled:"a"===a&&t.href||e)&&r(t)}function r(t){return o.expr.filters.visible(t)&&!o(t).parents().addBack().filter(function(){return"hidden"===o.css(this,"visibility")}).length}var t,e,i,s;o.ui=o.ui||{},o.extend(o.ui,{version:"1.11.4",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),o.fn.extend({scrollParent:function(t){var e=this.css("position"),i="absolute"===e,n=t?/(auto|scroll|hidden)/:/(auto|scroll)/,s=this.parents().filter(function(){var t=o(this);return(!i||"static"!==t.css("position"))&&n.test(t.css("overflow")+t.css("overflow-y")+t.css("overflow-x"))}).eq(0);return"fixed"!==e&&s.length?s:o(this[0].ownerDocument||document)},uniqueId:(t=0,function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++t)})}),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&o(this).removeAttr("id")})}}),o.extend(o.expr[":"],{data:o.expr.createPseudo?o.expr.createPseudo(function(e){return function(t){return!!o.data(t,e)}}):function(t,e,i){return!!o.data(t,i[3])},focusable:function(t){return n(t,!isNaN(o.attr(t,"tabindex")))},tabbable:function(t){var e=o.attr(t,"tabindex"),i=isNaN(e);return(i||0<=e)&&n(t,!i)}}),o("<a>").outerWidth(1).jquery||o.each(["Width","Height"],function(t,i){function n(t,e,i,n){return o.each(s,function(){e-=parseFloat(o.css(t,"padding"+this))||0,i&&(e-=parseFloat(o.css(t,"border"+this+"Width"))||0),n&&(e-=parseFloat(o.css(t,"margin"+this))||0)}),e}var s="Width"===i?["Left","Right"]:["Top","Bottom"],a=i.toLowerCase(),r={innerWidth:o.fn.innerWidth,innerHeight:o.fn.innerHeight,outerWidth:o.fn.outerWidth,outerHeight:o.fn.outerHeight};o.fn["inner"+i]=function(t){return t===undefined?r["inner"+i].call(this):this.each(function(){o(this).css(a,n(this,t)+"px")})},o.fn["outer"+i]=function(t,e){return"number"!=typeof t?r["outer"+i].call(this,t):this.each(function(){o(this).css(a,n(this,t,!0,e)+"px")})}}),o.fn.addBack||(o.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),o("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(o.fn.removeData=(e=o.fn.removeData,function(t){return arguments.length?e.call(this,o.camelCase(t)):e.call(this)})),o.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),o.fn.extend({focus:(s=o.fn.focus,function(e,i){return"number"==typeof e?this.each(function(){var t=this;setTimeout(function(){o(t).focus(),i&&i.call(t)},e)}):s.apply(this,arguments)}),disableSelection:(i="onselectstart"in document.createElement("div")?"selectstart":"mousedown",function(){return this.bind(i+".ui-disableSelection",function(t){t.preventDefault()})}),enableSelection:function(){return this.unbind(".ui-disableSelection")},zIndex:function(t){if(t!==undefined)return this.css("zIndex",t);if(this.length)for(var e,i,n=o(this[0]);n.length&&n[0]!==document;){if(("absolute"===(e=n.css("position"))||"relative"===e||"fixed"===e)&&(i=parseInt(n.css("zIndex"),10),!isNaN(i)&&0!==i))return i;n=n.parent()}return 0}}),o.ui.plugin={add:function(t,e,i){var n,s=o.ui[t].prototype;for(n in i)s.plugins[n]=s.plugins[n]||[],s.plugins[n].push([e,i[n]])},call:function(t,e,i,n){var s,a=t.plugins[e];if(a&&(n||t.element[0].parentNode&&11!==t.element[0].parentNode.nodeType))for(s=0;s<a.length;s++)t.options[a[s][0]]&&a[s][1].apply(t.element,i)}}}),function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(u){var a,i=0,o=Array.prototype.slice;return u.cleanData=(a=u.cleanData,function(t){var e,i,n;for(n=0;null!=(i=t[n]);n++)try{(e=u._data(i,"events"))&&e.remove&&u(i).triggerHandler("remove")}catch(s){}a(t)}),u.widget=function(t,i,e){var n,s,a,r,o={},h=t.split(".")[0];return t=t.split(".")[1],n=h+"-"+t,e||(e=i,i=u.Widget),u.expr[":"][n.toLowerCase()]=function(t){return!!u.data(t,n)},u[h]=u[h]||{},s=u[h][t],a=u[h][t]=function(t,e){if(!this._createWidget)return new a(t,e);arguments.length&&this._createWidget(t,e)},u.extend(a,s,{version:e.version,_proto:u.extend({},e),_childConstructors:[]}),(r=new i).options=u.widget.extend({},r.options),u.each(e,function(e,n){var s,a;u.isFunction(n)?o[e]=(s=function(){return i.prototype[e].apply(this,arguments)},a=function(t){return i.prototype[e].apply(this,t)},function(){var t,e=this._super,i=this._superApply;return this._super=s,this._superApply=a,t=n.apply(this,arguments),this._super=e,this._superApply=i,t}):o[e]=n}),a.prototype=u.widget.extend(r,{widgetEventPrefix:s&&r.widgetEventPrefix||t},o,{constructor:a,namespace:h,widgetName:t,widgetFullName:n}),s?(u.each(s._childConstructors,function(t,e){var i=e.prototype;u.widget(i.namespace+"."+i.widgetName,a,e._proto)}),delete s._childConstructors):i._childConstructors.push(a),u.widget.bridge(t,a),a},u.widget.extend=function(t){for(var e,i,n=o.call(arguments,1),s=0,a=n.length;s<a;s++)for(e in n[s])i=n[s][e],n[s].hasOwnProperty(e)&&i!==undefined&&(u.isPlainObject(i)?t[e]=u.isPlainObject(t[e])?u.widget.extend({},t[e],i):u.widget.extend({},i):t[e]=i);return t},u.widget.bridge=function(a,e){var r=e.prototype.widgetFullName||a;u.fn[a]=function(i){var t="string"==typeof i,n=o.call(arguments,1),s=this;return t?this.each(function(){var t,e=u.data(this,r);return"instance"===i?(s=e,!1):e?u.isFunction(e[i])&&"_"!==i.charAt(0)?(t=e[i].apply(e,n))!==e&&t!==undefined?(s=t&&t.jquery?s.pushStack(t.get()):t,!1):void 0:u.error("no such method '"+i+"' for "+a+" widget instance"):u.error("cannot call methods on "+a+" prior to initialization; attempted to call method '"+i+"'")}):(n.length&&(i=u.widget.extend.apply(null,[i].concat(n))),this.each(function(){var t=u.data(this,r);t?(t.option(i||{}),t._init&&t._init()):u.data(this,r,new e(i,this))})),s}},u.Widget=function(){},u.Widget._childConstructors=[],u.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,e){e=u(e||this.defaultElement||this)[0],this.element=u(e),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=u(),this.hoverable=u(),this.focusable=u(),e!==this&&(u.data(e,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===e&&this.destroy()}}),this.document=u(e.style?e.ownerDocument:e.document||e),this.window=u(this.document[0].defaultView||this.document[0].parentWindow)),this.options=u.widget.extend({},this.options,this._getCreateOptions(),t),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:u.noop,_getCreateEventData:u.noop,_create:u.noop,_init:u.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(u.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:u.noop,widget:function(){return this.element},option:function(t,e){var i,n,s,a=t;if(0===arguments.length)return u.widget.extend({},this.options);if("string"==typeof t)if(a={},t=(i=t.split(".")).shift(),i.length){for(n=a[t]=u.widget.extend({},this.options[t]),s=0;s<i.length-1;s++)n[i[s]]=n[i[s]]||{},n=n[i[s]];if(t=i.pop(),1===arguments.length)return n[t]===undefined?null:n[t];n[t]=e}else{if(1===arguments.length)return this.options[t]===undefined?null:this.options[t];a[t]=e}return this._setOptions(a),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return this.options[t]=e,"disabled"===t&&(this.widget().toggleClass(this.widgetFullName+"-disabled",!!e),e&&(this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus"))),this},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_on:function(r,o,t){var h,l=this;"boolean"!=typeof r&&(t=o,o=r,r=!1),t?(o=h=u(o),this.bindings=this.bindings.add(o)):(t=o,o=this.element,h=this.widget()),u.each(t,function(t,e){function i(){if(r||!0!==l.options.disabled&&!u(this).hasClass("ui-state-disabled"))return("string"==typeof e?l[e]:e).apply(l,arguments)}"string"!=typeof e&&(i.guid=e.guid=e.guid||i.guid||u.guid++);var n=t.match(/^([\w:-]*)\s*(.*)$/),s=n[1]+l.eventNamespace,a=n[2];a?h.delegate(a,s,i):o.bind(s,i)})},_off:function(t,e){e=(e||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.unbind(e).undelegate(e),this.bindings=u(this.bindings.not(t).get()),this.focusable=u(this.focusable.not(t).get()),this.hoverable=u(this.hoverable.not(t).get())},_delay:function(t,e){function i(){return("string"==typeof t?n[t]:t).apply(n,arguments)}var n=this;return setTimeout(i,e||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){u(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){u(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){u(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){u(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,e,i){var n,s,a=this.options[t];if(i=i||{},(e=u.Event(e)).type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),e.target=this.element[0],s=e.originalEvent)for(n in s)n in e||(e[n]=s[n]);return this.element.trigger(e,i),!(u.isFunction(a)&&!1===a.apply(this.element[0],[e].concat(i))||e.isDefaultPrevented())}},u.each({show:"fadeIn",hide:"fadeOut"},function(a,r){u.Widget.prototype["_"+a]=function(e,t,i){"string"==typeof t&&(t={effect:t});var n,s=t?!0===t||"number"==typeof t?r:t.effect||r:a;"number"==typeof(t=t||{})&&(t={duration:t}),n=!u.isEmptyObject(t),t.complete=i,t.delay&&e.delay(t.delay),n&&u.effects&&u.effects.effect[s]?e[a](t):s!==a&&e[s]?e[s](t.duration,t.easing,i):e.queue(function(t){u(this)[a](),i&&i.call(e[0]),t()})}}),u.widget}),function(t){"function"==typeof define&&define.amd?define(["jquery","./core","./widget"],t):t(jQuery)}(function(l){return l.widget("ui.tabs",{version:"1.11.4",delay:300,options:{active:null,collapsible:!1,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_isLocal:(s=/#.*$/,function(t){var e,i;e=(t=t.cloneNode(!1)).href.replace(s,""),i=location.href.replace(s,"");try{e=decodeURIComponent(e)}catch(n){}try{i=decodeURIComponent(i)}catch(n){}return 1<t.hash.length&&e===i}),_create:function(){var e=this,t=this.options;this.running=!1,this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible",t.collapsible),this._processTabs(),t.active=this._initialActive(),l.isArray(t.disabled)&&(t.disabled=l.unique(t.disabled.concat(l.map(this.tabs.filter(".ui-state-disabled"),function(t){return e.tabs.index(t)}))).sort()),!1!==this.options.active&&this.anchors.length?this.active=this._findActive(t.active):this.active=l(),this._refresh(),this.active.length&&this.load(t.active)},_initialActive:function(){var i=this.options.active,t=this.options.collapsible,n=location.hash.substring(1);return null===i&&(n&&this.tabs.each(function(t,e){if(l(e).attr("aria-controls")===n)return i=t,!1}),null===i&&(i=this.tabs.index(this.tabs.filter(".ui-tabs-active"))),null!==i&&-1!==i||(i=!!this.tabs.length&&0)),!1!==i&&-1===(i=this.tabs.index(this.tabs.eq(i)))&&(i=!t&&0),!t&&!1===i&&this.anchors.length&&(i=0),i},_getCreateEventData:function(){return{tab:this.active,panel:this.active.length?this._getPanelForTab(this.active):l()}},_tabKeydown:function(t){var e=l(this.document[0].activeElement).closest("li"),i=this.tabs.index(e),n=!0;if(!this._handlePageNav(t)){switch(t.keyCode){case l.ui.keyCode.RIGHT:case l.ui.keyCode.DOWN:i++;break;case l.ui.keyCode.UP:case l.ui.keyCode.LEFT:n=!1,i--;break;case l.ui.keyCode.END:i=this.anchors.length-1;break;case l.ui.keyCode.HOME:i=0;break;case l.ui.keyCode.SPACE:return t.preventDefault(),clearTimeout(this.activating),void this._activate(i);case l.ui.keyCode.ENTER:return t.preventDefault(),clearTimeout(this.activating),void this._activate(i!==this.options.active&&i);default:return}t.preventDefault(),clearTimeout(this.activating),i=this._focusNextTab(i,n),t.ctrlKey||t.metaKey||(e.attr("aria-selected","false"),this.tabs.eq(i).attr("aria-selected","true"),this.activating=this._delay(function(){this.option("active",i)},this.delay))}},_panelKeydown:function(t){this._handlePageNav(t)||t.ctrlKey&&t.keyCode===l.ui.keyCode.UP&&(t.preventDefault(),this.active.focus())},_handlePageNav:function(t){return t.altKey&&t.keyCode===l.ui.keyCode.PAGE_UP?(this._activate(this._focusNextTab(this.options.active-1,!1)),!0):t.altKey&&t.keyCode===l.ui.keyCode.PAGE_DOWN?(this._activate(this._focusNextTab(this.options.active+1,!0)),!0):void 0},_findNextTab:function(t,e){function i(){return n<t&&(t=0),t<0&&(t=n),t}for(var n=this.tabs.length-1;-1!==l.inArray(i(),this.options.disabled);)t=e?t+1:t-1;return t},_focusNextTab:function(t,e){return t=this._findNextTab(t,e),this.tabs.eq(t).focus(),t},_setOption:function(t,e){"active"!==t?"disabled"!==t?(this._super(t,e),"collapsible"===t&&(this.element.toggleClass("ui-tabs-collapsible",e),e||!1!==this.options.active||this._activate(0)),"event"===t&&this._setupEvents(e),"heightStyle"===t&&this._setupHeightStyle(e)):this._setupDisabled(e):this._activate(e)},_sanitizeSelector:function(t){return t?t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""},refresh:function(){var t=this.options,e=this.tablist.children(":has(a[href])");t.disabled=l.map(e.filter(".ui-state-disabled"),function(t){return e.index(t)}),this._processTabs(),!1!==t.active&&this.anchors.length?this.active.length&&!l.contains(this.tablist[0],this.active[0])?this.tabs.length===t.disabled.length?(t.active=!1,this.active=l()):this._activate(this._findNextTab(Math.max(0,t.active-1),!1)):t.active=this.tabs.index(this.active):(t.active=!1,this.active=l()),this._refresh()},_refresh:function(){this._setupDisabled(this.options.disabled),this._setupEvents(this.options.event),this._setupHeightStyle(this.options.heightStyle),this.tabs.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}),this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-hidden":"true"}),this.active.length?(this.active.addClass("ui-tabs-active ui-state-active").attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}),this._getPanelForTab(this.active).show().attr({"aria-hidden":"false"})):this.tabs.eq(0).attr("tabIndex",0)},_processTabs:function(){var h=this,t=this.tabs,e=this.anchors,i=this.panels;this.tablist=this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role","tablist").delegate("> li","mousedown"+this.eventNamespace,function(t){l(this).is(".ui-state-disabled")&&t.preventDefault()}).delegate(".ui-tabs-anchor","focus"+this.eventNamespace,function(){l(this).closest("li").is(".ui-state-disabled")&&this.blur()}),this.tabs=this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({role:"tab",tabIndex:-1}),this.anchors=this.tabs.map(function(){return l("a",this)[0]}).addClass("ui-tabs-anchor").attr({role:"presentation",tabIndex:-1}),this.panels=l(),this.anchors.each(function(t,e){var i,n,s,a=l(e).uniqueId().attr("id"),r=l(e).closest("li"),o=r.attr("aria-controls");h._isLocal(e)?(s=(i=e.hash).substring(1),n=h.element.find(h._sanitizeSelector(i))):(i="#"+(s=r.attr("aria-controls")||l({}).uniqueId()[0].id),(n=h.element.find(i)).length||(n=h._createPanel(s)).insertAfter(h.panels[t-1]||h.tablist),n.attr("aria-live","polite")),n.length&&(h.panels=h.panels.add(n)),o&&r.data("ui-tabs-aria-controls",o),r.attr({"aria-controls":s,"aria-labelledby":a}),n.attr("aria-labelledby",a)}),this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role","tabpanel"),t&&(this._off(t.not(this.tabs)),this._off(e.not(this.anchors)),this._off(i.not(this.panels)))},_getList:function(){return this.tablist||this.element.find("ol,ul").eq(0)},_createPanel:function(t){return l("<div>").attr("id",t).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy",!0)},_setupDisabled:function(t){l.isArray(t)&&(t.length?t.length===this.anchors.length&&(t=!0):t=!1);for(var e,i=0;e=this.tabs[i];i++)!0===t||-1!==l.inArray(i,t)?l(e).addClass("ui-state-disabled").attr("aria-disabled","true"):l(e).removeClass("ui-state-disabled").removeAttr("aria-disabled");this.options.disabled=t},_setupEvents:function(t){var i={};t&&l.each(t.split(" "),function(t,e){i[e]="_eventHandler"}),this._off(this.anchors.add(this.tabs).add(this.panels)),this._on(!0,this.anchors,{click:function(t){t.preventDefault()}}),this._on(this.anchors,i),this._on(this.tabs,{keydown:"_tabKeydown"}),this._on(this.panels,{keydown:"_panelKeydown"}),this._focusable(this.tabs),this._hoverable(this.tabs)},_setupHeightStyle:function(t){var i,e=this.element.parent();"fill"===t?(i=e.height(),i-=this.element.outerHeight()-this.element.height(),this.element.siblings(":visible").each(function(){var t=l(this),e=t.css("position");"absolute"!==e&&"fixed"!==e&&(i-=t.outerHeight(!0))}),this.element.children().not(this.panels).each(function(){i-=l(this).outerHeight(!0)}),this.panels.each(function(){l(this).height(Math.max(0,i-l(this).innerHeight()+l(this).height()))}).css("overflow","auto")):"auto"===t&&(i=0,this.panels.each(function(){i=Math.max(i,l(this).height("").height())}).height(i))},_eventHandler:function(t){var e=this.options,i=this.active,n=l(t.currentTarget).closest("li"),s=n[0]===i[0],a=s&&e.collapsible,r=a?l():this._getPanelForTab(n),o=i.length?this._getPanelForTab(i):l(),h={oldTab:i,oldPanel:o,newTab:a?l():n,newPanel:r};t.preventDefault(),n.hasClass("ui-state-disabled")||n.hasClass("ui-tabs-loading")||this.running||s&&!e.collapsible||!1===this._trigger("beforeActivate",t,h)||(e.active=!a&&this.tabs.index(n),this.active=s?l():n,this.xhr&&this.xhr.abort(),o.length||r.length||l.error("jQuery UI Tabs: Mismatching fragment identifier."),r.length&&this.load(this.tabs.index(n),t),this._toggle(t,h))},_toggle:function(t,e){function i(){s.running=!1,s._trigger("activate",t,e)}function n(){e.newTab.closest("li").addClass("ui-tabs-active ui-state-active"),a.length&&s.options.show?s._show(a,s.options.show,i):(a.show(),i())}var s=this,a=e.newPanel,r=e.oldPanel;this.running=!0,r.length&&this.options.hide?this._hide(r,this.options.hide,function(){e.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),n()}):(e.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),r.hide(),n()),r.attr("aria-hidden","true"),e.oldTab.attr({"aria-selected":"false","aria-expanded":"false"}),a.length&&r.length?e.oldTab.attr("tabIndex",-1):a.length&&this.tabs.filter(function(){return 0===l(this).attr("tabIndex")}).attr("tabIndex",-1),a.attr("aria-hidden","false"),e.newTab.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0})},_activate:function(t){var e,i=this._findActive(t);i[0]!==this.active[0]&&(i.length||(i=this.active),e=i.find(".ui-tabs-anchor")[0],this._eventHandler({target:e,currentTarget:e,preventDefault:l.noop}))},_findActive:function(t){return!1===t?l():this.tabs.eq(t)},_getIndex:function(t){return"string"==typeof t&&(t=this.anchors.index(this.anchors.filter("[href$='"+t+"']"))),t},_destroy:function(){this.xhr&&this.xhr.abort(),this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"),this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"),this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(),this.tablist.unbind(this.eventNamespace),this.tabs.add(this.panels).each(function(){l.data(this,"ui-tabs-destroy")?l(this).remove():l(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")}),this.tabs.each(function(){var t=l(this),e=t.data("ui-tabs-aria-controls");e?t.attr("aria-controls",e).removeData("ui-tabs-aria-controls"):t.removeAttr("aria-controls")}),this.panels.show(),"content"!==this.options.heightStyle&&this.panels.css("height","")},enable:function(i){var t=this.options.disabled;!1!==t&&(i===undefined?t=!1:(i=this._getIndex(i),t=l.isArray(t)?l.map(t,function(t){return t!==i?t:null}):l.map(this.tabs,function(t,e){return e!==i?e:null})),this._setupDisabled(t))},disable:function(t){var e=this.options.disabled;if(!0!==e){if(t===undefined)e=!0;else{if(t=this._getIndex(t),-1!==l.inArray(t,e))return;e=l.isArray(e)?l.merge([t],e).sort():[t]}this._setupDisabled(e)}},load:function(t,n){t=this._getIndex(t);var s=this,i=this.tabs.eq(t),e=i.find(".ui-tabs-anchor"),a=this._getPanelForTab(i),r={tab:i,panel:a},o=function(t,e){"abort"===e&&s.panels.stop(!1,!0),i.removeClass("ui-tabs-loading"),a.removeAttr("aria-busy"),t===s.xhr&&delete s.xhr};this._isLocal(e[0])||(this.xhr=l.ajax(this._ajaxSettings(e,n,r)),this.xhr&&"canceled"!==this.xhr.statusText&&(i.addClass("ui-tabs-loading"),a.attr("aria-busy","true"),this.xhr.done(function(t,e,i){setTimeout(function(){a.html(t),s._trigger("load",n,r),o(i,e)},1)}).fail(function(t,e){setTimeout(function(){o(t,e)},1)})))},_ajaxSettings:function(t,i,n){var s=this;return{url:t.attr("href"),beforeSend:function(t,e){return s._trigger("beforeLoad",i,l.extend({jqXHR:t,ajaxSettings:e},n))}}},_getPanelForTab:function(t){var e=l(t).attr("aria-controls");return this.element.find(this._sanitizeSelector("#"+e))}});var s});