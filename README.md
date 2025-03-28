# 🌟 Recipe Finder - Frontend JS Engineer Test Assessment

## 📌 Description
This is a test assessment for creating a **Recipe Finder** application using Next.js. The application allows users to search for recipes based on keywords, select cuisine types, filter by preparation time, view search results, and check detailed recipe information.

## 🚀 Installation and Setup

1. **Install dependencies:**  
   ```bash
   npm install
   ```

2. **Run the development server:**  
   ```bash
   npm run dev
   ```  
   Then, open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Run code linting:**  
   ```bash
   npm run lint
   ```  

4. **Build the project:**  
   ```bash
   npm run build
   ```  

## 📂 Project Structure

- **🏠 Home Page (`/`)**  
  - A search form with fields:
    - 🔍 Text input for searching recipes.
    - 🍽 Dropdown for selecting cuisine type.
    - ⏳ Input for specifying maximum preparation time.
  - A **"Next"** button, which is enabled when at least one field is filled.
  - Redirects to **`/recipes`** with query parameters.

- **📜 Recipes Page (`/recipes`)**  
  - Fetches recipe data from **Spoonacular API** using SSR.
  - Displays a list of recipes with their **title** and **image**.
  - Clicking on a recipe navigates to **`/recipes/[id]`**.

- **📖 Recipe Details Page (`/recipes/[id]`)**  
  - Loads recipe details from the API.
  - Displays the **recipe title**, **ingredients**, and additional information.

## 🛠 Technologies Used

- ⚛️ **Next.js** - Uses SSR for fetching recipes.
- 🎨 **Tailwind CSS** - For styling components.
- ⏳ **React Suspense** - To handle loading states.
- 🔍 **ESLint & Prettier** - Code linting and formatting.
- 🎨 **ShadcnUI** - For styling components.

## 🔑 API Setup

1. Sign up at [Spoonacular](https://spoonacular.com/food-api/docs#Authentication).
2. Create a `.env.local` file and add the API key:
   ```bash
   BASE_URL=BASE_API_URL
   API_KEY=YOUR_API_KEY
   ```  

