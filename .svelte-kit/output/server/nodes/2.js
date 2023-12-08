

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.f3fe2304.js","_app/immutable/chunks/scheduler.22fe7610.js","_app/immutable/chunks/index.1cc7bd69.js","_app/immutable/chunks/paths.1e5cff34.js"];
export const stylesheets = ["_app/immutable/assets/2.6c527891.css"];
export const fonts = [];
