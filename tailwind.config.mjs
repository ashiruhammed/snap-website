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
        todo: 'url("/src/icon-todo.svg")',
        calendar: 'url("/src/icon-calendar.svg")',
        reminder: 'url("/src/icon-reminders.svg")',
        planning: 'url("/src/icon-planning.svg")',
        closeMenu: 'url("/src/icon-close-menu.svg")',
        menu: 'url("/src/icon-menu.svg")',
        arrowDown: 'url("/src/icon-arrow-down.svg")',
        arrowUp: 'url("/src/icon-arrow-up.svg")',
      },
    },
  },
  plugins: [],
};
