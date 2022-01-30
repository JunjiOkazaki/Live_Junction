class AddColumnToPostSongs < ActiveRecord::Migration[6.1]
  def change
    add_column :post_songs, :song_order, :integer, null: false
  end
end
