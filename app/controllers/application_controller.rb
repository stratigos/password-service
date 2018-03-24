class ApplicationController < ActionController::API

  private

  def render_unprocessable_entity_missing_param(param_name=nil)
    render json: { errors: I18n.t(:absent_parameter, scope: [:api, :errors], param_name: param_name) },
           status: :unprocessable_entity
  end
  
end
