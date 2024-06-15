/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                'marble': 'url("./res/marble.jpg")'
            },
            colors: {
                'blue': '#d9edf8',
                'yellow': '#fdffb6',
                'green': '#b0ffad',
                'red': '#ffadad',
                'orange': '#ffd6a5',
                'purple': '#f4daf4',
                'brown': '#e7dfd9',
                'hover-shadow': 'rgba(0,0,0,0.1)'
            }
        },
    },
    plugins: [],
}

