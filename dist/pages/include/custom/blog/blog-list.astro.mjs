export { renderers } from '../../../../renderers.mjs';
export { onRequest } from '../../../../middleware2.mjs';
import '../../../../chunks/astro.5350dda1.mjs';
import 'html-escaper';
import 'url';
import 'path';

const page = () => import('../../../../chunks/pages/blog-list.astro.439adb21.mjs').then(n => n.b);

export { page };
