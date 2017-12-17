class VotesController < ApplicationController

  def create
    comment_id = params[:comment_id]
    @comment = Comment.find(comment_id)

    #過去にクッキーの設定してない場合、設定
    if cookies[:cookie].blank?
      cookie = Time.now.to_i.to_s + [*1..1000000].sample.to_s
      cookies.encrypted[:cookie] = { :value => cookie, :expires => 30.days.from_now }
    end

    #クッキーを取り出す
    user_cookie = cookies[:cookie]


    #DBにクッキーidがない場合のみ、保存。
    if Vote.find_by(comment_id: comment_id,cookie: user_cookie).blank?

      if params[:is_up] == "true"
        plus_or_minus = 1
      else
        plus_or_minus = -1
      end
        Vote.create(comment_id: comment_id, cookie: user_cookie, plus_or_minus: plus_or_minus)

    else
      puts "すでに投稿済みのため、保存しません"
    end
      
      @vote = Vote
  end
  private
    def vote_params
      params.require(:vote).permit(:comment_id, :cookie, :plus_or_minus)
    end

end
