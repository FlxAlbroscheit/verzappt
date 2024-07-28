/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                "primary": "#00ffa5",
                "correct": "green",
                "incorrect": "red"
            }
        },
    },
    plugins: [],
}
