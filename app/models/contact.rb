class Contact < ApplicationRecord
  #include ActiveModel::Model #ここでActiveModelを読み込んで、DBと繋がらないモデルとしている
  attr_accessor :name, :email, :content #これ大事

  validates :name, :presence => {:message => '名前を入力してください'}
  validates :email, :presence => {:message => 'メールアドレスを入力してください'}
  validates :content, :presence => {:message => 'お問い合わせ内容を記載して下さい'}
end
