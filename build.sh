#!/bin/bash

# Exit on error
set -e

echo "=============== BUILD PROCESS STARTED ==============="
echo "Current directory: $(pwd)"
echo "Node version: $(node -v)"
echo "NPM version: $(npm -v)"

# Clear any previous build
echo "Cleaning up previous build..."
rm -rf dist

# Check package.json exists
if [ ! -f "package.json" ]; then
  echo "Error: package.json not found in current directory!"
  echo "Current directory files:"
  ls -la
  exit 1
fi

# Install dependencies
echo "Installing dependencies..."
npm ci

# TypeScript check
echo "Running TypeScript check..."
npx tsc --noEmit

# Environment info
echo "Environment variables:"
echo "NODE_ENV: $NODE_ENV"
echo "BASE_URL: $BASE_URL"

# Build the application
echo "Building application..."
NODE_ENV=production npm run build

# Verify build succeeded
if [ ! -d "dist" ]; then
  echo "Build failed: dist directory doesn't exist."
  echo "Current directory:"
  ls -la
  exit 1
fi

if [ ! -f "dist/index.html" ]; then
  echo "Build failed: index.html not found in dist directory."
  echo "Dist directory:"
  ls -la dist
  exit 1
fi

echo "Build completed successfully!"
echo "Dist directory structure:"
find dist -type f | sort

# Copy index.html to 404.html for SPA routing
echo "Creating 404.html for SPA routing..."
cp dist/index.html dist/404.html

echo "=============== BUILD PROCESS COMPLETED ===============" 