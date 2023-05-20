require 'mina/rails'
require 'mina/git'
require 'mina/rvm'
require_relative 'environment'

APPS_ROOT = "~/sites"

# Basic settings:
  set :domain, "#{ENV['domain']}"
  set :rvm_use_path, '/usr/local/rvm/scripts/rvm'

# Optional settings:
  set :user, "#{ENV['user']}"         # Username in the server to SSH to.

# Shared dirs and files will be symlinked into the app-folder by the 'deploy:link_shared_paths' step.
# Some plugins already add folders to shared_dirs like `mina/rails` add `public/assets`, `vendor/bundle` and many more
# run `mina -d` to see all folders and files already included in `shared_dirs` and `shared_files`
# set :shared_dirs, fetch(:shared_dirs, []).push('public/assets')
# set :shared_files, fetch(:shared_files, []).push('config/database.yml', 'config/secrets.yml')

# This task is the environment that is loaded for all remote run commands, such as
# `mina deploy` or `mina rake`.
desc "sets ruby version"
task :remote_environment do
  invoke :'rvm:use', "#{ENV['ruby-version']}"
end

# Put any custom commands you need to run at setup
# All paths in `shared_dirs` and `shared_paths` will be created on their own.
desc "set deployment directory"
task :setup do
  command %(mkdir -p #{APPS_ROOT})
end

desc "spits comments"
task :restart do
  comment 'Restart application'
end