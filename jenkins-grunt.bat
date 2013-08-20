#!/bin/bash
 
export PATH=./node_modules/grunt-cli/bin/:./node_modules/bower/bin:./node_modules/phantomjs/bin:$PATH
export PATH
 
npm install -g grunt-cli
npm install
npm install phantomjs
grunt jenkins --no-color