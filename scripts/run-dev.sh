docker build -t rrd-tool "${PWD}"
docker run --rm -it -v "${PWD}":/app -p 3000:3000 --name rrd-tool-container rrd-tool /bin/bash
