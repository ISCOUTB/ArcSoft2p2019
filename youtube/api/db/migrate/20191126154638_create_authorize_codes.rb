class CreateAuthorizeCodes < ActiveRecord::Migration[6.0]
  def change
    create_table :authorize_codes do |t|

      t.timestamps
    end
  end
end
