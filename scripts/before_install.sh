#!/bin/bash
sudo apt-get update -y
sudo curl -sL https://deb.nodesource.com/setup_14.x | sudo bash - 
sudo apt install nodejs -y 
sudo npm install -g yarn 
sudo npm install forever -g