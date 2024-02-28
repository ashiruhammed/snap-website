/* empty css                          */
import { c as createAstro, b as createComponent, r as renderTemplate, f as renderHead, g as renderComponent, h as renderSlot, e as addAttribute } from '../astro_BwmddKSx.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Image } from './generic_CDSR3f-p.mjs';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useState } from 'react';

function SubList({
  name,
  children
}) {
  const [openList, setOpenList] = useState(false);
  return /* @__PURE__ */ jsxs("li", { className: "relative group", children: [
    /* @__PURE__ */ jsx(
      "a",
      {
        className: `capitalize ${openList ? "after:content-arrowUp" : "after:content-arrowDown"} after:ml-1 md:group-hover:after:content-arrowUp md:mt-8`,
        href: `#${name}`,
        onClick: () => {
          console.log("click");
          setOpenList((open) => !open);
        },
        children: name
      }
    ),
    /* @__PURE__ */ jsx(
      "ul",
      {
        className: `md:absolute ${openList ? "block" : "hidden"} md:block min-w-max p-4 md:rounded-lg md:shadow-md mt-2 md:mt-0 md:opacity-0 md:group-hover:opacity-100 md:invisible md:group-hover:visible right-0 font-medium flex flex-col gap-5
`,
        children
      }
    )
  ] });
}

function Nav() {
  const [openMenu, setOpenMenu] = useState(false);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(
      "nav",
      {
        className: `bg-white w-1/2 pt-28 px-8 md:p-0 md:w-auto md:bg-transparent right-0 top-0 bottom-0 fixed flex flex-col md:flex-row md:static basis-full md:items-center md:justify-between ${!openMenu ? "translate-x-full" : "translate-x-0"}  md:translate-x-0 transition-translate-x duration-200 z-50`,
        children: [
          /* @__PURE__ */ jsxs("ul", { className: "flex flex-col md:flex-row md:gap-8 gap-4 text-primary-gray", children: [
            /* @__PURE__ */ jsxs(SubList, { name: "features", children: [
              /* @__PURE__ */ jsx("li", { className: "before:content-todo", children: "Todo List" }),
              /* @__PURE__ */ jsx("li", { className: "before:content-calendar", children: "Calendar" }),
              /* @__PURE__ */ jsx("li", { className: "before:content-reminder", children: "Reminders" }),
              /* @__PURE__ */ jsx("li", { className: "before:content-planning", children: "Planning" })
            ] }),
            /* @__PURE__ */ jsxs(SubList, { name: "company", children: [
              /* @__PURE__ */ jsx("li", { children: "History" }),
              /* @__PURE__ */ jsx("li", { children: "Our Team" }),
              /* @__PURE__ */ jsx("li", { children: "Blog" })
            ] }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#career", children: "Careers" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#about", children: "About" }) })
          ] }),
          /* @__PURE__ */ jsxs("menu", { className: "flex items-center gap-4 flex-col md:flex-row text-center absolute bottom-24 inset-x-10 md:static justify-end", children: [
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#login", children: "Login" }) }),
            /* @__PURE__ */ jsx("li", { className: "border-2 border-current px-4 py-2 rounded-2xl w-full md:w-auto", children: /* @__PURE__ */ jsx("a", { href: "#register", children: "Register" }) })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "md:hidden", children: [
      !openMenu && /* @__PURE__ */ jsx(
        "button",
        {
          className: "before:content-menu z-50 relative",
          onClick: () => {
            setOpenMenu((menu) => !menu);
          }
        }
      ),
      openMenu && /* @__PURE__ */ jsx(
        "button",
        {
          className: "before:content-closeMenu z-50 relative",
          onClick: () => setOpenMenu((menu) => !menu)
        }
      )
    ] }),
    openMenu && /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute inset-0 bg-black/25 z-10",
        onClick: () => setOpenMenu((menu) => !menu)
      }
    )
  ] });
}

const $$Astro$1 = createAstro();
const $$Default = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Default;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@300;400;500&family=Montserrat:wght@500&display=swap" rel="stylesheet"><title>Document</title>${renderHead()}</head> <body class="max-w-[1600px] mx-auto bg-primary"> <header class="flex gap-28 py-8 justify-between items-center px-4"> <h1 class="text-4xl font-bold">snap</h1> ${renderComponent($$result, "Nav", Nav, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Hammed/Desktop/simple-project/src/components/nav.tsx", "client:component-export": "default" })} </header> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/Hammed/Desktop/simple-project/src/layouts/default.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Astro</title>${renderHead()}</head> <body> ${renderComponent($$result, "Layout", $$Default, {}, { "default": ($$result2) => renderTemplate` <main class="lg:grid grid-cols-2 relative md:px-16 -z-50 py-10"> <picture class="order-2"> <source media="(min-width:768px)" class="max-h-[100px]" srcset="/src/images/image-hero-desktop.png"> <img src="/src/images/image-hero-mobile.png" alt="hero image" loading="lazy" class="max-h-[600px] w-full mx-auto" decoding="async" style="width:auto;"> </picture> <section class="text-center lg:text-left space-y-4 lg:space-y-16 pt-8 order-1"> <h2 class="text-4xl font-semibold md:text-7xl leading-16 text-wrap">
Make <br class="hidden lg:block"> remote work
</h2> <p class="text-primary-gray text-[18px] text-balance md:text-wrap line-clamp-3">
Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
</p> <a href="#learn more" class="text-white bg-black rounded-lg block w-fit mx-auto lg:mx-0 lg:px-8 px-5 py-4">Learn more</a> <div class="flex justify-between items-center px-4"> ${[
    "/src/images/client-databiz.svg",
    "/src/images/client-audiophile.svg",
    "/src/images/client-maker.svg",
    "/src/images/client-meet.svg"
  ].map((img) => renderTemplate`${renderComponent($$result2, "Image", $$Image, { "src": img, "height": 100, "width": 50, "alt": "sponsor-icon", "class": "w-24 h-10" })}`)} </div> </section> </main> ` })} </body></html>`;
}, "C:/Users/Hammed/Desktop/simple-project/src/pages/index.astro", void 0);

const $$file = "C:/Users/Hammed/Desktop/simple-project/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
