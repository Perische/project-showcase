# React Project Showcase Application

## Overview

The **React Project Showcase Application** is a modern Single Page Application (SPA) designed to showcase personal or agency projects in an interactive and responsive portfolio format.

The application allows users to explore completed projects, search through available projects, add new projects dynamically, and view detailed information about individual projects. It was built using modern React development practices, including reusable components, state management, props, event handling, and client-side routing.

This project was developed as part of a final React assessment to demonstrate the ability to build scalable, maintainable, and interactive frontend applications.

---

# Features

## Project Landing Page

* Displays a collection of portfolio projects.
* Uses reusable project card components.
* Shows important project information including:

  * Project title
  * Description
  * Category
  * Technologies used
  * Project image
  * Project details link

---

## Dynamic Project Creation

Users can add new projects through a form.

The form allows users to enter:

* Project title
* Project description
* Category
* Image URL
* Technologies used

When submitted:

* The project is added dynamically to the project list.
* The interface updates immediately without refreshing the page.
* Form events are handled using React event handlers.

---

## Search Functionality

The application includes a dynamic search feature that allows users to quickly find projects.

Users can search projects by:

* Project title
* Category
* Technologies

The displayed projects update automatically as the user types.

---

## Project Details Page

Each project has a dedicated details page accessible through client-side routing.

The details page provides:

* Full project description
* Technologies used
* Project category
* Additional project information

Navigation happens without page reloads using React Router.

---

## Responsive Design

The application is designed to work across different screen sizes:

* Desktop computers
* Tablets
* Mobile devices

Responsive features include:

* Flexible layouts
* Responsive project cards
* Mobile-friendly navigation
* Adaptive grid system

---

# Technologies Used

## Frontend

### React

Used to create reusable UI components and manage application state.

Key React concepts implemented:

* Functional components
* JSX
* Props
* State management using `useState`
* Side effects using `useEffect`
* Event handling

---

### Vite

Used as the project build tool and development environment.

Benefits:

* Fast development server
* Optimized production builds
* Modern React setup

---

### React Router

Used for client-side navigation.

Implemented routes include:

```
/
```

Landing page displaying projects.

```
/project/:id
```

Individual project details page.

---

### CSS

Custom styling was used to create:

* Responsive layouts
* Project cards
* Navigation components
* Forms
* User-friendly interface

---

### Testing Tools

The project uses:

* Jest
* React Testing Library

Tests cover:

* Component rendering
* User interactions
* Form submissions
* Navigation behavior

---

# Project Structure

```
src
│
├── components
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── ProjectCard.jsx
│   ├── ProjectList.jsx
│   ├── ProjectForm.jsx
│   └── SearchBar.jsx
│
├── pages
│   ├── Home.jsx
│   └── ProjectDetails.jsx
│
├── tests
│   ├── App.test.jsx
│   ├── Header.test.jsx
│   ├── ProjectCard.test.jsx
│   └── ProjectForm.test.jsx
│
├── data
│   └── projects.js
│
├── App.jsx
├── main.jsx
├── App.css
└── index.css
```

---

# State Management

The application uses React state management to control dynamic data.

Main application state includes:

### Projects State

Stores all portfolio projects.

Example:

```javascript
const [projects, setProjects] = useState([]);
```

### Search State

Tracks user search input.

Example:

```javascript
const [searchTerm, setSearchTerm] = useState("");
```

State is managed at the highest common parent component to allow multiple child components to access and update shared data.

---

# Component Communication

The application follows a parent-child component structure.

Example:

```
App
 |
 ├── ProjectForm
 |
 ├── SearchBar
 |
 └── ProjectList
        |
        └── ProjectCard
```

Props are passed between components to ensure reusable and maintainable code.

Example:

```jsx
<ProjectCard 
   title={project.title}
   description={project.description}
/>
```

---

# Installation and Setup

## Prerequisites

Before running this project, ensure you have installed:

* Node.js
* npm
* Git

Check your versions:

```bash
node -v

npm -v
```

---

## Clone Repository

Clone the project from GitHub:

```bash
git clone <repository-url>
```

Navigate into the project:

```bash
cd project-showcase
```

---

## Install Dependencies

Install required packages:

```bash
npm install
```

---

## Run Development Server

Start the application:

```bash
npm run dev
```

The application will open in your browser.

---

# Running Tests

To run the test suite:

```bash
npm test
```

Tests verify that:

* Components render correctly
* Forms work correctly
* User interactions behave as expected
* Routing functions properly

---

# Building for Production

To create an optimized production build:

```bash
npm run build
```

The generated files can be deployed to hosting platforms such as:

* GitHub Pages
* Vercel
* Netlify

---

# API and Data Handling

The application supports fetching project data using API requests.

Data fetching is implemented using:

```javascript
fetch()
```

The application processes returned data and updates the interface dynamically.

---

# Future Improvements

Possible improvements include:

* User authentication
* Database integration
* Image upload functionality
* Admin dashboard for managing projects
* Dark mode support
* Backend API integration
* Project categories filtering
* Deployment automation

---

# Known Limitations

Currently:

* Projects are stored locally and may reset after refreshing.
* Authentication is not implemented.
* Images depend on valid external URLs.
* No backend database is connected.

---

# Learning Outcomes

Through this project, the following React concepts were demonstrated:

✅ Building a Single Page Application
✅ Creating reusable components
✅ Managing state with React hooks
✅ Passing data using props
✅ Handling user events
✅ Creating forms in React
✅ Implementing client-side routing
✅ Writing component tests
✅ Building responsive user interfaces

---

# Author

**Peris Wamweu**

React Developer Portfolio Project

---

# License

This project was created for educational purposes as part of a React development assessment.
