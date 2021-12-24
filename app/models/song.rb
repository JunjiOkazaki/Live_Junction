# frozen_string_literal: true

class Song < ApplicationRecord
  belongs_to :artist
  belongs_to :album
  has_many :post_songs, dependent: :destroy
  has_many :posts, through: :post_songs
end
