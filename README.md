# OWN LAB Landing Page

A production-ready landing page for **OWN LAB** — an RWA investment bank that provides **Tokenization-as-a-Service (TaaS)** with a focus on **Shariah-compliant** assets.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15, TypeScript, Tailwind CSS
- **UI Components**: shadcn/ui with custom components
- **Animations**: Framer Motion with reduced-motion support
- **Accessibility**: Semantic HTML, keyboard navigation, ARIA labels
- **Performance**: Optimized images, lazy loading, responsive design
- **SEO**: OpenGraph, Twitter cards, JSON-LD schema

## 🎨 Design System

- **Primary Colors**: Emerald-500/600 (#10B981 / #059669)
- **Secondary**: Slate-800/900 backgrounds
- **Accent**: Amber-500
- **Typography**: Inter (body), Space Grotesk (headlines)
- **Motif**: Geometric grid + subtle network/mesh lines

## 📱 Sections

1. **Hero** - Headline, subcopy, CTAs, KPIs, trust badges
2. **Value Props** - 4 key value propositions with icons
3. **How It Works** - 4-step timeline process
4. **Platform Modules** - 6 feature cards with descriptions
5. **Compliance** - Jurisdictions, Shariah governance, features
6. **Metrics** - Industry statistics with counters
7. **ICP & Use Cases** - Target clients and use cases
8. **Pricing** - Transparent pricing tiers
9. **Testimonials** - Client quotes and social proof
10. **Resources** - Knowledge base and documentation
11. **Lead Capture** - Contact form with validation
12. **FAQ** - 8 frequently asked questions
13. **Footer** - Links, social media, legal pages

## 🛠️ Development

### Prerequisites

- Node.js 20.18.0 (use `nvm use 20.18.0`)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Main landing page
│   ├── privacy/            # Privacy policy page
│   ├── terms/              # Terms of service page
│   └── api/lead/            # Lead form API endpoint
├── components/
│   ├── layout/             # Layout components
│   └── ui/                 # UI components and pages
└── lib/
    ├── constants.ts        # Editable content constants
    └── utils.ts            # Utility functions
```

## 📝 Content Management

All content is centralized in `src/lib/constants.ts` for easy editing:

- **Brand information** (name, tagline, description)
- **Hero section** (headline, subcopy, CTAs, KPIs)
- **Value propositions** (titles, descriptions, icons)
- **Platform modules** (features, descriptions)
- **Compliance** (jurisdictions, Shariah statements)
- **Metrics** (industry statistics)
- **Pricing** (plans, notes)
- **Testimonials** (quotes, authors)
- **FAQ** (questions and answers)

## 🎯 Target Audience

- **Asset managers** (AUM $200M+)
- **Islamic banks**
- **REITs**
- **Sovereign funds**

## 🌍 Jurisdictions

- **Pakistan** - SECP Sandbox (pilot)
- **UAE** - DIFC/ADGM (partners)
- **KSA** - In progress
- **Malaysia** - Islamic markets

## 📊 Performance Goals

- **Lighthouse Score**: 95+ (Performance/Best Practices/SEO)
- **Accessibility**: A11y ≥ 90
- **No layout shift** on hero
- **Fully responsive** (sm, md, lg, xl)
- **Keyboard navigation** with visible focus
- **Form validation** with success/error states

## 🔧 Customization

### Colors
Update the CSS variables in `src/app/globals.css`:

```css
:root {
  --primary: oklch(0.646 0.222 41.116); /* emerald-500 */
  --secondary: oklch(0.269 0 0); /* slate-800 */
  --accent: oklch(0.828 0.189 84.429); /* amber-500 */
}
```

### Content
Edit `src/lib/constants.ts` to update:
- Company information
- Value propositions
- Pricing tiers
- Testimonials
- FAQ items

### Animations
All animations respect `prefers-reduced-motion` and can be customized in component files.

## 📈 Analytics

The application is ready for analytics integration. Add your tracking code to `src/app/layout.tsx`:

```tsx
// Google Analytics, GTM, or other analytics
```

## 🚀 Deployment

The application is ready for deployment on:
- **Vercel** (recommended)
- **Netlify**
- **AWS Amplify**
- **Any Node.js hosting**

### Environment Variables

Create a `.env.local` file for production:

```env
NEXT_PUBLIC_ANALYTICS_ID=your_analytics_id
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## 📄 License

This project is proprietary to OWN LAB. All rights reserved.

## 🤝 Support

For technical support or questions about the implementation, contact the development team.