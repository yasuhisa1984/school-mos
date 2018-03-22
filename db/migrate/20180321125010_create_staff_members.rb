class CreateStaffMembers < ActiveRecord::Migration[5.1]
  def change
    create_table :staff_members do |t|
      t.string :email, null: false
      t.string :email_for_index, null: false
      t.string :name, null: false
      t.string :hashed_password
      t.date :start_date, null: false
      t.date :end_date
      t.boolean :suspended, null: false, default: false
      t.timestamps
    end
    add_index :staff_members, :email_for_index, unique: true
  end
end
