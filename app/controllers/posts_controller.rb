class PostsController < ApplicationController

  before_action :authenticate_user!
  before_action :set_post, only: %i(show destroy)

  def new
    @post = Post.new
    @post.photos.build
    @post.post_songs.build
    @artists = Artist.all
  end

  def create
    @post = Post.new(post_params)
    if @post.save
      redirect_to root_path
      flash[:notice] = '投稿が保存されました'
    else
      redirect_to root_path
      flash[:alert] = '投稿に失敗しました'
    end
  end

  def index
    @posts = Post.limit(10).includes(:artist, :photos, :post_songs, :songs, :user ).order(created_at: "DESC")
  end

  def show
  end

  def destroy
    if @post.user == current_user
      flash[:notice] = '投稿が削除されました' if @post.destroy
    else
      flash[:alert] = '投稿の削除に失敗しました'
    end
    redirect_to root_path
  end

  private
    def post_params
      params.require(:post).permit(:artist_id, :title, :caption, photos_attributes: [:image], post_songs_attributes: [:id, :album_id, :song_id, :song_order, :_destroy ]).merge(user_id: current_user.id)
    end

    def set_post
      @post = Post.find_by(id: params[:id])
    end
end
