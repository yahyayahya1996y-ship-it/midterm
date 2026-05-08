React Vite TypeScript Midterm Project

## Project Description

This project is created using React + Vite + TypeScript.

GitHub Repository:

https://github.com/yahyayahya1996y-ship-it/midterm.git

---

# Step 1 - Create React Project

First, I created the React project using Vite and TypeScript.

Command used:

```bash
npm create vite@latest midterm -- --template react-ts

Then I entered the project folder:

cd midterm

Then I opened the project in VS Code.

Step 2 - Install React Router

I installed React Router to create routing between pages.

Command:

npm install react-router-dom

I used routing for:

Login page
Dashboard page
Profile page
Settings page
Step 3 - Install Material UI

I installed Material UI and Material Icons.

Command:

npm install @mui/material @emotion/react @emotion/styled @mui/icons-material

I used Material UI for:

Hamburger menu icon
Dashboard icon
Profile icon
Settings icon
Logout icon
Step 4 - Install Tailwind CSS

I installed Tailwind CSS for styling.

Command:

npm install tailwindcss @tailwindcss/vite

Then I configured Tailwind inside:

vite.config.ts

I also updated:

src/index.css

and added:

@import "tailwindcss";
Step 5 - Install AG Grid

I installed AG Grid to create a table inside the dashboard page.

Command:

npm install ag-grid-react ag-grid-community

I used AG Grid to display:

ID
Name
Role
Status

inside a professional table.

Step 6 - Install Node Types

I installed node types for alias configuration.

Command:

npm install -D @types/node
Step 7 - Configure Alias Import

I configured alias import using @.

Example:

Instead of:

import Navbar from "./components/Navbar";

I used:

import Navbar from "@/components/Navbar";

I configured alias inside:

vite.config.ts

and:

tsconfig.app.json
Step 8 - Create Project Structure

I organized the project into folders.

Project structure:

src/
├── components
├── layouts
├── pages
Step 9 - Create Components

Inside components folder, I created:

Navbar.tsx
Sidebar.tsx
FooterBar.tsx
ProtectedRoute.tsx
Step 10 - Create Pages

Inside pages folder, I created:

Login.tsx
Dashboard.tsx
Profile.tsx
Settings.tsx
Step 11 - Create Main Layout

I created:

MainLayout.tsx

The MainLayout contains:

Navbar
Sidebar
Footer
Main content

I used:

{children}

to display different pages inside the layout.

Step 12 - Create Authentication System

I created a login page with fixed username and password.

Username:

yahya

Password:

yahya

If user enters wrong information, an error message appears.

Step 13 - Create Confirmation Before Login

Before login, I used:

window.confirm()

to ask:

Are you sure you want to continue login?

If user clicks:

Yes → continue login
No → stay on login page
Step 14 - Create Loading Spinner

After successful login confirmation:

Loading spinner appears
Waits 3 seconds
Then navigates to main page

I used:

setTimeout()

for loading delay.

Step 15 - Create Protected Routes

I created:

ProtectedRoute.tsx

This prevents users from entering:

/main
/profile
/settings

without login first.

I used:

localStorage

to save login state.

Step 16 - Create Navbar

I created a Navbar using:

Tailwind CSS
Material UI icons

Navbar contains:

Hamburger menu
Project title
Logout button
Step 17 - Create Sidebar

I created a Sidebar with navigation links.

Sidebar contains:

Dashboard
Profile
Settings

I used:

NavLink

from React Router.

The active page becomes highlighted automatically.

Step 18 - Create Footer

I created:

FooterBar.tsx

using Tailwind CSS.

The footer appears at the bottom of the page.

Step 19 - Create Dashboard Page

Inside dashboard page, I created:

3 common-theme buttons
AG Grid table

Buttons created:

Add User
Edit User
Delete User

All buttons have same style using Tailwind CSS.

Step 20 - Create AG Grid Table

I created a table using AG Grid.

The table contains:

ID
Name
Role
Status

I used:

AgGridReact

with:

columnDefs
rowData
Step 21 - Create Routing

I created routing between pages:

/login
/main
/profile
/settings

I used:

BrowserRouter
Routes
Route
Navigate

from React Router.

Step 22 - Create Logout Functionality

I added logout button inside Navbar.

When user clicks logout:

localStorage.removeItem("isLoggedIn")

is executed.

Then user returns to login page.

Step 23 - Create Git Branch

I created a development branch.

Command:

git checkout -b dev

I used this branch to continue project development.

Step 24 - Push Project To GitHub

I pushed the project to GitHub.

Commands used:

git add .
git commit -m "Add main layout authentication routing and dashboard"
git push origin dev
Problems That I Fixed

During the project, I fixed several problems.

1. Components Folder Error

I had two folders:

Components
components

This caused TypeScript errors.

I fixed it by keeping only:

components
2. Routing Errors

I fixed problems related to:

BrowserRouter
Routes
Route
Navigate

by importing them correctly from:

react-router-dom
3. Alias Import Errors

I fixed alias import problems by:

configuring vite.config.ts
configuring tsconfig.app.json
restarting VS Code
4. Tailwind Styling Problems

I fixed Tailwind problems by:

configuring vite.config.ts
adding:
@import "tailwindcss";

inside index.css
chatgpt: https://chatgpt.com/share/69fda80a-9f10-838b-8376-81fce1edfd8e