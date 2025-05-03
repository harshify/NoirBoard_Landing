# NoirBoard Landing Page

A sleek, modern landing page for the NoirBoard Chrome extension - a productivity dashboard that transforms your new tab experience.

## Features

- Responsive design with mobile-first approach
- Animated elements using AOS and ScrollReveal libraries
- Clean, minimalist dark theme interface
- Optimized for performance

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Vite (for build tooling)
- AOS (Animate On Scroll) library
- ScrollReveal library
- Font Awesome icons

## Getting Started

### Prerequisites

- Node.js (v14 or higher recommended)
- npm (v6 or higher recommended)

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/harshify/NoirBoard_Landing.git
   cd NoirBoard_Landing
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Start the development server

   ```bash
   npm run dev
   ```

4. Build for production
   ```bash
   npm run build
   ```

## Project Structure

```
noirboard-landing/
├── public/               # Static assets
│   ├── images/           # Image assets
│   ├── logo.svg          # NoirBoard logo
├── src/                  # Source files
│   ├── assets/           # Additional assets
│   ├── style.css         # Main stylesheet
│   ├── main.js           # Main JavaScript file
├── index.html            # Main HTML file
├── package.json          # Project dependencies and scripts
├── vite.config.js        # Vite configuration
```

## Deployment

To deploy the landing page, run:

```bash
npm run build
```

The built files will be in the `dist` directory, which can be deployed to any static hosting service like Netlify, Vercel, or GitHub Pages.

## License

This project is licensed under the MIT License.
