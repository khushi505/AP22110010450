# Project Overview
This project provides a Social Media Analytics Microservice that includes both the backend and frontend components.

The backend is built using Node.js and Express.js, which fetches data from a test social media platform API and provides endpoints for fetching users, posts, and comments.

The frontend is built with React.js and provides a UI to interact with the backend and display analytics and data to the users.


# Key Features 

## Backend

1. Fetch Top Users: Retrieve users with the highest number of posts.
2. Fetch Posts for a User: Get all posts made by a specific user.
3. Fetch Comments for a Post: Get all comments made on a specific post.
4. Bearer Token Authentication: Secure API requests with a Bearer token for authentication.
5. Caching: Implemented caching to reduce unnecessary API calls and improve performance.

## Frontend:
1. Displays the top users, their posts, and comments.
2. Interactive UI with dynamic updates.
3. Makes API calls to the backend to fetch and display data.

# Output

### Backend
![Screenshot 2025-03-20 202503](https://github.com/user-attachments/assets/16b2ab70-6acb-469a-910e-e2e3ab6a7c70)
![Screenshot 2025-03-20 202556](https://github.com/user-attachments/assets/840e0a7f-cbb3-417e-b308-77eb603fa6bd)
![Screenshot 2025-03-20 202630](https://github.com/user-attachments/assets/53e0efc8-71bd-4fb4-9825-678a2b9fc0e7)
![Screenshot 2025-03-20 203556](https://github.com/user-attachments/assets/bf4b3bf5-bfdd-4bb3-971c-9729644f8a8a)

### Frontend 
![WhatsApp Image 2025-03-20 at 8 47 23 PM](https://github.com/user-attachments/assets/3bdaf9fe-8c28-447a-b545-514632621d5c)
![WhatsApp Image 2025-03-20 at 8 47 23 PM (1)](https://github.com/user-attachments/assets/51bd822a-8c65-4dbb-8839-ef4fd94bf239)
![WhatsApp Image 2025-03-20 at 8 47 24 PM](https://github.com/user-attachments/assets/eb6eda16-4e6f-49e2-8bf9-7053941a0459)
![WhatsApp Image 2025-03-20 at 8 47 24 PM (1)](https://github.com/user-attachments/assets/274ee77b-cf57-4a87-a4d2-c0676367e8d4)

# Tech Stack

## Backend:
1. Backend Framework: Node.js with Express.js
2. API Client: Axios
3. Authentication: Bearer Token (JWT)
4. Caching: Node-Cache
5. Environment Variables: dotenv
   
## Frontend:
1. Frontend Framework: React.js
2. State Management: React Hooks
3. UI Styling: Tailwind
4. API Requests: Axios
5. Frontend Build: Vite (for faster development builds)

# Installation

1. Clone the Repository
   `git clone <repository_url>`

2. Install Backend Dependencies
   `cd backend
    npm install`
   
3. Install Frontend Dependencies
   `cd frontend
    npm install`

4. Set Up Environment Variables

   Backend
   `API_TOKEN=api_token_here
    PORT=5000`

5.  Run the Application

  Backend - 
  `cd Backend
  nodemon app.js`
  Frontend -
  `cd Frontend
  npm run dev
`
