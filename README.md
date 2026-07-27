# Darpan Patel — Portfolio

React + Vite portfolio with dark/light mode, Framer Motion animations, and an EmailJS contact form.

## 1. Install dependencies

```bash
npm install
```

## 2. Add your assets

Put these files in `public/`:
- `profile.png` — your photo (used in the Hero section)
- `resume.pdf` — your resume (linked from Hero and Resume sections)
- `projects/notes-app.png`, `projects/todo-app.png`, `projects/mern-blog.png` — project screenshots
  (or edit `src/components/Projects.jsx` to change the image paths / project list)

## 3. Run locally

```bash
npm run dev
```

Visit the printed local URL (usually http://localhost:5173).

## 4. Set up the contact form (EmailJS)

1. Create a free account at https://www.emailjs.com
2. Create an **Email Service** (e.g. Gmail) and an **Email Template** with variables
   `user_name`, `user_email`, `message` (these match the form field names in `Contact.jsx`).
3. Open `src/components/Contact.jsx` and replace:
   - `YOUR_SERVICE_ID`
   - `YOUR_TEMPLATE_ID`
   - `YOUR_PUBLIC_KEY`

   with the values from your EmailJS dashboard.

## 5. Update your links

- `src/components/Footer.jsx` — LinkedIn, GitHub, email
- `src/components/Projects.jsx` — GitHub repo + live demo links per project
- `src/components/Navbar.jsx` / `Hero.jsx` — name is currently hardcoded as "Darpan Patel"

## 6. Deploy to Vercel

```bash
npm i -g vercel
vercel
```

Or connect the GitHub repo directly at https://vercel.com/new — Vercel auto-detects Vite projects,
so no extra config is needed.

## Notes

- Colors live in `src/index.css` under `:root` (dark) and `body.light` (light mode).
- Dark/light mode toggle is in the Navbar (sun/moon icon) and persists only for the current session
  (add `localStorage` if you want it remembered across visits).
- Section scroll-to-anchor navigation works because each section has a matching `id`
  (`hero`, `about`, `skills`, `projects`, `resume`, `contact`).
