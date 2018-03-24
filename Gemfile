source "https://rubygems.org"

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

# Environment config

# ruby "2.5.0" # Disregard until version is agreed upon for production

# Application stack

gem "rails", "~> 5.1.5"
gem "sqlite3"
gem "puma", "~> 3.7"

# Application dependencies

gem "rack-cors", "~> 1.0.2"

# Environment specific dependencies

group :development, :test do
  gem "byebug", platforms: [:mri, :mingw, :x64_mingw]
  gem "pry-rails", "~> 0.3.6"
  gem "rspec-rails", "~> 3.7.2"
end

group :development do
  gem "listen", ">= 3.0.5", "< 3.2"
  gem "spring"
  gem "spring-watcher-listen", "~> 2.0.0"
end
