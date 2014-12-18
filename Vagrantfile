# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure(2) do |config|

  config.vm.box = "precise"
  config.vm.box_url = "http://opscode-vm-bento.s3.amazonaws.com/vagrant/virtualbox/opscode_ubuntu-12.04_chef-provisionerless.box"
  config.vm.hostname = "cdatx"
  config.vm.network "forwarded_port", guest: 9778, host: 9778

  config.vm.provision 'shell', inline: <<-EOF
    apt-get update && apt-get install -yqq curl git
    curl -sL https://deb.nodesource.com/setup | sudo bash -
    apt-get install -yqq nodejs build-essential
  EOF

end
