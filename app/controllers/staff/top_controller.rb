class Staff::TopController < Staff::Base
  before_action :authorize
  layout 'staff'

  def index
    render action: 'index'
  end
end
