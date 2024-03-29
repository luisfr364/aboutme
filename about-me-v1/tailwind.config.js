/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*{html,js}"],
    theme: {
        extend: {
            backgroundImage: {
                squares: "url('../assets/squares.png')",
                patterm: "url('../assets/ttten.svg')",
                shortA: "url('../assets/arrow-down-short.svg')",
                shortB: "url('../assets/arrow-right-short.svg')",
            },
            keyframes: {
                opacity1: {
                    "0%": { opacity: "0" },
                    "50%": { opacity: "0" },
                    "80%": { opacity: "0.75" },
                    "100%": { opacity: "1" },
                },
            },
            animation: {
                opacityTransition: "opacity1 1s",
                opacityTransition2: "opacity1 1.4s",
            },
        },
    },
    plugins: [],
    darkMode: false,
};
