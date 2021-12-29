#!/bin/bash
cd /home/ubuntu/app
sudo yarn install
sudo yarn build
sudo yarn global add serve