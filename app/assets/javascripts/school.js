$(document).on('turbolinks:load', function(){ //リロードしなくてもjsが動くようにする
  $(document).on('click', '#j1_7', function(e){ //このアプリケーション(document)の、formというid('#form')で、キーボードが押され指が離れた瞬間(.on('keyup'...))、eという引数を取って以下のことをしなさい(function(e))
    e.preventDefault(); //キャンセル可能なイベントをキャンセル
    var input = $.trim($(this).val()); //この要素に入力された語句を取得し($(this).val())、前後の不要な空白を取り除いた($.trim(...);)上でinputという変数に(var input =)代入
    alert('test');
  });
});