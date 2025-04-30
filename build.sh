#!/bin/bash

# Exit on error
set -e

echo "Node version: $(node -v)"
echo "NPM version: $(npm -v)"

# Clear any previous build
echo "Cleaning up previous build..."
rm -rf dist

# Install dependencies
echo "Installing dependencies..."
npm ci

# Build the application
echo "Building application..."
npm run build

# Verify build succeeded
if [ ! -d "dist" ]; then
  echo "Build failed: dist directory doesn't exist."
  exit 1
fi

if [ ! -f "dist/index.html" ]; then
  echo "Build failed: index.html not found in dist directory."
  exit 1
fi

echo "Build completed successfully!"
ls -la dist 