/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          gray: "hsl(0, 0%, 41%)",
          DEFAULT: "hsl(0, 0%, 98%)",
        },
      },
      content: {
        todo: 'url("/icon-todo.svg")',
        calendar: 'url("/icon-calendar.svg")',
        reminder: 'url("/icon-reminders.svg")',
        planning: 'url("/icon-planning.svg")',
        closeMenu: 'url("/icon-close-menu.svg")',
        menu: 'url("/icon-menu.svg")',
        arrowDown: 'url("/icon-arrow-down.svg")',
        arrowUp: 'url("/icon-arrow-up.svg")',
      },
    },
  },
  plugins: [],
};
