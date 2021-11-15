package 'httpd' do
action :install
end

service 'httpd' do
action :start
end

service 'httpd' do
action :enable
end

user 'malsor.kusari' do
  comment 'new user'
  uid 1239
  gid 'wheel'
  home '/home/coli'
  shell '/bin/bash'
end

timezone "Set the host's timezone to Europe/London" do
  timezone 'Europe/London'
end

file '/etc/motd' do
owner 'root'
group 'root'
mode '0644'
content 'Hello Coli'
end