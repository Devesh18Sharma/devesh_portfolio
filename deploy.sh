#!/bin/bash

# Production deployment script for Devesh Sharma Portfolio

# Exit immediately if a command exits with a non-zero status
set -e

echo "Starting deployment process..."

# Pull latest changes
echo "Pulling latest changes from git repository..."
git pull origin main

# Install dependencies
echo "Installing dependencies..."
npm ci

# Create data directory if it doesn't exist (for file-based DB)
if [ "${USE_LOCAL_DB}" = "true" ]; then
  echo "Setting up file-based database..."
  mkdir -p data
fi

# Generate Prisma client
echo "Generating Prisma client..."
npm run prisma:generate

# Build the application
echo "Building the application..."
npm run build

# Check if we need to seed the database
if [ "${USE_LOCAL_DB}" = "true" ]; then
  if [ ! -f "data/projects.json" ] || [ ! -s "data/projects.json" ] || [ "$(cat data/projects.json)" == "[]" ]; then
    echo "Database is empty. Seeding data..."
    npm run prisma:seed
  fi
else
  # Apply database migrations for MongoDB
  echo "Applying database migrations..."
  npm run prisma:push
fi

# Restart the application (adjust as needed for your hosting environment)
echo "Restarting the application..."
# For PM2
# pm2 restart portfolio-devesh

# For systemd
# sudo systemctl restart portfolio-devesh

echo "Deployment completed successfully!" 