# Grocery Shopping Application

This is a full-stack web application that provides a user-friendly interface for shopping for grocery products. It consists of a backend API built with Nest.js and a frontend interface developed with Next.js.

## Front-end Requirements:

### User Interface

- The application offers a user-friendly and responsive user interface to ensure a seamless shopping experience.

### Landing Page

- A simple landing page with a navbar and a body section is provided for easy navigation.

### Display Grocery Products

- All available grocery products are displayed on the body section of the landing page. These product listings are fetched from the server-side using GET requests.

### Search Functionality

- The application implements a search functionality that allows users to filter grocery product items. Users can easily find the products they need by searching for specific keywords.

### Product Details Modal

- When a user clicks on a grocery product's card, a modal window opens, displaying the product's details and other relevant information. This provides users with a detailed view of each product.

### Add to Cart

- Users can add products to their shopping cart with a simple "Add to Cart" button. When clicked, the selected product is added to the user's local storage for easy tracking of their shopping list.

### Deployment

- Backend: <https://qwit-back.onrender.com/api/product/index>.
- Database: Railway.

## Back-end Requirements:

### RESTful API

- The backend implements a RESTful API to handle GET operations for grocery products. It provides endpoints for managing product data.

### Data Storage

- Grocery product data is stored persistently in a database. PostgreSql is used as the database.

### Error Handling

- The backend ensures proper error handling and validation for API requests. It provides meaningful error messages and status codes to enhance the user experience.

### Deployment

- The backend application is deployed to a hosting platform of your choice, such as Heroku, Vercel, or Netlify, to make the API accessible to the frontend and users.

## Getting Started

1. Clone this repository to your local machine.

```bash
git clone https://github.com/RaDiO-AcTiVe8970/Qwikit_Task.git

```

1. (If you want to use localhost for backend otherwise skip because the backend is already hosted.)Go to Backend folder then open a terminal and then type:

```bash
npm i @nestjs/config @nestjs/typeorm typeorm pg

# Then

npm run start
```

- Api Lists for Hosted

- Get All product= <https://qwit-back.onrender.com/api/product/allproducts>
- Get product by ID = <https://qwit-back.onrender.com/api/product/:id>

- Api Lists for Localhost

- Get All product= <http://localhost:3000/api/product/allproducts>
- Get product by ID = <http://localhost:3000/api/product/allproducts>

1. Go to the Frontend folder open a terminal and then type:

```bash
npm install @reduxjs/toolkit axios daisyui flowbite flowbite-react framer-motion next react react-dom react-icons react-redux react-responsive-carousel react-scroll react-transition-group redux-persist

# Then

npm install daisyui

# To run the project in dev mode since "react persist" store.js doesn't have export default function so it doesn't build properly

npm run dev 

```

## Technologies Used

- Frontend: Next.js.
- Backend: Nest.js.
- Database: PostgreSQL.
- Deployment: Vercel, Render, Railway

## Contributors

- MD. Mohituzzaman Bhuiyan