/* empty css                                    */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent, e as addAttribute, f as renderHead, g as renderSlot, h as createAstro, s as spreadAttributes } from '../astro_BHXjMXjO.mjs';
import 'kleur/colors';
import 'html-escaper';
import { jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
/* empty css                                    */
/* empty css                                    */
import 'clsx';
import { motion } from 'framer-motion';
/* empty css                                    */

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };
  return /* @__PURE__ */ jsx("button", { type: "button", onClick: toggleTheme, children: darkMode ? "☀️" : "🌙" });
};

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="flex justify-between items-center py-5 mb-10 w-full max-w-[1120px] mx-auto px-4 md:px-0"> <div class="group relative overflow-hidden w-16 h-16"> <a href="../camiloPortfolio" class="block w-full h-full"> <img width="200" height="200" class="rounded-full w-full h-full object-cover opacity-100 transition-all duration-300 group-hover:opacity-0 group-hover:scale-110" src="https://media.licdn.com/dms/image/D4E03AQFmXTu7s8BSog/profile-displayphoto-shrink_200_200/0/1715217947266?e=1721865600&v=beta&t=ecBallBXH7v9OHUYNq_2Ds0jdHGtvhPvZSIhftsE3ps" alt="Logo de Camilo Caicedo"> <img width="200" height="200" class="rounded-full w-full h-full object-cover absolute top-0 left-0 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110" src="https://firebasestorage.googleapis.com/v0/b/camilo-portfolio-77b8a.appspot.com/o/Foxy-Blink-NBG.gif?alt=media&token=49a368b2-c0d9-424e-9d45-955a8e905b5e" alt="Logo alternativo de Camilo Caicedo"> </a> </div> <button id="menu-button" class="block md:hidden"> <svg class="w-8 h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> </button> <nav id="menu" class="hidden md:flex flex-col md:flex-row gap-y-2 md:gap-x-10 mt-4 md:mt-0 text-[#1d1735] dark:text-[#fafaf6]"> ${renderComponent($$result, "ThemeToggle", ThemeToggle, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/.dev/camiloPortafolio/src/components/ThemeToggle", "client:component-export": "default" })} <a href="../camiloPortfolio/#about" class="text-center md:text-left">About</a> <a href="../camiloPortfolio/#project" class="text-center md:text-left">Projects</a> <a href="../camiloPortfolio/#experience" class="text-center md:text-left">Experience</a> <a href="../camiloPortfolio/#education" class="text-center md:text-left">Education</a> </nav> </header>`;
}, "C:/.dev/camiloPortafolio/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-[#fafaf6] rounded-lg shadow m-4 dark:bg-[#0b0a0b] border dark:border-[#fafaf6]"> <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between"> <span class="text-sm text-[#1d1735] sm:text-center dark:text-[#fafaf6]">© 2024 <a href="https://paperfoxstudio.site/" class="hover:underline">Paper Fox Studio™.</a> 🦊🍃 All Rights Reserved. <a href="https://www.linkedin.com/in/midudev/">Thanks Midudev.</a> </span> </div> </footer>`;
}, "C:/.dev/camiloPortafolio/src/components/Footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$GoogleTag = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template([`<script type="text/partytown" async src="https://www.googletagmanager.com/gtag/js?id=G-M5YVBFZ208"><\/script> <script type="text/partytown">
    
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-M5YVBFZ208');
<\/script>`])));
}, "C:/.dev/camiloPortafolio/src/components/GoogleTag.astro", void 0);

const $$Astro$4 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description } = Astro2.props;
  return renderTemplate`<html lang="en" class="light"> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- Google tag-->${renderComponent($$result, "GoogleTag", $$GoogleTag, {})}<title>${title}</title>${renderHead()}</head> <body class="bg-white  flex flex-col items-center min-h-screen"> <!-- Fondo Modo Claro --> <div class="transition-all duration-500 ease-in-out fixed inset-0 -z-10 min-h-screen w-full bg-[#fafaf6] dark:bg-neutral-950  bg-[linear-gradient(to_right,rgba(0,182,142,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(232,182,142,0.06)_1px,transparent_1px)] dark:bg-none bg-[size:14px_24px]"> <div class="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px] "></div> </div> <!-- Contenedor principal para todo el sitio --> <div class="container mx-auto p-4 flex flex-col justify-center items-center"> ${renderComponent($$result, "Header", $$Header, {})} <main class="mt-8 w-full flex flex-col justify-center items-center"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </div> </body></html>`;
}, "C:/.dev/camiloPortafolio/src/layouts/Layout.astro", void 0);

const $$Astro$3 = createAstro();
const $$Badge = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Badge;
  const { id, content, bgColor, textColor, darkBgColor, darkTextColor } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<span${addAttribute(`text-sm font-semibold px-2 py-1 rounded-full 
         ${bgColor} ${textColor} 
         dark:${darkBgColor} dark:${darkTextColor} 
         border-#685af0`, "class")}> ${content} </span>`;
}, "C:/.dev/camiloPortafolio/src/components/Badge.astro", void 0);

