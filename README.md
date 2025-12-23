# Portfolio Website - Chetan Koirala

A modern, professional, and fully responsive portfolio website built with React, Tailwind CSS, and Framer Motion.

## 🌟 Features

- **Modern Design**: Clean, professional UI with smooth animations
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Dark Mode**: Smooth theme switching with localStorage persistence
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **SEO Optimized**: Meta tags, semantic HTML, and optimized performance
- **Interactive Sections**:
  - **Home**: Animated hero section with call-to-action buttons
  - **About**: Skills showcase with animated progress bars
  - **Projects**: Interactive project cards with tech stack and links
  - **Experience**: Timeline view of work experience and achievements
  - **Contact**: Contact form with EmailJS integration and social links

## 🚀 Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router** - Client-side routing
- **EmailJS** - Email service integration
- **React Icons** - Icon library

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd "my portfolio"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🔧 Configuration

### EmailJS Setup

To enable the contact form, you'll need to set up EmailJS:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create an email service and template
3. Update the following in `src/pages/Contact.jsx`:
   ```javascript
   const serviceId = 'YOUR_SERVICE_ID'
   const templateId = 'YOUR_TEMPLATE_ID'
   const publicKey = 'YOUR_PUBLIC_KEY'
   ```

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
my portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Footer.jsx
│   │   └── Navbar.jsx
│   ├── context/
│   │   └── DarkModeContext.jsx
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── Home.jsx
│   │   └── Projects.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🎨 Customization

### Colors

Edit the color scheme in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Your custom colors
  },
}
```

### Content

- Update personal information in respective page components
- Modify projects in `src/pages/Projects.jsx`
- Update experience in `src/pages/Experience.jsx`
- Adjust skills in `src/pages/About.jsx`

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 768px
- **Desktop**: > 768px

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Chetan Koirala**

- Email: koiralachetan16@gmail.com
- Phone: +977-9849756660
- LinkedIn: [linkedin.com/np/ChetanKoirala](https://linkedin.com/np/ChetanKoirala)

## 🙏 Acknowledgments

- Icons by [React Icons](https://react-icons.github.io/react-icons/)
- Animations by [Framer Motion](https://www.framer.com/motion/)
- UI Framework by [Tailwind CSS](https://tailwindcss.com/)

---

Made with ❤️ using React and Tailwind CSS

