(function(){var t,o;t=window.jQuery||("function"==typeof require?require("jquery"):void 0),o=t(document),t.turbo={version:"2.1.0",isReady:!1,use:function(r,t){return o.off(".turbo").on(r+".turbo",this.onLoad).on(t+".turbo",this.onFetch)},addCallback:function(r){return t.turbo.isReady&&r(t),o.on("turbo:ready",function(){return r(t)})},onLoad:function(){return t.turbo.isReady=!0,o.trigger("turbo:ready")},onFetch:function(){return t.turbo.isReady=!1},register:function(){return t(this.onLoad),t.fn.ready=this.addCallback}},t.turbo.register(),t.turbo.use("page:load","page:fetch")}).call(this);