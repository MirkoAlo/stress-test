import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent } from '../astro.5350dda1.mjs';
import 'html-escaper';
/* empty css                           */
const $$Astro$1 = createAstro();
const $$Button = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Button;
  const { label, className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button${addAttribute(className, "class")}>${label}</button>`;
}, "C:/Users/Liqueedo/Documents/Develop/stress-test/src/components/Button.astro", void 0);

const $$Astro = createAstro();
const $$BlogList = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogList;
  return renderTemplate`${renderComponent($$result, "Button", $$Button, { "className": "secondary", "label": "test" })}`;
}, "C:/Users/Liqueedo/Documents/Develop/stress-test/src/pages/include/custom/blog/blog-list.astro", void 0);

const $$file = "C:/Users/Liqueedo/Documents/Develop/stress-test/src/pages/include/custom/blog/blog-list.astro";
const $$url = "/include/custom/blog/blog-list.html";

const blogList = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$BlogList,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Button as $, blogList as b };
