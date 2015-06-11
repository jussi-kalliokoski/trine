#!/usr/bin/env bash

set -e

trash --force dist
mkdir -p dist

git clone -b gh-pages https://github.com/jussi-kalliokoski/trine.git dist/website
npm run create-website
