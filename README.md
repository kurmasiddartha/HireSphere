# 🌐 HireSphere — Job Portal

A full-stack **MERN** job portal that connects job seekers with recruiters. Students can browse and apply to jobs, while recruiters can post openings, manage companies, and review applications — all in one place.

---

## 🚀 Tech Stack

### Backend
| Layer | Technology |
|-------|-----------|
| Runtime | Node.js |
| Framework | Express.js v5 |
| Database | MongoDB + Mongoose |
| Auth | JWT + bcryptjs |
| File Uploads | Multer |
| Environment | dotenv |

### Frontend
| Layer | Technology |
|-------|-----------|
| Framework | React 19 + Vite 8 |
| Styling | Tailwind CSS v4 |
| UI Components | shadcn/ui |
| State Management | Redux Toolkit |
| HTTP Client | Axios |
| Routing | React Router DOM v7 |
| Notifications | Sonner |

---

## 📁 Project Structure

```
JOB PORTAL/
├── backend/
│   ├── controllers/          # Business logic handlers
│   │   ├── user.controller.js
│   │   ├── company.controller.js
│   │   ├── job.controller.js
│   │   └── application.controller.js
│   ├── models/               # Mongoose schemas
│   │   ├── user.model.js
│   │   ├── company.model.js
│   │   ├── job.model.js
│   │   └── application.model.js
│   ├── routes/               # Express route definitions
│   │   ├── user.route.js
│   │   ├── company.route.js
│   │   ├── job.route.js
│   │   └── application.route.js
│   ├── middlewares/          # Auth & file upload middleware
│   ├── utils/                # Helper utilities
│   ├── index.js              # App entry point
│   └── .env                  # Environment variables (not committed)
│
└── frontend/
    ├── src/
    │   ├── components/       # Reusable UI components
    │   ├── redux/            # Redux store & slices
    │   ├── utils/            # Constants & helpers
    │   └── main.jsx          # React entry point
    ├── public/
    └── vite.config.js
```

---

## ✨ Features

### 👤 Job Seekers
- Register & log in securely
- Browse and search all available jobs
- View detailed job descriptions
- Apply to jobs with a resume
- Track application status

### 🏢 Recruiters
- Register as a recruiter
- Create and manage company profiles
- Post new job listings
- View all applicants for each job
- Update application statuses (Accepted / Rejected)

---

## ⚙️ Getting Started

### Prerequisites
- **Node.js** v18+
- **MongoDB** (local or [MongoDB Atlas](https://www.mongodb.com/atlas))
- **npm**

---

### 1. Clone the Repository

```bash
git clone https://github.com/kurmasiddartha/HireSphere.git
cd HireSphere
```

---

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend/` directory:

```env
PORT=8000
MONGO_URI=your_mongodb_connection_string
SECRET_KEY=your_jwt_secret_key
CLOUD_NAME=your_cloudinary_cloud_name
API_KEY=your_cloudinary_api_key
API_SECRET=your_cloudinary_api_secret
```

Start the development server:

```bash
npm run dev
```

The API will be running at `http://localhost:8000`.

---

### 3. Frontend Setup

```bash
cd ../frontend
npm install
npm run dev
```

The React app will be running at `http://localhost:5173`.

---

## 🔌 API Endpoints

### Auth / User — `/api/v1/user`
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/register` | Register a new user |
| POST | `/login` | Login and receive JWT |
| GET | `/logout` | Logout (clear cookie) |
| PUT | `/profile/update` | Update user profile |

### Company — `/api/v1/company`
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/register` | Register a new company |
| GET | `/get` | Get all companies (recruiter) |
| GET | `/get/:id` | Get company by ID |
| PUT | `/update/:id` | Update company details |

### Jobs — `/api/v1/job`
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/post` | Post a new job (recruiter) |
| GET | `/get` | Get all jobs (with filters) |
| GET | `/getadminjobs` | Get jobs by recruiter |
| GET | `/get/:id` | Get job by ID |

### Applications — `/api/v1/application`
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/apply/:id` | Apply to a job |
| GET | `/get` | Get user's applications |
| GET | `/getapplicants/:id` | Get applicants for a job |
| POST | `/status/:id/update` | Update application status |

---

## 🔐 Environment Variables

| Variable | Description |
|----------|-------------|
| `PORT` | Port for the Express server |
| `MONGO_URI` | MongoDB connection string |
| `SECRET_KEY` | JWT signing secret |
| `CLOUD_NAME` | Cloudinary cloud name (for file uploads) |
| `API_KEY` | Cloudinary API key |
| `API_SECRET` | Cloudinary API secret |

> ⚠️ Never commit your `.env` file. It is already listed in `.gitignore`.

---

## 🛡️ Security Highlights

- Passwords hashed with **bcryptjs**
- Authentication via **HTTP-only JWT cookies**
- Protected routes enforced via `isAuthenticated` middleware
- Role-based access control (`student` vs `recruiter`)
- CORS configured to allow only the frontend origin

---

## 📜 License

This project is licensed under the **ISC License**.

---

## 👨‍💻 Author

**Kurma Siddartha**  
GitHub: [@kurmasiddartha](https://github.com/kurmasiddartha)
