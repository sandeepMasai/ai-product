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

## 📁 Folder Structure
ai-product
│
├── backend   
│   │   ├── config          #  OpenAI config
│   │   │   └── openai.js
│   │   │
│   │   ├── controllers     # request handlers
│   │   │   ├── productController.js
│   │   │   └── aiController.js
│   │   │
│   │   ├── routes          # all routes
│   │   │   ├── productRoutes.js
│   │   │   └── aiRoutes.js
│   │   │           # static data / mock data
│   │   │   └── products.js
│   │   │
│   │   └── server.js       # entry point
│   │
│   ├── .env
│   ├── .env.example
│   ├── package.json
│   └── README.md
│
├── frontend
│   ├── src            # axios config & API calls
│   │   │   └── api.js
│   │   │
│   │   ├── assets          # images/icons
│   │   │
│   │   ├── components      # reusable UI components
│   │   │   ├── ProductCard.jsx
│   │   │   ├── CategoryFilter.jsx
│   │   │   └── AskAI.jsx
│   │   │   └── Home.jsx
│   │   │
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── .env
│   ├── .env.example
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
├── README.md
└── package.json (optional for concurrent run)


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
