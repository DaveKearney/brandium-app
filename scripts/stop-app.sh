#!/bin/bash

# File: stop-app.sh
# Purpose: Stop the Brandium app server running on port 3000

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# First, try to kill by PID if we have it
PID_FILE="/Users/davekearney/Documents/GitHub/brandium-app/scripts/app.pid"

if [ -f "$PID_FILE" ]; then
  PID=$(cat "$PID_FILE")
  echo -e "${YELLOW}Stopping Brandium app with PID $PID...${NC}"
  
  # Kill the process and its children
  pkill -P $PID 2>/dev/null
  kill $PID 2>/dev/null
  
  # Remove PID file
  rm "$PID_FILE"
  
  echo -e "${GREEN}✅ Process stopped${NC}"
else
  echo -e "${YELLOW}No PID file found. Looking for processes on port 3000...${NC}"
fi

# Also look for any processes using port 3000, 3001, or 3002
for PORT in 3000 3001 3002; do
  # Find processes using the port
  PID=$(lsof -ti :$PORT)
  
  if [ ! -z "$PID" ]; then
    echo -e "${YELLOW}Found process $PID using port $PORT. Stopping it...${NC}"
    kill -9 $PID 2>/dev/null
    echo -e "${GREEN}✅ Stopped process on port $PORT${NC}"
  else
    echo -e "No process found using port $PORT"
  fi
done

# Final check
if lsof -i :3000 > /dev/null; then
  echo -e "${RED}❌ Failed to stop all processes on port 3000${NC}"
  echo -e "You may need to manually kill them with:"
  echo -e "  ${YELLOW}kill -9 \$(lsof -ti :3000)${NC}"
  exit 1
else
  echo -e "${GREEN}✅ Brandium app has been stopped successfully${NC}"
  echo -e "To start it again, run: ${YELLOW}npm run start:app${NC}"
fi