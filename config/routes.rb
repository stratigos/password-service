Rails.application.routes.draw do

  namespace :v1 do

    post :password_strength, controller: :password, action: :strength

  end

end
