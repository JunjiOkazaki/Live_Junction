class AddReferences < ActiveRecord::Migration[6.1]
  def change
    add_reference :songs, :artists, foreign_key: true
    remove_column :posts, :artist_id
    add_reference :posts, :artists, foreign_key: true
  end
end