const $$LinkedInTabler = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M8 11l0 5"></path><path d="M8 8l0 .01"></path><path d="M12 16l0 -5"></path><path d="M16 16v-3a2 2 0 0 0 -4 0"></path></svg>`;
}, "C:/.dev/camiloPortafolio/src/icons/LinkedInTabler.astro", void 0);

const buttonVariants = {
  hover: { scale: 1.1 },
  tap: { scale: 0.9 }
};
function SocialPills({ href, children, ...props }) {
  const handleClick = (event) => {
    if (href.startsWith("tel:")) {
      event.preventDefault();
      sendWhatsAppMessage();
    }
  };
  function sendWhatsAppMessage() {
    const phoneNumber = href.replace("tel:", "");
    const message = "Buen día Camilo !Tengo una idea increíble! ¿Quieres colaborar?";
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  }
  return /* @__PURE__ */ jsx(
    motion.a,
    {
      href,
      target: "_blank",
      variants: buttonVariants,
      whileHover: "hover",
      whileTap: "tap",
      onClick: handleClick,
      ...props,
      children: /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          className: "text-white bg-[#22282e] dark:bg-[#96acc8] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-3 text-center me-2 mb-2 flex items-center gap-x-2 mt-4",
          children
        }
      )
    }
  );
}

const $$Mail = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-mail"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path><path d="M3 7l9 6l9 -6"></path></svg>`;
}, "C:/.dev/camiloPortafolio/src/icons/Mail.astro", void 0);

const $$Github = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg>`;
}, "C:/.dev/camiloPortafolio/src/icons/Github.astro", void 0);

const $$Phone = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-phone"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path></svg>`;
}, "C:/.dev/camiloPortafolio/src/icons/Phone.astro", void 0);

