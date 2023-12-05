

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.4d8a9a22.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.04375acc.js"];
export const stylesheets = ["_app/immutable/assets/2.6c527891.css"];
export const fonts = [];
