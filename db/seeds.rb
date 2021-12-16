# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Artist.create(name: 'RAISE A SUILEN')
Album.create(artist_id: 1, name: 'R・I・O・T', released_at: '2018-12-12')
Album.create(artist_id: 1, name: 'A DECLARATION OF xxx', released_at: '2019-2-20')
Song.create(album_id: 1, name: 'R・I・O・T')
Song.create(album_id: 1, name: 'UNSTOPPABLE')
Song.create(album_id: 2, name: 'A DECLARATION OF xxx')
Song.create(album_id: 2, name: "EXPOSE 'Burn out!!!'")
