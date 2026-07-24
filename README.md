# 🤖 AI Resume Checker

An AI-powered Resume Checker built with the **MERN Stack** and **Google Gemini AI**. Upload a resume, get an instant ATS score, discover missing keywords and weak areas, let AI rewrite weak bullet points, and track improvement across multiple resume versions.

---

## 🚀 Features

### 🔐 Authentication
- Register & Login
- JWT Authentication with secure httpOnly cookies
- Password encryption using bcrypt
- Protected routes (frontend & backend)

### 📄 Resume Upload
- PDF-only upload with validation
- 5 MB file size limit
- Scanned/non-text PDF detection

### 📑 Resume Parsing
- Text extraction from PDF using `pdf-parse`
- Structured data extraction via Google Gemini AI
- Sections parsed: Personal Info, Experience, Education, Skills, Projects, Certifications

### 📊 ATS Resume Score
AI-generated scoring across:
- Overall ATS Score
- Keyword Score
- Formatting Score
- Impact Score
- Clarity Score

### 💡 AI Suggestions
- Resume strengths
- Resume weaknesses
- Actionable improvement tips

### ✍️ AI Rewrite
AI rewrites weak bullet points to be:
- ATS-friendly
- Action-verb driven
- More readable and impactful

### 🔍 Keyword Analysis
- Keywords present in the resume
- Keywords missing (with frequency-based ranking)

### 📝 Resume Versions
- Every upload and rewrite is saved as a version
- Full version history per resume
- Side-by-side version comparison (diff viewer)

### 📈 Dashboard
- Total resumes, rewrites, analyses & exports
- Latest resume snapshot
- ATS score trend (sparkline charts)
- Recent activity feed (uploads, rewrites, analyses)

### 📊 Insights & Analytics
- Average & best ATS score
- Score trend over time
- Most common resume issues
- Most frequent missing/present keywords
- Per-resume performance breakdown

### 🌙 Theme
- Light Mode
- Dark Mode

---

## 🛠 Tech Stack

**Frontend**
- React.js (Vite)
- Tailwind CSS
- shadcn/ui
- React Router
- Axios

**Backend**
- Node.js
- Express.js
- MongoDB
- Mongoose

**AI**
- Google Gemini AI

**Auth**
- JWT
- bcrypt

**Other**
- Multer (file uploads)
- pdf-parse (PDF text extraction)
- Zod (schema validation)

---

## 📂 Project Structure

```
AI-Resume-Checker
├── backend
│   ├── config
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── services
│   ├── utils
│   └── server.js
│
├── frontend
│   └── src
│       ├── api
│       ├── assets
│       ├── components
│       ├── context
│       ├── hooks
│       ├── lib
│       ├── pages
│       ├── App.jsx
│       ├── main.jsx
│       └── routes.jsx
│
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the repository
```bash
git clone https://github.com/bhaveshpa1234/AI-Resume-Checker.git
cd AI-Resume-Checker
```

### 2. Install backend dependencies
```bash
cd backend
npm install
```

### 3. Install frontend dependencies
```bash
cd frontend
npm install
```

---

## 🔑 Environment Variables

Create a `.env` file inside the `backend` folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
GEMINI_API_KEY=your_gemini_api_key
CLIENT_URL=http://localhost:5173
```

---

## ▶️ Run the Project

**Start Backend**
```bash
cd backend
npm run dev
```
Runs on → `http://localhost:5000`

**Start Frontend**
```bash
cd frontend
npm run dev
```
Runs on → `http://localhost:5173`

---

## 📖 How It Works

1. **Register / Login** — secure JWT-based authentication.
2. **Upload Resume** — PDF is validated and stored.
3. **Text Extraction** — resume text is pulled from the PDF.
4. **AI Analysis** — Gemini AI parses and scores the resume.
5. **ATS Score Generated** — overall + sub-scores calculated.
6. **Strengths & Weaknesses** — AI highlights what's working and what isn't.
7. **AI Rewrite** — weak bullet points are rewritten for impact.
8. **New Version Saved** — every rewrite creates a new resume version.
9. **Compare Versions** — track improvement across versions and analyses.

---

## 📌 API Overview

| Module | Base Route | Description |
|---|---|---|
| Auth | `/api/auth` | Register, login, logout, profile |
| Resumes | `/api/resumes` | Upload, list, analyze, rewrite, diff |
| Dashboard | `/api/dashboard` | Totals, latest resume, score trend, KPIs, activity |
| Insights | `/api/insights` | Average/best score, top issues, keyword frequency |
| Versions | `/api/versions` | Full version history across all resumes |
| History | `/api/history` | Unified activity timeline (uploads, rewrites, analyses) |

---

## 🔮 Future Improvements

- Resume templates
- Job description matching
- Downloadable optimized resume (PDF export)
- Cover letter generator
- Multi-language support
- Interview preparation suggestions

---

## 👨‍💻 Author

**Bhavesh Parmar**
GitHub: [bhaveshpa1234](https://github.com/bhaveshpa1234)

---

## ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub.

Happy Coding! 🚀
