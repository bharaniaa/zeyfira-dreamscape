import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import compression from 'compression';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 10000;

// Check if dist directory exists
const distPath = resolve(__dirname, 'dist');
const indexPath = resolve(distPath, 'index.html');

if (!fs.existsSync(distPath)) {
  console.error('Error: dist directory does not exist.');
  console.error('Please run "npm run build" before starting the server.');
  process.exit(1);
}

if (!fs.existsSync(indexPath)) {
  console.error('Error: index.html does not exist in the dist directory.');
  console.error('Please ensure the build was successful.');
  process.exit(1);
}

// Enable gzip compression for all responses
app.use(compression());

// Serve static files from the dist directory
app.use(express.static(distPath));

// Log requests for debugging
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.originalUrl}`);
  next();
});

// Handle SPA routing - serve index.html for any unmatched routes
app.get('*', (req, res) => {
  res.sendFile(indexPath);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Serving files from: ${distPath}`);
}); 