# 🛒 Product Discovery with AI Assist

> A mini full-stack product discovery app with **natural-language search** powered by OpenAI. Browse products by category or ask in plain English (e.g. *"budget laptops"*, *"gaming accessories"*).

**Assessment:** Full-Stack Development (AI/LLM Integration) · **Time spent (optional):** e.g. ~3 hours

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Prerequisites](#-prerequisites)
- [Quick Start](#-quick-start)
- [Step-by-Step Setup](#-step-by-step-setup)
- [Environment Variables](#-environment-variables)
- [Project Structure](#-project-structure)
- [API Reference](#-api-reference)
- [How to Use](#-how-to-use)
- [Evaluator Checklist](#-evaluator-checklist)

---

## 📌 Overview

- **Backend:** Node.js + Express — product catalog (18 products), REST API, OpenAI integration for natural-language queries.
- **Frontend:** React + Vite — product grid (4 cards per row), search bar with Ask button, category filter, loading & error states.
- **AI:** Single “ask” flow: user types a query → backend calls OpenAI with product context → returns matching product IDs + short summary → frontend displays results.

No database; mock data only. API key from environment; **no secrets in code.**

---

## ✨ Features

| Area | What it does |
|------|----------------|
| **Product list** | GET all products or filter by category (Laptops, Accessories, Storage). |
| **Natural-language search** | Type e.g. *"Show me budget laptops"* or *"gaming"* → AI returns matching products + summary. |
| **Category filter** | Dropdown on the right; filters the product list. |
| **Show all products** | After a search, one click to clear results and see the full list again. |
| **Error handling** | Clear messages for invalid key, rate limit, or backend down. |

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|-------------|
| Backend | Node.js, Express, CORS, dotenv, OpenAI SDK |
| Frontend | React 18, Vite |
| AI | OpenAI API (gpt-4o-mini or gpt-3.5-turbo) |

---

## 📦 Prerequisites

- **Node.js** (v16 or higher)
- **npm**
- **OpenAI API key** ([create one here](https://platform.openai.com/api-keys)) — required for the “Ask” feature

---

## 🚀 Quick Start

```bash
# 1. Backend
cd backend && npm install && cp .env.example .env
# Edit .env and add: OPENAI_API_KEY=sk-your-key-here
npm start

# 2. Frontend (new terminal)
cd frontend && npm install && npm run dev
```

- Backend: **http://localhost:5001**  
- Frontend: **http://localhost:3000**  

Open the frontend URL and try **Ask about products** (e.g. *"budget laptops"*).

---

## 📖 Step-by-Step Setup

### Step 1: Clone and open the project

```bash
git clone <repository-url>
cd ai-product-discovery
```

### Step 2: Backend setup

1. Go to the backend folder and install dependencies:

   ```bash
   cd backend
   npm install
   ```

2. Create your environment file:

   ```bash
   cp .env.example .env
   ```

3. Open `backend/.env` and set your OpenAI API key:

   ```env
   PORT=5001
   OPENAI_API_KEY=sk-your-actual-openai-key-here
   ```

   ⚠️ **Do not commit `.env`** — it is in `.gitignore`.

4. Start the backend server:

   ```bash
   npm start
   ```

   You should see: `Backend running on http://localhost:5001`

### Step 3: Frontend setup

1. Open a **new terminal** and go to the frontend folder:

   ```bash
   cd frontend
   npm install
   ```

2. Start the frontend dev server:

   ```bash
   npm run dev
   ```

   You should see the local URL (e.g. **http://localhost:3000**).

### Step 4: Verify

- Keep **both** backend and frontend running.
- Open **http://localhost:3000** in your browser.
- You should see the Product Discovery page with a list of products, search bar (left), and category dropdown (right).

---

## 🔐 Environment Variables

All configuration is via environment variables. **No API keys or secrets are hardcoded.**

| Variable | Where | Required | Description |
|----------|--------|----------|-------------|
| `OPENAI_API_KEY` | `backend/.env` or Render backend | Yes (for Ask feature) | Your OpenAI API key. Never commit this. |
| `PORT` | `backend/.env` | No | Backend port. Default: `5001`. |
| `OPENAI_MODEL` | `backend/.env` | No | Model name. Default: `gpt-4o-mini`. Use `gpt-3.5-turbo` if needed. |
| `VITE_API_URL` | Frontend (Render env or `.env`) | Yes when frontend & backend are on different domains | Full backend API base URL (e.g. `https://your-backend.onrender.com/api`). Not needed for local dev (Vite proxy uses `/api`). |

**Example `backend/.env`:**

```env
PORT=5001
OPENAI_API_KEY=sk-proj-xxxxxxxxxxxxxxxx
# OPENAI_MODEL=gpt-3.5-turbo
```

---

## 🚀 Deploy on Render (frontend + backend separate)

If the **frontend** and **backend** are deployed as separate Render services, the frontend must call the backend URL, not `/api` on its own domain.

1. **Backend service** (e.g. `https://ai-product-discovery-backend.onrender.com`): set `OPENAI_API_KEY` (and optional `OPENAI_MODEL`) in Environment. No `VITE_*` vars here.
2. **Frontend service** (e.g. `https://ai-product-discovery-fb7q.onrender.com`): in **Environment**, add:
   - **Key:** `VITE_API_URL`
   - **Value:** `https://ai-product-discovery-backend.onrender.com/api` (your backend URL + `/api`, no trailing slash)
3. **Redeploy the frontend** after adding `VITE_API_URL` so the new build picks it up.

Then the frontend will request `https://ai-product-discovery-backend.onrender.com/api/products` and `.../api/ask` instead of `/api/products` on the frontend domain (which returns 404).

---

## 📁 Project Structure

```
ai-product-discovery/
├── backend/
│   ├── index.js          # Express server: GET /api/products, POST /api/ask, OpenAI call
│   ├── products.js       # Mock catalog (18 products: id, name, category, price, description, tags)
│   ├── package.json
│   ├── .env.example      # Template — copy to .env and add OPENAI_API_KEY
│   └── .gitignore
├── frontend/
│   ├── src/
│   │   ├── App.jsx       # Main app: state, useEffect (fetch products), ask form, product grid
│   │   ├── main.jsx
│   │   ├── index.css     # Styles (navbar, search, cards, grid)
│   │   └── components/
│   │       ├── Navbar.jsx
│   │       └── ProductCard.jsx   # Reusable product card (props: product)
│   ├── index.html
│   ├── vite.config.js    # Dev server + proxy /api → http://localhost:5001
│   └── package.json
└── README.md
```

---

## 🔌 API Reference

| Method | Endpoint | Description |
|--------|----------|-------------|
| **GET** | `/api/products` | List all products. |
| **GET** | `/api/products?category=Laptops` | Filter by category (`Laptops`, `Accessories`, `Storage`). |
| **POST** | `/api/ask` | Natural-language search. Body: `{ "query": "user text" }`. |

**POST /api/ask response shape:**

```json
{
  "productIds": ["1", "2"],
  "summary": "Short AI-generated summary for the user.",
  "products": [ { "id", "name", "category", "price", "description", "tags" }, ... ]
}
```

**Error responses:** `400` (bad request), `502` (invalid key / model issue), `503` (service unavailable or rate limit). Response always includes `error`, `productIds`, `summary`, `products` (empty on error).

---

## 🎯 How to Use

1. **Browse products** — The main area shows all products in a 4-card-per-row grid.
2. **Filter by category** — Use the **Category** dropdown (right side) to show only Laptops, Accessories, or Storage.
3. **Search with AI** — Type a question in the search box (e.g. *"Show me budget laptops"*, *"gaming"*) and click **Ask**. You’ll see an AI summary and the matching product cards.
4. **Show all again** — After a search, click **Show all products** to clear the result and see the full list (or filtered by category).

---



**Built for the Full-Stack Development Assessment (AI/LLM Integration).**
