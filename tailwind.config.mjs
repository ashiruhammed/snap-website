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
        todo: 'url("/src/images/icon-todo.svg")',
        calendar: 'url("/src/images/icon-calendar.svg")',
        reminder: 'url("/src/images/icon-reminders.svg")',
        planning: 'url("/src/images/icon-planning.svg")',
        closeMenu: 'url("/src/images/icon-close-menu.svg")',
        menu: 'url("/src/images/icon-menu.svg")',
        arrowDown: 'url("/src/images/icon-arrow-down.svg")',
        arrowUp: 'url("/src/images/icon-arrow-up.svg")',
      },
    },
  },
  plugins: [],
};
