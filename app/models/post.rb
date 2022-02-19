class Post < ApplicationRecord
  belongs_to :user
  belongs_to :artist
  has_many :photos, dependent: :destroy
  has_many :likes, -> { order(created_at: :desc) }, dependent: :destroy
  has_many :comments, dependent: :destroy
  has_many :post_songs, dependent: :destroy
  has_many :songs, through: :post_songs

  # fields_for用のネスト
  accepts_nested_attributes_for :photos
  accepts_nested_attributes_for :post_songs, allow_destroy: true

  def liked_by(user)
    Like.find_by(user_id: user.id, post_id: id)
  end
end
