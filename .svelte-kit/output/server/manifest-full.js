export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.598b8a97.js","app":"_app/immutable/entry/app.a24038ef.js","imports":["_app/immutable/entry/start.598b8a97.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/singletons.c1cfe0cf.js","_app/immutable/entry/app.a24038ef.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.04375acc.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
