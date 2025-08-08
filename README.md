# GSAP Animation Template

A modern, clean template for creating stunning web animations using GSAP (GreenSock Animation Platform) with Next.js and React.

## 🚀 Features

- **GSAP Integration**: Full GSAP 3.13.0 support with React integration
- **Modern Stack**: Built with Next.js 15, React 19, and Tailwind CSS 4
- **Responsive Design**: Mobile-first approach with smooth animations
- **Dark Mode**: Automatic dark/light theme switching
- **Performance Optimized**: Intersection Observer for scroll-triggered animations
- **Clean Code**: Well-structured, maintainable codebase
- **TypeScript Ready**: Easy to convert to TypeScript if needed

## 📦 Tech Stack

- **Framework**: Next.js 15.4.5
- **Animation**: GSAP 3.13.0 + @gsap/react 2.1.2
- **Styling**: Tailwind CSS 4
- **Language**: JavaScript/React
- **Development**: ESLint, Turbopack

## 🛠️ Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/HiwarkhedePrasad/GSAP-Animation-Template
   cd gsap
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
gsap/
├── public/                 # Static assets
├── src/
│   └── app/
│       ├── about/         # About page
│       ├── globals.css    # Global styles
│       ├── layout.js      # Root layout
│       └── page.js        # Home page with animations
├── package.json
├── tailwind.config.js
└── README.md
```

## 🎨 Animation Features

### Current Animations

- **Scroll-triggered animations** using Intersection Observer
- **Smooth fade-ins** with transform effects
- **Hover animations** on interactive elements
- **Staggered animations** for skill cards
- **Parallax-like effects** for section transitions

### GSAP Integration Examples

```javascript
// Scroll-triggered animation
gsap.from(".animate-on-scroll", {
  opacity: 0,
  y: 30,
  duration: 0.8,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".animate-on-scroll",
    start: "top 80%",
  },
});

// Staggered animations
gsap.from(".skill-card", {
  opacity: 0,
  y: 50,
  duration: 0.6,
  stagger: 0.2,
  ease: "back.out(1.7)",
});
```

## 🎯 Customization

### Adding New Animations

1. Import GSAP in your component:

   ```javascript
   import { gsap } from "gsap";
   import { ScrollTrigger } from "gsap/ScrollTrigger";

   gsap.registerPlugin(ScrollTrigger);
   ```

2. Create animations in useEffect:
   ```javascript
   useEffect(() => {
     gsap.from(".your-element", {
       // animation properties
     });
   }, []);
   ```

### Styling

- Modify `src/app/globals.css` for global styles
- Use Tailwind classes for component styling
- Customize color scheme in the CSS variables

### Content

- Update personal information in `src/app/page.js`
- Modify navigation links and sections
- Add your own projects and skills

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 📚 GSAP Resources

- [GSAP Documentation](https://greensock.com/docs/)
- [GSAP React Integration](https://greensock.com/react/)
- [ScrollTrigger Plugin](https://greensock.com/scrolltrigger/)
- [GSAP Easing Functions](https://greensock.com/docs/v3/Eases)

## 🎨 Animation Ideas

### Advanced Animations to Try

- **Morphing shapes** with GSAP MorphSVG
- **Text animations** with SplitText
- **3D transforms** and perspective effects
- **Path animations** for SVG elements
- **Timeline sequences** for complex animations
- **Mouse-following effects** with MouseFollower

### Performance Tips

- Use `will-change` CSS property for GPU acceleration
- Implement `requestAnimationFrame` for smooth animations
- Use `transform` and `opacity` for best performance
- Avoid animating layout-triggering properties

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [GSAP](https://greensock.com/) for the amazing animation library
- [Next.js](https://nextjs.org/) for the React framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework

## 📞 Support

If you have any questions or need help with animations:

- Check the [GSAP forums](https://greensock.com/forums/)
- Review the [documentation](https://greensock.com/docs/)
- Open an issue in this repository

---

**Happy Animating! 🎬✨**
