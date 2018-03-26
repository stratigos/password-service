Rails.application.routes.draw do

  namespace :v1 do

    # OPTIONS enabled for preflight requests. Use `match "*path"` to enable
    #  this functionality for the entire application.
    match :password_strength, via: [:options], to: -> _ { [204, { "Content-Type" => "text/plain" }] }
    post :password_strength, controller: :password, action: :strength

  end

end
