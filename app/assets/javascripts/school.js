 $(document).ready(function(){ //リロードしなくてもjsが動くようにする

   $('body').on('click', 'span', function(e){
    id = $(this).attr("id");　// idの取得
    flag = id.slice(0,1);
    id = id.slice(-1); // idに分割
    $.ajax({ //ajax通信で以下のことを行います
      url: '/schools/search', //urlを指定
      type: 'GET', //メソッドを指定
      data: ('school_id=' + id), //コントローラーに渡すデータを'keyword=input(入力された文字のことですね)'にするように指定
      processData: false, //おまじない
      contentType: false, //おまじない
      dataType: 'json' //データ形式を指定
    })

    .done(function(data){ //データを受け取ることに成功したら、dataを引数に取って以下のことする(dataには@usersが入っている状態ですね)
      $('#result').find('li').remove();  //idがresultの子要素のliを削除する
      $('#result2').find('li').remove();
      $('#result3').find('li').remove();
      $(data).each(function(i, school){ //dataをuserという変数に代入して、以下のことを繰り返し行う(単純なeach文ですね)
        if (flag == 'a') {
          $('#result').append('<li style=list-style:none><h2>スクール情報</h2></li>')
          $('#result').append('<li style=list-style:none>スクール名：<a href=./schools/' + school.id + '>' + school.name + '</a></li>') //resultというidの要素に対して、<li>ユーザーの名前</li>を追加する。
          $('#result').append('<li style=list-style:none>値段：' + school.price + '</li>')
          $('#result').append('<li style=list-style:none>習える言語：' + school.language + '</li>')
          $('#result').append('<li style=list-style:none><img src=' + school.school_image_url + '></img></li>')
        } else if (flag == 'l') {
          $('#result2').append('<li style=list-style:none><h2>スクール情報</h2></li>')
          $('#result2').append('<li style=list-style:none>スクール名：<a href=./schools/' + school.id + '>' + school.name + '</a></li>') //resultというidの要素に対して、<li>ユーザーの名前</li>を追加する。
          $('#result2').append('<li style=list-style:none>値段：' + school.price + '</li>')
          $('#result2').append('<li style=list-style:none>習える言語：' + school.language + '</li>')
          $('#result2').append('<li style=list-style:none><img src=' + school.school_image_url + '></img></li>')
        } else if (flag == 'p') {
          $('#result3').append('<li style=list-style:none><h2>スクール情報</h2></li>')
          $('#result3').append('<li style=list-style:none>スクール名：<a href=./schools/' + school.id + '>' + school.name + '</a></li>') //resultというidの要素に対して、<li>ユーザーの名前</li>を追加する。
          $('#result3').append('<li style=list-style:none>値段：' + school.price + '</li>')
          $('#result3').append('<li style=list-style:none>習える言語：' + school.language + '</li>')
          $('#result3').append('<li style=list-style:none><img src=' + school.school_image_url + '></img></li>')
        }
      });
    })
  });

});
