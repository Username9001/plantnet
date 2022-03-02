#!/bin/bash

SERVER_IP=$SERVER_IP

echo "Deploying to ${SERVER_IP}"
ssh deployer@${SERVER_IP} 'bash' < ./deploy/server.sh