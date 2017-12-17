class CommentsController < ApplicationController

  def create
    @comment = Comment.new(comment_params)
      if @comment.save
        flash[:notice] = '投稿に成功しました'
        redirect_back(fallback_location: schools_path)
      else
        flash[:notice] = '投稿に失敗しました'
        redirect_back(fallback_location: schools_path)
      end
  end

  def vote
    @comment = Comment.new(comment_params)
  end

  private
    def comment_params
      params.require(:comment).permit(:school_id, :name, :content)
    end

end
