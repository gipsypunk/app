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
		client: {"start":"_app/immutable/entry/start.5b2265cb.js","app":"_app/immutable/entry/app.290def23.js","imports":["_app/immutable/entry/start.5b2265cb.js","_app/immutable/chunks/scheduler.22fe7610.js","_app/immutable/chunks/singletons.0d509052.js","_app/immutable/chunks/paths.1899d157.js","_app/immutable/entry/app.290def23.js","_app/immutable/chunks/scheduler.22fe7610.js","_app/immutable/chunks/index.1cc7bd69.js"],"stylesheets":[],"fonts":[]},
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
