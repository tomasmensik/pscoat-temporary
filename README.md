# Next.js + Spline + TailwindCSS Clean Starter

A clean, minimal starter project combining Next.js with TypeScript, TailwindCSS, and Spline 3D graphics.

## 🚀 Features

- **Next.js 14** with App Router and TypeScript
- **TailwindCSS** for utility-first styling
- **Spline 3D** integration for immersive 3D experiences
- **Clean Architecture** with minimal setup
- **Ready for Development** with all configurations in place

## 📁 Project Structure

```
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles with TailwindCSS
│   ├── layout.tsx         # Root layout component
│   └── page.tsx          # Home page with Spline scene
├── components/            # React components (empty - ready for your components)
├── assets/               # Static assets
└── public/              # Public static files
```

## 🛠️ Setup Instructions

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone or download this project**

   ```bash
   # If you have git, you can clone
   git clone <your-repo-url>
   cd nextjs-spline-gsap-starter
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Adding Your Own Spline Scene

1. Create your 3D scene in [Spline](https://spline.design)
2. Export your scene and get the public URL
3. Update the scene URL in `app/page.tsx`:

```tsx
<Spline scene="https://your-spline-scene-url.splinecode" />
```

### Styling with TailwindCSS

The project uses TailwindCSS for styling. You can:

- Modify `tailwind.config.js` for custom theme settings
- Update `app/globals.css` for global styles
- Use Tailwind classes directly in components

## 📦 Key Dependencies

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **TailwindCSS**: Utility-first CSS framework
- **@splinetool/react-spline**: Spline 3D integration
- **GSAP**: Professional-grade animations
- **React 18**: Latest React features

## 🎯 Usage Examples

### Creating a New Animated Component

```tsx
"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function MyAnimatedComponent() {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.from(elementRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out",
    });
  }, []);

  return <div ref={elementRef}>Your content here</div>;
}
```

### Adding Scroll Animations

```tsx
import ScrollAnimation from "@/components/ScrollAnimation";

<ScrollAnimation animation="fadeUp" delay={0.2}>
  <div>This will animate on scroll</div>
</ScrollAnimation>;
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The project can be deployed to any platform that supports Next.js:

- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [Spline Documentation](https://docs.spline.design)
- [GSAP Documentation](https://greensock.com/docs)

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
