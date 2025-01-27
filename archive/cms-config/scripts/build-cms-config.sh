#!/bin/bash

# Create the output directory if it doesn't exist
mkdir -p public/admin

echo "Content of base.yml:"
yq eval '.' public/admin/config/base.yml
echo -e "\nContent of collections.yml:"
yq eval '.' public/admin/config/collections.yml
echo -e "\nMerged result:"

# Merge base.yml and collections.yml
yq eval-all 'select(fileIndex == 0) * select(fileIndex == 1)' \
  public/admin/config/base.yml \
  public/admin/config/collections.yml > public/admin/config.yml

cat public/admin/config.yml

echo -e "\nCMS config files combined successfully!"