#!/bin/bash

git clone --depth=1 https://github.com/cockpit-project/cockpit.git cockpit-tmp
mv cockpit-tmp/pkg/lib cockpit
rm -rf cockpit-tmp
