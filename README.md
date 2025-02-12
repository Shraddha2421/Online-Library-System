# Online Library System

## Overview
An online library system built with React, Redux, and React Router. This application allows users to browse, add, and view book details.

## Features
- **Browse Books:** View books by category.
- **Add Book:** Add new books to the library.
- **View Book Details:** See detailed information about each book.
- **Search Books:** Search for books by title or author.
- **Static Data:** Uses a predefined set of books instead of fetching from an API.

## Technologies Used  

- **React**: Used for building reusable and dynamic UI components, ensuring an interactive user experience.  
- **Redux**: Manages global state efficiently, enabling predictable data flow and seamless updates.  
- **React Router**: Provides client-side navigation, allowing smooth transitions between different pages without reloading.  
- **CSS**: Enhances the visual appeal of the application by defining layouts, styles, and animations.  
- **JavaScript**: Implements the core functionality, interactivity, and logic for the application.  

## Project Structure

├── src/
│ ├── components/
│ │ ├── Navbar.jsx
│ ├── pages/
│ │ ├── HomePage.jsx
│ │ ├── BrowseBooksPage.jsx
│ │ ├── AddBookPage.jsx
│ │ ├── BookDetailsPage.jsx
│ │ ├── NotFoundPage.jsx
│ ├── redux/
│ │ ├── booksSlice.js
│ │ ├── store.jsx
│ ├── App.jsx
│ ├── main.jsx
│ ├── index.css
│ ├── Links
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── vite.config.js

## Installation

**1. Clone the repository:**  
   ```sh
   git clone https://github.com/your-username/Online-Library-System.git
   cd Online-Library-System
   ```
**2. Install Dependencies:**
Ensure that you have [Node.js](https://nodejs.org/) installed on your system.   
```sh
npm install
```
**3. Start the Development Server**
Run the app in development mode:
```sh
npm run dev
```
The app will be live at [http://localhost:5173](http://localhost:5173).
