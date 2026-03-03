## 🍿 Popcorn+

A production-ready full-stack streaming platform demonstrating secure authentication, scalable API integration, and real-world deployment practices.
Built with React, Node.js, and MongoDB — featuring authentication, dynamic movie rows, and persistent watchlist functionality.

## 🚀 Live Demo

 Frontend: https://watch-popcorn.vercel.app

 Backend API: https://popcorn-iryq.onrender.com

##  Key Features & Technical Highlights

 - Secure Authentication: Implemented JWT-based flows with protected routes and persistent login sessions.

 - Dynamic Content Discovery: Smart fetching of "Trending," "Top Rated," and "Genre-based" rows directly from TMDB.

 - Optimistic Watchlist UI: Users can toggle movies in/out of their watchlist with zero perceived latency; the UI updates instantly while the backend syncs in the background.

 - Intelligent Data De-duplication: Custom logic to ensure movies don't repeat across different category rows, keeping the feed fresh.

 - Responsive "Mobile-First" Design: Fully optimized for everything from ultra-wide monitors to mobile screens using Tailwind’s breakpoint system.

##  Tech Stack

Frontend

- React (Vite)

- Tailwind CSS

- Context API

- React Router

- Lucide Icons

Backend

- Node.js

- Express.js

- MongoDB

- JWT Authentication

- TMDB API Integration

Deployment

- Vercel (Frontend)

- Render (Backend)

##  Architecture Overview

Frontend (React)

        ↓
Express API (Node.js)

        ↓
MongoDB Database

        ↓
TMDB External API

The frontend communicates with the backend REST API.

The backend handles authentication, database operations, and TMDB movie fetching.

## Environment Variables
Frontend (.env)

- VITE_API_URL=your_backend_url

Backend (.env)

- MONGO_URI=your_mongodb_connection_string

- JWT_SECRET=your_secret_key

- TMDB_API_KEY=your_tmdb_api_key


##  Screenshots

| Landing Page | Home Feed | Watchlist |
|--------------|-----------|-----------|
|<img width="2239" height="1218" alt="image" src="https://github.com/user-attachments/assets/3dfa5aee-d48c-4be7-bf81-ed53b9bb0225" /> |<img width="2239" height="1220" alt="image" src="https://github.com/user-attachments/assets/55b9f264-b31a-4b5a-844c-63902c30e2ce" />
 |<img width="2239" height="1216" alt="image" src="https://github.com/user-attachments/assets/a69065a3-f60e-405d-9808-eb855f7a48a9" /> |


##  Key Learning Outcomes

- Production deployment debugging (CORS, environment variables, route prefixes)

- SPA routing configuration on Vercel

- Optimistic UI updates with rollback handling

- Full-stack API integration with external services

- Clean project structuring & environment management

##  Future Improvements

 - Movie Search

 - Genre Filtering UI

 - Toast Notifications

 - Enhanced Loading Skeletons

 - User Profile Section

## 👨‍💻 Author

Built by MOHAMMAD SAUM

Full-stack development practice project focused on production-ready architecture.
