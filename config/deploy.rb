# config/deploy.rb

# capistranoのバージョン固定
lock '3.6.0'

# デプロイするアプリケーション名
set :application, 'school-mos'

# cloneするgitのリポジトリ
set :repo_url, 'https://github.com/yasuhisa1984/school-mos'

# deployするブランチ。デフォルトはmaster
# この記載をすることで bundle exec cap production deploy BRANCH=ブランチ名で特定のブランチをデプロイできるようになる
set :branch, ENV['BRANCH'] || 'master'

# deploy先のディレクトリ。
set :deploy_to, '/var/www/school-mos'

# シンボリックリンクをはるファイル。(※後述)
set :linked_files, %w(config/secrets.yml config/database.yml .env)

# シンボリックリンクをはるフォルダ。(※後述)
set :linked_dirs, %w(log tmp/pids tmp/cache tmp/sockets)

# 保持するバージョンの個数(※後述)
set :keep_releases, 5

# rubyのバージョン
set :rbenv_ruby, '2.4.1'

# システムワイドにインストールされているRubyを使用する
set :rbenv_type, :system

# デプロイ実行時に出力するログのレベル。
set :log_level, :debug
