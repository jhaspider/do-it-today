#!/bin/sh

echo ">>>> Copy favicons"
cp -R -f ./public/favicon ./docs/

echo ">>>> Copy icons"
cp -R -f ./public/icons ./docs/

echo ">>>> Generate CSS"
npx tailwindcss -i ./src/input.css -o ./docs/output.css

echo ">>>> Build Project"
npm run build


echo ">>>> Icrementing the version"
VR=$(<./version.txt)  
arrVR=(${VR//=/ })
OLD_VERSION=${arrVR[1]}
INCREMENTED_VERSION=$((OLD_VERSION+1))
sed -i '' "s/js?v=$OLD_VERSION/js?v=$INCREMENTED_VERSION/g" ./docs/index.html
sed -i '' "s/css?v=$OLD_VERSION/css?v=$INCREMENTED_VERSION/g" ./docs/index.html
sed -i '' "s/VERSION=$OLD_VERSION/VERSION=$INCREMENTED_VERSION/g" ./version.txt

echo ">>>> Deploying New Version $INCREMENTED_VERSION"
git add .
git commit -am "New Version : $INCREMENTED_VERSION"
git push

echo ">>>> DONE"