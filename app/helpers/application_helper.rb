module ApplicationHelper
  def avatar_url(user)
    return user.profile_photo unless user.profile_photo.nil?
    "media/images/Live_Junction-default-logos.jpeg"
  end
end
