

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.2a6ec4e6.js","_app/immutable/chunks/scheduler.22fe7610.js","_app/immutable/chunks/index.1cc7bd69.js","_app/immutable/chunks/singletons.1e63d3bb.js"];
export const stylesheets = [];
export const fonts = [];
