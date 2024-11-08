/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
  	fontSize: {
  		xs: ["12px", "16px"],
  		sm: ["14px", "20px"],
  		base: ["16px", "19.5px"],
  		lg: ["18px", "21.94px"],
  		xl: ["20px", "24.38px"],
  		'2xl': ["24px", "29.26px"],
  		'3xl': ["28px", "50px"],
  		'4xl': ["48px", "58px"],
  		'8xl': ["96px", "106px"]
  	},
  	container: {
  		center: 'true',
  		padding: '15px',
  		screens: {
  			sm: '640px',
  			md: '768px',
  			lg: '960px',
  			xl: '1200px'
  		}
  	},
  	extend: {
  		fontFamily: {
  			sans: ['Oswald', 'sans-serif']
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
