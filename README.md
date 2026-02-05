
# IT342_G4_Belaguas_Lab1

## Project Description

This project is a **full-stack authentication system** developed as part of the **IT342 Laboratory Activity**.
It demonstrates how system documentation and diagrams (ERD, Use Case, Activity, Class, and Sequence Diagrams) are translated into a **working integrated system**.

The system allows users to:

* Register an account
* Log in securely
* View a protected dashboard
* View their profile information
* Log out securely

The system is composed of:

* **ReactJS Web Application**
* **Spring Boot Backend REST API**
* **Android Kotlin Mobile Application** (structure prepared)
* **MySQL Database (via XAMPP)**

Both the **Web** and **Mobile** applications connect to the **same backend API**.

---

## Technologies Used

### Web Frontend

* ReactJS
* React Router DOM
* Axios
* HTML / CSS

### Backend API

* Spring Boot
* Spring Data JPA
* Spring Security
* BCrypt Password Encoder
* MySQL Connector

### Mobile Application

* Android Studio
* Kotlin


### Database

* MySQL (XAMPP)

### Tools

* IntelliJ IDEA
* Visual Studio Code
* XAMPP
* GitHub

---

## 📂 Project Structure

```
IT342_G4_Belaguas_Lab1
├─ /web        (ReactJS Web Application)
├─ /mobile     (Android Kotlin Mobile Application)
├─ /backend    (Spring Boot Backend API)
├─ /docs       (FRS Documentation PDF)
└─ README.md   (Project documentation)
```

---

## System Features Implemented

### User Registration

* Users can create an account using email and password
* Passwords are encrypted using **BCrypt**
* Duplicate emails are prevented

### User Login

* Users log in using email and password
* Credentials are validated against the database
* Login state is stored in browser local storage

### Dashboard (Protected Page)

* Accessible **only when logged in**
* Redirects to login when accessed while logged out

### Profile Page (Protected Page)

* Displays logged-in user’s:

  * Username
  * Email
  * Role
* Data is retrieved from backend `/me` endpoint

### Get Current User (`/me`)

* Secure backend endpoint
* Accessible only when authenticated
* Returns the current logged-in user

### User Logout

* Clears session data from local storage
* Redirects user to login
* Prevents access via browser back button

---

## Security Implementation

* Passwords are encrypted using **BCrypt**
* Protected endpoints require authentication
* `/login` and `/register` are public
* `/me` is protected by Spring Security
* Dashboard and Profile routes are protected in React

---

## API Endpoints

| Method | Endpoint             | Description                |
| ------ | -------------------- | -------------------------- |
| POST   | `/api/auth/register` | Register a new user        |
| POST   | `/api/auth/login`    | Authenticate user          |
| GET    | `/api/auth/me`       | Get current logged-in user |

---

## How to Run the Backend (Spring Boot)

1. Open **XAMPP**
2. Start **Apache** and **MySQL**
3. Create database:

   ```
   authsystem_db
   ```
4. Open backend project in **IntelliJ IDEA**
5. Update `application.properties` if needed:

   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/authsystem_db
   spring.datasource.username=root
   spring.datasource.password=
   ```
6. Run:

   ```
   AuthsystemApplication.java
   ```
7. Backend runs on:

   ```
   http://localhost:8080
   ```

---

## How to Run the Web App (ReactJS)

1. Open terminal inside `/web` folder
2. Install dependencies:

   ```bash
   npm install
   ```
3. Start the app:

   ```bash
   npm run dev
   ```
4. Open browser:

   ```
   http://localhost:5173
   ```

---

## How to Run the Mobile App (Android Kotlin)

1. Open `/mobile` folder in **Android Studio**
2. Sync Gradle files
3. Configure API base URL:

   ```
   http://10.0.2.2:8080
   ```
4. Run using Android Emulator or physical device

---

## Documentation (FRS)

The `/docs` folder contains **one (1) PDF file** with the updated **Functional Requirements Specification (FRS)** including:

* Entity Relationship Diagram (ERD)
* Use Case Diagram
* Activity Diagram
* Class Diagram
* Sequence Diagram
* UI Screenshots:

  * Register
  * Login
  * Dashboard
  * Profile
  * Logout

---

