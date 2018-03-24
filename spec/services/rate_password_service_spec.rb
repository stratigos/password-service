require_relative "../../app/services/rate_password_service"

RSpec.describe RatePasswordService, type: :service do

  let(:test_strong_password) { "iCanHazL0gin?" }
  let(:test_ok_password) { "pass4me!" }
  let(:test_weak_password) { "apples" }

  describe "#perform" do

    context "strong passwords" do

      subject { RatePasswordService.new(test_strong_password) }

      it "indicates password is strong" do
        expect(subject.perform).to eq("strong")
      end
    end

    context "ok passwords" do

      subject { RatePasswordService.new(test_ok_password) }

      it "indicates password is ok" do
        expect(subject.perform).to eq("ok")
      end

    end

    context "weak passwords" do

      subject { RatePasswordService.new(test_weak_password) }

      it "indicates password is weak" do
        expect(subject.perform).to eq("weak")
      end

    end

  end

end
