class ContactMailer < ApplicationMailer

  #デフォルトのヘッダ情報
  default from: "admin@hogehoge.com"

  def contact_mail(contact)
   @contact = contact

   mail to: @contact.email, bcc: ENV["EMIIL_ID"], subject: "お問い合わせの確認メール"
  end
end
