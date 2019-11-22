class CreatePosts < ActiveRecord::Migration[6.0]
  def change
    create_table :posts, :id=>false do |t|
      t.string :id
      t.integer :likes
      t.float :efficiency
      t.string :user

      t.timestamps
    end
  end
end
