class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users, :id=>false do |t|
      t.string :id
      t.string :username
      t.string :fullname
      t.integer :followers
      t.integer :posts

      t.timestamps
    end
  end
end
