require "rails_helper"

RSpec.describe "Password requests", type: :request do

  describe "POST /v1/password_strength" do

    context "missing parameter" do

      before(:context) { post v1_password_strength_path, params: { format: :json } }

      it "returns status Unprocessable Entity" do
        expect(response.status).to eq(422)
      end

      it "returns an error message" do
        expect(response.body).to include("absent parameter")
      end

    end

    context "including parameter" do

      before(:context) { post v1_password_strength_path, params: { password: "passw0rd", format: :json } }

      it "returns status success" do
        expect(response.status).to eq(200)
      end

      it "returns a strength rating" do
        expect(response.body).to include("strength")
      end

    end

  end

end
