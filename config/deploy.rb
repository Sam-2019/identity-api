require 'mina/rails'
require 'mina/git'
require 'mina/rvm'
require_relative 'environment'

# Basic settings:
  set :application_name, "#{ENV['app']}"
  set :domain, "#{ENV['domain']}"
  set :deploy_to, "#{ENV['home_dir']}/#{ENV['app']}"
  set :repository, "#{ENV['repository']}"
  set :branch, "master"
  set :rvm_use_path, '/usr/local/rvm/scripts/rvm'
  
  set :execution_mode, :system
  set :init_system, :systemd
  set :service_unit_path, "/etc/systemd/system"

# Optional settings:
  set :term_mode, :pretty
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
  invoke :'rvm:use', "#{ENV['ruby_version']}"
end

# Put any custom commands you need to run at setup
# All paths in `shared_dirs` and `shared_paths` will be created on their own.
desc "set deployment directory"
task :setup do
  command %(mkdir -p #{ENV['home_dir']})
end

desc "Deploys the current app version to the server."
task :deploy do
  deploy do
    comment "Deploying #{fetch(:application_name)} to #{fetch(:domain)}:#{fetch(:deploy_to)}}"

    on :launch do
      invoke :remote_environment
    end
  end
end

desc "spits comments"
task :restart do
  comment 'Restart application'
end