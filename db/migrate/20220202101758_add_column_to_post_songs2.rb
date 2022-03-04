class AddColumnToPostSongs2 < ActiveRecord::Migration[6.1]
  def change
    add_column :post_songs, :album_id, :integer
  end
end
