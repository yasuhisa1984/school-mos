class CreateSchools < ActiveRecord::Migration[5.1]
  def change
    create_table :schools do |t|
      t.string :name
      t.string :url
      t.integer :price
      t.string :language
      t.string :area
      t.string :address
      t.boolean :remote
      t.string :purpose
      t.string :deadline_date
      t.string :school_image_url
      t.timestamps
    end
  end
end
