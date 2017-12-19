$ ->
  $('#jstree_categories').jstree()
$ ->
  $('#jstree_categories').jstree({
    'core' : {
      'check_callback' : true,
      'data' : {
        'url' : (node) ->
          return 'categories.json' # GET /categoris.json を実行する
      }
    },
    "plugins" : [ "dnd" ]
  })

$ ->
  $('#jstree').jstree()
$ ->
  $('#jstree').jstree({
    'core' : {
      'check_callback' : true,
      'data' : {
        'url' : (node) ->
          return 'categories.json' # GET /categoris.json を実行する
      }
    },
    "plugins" : [ "dnd" ]
  })

$ ->
  $('#jstree2').jstree()
$ ->
  $('#jstree2').jstree({
    'core' : {
      'check_callback' : true,
      'data' : {
        'url' : (node) ->
          return 'categories.json' # GET /categoris.json を実行する
      }
    },
    "plugins" : [ "dnd" ]
  })
