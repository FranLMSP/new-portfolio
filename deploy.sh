# Abort on errors
set -e

regex='^[a-zA-Z0-9_.-]+[@][a-zA-Z0-9_.-]+:\/([a-zA-Z0-9_.-]+\/?)+$'
if [[ ! "$1" =~ $regex ]]; then
    echo "Usage: ./deploy.sh user@host:/folder"; 
    exit 1;
fi

# Validate if there's a port set or not
port=22
if [ -n "$2" ]; then
    port=$2;
fi

# Build
yarn build

# Send the stuff to the server
# $1 = Your webserver and folder, example: user@host:/var/www
rsync -e "ssh -p $port" -vrP --delete-after ./dist/ $1

