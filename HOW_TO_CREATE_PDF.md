# 📄 How to Create PDF from Resume

## Method 1: Using Browser (Easiest)

1. **Open the resume file:**
   - Navigate to: `http://localhost:5173/resume.html` (when dev server is running)
   - OR open the file directly: `public/resume.html` in your browser

2. **Print to PDF:**
   - Press `Ctrl + P` (Windows) or `Cmd + P` (Mac)
   - Select "Save as PDF" or "Microsoft Print to PDF" as the printer
   - Click "Save" and name it `resume.pdf`
   - Save it in the `public` folder

## Method 2: Direct File Path

1. Right-click on `public/resume.html`
2. Choose "Open with" → Your browser (Chrome, Edge, Firefox)
3. Press `Ctrl + P` (or `Cmd + P` on Mac)
4. Choose "Save as PDF"
5. Save as `resume.pdf` in the `public` folder

## Method 3: Using Online Converter

1. Open `public/resume.html` in your browser
2. Use an online HTML to PDF converter like:
   - https://www.ilovepdf.com/html-to-pdf
   - https://www.pdf24.org/en/html-to-pdf
3. Upload or paste the HTML content
4. Convert and download as `resume.pdf`
5. Save it in the `public` folder

## Method 4: Update Button Link

Once you have `resume.pdf` in the `public` folder:
- The "Resume" button on the home page will automatically link to it
- The link is already set up as `/resume.pdf`

## 📁 File Location

After creating the PDF, place it here:
```
my portfolio/
└── public/
    └── resume.pdf  ← Your PDF resume here
```

## ✅ Quick Steps:

1. Open `public/resume.html` in your browser
2. Press `Ctrl + P` (or `Cmd + P`)
3. Select "Save as PDF"
4. Save as `resume.pdf` in the `public` folder
5. Done! The resume button will work automatically.

