# 📝 MERN Stack Note-Taking App

A full-stack **Note-Taking Application** built using the **MERN stack** (MongoDB, Express, React, Node.js).

Create, edit, and delete notes with a clean UI, REST API, and real-world concepts like **rate limiting with Upstash Redis**.

---

## 🔗 Live Demo

👉 **https://mern-thinkboard-5rym.onrender.com**

---

## 🚀 Features

- 🧱 **Full MERN Stack** — MongoDB, Express, React, Node.js
- ✨ **Create, Update & Delete Notes** (Title + Description)
- 🛠️ **Fully Functional REST API**
- ⚙️ **Rate Limiting with Upstash Redis** — real-world production concept
- 🌐 **Covers HTTP Methods, Status Codes, SQL vs NoSQL**
- 💻 **100% Responsive UI**
- 🧪 **Environment Variables & .env Setup**

---

## 🔧 Environment Variables

Create a `.env` file inside the **backend** folder:

```env
MONGO_URI=<your_mongo_uri>
UPSTASH_REDIS_REST_URL=<your_redis_rest_url>
UPSTASH_REDIS_REST_TOKEN=<your_redis_rest_token>
NODE_ENV=development
```

---

## ▶️ Running the Project

### 1️⃣ Run the Backend

```sh
cd backend
npm install
npm run dev
```

### 2️⃣ Run the Frontend

```sh
cd frontend
npm install
npm run dev
```

---

## 🧪 API Overview

- **GET** `/api/notes` — Fetch all notes
- **POST** `/api/notes` — Create a new note
- **PUT** `/api/notes/:id` — Update a note
- **DELETE** `/api/notes/:id` — Delete a note

---

## 📦 Deployment

This project is deployed on **Render**.
