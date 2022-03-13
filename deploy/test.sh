#!/bin/bash

SERVER_IP=$SERVER_IP

echo "Testing on ${SERVER_IP}"
ssh deployer@${SERVER_IP} 'bash' < ./deploy/test_server.sh