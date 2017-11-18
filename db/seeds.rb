require 'faker'
require 'ui_faces' 
Faker::Config.locale = :ja


#テーブルスクール
10.times {
  name = Faker::Name.name
  school = []
  area = ['関東地方','中部地方','北海道/東北地方','近畿地方','四国地方','中国地方','九州／沖縄地方'].sample
  language = ['java','php','ruby','javascript','c#','python'].sample
  url = Faker::Internet.url
  price = Faker::Number.number(2)
  profile = Faker::Job.field
  address =  Faker::Address.state + Faker::Address.city
  deadline_date = ['1ヶ月','2ヶ月','3ヶ月','4ヶ月','5ヶ月','6ヶ月','7ヶ月','8ヶ月','9ヶ月','10ヶ月'].sample
  school_image_url = UiFaces.faces.sort_by{rand}[0][1]
  purpose = ['就職','起業','仲間づくり','趣味'].sample

          #メール認証を使う場合、以下も必要
          #uid = SecureRandom.uuid
          School.create!(
            :name => name,
            :url => url,
            :price => price,
            :language => language,
            :area => area,
            :address => address,
            :remote => 'true',
            :purpose => purpose,
            :deadline_date => deadline_date,
            :school_image_url => school_image_url
          )
}

#テーブル コメント
200.times {
  name = Faker::Name.name
  content = ['フヒヒww わろた', 'これはステマだわww', 'テレクラキャノンボール', 'テックアカデミー入ろう','DIVE INTO CODEってどうよ?'].sample
  school_id = [*1..10].sample

  Comment.create!(
    :name => name,
    :content => content,
    :school_id => school_id, 

  )
}

