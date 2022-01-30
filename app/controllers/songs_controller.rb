class SongsController < ApplicationController
  def index
    album = Album.find(params[:album_id])
    render json: album.songs.select(:id, :name)
  end
end
