# Image Placement Guide

## 📸 Where to Place Your Images

Place your images in the **`public`** folder at the root of your project.

## Required Images:

### 1. Profile Image (Required)
- **File name**: `profile-image.jpg` (or `.png`, `.jpeg`)
- **Location**: `/public/profile-image.jpg`
- **Recommended size**: 800x800 pixels or larger (square format)
- **Format**: JPG, PNG, or JPEG
- **Usage**: This will be displayed in the Home section

### 2. Logo (Optional but Recommended)
- **File name**: `logo.png` (or `.jpg`, `.svg`)
- **Location**: `/public/logo.png`
- **Recommended size**: 200x200 pixels (square format) or 400x100 pixels (rectangular)
- **Format**: PNG (with transparency), SVG, or JPG
- **Usage**: This will be displayed in the Navbar. If not provided, a gradient text logo will be used as fallback.

## How to Add Your Images:

1. **Create the public folder** (if it doesn't exist)
2. **Place your profile image** in the public folder and name it `profile-image.jpg`
3. **Place your logo** in the public folder and name it `logo.png` (optional)

## Example Structure:
```
my portfolio/
├── public/
│   ├── profile-image.jpg  ← Your profile photo here
│   └── logo.png           ← Your logo here (optional)
├── src/
└── ...
```

## Image Tips:

- **Profile Image**: Use a professional headshot or clear photo of yourself
- **Logo**: Can be your initials, name, or a custom logo design
- **Format**: PNG is recommended for logos (supports transparency), JPG for photos
- **Size**: Keep file sizes optimized (under 500KB each) for better performance
- **Aspect Ratio**: Profile image should be square (1:1) for best results

## Fallback Behavior:

- If `profile-image.jpg` is not found, a placeholder image will be displayed
- If `logo.png` is not found, a gradient text logo with "CK" will be displayed

## Testing:

After adding your images:
1. Make sure the file names match exactly (case-sensitive)
2. Restart your development server: `npm run dev`
3. The images should appear automatically

