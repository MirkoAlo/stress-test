import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead } from '../astro.5350dda1.mjs';
import 'html-escaper';

const $$Astro = createAstro();
const $$SectionSidebar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SectionSidebar;
  return renderTemplate`${maybeRenderHead()}<div>test include 2</div>`;
}, "C:/Users/Liqueedo/Documents/Develop/stress-test/src/pages/include/custom/commenti/section-sidebar.astro", void 0);

const $$file = "C:/Users/Liqueedo/Documents/Develop/stress-test/src/pages/include/custom/commenti/section-sidebar.astro";
const $$url = "/include/custom/commenti/section-sidebar.html";

export { $$SectionSidebar as default, $$file as file, $$url as url };
