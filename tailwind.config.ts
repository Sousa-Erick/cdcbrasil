
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '1rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Cores primárias da paleta
				'pantone-171c': '#EB5E57',  // salmão/coral
				'pantone-2935c': '#1961AC', // azul
				// Cores secundárias da paleta
				'pantone-420c': '#C4CECA',  // cinza esverdeado
				'pantone-420c-66': '#D3DFDD', // cinza claro 1
				'pantone-420c-33': '#E6EDEC', // cinza claro 2
				'pantone-485c': '#D3242D',  // vermelho
				'pantone-171c-20': '#FBDEDF', // rosa claro
				'pantone-2935c-20': '#DFEAF3', // azul claro
				
				// Mantém as cores existentes com os nomes atualizados
				salmon: {
					DEFAULT: '#EB5E57', // PANTONE 171C
					500: '#EB5E57',
					600: '#E34840',
					700: '#D3242D', // PANTONE 485C
					light: '#FBDEDF', // PANTONE 171C - 20%
				},
				blue: {
					DEFAULT: '#1961AC', // PANTONE 2935C
					500: '#1961AC',
					600: '#0F55A0',
					700: '#15365D',
					800: '#102a4a',
					light: '#DFEAF3', // PANTONE 2935C - 20%
				},
				gray: {
					DEFAULT: '#C4CECA', // PANTONE 420C
					100: '#E6EDEC', // PANTONE 420C - 33%
					200: '#D3DFDD', // PANTONE 420C - 66%
					300: '#C4CECA', // PANTONE 420C
					// Manter outras variações de cinza para compatibilidade
					400: '#9CA3AF',
					500: '#6B7280',
					600: '#4B5563',
					700: '#374151',
					800: '#1F2937',
					900: '#111827',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			boxShadow: {
				'canny-sm': '0 2px 8px rgba(0, 0, 0, 0.05)',
				'canny-md': '0 4px 20px rgba(0, 0, 0, 0.08)',
				'canny-lg': '0 8px 30px rgba(0, 0, 0, 0.12)',
				'canny-xl': '0 15px 50px rgba(0, 0, 0, 0.15)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-out': {
					'0%': { opacity: '1', transform: 'translateY(0)' },
					'100%': { opacity: '0', transform: 'translateY(10px)' }
				},
				'slide-in': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(0)' }
				},
				'slide-out': {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(-100%)' }
				},
				'scale-in': {
					'0%': { opacity: '0', transform: 'scale(0.95)' },
					'100%': { opacity: '1', transform: 'scale(1)' }
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.4s ease-out',
				'fade-in-slow': 'fade-in 0.6s ease-out',
				'fade-in-fast': 'fade-in 0.2s ease-out',
				'slide-in': 'slide-in 0.3s ease-out',
				'slide-out': 'slide-out 0.3s ease-out',
				'scale-in': 'scale-in 0.3s ease-out',
			},
			transitionDuration: {
				'2000': '2000ms',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
