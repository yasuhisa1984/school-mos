!function(s){"use strict";s.ajaxPrefilter(function(t){if(t.iframe)return"iframe"}),s.ajaxTransport("iframe",function(t,e,u){function l(){d.each(function(t){s(this).replaceWith(r[t]),d.splice(t,1)}),a.remove(),i.bind("load",function(){i.remove()}),i.attr("src","about:blank")}var n,a=null,i=null,o="iframe-"+s.now(),r=s(t.files).filter(":file:enabled"),d=null;if(t.dataTypes.shift(),r.length)return a=s("<form enctype='multipart/form-data' method='post'></form>").hide().attr({action:t.url,target:o}),"string"==typeof t.data&&0<t.data.length&&s.error("data must not be serialized"),s.each(t.data||{},function(t,e){s.isPlainObject(e)&&(t=e.name,e=e.value),s("<input type='hidden' />").attr({name:t,value:e}).appendTo(a)}),s("<input type='hidden' value='IFrame' name='X-Requested-With' />").appendTo(a),n=t.dataTypes[0]&&t.accepts[t.dataTypes[0]]?t.accepts[t.dataTypes[0]]+("*"!==t.dataTypes[0]?", */*; q=0.01":""):t.accepts["*"],s("<input type='hidden' name='X-Http-Accept'>").attr("value",n).appendTo(a),d=r.after(function(){return s(this).clone().prop("disabled",!0)}).next(),r.appendTo(a),{send:function(t,d){(i=s("<iframe src='about:blank' name='"+o+"' id='"+o+"' style='display:none'></iframe>")).bind("load",function(){i.unbind("load").bind("load",function(){var t=this.contentWindow?this.contentWindow.document:this.contentDocument?this.contentDocument:this.document,e=t.documentElement?t.documentElement:t.body,n=e.getElementsByTagName("textarea")[0],a=n&&n.getAttribute("data-type")||null,i=n&&n.getAttribute("data-status")||200,o=n&&n.getAttribute("data-statusText")||"OK",r={html:e.innerHTML,text:a?n.value:e?e.textContent||e.innerText:null};l(),u.responseText||(u.responseText=r.text),d(i,o,r,a?"Content-Type: "+a:null)}),a[0].submit()}),s("body").append(a,i)},abort:function(){null!==i&&(i.unbind("load").attr("src","javascript:false;"),l())}}})}(jQuery);