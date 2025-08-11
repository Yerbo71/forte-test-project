# 📦 Test Forte Project

**Full-stack веб-приложение** с клиентской частью на **React (Vite)** и серверной частью на **Express.js**.  
Проект полностью контейнеризован с помощью **Docker** для простого развёртывания.

---

## 📂 Структура проекта

```
test-forte-project/
│
├── backend/          # Серверная часть (Node.js + Express.js)
├── frontend/         # Клиентская часть (React + Vite)
├── docker-compose.yml
└── README.md
```

---

## ⚙️ Требования

- [Node.js](https://nodejs.org/) **v18+** (для локальной разработки без Docker)
- [Docker](https://www.docker.com/) и [Docker Compose](https://docs.docker.com/compose/)

---

## 🚀 Запуск через Docker

1. **Клонировать репозиторий**

2. **Создать `.env` файлы** в папках `backend` и `frontend` (если требуются).

3. **Запустить проект**
   ```bash
   docker-compose up --build
   ```

4. Приложение будет доступно:
   - **Frontend:** http://localhost:5173
   - **Backend API:** http://localhost:5001

---

## 🖥 Локальный запуск без Docker

### Backend
```bash
cd backend
npm install
npm run dev
```
Сервер: `http://localhost:5000`

### Frontend
```bash
cd frontend
npm install
npm run dev
```
Клиент: `http://localhost:3000`

---

## 📜 Основные команды

**Frontend**
- `npm run dev` — режим разработки
- `npm run build` — сборка проекта
- `npm run preview` — предпросмотр сборки

**Backend**
- `npm run dev` — запуск с hot-reload
- `npm start` — запуск в продакшн-режиме

---

## 👨‍💻 Автор Zhunisov Yerbolat 
**Стек:** React + Vite, Express.js, Docker.

##ScreenShots
1. **Main Page**
<img width="1465" height="803" alt="image" src="https://github.com/user-attachments/assets/440cc596-bbf2-4ee9-9c79-e20ea97fd84b" />

2. **Form Page**
<img width="973" height="404" alt="image" src="https://github.com/user-attachments/assets/435c49c6-ae6a-4937-8a41-87a2f5942146" />
