#!/bin/bash

# Exit on error
set -e

echo "=============== SERVER STARTING ==============="
echo "Current directory: $(pwd)"
echo "Node version: $(node -v)"
echo "NPM version: $(npm -v)"

# Check if dist directory exists
if [ ! -d "dist" ]; then
  echo "Error: dist directory not found!"
  echo "Please run the build script first."
  echo "Current directory contents:"
  ls -la
  exit 1
fi

# Check if index.html exists
if [ ! -f "dist/index.html" ]; then
  echo "Error: index.html not found in dist directory!"
  echo "The build process may have failed."
  echo "Dist directory contents:"
  ls -la dist
  exit 1
fi

# Check if main JS file exists
JS_FILES=$(find dist -name "*.js" | wc -l)
if [ "$JS_FILES" -eq "0" ]; then
  echo "Error: No JavaScript files found in dist directory!"
  echo "The build process may have failed to create JS bundles."
  echo "Dist directory contents:"
  ls -la dist
  exit 1
fi

# Check for CSS files
CSS_FILES=$(find dist -name "*.css" | wc -l)
echo "Found $CSS_FILES CSS files and $JS_FILES JavaScript files"

# List contents of the dist directory for debugging
echo "Contents of dist directory:"
ls -la dist
echo "Asset files:"
find dist -type f | grep -v "\.html$" | sort

# Start the server
echo "Starting server..."
export PORT=${PORT:-10000}
echo "Using port: $PORT"
node server.js 