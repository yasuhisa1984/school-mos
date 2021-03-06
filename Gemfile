source 'https://rubygems.org'
git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

ruby '2.4.1'
gem 'rails', '~> 5.1.1'
gem 'pg', '~> 0.18'
gem 'puma', '~> 3.7'
gem 'sass-rails', '~> 5.0'
gem 'uglifier', '>= 1.3.0'
gem 'coffee-rails', '~> 4.2'
gem 'turbolinks', '~> 5'
gem 'jbuilder', '~> 2.5'
gem 'devise'
gem 'faker'
gem 'twitter-bootstrap-rails'
gem 'jquery-turbolinks'
gem 'rails_12factor', group: :production
gem 'rails_admin'
gem 'cancan'
gem 'activeresource'
gem 'omniauth'
gem 'omniauth-twitter'
gem 'omniauth-facebook'
gem 'carrierwave'
gem "mini_magick"
gem 'slim-rails'
gem 'pry-rails'
gem 'better_errors'
gem 'ui_faces'
gem 'data-confirm-modal', github: 'ifad/data-confirm-modal'
gem 'kaminari'
gem 'toastr-rails'
gem 'dotenv-rails'
gem 'rails-i18n'
gem 'unicorn'
gem 'high_voltage'
gem 'rails-erd', group: [:development, :test]
gem "font-awesome-rails"
gem 'bcrypt', '~> 3.1.7'
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
gem "hologram_rails"

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  # Adds support for Capybara system testing and selenium driver
  gem 'capybara', '~> 2.13.0'
  gem 'selenium-webdriver'
end

group :development do
  gem 'letter_opener_web'
  gem 'capistrano', '3.6.0'
  gem 'capistrano-bundler'
  gem 'capistrano-rails'
  gem 'capistrano-rbenv'
  gem 'capistrano3-unicorn'
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

group :assets do
  gem 'jquery-ui-rails'
  gem 'dynatree-rails'
end
