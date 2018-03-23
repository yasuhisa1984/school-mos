class Staff::LoginForm
  #これでform_forの引数に指定することができる
  include ActiveModel::Model

  attr_accessor :email, :hashed_password
end
