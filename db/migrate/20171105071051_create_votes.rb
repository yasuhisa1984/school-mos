class CreateVotes < ActiveRecord::Migration[5.1]
  def change
    create_table :votes do |t|
      t.references :comment, foreign_key: true
      t.string :cookie
      t.integer :plus_or_minus

      t.timestamps
    end
  end
end
