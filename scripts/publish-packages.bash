#!/usr/bin/env bash

set -e

root_dir=`pwd`

for package in dist/split/*; do
    cd $package
        npm publish
    cd $root_dir
done


cd dist/main
    npm publish
cd $root_dir
