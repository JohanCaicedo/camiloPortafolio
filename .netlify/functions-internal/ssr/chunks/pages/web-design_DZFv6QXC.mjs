/* empty css                                    */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent } from '../astro_BHXjMXjO.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$SectionContainer, a as $$Badge, b as $$Layout } from './camiloPortfolio_CyRsoWCF.mjs';
import 'clsx';
/* empty css                                    */

const $$ProjectSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="relative"> <img class="rounded-lg w-full" src="https://firebasestorage.googleapis.com/v0/b/camilo-portfolio-77b8a.appspot.com/o/ILSA-Web-mockup.jpg?alt=media&token=55e6edaf-40ac-4838-8773-d601adf03577" alt="ILSA Web Redesign" width="950" height="475"> <div class="absolute top-2 left-2 p-4 text-white rounded-lg"> <h1 class="text-xl font-bold mb-2 text-right">Web Redesign - ILSA</h1> </div> </section>`;
}, "C:/.dev/camiloPortafolio/src/components/ProjectSection.astro", void 0);

const $$Palette = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-palette"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25"></path><path d="M8.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M12.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M16.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path></svg>`;
}, "C:/.dev/camiloPortafolio/src/icons/Palette.astro", void 0);

const $$WebDesign = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Web Design - Portfolio", "description": "Web Design projects" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "SectionContainer", $$SectionContainer, {}, { "default": ($$result3) => renderTemplate` <h1 class="text-right text-sm md:text-base lg:text-lg font-medium text-[#1e1e1e] dark:text-[#fafaf6] mb-4">
portfolio/web-design
</h1> ${renderComponent($$result3, "ProjectSection", $$ProjectSection, {})} <nav class="flex gap-2 mt-4 justify-center mb-4"> ${renderComponent($$result3, "Badge", $$Badge, { "content": "Web Design", "bgColor": "bg-[#e46f4d]", "textColor": "text-[#4a241b]", "darkBgColor": "dark:bg-[#4a241b]", "darkTextColor": "dark:text-[#e46f4d]" })} ${renderComponent($$result3, "Badge", $$Badge, { "content": "Photo / Image Editing", "bgColor": "bg-[#97acc6]", "textColor": "text-[#22282e]", "darkBgColor": "dark:bg-[#22282e]", "darkTextColor": "dark:text-[#97acc6]" })} ${renderComponent($$result3, "Badge", $$Badge, { "content": "Illustration", "bgColor": "bg-[#f1cd71]", "textColor": "text-[#584b2c]", "darkBgColor": "dark:bg-[#584b2c]", "darkTextColor": "dark:text-[#f1cd71]" })} ${renderComponent($$result3, "Badge", $$Badge, { "content": "WordPress", "bgColor": "bg-[#a3cda1]", "textColor": "text-[#293329]", "darkBgColor": "dark:bg-[#293329]", "darkTextColor": "dark:text-[#a3cda1]" })} </nav> <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8"> <div> <h3 class="text-2xl md:text-3xl font-bold text-[#1e1e1e] dark:text-[#fafaf6] mb-6">
Project Details
</h3> <p class="dark:text-gray-200">
I served as the lead designer in creating the new website for ILSA, a non-governmental organization with over 40 years of experience focusing its efforts on supporting social movements, grassroots organizations, and disadvantaged sectors of society. This experience was rewarding, as it allowed me to apply my knowledge as a designer, utilizing Design Thinking as the primary methodology.
</p> </div> <div> <h3 class="text-2xl md:text-3xl font-bold text-[#1e1e1e] dark:text-[#fafaf6] mb-6">
About the company
</h3> <p class="dark:text-gray-200">
ILSA, founded in 1978 as an NGO, focuses on alternative legal services and supporting social movements, grassroots organizations, and disadvantaged sectors. Initially operating in various Latin American countries, it has focused on Colombia since 1988.
</p> </div> <div class="col-span-1 md:col-span-2"> <p class="dark:text-gray-200"> <strong>My role:</strong> Web Designer, UI/UX <strong>Team:</strong> <a class="font-semibold text-[#343037] dark:text-[#fafaf6]" href="https://www.instagram.com/quas.art/" target="_blank">
Viviana Tovar
</a> – Illustration Support <strong>Duration:</strong> 4 months
</p> </div> </div> <div class="grid grid-cols-1 md:grid-cols-2 mt-10 gap-6"> <div> <img width="572" height="572" alt="ILSA-Web-mockup-1" class="rounded-lg w-full" src="https://firebasestorage.googleapis.com/v0/b/camilo-portfolio-77b8a.appspot.com/o/ILSA-Web-mockup-1.jpg?alt=media&token=48da8e04-a1c3-4fc0-9ac7-6bf135017fc5"> </div> <div class="space-y-6"> <h4 class="text-2xl md:text-3xl font-bold text-[#1e1e1e] dark:text-[#fafaf6] mb-6">
Context
</h4> <p class="dark:text-gray-200">
As a starting point, I established an overall goal for the project, derived from an interview with ILSA's board of directors. During this conversation, the need to improve the visual representation of the website and ensure proper readability for visitors was identified. To address this issue, we chose to work with a simplified version of Design Thinking, with a special focus on the construction phase. This was due to the client's emphasis on the aesthetic aspect of the page.
</p> </div> <div> <h4 class="text-lg md:text-3xl font-bold text-[#1e1e1e] dark:text-[#fafaf6] mb-6">
Overall Objective
</h4> <p class="dark:text-gray-200">
Provide an accurate, coherent, and aesthetically pleasing communication tool. Through a design process, establish a creative foundation to continue evolving the identity, hand in hand with the organization's growth.
</p> </div> <div> <h4 class="text-lg md:text-3xl font-bold text-[#1e1e1e] dark:text-[#fafaf6] mb-6">
Challenges
</h4> <p class="dark:text-gray-200">
ILSA lacked an online presence commensurate with its relevance in the sector. Additionally, it did not have a defined visual identity or communication language. Furthermore, the website was not optimized for SEO search engines.
</p> </div> </div> <section class="grid grid-cols-2 sm:grid-cols-4 mt-5 gap-4 justify-items-center"> <span class="flex flex-col items-center"> <p class="text-center text-lg font-semibold text-[#1e1e1e] dark:text-[#fafaf6]">Map</p> <p class="text-center text-sm font-normal dark:text-gray-200">Delimit</p> <div class="bg-[#9695b5] w-28 h-28 rounded-lg mt-4"></div> </span> <span class="flex flex-col items-center"> <p class="text-center text-lg font-semibold text-[#1e1e1e] dark:text-[#fafaf6]">Explore</p> <p class="text-center text-sm font-normal dark:text-gray-200">Understanding</p> <div class="bg-[#7544a6] w-28 h-28 rounded-lg mt-4"></div> </span> <span class="flex flex-col items-center"> <p class="text-center text-lg font-semibold text-[#1e1e1e] dark:text-[#fafaf6]">Build</p> <p class="text-center text-sm font-normal dark:text-gray-200">Develop</p> <div class="bg-[#3d4a98] w-32 h-32 rounded-lg mt-4"></div> </span> <span class="flex flex-col items-center"> <p class="text-center text-lg font-semibold text-[#1e1e1e] dark:text-[#fafaf6]">Test</p> <p class="text-center text-sm font-normal dark:text-gray-200">Feedback</p> <div class="bg-[#f0e2d4] w-24 h-24 rounded-lg mt-4 border border-gray-800 dark:border-gray-200"></div> </span> </section> <section> <h3 class="flex gap-2 items-center text-2xl md:text-3xl font-bold text-[#1e1e1e] dark:text-[#fafaf6] mb-6 mt-6"> ${renderComponent($$result3, "Palette", $$Palette, { "class": "size-6" })} Visual Identity
</h3> <div class="grid grid-cols-1 sm:grid-cols-6 gap-4 mt-6"> <h4 class="text-xl font-bold text-[#1e1e1e] dark:text-[#fafaf6] col-span-1">
Color Palette
</h4> <p class="col-span-2 sm:col-span-3 dark:text-gray-200">
The construction of the visual identity was created through market research aimed at identifying common points and thereby understanding the visual language used by entities participating in this niche.
</p> <p class="col-span-2 dark:text-gray-200">
With that information, a distinctive color palette was created, aligned with the themes the client addresses and their fields of action.
</p> </div> <section class="grid grid-cols-2 sm:grid-cols-5 justify-items-center rounded-lg bg-[#fafaf6] dark:bg-[#22282e] shadow-sm mt-6 py-6"> <span class="flex flex-col items-center sm:col-span-1"> <div class="bg-[#454C73] w-24 h-24 rounded-lg mt-4"></div> <p class="text-center text-lg font-semibold text-[#1e1e1e] dark:text-[#fafaf6] mt-4">Primary</p> <p class="text-center text-sm font-normal dark:text-gray-200">Hex #454C73</p> </span> <span class="flex flex-col items-center"> <div class="bg-[#3B82F6] w-24 h-24 rounded-lg mt-4"></div> <p class="text-center text-lg font-semibold text-[#1e1e1e] dark:text-[#fafaf6] mt-4">Secondary</p> <p class="text-center text-sm font-normal dark:text-gray-200">Hex #3B82F6</p> </span> <span class="flex flex-col items-center"> <div class="bg-[#497CBF] w-24 h-24 rounded-lg mt-4"></div> <p class="text-center text-lg font-semibold text-[#1e1e1e] dark:text-[#fafaf6] mt-4">Tertiary</p> <p class="text-center text-sm font-normal dark:text-gray-200">Hex #497CBF</p> </span> <span class="flex flex-col items-center"> <div class="bg-[#454C73] w-24 h-24 rounded-lg mt-4"></div> <p class="text-center text-lg font-semibold text-[#1e1e1e] dark:text-[#fafaf6] mt-4">Tertiary 2</p> <p class="text-center text-sm font-normal dark:text-gray-200">Hex #454C73</p> </span> <span class="flex flex-col items-center"> <div class="bg-[#BFAD75] w-24 h-24 rounded-lg mt-4"></div> <p class="text-center text-lg font-semibold text-[#1e1e1e] dark:text-[#fafaf6] mt-4">Accent</p> <p class="text-center text-sm font-normal dark:text-gray-200">Hex #BFAD75</p> </span> </section> <section class="grid grid-cols-1 sm:grid-cols-6 mt-6"> <h4 class="text-xl font-bold text-[#1e1e1e] dark:text-[#fafaf6] col-span-1">Typography</h4> <p class="col-span-5 dark:text-gray-200">
Chosen based on readability and uniformity criteria.
</p> </section> <section class="grid grid-cols-1 sm:grid-cols-2 mt-6 gap-6"> <div> <h5 class="text-lg font-medium text-[#1e1e1e] dark:text-[#fafaf6]">Merriweather Sans</h5> <p class="mt-3 font-['Merriweather_Sans_Variable'] text-[#1e1e1e] dark:text-[#fafaf6]">
Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Ññ Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz 0 1 2 3 4 5 6 7 8 9 ¡ ! ¿ ? , . : ; - _ ' "
</p> </div> <div> <h5 class="text-lg font-medium text-[#1e1e1e] dark:text-[#fafaf6]">Source Sans Pro</h5> <p class="mt-3 font-['Source_Sans_Pro'] text-[#1e1e1e] dark:text-[#fafaf6]">
Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Ññ Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz 0 1 2 3 4 5 6 7 8 9 ¡ ! ¿ ? , . : ; - _ ' "
</p> </div> </section> </section> ` })} </main> ` })}`;
}, "C:/.dev/camiloPortafolio/src/pages/web-design.astro", void 0);

const $$file = "C:/.dev/camiloPortafolio/src/pages/web-design.astro";
const $$url = "/web-design";

export { $$WebDesign as default, $$file as file, $$url as url };
