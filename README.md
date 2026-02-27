# 🤖 AI Product Discovery

An AI-powered product search application that allows users to discover products using natural language queries.

🌐 **Live Demo:**  https://ai-product-1.onrender.com
🛠 **Backend API:** https://ai-product-3l6p.onrender.com

---

## 🚀 Features

- 🔍 AI-based product search
- 🧠 Smart product recommendations
- 📂 Category filter
- ⚡ Fast and responsive UI
- ⏳ Loading & error handling
- 📱 Mobile responsive design

---

## 🏗 Tech Stack

### Frontend
- React (Vite)
- Axios
- CSS

### Backend
- Node.js
- Express.js
- OpenAI API
- CORS
- dotenv

### Deployment
- Frontend → Vercel
- Backend → Render

---

## 📁 Project Structure

ai-product/
├── backend/
│   ├── config/
│   │   └── openai.js          # OpenAI client/config
│   ├── controllers/
│   │   ├── productController.js   # Handlers for product routes
│   │   └── aiController.js        # Handler for AI ask route
│   ├── routes/
│   │   ├── productRoutes.js   # /api/products routes
│   │   └── aiRoutes.js        # /api/ask route
│   ├── products.js            # Static/mock product data
│   ├── index.js
# Express app entry point
│   ├── .env
│   ├── .env.example
│   ├── package.json
│   └── README.md
│
├── frontend/
│   ├── src/
│   │   ├── api.js             # Axios config and API helper functions
│   │   ├── assets/            # Images/icons (if any)
│   │   ├── components/
│   │   │   ├── ProductCard.jsx   # Product display card
│   │   │   ├── CategoryFilter.jsx# Category dropdown
│   │   │   └── AskAI.jsx         # Ask box / AI search UI
│   │   ├── Home.jsx           # Main page layout
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── .env
│   ├── .env.example
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
├── README.md
└── package.json (optional root for concurrent run)



---

## ⚙️ Environment Variables

### 🔹 Backend (.env)

```env
PORT=5000
OPENAI_API_KEY=your_openai_api_key

🔹 Frontend (.env)
VITE_API_BASE_URL=https://ai-product-1.onrender.com/api

Run Locally
1️⃣ Clone the repo
git clone https://github.com/sandeepMasai/ai-product.git

2️⃣ Backend setup
cd backend
npm install
npm run dev

3️⃣ Frontend setup
cd frontend
npm install
npm run dev


## Get all products
GET /api/products
Get products by category
GET /api/products?category=Laptops

## AI product search
POST /api/ask
Request body:
{
  "query": "best SSD under 9000"
}


🌍 Deployment Notes (Render)
You are using:
Frontend: https://ai-product-1.onrender.com
Backend: https://ai-product-3l6p.onrender.com
Make sure:
Backend has CORS configured to allow the frontend origin:
https://ai-product-1.onrender.com
Frontend has VITE_API_BASE_URL set in Render environment:
https://ai-product-3l6p.onrender.com/api
Frontend service build settings:
Build command: npm install && npm run build
Publish directory: dist
Then redeploy frontend so API calls hit the correct backend.
