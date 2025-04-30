#!/bin/bash

# Exit on error
set -e

echo "Node version: $(node -v)"
echo "NPM version: $(npm -v)"

# Check if dist directory exists
if [ ! -d "dist" ]; then
  echo "Error: dist directory not found!"
  echo "Please run the build script first."
  exit 1
fi

# Check if index.html exists
if [ ! -f "dist/index.html" ]; then
  echo "Error: index.html not found in dist directory!"
  echo "The build process may have failed."
  exit 1
fi

# List contents of the dist directory for debugging
echo "Contents of dist directory:"
ls -la dist

# Start the server
echo "Starting server..."
node server.js 