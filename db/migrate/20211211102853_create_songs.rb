class CreateSongs < ActiveRecord::Migration[6.1]
  def change
    create_table :songs do |t|
      t.belongs_to :album
      t.string :name, null: false
      t.timestamps
    end
  end
end
