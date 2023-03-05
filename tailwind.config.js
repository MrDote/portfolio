/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    mode: 'jit',
    darkMode: 'class',
    theme: {
        extend: {

            boxShadow: {
                'dark-button': '0 0 6px 1px',
                'dark-navbar': '-6px 1px 5px 2px',
                // 'dark-button': '-6px 1px 5px 2px',
            },

            colors: {
                //! --primary-bg-color
                'bg-light': '#EBECF0',
                //! --secondary-bg-color
                'bg-light-2': 'rgb(209, 214, 222)',
                //! --primary-text-color
                'text-light': '#1d3145',
                //! --primary-border-color
                'border-light': 'rgb(244 244 245)',
                //! --form-color-red
                'red-light': '#f87171',
                //! --form-color-shaddow
                'shadow-light': '#BABECC',
                'skills-light': '#94A3B8',


                'bg-dark': '#101735',
                'bg-dark-2': '#101735', //???
                'text-dark': '#ffffff',
                // finish colors:
                'border-dark': 'rgb(28, 62, 118)',
                'red-dark': '#f87171',
                'shadow-dark': '#BABECC',
                'skills-dark': '#94A3B8',
            },

            fontFamily: {
                Montserrat: ["Montserrat", ...defaultTheme.fontFamily.sans],
            },

            animation: {
                'move': 'move 6s infinite',
                'slide': 'slide 8s steps(4) infinite',
                'type-5': 'typefive 2s steps(6) infinite',
                'type-4': 'typefour 2s steps(5) infinite',
                'type-7': 'typeseven 2s steps(8) infinite',
                'slideleft': 'slideDownTop 2s ease-out 0s 1',
            },
            keyframes: {
                move: {
                    '33%': { transform : 'translatey(-1.2em)' },
                    '66%': { transform : 'translatey(-2.3em)' },
                },
                typefive: {
                    '0%': { transform : 'translateX(0)' },
                    '100%': { transform : 'translateX(7.4rem)' },
                },
                slide: {
                    '0%': { top: '0' },
                    '100%': { top: '-14rem' },
                },
                typefour: {
                    '0%': { transform : 'translateX(0)' },
                    '100%': { transform : 'translateX(6.2rem)' },
                },
                typeseven: {
                    '0%': { transform : 'translateX(0)' },
                    '100%': { transform : 'translateX(10rem)' },
                },
                slideDownTop: {
                    '0%': { transform : 'translateY(0)' },
                    '33%': { transform : 'translateY(100%)' },
                    '66%': { transform : 'translateY(-100%)' },
                },
            }
        },
    },
    plugins: [
    ],
}
