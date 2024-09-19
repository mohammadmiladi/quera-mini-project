/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

export const content = [
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  colors: {
    ...colors,
    'crypto-black': '#0B0B0F'
  },
  extend: {},
};
export const plugins = [];