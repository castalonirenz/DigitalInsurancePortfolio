# 🏥 Insurance Portfolio - Digital Showcase

A modern, responsive digital portfolio for insurance agents built with **Next.js**, **React 19**, **Tailwind CSS**, and **Lucide Icons**.

## 📋 Overview

This project showcases a professional insurance portfolio featuring:
- **Navigation Dashboard** - Quick overview of services and agent info
- **Services Section** - Detailed insurance plans (Select Plan & Blue Royale)
- **Agent Profile** - Professional background and expertise
- **Contact Page** - Multiple contact methods and inquiry form

Built for **Dan Louie P. Decena**, Account Executive at **Pacific Cross**.

---

## 🚀 Features

✅ **Responsive Design** - Works seamlessly on mobile, tablet, and desktop  
✅ **Modern UI** - Clean, professional aesthetic with Tailwind CSS  
✅ **Tab Navigation** - Easy navigation between Dashboard, Services, Profile, and Contact  
✅ **Contact Integration** - Multiple contact methods (phone, email, WhatsApp)  
✅ **Plan Details** - Comprehensive insurance plan information  
✅ **SEO Optimized** - Metadata and structured content  
✅ **Accessibility** - Semantic HTML and ARIA labels  

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16.2.4](https://nextjs.org/) - React framework with App Router
- **React**: 19.2.4 - Latest React version
- **Styling**: [Tailwind CSS 3.3.3](https://tailwindcss.com/) - Utility-first CSS
- **Icons**: [Lucide React](https://lucide.dev/) - Beautiful icon library
- **Linting**: ESLint 9

---

## 📁 Project Structure

```
insurance-portfolio/
├── src/
│   └── app/
│       ├── components/
│       │   ├── Navigation.js      # Navigation bar with tab switching
│       │   ├── Dashboard.js       # Main landing/overview section
│       │   ├── Services.js        # Insurance plans showcase
│       │   ├── Profile.js         # Agent profile section
│       │   └── Contact.js         # Contact form and methods
│       ├── layout.js              # Root layout component
│       ├── page.js                # Main page with tab state management
│       ├── globals.css            # Global styles + Tailwind imports
│       └── page.module.css        # (Not used in new design)
├── public/                        # Static assets
├── tailwind.config.js             # Tailwind configuration
├── postcss.config.js              # PostCSS configuration
├── next.config.mjs                # Next.js configuration
├── jsconfig.json                  # JavaScript config
├── eslint.config.mjs              # ESLint configuration
└── package.json                   # Dependencies
```

---

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ and npm/yarn

### Steps

1. **Navigate to project**
   ```bash
   cd insurance-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

---

## 🎨 Customization

### Update Agent Information

Edit the components to update agent details:

**Dashboard** (`src/app/components/Dashboard.js`)
- Agent name, position, company
- Hero section content

**Profile** (`src/app/components/Profile.js`)
- Professional background
- Expertise areas
- Profile image placeholder

**Contact** (`src/app/components/Contact.js`)
- Phone number (keep the format: `+639171853316` or `0917 185 3316`)
- Email address
- WhatsApp link

### Change Colors

Edit the color scheme in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#1e3a5f',    // Navy blue
      secondary: '#f97316',  // Orange
      accent: '#059669',     // Green
    },
  },
},
```

### Modify Plans

Update insurance plans in `Services.js` component:
- Plan names and details
- Features list
- Color schemes

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel auto-configures Next.js projects
5. Deploy with one click

### Deploy to Other Platforms

- **Netlify**: Same as Vercel
- **Self-hosted**: Build with `npm run build`, then `npm start`

---

## 📱 Navigation Structure

| Tab | Route | Purpose |
|-----|-------|---------|
| Dashboard | / | Welcome & overview |
| Services | /services | Insurance plans |
| Profile | /profile | Agent information |
| Contact | /contact | Contact methods & form |

---

## 🔧 Configuration Files

### `tailwind.config.js`
- Tailwind CSS customization
- Custom colors and theme

### `postcss.config.js`
- PostCSS plugins for CSS processing

### `next.config.mjs`
- Next.js specific configurations

### `globals.css`
- Global styles
- Tailwind CSS imports (`@tailwind` directives)

---

## 📝 Component Details

### Navigation.js
- Sticky top navigation
- Desktop & mobile responsive
- Tab switching functionality
- Icon integration with Lucide

### Dashboard.js
- Hero section with CTA button
- Feature highlights (4-column grid)
- Agent introduction card
- Call-to-action for plans

### Services.js
- Two insurance plan cards
- Feature checklists
- Premium badges
- Gradient backgrounds
- "Why Choose Us" section

### Profile.js
- Agent profile card
- Professional details
- Expertise areas
- Why work with agent section

### Contact.js
- Multiple contact methods (phone, email, chat)
- Contact form with validation
- Contact cards with icons
- Quick action buttons

---

## 🎯 Features by Section

### Dashboard
- Welcome message
- Service highlights with icons
- Agent introduction
- Call-to-action buttons

### Services
- Plan comparison cards
- Feature lists with checkmarks
- Premium plan badge
- Benefits overview
- Plan selection buttons

### Profile
- Agent photo placeholder
- Professional background
- Position and company
- Expertise list
- Why choose this agent

### Contact
- Phone with direct dial link
- Email with mailto link
- WhatsApp integration
- Contact form fields
  - Name, Email, Phone, Subject, Message
- Response time info

---

## 🌐 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## 📄 License

This project is for portfolio and presentation purposes only.

---

## 👥 Support

For inquiries or modifications:
- 📧 Email: danlouie.decena@pacificcross.com.ph
- 📱 Phone: 0917 185 3316
- 💬 WhatsApp: 0917 185 3316

---

## ⚠️ Disclaimer

This portfolio is informational and does not replace official insurance documentation or agreements from Pacific Cross.

---

**Last Updated**: May 2024  
**Version**: 1.0.0
