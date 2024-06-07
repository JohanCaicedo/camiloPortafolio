import { renderers } from './renderers.mjs';
import { manifest } from './manifest_kaMiQDsC.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_B1hR2MrY.mjs');
const _page1 = () => import('./chunks/camiloPortfolio_DO0-Zas6.mjs');
const _page2 = () => import('./chunks/web-design_Czsu8vm4.mjs');
const _page3 = () => import('./chunks/index_CCdGLHR3.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/camiloPortfolio.astro", _page1],
    ["src/pages/web-design.astro", _page2],
    ["src/pages/index.astro", _page3]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "377f3e5e-3b91-4b1d-8bec-c33a80108094"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
