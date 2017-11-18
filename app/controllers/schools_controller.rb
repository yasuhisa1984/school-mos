class SchoolsController < ApplicationController
  def index
  end

  def show
   @comments = Comment.all
  end
end
