import { c as createAstro, a as createComponent, r as renderTemplate, e as renderHead, f as renderSlot, d as renderComponent } from '../astro.5350dda1.mjs';
import 'html-escaper';
/* empty css                   *//* empty css                               */
const $$Astro$1 = createAstro();
const $$Base = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Base;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="it">
  <head>
    <meta charset="utf-8">
    <link rel="icon" type="image/svg+xml" href="/favicon.svg">
    <meta name="viewport" content="width=device-width">
    <meta name="generator" content="{Astro.generator}">
    <title>${title} - Gedi Design System</title>
  ${renderHead()}</head>
  <body>
    ${renderSlot($$result, $$slots["default"])}
  </body></html>`;
}, "C:/Users/Liqueedo/Documents/Develop/stress-test/src/template/Base.astro", void 0);

const $$Astro = createAstro();
const $$Cronaca = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Cronaca;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Cronaca" })}`;
}, "C:/Users/Liqueedo/Documents/Develop/stress-test/src/pages/view/cronaca.astro", void 0);

const $$file = "C:/Users/Liqueedo/Documents/Develop/stress-test/src/pages/view/cronaca.astro";
const $$url = "/view/cronaca.html";

const cronaca = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Cronaca,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Base as $, cronaca as c };
