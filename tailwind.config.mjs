/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx,mdx,html}",
        "./src/Components/**/*.{js,ts,jsx,tsx,mdx,html}",
        "./src/Layouts/**/*.{js,ts,jsx,tsx,mdx,html}",
        "./src/Libs/**/*.{js,ts,jsx,tsx,mdx,html}",
        "./src/Utils/**/*.{js,ts,jsx,tsx,mdx,html}",
      ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter',...defaultTheme.fontFamily.sans],
                unbound: ['Unbounded',...defaultTheme.fontFamily.sans],
            },
            colors: {
                'primary': '#3BC2DB',
            },
        },

    },
    plugins: [],
}