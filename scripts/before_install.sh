#!/bin/bash
sudo apt-get update -y
sudo apt-get install -y openjdk-8-jdk vim git tree 
sudo curl -sL https://deb.nodesource.com/setup_14.x | sudo bash - 
sudo apt install nodejs -y 
sudo npm install -g yarn 
sudo npm install forever -g