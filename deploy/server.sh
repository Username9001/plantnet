# Pull code
cd /home/erik/plant-fe
# git pull https://gitlab+deploy-token-644783:nnuFrb2zCdV8UsapRWka@gitlab.com/Username9001/plant-monitor

# Update dependencies
# npm install
# Test
# npm run test
# Build and deploy
npm run build
npm run generate
pm2 reload 1