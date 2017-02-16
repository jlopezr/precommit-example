#!/bin/bash
FILES=`git diff --name-only --cached|grep ".js$"`
echo $FILES
if [ -n "$FILES" ]; then
    ./node_modules/.bin/eslint --fix --rulesdir ./node_modules/eslint-plugin-extra-rules/ $FILES && git add $FILES
fi
