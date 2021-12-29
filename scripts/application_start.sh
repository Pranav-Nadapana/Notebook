#!/bin/bash
cd /home/ubuntu/app
pm2 start yarn -- start
pm2 startup
pm2 save
pm2 restart all