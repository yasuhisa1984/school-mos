(function(){var a;(a=jQuery)(document).ready(function(){return window.nestedFormEvents.insertFields=function(e,d,n){var t;return(t=a(n).closest(".controls").siblings(".tab-content")).append(e),t.children().last()}}),a(document).on("nested:fieldAdded","form",function(e){var d,n,t,o,i,r,l;if(n=e.field.addClass("tab-pane").attr("id","unique-id-"+(new Date).getTime()),o=a('<li><a data-toggle="tab" href="#'+n.attr("id")+'">'+n.children(".object-infos").data("object-label")+"</a></li>"),i=void 0!==(d=(r=n.closest(".control-group")).children(".controls")).data("nestedone"),t=d.children(".nav"),e=r.children(".tab-content"),l=d.find(".toggler"),t.append(o),a(window.document).trigger("rails_admin.dom_ready",[n,r]),o.children("a").tab("show"),i||t.select(":hidden").show("slow"),e.select(":hidden").show("slow"),l.addClass("active").removeClass("disabled").children("i").addClass("icon-chevron-down").removeClass("icon-chevron-right"),i)return d.find(".add_nested_fields").removeClass("add_nested_fields").html(n.children(".object-infos").data("object-label"))}),a(document).on("nested:fieldRemoved","form",function(e){var d,n,t,o,i,r,l;return t=(i=(o=e.field).closest(".control-group").children(".controls").children(".nav")).children("li").has('a[href="#'+o.attr("id")+'"]'),r=void 0!==(n=o.closest(".control-group").children(".controls")).data("nestedone"),l=n.find(".toggler"),(t.next().length?t.next():t.prev()).children("a:first").tab("show"),t.remove(),0===i.children().length&&(i.select(":visible").hide("slow"),l.removeClass("active").addClass("disabled").children("i").removeClass("icon-chevron-down").addClass("icon-chevron-right")),r&&(d=l.next()).addClass("add_nested_fields").html(d.data("add-label")),o.find("[required]").each(function(){return a(this).removeAttr("required")})})}).call(this);