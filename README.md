# ⏱️ 25 + 5 Clock (Pomodoro Timer)

A fully responsive **25 + 5 Pomodoro Clock** built with **React**, **Redux**, **Bootstrap**, and **SASS**, developed for the [freeCodeCamp Front End Libraries Certification](https://www.freecodecamp.org/learn). This timer allows users to manage productivity sessions with precise control over break and session durations.

🔗 **Live Demo**: [https://milda100.github.io/Timer/](https://milda100.github.io/Timer/)  
📂 **GitHub Repo**: [github.com/Milda100/Timer](https://github.com/Milda100/Timer)

---

## 🌿 Branches

This repository contains **two branches**:

- `main` – Original version using **React** for state management.
- `Redux` – Updated version with **Redux Toolkit** for global state management.

> This README describes the **Redux** version. For the original React-only implementation, see the [main branch](https://github.com/Milda100/Timer/tree/main).

---

## 🎯 Features

- Set **Break** and **Session** durations (1–60 minutes)
- Accurate countdown timer in `mm:ss` format
- Play/pause functionality
- Reset button to restore default values
- Automatic switch between session and break modes
- Audible alert using HTML5 `<audio>` when timer hits 00:00
- Fully compliant with all 28 [freeCodeCamp project requirements](#user-stories)

---

## 🛠️ Tech Stack

- ⚛️ React (Vite + JSX)
- 🗂️ Redux Toolkit for state management
- 🎨 SASS for custom styling
- 🎛️ Bootstrap for responsive UI components
- 🔊 HTML5 Audio

---

## 📦 Installation & Setup

To run this project locally:

```bash
# Create a new Vite React project
npm create vite@latest clock -- --template react
cd clock

# Install project dependencies
npm install
npm install @reduxjs/toolkit react-redux
npm install react-bootstrap bootstrap
npm install -g sass

# Start the development server
npm run dev

📌 **Make sure to include the Bootstrap import in your `main.jsx`:**

import 'bootstrap/dist/css/bootstrap.min.css';
```
---

## 🧪 Usage

- Click **Break** or **Session** “↑” and “↓” buttons to adjust the duration.
- Press **Start/Stop** to control the timer.
- When the timer reaches `00:00`, a **beep** plays and the mode automatically switches between session and break.
- Press **Reset** to:
  - Stop the timer
  - Reset break and session durations to default
  - Rewind and stop the sound

---

## ✅ User Stories

This project fulfills all 28 user stories defined by freeCodeCamp:

<details>
  <summary>Click to expand all requirements</summary>

- `#break-label` and `#session-label` are present  
- `#break-decrement`, `#break-increment`, `#session-decrement`, and `#session-increment` buttons exist  
- Default values:
  - `#break-length` = 5  
  - `#session-length` = 25  
- `#timer-label` shows the current mode (Session or Break)  
- Time is displayed in `mm:ss` format via `#time-left`  
- `#start_stop` toggles play/pause  
- `#reset` resets timer, durations, and sound  
- Break and session lengths:
  - Cannot be less than 1
  - Cannot exceed 60  
- Timer updates accurately every second  
- Automatically switches between Session and Break  
- HTML5 audio:
  - `#beep` plays a sound when timer reaches `00:00`
  - Audio rewinds when `#reset` is clicked  

</details>

---

## 📄 License

This project is open source and available under the **MIT License**.
