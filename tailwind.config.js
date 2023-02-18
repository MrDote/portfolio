/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {

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
        require('tailwind-scrollbar'),
    ],
}
