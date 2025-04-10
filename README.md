# Devesh Sharma Portfolio

A modern, interactive portfolio website showcasing Devesh Sharma's skills, experience, and projects as a full-stack web developer.

![Portfolio Preview](public/images/preview.jpg)

## 🌟 Features

- **Interactive UI**: Smooth animations with Framer Motion and GSAP
- **3D Effects**: Three.js-powered background and tilt effects
- **Responsive Design**: Fully responsive for all device sizes
- **Dark/Light Mode**: Seamless theme switching
- **Contact Form**: MongoDB-powered contact form with validation
- **Projects Showcase**: Dynamic project filtering and sorting
- **SSR and SSG**: Next.js-powered performance optimizations
- **API Routes**: Express.js backend for data handling

## 🛠️ Tech Stack

### Frontend
- Next.js 15 with App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Three.js / React Three Fiber
- Framer Motion
- GSAP
- Vanilla Tilt
- React Countup
- React Vertical Timeline

### Backend
- Express.js
- Prisma ORM
- MongoDB
- Axios

## 🚀 Getting Started

### Prerequisites
- Node.js 20+
- MongoDB (local or Atlas)

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/portfolio-devesh.git
cd portfolio-devesh
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
# Create a .env file with your MongoDB connection string
cp .env.example .env
# Then edit the .env file with your actual MongoDB connection string
```

4. Initialize the database
```bash
npm run prisma:generate
npm run prisma:push
npm run prisma:seed # Optional: Seed the database with sample data
```

5. Run the development server
```bash
# Run Next.js frontend only
npm run dev

# Run both frontend and Express backend
npm run dev:full
```

6. Open [http://localhost:3000](http://localhost:3000) to view the site

## 📦 Project Structure

```
/portfolio-devesh
├── /prisma              # Prisma schema and database config
├── /public              # Static assets
│   ├── /images          # Image assets
│   └── /fonts           # Font files
├── /src                 
│   ├── /app             # Next.js app router
│   │   ├── /api         # API routes
│   │   └── /...         # Page routes
│   ├── /components      # React components
│   │   ├── /layout      # Layout components
│   │   ├── /sections    # Page section components
│   │   └── /ui          # Reusable UI components
│   ├── /lib             # Utility functions and data
│   ├── /server          # Express.js backend
│   └── /types           # TypeScript type definitions
└── /...                 # Config files
```

## 🧩 Key Components

- **HeroSection**: 3D particle background with text animation
- **ProjectsSection**: Interactive project cards with tilt effect
- **ExperienceSection**: Timeline-based experience display
- **SkillsSection**: Animated skill categories
- **ContactSection**: Form with validation and API integration

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [Three.js](https://threejs.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vercel](https://vercel.com/)

---

Created with ❤️ by Devesh Sharma
# devesh_portfolio
