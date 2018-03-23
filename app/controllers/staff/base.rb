class Staff::Base < ApplicationController
  before_action :authorize
  layout 'staff'

  private
  def current_staff_member
    if session[:staff_member_id]
      @current_staff_member ||=
        StaffMember.find_by_id(session[:staff_member_id])
    end
  end

  helper_method :current_staff_member

  def authorize
    unless current_staff_member
      flash.alert = '職員としてログインしてください。'
      redirect_to :staff_login
    end
  end
end
