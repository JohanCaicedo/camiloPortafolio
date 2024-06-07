/* empty css                                    */
import { c as createComponent, r as renderTemplate, e as addAttribute, f as renderHead, g as renderSlot, h as createAstro, m as maybeRenderHead, d as renderComponent } from '../astro_BHXjMXjO.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                                    */
/* empty css                          */

const $$Astro = createAstro();
const $$LayoutStudio = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LayoutStudio;
  const { description, title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.9),rgba(255,255,255,0))]"></div> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/.dev/camiloPortafolio/src/layouts/LayoutStudio.astro", void 0);

const $$Button = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover
:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 transition-all hover:scale-110">Johan Caicedo's portfolio</button> <!-- <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Johan Caicedo Portfolio</button> -->`;
}, "C:/.dev/camiloPortafolio/src/components/Button.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "LayoutStudio", $$LayoutStudio, { "title": "Paper Fox Studio", "description": "Paper Fox Studio's web site" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex justify-center"> <section class="w-full lg:w-[740px] mx-auto py-44"> <section class="flex flex-col items-center"> <h1 class="text-wihite text-5xl font-bold flex flex-row gap-x-4 pb-4">
Paper Fox Studio's web site
</h1> <h4 class="text-wihite text-3xl font-bold flex flex-row gap-x-4 pb-4">
It's under construction</h4> <p>We're working to be online as soon as possible</p> <div class="mt-10"> <a href="/camiloPortfolio/">${renderComponent($$result2, "ButtonPortfolio", $$Button, {})}</a> </div> </section> </section></main> ` })}`;
}, "C:/.dev/camiloPortafolio/src/pages/index.astro", void 0);

const $$file = "C:/.dev/camiloPortafolio/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
