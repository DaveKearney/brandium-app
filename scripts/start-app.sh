#!/bin/bash

# File: start-app.sh
# Purpose: Start the Brandium app server on port 3000

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if port 3000 is already in use
if lsof -i :3000 > /dev/null; then
  echo -e "${YELLOW}WARNING: Port 3000 is already in use.${NC}"
  echo -e "To fix this, run: ${GREEN}npm run stop:app${NC}"
  exit 1
fi

# Function to check if services are running on other common ports
check_port() {
  local port=$1
  if lsof -i :$port > /dev/null; then
    echo -e "${YELLOW}NOTE: Port $port is in use by another service.${NC}"
    return 0
  fi
  return 1
}

# Check other common ports
check_port 3001
check_port 3002

# Start the Next.js development server
echo -e "${GREEN}Starting Brandium app on port 3000...${NC}"

# Run in background and save PID to file for later stopping
nohup npm run dev > /tmp/brandium-app.log 2>&1 &
echo $! > /Users/davekearney/Documents/GitHub/brandium-app/scripts/app.pid

# Wait a moment for server to start
sleep 2

# Check if server started successfully
if lsof -i :3000 > /dev/null; then
  echo -e "${GREEN}✅ Brandium app is running at http://localhost:3000${NC}"
  echo -e "To stop the server, run: ${YELLOW}npm run stop:app${NC}"
else
  echo -e "${RED}❌ Failed to start Brandium app${NC}"
  echo -e "Check the logs at /tmp/brandium-app.log for details"
  exit 1
fi

# Open the app in the default browser
open http://localhost:3000