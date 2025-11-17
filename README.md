# CloudOps360 — MERN Stack (Auth + Employee CRUD)

This workspace contains a MERN stack starter application for the CloudOps360 project.
It implements user registration and login (JWT), and a simple Employee CRUD interface.

Important: The app uses MongoDB Atlas. A connection string was provided in the request. You can set it via environment variable `MONGO_URI`.

Structure
- server/ — Express + Mongoose backend
- client/ — React (Vite) frontend

Quick start (two terminals):

1) Server
```bash
cd server
npm install
# copy .env.example to .env and edit if needed
# e.g. set MONGO_URI and JWT_SECRET
npm run dev
```

2) Client
```bash
cd client
npm install
npm run dev
```

API
- POST /api/auth/register — register (name,email,password)
- POST /api/auth/login — login (email,password)
- GET /api/employees — list employees (auth required)
- POST /api/employees — create employee
- GET /api/employees/:id — get employee
- PUT /api/employees/:id — update
- DELETE /api/employees/:id — delete

Notes
- The provided MongoDB Atlas connection string can be used directly in `.env` as `MONGO_URI`.
- This repo purposefully does not include Docker; it's a minimal MERN implementation to be extended with DevOps tools later.

If you want, after verifying this runs locally I will add Puppet/Ansible/Nagios/Terraform wiring in the next step.
