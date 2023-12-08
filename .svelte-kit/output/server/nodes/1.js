

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.06444986.js","_app/immutable/chunks/scheduler.22fe7610.js","_app/immutable/chunks/index.1cc7bd69.js","_app/immutable/chunks/singletons.b7d4ee24.js","_app/immutable/chunks/paths.1e5cff34.js"];
export const stylesheets = [];
export const fonts = [];
