import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import compression from 'compression';
import fs from 'fs';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 10000;

console.log('=============== SERVER STARTING ===============');
console.log('Current directory:', __dirname);
console.log('Environment:', process.env.NODE_ENV);

// Check if dist directory exists
const distPath = resolve(__dirname, 'dist');
const indexPath = resolve(distPath, 'index.html');

if (!fs.existsSync(distPath)) {
  console.error('Error: dist directory does not exist.');
  console.error('Current directory contents:');
  fs.readdirSync(__dirname).forEach(file => {
    console.error(`- ${file}`);
  });
  console.error('Please run "npm run build" before starting the server.');
  process.exit(1);
}

if (!fs.existsSync(indexPath)) {
  console.error('Error: index.html does not exist in the dist directory.');
  console.error('Dist directory contents:');
  fs.readdirSync(distPath).forEach(file => {
    console.error(`- ${file}`);
  });
  console.error('Please ensure the build was successful.');
  process.exit(1);
}

// Enable gzip compression for all responses
app.use(compression());

// Cache control - cache static assets but not HTML
app.use((req, res, next) => {
  // Don't cache HTML files
  if (req.path.endsWith('.html') || req.path === '/') {
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  } else if (req.path.match(/\.(js|css|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/)) {
    // Cache static assets for 7 days
    res.setHeader('Cache-Control', 'public, max-age=604800');
  }
  next();
});

// Serve static files from the dist directory
app.use(express.static(distPath));

// Log requests for debugging
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.originalUrl}`);
  next();
});

// Serve the React SPA for all non-file routes
app.get('*', (req, res, next) => {
  // Skip API routes if you have any
  if (req.path.startsWith('/api')) {
    return next();
  }

  // Skip if the request is for an existing file
  const filePath = path.join(distPath, req.path);
  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    return next();
  }

  console.log(`SPA route requested: ${req.path}, serving index.html`);
  res.sendFile(indexPath);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Serving files from: ${distPath}`);
  console.log('=============== SERVER STARTED ===============');
}); 