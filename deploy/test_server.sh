# Pull code
cd /home/erik/plant-fe
git stash
git pull https://gitlab+deploy-token-644783:nnuFrb2zCdV8UsapRWka@gitlab.com/Username9001/plant-monitor

# Update dependencies
npm install

# Test
npm run test