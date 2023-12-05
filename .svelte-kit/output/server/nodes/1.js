

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.a596a631.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.7ac8b484.js","_app/immutable/chunks/singletons.094174b6.js"];
export const stylesheets = [];
export const fonts = [];
