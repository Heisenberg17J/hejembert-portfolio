import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '375px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        code: {
          bg: '#0d0d0d',
          bgSecondary: '#1a1a1a',
          bgTertiary: '#252525',
          text: '#e0e0e0',
          textMuted: '#888888',
          textDim: '#666666',
          green: '#00ff00',
          orange: '#ff9500',
          blue: '#0088ff',
          purple: '#bd93f9',
          pink: '#ff79c6',
          yellow: '#f1fa8c',
          red: '#ff5555',
          cyan: '#8be9fd',
        }
      },
      fontFamily: {
        mono: ['Fira Code', 'JetBrains Mono', 'Consolas', 'Monaco', 'monospace'],
      },
      animation: {
        'typing': 'typing 3s steps(40, end)',
        'blink': 'blink 1s step-end infinite',
        'scanline': 'scanline 8s linear infinite',
        'fadeIn': 'fadeIn 0.6s ease-out forwards',
      },
      keyframes: {
        typing: {
          from: { width: '0' },
          to: { width: '100%' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(1rem)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      fontSize: {
        'xxs': '0.625rem',
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        codetheme: {
          "primary": "#0088ff",
          "secondary": "#bd93f9",
          "accent": "#00ff00",
          "neutral": "#1a1a1a",
          "base-100": "#0d0d0d",
          "base-200": "#1a1a1a",
          "base-300": "#252525",
          "info": "#0088ff",
          "success": "#00ff00",
          "warning": "#ff9500",
          "error": "#ff5555",
        },
      },
    ],
    darkTheme: "codetheme",
    base: true,
    styled: true,
    utils: true,
  },
}
