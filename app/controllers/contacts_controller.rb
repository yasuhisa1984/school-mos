class ContactsController < ApplicationController

  def index
    # @contacts = Contact.all
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

    flash[:notice] = "お問い合わせ頂き、ありがとうございました。"
    render :action => 'thanks'
  end

  # def create
  #   @contact = Contact.new(contact_params)
  #
  #   respond_to do |format|
  #     if @contact.save
  #       ContactMailer.contact_mail(@contact).deliver  #追記
  #       format.html { redirect_to @contact, notice: 'Contact was successfully created.' }
  #       format.json { render :show, status: :created, location: @contact }
  #     else
  #       format.html { render :new }
  #       format.json { render json: @contact.errors, status: :unprocessable_entity }
  #     end
  #   end
  # end

  # def show
  #   @contact = Contact.find(params[:id])
  # end

  private

    def contact_params
      params.require(:contact).permit(:name,:email,:content)
    end
end
