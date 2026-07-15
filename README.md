# 🤖 AI Resume Checker

An AI-powered Resume Checker built using the **MERN Stack** and **Google Gemini AI**.

Upload your resume in PDF format, get an ATS score, identify weak areas, improve resume bullet points using AI, and save multiple resume versions.

---


---

# 🚀 Features

### 🔐 Authentication
- Register and Login
- JWT Authentication
- Secure httpOnly Cookies
- Password Encryption using bcrypt

### 📄 Resume Upload
- Upload Resume (PDF only)
- Maximum File Size: 5 MB
- PDF Validation

### 📑 Resume Parsing
- Extract text from PDF
- Detect scanned PDFs
- Convert resume into structured data using Gemini AI

Sections extracted:
- Personal Information
- Experience
- Education
- Skills
- Projects
- Certifications

### 📊 ATS Resume Score
AI provides:
- Overall ATS Score
- Keyword Score
- Formatting Score
- Impact Score
- Clarity Score

### 💡 AI Suggestions
- Resume Strengths
- Resume Weaknesses
- Improvement Tips

### ✍️ AI Rewrite
AI improves weak resume bullet points by:
- Making them ATS-friendly
- Adding action verbs
- Improving readability

### 🔍 Keyword Analysis
Shows:
- Existing Keywords
- Missing Keywords

### 📝 Resume Versions
- Save every resume version
- Create new version after AI rewrite
- Compare versions

### 📈 Dashboard
Shows:
- Total Resumes
- Latest Resume
- ATS Score Chart
- Activity Feed

### 📊 Insights
- Average Score
- Best Score
- Score Trend
- Common Issues
- Missing Keywords

### 🌙 Theme
- Light Mode
- Dark Mode

---

# 🛠 Tech Stack

## Frontend

- React.js
- Vite
- Tailwind CSS
- shadcn/ui
- React Router
- Axios

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose

## AI

- Google Gemini AI

## Authentication

- JWT
- bcrypt

## Other Packages

- Multer
- pdf-parse
- Zod

---

# 📂 Project Structure

```
AI-Resume-Checker

├── backend
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── services
│   ├── utils
│   └── server.js
│
├── frontend
│   ├── components
│   ├── pages
│   ├── context
│   ├── api
│   └── App.jsx
│
└── README.md
```

---

# ⚙️ Installation

## 1 Clone Repository

```bash
git clone https://github.com/yourusername/AI-Resume-Checker.git
```

```bash
cd AI-Resume-Checker
```

---

## 2 Install Frontend

```bash
cd frontend
npm install
```

---

## 3 Install Backend

```bash
cd backend
npm install
```

---

# 🔑 Environment Variables

Create a `.env` file inside the backend folder.

```env
PORT=5000

MONGO_URI=your_mongodb_connection

JWT_SECRET=your_secret_key

GEMINI_API_KEY=your_gemini_api_key

CLIENT_URL=http://localhost:5173
```

---

# ▶️ Run Project

## Start Backend

```bash
cd backend
npm run dev
```

Backend runs on

```
http://localhost:5000
```

---

## Start Frontend

```bash
cd frontend
npm run dev
```

Frontend runs on

```
http://localhost:5173
```

---

# 📖 How It Works

### Step 1

Register or Login.

↓

### Step 2

Upload your Resume PDF.

↓

### Step 3

Text is extracted from the PDF.

↓

### Step 4

Gemini AI analyzes the resume.

↓

### Step 5

ATS Score is generated.

↓

### Step 6

AI finds strengths and weaknesses.

↓

### Step 7

AI rewrites weak bullet points.

↓

### Step 8

Save as a new resume version.

↓

### Step 9

Compare different resume versions.

---




---

# 🔮 Future Improvements

- Resume Templates
- Job Description Matching
- Download Improved Resume
- Cover Letter Generator
- Multi-language Support
- Interview Preparation Suggestions

---

# 👨‍💻 Author

**Bhavesh Parmar**

GitHub:
https://github.com/bhaveshpa1234


---

# ⭐ Support

If you like this project, give it a ⭐ on GitHub.

Happy Coding! 🚀
