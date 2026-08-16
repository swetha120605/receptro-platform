/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          50: '#f6f7f9',
          100: '#eceef2',
          200: '#d5dae3',
          300: '#b0bac9',
          400: '#8593a8',
          500: '#67738a',
          600: '#525c72',
          700: '#434b5d',
          800: '#3a414f',
          900: '#1a1d26',
          950: '#0c0e14',
        },
        accent: {
          50: '#eef4ff',
          100: '#d9e6ff',
          200: '#bcd3ff',
          300: '#8fb6ff',
          400: '#5b8eff',
          500: '#376bff',
          600: '#2050f5',
          700: '#193fe1',
          800: '#1a35b6',
          900: '#1c338f',
          950: '#152057',
        },
        success: {
          50: '#edfcf5',
          100: '#d4f9e6',
          200: '#abf0d2',
          300: '#71e2b8',
          400: '#34cc97',
          500: '#11b07d',
          600: '#079066',
          700: '#097253',
          800: '#0b5a44',
          900: '#0b4a39',
        },
        warning: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        error: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      fontSize: {
        '2xs': ['0.6875rem', { lineHeight: '1rem' }],
      },
      boxShadow: {
        soft: '0 1px 2px rgba(12,14,20,0.04), 0 8px 24px -8px rgba(12,14,20,0.08)',
        card: '0 1px 2px rgba(12,14,20,0.04), 0 12px 32px -12px rgba(12,14,20,0.12)',
        glow: '0 0 0 1px rgba(55,107,255,0.18), 0 8px 40px -8px rgba(55,107,255,0.35)',
        'glow-dark': '0 0 0 1px rgba(91,142,255,0.25), 0 12px 60px -12px rgba(43,80,245,0.55)',
      },
      borderRadius: {
        xl: '0.875rem',
        '2xl': '1.125rem',
        '3xl': '1.5rem',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-fast': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'float-slow': {
          '0%,100%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(-14px) translateX(4px)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.9)', opacity: '0.7' },
          '70%': { transform: 'scale(1.6)', opacity: '0' },
          '100%': { transform: 'scale(1.6)', opacity: '0' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'draw-line': {
          '0%': { strokeDashoffset: '200' },
          '100%': { strokeDashoffset: '0' },
        },
        'wave': {
          '0%,100%': { transform: 'scaleY(0.4)' },
          '50%': { transform: 'scaleY(1)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease-out both',
        'fade-in-fast': 'fade-in-fast 0.3s ease-out both',
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float-slow 9s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 2.4s cubic-bezier(0.4,0,0.2,1) infinite',
        shimmer: 'shimmer 2s infinite',
        'spin-slow': 'spin-slow 18s linear infinite',
        'scale-in': 'scale-in 0.4s ease-out both',
        'slide-up': 'slide-up 0.7s ease-out both',
        'draw-line': 'draw-line 1.6s ease-out forwards',
        wave: 'wave 1.1s ease-in-out infinite',
      },
      backgroundImage: {
        'grid-faint':
          'linear-gradient(to right, rgba(12,14,20,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(12,14,20,0.04) 1px, transparent 1px)',
        'grid-faint-dark':
          'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)',
        'radial-fade':
          'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(55,107,255,0.10), transparent 70%)',
      },
      backgroundSize: {
        grid: '44px 44px',
      },
    },
  },
  plugins: [],
};
