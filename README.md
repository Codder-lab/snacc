
# Snacc: Food Delivery App 🍔🍕🥗

Snacc is a full-stack MERN (MongoDB, Express.js, React, Node.js) application designed to provide a seamless food delivery experience for users. It allows customers to browse menus, place orders, and track deliveries, while restaurants can manage their orders and menus efficiently.


## Features

- **User Authentication:** Sign up and log in functionality for customers and restaurants.
- **Order Food:** Add items to the cart, place orders, and pay securely.
- **Track Orders:** Real-time tracking of the order status.
- **Admin Panel:** Manage orders, update menus, and view order history.


## Tech Stack

**Frontend:** React

**Backend:** Node.js, Express.js

**Database:** MongoDB

**Authentication:** JWT (JSON Web Tokens)

**Payment Gateway:** Integration with Stripe


## Installation

To run this project locally, follow these steps:

### Prerequisites

- Node.js (version 14.x or higher)
- MongoDB (local or cloud instance)
- Git

### Setup Instructions
 1. **Clone the repository**
 ```bash
 git clone https://github.com/Codder-lab/snacc.git
 cd snacc
 ```

 2. **Install dependencies for backend, frontend and admin:**
 ```bash
 cd backend
npm install

cd ../frontend
npm install

cd ../admin
npm install
```

3. **Set up environment variables:**
```makefile
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
```

4. **Run the development server:**
- **Backend:**
```bash
cd backend
npm run server
```

- **Frontend:**
```bash
cd frontend
npm run dev
```

- **Admin:**
```bash
cd admin
npm run dev
```

The app will run on http://localhost:5174 (frontend), http://localhost:4000 (backend) and http://localhost:5173 (admin).
## Usage

- **Customer:** Sign up, browse food items, add items to the cart, place orders & make payment, and track the delivery status.

- **Admin:** Log in to the admin panel, manage orders, and update menus.


## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


## Contact

For any inquiries or suggestions, please reach out to:
- **Name:** Suyash Potdar
- **Email:** <suyashpotda03@gmail.com>
- **Github:** <https://github.com/Codder-lab>