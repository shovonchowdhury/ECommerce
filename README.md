# ECommerce Full Stack Web Application

This is a full-stack eCommerce web application built using Node.js, Express.js, MongoDB, React.js, and Tailwind CSS. The project has two separate views: **Normal User View (Shopping View)** and **Admin View**.

## Live Demo

Check out the live project here: [ECommerce Web Application](https://ecommerce-client-3.onrender.com)

## Features

### Shopping View (User View)

- **User Registration & Login**: Users can create an account and log in to access the shopping portal.
- **Browse Products**: Users can browse products by category and brand.
- **Product Details**: Users can view detailed information about each product, including price, brand, rating, and user reviews.
- **Add to Cart**: Users can add products to their cart and place orders.
- **Checkout with PayPal**: Secure payments are handled using PayPal integration.

### Admin View

- **Admin Login**: Admin can log in using predefined credentials (Email: `shovonssc89@gmail.com`, Password: `12345`).
- **Manage Products**: Admin can add new products, edit existing product details, and remove products.
- **Order Tracking**: Admin can track individual orders and update order statuses.

## Technologies Used

### Frontend

- **React.js**: JavaScript library for building user interfaces.
- **Redux**: State management using `@reduxjs/toolkit` and `redux-persist`.
- **Radix-UI**: For building accessible UI components.
- **Tailwind CSS**: For responsive and utility-first styling.
- **Axios**: For making HTTP requests to the backend.

### Backend

- **Node.js**: JavaScript runtime environment.
- **Express.js**: Backend framework for building APIs.
- **MongoDB**: NoSQL database for storing product, user, and order information.
- **Cloudinary**: Used to store and retrieve product images.
- **PayPal REST SDK**: For handling secure payments.
- **Authentication**: Admin and user authentication with `jsonwebtoken` and password hashing using `bcryptjs`.
- **CORS**: To handle cross-origin requests.

## Installation

### Prerequisites

To run this project locally, ensure you have the following installed on your machine:

- **Node.js**: Version 14 or above
- **MongoDB**: Locally or via a service like MongoDB Atlas
- **Cloudinary Account**: For managing images
- **PayPal Developer Account**: For handling payments

### Clone the Repository

```bash
git clone https://github.com/yourusername/ecommerce-app.git
cd ecommerce-app
```
