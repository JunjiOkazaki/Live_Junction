class FixSongsAndPosts < ActiveRecord::Migration[6.1]
  def change
    remove_foreign_key :songs, :artists
    remove_reference :songs, :artists, index: true
    remove_foreign_key :posts, :artists
    remove_reference :posts, :artists, index: true
    add_reference :songs, :artist, foreign_key: true
    add_reference :posts, :artist, foreign_key: true
  end
end
