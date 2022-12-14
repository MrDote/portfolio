/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            animation: {
                'move': 'move 6s infinite',
            },
            keyframes: {
                move: {
                    '33%': { transform : 'translatey(-1.1em)'},
                    '66%': { transform : 'translatey(-2.3em)'},
                },
            }
        },
    },
    plugins: [],
}
