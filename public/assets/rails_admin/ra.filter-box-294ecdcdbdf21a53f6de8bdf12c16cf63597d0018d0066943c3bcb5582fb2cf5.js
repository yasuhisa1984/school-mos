!function(f){f.filters={append:function(e){var t=(e=e||{}).label,n=e.name,i=e.type,a=e.value,l=e.operator,o=e.select_options,p=e.index,s="f["+n+"]["+p+"][v]",d="f["+n+"]["+p+"][o]",r=null,c=null;switch(i){case"boolean":r=f('<select class="input-sm form-control"></select>').prop("name",s).append('<option value="_discard">...</option>').append(f('<option value="true"></option>').prop("selected","true"==a).text(RailsAdmin.I18n.t("true"))).append(f('<option value="false"></option>').prop("selected","false"==a).text(RailsAdmin.I18n.t("false"))).append('<option disabled="disabled">---------</option>').append(f('<option value="_present"></option>').prop("selected","_present"==a).text(RailsAdmin.I18n.t("is_present"))).append(f('<option value="_blank"></option>').prop("selected","_blank"==a).text(RailsAdmin.I18n.t("is_blank")));break;case"date":c=f('<input size="20" class="date additional-fieldset default input-sm form-control" type="text" />').css("display",l&&"default"!=l?"none":"inline-block").prop("name",s+"[]").prop("value",a[0]||"").add(f('<input size="20" placeholder="-\u221e" class="date additional-fieldset between input-sm form-control" type="text" />').css("display","between"==l?"inline-block":"none").prop("name",s+"[]").prop("value",a[1]||"")).add(f('<input size="20" placeholder="\u221e" class="date additional-fieldset between input-sm form-control" type="text" />').css("display","between"==l?"inline-block":"none").prop("name",s+"[]").prop("value",a[2]||""));case"datetime":case"timestamp":r=r||f('<select class="switch-additionnal-fieldsets input-sm form-control"></select>').prop("name",d).append(f('<option data-additional-fieldset="default" value="default"></option>').prop("selected","default"==l).text(RailsAdmin.I18n.t("date"))).append(f('<option data-additional-fieldset="between" value="between"></option>').prop("selected","between"==l).text(RailsAdmin.I18n.t("between_and_"))).append(f('<option value="today"></option>').prop("selected","today"==l).text(RailsAdmin.I18n.t("today"))).append(f('<option value="yesterday"></option>').prop("selected","yesterday"==l).text(RailsAdmin.I18n.t("yesterday"))).append(f('<option value="this_week"></option>').prop("selected","this_week"==l).text(RailsAdmin.I18n.t("this_week"))).append(f('<option value="last_week"></option>').prop("selected","last_week"==l).text(RailsAdmin.I18n.t("last_week"))).append('<option disabled="disabled">---------</option>').append(f('<option value="_not_null"></option>').prop("selected","_not_null"==l).text(RailsAdmin.I18n.t("is_present"))).append(f('<option value="_null"></option>').prop("selected","_null"==l).text(RailsAdmin.I18n.t("is_blank"))),c=c||f('<input size="25" class="datetime additional-fieldset default input-sm form-control" type="text" />').css("display",l&&"default"!=l?"none":"inline-block").prop("name",s+"[]").prop("value",a[0]||"").add(f('<input size="25" placeholder="-\u221e" class="datetime additional-fieldset between input-sm form-control" type="text" />').css("display","between"==l?"inline-block":"none").prop("name",s+"[]").prop("value",a[1]||"")).add(f('<input size="25" placeholder="\u221e" class="datetime additional-fieldset between input-sm form-control" type="text" />').css("display","between"==l?"inline-block":"none").prop("name",s+"[]").prop("value",a[2]||""));break;case"enum":var u=a instanceof Array;r=f('<select class="select-single input-sm form-control"></select>').css("display",u?"none":"inline-block").prop("name",u?undefined:s).data("name",s).append('<option value="_discard">...</option>').append(f('<option value="_present"></option>').prop("selected","_present"==a).text(RailsAdmin.I18n.t("is_present"))).append(f('<option value="_blank"></option>').prop("selected","_blank"==a).text(RailsAdmin.I18n.t("is_blank"))).append('<option disabled="disabled">---------</option>').append(o).add(f('<select multiple="multiple" class="select-multiple input-sm form-control"></select>').css("display",u?"inline-block":"none").prop("name",u?s+"[]":undefined).data("name",s+"[]").append(o)).add(f('<a href="#" class="switch-select"></a>').append(f("<i></i>").addClass("icon-"+(u?"minus":"plus"))));break;case"string":case"text":case"belongs_to_association":r=f('<select class="switch-additionnal-fieldsets input-sm form-control"></select>').prop("value",l).prop("name",d).append('<option value="_discard">...</option>').append(f('<option data-additional-fieldset="additional-fieldset" value="like"></option>').prop("selected","like"==l).text(RailsAdmin.I18n.t("contains"))).append(f('<option data-additional-fieldset="additional-fieldset" value="is"></option>').prop("selected","is"==l).text(RailsAdmin.I18n.t("is_exactly"))).append(f('<option data-additional-fieldset="additional-fieldset" value="starts_with"></option>').prop("selected","starts_with"==l).text(RailsAdmin.I18n.t("starts_with"))).append(f('<option data-additional-fieldset="additional-fieldset" value="ends_with"></option>').prop("selected","ends_with"==l).text(RailsAdmin.I18n.t("ends_with"))).append('<option disabled="disabled">---------</option>').append(f('<option value="_present"></option>').prop("selected","_present"==l).text(RailsAdmin.I18n.t("is_present"))).append(f('<option value="_blank"></option>').prop("selected","_blank"==l).text(RailsAdmin.I18n.t("is_blank"))),c=f('<input class="additional-fieldset input-sm form-control" type="text" />').css("display","_present"==l||"_blank"==l?"none":"inline-block").prop("name",s).prop("value",a);break;case"integer":case"decimal":case"float":r=f('<select class="switch-additionnal-fieldsets input-sm form-control"></select>').prop("name",d).append(f('<option data-additional-fieldset="default" value="default"></option>').prop("selected","default"==l).text(RailsAdmin.I18n.t("number"))).append(f('<option data-additional-fieldset="between" value="between"></option>').prop("selected","between"==l).text(RailsAdmin.I18n.t("between_and_"))).append('<option disabled="disabled">---------</option>').append(f('<option value="_not_null"></option>').prop("selected","_not_null"==l).text(RailsAdmin.I18n.t("is_present"))).append(f('<option value="_null"></option>').prop("selected","_null"==l).text(RailsAdmin.I18n.t("is_blank"))),c=f('<input class="additional-fieldset default input-sm form-control" type="text" />').css("display",l&&"default"!=l?"none":"inline-block").prop("type",i).prop("name",s+"[]").prop("value",a[0]||"").add(f('<input placeholder="-\u221e" class="additional-fieldset between input-sm form-control" />').css("display","between"==l?"inline-block":"none").prop("type",i).prop("name",s+"[]").prop("value",a[1]||"")).add(f('<input placeholder="\u221e" class="additional-fieldset between input-sm form-control" />').css("display","between"==l?"inline-block":"none").prop("type",i).prop("name",s+"[]").prop("value",a[2]||""));break;default:r=f('<input type="text" class="input-sm form-control" />').prop("name",s).prop("value",a)}var m=f("<p>").addClass("filter form-search").append(f('<span class="label label-info form-label"></span>').append(f('<a href="#delete" class="delete"></a>').append('<i class="fa fa-trash-o fa-fw icon-white"></i>').append(document.createTextNode(t)))).append("&nbsp;").append(r).append("&nbsp;").append(c);f("#filters_box").append(m),m.find(".date, .datetime").datetimepicker({locale:RailsAdmin.I18n.locale,showTodayButton:!0,format:e.datetimepicker_format}),f("hr.filters_box:hidden").show("slow")}},f(document).on("click","#filters a",function(e){e.preventDefault(),f.filters.append({label:f(this).data("field-label"),name:f(this).data("field-name"),type:f(this).data("field-type"),value:f(this).data("field-value"),operator:f(this).data("field-operator"),select_options:f(this).data("field-options"),index:f.now().toString().slice(6,11),datetimepicker_format:f(this).data("field-datetimepicker-format")})}),f(document).on("click","#filters_box .delete",function(e){e.preventDefault(),form=f(this).parents("form"),f(this).parents(".filter").remove(),!f("#filters_box").children().length&&f("hr.filters_box:visible").hide("slow")}),f(document).on("click","#filters_box .switch-select",function(e){e.preventDefault();var t=f(this).siblings("select:visible"),n=f(this).siblings("select:hidden");n.attr("name",n.data("name")).show("slow"),t.attr("name",null).hide("slow"),f(this).find("i").toggleClass("icon-plus icon-minus")}),f(document).on("change","#filters_box .switch-additionnal-fieldsets",function(){var e=f(this).find("option:selected");(klass=f(e).data("additional-fieldset"))?(f(this).siblings(".additional-fieldset:not(."+klass+")").hide("slow"),f(this).siblings("."+klass).show("slow")):f(this).siblings(".additional-fieldset").hide("slow")})}(jQuery);