npm run build
if [ "$1" == "update-snapshot" ]; then
    docker run --rm --name e2e-tools-container --network host -v $(pwd):/work/ -w /work/ -it mcr.microsoft.com/playwright:v1.27.1-focal /bin/bash -c "npm i -g serve && npm run test-e2e:update-snapshot"
else
    docker run --rm --name e2e-tools-container --network host -v $(pwd):/work/ -w /work/ -it mcr.microsoft.com/playwright:v1.27.1-focal /bin/bash -c "npm i -g serve && npm run test-e2e"
fi
