# 📝 Blog Platform Backend (Node.js + Express + MongoDB)

A structured backend application for a blog platform with authentication, blog management, and comment functionality.

This project follows a modular MVC + Service Layer architecture.

---

## 🚀 Features

- User Signup & Signin
- JWT Authentication (Cookie-based)
- Separate Authentication Service
- Password Hashing
- Blog Creation & Retrieval
- Comment System (User & Blog linked)
- Protected Routes via Middleware
- Server-side Rendering (EJS)
- Environment Variable Configuration

---

## 🧰 Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- bcrypt
- EJS
- cookie-parser
- dotenv

---

## 🏗 Architecture Overview

This project follows:

- MVC Pattern (Models, Routes, Controllers)
- Service Layer (Authentication Logic)
- Middleware-based Route Protection

### 🔐 Authentication Service

Located at:

```
services/authentication.js
```

Handles:

- JWT creation
- JWT validation
- Token payload management

---

## 📁 Project Structure

```
.
├── app.js
├── models/
│   ├── user.js
│   ├── blog.js
│   └── comment.js
├── routes/
│   ├── user.js
│   └── blog.js
├── services/
│   └── authentication.js
├── middleware/
├── views/
├── public/
├── .env
├── package.json
└── README.md
```

---

## 🗄 Database Models

### 👤 User
- fullName
- email
- password (hashed)
- profileImageURL
- role

### 📝 Blog
- title
- content
- createdBy (User reference)

### 💬 Comment
- content
- blogId (Blog reference)
- createdBy (User reference)

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Create `.env` File

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
SECRET=your_jwt_secret
```

### 4️⃣ Start Server

```bash
npm start
```

Visit:

```
http://localhost:5000
```

---

## 🔐 Authentication Flow

1. User signs up
2. User logs in
3. JWT is generated using Authentication Service
4. Token stored in cookie
5. Protected routes validate token
6. Logout clears cookie

---

## 📌 User Routes

| Method | Route     | Description |
|--------|----------|-------------|
| GET    | /signin  | Render signin page |
| GET    | /signup  | Render signup page |
| POST   | /signin  | Authenticate user |
| POST   | /signup  | Register new user |
| GET    | /logout  | Logout user |

---

## 🛡 Security Practices

- Password hashing using bcrypt
- JWT-based authentication
- Token verification via service layer
- Environment variables for secrets
- Middleware-based route protection

---

## 📈 Future Improvements

- Refresh Tokens
- Role-based Authorization (Admin/User)
- Input Validation Layer
- Pagination & Filtering
- Deployment to Production

---

## 👨‍💻 Author

Animesh Raj  
Electrical Engineering, IIT Roorkee  

---

⭐ If you found this project helpful, give it a star!
