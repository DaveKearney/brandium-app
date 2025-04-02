# Brandium Web Application

This repository contains the web application for Brandium, hosted at [app.brandium.cc](https://app.brandium.cc).

## Technologies

- Next.js 14
- React
- TypeScript
- Tailwind CSS
- Radix UI
- Clerk Authentication

## Development

### Quick Start

1. Create a `.env.local` file based on `.env.local.example` and add your Clerk API keys.

2. The easiest way to start and stop the application:

```bash
# Install dependencies (first time only)
npm install

# Start the application
npm run start:app

# Stop the application
npm run stop:app
```

The application will run on port 3000 and automatically open in your default browser.

### Manual Start

If you prefer to run the server in the foreground:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Troubleshooting

If you encounter port conflicts or issues starting the server:

1. Stop any existing instances: `npm run stop:app`
2. Check for processes using port 3000: `lsof -i :3000`
3. Kill any remaining processes: `kill -9 $(lsof -ti :3000)`

## Structure

- `/src/app` - Next.js app router pages for the dashboard
- `/src/components` - Reusable React components
- `/public` - Static assets
- `/scripts` - Utility scripts for starting/stopping the application

## Features

- Secure user authentication with Clerk
- Protected routes with middleware
- Dashboard
- Brand management
- Market research
- Content creation
- Performance analytics

## Deployment

The application can be deployed to Vercel, AWS Amplify, or any other hosting platform that supports Next.js applications.

## API Integration

This application integrates with the Brandium API at [api.brandium.cc](https://api.brandium.cc).