# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure(2) do |config|

  config.vm.define "workstation" do |workstation_config|
    workstation_config.vm.box = "precise"
    workstation_config.vm.box_url = "http://opscode-vm-bento.s3.amazonaws.com/vagrant/virtualbox/opscode_ubuntu-12.04_chef-provisionerless.box"
    workstation_config.vm.hostname = "workstation"
    workstation_config.vm.network "forwarded_port", guest: 9778, host: 8080
  end
end
