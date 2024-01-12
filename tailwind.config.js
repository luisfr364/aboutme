/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.{html,js}"],
    theme: {
        extend: {
            backgroundImage: {
                squares: "url('../assets/squares.png')",
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
};
