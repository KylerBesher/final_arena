#!/bin/bash

# Create archive directory
mkdir -p archive/cms-config/public/admin
mkdir -p archive/cms-config/config
mkdir -p archive/cms-config/scripts

# Move files from public/admin
mv public/admin/config.js archive/cms-config/public/admin/ 2>/dev/null || true
mv public/admin/config.yml archive/cms-config/public/admin/ 2>/dev/null || true
mv public/admin/config/ archive/cms-config/public/admin/ 2>/dev/null || true
mv public/admin/preview-templates/ archive/cms-config/public/admin/ 2>/dev/null || true
mv public/admin/widgets/ archive/cms-config/public/admin/ 2>/dev/null || true
mv public/admin/styles/ archive/cms-config/public/admin/ 2>/dev/null || true

# Move files from config directory
mv config/build.js archive/cms-config/config/ 2>/dev/null || true
mv config/base.js archive/cms-config/config/ 2>/dev/null || true
mv config/collections/ archive/cms-config/config/ 2>/dev/null || true

mv config/utils.js archive/cms-config/config/ 2>/dev/null || true

# Move build script
mv scripts/build-cms-config.sh archive/cms-config/scripts/ 2>/dev/null || true

echo "CMS configuration files have been archived to /archive/cms-config/" 