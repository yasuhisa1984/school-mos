!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(l){var n,s="ui-effects-",r=l;return l.effects={effect:{}},function(u,l){function d(t,e,n){var r=b[e.type]||{};return null==t?n||!e.def?null:e.def:(t=r.floor?~~t:parseFloat(t),isNaN(t)?e.def:r.mod?(t+r.mod)%r.mod:t<0?0:r.max<t?r.max:t)}function s(i){var s=h(),f=s._rgba=[];return i=i.toLowerCase(),y(e,function(t,e){var n,r=e.re.exec(i),o=r&&e.parse(r),a=e.space||"rgba";if(o)return n=s[a](o),s[g[a].cache]=n[g[a].cache],f=s._rgba=n._rgba,!1}),f.length?("0,0,0,0"===f.join()&&u.extend(f,c.transparent),s):c[i]}function f(t,e,n){return 6*(n=(n+1)%1)<1?t+(e-t)*n*6:2*n<1?e:3*n<2?t+(e-t)*(2/3-n)*6:t}var c,t="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",p=/^([\-+])=\s*(\d+\.?\d*)/,e=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[t[1],t[2],t[3],t[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[2.55*t[1],2.55*t[2],2.55*t[3],t[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(t){return[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(t){return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(t){return[t[1],t[2]/100,t[3]/100,t[4]]}}],h=u.Color=function(t,e,n,r){return new u.Color.fn.parse(t,e,n,r)},g={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},b={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},m=h.support={},n=u("<p>")[0],y=u.each;n.style.cssText="background-color:rgba(1,1,1,.5)",m.rgba=-1<n.style.backgroundColor.indexOf("rgba"),y(g,function(t,e){e.cache="_"+t,e.props.alpha={idx:3,type:"percent",def:1}}),h.fn=u.extend(h.prototype,{parse:function(o,t,e,n){if(o===l)return this._rgba=[null,null,null,null],this;(o.jquery||o.nodeType)&&(o=u(o).css(t),t=l);var a=this,r=u.type(o),i=this._rgba=[];return t!==l&&(o=[o,t,e,n],r="array"),"string"===r?this.parse(s(o)||c._default):"array"===r?(y(g.rgba.props,function(t,e){i[e.idx]=d(o[e.idx],e)}),this):"object"===r?(y(g,o instanceof h?function(t,e){o[e.cache]&&(a[e.cache]=o[e.cache].slice())}:function(t,n){var r=n.cache;y(n.props,function(t,e){if(!a[r]&&n.to){if("alpha"===t||null==o[t])return;a[r]=n.to(a._rgba)}a[r][e.idx]=d(o[t],e,!0)}),a[r]&&u.inArray(null,a[r].slice(0,3))<0&&(a[r][3]=1,n.from&&(a._rgba=n.from(a[r])))}),this):void 0},is:function(t){var o=h(t),a=!0,i=this;return y(g,function(t,e){var n,r=o[e.cache];return r&&(n=i[e.cache]||e.to&&e.to(i._rgba)||[],y(e.props,function(t,e){if(null!=r[e.idx])return a=r[e.idx]===n[e.idx]})),a}),a},_space:function(){var n=[],r=this;return y(g,function(t,e){r[e.cache]&&n.push(t)}),n.pop()},transition:function(t,i){var s=h(t),e=s._space(),n=g[e],r=0===this.alpha()?h("transparent"):this,f=r[n.cache]||n.to(r._rgba),c=f.slice();return s=s[n.cache],y(n.props,function(t,e){var n=e.idx,r=f[n],o=s[n],a=b[e.type]||{};null!==o&&(null===r?c[n]=o:(a.mod&&(o-r>a.mod/2?r+=a.mod:r-o>a.mod/2&&(r-=a.mod)),c[n]=d((o-r)*i+r,e)))}),this[e](c)},blend:function(t){if(1===this._rgba[3])return this;var e=this._rgba.slice(),n=e.pop(),r=h(t)._rgba;return h(u.map(e,function(t,e){return(1-n)*r[e]+n*t}))},toRgbaString:function(){var t="rgba(",e=u.map(this._rgba,function(t,e){return null==t?2<e?1:0:t});return 1===e[3]&&(e.pop(),t="rgb("),t+e.join()+")"},toHslaString:function(){var t="hsla(",e=u.map(this.hsla(),function(t,e){return null==t&&(t=2<e?1:0),e&&e<3&&(t=Math.round(100*t)+"%"),t});return 1===e[3]&&(e.pop(),t="hsl("),t+e.join()+")"},toHexString:function(t){var e=this._rgba.slice(),n=e.pop();return t&&e.push(~~(255*n)),"#"+u.map(e,function(t){return 1===(t=(t||0).toString(16)).length?"0"+t:t}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),h.fn.parse.prototype=h.fn,g.hsla.to=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e,n,r=t[0]/255,o=t[1]/255,a=t[2]/255,i=t[3],s=Math.max(r,o,a),f=Math.min(r,o,a),c=s-f,u=s+f,l=.5*u;return e=f===s?0:r===s?60*(o-a)/c+360:o===s?60*(a-r)/c+120:60*(r-o)/c+240,n=0===c?0:l<=.5?c/u:c/(2-u),[Math.round(e)%360,n,l,null==i?1:i]},g.hsla.from=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e=t[0]/360,n=t[1],r=t[2],o=t[3],a=r<=.5?r*(1+n):r+n-r*n,i=2*r-a;return[Math.round(255*f(i,a,e+1/3)),Math.round(255*f(i,a,e)),Math.round(255*f(i,a,e-1/3)),o]},y(g,function(f,t){var n=t.props,i=t.cache,s=t.to,c=t.from;h.fn[f]=function(t){if(s&&!this[i]&&(this[i]=s(this._rgba)),t===l)return this[i].slice();var e,r=u.type(t),o="array"===r||"object"===r?t:arguments,a=this[i].slice();return y(n,function(t,e){var n=o["object"===r?t:e.idx];null==n&&(n=a[e.idx]),a[e.idx]=d(n,e)}),c?((e=h(c(a)))[i]=a,e):h(a)},y(n,function(i,s){h.fn[i]||(h.fn[i]=function(t){var e,n=u.type(t),r="alpha"===i?this._hsla?"hsla":"rgba":f,o=this[r](),a=o[s.idx];return"undefined"===n?a:("function"===n&&(t=t.call(this,a),n=u.type(t)),null==t&&s.empty?this:("string"===n&&(e=p.exec(t))&&(t=a+parseFloat(e[2])*("+"===e[1]?1:-1)),o[s.idx]=t,this[r](o)))})})}),h.hook=function(t){var e=t.split(" ");y(e,function(t,i){u.cssHooks[i]={set:function(t,e){var n,r,o="";if("transparent"!==e&&("string"!==u.type(e)||(n=s(e)))){if(e=h(n||e),!m.rgba&&1!==e._rgba[3]){for(r="backgroundColor"===i?t.parentNode:t;(""===o||"transparent"===o)&&r&&r.style;)try{o=u.css(r,"backgroundColor"),r=r.parentNode}catch(a){}e=e.blend(o&&"transparent"!==o?o:"_default")}e=e.toRgbaString()}try{t.style[i]=e}catch(a){}}},u.fx.step[i]=function(t){t.colorInit||(t.start=h(t.elem,i),t.end=h(t.end),t.colorInit=!0),u.cssHooks[i].set(t.elem,t.start.transition(t.end,t.pos))}})},h.hook(t),u.cssHooks.borderColor={expand:function(n){var r={};return y(["Top","Right","Bottom","Left"],function(t,e){r["border"+e+"Color"]=n}),r}},c=u.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(r),function(){function i(t){var e,n,r=t.ownerDocument.defaultView?t.ownerDocument.defaultView.getComputedStyle(t,null):t.currentStyle,o={};if(r&&r.length&&r[0]&&r[r[0]])for(n=r.length;n--;)"string"==typeof r[e=r[n]]&&(o[l.camelCase(e)]=r[e]);else for(e in r)"string"==typeof r[e]&&(o[e]=r[e]);return o}function s(t,e){var n,r,o={};for(n in e)r=e[n],t[n]!==r&&(u[n]||!l.fx.step[n]&&isNaN(parseFloat(r))||(o[n]=r));return o}var a,o,f,c=["add","remove","toggle"],u={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};l.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(t,e){l.fx.step[e]=function(t){("none"!==t.end&&!t.setAttr||1===t.pos&&!t.setAttr)&&(r.style(t.elem,e,t.end),t.setAttr=!0)}}),l.fn.addBack||(l.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),l.effects.animateClass=function(o,t,e,n){var a=l.speed(t,e,n);return this.queue(function(){var t,n=l(this),e=n.attr("class")||"",r=a.children?n.find("*").addBack():n;r=r.map(function(){return{el:l(this),start:i(this)}}),(t=function(){l.each(c,function(t,e){o[e]&&n[e+"Class"](o[e])})})(),r=r.map(function(){return this.end=i(this.el[0]),this.diff=s(this.start,this.end),this}),n.attr("class",e),r=r.map(function(){var t=this,e=l.Deferred(),n=l.extend({},a,{queue:!1,complete:function(){e.resolve(t)}});return this.el.animate(this.diff,n),e.promise()}),l.when.apply(l,r.get()).done(function(){t(),l.each(arguments,function(){var e=this.el;l.each(this.diff,function(t){e.css(t,"")})}),a.complete.call(n[0])})})},l.fn.extend({addClass:(f=l.fn.addClass,function(t,e,n,r){return e?l.effects.animateClass.call(this,{add:t},e,n,r):f.apply(this,arguments)}),removeClass:(o=l.fn.removeClass,function(t,e,n,r){return 1<arguments.length?l.effects.animateClass.call(this,{remove:t},e,n,r):o.apply(this,arguments)}),toggleClass:(a=l.fn.toggleClass,function(t,e,n,r,o){return"boolean"==typeof e||e===undefined?n?l.effects.animateClass.call(this,e?{add:t}:{remove:t},n,r,o):a.apply(this,arguments):l.effects.animateClass.call(this,{toggle:t},e,n,r)}),switchClass:function(t,e,n,r,o){return l.effects.animateClass.call(this,{add:e,remove:t},n,r,o)}})}(),function(){function r(t,e,n,r){return l.isPlainObject(t)&&(t=(e=t).effect),t={effect:t},null==e&&(e={}),l.isFunction(e)&&(r=e,n=null,e={}),("number"==typeof e||l.fx.speeds[e])&&(r=n,n=e,e={}),l.isFunction(n)&&(r=n,n=null),e&&l.extend(t,e),n=n||e.duration,t.duration=l.fx.off?0:"number"==typeof n?n:n in l.fx.speeds?l.fx.speeds[n]:l.fx.speeds._default,t.complete=r||e.complete,t}function n(t){return!(t&&"number"!=typeof t&&!l.fx.speeds[t])||("string"==typeof t&&!l.effects.effect[t]||(!!l.isFunction(t)||"object"==typeof t&&!t.effect))}var o,a,i;l.extend(l.effects,{version:"1.11.4",save:function(t,e){for(var n=0;n<e.length;n++)null!==e[n]&&t.data(s+e[n],t[0].style[e[n]])},restore:function(t,e){var n,r;for(r=0;r<e.length;r++)null!==e[r]&&((n=t.data(s+e[r]))===undefined&&(n=""),t.css(e[r],n))},setMode:function(t,e){return"toggle"===e&&(e=t.is(":hidden")?"show":"hide"),e},getBaseline:function(t,e){var n,r;switch(t[0]){case"top":n=0;break;case"middle":n=.5;break;case"bottom":n=1;break;default:n=t[0]/e.height}switch(t[1]){case"left":r=0;break;case"center":r=.5;break;case"right":r=1;break;default:r=t[1]/e.width}return{x:r,y:n}},createWrapper:function(n){if(n.parent().is(".ui-effects-wrapper"))return n.parent();var r={width:n.outerWidth(!0),height:n.outerHeight(!0),"float":n.css("float")},t=l("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),e={width:n.width(),height:n.height()},o=document.activeElement;try{o.id}catch(a){o=document.body}return n.wrap(t),(n[0]===o||l.contains(n[0],o))&&l(o).focus(),t=n.parent(),"static"===n.css("position")?(t.css({position:"relative"}),n.css({position:"relative"})):(l.extend(r,{position:n.css("position"),zIndex:n.css("z-index")}),l.each(["top","left","bottom","right"],function(t,e){r[e]=n.css(e),isNaN(parseInt(r[e],10))&&(r[e]="auto")}),n.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),n.css(e),t.css(r).show()},removeWrapper:function(t){var e=document.activeElement;return t.parent().is(".ui-effects-wrapper")&&(t.parent().replaceWith(t),(t[0]===e||l.contains(t[0],e))&&l(e).focus()),t},setTransition:function(r,t,o,a){return a=a||{},l.each(t,function(t,e){var n=r.cssUnit(e);0<n[0]&&(a[e]=n[0]*o+n[1])}),a}}),l.fn.extend({effect:function(){function t(t){function e(){l.isFunction(r)&&r.call(n[0]),l.isFunction(t)&&t()}var n=l(this),r=a.complete,o=a.mode;(n.is(":hidden")?"hide"===o:"show"===o)?(n[o](),e()):i.call(n[0],a,e)}var a=r.apply(this,arguments),e=a.mode,n=a.queue,i=l.effects.effect[a.effect];return l.fx.off||!i?e?this[e](a.duration,a.complete):this.each(function(){a.complete&&a.complete.call(this)}):!1===n?this.each(t):this.queue(n||"fx",t)},show:(i=l.fn.show,function(t){if(n(t))return i.apply(this,arguments);var e=r.apply(this,arguments);return e.mode="show",this.effect.call(this,e)}),hide:(a=l.fn.hide,function(t){if(n(t))return a.apply(this,arguments);var e=r.apply(this,arguments);return e.mode="hide",this.effect.call(this,e)}),toggle:(o=l.fn.toggle,function(t){if(n(t)||"boolean"==typeof t)return o.apply(this,arguments);var e=r.apply(this,arguments);return e.mode="toggle",this.effect.call(this,e)}),cssUnit:function(t){var n=this.css(t),r=[];return l.each(["em","px","%","pt"],function(t,e){0<n.indexOf(e)&&(r=[parseFloat(n),e])}),r}})}(),n={},l.each(["Quad","Cubic","Quart","Quint","Expo"],function(e,t){n[t]=function(t){return Math.pow(t,e+2)}}),l.extend(n,{Sine:function(t){return 1-Math.cos(t*Math.PI/2)},Circ:function(t){return 1-Math.sqrt(1-t*t)},Elastic:function(t){return 0===t||1===t?t:-Math.pow(2,8*(t-1))*Math.sin((80*(t-1)-7.5)*Math.PI/15)},Back:function(t){return t*t*(3*t-2)},Bounce:function(t){for(var e,n=4;t<((e=Math.pow(2,--n))-1)/11;);return 1/Math.pow(4,3-n)-7.5625*Math.pow((3*e-2)/22-t,2)}}),l.each(n,function(t,e){l.easing["easeIn"+t]=e,l.easing["easeOut"+t]=function(t){return 1-e(1-t)},l.easing["easeInOut"+t]=function(t){return t<.5?e(2*t)/2:1-e(-2*t+2)/2}}),l.effects});