class SchoolsController < ApplicationController
  before_action :set_school, only: [:show, :edit ,:update,:destroy]

  def index
    @schools = School.all

    # エリア別情報取得
    @kantos = School.where(area: "関東地方")
    @chubus = School.where(area: "中部地方")
    @okinawas = School.where(area: "九州／沖縄地方")
    @hokaidos = School.where(area: "北海道／東北地方")
    @kinkis = School.where(area: "近畿地方")
    # 言語
    @java = School.where(language: "java")
    @ruby = School.where(language: "ruby")
    @php = School.where(language: "php")
    @net = School.where(language: ".net")
    @python = School.where(language: "python")
    # 目的
    @hobby = School.where(purpose: "趣味")
    @employment = School.where(purpose: "就職")
    @business = School.where(purpose: "起業")
    @friend = School.where(purpose: "仲間づくり")
  end

  def show
    @vote = Vote
    @plus = Vote.where('comment_id = ? and plus_or_minus= ?', 1, 1)
    @minus = Vote.where('comment_id = ? and plus_or_minus= ?', 1, -1)
    @comment = @school.comments.build
    @comments = @school.comments.page(params[:page])
    render layout: 'show'
  end

  def search
    @school = School.find_by(id: params[:school_id])
    # binding.pry
    render json: @school
  end

  private
    def set_school
      @school = School.find(params[:id])
    end

end
