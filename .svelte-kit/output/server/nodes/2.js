

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.dbfd2718.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.f3d62a61.js"];
export const stylesheets = [];
export const fonts = [];
