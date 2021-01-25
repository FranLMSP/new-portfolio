# Abort on errors
set -e

# Build
yarn build

# Send the stuff to the server
# $1 = Your webserver and folder, example: user@host:/var/www
rsync -vrP --delete-after ./dist/ $1