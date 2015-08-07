#!/usr/bin/env bash

set -e

coverage_directory="./.tmp/coverage"
test_directory="./test"

babel-node node_modules/.bin/isparta cover \
    --dir "$coverage_directory" \
    node_modules/.bin/_mocha \
    -- \
    -R spec \
    "$test_directory/_init.js" \
    "$test_directory/spec/**/*Spec.js" \

karma start --single-run