const $$Astro$2 = createAstro();
const $$ExperienceItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ExperienceItem;
  const { title, description, link, date } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="mb-10 ms-4"> <div class="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border bg-white border-[#7d7385] dark:border-[#fafaf6] dark:bg-[#97acc6]"></div> <time class="mb-1 text-sm font-light leading-none text-[1d1735] dark:text-[#fafaf6]">${date}</time> <h3 class="text-lg font-semibold text-[#1d1735] dark:text-[#fafaf6] text-warp-base"> ${title} </h3> <p class="mb-4 opacity-80 text-base font-normal text-[##fafaf6] dark:text-[#fafaf6] text-pretty"> ${description} </p> ${link && renderTemplate`<a${addAttribute(link, "href")} class="inline-flex items-center px-4 py-2 text-sm font-medium text-[1d1735] bg-[
                685af0] border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-7
                00 dark:bg-[685af0] dark:text-[#fafaf6] dark:border-[#fafaf6] dark:hover:text-[#546bf2] dark:hover:bg-[#fafaf6] dark:focus:ring-[#546bf2]">
Learn more${""}${" "} <svg class="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path> </svg> </a>`} </li>`;
}, "C:/.dev/camiloPortafolio/src/components/ExperienceItem.astro", void 0);

const $$Experience = createComponent(($$result, $$props, $$slots) => {
  const EXPERIENCIE = [
    {
      date: "Aug. 2020 \u2013 Present \xB7 3 years 10 months",
      title: "Generalist Designer",
      company: "Instituto Latinoamericano para una Sociedad y un Derecho Alternativos - ILSA",
      description: "As ILSA's generalist designer, I specialize in web design, editorial design, illustration, branding, photography, and audiovisual production. I have successfully created and maintained a cohesive, harmonious, and distinctive visual identity for the institute, significantly enhancing its market presence. Additionally, I have led key projects that have contributed to the organization's growth and success.",
      link: "#"
    },
    {
      date: "May 2023 \u2013 Jul. 2023 \xB7 3 months",
      title: "Web Developer and Design",
      company: "Freelance",
      description: "Designed and developed individual WordPress websites, focusing on customized design strategies that highlight clients' professional strengths and create a distinctive brand image within their niche.",
      link: "#"
    },
    {
      date: "Jul. 2022 \u2013 Oct. 2022 \xB7 4 months",
      title: "Web Developer and Design",
      company: "Instituto Latinoamericano para una Sociedad y un Derecho Alternativos - ILSA",
      description: "I spearheaded the complete redesign of the institute's main website, establishing a robust and strategic corporate visual identity. We implemented effective communication channels with users, consolidated the institutional archive, and defined the aesthetics of the digital platform. This transformative project elevated the company's industry relevance, transitioning from a limited online presence to a platform with 15,000 unique visitors per month. Furthermore, we significantly improved SEO and site performance, ensuring an optimal user experience.",
      link: "#"
    },
    {
      date: "Jul. 2022 \u2013 Oct. 2022 \xB7 4 months",
      title: "Photographer and Videographer",
      company: "Renta F\xE1cil",
      description: "Provided audiovisual production services, including social media videos, corporate videos, and corporate photography sessions.",
      link: "#"
    },
    {
      date: "Jul. 2019 \u2013 Nov. 2019 \xB7 5 months",
      title: "Digital designer and photographer",
      company: "Aire libre y aventura",
      description: "I was part of the Kuerfit team, serving as a video editor, graphic designer, and photographer. I spearheaded the production of the video course 'Strength Training', created promotional videos and flyers for social media and the website, and provided photographic coverage of the 'Corre Chicaque event.'",
      link: "#"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<ol class="relative border-s border-[1d1735] dark:border-[1d1735]"> ${EXPERIENCIE.map((experience) => renderTemplate`<li> ${renderComponent($$result, "ExperienceItem", $$ExperienceItem, { ...experience })} </li>`)} </ol>`;
}, "C:/.dev/camiloPortafolio/src/components/Experience.astro", void 0);

const $$Astro$1 = createAstro();
const $$SectionContainer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SectionContainer;
  const { class: className, id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute("w-full max-auto lg:w-[950px] ${className}", "class")}> ${renderSlot($$result, $$slots["default"])} </section>`;
}, "C:/.dev/camiloPortafolio/src/components/SectionContainer.astro", void 0);

const $$Astro = createAstro();
const $$Arrow = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Arrow;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-trending-up-3"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M18 5l3 3l-3 3"></path><path d="M3 18h2.397a5 5 0 0 0 4.096 -2.133l4.014 -5.734a5 5 0 0 1 4.096 -2.133h3.397"></path></svg>`;
}, "C:/.dev/camiloPortafolio/src/icons/Arrow.astro", void 0);

