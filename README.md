# NGO Monthly Report Dashboard

A web application that allows an **admin** to view and analyze monthly reports submitted by NGOs.  
The admin can select a **month & year** to fetch reports from the backend and see summarized data such as:

- ✅ Total NGOs reporting  
- ✅ Total people helped  
- ✅ Total events conducted  
- ✅ Total funds utilized  

The app provides a clean UI with real-time loading states, error handling, and dynamic data rendering.

## 🚀 Features

- 📅 Select month & year to view reports  
- 📊 Aggregated report summary (NGOs, People Helped, Events, Funds)  
- 🔄 Loading spinner & “Fetching data...” feedback during API requests  
- ⚠️ Error messages when API fails  
- 🎨 Styled with **Tailwind CSS** for a modern responsive UI  
- 🌐 Data fetched from backend using **Axios**

---

## 🛠️ Tech Stack

- **Frontend:** React.js, Tailwind CSS  
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (reports stored month-wise)  
- **HTTP Client:** Axios  

---

## ⚙️ Installation & Setup
### 1. Clone the repository
```bash
git clone https://github.com/Amrit-2708/We_do_good_assignment
cd we_do_good_assignment

# For frontend

cd client
npm install

# For backend
cd server
npm install

# Set up MongoDB
MONGO_URI=your_mongodb_connection_string

```

### 2. Run the project
```bash
# Start frontend
cd client
npm run dev

# Start backend
cd server
nodemon index.js
