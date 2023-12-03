import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.1b792663.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.a81567bf.js"];
export const stylesheets = ["_app/immutable/assets/0.1e22567e.css"];
export const fonts = [];
