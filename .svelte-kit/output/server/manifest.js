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
		client: {"start":"_app/immutable/entry/start.e34a6e68.js","app":"_app/immutable/entry/app.df5b3437.js","imports":["_app/immutable/entry/start.e34a6e68.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/singletons.8d04a7f3.js","_app/immutable/entry/app.df5b3437.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.7ac8b484.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
