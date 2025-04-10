#!/bin/bash

# Run development environment for Devesh Sharma Portfolio

# Load environment variables
if [ -f .env ]; then
  export $(cat .env | grep -v '#' | awk '/=/ {print $1}')
fi

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
  echo "Installing dependencies..."
  npm install
fi

# Create data directory if it doesn't exist
if [ ! -d "data" ]; then
  echo "Creating data directory..."
  mkdir -p data
fi

# Generate Prisma client
echo "Generating Prisma client..."
npm run prisma:generate

# Check if database needs seeding
if [ ! -f "data/projects.json" ] || [ ! -s "data/projects.json" ] || [ "$(cat data/projects.json)" == "[]" ]; then
  echo "Database is empty. Seeding data..."
  npm run prisma:seed
else
  read -p "Database already has data. Do you want to reseed? (y/n) " -n 1 -r
  echo
  if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "Reseeding database..."
    npm run prisma:seed
  fi
fi

# Start the development server
echo "Starting development server..."
npm run dev:full

# To stop the server, press Ctrl+C 