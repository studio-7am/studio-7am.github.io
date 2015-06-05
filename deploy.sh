rm -rf build
middleman build
middleman deploy
git add .
git add --all
git commit -m "deploy"
git push -u origin master

