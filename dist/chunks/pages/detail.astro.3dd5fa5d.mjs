import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent } from '../astro.5350dda1.mjs';
import 'html-escaper';
import { $ as $$Base } from './cronaca.astro.38eedfd7.mjs';
import { $ as $$Button } from './blog-list.astro.439adb21.mjs';
/* empty css                        *//* empty css                   *//* empty css                               *//* empty css                           */
const $$Astro = createAstro();
const $$Detail = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Detail;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Detail" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Button", $$Button, { "className": "secondary", "label": "test" })}
` })}`;
}, "C:/Users/Liqueedo/Documents/Develop/stress-test/src/pages/view/detail.astro", void 0);

const $$file = "C:/Users/Liqueedo/Documents/Develop/stress-test/src/pages/view/detail.astro";
const $$url = "/view/detail.html";

export { $$Detail as default, $$file as file, $$url as url };
