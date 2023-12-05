

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.c6de1ecd.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.04375acc.js","_app/immutable/chunks/singletons.c1cfe0cf.js"];
export const stylesheets = [];
export const fonts = [];
