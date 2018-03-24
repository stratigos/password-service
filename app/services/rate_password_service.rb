class RatePasswordService

  RATING_WEAK = "weak".freeze
  RATING_OK = "ok".freeze
  RATING_STRONG = "strong".freeze

  def initialize(password)
    @password = password.to_s
  end

  def perform
    return self.class::RATING_STRONG if strong_password?
    return self.class::RATING_OK if ok_password?
    self.class::RATING_WEAK
  end

  private

  def strong_password?
    long_length? && special_chars? && numbers? && capitals_and_lower_case?
  end

  def ok_password?
    medium_length? && special_chars? && numbers?
  end

  def long_length?
    @password.length > 9
  end

  def medium_length?
    @password.length > 6
  end

  def special_chars?
    @password =~ /[^A-Za-z0-9]/
  end

  def numbers?
    @password =~ /\d/
  end

  def capitals_and_lower_case?
    @password =~ /(?=.*[a-z])(?=.*[A-Z])/
  end

end
