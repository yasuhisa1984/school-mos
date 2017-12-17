module CommentsHelper
  def date_japan(time)
    time.strftime("%Y年/%m月/%d日(#{%w(日 月 火 水 木 金 土)[time.wday]}) %H:%M:%S")
  end

  def comment_date(id, name, day)
    id.to_s + ' ' + name.to_s + ' '+ day.to_s
  end
end
