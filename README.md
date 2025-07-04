# 🧠 BusinessIQ – Mini Local Business Dashboard [Live Link](https://business-iq.vercel.app)

A sleek, responsive dashboard that simulates how small businesses can visualize their SEO performance and Google-like business insights.

---

## 🚀 Live Demo

- **Frontend**: [https://business-iq.vercel.app](https://business-iq.vercel.app)
- **Backend**: [https://businessiq-backend.onrender.com](https://businessiq-backend.onrender.com)

---

## 🎯Screen Recording


https://github.com/user-attachments/assets/d2573a48-2087-4cde-954c-352f59a8521c


---

## 🛠️ Tech Stack

### Frontend:
- React (Vite)
- Tailwind CSS
- React Context (for State Management)

### Backend:
- Node.js
- Express
- CORS

---

## 📦 Features

### 🔹 Input Form
- Business Name (`text`)
- Location (`text`)
- Submit to generate data

### 🔹 Display Card
- Simulated Google Rating (e.g., ⭐ 4.3)
- Number of Reviews (e.g., 127)
- AI-generated SEO Headline
- **Regenerate SEO Headline** button

---

## 🌐 API Endpoints

### `POST /business-data`

**Request Body:**
```json
{
  "name": "Cake & Co",
  "location": "Mumbai"
}
```
**Response Body:**
```json
{
  "rating": 4.3,
  "reviews": 127,
  "headline": "Why Cake & Co is Mumbai's Sweetest Spot in 2025"
}
```
### `GET /regenerate-headline?name=...&location=...`
**Response Body:**
```json
{
  "headline": "The Secret to Cake & Co's Popularity in Mumbai"
}
```

## 🧪 How It Works

1. Users enter the **business name** and **location**.
2. Frontend sends a `POST` request to the backend's `/business-data` endpoint.
3. Backend responds with:
   - Simulated rating (between 3.5 – 4.8)
   - Number of reviews (between 50 – 550)
   - Random SEO headline from a hardcoded list
4. Clicking **"Regenerate SEO Headline"** triggers a `GET` request to `/regenerate-headline` which returns a new headline only.

---

## 📋 Project Structure

```bash
📁 backend/
│   ├── app.js
│   ├── .env
│   └── package.json
📁 frontend/
│   ├── src/
│   │   ├── components/
│   │   |   ├── BusinessCard.jsx
│   │   |   ├── BusinessForm.jsx
│   │   |   ├── EmptyState.jsx
│   │   |   ├── ErrorMessage.jsx
│   │   |   ├── Header.jsx
│   │   |   ├── LoadingSpinner.jsx
│   │   ├── context/
│   │   |   ├── BusinessContext.jsx
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── index.html
│   └── tailwind.config.js
```

---

## ✅ Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/businessiq.git
cd businessiq
```
### 2. Backend Setup
```bash
cd server
npm install

# Create a .env file in the server root folder and add:
# FRONTEND_URL = http://localhost:5173/ || https://business-iq.vercel.app/

npm run dev
```
### 3. Frontend Setup
```bash
cd client
npm install

# Create a .env file in the client root folder and add:
# VITE_BASE_URL = http://localhost:5000/ || https://businessiq-backend.onrender.com/

npm run dev
```
---

## ✨Features
  ✅ Fully responsive design
  
  ✅ Mobile-friendly UI
  
  ✅ Loading spinners during data fetch
  
  ✅ Basic form validation


## Contact

For any inquiries, please reach out to:

- **Name:** Manideep Chopperla
- **Email:** [manideepchopperla1808@gmail.com](mailto:manideepchopperla1808@gmail.com)
- **GitHub:** [Manideepchopperla](https://github.com/Manideepchopperla)



