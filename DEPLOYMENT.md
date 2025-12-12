# Local Deployment Guide

## Prerequisites
- Node.js 18+ installed
- MongoDB installed and running
- Git installed

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start MongoDB
```bash
# macOS with Homebrew
brew services start mongodb-community

# Ubuntu/Debian
sudo systemctl start mongod

# Windows
net start MongoDB

# Or use MongoDB Compass/Atlas cloud
```

### 3. Environment Setup
The `.env` file is already configured for local development:
- Frontend: http://localhost:3000
- Backend: http://localhost:5000
- MongoDB: mongodb://localhost:27017/finonest

### 4. Start Development Servers

#### Option A: Start Both (Recommended)
```bash
npm run dev
```

#### Option B: Start Individually
```bash
# Terminal 1 - Frontend
npm run dev:client

# Terminal 2 - Backend
npm run dev:server
```

### 5. Access the Application
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **Admin Dashboard**: http://localhost:3000/admin/dashboard

## Available Pages
- Home: http://localhost:3000
- Products: http://localhost:3000/products
- Car Valuation: http://localhost:3000/products/car-valuation
- FinoBiz Courses: http://localhost:3000/products/finobiz
- Personal Loans: http://localhost:3000/products/personal-loans
- Admin Dashboard: http://localhost:3000/admin/dashboard

## API Endpoints
- Health Check: http://localhost:5000/api/health
- Products: http://localhost:5000/api/products
- Auth: http://localhost:5000/api/auth

## Troubleshooting

### MongoDB Connection Issues
```bash
# Check if MongoDB is running
brew services list | grep mongodb
# or
sudo systemctl status mongod
```

### Port Already in Use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Kill process on port 5000
lsof -ti:5000 | xargs kill -9
```

### Dependencies Issues
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

## Development Features
- Hot reload for frontend changes
- Auto-restart for backend changes
- TypeScript compilation
- ESLint and Prettier configured
- Tailwind CSS with hot reload