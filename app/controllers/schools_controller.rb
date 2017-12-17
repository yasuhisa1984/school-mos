class SchoolsController < ApplicationController
  before_action :set_school, only: [:show, :edit ,:update,:destroy]

  def index
  end

  def show
    @vote = Vote
    @plus = Vote.where('comment_id = ? and plus_or_minus= ?', 1, 1)
    @minus = Vote.where('comment_id = ? and plus_or_minus= ?', 1, -1)
    @comment = @school.comments.build
   @comments = @school.comments
  end


  private
    def set_school
      @school = School.find(params[:id])
    end

end
