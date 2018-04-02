class ContactsController < ApplicationController

  def index
    @contact = Contact.new
    render :action => 'index'
  end

  def confirm
    @contact = Contact.new(contact_params)
    if @contact.valid?
      render :action => 'confirm'
    else
      render :action => 'index'
    end
  end

  def thanks
    @contact = Contact.new(contact_params)
    ContactMailer.contact_mail(@contact).deliver  #追記
    @contact.save
    flash[:notice] = "お問い合わせ頂き、ありがとうございました。"
    render :action => 'thanks'
  end

  private

    def contact_params
      params.require(:contact).permit(:name,:email,:content)
    end
end
