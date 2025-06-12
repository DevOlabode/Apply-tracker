# 📋 ApplyTracker – Job Application Tracker

ApplyTracker is a simple yet powerful full-stack CRUD web app that helps job seekers keep track of every job application they submit. Built with **MongoDB, Express.js, and EJS**, this tool lets users record applications, update their status, and store interview dates and notes.

---

## 🚀 Features

- ✅ Add new job applications
- 🔍 View all submitted applications
- ✏️ Edit application status, notes, and dates
- ❌ Delete applications
- 📅 Track interview dates and application timelines
- 🗂️ Status categories: `Applied`, `Interviewing`, `Rejected`, `Offer`, `Hired`

---

## 🏗️ Tech Stack

- **Backend**: Node.js, Express
- **Database**: MongoDB with Mongoose
- **Frontend**: EJS templating engine
- **Other Tools**: Method-override for PUT/DELETE support

---

## 📁 Folder Structure

```
job-tracker/
├── models/
│   └── apply.js
├── views/
│   └── applications/
│       ├── index.ejs
│       ├── new.ejs
│       ├── edit.ejs
│       └── details.ejs
├── routes/
│   └── (optional if abstracting routes)
├── seed.js
├── index.js
├── package.json
```

---

## 🧠 Data Model (Mongoose Schema)

```js
const applicationSchema = new mongoose.Schema({
  company: String,
  position: String,
  status: {
    type: String,
    enum: ['applied', 'interviewing', 'rejected', 'offer', 'hired'],
    default: 'applied'
  },
  appliedDate: String,
  interviewDate: String,
  notes: String
});
```

---

## 📦 Setup Instructions

1. **Clone this repository**
   ```bash
   git clone https://github.com/yourusername/job-tracker.git
   cd job-tracker
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start MongoDB**
   Make sure MongoDB is running locally (default URL is `mongodb://127.0.0.1:27017/application`).

4. **(Optional) Seed the Database**
   ```bash
   node seed.js
   ```

5. **Start the Server**
   ```bash
   node index.js
   ```

6. **Visit App**
   Open your browser at: [http://localhost:5000/application](http://localhost:5000/application)

---

## ✨ Future Improvements

- 🔐 Add user authentication for personalized tracking
- 📊 Add filters/sorting (e.g. by status or date)
- 💬 Add contact person info or links to job posts
- 📱 Make UI more responsive with TailwindCSS or Bootstrap

---

## 🧑‍💻 Author

**Samuel Olabode**

> Built with 💙 using the MERN stack (minus React!)

---

## 📄 License

This project is open-source and free to use under the [MIT License](LICENSE).
