class SchoolsController < ApplicationController
  before_action :set_school, only: [:show, :edit ,:update,:destroy]

  def index
    @schools = School.all

    # エリア取得
    # @areas = School.select(:area).distinct

    ajax_action unless params[:ajax_handler].blank?



    if params[:area_id]
      @area_id = params[:area_id]
      binding.pry
      puts @area_id
    end
    # エリア別情報取得
    @kantos = School.where(area: "関東地方")
    @chubus = School.where(area: "中部地方")
    @okinawas = School.where(area: "九州／沖縄地方")
    @hokaidos = School.where(area: "北海道／東北地方")
    @kinkis = School.where(area: "近畿地方")
  end

  def ajax_action
    if params[:ajax_handler] == 'handle_name1'
      # Ajaxの処理
      @kanto = @schools.where(area: "関東地方")
      if @data.size > 0
        render
      else
        render json: 'no data'
      end
    end
  end

  def area_find
    @kanto = @schools.where(area: "関東地方")
    @chubu = @schools.where(area: "中部地方")
    @okinawa = @schools.where(area: "九州／沖縄地方")
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
