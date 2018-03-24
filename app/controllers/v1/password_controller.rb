class V1::PasswordController < ApplicationController

  # Render a JSON response denoting the strength of a passphrase.
  def strength
    render_unprocessable_entity_missing_param(:password) and return if params[:password].nil?

    render json: { strength: RatePasswordService.new(params[:password]).perform }
  end

end
