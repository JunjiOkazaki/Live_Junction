class AddColumnsToPosts < ActiveRecord::Migration[6.1]
  def change
    add_column :posts, :title, :string, null: false
    add_column :posts, :live_datetime, :datetime
    add_column :posts, :artist_id, :integer
  end
end
