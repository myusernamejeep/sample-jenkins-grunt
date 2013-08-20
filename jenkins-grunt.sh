#!/bin/sh
export PATH=./node_modules/grunt-cli/bin/:./node_modules/bower/bin:./node_modules/phantomjs/bin:$PATH
export PATH
npm install grunt grunt-cli
npm install
npm install phantomjs
grunt jenkins --no-color