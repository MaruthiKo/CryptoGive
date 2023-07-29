# CryptoGive
A web application that enables USDC payments to be made for donations that can have a positive effect, creating a lasting effect with each contribution.


---

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Folder Structure](#folder-structure)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)

## Getting Started

### Prerequisites

- Node.js and npm (Node Package Manager) must be installed on your system.
- MongoDB server must be running locally or remotely.

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/your-username/your-mern-vite-app.git
   ```

2. Move into the project directory:

   ```
   cd your-mern-vite-app
   ```

3. Install backend dependencies:

   ```
   cd backend
   npm install
   ```

4. Install frontend dependencies:

   ```
   cd ../frontend
   npm install
   ```

5. Set up the environment:

   - In the `backend` directory, create a `.env` file and configure your MongoDB connection string and other environment variables as needed.

6. Start the development servers:

   - In the `backend` directory, run:

     ```
     npm start
     ```

   - In the `frontend` directory, run:

     ```
     npm run dev
     ```

   The backend server will run on `http://localhost:5000`, and the frontend development server will run on `http://localhost:3000`.

## Folder Structure

The project follows the following folder structure:

```
- backend/
  - node_modules/
  - config/
    - config.js
    - db.js
  - controllers/
    - authController.js
    - donationController.js
  - models/
    - User.js
    - Donation.js
  - routes/
    - authRoutes.js
    - donationRoutes.js
  - app.js
  - server.js
- frontend/
  - node_modules/
  - public/
    - index.html
    - favicon.ico
  - src/
    - components/
      - Header.js
      - Footer.js
      - Home.js
      - About.js
      - Login.js
      - Signup.js
      - Donation.js
    - pages/
      - HomePage.js
      - AboutPage.js
      - LoginPage.js
      - SignupPage.js
      - DonationPage.js
    - App.js
    - index.js
    - styles.css
  - vite.config.js
  - package.json
  - .gitignore
- package.json
- .gitignore
- tailwind.config.js
```

## Features

- User authentication and authorization.
- Donation functionality with USDC payments integration.
- Home, about, login, signup, and donation pages.
- Responsive design using Tailwind CSS.

## Technologies Used

- MongoDB
- Express.js
- React.js
- Node.js
- Vite
- Tailwind CSS

## Contributing

Contributions are welcome! If you'd like to contribute to the project, please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b your-feature-branch`
3. Make your changes and commit them: `git commit -m "Add your message here"`
4. Push to the branch: `git push origin your-feature-branch`
5. Submit a pull request.

---

Replace your-username and your-mern-vite-app with your GitHub username and project repository name, respectively.

In this README file, we've included instructions on how to set up the project, the folder structure, features, technologies used, and how to contribute. It provides a comprehensive guide for other developers to replicate the project and get started with the MERN stack web application using Vite as the frontend build tool.