# Abort on errors
set -e

if [ -z "$1" ]; then
    echo "Usage: ./deploy.sh user@host:/folder"; 
    exit 1;
fi

# Build
yarn build

# Send the stuff to the server
# $1 = Your webserver and folder, example: user@host:/var/www
rsync -vrP --delete-after ./dist/ $1