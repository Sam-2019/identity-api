# frozen_string_literal: true
require 'mina/rails'
require 'mina/git'
require 'mina/rvm'
require_relative 'environment'

# Basic settings:
set :application_name, ENV['app'].to_s
set :domain, ENV['domain'].to_s
set :deploy_to, "#{ENV['home_dir']}/#{ENV['app']}"
set :repository, ENV['repository'].to_s
set :branch, 'master'
set :rvm_use_path, '/usr/local/rvm/scripts/rvm'

set :execution_mode, :system
set :init_system, :systemd
set :service_unit_path, '/etc/systemd/system'

# Optional settings:
set :term_mode, :pretty
set :user, ENV['user'].to_s

desc 'sets ruby version'
task :remote_environment do
  invoke :'rvm:use', ENV['ruby_version'].to_s
end

desc 'set deployment directory'
task :setup do
  command %(mkdir -p #{ENV['home_dir']})
end

desc 'Deploys the current app version to the server.'
task :deploy do
  deploy do
    comment "Deploying #{fetch(:application_name)} to #{fetch(:domain)}:#{fetch(:deploy_to)}}"
    invoke :"git:clone"
    invoke :"deploy:cleanup"

    on :launch do
      invoke :remote_environment
      invoke :shutdown
      invoke :yarn_install
      # invoke :create_env
      invoke :delete
      invoke :start_app
    end
  end
end

desc 'spits comments'
task :restart do
  comment 'Restart application'
end

desc 'install yarn packages'
task :yarn_install do
  command %(yarn install)
end

desc 'environment file'
task :create_env do
  in_path(fetch(:current_path)) do
    command %(touch .env)
    command %(nano .env)
  end
end

desc 'start app'
task :start_app do
  in_path(fetch(:current_path)) do
    command %(pm2 start index.js --time --name #{ENV['app'].to_s})
    command %(pm2 save)
  end
end

desc 'start console'
task console: :remote_environment do
  in_path(fetch(:current_path)) do
    command %(node console.js)
  end
end

desc 'restart app'
task :restart do
  in_path(fetch(:current_path)) do
    command %(pm2 restart index.js --time --name #{ENV['app'].to_s})
  end
end

desc 'shutdown app'
task :shutdown do
  in_path(fetch(:current_path)) do
    command %(pm2 stop 0)
    # command %(pm2 stop --name #{ENV['app'].to_s})
  end
end

desc 'delete app'
task :delete do
    command %(pm2 delete 0)
    # command %(pm2 delete --name #{ENV['app'].to_s})
end

desc 'show logs'
task logs: :remote_environment do
  command %(pm2 logs --line 20 --time  0)
end

desc 'flush logs'
task flush: :remote_environment do
  command %(pm2 flush 0)
end

desc 'pm2 cli dashboard'
task pm2_dashboard: :remote_environment do
  command %(pm2 monit)
end

desc 'redis console'
task redis: :remote_environment do
  command 'redis-cli'
end

desc 'ngnix config'
task edit_config: :remote_environment do
  command ENV['nginx'].to_s
end

task :restart_nginx do
  queue 'sudo systemctl restart nginx'
end

desc 'switch sms processor'
task switch_sms_processor: :remote_environment do; end

desc 'db backup'
task backup: :remote_environment do; end
