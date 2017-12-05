class SchoolsController < ApplicationController
  before_action :set_school, only: [:show, :edit ,:update,:destroy]

  def index
  end

  def show
    ip = request.remote_ip
    cookies.encrypted[:ipcookie] = { :value => ip, :expires => 30.days.from_now }
    @comment = @school.comments.build
    @comments = @school.comments
  end


  private
    def set_school
      @school = School.find(params[:id])
    end

end
