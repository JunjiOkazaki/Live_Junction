# frozen_string_literal: true

class Artist < ApplicationRecord
  has_many :albums, dependent: :destroy
  has_many :posts, dependent: :destroy
end
