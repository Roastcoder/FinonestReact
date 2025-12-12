# Finonest - Complete MERN Financial Services Platform

A comprehensive financial services platform built with Next.js, Express.js, MongoDB, and TypeScript.

## Features

### Frontend (Next.js)
- 🏠 Modern responsive design with Tailwind CSS
- 🎯 Individual product pages that open in new tabs
- 🚗 Car Valuation tool with instant calculations
- 📱 Mobile-first responsive design
- ⚡ Fast loading with optimized performance
- 🎨 Beautiful animations with Framer Motion

### Backend (Express.js + MongoDB)
- 🔐 JWT-based authentication
- 👥 Role-based access control (Customer, Employee, Manager, Admin)
- 📊 RESTful API design
- 🛡️ Security middleware (Helmet, CORS, Rate Limiting)
- 📝 Application management system
- 🏪 Product management

### Products Available
1. **Car Valuation** - Instant AI-powered car value assessment
2. **Personal Loans** - Quick personal financing
3. **Home Loans** - Dream home financing
4. **Business Loans** - Business growth capital
5. **Credit Cards** - Premium rewards and benefits
6. **Vehicle Loans** - Car and bike financing
7. **Education Loans** - Study financing for India & abroad

### Admin Panel Features
- 📈 Dashboard with real-time statistics
- 👤 User management
- 🏷️ Product management
- 📋 Application review and approval
- 📊 Analytics and reporting

## Tech Stack

### Frontend
- **Next.js 16** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Radix UI** - Component library
- **Lucide React** - Icons

### Backend
- **Express.js** - Node.js framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **Helmet** - Security headers
- **CORS** - Cross-origin requests

## Setup Instructions

### Prerequisites
- Node.js 18+ installed
- MongoDB installed and running
- Git installed

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd finonest-website-build-6
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   ```bash
   cp .env.example .env
   ```
   
   Update the `.env` file with your configuration:
   ```env
   NODE_ENV=development
   PORT=5000
   CLIENT_URL=http://localhost:3000
   MONGODB_URI=mongodb://localhost:27017/finonest
   JWT_SECRET=your_jwt_secret_key_here
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_email_password
   ```

4. **Start MongoDB**
   ```bash
   # On macOS with Homebrew
   brew services start mongodb-community
   
   # On Ubuntu/Debian
   sudo systemctl start mongod
   
   # On Windows
   net start MongoDB
   ```

5. **Build the backend**
   ```bash
   npm run build:server
   ```

6. **Start the development servers**
   ```bash
   # Start both frontend and backend
   npm run dev
   
   # Or start individually
   npm run dev:client  # Frontend only (port 3000)
   npm run dev:server  # Backend only (port 5000)
   ```

### Production Deployment

1. **Build the application**
   ```bash
   npm run build
   npm run build:server
   ```

2. **Start production servers**
   ```bash
   npm start  # Frontend
   npm run server  # Backend
   ```

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/me` - Get current user

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product by ID
- `POST /api/products` - Create product (Admin only)
- `PUT /api/products/:id` - Update product (Admin only)
- `DELETE /api/products/:id` - Delete product (Admin only)

### Applications
- `POST /api/users/applications` - Submit application
- `GET /api/users/applications` - Get user applications
- `GET /api/admin/applications` - Get all applications (Admin/Manager/Employee)
- `PUT /api/admin/applications/:id/status` - Update application status

### Admin
- `GET /api/admin/stats` - Dashboard statistics
- `GET /api/admin/users` - Get all users
- `PUT /api/admin/users/:id/role` - Update user role

## Project Structure

```
finonest-website-build-6/
├── app/                          # Next.js app directory
│   ├── (auth)/                   # Authentication pages
│   ├── admin/                    # Admin pages
│   │   └── dashboard/            # Admin dashboard
│   ├── products/                 # Product pages
│   │   ├── car-valuation/        # Car valuation tool
│   │   ├── personal-loans/       # Personal loans page
│   │   ├── home-loans/           # Home loans page
│   │   ├── business-loans/       # Business loans page
│   │   ├── credit-cards/         # Credit cards page
│   │   ├── vehicle-loans/        # Vehicle loans page
│   │   └── education-loans/      # Education loans page
│   └── dashboard/                # User dashboards
├── components/                   # Reusable components
├── server/                       # Backend server
│   └── src/
│       ├── controllers/          # Route controllers
│       ├── models/              # Database models
│       ├── routes/              # API routes
│       ├── middleware/          # Custom middleware
│       └── config/              # Configuration files
├── public/                      # Static assets
└── styles/                      # Global styles
```

## User Roles

1. **Customer** - Can apply for loans, view applications
2. **Employee** - Can review applications, manage customers
3. **Manager** - Can approve/reject applications, manage team
4. **Admin** - Full system access, user management, product management

## Features in Detail

### Car Valuation Tool
- Instant market-based car valuation
- AI-powered pricing algorithm
- Support for all major car brands
- Factors in age, mileage, condition, and location
- Free unlimited valuations

### Loan Management
- Complete application workflow
- Document upload and management
- EMI calculators for all loan types
- Status tracking and notifications
- Automated eligibility checks

### Admin Dashboard
- Real-time statistics and analytics
- Application management with approval workflow
- User role management
- Product catalog management
- Comprehensive reporting

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support and questions, please contact the development team or create an issue in the repository.