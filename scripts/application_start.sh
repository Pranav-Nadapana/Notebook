#!/bin/bash
cd /home/ubuntu/app
forever start -c "npm start" ./ 