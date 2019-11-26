class CreateAuthorizes < ActiveRecord::Migration[6.0]
  def change
    create_table :authorizes do |t|

      t.timestamps
    end
  end
end
