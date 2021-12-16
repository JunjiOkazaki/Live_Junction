class CreatePostSongs < ActiveRecord::Migration[6.1]
  def change
    create_table :post_songs do |t|
      t.references :post, null: false, index: true, foreign_key: true
      t.references :song, null: false, index: true, foreign_key: true

      t.timestamps
    end
  end
end