const $$BentoGrid = createComponent(($$result, $$props, $$slots) => {
  const projects = [
    {
      id: 1,
      title: "Web Design",
      colS: "col-span-2",
      rowS: "row-span-1",
      bgColor: "bg-[#c5b6d2]",
      textColor: "text-[#343037]",
      darkBgColor: "dark:bg-[#343037]",
      darkTextColor: "dark:text-[#c5b6d2]",
      img: "https://firebasestorage.googleapis.com/v0/b/camilo-portfolio-77b8a.appspot.com/o/Dise%C3%B1oWeb.webp?alt=media&token=7df9723e-ef97-4bac-823d-e3ccd377f45b",
      link: "/web-design",
      classImg: "mx-auto"
    },
    {
      id: 2,
      title: "Graphic Design",
      colS: "col-span-2",
      rowS: "row-span-1",
      bgColor: "bg-[#2f413a]",
      textColor: "text-[#feebde]",
      darkBgColor: "dark:bg-[#21302b]",
      darkTextColor: "dark:text-[#feebde]",
      img: "https://firebasestorage.googleapis.com/v0/b/camilo-portfolio-77b8a.appspot.com/o/Dise%C3%B1o%20Grafico%20(2).webp?alt=media&token=4526b817-ecb5-4fb2-8317-f4ffda77d235",
      classImg: "mx-auto",
      link: "#"
    },
    {
      id: 3,
      title: "Editorial Design",
      colS: "col-span-3",
      rowS: "row-span-1",
      bgColor: "bg-[#95acca]",
      textColor: "text-[#22282e]",
      darkBgColor: "dark:bg-[#22282e]",
      darkTextColor: "dark:text-[#95acca]",
      img: "https://firebasestorage.googleapis.com/v0/b/camilo-portfolio-77b8a.appspot.com/o/Dise%C3%B1o-Editorial-Pj.webp?alt=media&token=4f812bd9-06bb-4532-9881-a62679e8ae3c",
      classImg: "mx-auto",
      link: "#"
    },
    {
      id: 4,
      title: "Personal projects",
      colS: "col-span-1",
      rowS: "row-span-2",
      bgColor: "bg-[#fed4bd]",
      textColor: "text-[#220902]",
      darkBgColor: "dark:bg-[#220902]",
      darkTextColor: "dark:text-[#fed4bd]",
      img: "https://firebasestorage.googleapis.com/v0/b/camilo-portfolio-77b8a.appspot.com/o/Foxy-Blink.gif?alt=media&token=6fdef4b7-2f2f-4fbd-94a0-65a59868bfee",
      classImg: "mx-auto",
      link: "https://paperfoxstudio.site"
    },
    {
      id: 5,
      title: "Photography and Video",
      colS: "col-span-4",
      rowS: "row-span-2",
      bgColor: "bg-[#a3cd9c]",
      textColor: "text-[#293327]",
      darkBgColor: "dark:bg-[#293327]",
      darkTextColor: "dark:text-[#a3cd9c]",
      img: "https://firebasestorage.googleapis.com/v0/b/camilo-portfolio-77b8a.appspot.com/o/Fotograf%C3%ADa.webp?alt=media&token=3a0a1443-7e07-451e-854a-635337d8c639",
      classImg: "mx-auto",
      link: "#"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="grid grid-cols-4 gap-4"> ${projects.map((project) => renderTemplate`<a${addAttribute(project.link, "href")}${addAttribute(project.id, "key?")}${addAttribute(`${project.colS} ${project.rowS}`, "class")}> <div${addAttribute(`
          p-6
          rounded-lg 
          shadow-md 
          dark:border-[#fafaf6] 
          flex
          flex-col
          items-start 
          hover:scale-105 
          duration-300 
          transition-transform 
          ease-in-out 
          ${project.bgColor} 
          ${project.textColor} 
          ${project.darkBgColor} 
          ${project.darkTextColor}`, "class")}> <h2 class="text-xl font-extrabold mb-2 text-left">${project.title}</h2> <img${addAttribute(project.img, "src")}${addAttribute(project.title, "alt")}${addAttribute(`rounded-lg ${project.classImg}`, "class")}> </div> </a>`)} </div>`;
}, "C:/.dev/camiloPortafolio/src/components/BentoGrid.astro", void 0);

const $$Bifcase = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-briefcase"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path><path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2"></path><path d="M12 12l0 .01"></path><path d="M3 13a20 20 0 0 0 18 0"></path></svg>`;
}, "C:/.dev/camiloPortafolio/src/icons/Bifcase.astro", void 0);

const $$Certificate = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-file-certificate"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M14 3v4a1 1 0 0 0 1 1h4"></path><path d="M5 8v-3a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-5"></path><path d="M6 14m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path><path d="M4.5 17l-1.5 5l3 -1.5l3 1.5l-1.5 -5"></path></svg>`;
}, "C:/.dev/camiloPortafolio/src/icons/Certificate.astro", void 0);

const $$Card = createComponent(($$result, $$props, $$slots) => {
  const education = [
    {
      id: "1",
      title: "Digital and Multimedia Designer",
      collage: "University Colegio Mayor de Cundinamarca",
      type: "Bachelor's degree",
      state: "Graduate",
      date: "2016 - 2020",
      rowSpam: "col-span-1",
      colSpam: "col-span-1 sm:col-span-2 md:col-span-2",
      bgColor: "bg-[#e56f45]",
      textColor: "text-[#170a08]",
      darkBgColor: "dark:bg-[#170a08]",
      darkTextColor: "dark:text-[#e56f45]"
    },
    {
      id: "2",
      title: "3D Animation for the Entertainment Industries",
      collage: "UNIR",
      type: "Master's Degree",
      state: "Student",
      date: "2024 - 2025",
      rowSpam: "col-span-1",
      colSpam: "col-span-1",
      bgColor: "bg-[#95acca]",
      textColor: "text-[#22282e]",
      darkBgColor: "dark:bg-[#22282e]",
      darkTextColor: "dark:text-[#95acca]"
    },
    {
      id: "3",
      title: "Video Game Programming: Unity and Unreal",
      collage: "UNIR",
      type: "Course",
      state: "Student",
      date: "2024 - 2025",
      rowSpam: "col-span-1",
      colSpam: "col-span-1",
      bgColor: "bg-[#f3cf59]",
      textColor: "text-[#584b25]",
      darkBgColor: "dark:bg-[#584b25]",
      darkTextColor: "dark:text-[#f3cf59]"
    },
    {
      id: "4",
      title: "LabDesign",
      collage: "UNIR",
      type: "Course",
      state: "Student",
      date: "2024",
      rowSpam: "col-span-1",
      colSpam: "col-span-1",
      bgColor: "bg-[#a3cd9c]",
      textColor: "text-[#293327]",
      darkBgColor: "dark:bg-[#293327]",
      darkTextColor: "dark:text-[#a3cd9c]"
    },
    {
      id: "5",
      title: "Leadership",
      collage: "MIU City University Miami",
      type: "Course",
      state: "Student",
      date: "2024",
      rowSpam: "col-span-1",
      colSpam: "col-span-1",
      bgColor: "bg-[#ebbbaa]",
      textColor: "text-[#51403a]",
      darkBgColor: "dark:bg-[#51403a]",
      darkTextColor: "dark:text-[#ebbbaa]"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"> ${education.map((edu) => renderTemplate`<div${addAttribute(edu.id, "key?")}${addAttribute(`
        ${edu.colSpam} 
        h-30
        flex flex-col
        justify-between
        p-6
        rounded-lg
        shadow-md
        hover:scale-105
        duration-300
        transition-transform
        ease-in-out
        ${edu.bgColor}
        ${edu.textColor}
        ${edu.darkBgColor}
        ${edu.darkTextColor}
      `, "class")}> <div class="mb-2"> <h3 class="text-2xl font-extrabold text-left">${edu.title}</h3> <h4 class="text-base font-bold tracking-wide text-left">${edu.collage}</h4> <h5 class="text-sm text-left mb-4">${edu.type}</h5> </div> <div class="flex justify-between items-end"> <p class="text-sm text-left">${edu.state}</p> <p class="text-sm text-left">${edu.date}</p> </div> </div>`)} </div>`;
}, "C:/.dev/camiloPortafolio/src/components/Card.astro", void 0);

const containerVariants = {
  initial: {
    transition: { staggerChildren: 0.1 }
  },
  animate: {
    transition: { staggerChildren: 0.1 }
  }
};
const FontWeightAnimation = ({ children }) => {
  return /* @__PURE__ */ jsx(motion.div, { variants: containerVariants, initial: "initial", animate: "animate", children });
};

const $$CamiloPortfolio = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Johan Caicedo - Portfolio", "description": "Johan Caicedo - Portfolio" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "about" }, { "default": ($$result3) => renderTemplate` <h1 class="text-4xl md:text-5xl font-bold text-primary mb-4 flex flex-row gap-4 dark:text-[#fafaf6]">
Hey, I'm Camilo
<a href="https://www.linkedin.com/in/johan-caicedo/" target="_blank" rel="noopener" class="flex justify-center items-center dark:text-[#fafaf6]"> ${renderComponent($$result3, "Badge", $$Badge, { "content": "Available for work", "bgColor": "bg-[#e46f4d]", "textColor": "text-[#170a08]", "darkBgColor": "dark:bg-[#170a08]", "darkTextColor": "dark:text-[#e46f4d]" })} </a> </h1> ${renderComponent($$result3, "FontWeightAnimation", FontWeightAnimation, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/.dev/camiloPortafolio/src/components/FontWeightAnimation", "client:component-export": "default" }, { "default": ($$result4) => renderTemplate` <h2 class="text-3xl md:text-2xl mb-4 dark:text-[#fafaf6]">
Digital and multimedia designer with 3 years of professional
          experience.
<br> <span class="text-2xl text-secondary">Design with <strong class="font-bold">soul</strong>, development
            with <strong class="font-bold">logic</strong>, animation with <strong class="font-bold">passion</strong>.</span> <br> <span class="text-sm">From Bogotá DC, Colombia.</span> </h2> ` })} <nav class="flex flex-wrap gap-2 mt-4"> ${renderComponent($$result3, "SocialPills", SocialPills, { "href": "https://www.linkedin.com/in/johan-caicedo/", "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/.dev/camiloPortafolio/src/components/SocialPills.jsx", "client:component-export": "default" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "LinkedIn", $$LinkedInTabler, { "class": "size-6 mr-1" })} LinkedIn
` })} ${renderComponent($$result3, "SocialPills", SocialPills, { "href": "mailto:camilo.design07@gmail.com", "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/.dev/camiloPortafolio/src/components/SocialPills.jsx", "client:component-export": "default" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "MailIcon", $$Mail, { "class": "size-6 mr-1" })} Mail
` })} ${renderComponent($$result3, "SocialPills", SocialPills, { "href": "https://github.com/JohanCaicedo", "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/.dev/camiloPortafolio/src/components/SocialPills.jsx", "client:component-export": "default" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "GithubIcon", $$Github, { "class": "size-6 mr-1" })} Github
` })} ${renderComponent($$result3, "SocialPills", SocialPills, { "href": "tel:+573114853833", "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/.dev/camiloPortafolio/src/components/SocialPills.jsx", "client:component-export": "default" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "PhoneIcon", $$Phone, { "class": "size-6 mr-1" })} Phone
` })} </nav> ` })} ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "experience" }, { "default": ($$result3) => renderTemplate` <h3 class="flex gap-2 items-center text-2xl md:text-3xl font-bold text-primary mb-6 mt-6 dark:text-[#fafaf6]"> ${renderComponent($$result3, "Arrow", $$Arrow, { "class": "size-6" })} Professional Experience
</h3> ${renderComponent($$result3, "Experience", $$Experience, {})} ` })} ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "projects" }, { "default": ($$result3) => renderTemplate` <section> <h3 class="flex gap-2 items-center text-2xl md:text-3xl font-bold text-primary mb-6 mt-6 dark:text-[#fafaf6]"> ${renderComponent($$result3, "Bifcase", $$Bifcase, { "class": "size-6" })} My Projects
</h3> ${renderComponent($$result3, "BentoGrid", $$BentoGrid, {})} </section> ` })} ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "education" }, { "default": ($$result3) => renderTemplate` <section> <h3 class="flex gap-2 items-center text-2xl md:text-3xl font-bold text-primary mb-6 mt-6 dark:text-[#fafaf6]"> ${renderComponent($$result3, "Certificate", $$Certificate, { "class": "size-6" })} Education
</h3> ${renderComponent($$result3, "Card", $$Card, {})} </section> ` })} </main> ` })}`;
}, "C:/.dev/camiloPortafolio/src/pages/camiloPortfolio.astro", void 0);

const $$file = "C:/.dev/camiloPortafolio/src/pages/camiloPortfolio.astro";
const $$url = "/camiloPortfolio";

const camiloPortfolio = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$CamiloPortfolio,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$SectionContainer as $, $$Badge as a, $$Layout as b, camiloPortfolio as c };
