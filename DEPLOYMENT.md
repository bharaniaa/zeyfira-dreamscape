# Deployment Guide for Zeyfira Dreamscape

This guide explains how to deploy the Zeyfira application to Render.com.

## Local Development

For local development, run:

```
npm run dev
```

## Production Build

To create a production build:

```
npm run build
```

To preview the production build locally:

```
npm run preview
```

## Deployment on Render.com

### Manual Deployment

1. Create a new Web Service on Render
2. Connect your GitHub repository
3. Configure the following settings:
   - **Build Command**: `npm run render-build` or `chmod +x ./build.sh && ./build.sh`
   - **Start Command**: `npm run render-start` or `chmod +x ./start.sh && ./start.sh`
   - **Environment**: Node
   - **Environment Variables**:
     - `NODE_ENV`: production
     - `PORT`: 10000 (or let Render assign one)

### Troubleshooting Render Deployment

If you see the error `ENOENT: no such file or directory, stat '/opt/render/project/src/dist/index.html'`, it typically means:

1. The build process failed to create the `dist` directory
2. The build completed but files weren't placed in the expected location

Our improved deployment scripts include:

- `build.sh`: Script that handles the build process with proper error checking
- `start.sh`: Script that verifies the build artifacts exist before starting the server
- Enhanced error logging in the server.js file

### Automatic Deployment with render.yaml

This repository includes a `render.yaml` file that can be used for automatic deployment using Render Blueprints:

1. Push the `render.yaml` file to your GitHub repository
2. Navigate to https://dashboard.render.com/blueprints
3. Click "New Blueprint Instance"
4. Connect your GitHub repository
5. Follow the on-screen instructions

## Custom Domain Setup

After deployment:

1. In your Render dashboard, go to your web service
2. Click on "Settings" then "Custom Domain"
3. Add your domain (e.g., zeyfira.com)
4. Update your DNS records as instructed by Render

## Why `npm run dev` Doesn't Work for Production

The `npm run dev` command:
- Starts a development server with hot module replacement
- Doesn't optimize or minify assets
- Is not meant to handle production traffic
- Consumes more resources than a production server

Instead, we:
1. Build the application with `npm run build`
2. Serve the static files using a lightweight Express server
3. Implement proper routing for SPA navigation
4. Enable gzip compression for faster loading

This approach ensures your application is optimized, reliable, and performs well in a production environment. 