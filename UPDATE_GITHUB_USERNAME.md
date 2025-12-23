# 🔧 Update Your GitHub Username

## ✅ What's Been Updated

I've updated all the project buttons and GitHub links to point to your GitHub account. Here's what changed:

### 1. Projects Section (`src/pages/Projects.jsx`)
- **Live Demo** button → Links to your GitHub profile
- **Code** button → Links to your GitHub repositories page

### 2. All GitHub Links Updated
- Home page social links
- Footer social links  
- Projects section buttons

## 🔄 How to Update Your GitHub Username

If your GitHub username is **NOT** "ChetanKoirala", update it in these files:

### File 1: `src/pages/Projects.jsx`
Find this line (around line 8):
```javascript
const githubUsername = 'ChetanKoirala' // Change this to your actual GitHub username
```
Change `'ChetanKoirala'` to your actual GitHub username.

### File 2: `src/pages/Home.jsx`
Find this line (around line 31):
```javascript
{ icon: <FiGithub size={24} />, href: 'https://github.com/ChetanKoirala', label: 'GitHub' },
```
Change `ChetanKoirala` to your actual GitHub username.

### File 3: `src/components/Footer.jsx`
Find this line (around line 23):
```javascript
href: 'https://github.com/ChetanKoirala', // Update with your GitHub username
```
Change `ChetanKoirala` to your actual GitHub username.

## 📝 Resume PDF Access

The resume is now accessible at:
- **URL**: `http://localhost:5173/resume` (or `/resume`)
- **What it does**: 
  - If `resume.pdf` exists → Opens the PDF
  - If PDF doesn't exist → Falls back to `resume.html`

### To create the PDF:
1. Open `public/resume.html` in your browser
2. Press `Ctrl + P` (or `Cmd + P` on Mac)
3. Select "Save as PDF"
4. Save as `resume.pdf` in the `public` folder
5. Done! The resume button will now open the PDF.

## ✅ Current Status

- ✅ Project buttons link to GitHub
- ✅ All social links point to GitHub
- ✅ Resume route is set up and working
- ⚠️ **Action Required**: Update GitHub username if it's not "ChetanKoirala"

## 🎯 Quick Test

After updating:
1. Click "Live Demo" or "Code" button on any project
2. Should open your GitHub profile/repositories
3. Click Resume button → Should open resume PDF or HTML

