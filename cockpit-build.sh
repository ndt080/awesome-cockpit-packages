#!/bin/bash

Error() {
  msg="Error: $1"
  echo -e "\033[1;31m$msg\033[0m"
}

# Check cockpit directory
if [ ! -d cockpit ]; then
  Error "Cockpit API directory not found"
fi

npm run build -ws

# Recreate build folder
rm -rf ./build
mkdir build

# Get list of packages
cd packages && packageNames=(*)
cd ..

for index in ${!packageNames[*]}; do
  package="${packageNames[index]}"
  targetDir="build/${package}"
  sourceDir="packages/${package}/dist"

  if [ ! -d "$sourceDir" ]; then
    Error "Package '$package' does not contain the 'dist' build directory.\nIt may not be registered as a workspace in the root package.json"
    continue
  fi

  if [ ! -f "$sourceDir/manifest.json" ]; then
    Error "Package '$package' does not contain a manifest file"
  fi

  mkdir "$targetDir"
  cp -rf "$sourceDir"/* "$targetDir"
done

exit 1


