# Hero Section

A modern, interactive hero section built with React, TypeScript, and Tailwind CSS.

---

## 📹 Loom Video
You can see my Loom video here: [Loom Video](https://www.loom.com/share/b60216f210fe4df2a5c68d1f4faac6ca?sid=28ed31c8-4d97-4dab-9f08-a8c694c9d9d4)

---

## 🚀 Quick Start

Follow these steps to set up and run the project locally:

### 1. Prerequisites
- **Node.js** (v16 or later recommended)
- **npm** (v8 or later)

Check your versions:
```bash
node -v
npm -v
```
If you don't have Node.js or npm, download them from [nodejs.org](https://nodejs.org/).

### 2. Install Dependencies
Install all required packages:
```bash
npm install
```

### 3. Start the Development Server
Launch the app locally:
```bash
npm start
```
- The app will open at [http://localhost:3000](http://localhost:3000)
- Changes in the code will hot-reload automatically

### 4. Build for Production
Create an optimized production build:
```bash
npm run build
```
- Output will be in the `build/` directory

---

## 🗂️ Project Structure
- `src/components/HeroSection/` — Main hero section and background animation
- `src/components/HeroSection/AINetworkBackground.tsx` — Animated background
- `src/components/EditableText/` — Editable headline and subtext
- `src/components/Navbar/` — Navigation bar
- `src/hooks/useRandomHero.ts` — Custom hook for random hero generation
- `src/data/` — Sample hero data

## ⚙️ Configuration
- **TypeScript:** see `tsconfig.json`
- **Tailwind CSS:** see `tailwind.config.js` and `postcss.config.js`


---

## 💡 Tips & Troubleshooting
- If you encounter issues during install, try deleting `node_modules` and `package-lock.json`, then rerun `npm install`.
- For Tailwind CSS issues, ensure your IDE supports PostCSS and Tailwind plugins.
- For more help, see the [React documentation](https://react.dev/) and [Tailwind CSS docs](https://tailwindcss.com/docs).

---