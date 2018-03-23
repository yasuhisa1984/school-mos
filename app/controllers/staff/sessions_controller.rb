class Staff::SessionsController < Staff::Base
  layout 'staff'
  def new
    if current_staff_member
      redirect_to :staff_root
    else
      @form = Staff::LoginForm.new
      render action: 'new'
    end
  end

  def create
    @form = Staff::LoginForm.new(staff_params)
    if @form.email.present?
      staff_member = StaffMember.find_by(params[:staff_login_fom])
    end

    if staff_member
      session[:staff_member_id] = staff_member.id
      flash.now.alert = 'ログインしました。'
      redirect_to :staff_root
    else
      flash.now.alert = 'メールアドレスまたはパスワードが正しくありません。'
      render action: 'new'
    end
  end

  def destroy
    session.delete(:staff_member_id)
    flash.notice = 'ログアウトしました。'
    redirect_to :staff_root
  end

  private

  def staff_params
    params.require(:staff_login_form).permit(:email, :hashed_password)
  end
end
