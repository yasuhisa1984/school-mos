!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(a){function s(t,e){var i,s,o,n=t.nodeName.toLowerCase();return"area"===n?(s=(i=t.parentNode).name,!(!t.href||!s||"map"!==i.nodeName.toLowerCase())&&(!!(o=a("img[usemap='#"+s+"']")[0])&&r(o))):(/^(input|select|textarea|button|object)$/.test(n)?!t.disabled:"a"===n&&t.href||e)&&r(t)}function r(t){return a.expr.filters.visible(t)&&!a(t).parents().addBack().filter(function(){return"hidden"===a.css(this,"visibility")}).length}var t,e,i,o;a.ui=a.ui||{},a.extend(a.ui,{version:"1.11.4",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),a.fn.extend({scrollParent:function(t){var e=this.css("position"),i="absolute"===e,s=t?/(auto|scroll|hidden)/:/(auto|scroll)/,o=this.parents().filter(function(){var t=a(this);return(!i||"static"!==t.css("position"))&&s.test(t.css("overflow")+t.css("overflow-y")+t.css("overflow-x"))}).eq(0);return"fixed"!==e&&o.length?o:a(this[0].ownerDocument||document)},uniqueId:(t=0,function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++t)})}),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&a(this).removeAttr("id")})}}),a.extend(a.expr[":"],{data:a.expr.createPseudo?a.expr.createPseudo(function(e){return function(t){return!!a.data(t,e)}}):function(t,e,i){return!!a.data(t,i[3])},focusable:function(t){return s(t,!isNaN(a.attr(t,"tabindex")))},tabbable:function(t){var e=a.attr(t,"tabindex"),i=isNaN(e);return(i||0<=e)&&s(t,!i)}}),a("<a>").outerWidth(1).jquery||a.each(["Width","Height"],function(t,i){function s(t,e,i,s){return a.each(o,function(){e-=parseFloat(a.css(t,"padding"+this))||0,i&&(e-=parseFloat(a.css(t,"border"+this+"Width"))||0),s&&(e-=parseFloat(a.css(t,"margin"+this))||0)}),e}var o="Width"===i?["Left","Right"]:["Top","Bottom"],n=i.toLowerCase(),r={innerWidth:a.fn.innerWidth,innerHeight:a.fn.innerHeight,outerWidth:a.fn.outerWidth,outerHeight:a.fn.outerHeight};a.fn["inner"+i]=function(t){return t===undefined?r["inner"+i].call(this):this.each(function(){a(this).css(n,s(this,t)+"px")})},a.fn["outer"+i]=function(t,e){return"number"!=typeof t?r["outer"+i].call(this,t):this.each(function(){a(this).css(n,s(this,t,!0,e)+"px")})}}),a.fn.addBack||(a.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),a("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(a.fn.removeData=(e=a.fn.removeData,function(t){return arguments.length?e.call(this,a.camelCase(t)):e.call(this)})),a.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),a.fn.extend({focus:(o=a.fn.focus,function(e,i){return"number"==typeof e?this.each(function(){var t=this;setTimeout(function(){a(t).focus(),i&&i.call(t)},e)}):o.apply(this,arguments)}),disableSelection:(i="onselectstart"in document.createElement("div")?"selectstart":"mousedown",function(){return this.bind(i+".ui-disableSelection",function(t){t.preventDefault()})}),enableSelection:function(){return this.unbind(".ui-disableSelection")},zIndex:function(t){if(t!==undefined)return this.css("zIndex",t);if(this.length)for(var e,i,s=a(this[0]);s.length&&s[0]!==document;){if(("absolute"===(e=s.css("position"))||"relative"===e||"fixed"===e)&&(i=parseInt(s.css("zIndex"),10),!isNaN(i)&&0!==i))return i;s=s.parent()}return 0}}),a.ui.plugin={add:function(t,e,i){var s,o=a.ui[t].prototype;for(s in i)o.plugins[s]=o.plugins[s]||[],o.plugins[s].push([e,i[s]])},call:function(t,e,i,s){var o,n=t.plugins[e];if(n&&(s||t.element[0].parentNode&&11!==t.element[0].parentNode.nodeType))for(o=0;o<n.length;o++)t.options[n[o][0]]&&n[o][1].apply(t.element,i)}}}),function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(p){var n,i=0,a=Array.prototype.slice;return p.cleanData=(n=p.cleanData,function(t){var e,i,s;for(s=0;null!=(i=t[s]);s++)try{(e=p._data(i,"events"))&&e.remove&&p(i).triggerHandler("remove")}catch(o){}n(t)}),p.widget=function(t,i,e){var s,o,n,r,a={},l=t.split(".")[0];return t=t.split(".")[1],s=l+"-"+t,e||(e=i,i=p.Widget),p.expr[":"][s.toLowerCase()]=function(t){return!!p.data(t,s)},p[l]=p[l]||{},o=p[l][t],n=p[l][t]=function(t,e){if(!this._createWidget)return new n(t,e);arguments.length&&this._createWidget(t,e)},p.extend(n,o,{version:e.version,_proto:p.extend({},e),_childConstructors:[]}),(r=new i).options=p.widget.extend({},r.options),p.each(e,function(e,s){var o,n;p.isFunction(s)?a[e]=(o=function(){return i.prototype[e].apply(this,arguments)},n=function(t){return i.prototype[e].apply(this,t)},function(){var t,e=this._super,i=this._superApply;return this._super=o,this._superApply=n,t=s.apply(this,arguments),this._super=e,this._superApply=i,t}):a[e]=s}),n.prototype=p.widget.extend(r,{widgetEventPrefix:o&&r.widgetEventPrefix||t},a,{constructor:n,namespace:l,widgetName:t,widgetFullName:s}),o?(p.each(o._childConstructors,function(t,e){var i=e.prototype;p.widget(i.namespace+"."+i.widgetName,n,e._proto)}),delete o._childConstructors):i._childConstructors.push(n),p.widget.bridge(t,n),n},p.widget.extend=function(t){for(var e,i,s=a.call(arguments,1),o=0,n=s.length;o<n;o++)for(e in s[o])i=s[o][e],s[o].hasOwnProperty(e)&&i!==undefined&&(p.isPlainObject(i)?t[e]=p.isPlainObject(t[e])?p.widget.extend({},t[e],i):p.widget.extend({},i):t[e]=i);return t},p.widget.bridge=function(n,e){var r=e.prototype.widgetFullName||n;p.fn[n]=function(i){var t="string"==typeof i,s=a.call(arguments,1),o=this;return t?this.each(function(){var t,e=p.data(this,r);return"instance"===i?(o=e,!1):e?p.isFunction(e[i])&&"_"!==i.charAt(0)?(t=e[i].apply(e,s))!==e&&t!==undefined?(o=t&&t.jquery?o.pushStack(t.get()):t,!1):void 0:p.error("no such method '"+i+"' for "+n+" widget instance"):p.error("cannot call methods on "+n+" prior to initialization; attempted to call method '"+i+"'")}):(s.length&&(i=p.widget.extend.apply(null,[i].concat(s))),this.each(function(){var t=p.data(this,r);t?(t.option(i||{}),t._init&&t._init()):p.data(this,r,new e(i,this))})),o}},p.Widget=function(){},p.Widget._childConstructors=[],p.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,e){e=p(e||this.defaultElement||this)[0],this.element=p(e),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=p(),this.hoverable=p(),this.focusable=p(),e!==this&&(p.data(e,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===e&&this.destroy()}}),this.document=p(e.style?e.ownerDocument:e.document||e),this.window=p(this.document[0].defaultView||this.document[0].parentWindow)),this.options=p.widget.extend({},this.options,this._getCreateOptions(),t),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:p.noop,_getCreateEventData:p.noop,_create:p.noop,_init:p.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(p.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:p.noop,widget:function(){return this.element},option:function(t,e){var i,s,o,n=t;if(0===arguments.length)return p.widget.extend({},this.options);if("string"==typeof t)if(n={},t=(i=t.split(".")).shift(),i.length){for(s=n[t]=p.widget.extend({},this.options[t]),o=0;o<i.length-1;o++)s[i[o]]=s[i[o]]||{},s=s[i[o]];if(t=i.pop(),1===arguments.length)return s[t]===undefined?null:s[t];s[t]=e}else{if(1===arguments.length)return this.options[t]===undefined?null:this.options[t];n[t]=e}return this._setOptions(n),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return this.options[t]=e,"disabled"===t&&(this.widget().toggleClass(this.widgetFullName+"-disabled",!!e),e&&(this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus"))),this},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_on:function(r,a,t){var l,h=this;"boolean"!=typeof r&&(t=a,a=r,r=!1),t?(a=l=p(a),this.bindings=this.bindings.add(a)):(t=a,a=this.element,l=this.widget()),p.each(t,function(t,e){function i(){if(r||!0!==h.options.disabled&&!p(this).hasClass("ui-state-disabled"))return("string"==typeof e?h[e]:e).apply(h,arguments)}"string"!=typeof e&&(i.guid=e.guid=e.guid||i.guid||p.guid++);var s=t.match(/^([\w:-]*)\s*(.*)$/),o=s[1]+h.eventNamespace,n=s[2];n?l.delegate(n,o,i):a.bind(o,i)})},_off:function(t,e){e=(e||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.unbind(e).undelegate(e),this.bindings=p(this.bindings.not(t).get()),this.focusable=p(this.focusable.not(t).get()),this.hoverable=p(this.hoverable.not(t).get())},_delay:function(t,e){function i(){return("string"==typeof t?s[t]:t).apply(s,arguments)}var s=this;return setTimeout(i,e||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){p(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){p(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){p(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){p(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,e,i){var s,o,n=this.options[t];if(i=i||{},(e=p.Event(e)).type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),e.target=this.element[0],o=e.originalEvent)for(s in o)s in e||(e[s]=o[s]);return this.element.trigger(e,i),!(p.isFunction(n)&&!1===n.apply(this.element[0],[e].concat(i))||e.isDefaultPrevented())}},p.each({show:"fadeIn",hide:"fadeOut"},function(n,r){p.Widget.prototype["_"+n]=function(e,t,i){"string"==typeof t&&(t={effect:t});var s,o=t?!0===t||"number"==typeof t?r:t.effect||r:n;"number"==typeof(t=t||{})&&(t={duration:t}),s=!p.isEmptyObject(t),t.complete=i,t.delay&&e.delay(t.delay),s&&p.effects&&p.effects.effect[o]?e[n](t):o!==n&&e[o]?e[o](t.duration,t.easing,i):e.queue(function(t){p(this)[n](),i&&i.call(e[0]),t()})}}),p.widget}),function(t){"function"==typeof define&&define.amd?define(["jquery","./widget"],t):t(jQuery)}(function(o){var n=!1;return o(document).mouseup(function(){n=!1}),o.widget("ui.mouse",{version:"1.11.4",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var e=this;this.element.bind("mousedown."+this.widgetName,function(t){return e._mouseDown(t)}).bind("click."+this.widgetName,function(t){if(!0===o.data(t.target,e.widgetName+".preventClickEvent"))return o.removeData(t.target,e.widgetName+".preventClickEvent"),t.stopImmediatePropagation(),!1}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(t){if(!n){this._mouseMoved=!1,this._mouseStarted&&this._mouseUp(t),this._mouseDownEvent=t;var e=this,i=1===t.which,s=!("string"!=typeof this.options.cancel||!t.target.nodeName)&&o(t.target).closest(this.options.cancel).length;return!(i&&!s&&this._mouseCapture(t))||(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){e.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=!1!==this._mouseStart(t),!this._mouseStarted)?(t.preventDefault(),!0):(!0===o.data(t.target,this.widgetName+".preventClickEvent")&&o.removeData(t.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(t){return e._mouseMove(t)},this._mouseUpDelegate=function(t){return e._mouseUp(t)},this.document.bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),t.preventDefault(),n=!0))}},_mouseMove:function(t){if(this._mouseMoved){if(o.ui.ie&&(!document.documentMode||document.documentMode<9)&&!t.button)return this._mouseUp(t);if(!t.which)return this._mouseUp(t)}return(t.which||t.button)&&(this._mouseMoved=!0),this._mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=!1!==this._mouseStart(this._mouseDownEvent,t),this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted)},_mouseUp:function(t){return this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,t.target===this._mouseDownEvent.target&&o.data(t.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(t)),n=!1},_mouseDistanceMet:function(t){return Math.max(Math.abs(this._mouseDownEvent.pageX-t.pageX),Math.abs(this._mouseDownEvent.pageY-t.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}})}),function(t){"function"==typeof define&&define.amd?define(["jquery","./core","./mouse","./widget"],t):t(jQuery)}(function(b){return b.widget("ui.draggable",b.ui.mouse,{version:"1.11.4",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"===this.options.helper&&this._setPositionRelative(),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._setHandleClassName(),this._mouseInit()},_setOption:function(t,e){this._super(t,e),"handle"===t&&(this._removeHandleClassName(),this._setHandleClassName())},_destroy:function(){(this.helper||this.element).is(".ui-draggable-dragging")?this.destroyOnClear=!0:(this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._removeHandleClassName(),this._mouseDestroy())},_mouseCapture:function(t){var e=this.options;return this._blurActiveElement(t),!(this.helper||e.disabled||0<b(t.target).closest(".ui-resizable-handle").length)&&(this.handle=this._getHandle(t),!!this.handle&&(this._blockFrames(!0===e.iframeFix?"iframe":e.iframeFix),!0))},_blockFrames:function(t){this.iframeBlocks=this.document.find(t).map(function(){var t=b(this);return b("<div>").css("position","absolute").appendTo(t.parent()).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).offset(t.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_blurActiveElement:function(t){var e=this.document[0];if(this.handleElement.is(t.target))try{e.activeElement&&"body"!==e.activeElement.nodeName.toLowerCase()&&b(e.activeElement).blur()}catch(i){}},_mouseStart:function(t){var e=this.options;return this.helper=this._createHelper(t),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),b.ui.ddmanager&&(b.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(!0),this.offsetParent=this.helper.offsetParent(),this.hasFixedAncestor=0<this.helper.parents().filter(function(){return"fixed"===b(this).css("position")}).length,this.positionAbs=this.element.offset(),this._refreshOffsets(t),this.originalPosition=this.position=this._generatePosition(t,!1),this.originalPageX=t.pageX,this.originalPageY=t.pageY,e.cursorAt&&this._adjustOffsetFromHelper(e.cursorAt),this._setContainment(),!1===this._trigger("start",t)?(this._clear(),!1):(this._cacheHelperProportions(),b.ui.ddmanager&&!e.dropBehaviour&&b.ui.ddmanager.prepareOffsets(this,t),this._normalizeRightBottom(),this._mouseDrag(t,!0),b.ui.ddmanager&&b.ui.ddmanager.dragStart(this,t),!0)},_refreshOffsets:function(t){this.offset={top:this.positionAbs.top-this.margins.top,left:this.positionAbs.left-this.margins.left,scroll:!1,parent:this._getParentOffset(),relative:this._getRelativeOffset()},this.offset.click={left:t.pageX-this.offset.left,top:t.pageY-this.offset.top}},_mouseDrag:function(t,e){if(this.hasFixedAncestor&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(t,!0),this.positionAbs=this._convertPositionTo("absolute"),!e){var i=this._uiHash();if(!1===this._trigger("drag",t,i))return this._mouseUp({}),!1;this.position=i.position}return this.helper[0].style.left=this.position.left+"px",this.helper[0].style.top=this.position.top+"px",b.ui.ddmanager&&b.ui.ddmanager.drag(this,t),!1},_mouseStop:function(t){var e=this,i=!1;return b.ui.ddmanager&&!this.options.dropBehaviour&&(i=b.ui.ddmanager.drop(this,t)),this.dropped&&(i=this.dropped,this.dropped=!1),"invalid"===this.options.revert&&!i||"valid"===this.options.revert&&i||!0===this.options.revert||b.isFunction(this.options.revert)&&this.options.revert.call(this.element,i)?b(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){!1!==e._trigger("stop",t)&&e._clear()}):!1!==this._trigger("stop",t)&&this._clear(),!1},_mouseUp:function(t){return this._unblockFrames(),b.ui.ddmanager&&b.ui.ddmanager.dragStop(this,t),this.handleElement.is(t.target)&&this.element.focus(),b.ui.mouse.prototype._mouseUp.call(this,t)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this},_getHandle:function(t){return!this.options.handle||!!b(t.target).closest(this.element.find(this.options.handle)).length},_setHandleClassName:function(){this.handleElement=this.options.handle?this.element.find(this.options.handle):this.element,this.handleElement.addClass("ui-draggable-handle")},_removeHandleClassName:function(){this.handleElement.removeClass("ui-draggable-handle")},_createHelper:function(t){var e=this.options,i=b.isFunction(e.helper),s=i?b(e.helper.apply(this.element[0],[t])):"clone"===e.helper?this.element.clone().removeAttr("id"):this.element;return s.parents("body").length||s.appendTo("parent"===e.appendTo?this.element[0].parentNode:e.appendTo),i&&s[0]===this.element[0]&&this._setPositionRelative(),s[0]===this.element[0]||/(fixed|absolute)/.test(s.css("position"))||s.css("position","absolute"),s},_setPositionRelative:function(){/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative")},_adjustOffsetFromHelper:function(t){"string"==typeof t&&(t=t.split(" ")),b.isArray(t)&&(t={left:+t[0],top:+t[1]||0}),"left"in t&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_isRootNode:function(t){return/(html|body)/i.test(t.tagName)||t===this.document[0]},_getParentOffset:function(){var t=this.offsetParent.offset(),e=this.document[0];return"absolute"===this.cssPosition&&this.scrollParent[0]!==e&&b.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop()),this._isRootNode(this.offsetParent[0])&&(t={top:0,left:0}),{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"!==this.cssPosition)return{top:0,left:0};var t=this.element.position(),e=this._isRootNode(this.scrollParent[0]);return{top:t.top-(parseInt(this.helper.css("top"),10)||0)+(e?0:this.scrollParent.scrollTop()),left:t.left-(parseInt(this.helper.css("left"),10)||0)+(e?0:this.scrollParent.scrollLeft())}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t,e,i,s=this.options,o=this.document[0];this.relativeContainer=null,s.containment?"window"!==s.containment?"document"!==s.containment?s.containment.constructor!==Array?("parent"===s.containment&&(s.containment=this.helper[0].parentNode),(i=(e=b(s.containment))[0])&&(t=/(scroll|auto)/.test(e.css("overflow")),this.containment=[(parseInt(e.css("borderLeftWidth"),10)||0)+(parseInt(e.css("paddingLeft"),10)||0),(parseInt(e.css("borderTopWidth"),10)||0)+(parseInt(e.css("paddingTop"),10)||0),(t?Math.max(i.scrollWidth,i.offsetWidth):i.offsetWidth)-(parseInt(e.css("borderRightWidth"),10)||0)-(parseInt(e.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(t?Math.max(i.scrollHeight,i.offsetHeight):i.offsetHeight)-(parseInt(e.css("borderBottomWidth"),10)||0)-(parseInt(e.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relativeContainer=e)):this.containment=s.containment:this.containment=[0,0,b(o).width()-this.helperProportions.width-this.margins.left,(b(o).height()||o.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]:this.containment=[b(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,b(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,b(window).scrollLeft()+b(window).width()-this.helperProportions.width-this.margins.left,b(window).scrollTop()+(b(window).height()||o.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]:this.containment=null},_convertPositionTo:function(t,e){e||(e=this.position);var i="absolute"===t?1:-1,s=this._isRootNode(this.scrollParent[0]);return{top:e.top+this.offset.relative.top*i+this.offset.parent.top*i-("fixed"===this.cssPosition?-this.offset.scroll.top:s?0:this.offset.scroll.top)*i,left:e.left+this.offset.relative.left*i+this.offset.parent.left*i-("fixed"===this.cssPosition?-this.offset.scroll.left:s?0:this.offset.scroll.left)*i}},_generatePosition:function(t,e){var i,s,o,n,r=this.options,a=this._isRootNode(this.scrollParent[0]),l=t.pageX,h=t.pageY;return a&&this.offset.scroll||(this.offset.scroll={top:this.scrollParent.scrollTop(),left:this.scrollParent.scrollLeft()}),e&&(this.containment&&(this.relativeContainer?(s=this.relativeContainer.offset(),i=[this.containment[0]+s.left,this.containment[1]+s.top,this.containment[2]+s.left,this.containment[3]+s.top]):i=this.containment,t.pageX-this.offset.click.left<i[0]&&(l=i[0]+this.offset.click.left),t.pageY-this.offset.click.top<i[1]&&(h=i[1]+this.offset.click.top),t.pageX-this.offset.click.left>i[2]&&(l=i[2]+this.offset.click.left),t.pageY-this.offset.click.top>i[3]&&(h=i[3]+this.offset.click.top)),r.grid&&(o=r.grid[1]?this.originalPageY+Math.round((h-this.originalPageY)/r.grid[1])*r.grid[1]:this.originalPageY,h=i?o-this.offset.click.top>=i[1]||o-this.offset.click.top>i[3]?o:o-this.offset.click.top>=i[1]?o-r.grid[1]:o+r.grid[1]:o,n=r.grid[0]?this.originalPageX+Math.round((l-this.originalPageX)/r.grid[0])*r.grid[0]:this.originalPageX,l=i?n-this.offset.click.left>=i[0]||n-this.offset.click.left>i[2]?n:n-this.offset.click.left>=i[0]?n-r.grid[0]:n+r.grid[0]:n),"y"===r.axis&&(l=this.originalPageX),"x"===r.axis&&(h=this.originalPageY)),{top:h-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.offset.scroll.top:a?0:this.offset.scroll.top),left:l-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.offset.scroll.left:a?0:this.offset.scroll.left)}},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1,this.destroyOnClear&&this.destroy()},_normalizeRightBottom:function(){"y"!==this.options.axis&&"auto"!==this.helper.css("right")&&(this.helper.width(this.helper.width()),this.helper.css("right","auto")),"x"!==this.options.axis&&"auto"!==this.helper.css("bottom")&&(this.helper.height(this.helper.height()),this.helper.css("bottom","auto"))},_trigger:function(t,e,i){return i=i||this._uiHash(),b.ui.plugin.call(this,t,[e,i,this],!0),/^(drag|start|stop)/.test(t)&&(this.positionAbs=this._convertPositionTo("absolute"),i.offset=this.positionAbs),b.Widget.prototype._trigger.call(this,t,e,i)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),b.ui.plugin.add("draggable","connectToSortable",{start:function(e,t,i){var s=b.extend({},t,{item:i.element});i.sortables=[],b(i.options.connectToSortable).each(function(){var t=b(this).sortable("instance");t&&!t.options.disabled&&(i.sortables.push(t),t.refreshPositions(),t._trigger("activate",e,s))})},stop:function(e,t,i){var s=b.extend({},t,{item:i.element});i.cancelHelperRemoval=!1,b.each(i.sortables,function(){var t=this;t.isOver?(t.isOver=0,i.cancelHelperRemoval=!0,t.cancelHelperRemoval=!1,t._storedCSS={position:t.placeholder.css("position"),top:t.placeholder.css("top"),left:t.placeholder.css("left")},t._mouseStop(e),t.options.helper=t.options._helper):(t.cancelHelperRemoval=!0,t._trigger("deactivate",e,s))})},drag:function(i,s,o){b.each(o.sortables,function(){var t=!1,e=this;e.positionAbs=o.positionAbs,e.helperProportions=o.helperProportions,e.offset.click=o.offset.click,e._intersectsWith(e.containerCache)&&(t=!0,b.each(o.sortables,function(){return this.positionAbs=o.positionAbs,this.helperProportions=o.helperProportions,this.offset.click=o.offset.click,this!==e&&this._intersectsWith(this.containerCache)&&b.contains(e.element[0],this.element[0])&&(t=!1),t})),t?(e.isOver||(e.isOver=1,o._parent=s.helper.parent(),e.currentItem=s.helper.appendTo(e.element).data("ui-sortable-item",!0),e.options._helper=e.options.helper,e.options.helper=function(){return s.helper[0]},i.target=e.currentItem[0],e._mouseCapture(i,!0),e._mouseStart(i,!0,!0),e.offset.click.top=o.offset.click.top,e.offset.click.left=o.offset.click.left,e.offset.parent.left-=o.offset.parent.left-e.offset.parent.left,e.offset.parent.top-=o.offset.parent.top-e.offset.parent.top,o._trigger("toSortable",i),o.dropped=e.element,b.each(o.sortables,function(){this.refreshPositions()}),o.currentItem=o.element,e.fromOutside=o),e.currentItem&&(e._mouseDrag(i),s.position=e.position)):e.isOver&&(e.isOver=0,e.cancelHelperRemoval=!0,e.options._revert=e.options.revert,e.options.revert=!1,e._trigger("out",i,e._uiHash(e)),e._mouseStop(i,!0),e.options.revert=e.options._revert,e.options.helper=e.options._helper,e.placeholder&&e.placeholder.remove(),s.helper.appendTo(o._parent),o._refreshOffsets(i),s.position=o._generatePosition(i,!0),o._trigger("fromSortable",i),o.dropped=!1,b.each(o.sortables,function(){this.refreshPositions()}))})}}),b.ui.plugin.add("draggable","cursor",{start:function(t,e,i){var s=b("body"),o=i.options;s.css("cursor")&&(o._cursor=s.css("cursor")),s.css("cursor",o.cursor)},stop:function(t,e,i){var s=i.options;s._cursor&&b("body").css("cursor",s._cursor)}}),b.ui.plugin.add("draggable","opacity",{start:function(t,e,i){var s=b(e.helper),o=i.options;s.css("opacity")&&(o._opacity=s.css("opacity")),s.css("opacity",o.opacity)},stop:function(t,e,i){var s=i.options;s._opacity&&b(e.helper).css("opacity",s._opacity)}}),b.ui.plugin.add("draggable","scroll",{start:function(t,e,i){i.scrollParentNotHidden||(i.scrollParentNotHidden=i.helper.scrollParent(!1)),i.scrollParentNotHidden[0]!==i.document[0]&&"HTML"!==i.scrollParentNotHidden[0].tagName&&(i.overflowOffset=i.scrollParentNotHidden.offset())},drag:function(t,e,i){var s=i.options,o=!1,n=i.scrollParentNotHidden[0],r=i.document[0];n!==r&&"HTML"!==n.tagName?(s.axis&&"x"===s.axis||(i.overflowOffset.top+n.offsetHeight-t.pageY<s.scrollSensitivity?n.scrollTop=o=n.scrollTop+s.scrollSpeed:t.pageY-i.overflowOffset.top<s.scrollSensitivity&&(n.scrollTop=o=n.scrollTop-s.scrollSpeed)),s.axis&&"y"===s.axis||(i.overflowOffset.left+n.offsetWidth-t.pageX<s.scrollSensitivity?n.scrollLeft=o=n.scrollLeft+s.scrollSpeed:t.pageX-i.overflowOffset.left<s.scrollSensitivity&&(n.scrollLeft=o=n.scrollLeft-s.scrollSpeed))):(s.axis&&"x"===s.axis||(t.pageY-b(r).scrollTop()<s.scrollSensitivity?o=b(r).scrollTop(b(r).scrollTop()-s.scrollSpeed):b(window).height()-(t.pageY-b(r).scrollTop())<s.scrollSensitivity&&(o=b(r).scrollTop(b(r).scrollTop()+s.scrollSpeed))),s.axis&&"y"===s.axis||(t.pageX-b(r).scrollLeft()<s.scrollSensitivity?o=b(r).scrollLeft(b(r).scrollLeft()-s.scrollSpeed):b(window).width()-(t.pageX-b(r).scrollLeft())<s.scrollSensitivity&&(o=b(r).scrollLeft(b(r).scrollLeft()+s.scrollSpeed)))),!1!==o&&b.ui.ddmanager&&!s.dropBehaviour&&b.ui.ddmanager.prepareOffsets(i,t)}}),b.ui.plugin.add("draggable","snap",{start:function(t,e,i){var s=i.options;i.snapElements=[],b(s.snap.constructor!==String?s.snap.items||":data(ui-draggable)":s.snap).each(function(){var t=b(this),e=t.offset();this!==i.element[0]&&i.snapElements.push({item:this,width:t.outerWidth(),height:t.outerHeight(),top:e.top,left:e.left})})},drag:function(t,e,i){var s,o,n,r,a,l,h,p,c,u,d=i.options,f=d.snapTolerance,g=e.offset.left,m=g+i.helperProportions.width,v=e.offset.top,_=v+i.helperProportions.height;for(c=i.snapElements.length-1;0<=c;c--)l=(a=i.snapElements[c].left-i.margins.left)+i.snapElements[c].width,p=(h=i.snapElements[c].top-i.margins.top)+i.snapElements[c].height,m<a-f||l+f<g||_<h-f||p+f<v||!b.contains(i.snapElements[c].item.ownerDocument,i.snapElements[c].item)?(i.snapElements[c].snapping&&i.options.snap.release&&i.options.snap.release.call(i.element,t,b.extend(i._uiHash(),{snapItem:i.snapElements[c].item})),i.snapElements[c].snapping=!1):("inner"!==d.snapMode&&(s=Math.abs(h-_)<=f,o=Math.abs(p-v)<=f,n=Math.abs(a-m)<=f,r=Math.abs(l-g)<=f,s&&(e.position.top=i._convertPositionTo("relative",{top:h-i.helperProportions.height,left:0}).top),o&&(e.position.top=i._convertPositionTo("relative",{top:p,left:0}).top),n&&(e.position.left=i._convertPositionTo("relative",{top:0,left:a-i.helperProportions.width}).left),r&&(e.position.left=i._convertPositionTo("relative",{top:0,left:l}).left)),u=s||o||n||r,"outer"!==d.snapMode&&(s=Math.abs(h-v)<=f,o=Math.abs(p-_)<=f,n=Math.abs(a-g)<=f,r=Math.abs(l-m)<=f,s&&(e.position.top=i._convertPositionTo("relative",{top:h,left:0}).top),o&&(e.position.top=i._convertPositionTo("relative",{top:p-i.helperProportions.height,left:0}).top),n&&(e.position.left=i._convertPositionTo("relative",{top:0,left:a}).left),r&&(e.position.left=i._convertPositionTo("relative",{top:0,left:l-i.helperProportions.width}).left)),!i.snapElements[c].snapping&&(s||o||n||r||u)&&i.options.snap.snap&&i.options.snap.snap.call(i.element,t,b.extend(i._uiHash(),{snapItem:i.snapElements[c].item})),i.snapElements[c].snapping=s||o||n||r||u)}}),b.ui.plugin.add("draggable","stack",{start:function(t,e,i){var s,o=i.options,n=b.makeArray(b(o.stack)).sort(function(t,e){return(parseInt(b(t).css("zIndex"),10)||0)-(parseInt(b(e).css("zIndex"),10)||0)});n.length&&(s=parseInt(b(n[0]).css("zIndex"),10)||0,b(n).each(function(t){b(this).css("zIndex",s+t)}),this.css("zIndex",s+n.length))}}),b.ui.plugin.add("draggable","zIndex",{start:function(t,e,i){var s=b(e.helper),o=i.options;s.css("zIndex")&&(o._zIndex=s.css("zIndex")),s.css("zIndex",o.zIndex)},stop:function(t,e,i){var s=i.options;s._zIndex&&b(e.helper).css("zIndex",s._zIndex)}}),b.ui.draggable}),function(t){"function"==typeof define&&define.amd?define(["jquery","./core","./widget","./mouse","./draggable"],t):t(jQuery)}(function(a){return a.widget("ui.droppable",{version:"1.11.4",widgetEventPrefix:"drop",options:{accept:"*",activeClass:!1,addClasses:!0,greedy:!1,hoverClass:!1,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var e,t=this.options,i=t.accept;this.isover=!1,this.isout=!0,this.accept=a.isFunction(i)?i:function(t){return t.is(i)},this.proportions=function(t){if(!arguments.length)return e||(e={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight});e=t},this._addToManager(t.scope),t.addClasses&&this.element.addClass("ui-droppable")},_addToManager:function(t){a.ui.ddmanager.droppables[t]=a.ui.ddmanager.droppables[t]||[],
a.ui.ddmanager.droppables[t].push(this)},_splice:function(t){for(var e=0;e<t.length;e++)t[e]===this&&t.splice(e,1)},_destroy:function(){var t=a.ui.ddmanager.droppables[this.options.scope];this._splice(t),this.element.removeClass("ui-droppable ui-droppable-disabled")},_setOption:function(t,e){if("accept"===t)this.accept=a.isFunction(e)?e:function(t){return t.is(e)};else if("scope"===t){var i=a.ui.ddmanager.droppables[this.options.scope];this._splice(i),this._addToManager(e)}this._super(t,e)},_activate:function(t){var e=a.ui.ddmanager.current;this.options.activeClass&&this.element.addClass(this.options.activeClass),e&&this._trigger("activate",t,this.ui(e))},_deactivate:function(t){var e=a.ui.ddmanager.current;this.options.activeClass&&this.element.removeClass(this.options.activeClass),e&&this._trigger("deactivate",t,this.ui(e))},_over:function(t){var e=a.ui.ddmanager.current;e&&(e.currentItem||e.element)[0]!==this.element[0]&&this.accept.call(this.element[0],e.currentItem||e.element)&&(this.options.hoverClass&&this.element.addClass(this.options.hoverClass),this._trigger("over",t,this.ui(e)))},_out:function(t){var e=a.ui.ddmanager.current;e&&(e.currentItem||e.element)[0]!==this.element[0]&&this.accept.call(this.element[0],e.currentItem||e.element)&&(this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("out",t,this.ui(e)))},_drop:function(e,t){var i=t||a.ui.ddmanager.current,s=!1;return!(!i||(i.currentItem||i.element)[0]===this.element[0])&&(this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var t=a(this).droppable("instance");if(t.options.greedy&&!t.options.disabled&&t.options.scope===i.options.scope&&t.accept.call(t.element[0],i.currentItem||i.element)&&a.ui.intersect(i,a.extend(t,{offset:t.element.offset()}),t.options.tolerance,e))return s=!0,!1}),!s&&(!!this.accept.call(this.element[0],i.currentItem||i.element)&&(this.options.activeClass&&this.element.removeClass(this.options.activeClass),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("drop",e,this.ui(i)),this.element)))},ui:function(t){return{draggable:t.currentItem||t.element,helper:t.helper,position:t.position,offset:t.positionAbs}}}),a.ui.intersect=function(){function u(t,e,i){return e<=t&&t<e+i}return function(t,e,i,s){if(!e.offset)return!1;var o=(t.positionAbs||t.position.absolute).left+t.margins.left,n=(t.positionAbs||t.position.absolute).top+t.margins.top,r=o+t.helperProportions.width,a=n+t.helperProportions.height,l=e.offset.left,h=e.offset.top,p=l+e.proportions().width,c=h+e.proportions().height;switch(i){case"fit":return l<=o&&r<=p&&h<=n&&a<=c;case"intersect":return l<o+t.helperProportions.width/2&&r-t.helperProportions.width/2<p&&h<n+t.helperProportions.height/2&&a-t.helperProportions.height/2<c;case"pointer":return u(s.pageY,h,e.proportions().height)&&u(s.pageX,l,e.proportions().width);case"touch":return(h<=n&&n<=c||h<=a&&a<=c||n<h&&c<a)&&(l<=o&&o<=p||l<=r&&r<=p||o<l&&p<r);default:return!1}}}(),a.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(t,e){var i,s,o=a.ui.ddmanager.droppables[t.options.scope]||[],n=e?e.type:null,r=(t.currentItem||t.element).find(":data(ui-droppable)").addBack();t:for(i=0;i<o.length;i++)if(!(o[i].options.disabled||t&&!o[i].accept.call(o[i].element[0],t.currentItem||t.element))){for(s=0;s<r.length;s++)if(r[s]===o[i].element[0]){o[i].proportions().height=0;continue t}o[i].visible="none"!==o[i].element.css("display"),o[i].visible&&("mousedown"===n&&o[i]._activate.call(o[i],e),o[i].offset=o[i].element.offset(),o[i].proportions({width:o[i].element[0].offsetWidth,height:o[i].element[0].offsetHeight}))}},drop:function(t,e){var i=!1;return a.each((a.ui.ddmanager.droppables[t.options.scope]||[]).slice(),function(){this.options&&(!this.options.disabled&&this.visible&&a.ui.intersect(t,this,this.options.tolerance,e)&&(i=this._drop.call(this,e)||i),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],t.currentItem||t.element)&&(this.isout=!0,this.isover=!1,this._deactivate.call(this,e)))}),i},dragStart:function(t,e){t.element.parentsUntil("body").bind("scroll.droppable",function(){t.options.refreshPositions||a.ui.ddmanager.prepareOffsets(t,e)})},drag:function(n,r){n.options.refreshPositions&&a.ui.ddmanager.prepareOffsets(n,r),a.each(a.ui.ddmanager.droppables[n.options.scope]||[],function(){if(!this.options.disabled&&!this.greedyChild&&this.visible){var t,e,i,s=a.ui.intersect(n,this,this.options.tolerance,r),o=!s&&this.isover?"isout":s&&!this.isover?"isover":null;o&&(this.options.greedy&&(e=this.options.scope,(i=this.element.parents(":data(ui-droppable)").filter(function(){return a(this).droppable("instance").options.scope===e})).length&&((t=a(i[0]).droppable("instance")).greedyChild="isover"===o)),t&&"isover"===o&&(t.isover=!1,t.isout=!0,t._out.call(t,r)),this[o]=!0,this["isout"===o?"isover":"isout"]=!1,this["isover"===o?"_over":"_out"].call(this,r),t&&"isout"===o&&(t.isout=!1,t.isover=!0,t._over.call(t,r)))}})},dragStop:function(t,e){t.element.parentsUntil("body").unbind("scroll.droppable"),t.options.refreshPositions||a.ui.ddmanager.prepareOffsets(t,e)}},a.ui.droppable});