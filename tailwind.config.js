/** @type {import('tailwindcss').Config} */
module.exports = {

    content: [
      "./src/**/*.{js,jsx,ts,tsx}",  // adjust this path based on your project structure
    ],
    theme: {
      extend: {
        colors: {
          'card': 'white',
          'card-foreground': '#1f2937',
          'ring': '#2563eb',
          'ring-offset': 'white',
        },
      },
    },
    plugins: [],
  
}
