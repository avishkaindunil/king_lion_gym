# 🦁 King Lion Gym — Premium Website

Sri Lanka's most elite gym website built with **Next.js 14**, **Tailwind CSS**, **Framer Motion**, and **EmailJS**.

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
npm start
```

---

## 📧 Activate Contact Form (EmailJS)

The contact form uses [EmailJS](https://www.emailjs.com) (free — no backend needed).

**Steps:**
1. Create a free account at [emailjs.com](https://www.emailjs.com)
2. Add an Email Service (e.g., Gmail)
3. Create an Email Template with these variables:
   - `{{from_name}}`, `{{from_email}}`, `{{phone}}`, `{{subject}}`, `{{message}}`
4. Open `app/contact/page.js` and replace:
   ```js
   const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
   const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
   const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';
   ```

---

## 📄 Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero slideshow, stats, services, BMI calculator, testimonials |
| About | `/about` | Story, values, timeline, mission |
| Gallery | `/gallery` | Filterable photo grid with lightbox |
| Our Team | `/team` | Coach profiles with achievements |
| Register | `/register` | Membership plans + registration form |
| Contact | `/contact` | Functional contact form + map |

---

## 🎨 Design System

- **Colors:** Black (`#0A0A0A`) + Red (`#CC0000`)
- **Fonts:** Oswald (display) + Barlow (body) — Google Fonts
- **Animations:** Framer Motion scroll reveals, parallax, transitions
- **Components:** Custom BMI Calculator, Lightbox Gallery, Multi-step Form

---

## 🛠 Tech Stack

- **Next.js 14** (App Router)
- **Tailwind CSS**
- **Framer Motion** — animations
- **EmailJS** — contact form
- **React Icons** — icon library
- **React CountUp** — number animations
- **React Intersection Observer** — scroll triggers

---

## 📁 Project Structure

```
king-lion-gym/
├── app/
│   ├── layout.js          # Root layout with fonts & navbar
│   ├── page.js            # Home page
│   ├── about/page.js      # About page
│   ├── contact/page.js    # Contact page (configure EmailJS here)
│   ├── register/page.js   # Register page
│   ├── gallery/page.js    # Gallery page
│   ├── team/page.js       # Team page
│   └── globals.css        # Global styles
├── components/
│   ├── Navbar.js          # Responsive navigation
│   ├── Footer.js          # Footer
│   ├── BMICalculator.js   # Interactive BMI tool
│   └── AnimatedSection.js # Scroll reveal wrapper
└── public/
    └── images/            # Gym photos (gym1.jpg – gym12.jpg)
```

---

## 🔧 Customization

### Update Gym Info
- **Phone/Email/Address:** Edit `components/Footer.js` and `app/contact/page.js`
- **Social Links:** Search for `href="#"` in Footer and Team pages
- **Map Location:** Update the Google Maps iframe `src` in `app/contact/page.js`
- **Membership Prices:** Edit the `plans` array in `app/register/page.js`

### Add Logo Image
Place your logo file at `public/images/logo.png` and update `components/Navbar.js` to use `<Image src="/images/logo.png" ... />`

---

Built with ❤️ for King Lion Gym, Akuressa, Sri Lanka 🦁
