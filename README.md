# Sandalwood Spa Website

A modern, elegant website for a luxury spa built with React, TypeScript, and Tailwind CSS. The website features a stunning design with smooth animations, responsive layouts, and a soothing color palette.

![Sandalwood Spa](https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80)

## Features

- 🎨 Elegant, minimalist design with a soothing sage color scheme
- ✨ Smooth animations and transitions
- 📱 Fully responsive layout
- 🔍 SEO-friendly structure
- 🚀 Optimized performance
- 🎭 Interactive UI elements
- 🖼️ Parallax scrolling effects

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Lucide Icons

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/sandalwood-spa.git
cd sandalwood-spa
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Project Structure

```
sandalwood-spa/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── About.tsx
│   │   └── Footer.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## Components

- **Navbar**: Responsive navigation bar with scroll-based styling
- **Hero**: Full-screen hero section with parallax background
- **Services**: Grid layout showcasing spa services
- **About**: Information section with image and description
- **Footer**: Comprehensive footer with contact information and social links

## Customization

### Colors

The website uses a custom sage color palette defined in `tailwind.config.js`. You can modify the colors by updating the theme configuration:

```javascript
theme: {
  extend: {
    colors: {
      sage: {
        50: '#f6f7f6',
        // ... other shades
        900: '#2f352f',
      },
    },
  },
}
```

### Animations

Custom animations are defined in `index.css` using Tailwind's animation utilities. You can modify the timing and effects by updating the keyframes and animation classes.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Images from [Unsplash](https://unsplash.com)
- Icons from [Lucide](https://lucide.dev)