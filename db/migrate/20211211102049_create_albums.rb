class CreateAlbums < ActiveRecord::Migration[6.1]
  def change
    create_table :albums do |t|
      t.belongs_to :artist
      t.string :name, null: false
      t.date :released_at
      t.timestamps
    end
  end
end
