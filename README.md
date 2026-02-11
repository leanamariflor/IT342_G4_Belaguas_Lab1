**IT342_G4_Belaguas_Lab1**

**Project Description**

IT342_G4_Belaguas_Lab1 is a full-stack authentication system developed as part of the IT342 Laboratory Activity.
The project demonstrates how system analysis and design artifacts (ERD, Use Case, Activity, Class, and Sequence Diagrams) are translated into a fully working integrated system across Web and Mobile platforms.

The system provides a complete authentication flow, allowing users to:

Register an account
Log in securely
Access protected pages (Dashboard & Profile)
View current user information
Log out and invalidate the session
The application consists of:


* ReactJS Web Application
* pring Boot REST API Backend
* Android Kotlin Mobile Application
* MySQL Database (XAMPP)

Both Web and Mobile clients connect to the same backend API, ensuring consistent authentication, authorization, and data handling.
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
* JWT (JSON Web Token)

### Mobile Application

* Android Studio
* Kotlin
* Jetpack Compose
* Retrofit
* SharedPreferences (Session Management)

### Database

* MySQL (XAMPP)

### Tools

* IntelliJ IDEA
* Visual Studio Code
* Android Studio
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

* Users can create an account using username, email, and password
* Passwords are encrypted using **BCrypt**
* Duplicate accounts are prevented

### User Login

* Users log in using email and password
* Credentials are validated against the database
* Login state is stored:

  * **Web:** Browser local storage
  * **Mobile:** SharedPreferences

### Dashboard (Protected Page)

* Accessible **only when logged in**
* Displays user session information
* Redirects to login when accessed while logged out (Web & Mobile)

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

* Clears session data:

  * **Web:** localStorage
  * **Mobile:** SharedPreferences
* Redirects user to login
* Prevents access to protected pages after logout

---

## Mobile Application Features (Android Kotlin)

The **Android mobile application** mirrors the functionality of the web application and connects to the same backend API.

Implemented features include:

* **Login Screen**

  * Email and password input
  * API authentication using Retrofit
* **Register Screen**

  * User registration via backend API
* **Dashboard Screen**

  * Protected screen accessible only when logged in
  * Displays account status and role
* **Profile Screen**

  * Displays user profile details
* **Session Management**

  * Login state stored using SharedPreferences
  * Automatic redirect based on login status
* **Navigation**

  * Implemented using Jetpack Compose Navigation
  * Route-based navigation between screens

---

## Security Implementation

* Passwords are encrypted using **BCrypt**
* Protected endpoints require authentication
* `/login` and `/register` are public
* `/me` is protected by Spring Security
* Dashboard and Profile screens are protected in:

  * React (route guarding)
  * Android (session checks before navigation)

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

1. Open terminal inside `/web`
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
3. Configure API base URL in Retrofit:

   ```
   http://10.0.2.2:8080
   ```
4. Run the app using:

   * Android Emulator, or
   * Physical Android device

---
## Environment & Configuration Notes

Backend port: 8080

Web port: 5173

Mobile emulator uses 10.0.2.2 to access localhost

JWT token is stored client-side and sent via Authorization header

Token expires automatically and is removed on logout

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

