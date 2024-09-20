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
    'crypto-black': '#0B0B0F',
    'crypto-gradient-1': '#18C8FF',
    'crypto-gradient-2': '#933FFE',
    'crypto-bg-card': '#1A1B23',
  },
  extend: {},
};
export const plugins = [];